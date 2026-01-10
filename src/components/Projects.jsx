import { Github, ExternalLink, Clock } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  // Placeholder projects - easy to replace with real data later
  const projects = [
    {
      id: 1,
      title: 'Project Coming Soon',
      description: 'An exciting new project is in the works. Check back soon to see what we\'re building!',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: null,
      github: '#',
      demo: '#',
      status: 'coming-soon'
    },
    {
      id: 2,
      title: 'Another Project',
      description: 'More innovative solutions on the way. Stay tuned for updates!',
      tags: ['Python', 'FastAPI', 'PostgreSQL'],
      image: null,
      github: '#',
      demo: '#',
      status: 'coming-soon'
    },
    {
      id: 3,
      title: 'Future Build',
      description: 'Building something amazing. Details coming soon.',
      tags: ['TypeScript', 'Next.js', 'TailwindCSS'],
      image: null,
      github: '#',
      demo: '#',
      status: 'coming-soon'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              {project.status === 'coming-soon' && (
                <div className="project-badge">
                  <Clock size={16} />
                  <span>Coming Soon</span>
                </div>
              )}

              <div className="project-image">
                <div className="image-placeholder">
                  <p>Project Screenshot</p>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    aria-label="View on GitHub"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    aria-label="View live demo"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
