import * as React from 'react';

/** Square, pill-radius icon-only button. Always pass `label` for accessibility. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "ghost" */
  variant?: 'ghost' | 'solid' | 'outline';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Accessible label (also the tooltip). Required. */
  label: string;
  /** The icon, e.g. an <svg> or icon-font element. */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
