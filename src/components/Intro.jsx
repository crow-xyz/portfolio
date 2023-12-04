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
    <div className="container mx-auto px-4 py-80">
      <h1 className="text-5xl font-bold text-center text-gray-800">
        {currentText}
      </h1>
      <div className="flex justify-center items-center mt-8">
        <img
          className="w-96 h-96 object-cover"
          src="/portfolio.jpg"
          alt="Portfolio"
        />
      </div>
    </div>
  );
};

export default Intro;
