import { useState } from "react";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import WhoAmI from "./components/WhoAmI";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <NavBar />
        <Intro />
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
