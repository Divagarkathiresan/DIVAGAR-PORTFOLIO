import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ value, suffix = '', duration = 900 }) => {
  const elementRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setCount(Math.floor(value * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.45 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [duration, value]);

  return <span ref={elementRef} className="count-up">{count}{suffix}</span>;
};

export default CountUp;
