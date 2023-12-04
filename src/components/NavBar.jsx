import React from "react";

function NavBar({ darkMode, toggleDarkMode }) {
  // State to toggle the menu button on small screens
  const [isOpen, setIsOpen] = React.useState(false);

  // State to keep track of the selected section
  const [selectedSection, setSelectedSection] = React.useState("who-am-i");
  // Function to scroll to a section with a given id
  const scrollToSection = (id) => {
    // Close the mobile menu if it's open
    setIsOpen(false);
    // Update the selected section
    setSelectedSection(id);
    // Find the section element by id
    const section = document.getElementById(id);
    // Scroll to the section with smooth behavior
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="bg-transparent fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* You can add your logo here */}
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <button
                onClick={() => scrollToSection("who-am-i")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedSection === "who-am-i"
                  ? darkMode ? "bg-blue-dark text-white" : "bg-gray-900 text-white"
                  : darkMode ? "text-white hover:bg-dark-blue-dark" : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Who am I?
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedSection === "portfolio"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  selectedSection === "contact"
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Contact
              </button>
              <button
                onClick={toggleDarkMode}
                className="px-3 py-2 rounded-md text-sm font-medium"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen ? (
        <div className="md:hidden absolute right-0" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <button
              onClick={() => scrollToSection("who-am-i")}
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-bold"
            >
              Who am I?
            </button>

            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Portfolio
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default NavBar;
