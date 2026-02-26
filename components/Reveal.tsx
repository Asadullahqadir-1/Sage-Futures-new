import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  as?: 'div' | 'section';
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, as = 'div', className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback timeout to ensure content shows on mobile even if IntersectionObserver fails
    const fallbackTimeout = setTimeout(() => {
      setVisible(true);
    }, delayMs + 300);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(fallbackTimeout);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '50px' } // Lower threshold and add rootMargin for better mobile support
    );

    observer.observe(element);
    return () => {
      clearTimeout(fallbackTimeout);
      observer.disconnect();
    };
  }, [delayMs]);

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
export default Reveal;
