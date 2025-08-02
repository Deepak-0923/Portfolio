import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-300 dark:border-slate-700 text-center py-6 mt-20">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/deepak-0923"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-primary hover:text-blue-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/deepak-r-874b35292/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-primary hover:text-blue-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:deepakr0923@gmail.com"
          className="text-xl text-primary hover:text-blue-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Deepak R. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
