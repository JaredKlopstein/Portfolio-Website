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
    <section id="say-hi" className="say-hi">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Say hi</h2>
          <div className="title-underline"></div>
        </div>

        <div className="say-hi-content">
          <button
            type="button"
            className="email-button"
            onClick={handleCopy}
            aria-label={copied ? 'Email copied' : 'Copy email address'}
          >
            <span className="email-text">{EMAIL}</span>
            <span className="email-icon" aria-hidden="true">
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </span>
          </button>

          <p className="say-hi-note">
            {copied ? 'Copied.' : 'Click to copy.'} I read everything. I reply to most of it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SayHi;
