import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const checkScroll = () => {
    setIsVisible(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button 
      onClick={scrollToTop} 
      className="fixed bottom-4 right-4 p-4 backdrop-blur-sm bg-transparent border-2 border-white text-white rounded-full float dark:bg-gray-800 dark:text-gray-200"
    >
      Top
    </button>
  );
}

export default ScrollToTop;