import { Calendar, ArrowRight, Clock } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: '90 Days to $5K MRR: The Challenge Begins',
      date: 'Jan 30, 2026',
      excerpt: 'I\'m publicly committing to a 90-day challenge to hit $5,000 in monthly recurring revenue with Ascella Studios.',
      readTime: '4 min read',
      link: 'https://jaredklopstein.substack.com/p/90-days-to-5k-mrr-the-challenge-begins',
      status: 'live'
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
          <a href="https://jaredklopstein.substack.com/" target="_blank" rel="noopener noreferrer" className="substack-link">
            Follow along on Substack →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
