import { Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Jared Klopstein</span>
          </h1>
          <h2 className="hero-subtitle">Builder of Things</h2>
          <p className="hero-tagline">
            Founder of <span className="highlight">Ascella Studios</span>
            <br />
            Building apps and exploring the infinite landscape of technology
          </p>

          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('ascella')}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/JaredKlopstein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-link"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaredklopstein/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-link"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://x.com/JaredKlopstein"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter/X"
              className="social-link"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ArrowDown size={24} className="bounce" />
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
