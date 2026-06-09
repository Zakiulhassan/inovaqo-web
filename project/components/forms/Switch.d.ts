import * as React from 'react';

/** Pill toggle switch with optional inline label. Controlled or uncontrolled. */
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Controlled on/off state. */
  checked?: boolean;
  /** Uncontrolled initial state. */
  defaultChecked?: boolean;
  /** Inline label to the right of the track. */
  label?: string;
  disabled?: boolean;
}

export function Switch(props: SwitchProps): JSX.Element;
