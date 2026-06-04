import './Currently.css';

const items = [
  {
    label: 'Building',
    value: 'First Ascella app. Shipping it before it’s ready, on purpose.'
  },
  {
    label: 'Using',
    value: 'Next.js and Supabase. Boring tools, because the apps are the interesting part.'
  },
  {
    label: 'Figuring out',
    value: 'What “AI-native” actually means when you’re the one shipping it.'
  },
  {
    label: 'Avoiding',
    value: 'The urge to rebuild instead of ship.'
  },
  {
    label: 'Long game',
    value: 'A quieter life in a louder world. Italy, eventually.'
  }
];

const Currently = () => {
  return (
    <section id="currently" className="currently">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Currently</h2>
          <div className="title-underline"></div>
        </div>

        <ul className="currently-list">
          {items.map(({ label, value }) => (
            <li key={label} className="currently-row">
              <span className="currently-label">{label}</span>
              <span className="currently-arrow" aria-hidden="true">→</span>
              <span className="currently-value">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Currently;
