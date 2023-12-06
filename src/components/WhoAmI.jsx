import React from 'react'

function WhoAmI() {
  return (
    <div className="container mx-auto px-4 py-36 h-screen">
      <h1 className="text-4xl font-bold text-center">
        Hi, I'm Nicolás García
      </h1>
      <p className="text-lg text-center text-gray dark:text-darkblue-dark mt-4">
        I'm a front-end web developer who loves to create beautiful and functional websites using React, Vite and Tailwind CSS.
      </p>
      <div className="flex flex-wrap justify-center items-center mt-8">
        <img
          className="w-64 h-64 rounded-full object-cover"
          src="/profile.jpg"
          alt="Profile"
        />
        <div className="w-64 ml-8">
          <h2 className="text-2xl font-semibold">About me</h2>
          <p className="text-gray dark:text-darkblue-dark mt-2">
            I am studying for a "Programmer Analyst" degree at the DuocUC Professional Institute in Chile
          </p>
          <p className="text-gray dark:text-darkblue-dark mt-2">
            I have an international certificate of Intermediate English level
          </p>
          <p className="text-gray dark:text-darkblue-dark mt-2">
            I'm currently looking for new opportunities to work on exciting and innovative web projects, either as a full-time employee or a contractor. I'm also open to collaborate with other developers and designers on any kind of web-related project.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoAmI