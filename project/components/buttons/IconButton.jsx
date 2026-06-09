import React from 'react';

function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.ino-iconbtn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 2.75em; height: 2.75em; border-radius: var(--radius-pill);
  border: var(--border-w) solid transparent; background: transparent;
  color: var(--text); cursor: pointer; padding: 0;
  transition: background var(--dur) var(--ease-out), color var(--dur) var(--ease-out),
              border-color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out);
  -webkit-tap-highlight-color: transparent;
}
.ino-iconbtn svg { width: 1.25em; height: 1.25em; display: block; }
.ino-iconbtn:hover { background: var(--surface-2); color: var(--text-strong); }
.ino-iconbtn:active { transform: scale(0.92); }
.ino-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-glow); }
.ino-iconbtn--sm { width: 2.25em; height: 2.25em; }
.ino-iconbtn--lg { width: 3.25em; height: 3.25em; }
.ino-iconbtn--solid { background: var(--brand); color: var(--text-on-brand); }
.ino-iconbtn--solid:hover { background: var(--brand-hover); color: var(--text-on-brand); }
.ino-iconbtn--outline { border-color: var(--border-strong); }
.ino-iconbtn--outline:hover { border-color: var(--brand); background: transparent; }
.ino-iconbtn[disabled] { opacity: 0.45; pointer-events: none; }
`;

export function IconButton({ children, variant = 'ghost', size = 'md', label, className = '', ...rest }) {
  useInovaqoStyles('ino-iconbtn-css', CSS);
  const cls = [
    'ino-iconbtn',
    variant !== 'ghost' ? `ino-iconbtn--${variant}` : '',
    size !== 'md' ? `ino-iconbtn--${size}` : '',
    className,
  ].filter(Boolean).join(' ');
  return (
    <button className={cls} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
