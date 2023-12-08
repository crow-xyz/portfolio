import React, { useState, useEffect } from "react";
import Logo from '../assets/black-purple-3.png';

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
    <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center dark:bg-#fafafa">
      <img src={Logo} alt="Logo" className="h-200 w-200 mb-20 float" loading="lazy" />
      <h1 className="text-4xl font-press-start text-center dark:text-darkblue-dark">
        {currentText}
      </h1>
    </div>
  );
};

export default Intro;