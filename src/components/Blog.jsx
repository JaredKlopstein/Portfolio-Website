import { Calendar, ArrowRight, Clock } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  // Placeholder blog posts - easy to update later
  const blogPosts = [
    {
      id: 1,
      title: 'First Blog Post Coming Soon',
      date: 'TBD',
      excerpt: 'Stay tuned for thoughts on building, learning, and exploring technology.',
      readTime: '5 min read',
      link: '#',
      status: 'coming-soon'
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Blog</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Thoughts on building, learning, and technology
          </p>
        </div>

        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              {post.status === 'coming-soon' && (
                <div className="blog-badge">
                  <Clock size={14} />
                  <span>Coming Soon</span>
                </div>
              )}

              <div className="blog-meta">
                <div className="blog-date">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <span className="read-time">{post.readTime}</span>
              </div>

              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>

              <a href={post.link} className="blog-link">
                Read More
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <p>More posts coming soon as I share my journey and learnings!</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
