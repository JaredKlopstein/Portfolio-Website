import './Intro.css';

const Intro = () => {
  return (
    <section id="intro" className="intro fade-in">
      <div className="intro-identity">
        <img className="intro-avatar" src="/me.jpg" alt="Jared Klopstein" />
        <div>
          <h1 className="intro-name">Jared Klopstein</h1>
          <p className="intro-role">building at Ascella Studios &amp; Frontier Forge</p>
        </div>
      </div>

      <div className="intro-bio">
        <p>
          I build software, mostly with AI agents doing the typing. It happens
          in two places: <a href="https://ascellastudios.com" target="_blank" rel="noopener noreferrer" className="text-link">Ascella Studios</a>,
          my app studio, and <a href="https://frontierforge.tech" target="_blank" rel="noopener noreferrer" className="text-link">Frontier Forge Technologies</a>,
          the company I co-founded.
        </p>
        <p>
          By day I work on payment processing infrastructure (HP NonStop) —
          high-volume transaction systems where downtime isn&rsquo;t an
          option. Reliability at that scale is a discipline, and it shapes
          how I build everything else.
        </p>
      </div>

      <ul className="intro-links">
        <li>
          <a href="https://github.com/JaredKlopstein" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jaredklopstein/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="https://x.com/JaredKlopstein" target="_blank" rel="noopener noreferrer">X</a>
        </li>
      </ul>
    </section>
  );
};

export default Intro;
