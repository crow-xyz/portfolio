import React from 'react'

function Portfolio() {
  // An array of objects that represent your projects
  // You can add more projects or edit the existing ones
  const projects = [
    {
      title: 'Todo App',
      description: 'A simple todo app built with React and Tailwind CSS',
      image: '/todo.jpg',
      url: 'https://todo-app-react.netlify.app/',
      github: 'https://github.com/your-username/todo-app-react',
      skills: ['React', 'Tailwind CSS', 'Netlify'],
    },
    {
      title: 'Weather App',
      description: 'A weather app that shows the current weather and forecast for any city',
      image: '/weather.jpg',
      url: 'https://weather-app-react.netlify.app/',
      github: 'https://github.com/your-username/weather-app-react',
      skills: ['React', 'Tailwind CSS', 'OpenWeather API', 'Netlify'],
    },
    {
      title: 'Quiz App',
      description: 'A quiz app that tests your knowledge on various topics',
      image: '/quiz.jpg',
      url: 'https://quiz-app-react.netlify.app/',
      github: 'https://github.com/your-username/quiz-app-react',
      skills: ['React', 'Tailwind CSS', 'Open Trivia DB API', 'Netlify'],
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-press-start text-center">My Projects</h2>
      <p className="text-lg text-center text-gray dark:text-darkblue-dark mt-4 font-sans">
        Here are some of the projects that I have built using React and other technologies. You can click on the project title to see the live demo, or click on the GitHub icon to see the source code.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-darkblue-light shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-64 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="p-4">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-2xl font-semibold text-gray-400 hover:text-white"
              >
                {project.title}
              </a>
              <p className="text-gray-400 mt-2">{project.description}</p>
              <div className="flex items-center mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-blue-600"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.524c.85.004 1.705.114 2.504.337 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.853 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <div className="flex flex-wrap ml-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-gray-600 bg-gray-200 px-2 py-1 rounded mr-2 mt-2"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
