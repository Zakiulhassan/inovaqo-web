'use client';
import { useEffect, useRef } from 'react';

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className = '' }: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('fade-up');
    if (delay) el.style.transitionDelay = `${delay}s`;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}
