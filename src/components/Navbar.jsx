import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import TypingText from "../components/TypingText";
import ProfileModal from "../components/ProfileModal";

const Navbar = () => {
  const [dark, setDark] = useState(() => localStorage.theme !== "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDark = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.theme = newDark ? "dark" : "light";
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const navLinks = ["home", "about", "projects", "skills", "contact"];

  return (
    <>
      <header className="bg-white dark:bg-slate-900 sticky top-0 shadow z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* 👇 Profile icon + name */}
          <h1 className="flex items-center gap-3 text-2xl font-bold text-primary min-w-[300px]">
            <img
              src={process.env.PUBLIC_URL + '/profile.jpg'}
              alt="Deepak R"
              onClick={() => setModalOpen(true)}
              className="w-10 h-10 rounded-full border border-primary shadow-sm cursor-pointer hover:scale-105 transition"
            />
            <TypingText
              text="Deepak R"
              speed={120}
              className="text-2xl font-bold text-primary"
            />
          </h1>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((id) => (
                <a key={id} href={`#${id}`} className="capitalize hover:text-primary">
                  {id}
                </a>
              ))}
            </nav>

            <button onClick={toggleDark}>
              {dark ? (
                <FaSun className="text-yellow-300 text-xl" />
              ) : (
                <FaMoon className="text-xl" />
              )}
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-2 bg-white dark:bg-slate-900 shadow">
            {navLinks.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="block text-lg capitalize hover:text-primary"
              >
                {id}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 🔥 Profile Modal */}
      <ProfileModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;
