import React from 'react'

function Intro() {
  return (
    <div className="container mx-auto px-4 py-80">
      <h1 className="text-5xl font-bold text-center text-gray-800">
        Welcome to my web portfolio
      </h1>
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
