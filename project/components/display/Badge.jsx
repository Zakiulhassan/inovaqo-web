import React from 'react';

function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.ino-badge {
  display: inline-flex; align-items: center; gap: 0.4em;
  font-family: var(--font-mono); font-weight: 700; font-size: var(--text-xs);
  letter-spacing: 0.06em; text-transform: uppercase; line-height: 1;
  padding: 0.45em 0.7em; border-radius: var(--radius-sm); white-space: nowrap;
  border: var(--border-w) solid transparent;
}
.ino-badge--soft   { background: var(--brand-soft); color: var(--brand-press); }
.ino-badge--solid  { background: var(--brand); color: var(--text-on-brand); }
.ino-badge--outline{ background: transparent; color: var(--text); border-color: var(--border-strong); }
.ino-badge--success{ background: var(--success-100); color: color-mix(in oklch, var(--success-500) 80%, black); }
.ino-badge--warning{ background: var(--warning-100); color: color-mix(in oklch, var(--warning-500) 75%, black); }
.ino-badge--danger { background: var(--danger-100);  color: color-mix(in oklch, var(--danger-500) 80%, black); }
.ino-badge--neutral{ background: var(--surface-inset); color: var(--text-muted); }
.ino-badge__dot { width: 0.5em; height: 0.5em; border-radius: 50%; background: currentColor; }
`;

export function Badge({ children, variant = 'soft', dot = false, className = '', ...rest }) {
  useInovaqoStyles('ino-badge-css', CSS);
  return (
    <span className={['ino-badge', `ino-badge--${variant}`, className].filter(Boolean).join(' ')} {...rest}>
      {dot && <span className="ino-badge__dot" />}
      {children}
    </span>
  );
}
