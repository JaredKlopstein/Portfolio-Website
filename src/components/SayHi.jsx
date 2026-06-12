import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import './SayHi.css';

const EMAIL = 'hello@jaredklopstein.dev';

const SayHi = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="say-hi" className="section say-hi">
      <div className="section-heading">
        <h2 className="section-label">say hi</h2>
      </div>

      <button
        type="button"
        className="email-button"
        onClick={handleCopy}
        aria-label={copied ? 'Email copied' : 'Copy email address'}
      >
        <span className="email-text">{EMAIL}</span>
        <span className="email-icon" aria-hidden="true">
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </span>
      </button>

      <p className="say-hi-note">
        {copied ? 'Copied.' : 'Click to copy.'} I read everything. I reply to most of it.
      </p>
    </section>
  );
};

export default SayHi;
