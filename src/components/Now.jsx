import './Now.css';

const UPDATED = 'June 2026';

const items = [
  {
    label: 'building',
    value: 'The next Ascella app. Mobile, this time.'
  },
  {
    label: 'learning',
    value: 'Building with AI — what it actually changes, and what it doesn’t.'
  },
  {
    label: 'avoiding',
    value: 'The urge to polish instead of ship.'
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
