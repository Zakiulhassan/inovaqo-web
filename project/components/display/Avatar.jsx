import React from 'react';

function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.ino-avatar {
  position: relative; display: inline-flex; align-items: center; justify-content: center;
  width: var(--_sz, 2.5em); height: var(--_sz, 2.5em); flex: none;
  border-radius: 50%; overflow: visible;
  font-family: var(--font-display); font-weight: 700; color: var(--text-on-brand);
  background: var(--brand);
  font-size: calc(var(--_sz, 2.5em) * 0.36);
}
.ino-avatar__img { position: absolute; inset: 0; width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.ino-avatar--sm { --_sz: 2em; }
.ino-avatar--md { --_sz: 2.5em; }
.ino-avatar--lg { --_sz: 3.5em; }
.ino-avatar--xl { --_sz: 5em; }
.ino-avatar__ring { box-shadow: 0 0 0 2px var(--surface), 0 0 0 4px var(--brand); }
.ino-avatar__status {
  position: absolute; right: 2%; bottom: 2%; width: 28%; height: 28%;
  border-radius: 50%; border: 2px solid var(--surface); background: var(--n-300);
}
.ino-avatar__status--online { background: var(--success-500); }
.ino-avatar__status--busy { background: var(--danger-500); }
`;

const PALETTE = ['var(--cyan-400)','var(--cyan-600)','var(--sage)','var(--slate)','var(--success-500)'];

export function Avatar({ src, name = '', size = 'md', ring = false, status, className = '', ...rest }) {
  useInovaqoStyles('ino-avatar-css', CSS);
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const bg = PALETTE[(name.charCodeAt(0) || 0) % PALETTE.length];
  return (
    <span className={['ino-avatar', `ino-avatar--${size}`, ring ? 'ino-avatar__ring' : '', className].filter(Boolean).join(' ')}
          style={!src ? { background: bg } : undefined} {...rest}>
      {src ? <img className="ino-avatar__img" src={src} alt={name} /> : (initials || '?')}
      {status && <span className={`ino-avatar__status ino-avatar__status--${status}`} />}
    </span>
  );
}
