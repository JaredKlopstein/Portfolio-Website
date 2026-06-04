import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/me.jpg" alt="Jared Klopstein" />
          </div>

          <div className="about-text">
            <p className="intro">
              I started where most people start: tutorials, courses, and the slow hope that clarity would show up.
            </p>
            <p>
              It didn’t. Clarity came from building real things, so that’s what I do now.
            </p>
            <p>
              <span className="highlight">Ascella Studios</span> is the formalized version of that — a place for the work to live and a long game to play. The aim is a body of work I’d be proud of in twenty years.
            </p>
            <p>
              Alongside this, I spend my days in payment processing infrastructure (HP NonStop). It’s where I learned what reliability actually costs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
