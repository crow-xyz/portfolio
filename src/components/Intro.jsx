import React from 'react'

function Intro() {
  return (
    <div className="container mx-auto px-4 py-80">
      <h1 className="text-5xl font-bold text-center text-gray-800">
        Welcome to my web portfolio
      </h1>
      <p className="text-xl text-center text-gray-600 mt-4">
        I'm a web developer who loves to create beautiful and functional websites using React and Tailwind CSS. Here you can find some of my projects, skills, and contact information.
      </p>
      <div className="flex justify-center items-center mt-8">
        <img
          className="w-96 h-96 object-cover"
          src="/portfolio.jpg"
          alt="Portfolio"
        />
      </div>
    </div>
  )
}

export default Intro
