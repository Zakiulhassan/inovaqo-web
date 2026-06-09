import * as React from 'react';

/** Circular avatar — image or auto-colored initials, with size, ring, status dot. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Image URL. Falls back to initials when absent. */
  src?: string;
  /** Full name — used for initials and the deterministic background color. */
  name?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg' | 'xl';
  /** Cyan focus ring. @default false */
  ring?: boolean;
  /** Presence indicator. */
  status?: 'online' | 'busy' | 'offline';
}
export function Avatar(props: AvatarProps): JSX.Element;
