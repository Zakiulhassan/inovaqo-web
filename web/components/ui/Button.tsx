import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  loading = false,
  disabled = false,
  as: Tag = 'button',
  className = '',
  ...rest
}: ButtonProps) {
  const cls = [
    'ino-btn',
    `ino-btn--${variant}`,
    size !== 'md' ? `ino-btn--${size}` : '',
    className,
  ].filter(Boolean).join(' ');

  const props: Record<string, unknown> = {
    className: cls,
    'aria-disabled': disabled || loading,
    ...rest,
  };

  if (Tag === 'button') {
    props.disabled = disabled || loading;
  }

  return React.createElement(
    Tag,
    props,
    loading && <span className="ino-btn__spin" aria-hidden="true" />,
    !loading && iconLeft,
    children,
    !loading && iconRight,
  );
}
