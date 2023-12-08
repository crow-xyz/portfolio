import { useState } from "react";
import NavBar from "./components/NavBar";
import WhoAmI from "./components/WhoAmI";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import ScrollToTop from "./components/ScrollToTop";
import Section from "./components/Section";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <>
      <div
        className={`App ${
          darkMode ? "bg-#fafafa text-black" : "bg-black text-white"
        }`}
      >
        <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Intro text="Welcome to my portfolio" delay={75} />
        <Section
          id="who-am-i"
          padding="8rem 0"
        >
          <WhoAmI />
        </Section>
        <Section
          id="portfolio"
          padding="8rem 0"
        >
          <Portfolio />
        </Section>
        <Section
          id="contact"
          padding="8rem 0"
        >
          <Contact />
        </Section>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
