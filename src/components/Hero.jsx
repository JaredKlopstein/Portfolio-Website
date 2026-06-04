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
            <span className="highlight">Jared Klopstein</span>
          </h1>
          <h2 className="hero-subtitle">I build apps and explore technology.</h2>
          <p className="hero-tagline">
            Founder of <span className="highlight">Ascella Studios</span>.
          </p>

          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('ascella')}
            >
              What I'm building
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('say-hi')}
            >
              Get in touch
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
          <ArrowDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
