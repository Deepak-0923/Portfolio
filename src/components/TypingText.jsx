import { useEffect, useState } from "react";

const TypingText = ({ text = "Deepak", speed = 50, className = "" }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={`inline-block pr-1 ${className}`}>
      {text.slice(0, index)}
    </span>
  );
};

export default TypingText;
