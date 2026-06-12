import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">© {new Date().getFullYear()} Jared Klopstein</p>
        <div className="footer-links">
          <a href="https://github.com/JaredKlopstein" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jaredklopstein/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/JaredKlopstein" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
