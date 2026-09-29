import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(timer);
          window.setTimeout(onComplete, 180);
          return 100;
        }
        return current + 1;
      });
    }, 16);

    return () => window.clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="site-loader" role="status" aria-live="polite" aria-label={`Loading portfolio: ${progress}%`}>
      <div className="loader-content">
        <span className="loader-eyebrow">DIVAGAR K / PORTFOLIO</span>
        <div className="loader-count">{String(progress).padStart(3, '0')}</div>
        <div className="loader-track" aria-hidden="true">
          <div className="loader-progress" style={{ width: `${progress}%` }} />
        </div>
        <span className="loader-label">Loading experience</span>
      </div>
    </div>
  );
};

export default Loader;
