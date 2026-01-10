import { Sparkles, ArrowRight } from 'lucide-react';
import './AscellaStudios.css';

const AscellaStudios = () => {
  return (
    <section id="ascella" className="ascella-studios">
      <div className="ascella-background">
        <div className="container">
          <div className="ascella-content">
            <div className="ascella-icon">
              <Sparkles size={48} />
            </div>

            <h2 className="ascella-title">Ascella Studios</h2>

            <p className="ascella-description">
              An independent app studio dedicated to building innovative applications
              that solve real problems and delight users. We focus on creating polished,
              thoughtful software that makes a difference.
            </p>

            <div className="ascella-mission">
              <h3>Our Mission</h3>
              <p>
                To craft exceptional digital experiences through careful design,
                clean code, and a genuine passion for building things that matter.
              </p>
            </div>

            <a
              href="https://ascellastudios.com"
              className="ascella-link"
              aria-label="Visit Ascella Studios"
            >
              Visit Ascella Studios
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AscellaStudios;
