import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  as?: 'div' | 'section';
  className?: string;
  delayMs?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, as = 'div', className = '', delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  // Check if mobile device - if so, start visible immediately
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [visible, setVisible] = useState(isMobile);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already visible (mobile), skip observer
    if (isMobile) {
      setVisible(true);
      return;
    }

    // Aggressive fallback timeout to ensure content shows
    const fallbackTimeout = setTimeout(() => {
      setVisible(true);
    }, delayMs + 200);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          clearTimeout(fallbackTimeout);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '100px' } // Very low threshold and large rootMargin for mobile
    );

    observer.observe(element);
    return () => {
      clearTimeout(fallbackTimeout);
      observer.disconnect();
    };
  }, [delayMs, isMobile]);

  const Tag = as as 'div';

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${isMobile ? '' : 'transition-all duration-700 ease-out transform'} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={!isMobile && delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
};
export default Reveal;
