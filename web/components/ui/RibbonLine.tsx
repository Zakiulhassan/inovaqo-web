'use client';
import { useEffect, useRef } from 'react';

/**
 * Lusion-style thick organic ribbon that flows through the hero,
 * draws itself on load, and parallaxes gently on scroll.
 */
export function RibbonLine() {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    const len = path.getTotalLength();
    path.style.strokeDasharray = String(len);
    path.style.strokeDashoffset = String(len);

    // draw-on after first paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        path.style.transition = 'stroke-dashoffset 2.6s cubic-bezier(0.65, 0, 0.35, 1)';
        path.style.strokeDashoffset = '0';
      });
    });

    // gentle parallax
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        svg.style.transform = `translateY(${window.scrollY * 0.12}px)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hero__ribbon" aria-hidden="true">
      <svg
        ref={svgRef}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          <linearGradient id="ribbonGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#10D5C8" />
            <stop offset="55%" stopColor="#0FBDB2" />
            <stop offset="100%" stopColor="#0A8F87" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          d="M 640 -80
             C 615 110, 510 195, 340 228
             C 110 272, -70 420, 55 590
             C 160 732, 430 768, 630 662
             C 795 575, 760 425, 985 382
             C 1185 344, 1290 468, 1385 595
             C 1432 658, 1475 680, 1530 655"
          fill="none"
          stroke="url(#ribbonGrad)"
          strokeWidth="46"
          strokeLinecap="round"
          strokeOpacity="0.9"
        />
      </svg>
    </div>
  );
}
