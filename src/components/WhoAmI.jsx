import React from 'react'

function WhoAmI() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Hi, I'm John Doe
      </h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        I'm a web developer who loves to create beautiful and functional websites using React and Tailwind CSS.
      </p>
      <div className="flex flex-wrap justify-center items-center mt-8">
        <img
          className="w-64 h-64 rounded-full object-cover"
          src="/profile.jpg"
          alt="Profile"
        />
        <div className="w-64 ml-8">
          <h2 className="text-2xl font-semibold text-gray-800">About me</h2>
          <p className="text-gray-600 mt-2">
            I have been coding since I was 15 years old, and I have always been passionate about web development. I enjoy learning new technologies and frameworks, and I like to challenge myself with interesting projects.
          </p>
          <p className="text-gray-600 mt-2">
            I have a bachelor's degree in computer science from the University of Chile, and I have worked as a freelance web developer for several clients, including some well-known brands. I have also contributed to some open source projects on GitHub, and I have a blog where I share my tips and tricks on web development.
          </p>
          <p className="text-gray-600 mt-2">
            I'm currently looking for new opportunities to work on exciting and innovative web projects, either as a full-time employee or a contractor. I'm also open to collaborate with other developers and designers on any kind of web-related project.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhoAmI