import { BookOpen, Lightbulb, Code, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Problem Solver',
      description: 'Passionate about building projects and creating solutions to real-world problems'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Lifelong Learner',
      description: 'Always exploring new technologies and expanding my knowledge in all areas'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Avid Reader',
      description: 'Constantly reading and learning from books, articles, and the world around me'
    },
    {
      icon: <Heart size={24} />,
      title: 'Great Dane Lover',
      description: 'Proud owner and enthusiast of gentle giants, finding joy in their companionship'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/me.jpg" alt="Jared Klopstein" />
          </div>

          <div className="about-text">
            <p className="intro">
              Hey there! I'm Jared, a builder at heart and the founder of{' '}
              <span className="highlight">Ascella Studios</span>. I love creating
              things that make a difference and solving problems through technology.
            </p>
            <p>
              What drives me is the endless curiosity to learn and explore. Whether
              it's diving into a new programming language, reading about emerging
              technologies, or working on passion projects, I'm always seeking to
              grow and improve.
            </p>
            <p>
              When I'm not coding, you'll find me with a book in hand, exploring new
              ideas, or dreaming up the next project to build with my two Great Danes. I believe in the power
              of continuous learning and staying genuinely curious about the world.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
