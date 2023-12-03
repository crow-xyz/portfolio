import { useState } from 'react';
import Intro from './components/Intro';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Intro />
        <Timeline />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
