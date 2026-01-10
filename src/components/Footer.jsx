import { Github, Linkedin, Twitter, ArrowUp, Heart, Coffee } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-name">Jared Klopstein</h3>
            <p className="footer-tagline">Builder of Things</p>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a
                href="https://github.com/JaredKlopstein"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-link"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jaredklopstein/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/JaredKlopstein"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="footer-social-link"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <button
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Jared Klopstein. All rights reserved.
          </p>
          <p className="footer-motto">
            Built with <Coffee size={16} className="inline-icon" /> and curiosity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
