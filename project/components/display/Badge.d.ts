import * as React from 'react';

/** Compact status/label pill. Mono, uppercase. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "soft" */
  variant?: 'soft' | 'solid' | 'outline' | 'success' | 'warning' | 'danger' | 'neutral';
  /** Show a leading status dot. @default false */
  dot?: boolean;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
