import * as React from 'react';

/**
 * Text input with label, hint, error, optional leading/trailing icons.
 * @startingPoint section="Forms" subtitle="Labeled text field with hint, error and icons" viewport="700x230"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Field label rendered above the control. */
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error message — turns the field red and replaces the hint. */
  error?: string;
  /** Show a required asterisk. @default false */
  required?: boolean;
  /** Icon before the text. */
  iconLeft?: React.ReactNode;
  /** Icon after the text. */
  iconRight?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
