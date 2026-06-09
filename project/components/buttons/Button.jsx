import React from 'react';

/* Inject component CSS once (hover/active/focus states that inline styles can't do). */
function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id;
  el.textContent = css;
  document.head.appendChild(el);
}

const CSS = `
.ino-btn {
  --_bg: var(--brand);
  --_fg: var(--text-on-brand);
  --_bd: transparent;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5em;
  font-family: var(--font-sans); font-weight: 700; font-size: var(--text-sm);
  line-height: 1; letter-spacing: 0.005em; white-space: nowrap;
  border: var(--border-w) solid var(--_bd); border-radius: var(--radius-pill);
  background: var(--_bg); color: var(--_fg);
  padding: 0 1.25em; height: 2.75em; cursor: pointer;
  transition: background var(--dur) var(--ease-out), color var(--dur) var(--ease-out),
              border-color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out),
              box-shadow var(--dur) var(--ease-out);
  -webkit-tap-highlight-color: transparent; text-decoration: none;
}
.ino-btn:hover { background: var(--brand-hover); }
.ino-btn:active { transform: translateY(1px) scale(0.99); }
.ino-btn:focus-visible { outline: none; box-shadow: var(--shadow-glow); }
.ino-btn[disabled], .ino-btn[aria-disabled="true"] { opacity: 0.45; cursor: not-allowed; pointer-events: none; }

/* sizes */
.ino-btn--sm { font-size: var(--text-xs); height: 2.25em; padding: 0 1em; }
.ino-btn--lg { font-size: var(--text-base); height: 3.25em; padding: 0 1.6em; }

/* variants */
.ino-btn--primary { --_bg: var(--brand); --_fg: var(--text-on-brand); box-shadow: var(--shadow-sm); }
.ino-btn--primary:hover { box-shadow: var(--shadow-cyan); }
.ino-btn--secondary { --_bg: transparent; --_fg: var(--text-strong); --_bd: var(--border-strong); }
.ino-btn--secondary:hover { --_bg: var(--surface-2); --_bd: var(--brand); }
.ino-btn--ghost { --_bg: transparent; --_fg: var(--text); }
.ino-btn--ghost:hover { --_bg: var(--surface-2); }
.ino-btn--inverse { --_bg: var(--n-0); --_fg: var(--n-950); }
.ino-btn--inverse:hover { --_bg: var(--mint); }
.ino-btn--danger { --_bg: var(--danger-500); --_fg: #fff; }
.ino-btn--danger:hover { background: color-mix(in oklch, var(--danger-500) 88%, black); }

.ino-btn__spin { width: 1em; height: 1em; border-radius: 50%;
  border: 2px solid currentColor; border-right-color: transparent;
  animation: ino-btn-spin 0.7s linear infinite; }
@keyframes ino-btn-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .ino-btn__spin { animation-duration: 1.6s; } }
`;

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  as = 'button',
  className = '',
  ...rest
}) {
  useInovaqoStyles('ino-btn-css', CSS);
  const Tag = as;
  const cls = [
    'ino-btn',
    `ino-btn--${variant}`,
    size !== 'md' ? `ino-btn--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Tag className={cls} disabled={Tag === 'button' ? (disabled || loading) : undefined}
         aria-disabled={disabled || loading} {...rest}>
      {loading && <span className="ino-btn__spin" aria-hidden="true" />}
      {!loading && iconLeft}
      {children}
      {!loading && iconRight}
    </Tag>
  );
}
