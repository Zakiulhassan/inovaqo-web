'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Decorative ribbon for light-background sections. Travels from the top
 * of the section to the bottom in wide sweeping arcs — no loops — and
 * grows in sync with scroll.
 *
 * Appears only after the page has loaded, with a delay, and sits above
 * the section background but below the content.
 */

// Arc between two points with vertical tangents at both ends, so the
// chain of arcs forms one continuous serpentine with no corners.
function sweep(x0: number, y0: number, x1: number, y1: number): string {
  const dy = (y1 - y0) * 0.55;
  return `C ${x0} ${y0 + dy}, ${x1} ${y1 - dy}, ${x1} ${y1}`;
}

function buildPath(w: number, h: number, flip: boolean): string {
  const X = (f: number) => (flip ? (1 - f) * w : f * w);
  const Y = (f: number) => f * h;

  // top -> bottom: wide S-sweeps, left then right then out the bottom
  let d = `M ${X(0.68)} ${Y(-0.06)}`;
  d += ' ' + sweep(X(0.68), Y(-0.06), X(0.14), Y(0.36));
  d += ' ' + sweep(X(0.14), Y(0.36), X(0.86), Y(0.70));
  d += ' ' + sweep(X(0.86), Y(0.70), X(0.38), Y(1.06));
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
            <stop offset="0%" stopColor="#4FDDD3" />
            <stop offset="50%" stopColor="#10D5C8" />
            <stop offset="100%" stopColor="#0A7068" />
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
