import { FaTimes, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-colors duration-300">
      <div className="bg-white dark:bg-slate-800 rounded-lg p-6 max-w-sm w-full relative shadow-lg animated-border transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          <FaTimes size={20} />
        </button>

        {/* Modal Content */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={process.env.PUBLIC_URL + '/profile.jpg'}
            alt="Deepak R"
            className="w-20 h-20 rounded-full border-2 border-primary"
          />

          <h2 className="text-xl font-bold text-slate-800 dark:text-gray-300">
            Deepak R
          </h2>

          <p className="text-sm text-center text-gray-600 dark:text-gray-300">
            Software Engineer with a passion for frontend, backend, and building engaging web apps.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Deepak-0923"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-primary transition"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://linkedin.com/in/deepak-r-874b35292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-200 hover:text-primary transition"
            >
              <FaLinkedin className="text-xl" />
            </a>

            <a
              href="mailto:deepakr0923@gmail.com"
              className="text-gray-800 dark:text-gray-200 hover:text-primary transition"
            >
              <FaEnvelope className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
