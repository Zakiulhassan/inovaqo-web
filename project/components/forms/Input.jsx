import React from 'react';

function useInovaqoStyles(id, css) {
  if (typeof document === 'undefined') return;
  if (document.getElementById(id)) return;
  const el = document.createElement('style');
  el.id = id; el.textContent = css; document.head.appendChild(el);
}

const CSS = `
.ino-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.ino-field__label { font-size: var(--text-sm); font-weight: 700; color: var(--text-strong); }
.ino-field__req { color: var(--brand-press); margin-left: 2px; }
.ino-field__hint { font-size: var(--text-xs); color: var(--text-muted); }
.ino-field__error { font-size: var(--text-xs); color: var(--danger-500); font-weight: 600; }

.ino-input {
  display: flex; align-items: center; gap: 0.6em;
  background: var(--surface); border: var(--border-w) solid var(--border);
  border-radius: var(--radius-md); padding: 0 0.9em; height: 2.85em;
  transition: border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
}
.ino-input:hover { border-color: var(--border-strong); }
.ino-input:focus-within { border-color: var(--brand); box-shadow: var(--shadow-glow); }
.ino-input--error { border-color: var(--danger-500); }
.ino-input--error:focus-within { box-shadow: 0 0 0 4px color-mix(in oklch, var(--danger-500) 30%, transparent); }
.ino-input__el {
  flex: 1; border: none; outline: none; background: transparent;
  font-family: var(--font-sans); font-size: var(--text-sm); font-weight: 500;
  color: var(--text-strong); min-width: 0; height: 100%;
}
.ino-input__el::placeholder { color: var(--text-subtle); font-weight: 500; }
.ino-input__affix { color: var(--text-muted); display: inline-flex; flex: none; }
.ino-input__affix svg { width: 1.1em; height: 1.1em; display: block; }
.ino-input--disabled { background: var(--surface-2); opacity: 0.7; pointer-events: none; }
`;

export function Input({
  label, hint, error, required = false,
  iconLeft, iconRight, id,
  className = '', disabled = false, ...rest
}) {
  useInovaqoStyles('ino-input-css', CSS);
  const autoId = React.useId();
  const fieldId = id || autoId;
  return (
    <div className={['ino-field', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="ino-field__label" htmlFor={fieldId}>
          {label}{required && <span className="ino-field__req">*</span>}
        </label>
      )}
      <div className={['ino-input', error ? 'ino-input--error' : '', disabled ? 'ino-input--disabled' : ''].filter(Boolean).join(' ')}>
        {iconLeft && <span className="ino-input__affix">{iconLeft}</span>}
        <input id={fieldId} className="ino-input__el" disabled={disabled}
               aria-invalid={!!error} {...rest} />
        {iconRight && <span className="ino-input__affix">{iconRight}</span>}
      </div>
      {error ? <span className="ino-field__error">{error}</span>
             : hint ? <span className="ino-field__hint">{hint}</span> : null}
    </div>
  );
}
