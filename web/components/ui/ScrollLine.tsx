'use client';
import { useEffect, useRef } from 'react';

/**
 * A bold ribbon that grows with scroll across the first few sections
 * after the hero — modelled on lusion.co's ribbon: big sweeping arcs
 * and one wide, soft loop, with smooth curvature throughout. It renders
 * above section backgrounds but below all section content.
 */

// Waypoints as fractions of the zone size. The path is fitted with a
// Catmull-Rom spline, so curvature stays smooth everywhere. Points
// 3..8 orbit a center, which makes the line cross itself in one big
// lazy loop (like Lusion's), rather than a tight pigtail.
const POINTS: Array<[number, number]> = [
  [0.56, -0.03], // enters from under the hero
  [0.68, 0.09],  // drifts right as it descends
  [0.60, 0.20],  // turns back left into the loop
  [0.30, 0.23],  // loop: top-left
  [0.15, 0.32],  // loop: far left, heading down
  [0.34, 0.42],  // loop: bottom, heading right
  [0.60, 0.38],  // loop: right side, heading up
  [0.65, 0.26],  // loop closes, crossing the entry stroke
  [0.84, 0.36],  // exits right
  [0.62, 0.52],  // long lazy S — dips back left
  [0.30, 0.62],
  [0.46, 0.75],  // swings back right
  [0.78, 0.84],
  [0.93, 0.91],  // tapers out, well before the zone ends
];

// Catmull-Rom spline -> cubic beziers: smooth tangents at every
// waypoint, no corners.
function buildPath(w: number, h: number): string {
  const pts = POINTS.map(([fx, fy]) => [fx * w, fy * h]);
  const p = [pts[0], ...pts, pts[pts.length - 1]];
  let d = `M ${p[1][0]} ${p[1][1]}`;
  for (let i = 1; i < p.length - 2; i++) {
    const c1x = p[i][0] + (p[i + 1][0] - p[i - 1][0]) / 6;
    const c1y = p[i][1] + (p[i + 1][1] - p[i - 1][1]) / 6;
    const c2x = p[i + 1][0] - (p[i + 2][0] - p[i][0]) / 6;
    const c2y = p[i + 1][1] - (p[i + 2][1] - p[i][1]) / 6;
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p[i + 1][0]} ${p[i + 1][1]}`;
  }
  return d;
}

export function ScrollLine() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!wrap || !path || !svg) return;

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
      // tip of the ribbon tracks ~70% down the viewport
      target = Math.max(0, Math.min(1, (vh * 0.7 - rect.top) / rect.height));
    };

    const tick = () => {
      if (!running) return;
      current += (target - current) * (reduceMotion ? 1 : 0.065);
      path.style.strokeDashoffset = String(len * (1 - current));
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
        <defs>
          <linearGradient id="scrollLineGrad" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#10D5C8" />
            <stop offset="55%" stopColor="#0FB9AE" />
            <stop offset="100%" stopColor="#0A8F87" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          fill="none"
          stroke="url(#scrollLineGrad)"
          strokeWidth="30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
