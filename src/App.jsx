import { useState } from "react";
import NavBar from "./components/NavBar";
import WhoAmI from "./components/WhoAmI";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className={`App ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Intro text="Welcome to my portfolio" delay={75} />
        <section id="who-am-i">
          <WhoAmI />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default App;