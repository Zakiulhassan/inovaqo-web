import React from 'react';

function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.ino-card {
  display: flex; flex-direction: column;
  background: var(--surface); border: var(--border-w) solid var(--border);
  border-radius: var(--radius-lg); overflow: hidden;
  font-family: var(--font-sans); color: var(--text);
  transition: transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out);
}
.ino-card--raised { border-color: transparent; box-shadow: var(--shadow-md); }
.ino-card--interactive { cursor: pointer; }
.ino-card--interactive:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: transparent; }
.ino-card--brand { background: var(--cyan-900); color: var(--mint); border-color: transparent; }
.ino-card--pad { padding: var(--space-6); gap: var(--space-3); }
.ino-card__media { display: block; width: 100%; }
.ino-card__title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-lg); letter-spacing: -0.01em; color: var(--text-strong); margin: 0; }
.ino-card--brand .ino-card__title { color: #fff; }
`;

export function Card({ children, variant = 'default', interactive = false, padded = true, className = '', ...rest }) {
  useInovaqoStyles('ino-card-css', CSS);
  const cls = [
    'ino-card',
    variant !== 'default' ? `ino-card--${variant}` : '',
    interactive ? 'ino-card--interactive' : '',
    padded ? 'ino-card--pad' : '',
    className,
  ].filter(Boolean).join(' ');
  return <div className={cls} {...rest}>{children}</div>;
}

export function CardTitle({ children, className = '', ...rest }) {
  return <h3 className={['ino-card__title', className].filter(Boolean).join(' ')} {...rest}>{children}</h3>;
}
