'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Decorative ribbon for light-background sections. Travels horizontally
 * across the section, makes one perfectly round loop (a true circle,
 * entered and exited with matching horizontal tangents, so there are no
 * corners anywhere), and grows in sync with scroll.
 *
 * Appears only after the page has loaded, with a delay, and sits above
 * the section background but below the content.
 */

// Full circle from the current pen position (top of the circle),
// clockwise, ending back where it started. Tangent at both ends is
// horizontal — matching the S-curves on either side.
function loop(cx: number, cy: number, r: number): string {
  const k = 0.5523 * r;
  return [
    `C ${cx + k} ${cy - r}, ${cx + r} ${cy - k}, ${cx + r} ${cy}`,
    `C ${cx + r} ${cy + k}, ${cx + k} ${cy + r}, ${cx} ${cy + r}`,
    `C ${cx - k} ${cy + r}, ${cx - r} ${cy + k}, ${cx - r} ${cy}`,
    `C ${cx - r} ${cy - k}, ${cx - k} ${cy - r}, ${cx} ${cy - r}`,
  ].join(' ');
}

// S-curve between two points with horizontal tangents at both ends.
function sweep(x0: number, y0: number, x1: number, y1: number): string {
  const dx = (x1 - x0) * 0.5;
  return `C ${x0 + dx} ${y0}, ${x1 - dx} ${y1}, ${x1} ${y1}`;
}

function buildPath(w: number, h: number, flip: boolean): string {
  const X = (f: number) => (flip ? (1 - f) * w : f * w);
  const Y = (f: number) => f * h;
  const r = Math.min(h * 0.17, 100);

  let d = `M ${X(-0.04)} ${Y(0.30)}`;
  d += ' ' + sweep(X(-0.04), Y(0.30), X(0.26), Y(0.62));
  d += ' ' + sweep(X(0.26), Y(0.62), X(0.52), Y(0.36));
  d += ' ' + loop(X(0.52), Y(0.36) + r, r);
  d += ' ' + sweep(X(0.52), Y(0.36), X(0.78), Y(0.60));
  d += ' ' + sweep(X(0.78), Y(0.60), X(1.04), Y(0.32));
  return d;
}

export function SectionRibbon({ flip = false }: { flip?: boolean }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [ready, setReady] = useState(false);

  // appear only after the page content has loaded, plus a delay
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const arm = () => { t = setTimeout(() => setReady(true), 700); };
    if (document.readyState === 'complete') arm();
    else window.addEventListener('load', arm, { once: true });
    const fallback = setTimeout(() => setReady(true), 2500);
    return () => { clearTimeout(t); clearTimeout(fallback); };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const wrap = wrapRef.current;
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!wrap || !path || !svg) return;

    const section = wrap.parentElement;
    if (!section) return;

    let len = 0;
    let current = 0;
    let target = 0;
    let raf = 0;
    let running = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const measure = () => {
      const w = section.offsetWidth;
      const h = section.offsetHeight;
      svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
      path.setAttribute('d', buildPath(w, h, wrap.dataset.flip === 'true'));
      len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len * (1 - current));
    };

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      target = Math.max(0, Math.min(1, (vh * 0.85 - rect.top) / (rect.height * 0.9)));
    };

    const tick = () => {
      if (!running) return;
      current += (target - current) * (reduceMotion ? 1 : 0.055);
      path.style.strokeDashoffset = String(len * (1 - current));
      raf = requestAnimationFrame(tick);
    };

    measure();
    onScroll();
    tick();

    const ro = new ResizeObserver(measure);
    ro.observe(section);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ready]);

  return (
    <div
      ref={wrapRef}
      className="section-ribbon"
      data-flip={flip ? 'true' : 'false'}
      aria-hidden="true"
      style={{ opacity: ready ? 1 : 0 }}
    >
      <svg ref={svgRef} preserveAspectRatio="none">
        <defs>
          <linearGradient id={flip ? 'ribbonGradB' : 'ribbonGradA'} x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0%" stopColor="#10D5C8" />
            <stop offset="50%" stopColor="#22BFD8" />
            <stop offset="100%" stopColor="#7C6FFF" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          fill="none"
          stroke={flip ? 'url(#ribbonGradB)' : 'url(#ribbonGradA)'}
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
