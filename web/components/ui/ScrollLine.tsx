'use client';
import { useEffect, useRef } from 'react';

/**
 * A single continuous line that spans every section after the hero.
 * It draws itself in sync with scroll (smooth-lerped so the tip trails
 * fluidly), weaving left and right through the page gutters, with a
 * glowing dot riding the tip of the line.
 *
 * Aesthetic accent only: pointer-events none, low visual weight.
 */

// Waypoints as fractions of the zone's width/height. The line snakes
// between the page gutters, crossing the center between sections.
const POINTS: Array<[number, number]> = [
  [0.50, 0.000],
  [0.93, 0.045],
  [0.06, 0.130],
  [0.50, 0.185],
  [0.94, 0.250],
  [0.07, 0.345],
  [0.92, 0.435],
  [0.08, 0.530],
  [0.50, 0.595],
  [0.93, 0.665],
  [0.07, 0.760],
  [0.91, 0.855],
  [0.50, 0.930],
  [0.50, 1.000],
];

function buildPath(w: number, h: number): string {
  let d = `M ${POINTS[0][0] * w} ${POINTS[0][1] * h}`;
  for (let i = 1; i < POINTS.length; i++) {
    const [px, py] = POINTS[i - 1];
    const [cx, cy] = POINTS[i];
    const midY = ((py + cy) / 2) * h;
    d += ` C ${px * w} ${midY}, ${cx * w} ${midY}, ${cx * w} ${cy * h}`;
  }
  return d;
}

export function ScrollLine() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    const dot = dotRef.current;
    const svg = svgRef.current;
    if (!wrap || !path || !dot || !svg) return;

    const zone = wrap.parentElement;
    if (!zone) return;

    let len = 0;
    let current = 0;
    let target = 0;
    let raf = 0;
    let running = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const measure = () => {
      const w = zone.offsetWidth;
      const h = zone.offsetHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      path.setAttribute('d', buildPath(w, h));
      len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len * (1 - current));
    };

    const onScroll = () => {
      const rect = zone.getBoundingClientRect();
      const vh = window.innerHeight;
      // tip of the line tracks ~65% down the viewport
      target = Math.max(0, Math.min(1, (vh * 0.65 - rect.top) / rect.height));
    };

    const tick = () => {
      if (!running) return;
      current += (target - current) * (reduceMotion ? 1 : 0.07);
      path.style.strokeDashoffset = String(len * (1 - current));

      // ride the dot along the tip
      if (current > 0.002 && current < 0.998) {
        const pt = path.getPointAtLength(len * current);
        dot.setAttribute('cx', String(pt.x));
        dot.setAttribute('cy', String(pt.y));
        dot.style.opacity = '1';
      } else {
        dot.style.opacity = '0';
      }
      raf = requestAnimationFrame(tick);
    };

    measure();
    onScroll();
    current = target;
    tick();

    const ro = new ResizeObserver(measure);
    ro.observe(zone);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div ref={wrapRef} className="scroll-line" aria-hidden="true">
      <svg ref={svgRef} preserveAspectRatio="none">
        <path
          ref={pathRef}
          fill="none"
          stroke="#10D5C8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <circle
          ref={dotRef}
          r="5"
          fill="#10D5C8"
          style={{
            opacity: 0,
            transition: 'opacity 0.3s',
            filter: 'drop-shadow(0 0 6px rgba(16,213,200,0.9))',
          }}
        />
      </svg>
    </div>
  );
}
