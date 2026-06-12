import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Now from './components/Now';
import Ascella from './components/Ascella';
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
        <Ascella />
        <SayHi />
      </main>
      <Footer />
    </div>
  );
}

export default App;
