import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Now from './components/Now';
import Venture from './components/Venture';
import Personal from './components/Personal';
import SayHi from './components/SayHi';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="page">
        <Intro />
        <Now />
        <Venture
          id="ascella"
          label="ascella studios"
          url="https://ascellastudios.com"
          linkText="ascellastudios.com"
        >
          My software studio, and the consumer side of Frontier Forge. We
          design, launch and maintain our own apps, and build websites and
          software for small businesses and founders.
        </Venture>
        <Venture
          id="frontier-forge"
          label="frontier forge technologies"
          url="https://frontierforge.tech"
          linkText="frontierforge.tech"
        >
          The company I co-founded with two partners. A small team building
          AI agents, automation and custom software that take routine work
          off people&rsquo;s plates.
        </Venture>
        <Personal />
        <SayHi />
      </main>
      <Footer />
    </div>
  );
}

export default App;
