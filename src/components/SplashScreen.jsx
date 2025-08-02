import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TypingText from "../components/TypingText";

const SplashScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000); // enough time for typing + fade
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 dark:bg-slate-900 bg-white flex items-center justify-center px-4"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 3.7, duration: 0.3 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold text-primary flex items-center justify-center gap-2 flex-wrap text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.span
          className="inline-block"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        >
          👋
        </motion.span>

        <TypingText
          text="Welcome To My Portfolio"
          speed={60}
          className="text-primary"
        />
      </motion.h1>
    </motion.div>
  );
};

export default SplashScreen;
