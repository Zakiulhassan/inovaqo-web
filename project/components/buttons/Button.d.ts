import * as React from 'react';

/**
 * Inovaqo button. Pill-shaped, cyan-forward. Use `primary` for the main action,
 * `secondary`/`ghost` for supporting actions, `inverse` on dark surfaces.
 *
 * @startingPoint section="Core" subtitle="Pill button — primary, secondary, ghost, inverse, danger" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse' | 'danger';
  /** Size. @default "md" */
  size?: 'sm' | 'md' | 'lg';
  /** Icon element rendered before the label. */
  iconLeft?: React.ReactNode;
  /** Icon element rendered after the label. */
  iconRight?: React.ReactNode;
  /** Show a spinner and block interaction. @default false */
  loading?: boolean;
  /** Render as a different element, e.g. "a" for links. @default "button" */
  as?: 'button' | 'a';
  children?: React.ReactNode;
}

export function Button(props: ButtonProps): JSX.Element;
