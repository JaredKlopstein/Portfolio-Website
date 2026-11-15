import './Now.css';

const UPDATED = 'November 2026';

const items = [
  {
    label: 'building',
    value: 'Tools that let AI agents do real work, and show what they did.'
  },
  {
    label: 'learning',
    value: 'Claude Certified Architect. One domain at a time.'
  },
  {
    label: 'avoiding',
    value: 'Starting something new before finishing the last thing.'
  }
];

const Now = () => {
  return (
    <section id="now" className="section now">
      <div className="section-heading">
        <h2 className="section-label">now</h2>
        <span className="section-meta">updated {UPDATED}</span>
      </div>

      <ul className="now-list">
        {items.map(({ label, value }) => (
          <li key={label} className="now-row">
            <span className="now-label">{label}</span>
            <span className="now-value">{value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Now;
