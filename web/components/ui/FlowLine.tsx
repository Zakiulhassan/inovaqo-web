'use client';
import { useEffect, useRef } from 'react';

export function FlowLine({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);
    path.style.transition = 'none';

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        path.style.transition = 'stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1)';
        path.style.strokeDashoffset = '0';
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(path);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`flow-line ${className}`} style={{ overflow: 'hidden', ...style }}>
      <svg viewBox="0 0 1440 100" preserveAspectRatio="none" style={{ width: '100%', height: 100, display: 'block' }}>
        <path
          ref={pathRef}
          d="M -10 80 C 180 80, 250 20, 480 35 C 720 50, 800 85, 960 70 C 1100 58, 1280 25, 1450 40"
          fill="none"
          stroke="var(--brand)"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
      </svg>
    </div>
  );
}
