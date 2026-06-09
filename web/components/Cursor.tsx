'use client';
import { useEffect, useRef } from 'react';

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse   = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const raf     = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onEnter = () => ringRef.current?.classList.add('hovered');
    const onLeave = () => ringRef.current?.classList.remove('hovered');

    window.addEventListener('mousemove', onMove);

    const attachHover = () => {
      document.querySelectorAll('a,button,[role="button"]').forEach(el => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    attachHover();
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const tick = () => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%,-50%)`;
      }
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%,-50%)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
