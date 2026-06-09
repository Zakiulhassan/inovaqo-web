'use client';

import { useId } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, required, id, className = '', ...rest }: InputProps) {
  const autoId = useId();
  const fieldId = id || autoId;

  return (
    <div className={['ino-field', className].filter(Boolean).join(' ')}>
      {label && (
        <label className="ino-field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="ino-field__req">*</span>}
        </label>
      )}
      <div className={['ino-input', error ? 'ino-input--error' : ''].filter(Boolean).join(' ')}>
        <input
          id={fieldId}
          className="ino-input__el"
          required={required}
          aria-invalid={!!error}
          {...rest}
        />
      </div>
      {hint && !error && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{hint}</span>}
      {error && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--danger-500)', fontWeight: 600 }}>{error}</span>}
    </div>
  );
}
