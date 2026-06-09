'use client';
import { useEffect, useRef } from 'react';

export function FlowLine({ className = '' }: { className?: string }) {
  const pathRef = useRef<SVGPathElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const wrap = wrapRef.current;
    if (!path || !wrap) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);

    const tick = () => {
      const rect = wrap.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      path.style.strokeDashoffset = String(len * (1 - progress));
    };

    window.addEventListener('scroll', tick, { passive: true });
    tick();
    return () => window.removeEventListener('scroll', tick);
  }, []);

  return (
    <div ref={wrapRef} className={`flow-line ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        style={{ width: '100%', height: 90, display: 'block' }}
      >
        <path
          ref={pathRef}
          d="M -10 72 C 80 72, 160 18, 320 30 C 480 42, 540 78, 700 66 C 860 54, 960 14, 1100 26 C 1240 38, 1360 62, 1460 48"
          fill="none"
          stroke="#10D5C8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.45"
        />
      </svg>
    </div>
  );
}
