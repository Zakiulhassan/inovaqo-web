import React from 'react';

function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.ino-switch { display: inline-flex; align-items: center; gap: 0.6em; cursor: pointer; font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 600; color: var(--text-strong); -webkit-tap-highlight-color: transparent; }
.ino-switch__track {
  position: relative; width: 2.75em; height: 1.6em; flex: none;
  background: var(--n-300); border-radius: var(--radius-pill);
  transition: background var(--dur) var(--ease-out);
}
.ino-switch__thumb {
  position: absolute; top: 0.2em; left: 0.2em; width: 1.2em; height: 1.2em;
  background: #fff; border-radius: 50%; box-shadow: var(--shadow-sm);
  transition: transform var(--dur) var(--ease-emph);
}
.ino-switch input { position: absolute; opacity: 0; width: 0; height: 0; }
.ino-switch input:checked + .ino-switch__track { background: var(--brand); }
.ino-switch input:checked + .ino-switch__track .ino-switch__thumb { transform: translateX(1.15em); }
.ino-switch input:focus-visible + .ino-switch__track { box-shadow: var(--shadow-glow); }
.ino-switch--disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
`;

export function Switch({ checked, defaultChecked, onChange, label, disabled = false, className = '', ...rest }) {
  useInovaqoStyles('ino-switch-css', CSS);
  return (
    <label className={['ino-switch', disabled ? 'ino-switch--disabled' : '', className].filter(Boolean).join(' ')}>
      <input type="checkbox" role="switch" checked={checked} defaultChecked={defaultChecked}
             onChange={onChange} disabled={disabled} {...rest} />
      <span className="ino-switch__track"><span className="ino-switch__thumb" /></span>
      {label && <span>{label}</span>}
    </label>
  );
}
