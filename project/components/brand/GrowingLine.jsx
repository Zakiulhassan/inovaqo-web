import React from 'react';

function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.ino-growline { display: block; width: 100%; }
.ino-growline path { fill: none; stroke: var(--line); stroke-linecap: round; }
`;

/* Preset paths drawn on a 0..1000 x 0..200 viewBox (stretched via preserveAspectRatio=none). */
const PATHS = {
  wave: 'M -5 120 C 180 120, 230 40, 420 55 C 600 70, 660 150, 850 110 C 930 93, 970 110, 1005 100',
  loop: 'M -5 150 C 150 150, 210 60, 360 60 C 470 60, 485 135, 430 150 C 388 162, 350 110, 415 88 C 520 53, 640 150, 820 120 C 910 105, 960 125, 1005 108',
  rise: 'M -5 175 C 220 175, 300 60, 520 60 C 720 60, 800 30, 1005 25',
  dip:  'M -5 40 C 220 40, 300 165, 520 165 C 740 165, 820 150, 1005 150',
};

export function GrowingLine({
  variant = 'wave',
  height = 120,
  dashed = true,
  animate = 'flow',     // 'flow' | 'draw' | 'none'
  strokeWidth = 2.5,
  color,
  className = '',
  style,
  ...rest
}) {
  useInovaqoStyles('ino-growline-css', CSS);
  const d = PATHS[variant] || PATHS.wave;
  const pathClass = [
    dashed ? 'ino-line__path' : '',
    dashed && animate === 'flow' ? 'ino-line__path--flow' : '',
    !dashed && animate === 'draw' ? 'ino-line__draw' : '',
  ].filter(Boolean).join(' ');
  return (
    <svg className={['ino-growline', className].filter(Boolean).join(' ')}
         viewBox="0 0 1000 200" preserveAspectRatio="none"
         style={{ height, ...(color ? { '--line': color } : null), ...style }}
         aria-hidden="true" {...rest}>
      <path className={pathClass} d={d}
            style={{ strokeWidth, ...(dashed ? null : { strokeDasharray: 2600, strokeDashoffset: animate === 'draw' ? undefined : 0, '--len': 2600 }) }} />
    </svg>
  );
}
