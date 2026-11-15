import './Venture.css';

const Venture = ({ id, label, url, linkText, children }) => {
  return (
    <section id={id} className="section venture">
      <div className="section-heading">
        <h2 className="section-label">{label}</h2>
      </div>

      <p>{children}</p>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="venture-link"
      >
        {linkText} <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
};

export default Venture;
