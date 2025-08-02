import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaArrowDown } from "react-icons/fa";

const Home = () => {
  const [showThanks, setShowThanks] = useState(false);

  const handleDownload = () => {
    setShowThanks(true);
    setTimeout(() => setShowThanks(false), 2500);
  };

  return (
    <motion.section
  id="home"
  className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-sky-200 to-blue-300 dark:from-slate-800 dark:to-slate-900"
  initial={{ opacity: 0, y: 40 }}       // start hidden and slightly below
  animate={{ opacity: 1, y: 0 }}        // fade in and move to normal position
  transition={{ duration: 0.8, ease: "easeOut" }}  // smooth ease
>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white typing">
        Hi, I’m Deepak 👋
      </h1>
      <p className="text-base md:text-lg max-w-xl text-gray-700 dark:text-gray-200 mb-6">
        I'm a passionate full stack developer, crafting modern web experiences using React, Node.js, and more.
      </p>

      <a
        href="/resume.pdf"
        download
        onClick={handleDownload}
        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition animated-border"
      >
        <FaDownload />
        Download Resume
      </a>

      {/* ✅ Entrance + Exit animation for Thank You message */}
      <AnimatePresence>
        {showThanks && (
          <motion.div
            key="thanks"
            className="mt-4 text-green-600 text-sm md:text-base"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            ✅ Thanks for downloading!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll-down arrow animation */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mt-10 text-2xl text-primary"
      >
        <a href="#about">
          <FaArrowDown />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Home;
