import React, { useState, useEffect } from "react";

const Intro = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing logic goes here
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className="container mx-auto px-4 h-screen flex items-center justify-center dark:bg-#fafafa">
      <h1 className="text-5xl font-bold text-center dark:text-darkblue-dark">
        {currentText}
      </h1>
    </div>
  );
};

export default Intro;