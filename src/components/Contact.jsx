import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Mail, Send, Github, Linkedin, Twitter, Check, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      // reCAPTCHA validation
      const recaptchaToken = recaptchaRef.current?.getValue();
      if (!recaptchaToken) {
        throw new Error('Please complete the reCAPTCHA verification');
      }

      const SERVICE_ID = 'service_2em29tg';
      const TEMPLATE_ID = 'template_9uumvxq';
      const PUBLIC_KEY = 'bAUtINrrPb6oEmrac';

      // Check if credentials are set
      if (SERVICE_ID === 'YOUR_SERVICE_ID' ||
          TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
          PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('Please configure your EmailJS credentials in Contact.jsx');
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          'g-recaptcha-response': recaptchaToken,
        },
        PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      recaptchaRef.current?.reset();
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Oops! Something went wrong. Please try again or email me directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Let's build something amazing together
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message..."
                />
              </div>

              <div className="recaptcha-wrapper">
                <ReCAPTCHA
                  key={theme}
                  ref={recaptchaRef}
                  sitekey="6LdGV0YsAAAAAHkc3npEKFzMYVFJpwDGbuE0pJ55"
                  theme={theme}
                />
              </div>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.type === 'success' ? (
                    <Check size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-card">
              <h3>Let's Connect</h3>
              <p>
                I'm always excited to hear about new projects, ideas, or opportunities
                to collaborate. Whether you have a question, want to work together,
                or just want to say hi, feel free to reach out!
              </p>

              <div className="contact-methods">
                <a
                  href="mailto:hello@jaredklopstein.dev"
                  className="contact-method"
                >
                  <Mail size={20} />
                  <span>hello@jaredklopstein.dev</span>
                </a>

                <div className="contact-social">
                  <p>Find me on:</p>
                  <div className="social-links">
                    <a
                      href="https://github.com/JaredKlopstein"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="social-link"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jaredklopstein/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="social-link"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="https://x.com/JaredKlopstein"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter/X"
                      className="social-link"
                    >
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
