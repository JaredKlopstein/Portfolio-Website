import { Code2, Database, Wrench, TrendingUp } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Languages',
      skills: ['JavaScript', 'Python', 'HTML', 'CSS', 'TypeScript', 'SQL']
    },
    {
      icon: <Database size={32} />,
      title: 'Frameworks & Libraries',
      skills: ['React', 'Node.js', 'Express', 'Next.js', 'FastAPI', 'TailwindCSS']
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & Technologies',
      skills: ['Git', 'VS Code', 'Firebase', 'MongoDB']
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Always Learning',
      skills: ['AI/ML', 'Cloud Services', 'Mobile Development', 'DevOps', 'Web3', 'UI/UX']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Tech Stack</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-note">
          <p>
            <strong>Note:</strong> This list is constantly evolving as I explore
            new technologies and expand my skill set. The journey of learning never stops!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
