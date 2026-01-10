import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="error-actions">
          <button onClick={goHome} className="btn btn-primary">
            <Home size={20} />
            Go Home
          </button>
          <button onClick={goBack} className="btn btn-secondary">
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="error-suggestions">
          <p>You might want to check out:</p>
          <ul>
            <li><a href="/#about">About Me</a></li>
            <li><a href="/#projects">Projects</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
