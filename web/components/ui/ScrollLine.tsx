'use client';
import { useEffect, useRef } from 'react';

/**
 * A bold ribbon that grows with scroll across the first few sections
 * after the hero. It flows, curls into a full loop, flows again, takes
 * a turn, curls once more — like lusion.co's ribbon. It renders above
 * section backgrounds but below all section content.
 */

// Waypoints as fractions of the zone size. A `curl` value adds a full
// circular loop (radius in px) at that waypoint before flowing on.
const FLOW: Array<{ x: number; y: number; curl?: number }> = [
  { x: 0.50, y: -0.02 },
  { x: 0.83, y: 0.10 },
  { x: 0.78, y: 0.24, curl: 85 },
  { x: 0.40, y: 0.42 },
  { x: 0.13, y: 0.54 },
  { x: 0.20, y: 0.68, curl: 58 },
  { x: 0.62, y: 0.82 },
  { x: 0.88, y: 0.91 },
];

// Full circle drawn with 4 cubic arcs, starting and ending at the top
// of the circle (the current pen position), so the line "curls" into a
// pigtail loop and continues on its way.
function curl(cx: number, cy: number, r: number, ccw: boolean): string {
  const k = 0.5523 * r;
  const s = ccw ? -1 : 1;
  return [
    `C ${cx + s * k} ${cy - r}, ${cx + s * r} ${cy - k}, ${cx + s * r} ${cy}`,
    `C ${cx + s * r} ${cy + k}, ${cx + s * k} ${cy + r}, ${cx} ${cy + r}`,
    `C ${cx - s * k} ${cy + r}, ${cx - s * r} ${cy + k}, ${cx - s * r} ${cy}`,
    `C ${cx - s * r} ${cy - k}, ${cx - s * k} ${cy - r}, ${cx} ${cy - r}`,
  ].join(' ');
}

function buildPath(w: number, h: number): string {
  let d = `M ${FLOW[0].x * w} ${FLOW[0].y * h}`;
  for (let i = 1; i < FLOW.length; i++) {
    const prev = FLOW[i - 1];
    const cur = FLOW[i];
    const midY = ((prev.y + cur.y) / 2) * h;
    d += ` C ${prev.x * w} ${midY}, ${cur.x * w} ${midY}, ${cur.x * w} ${cur.y * h}`;
    if (cur.curl) {
      // loop hangs below the waypoint; alternate curl direction
      d += ' ' + curl(cur.x * w, cur.y * h + cur.curl, cur.curl, i % 2 === 0);
    }
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
