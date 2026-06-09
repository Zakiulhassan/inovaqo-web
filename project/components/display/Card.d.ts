import * as React from 'react';

/**
 * Surface container. Use `raised` for elevation, `interactive` for hover-lift,
 * `brand` for the dark teal feature card.
 * @startingPoint section="Layout" subtitle="Content surface — default, raised, interactive, brand" viewport="700x320"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "default" */
  variant?: 'default' | 'raised' | 'brand';
  /** Hover-lift + pointer cursor. @default false */
  interactive?: boolean;
  /** Apply default inner padding. @default true */
  padded?: boolean;
  children?: React.ReactNode;
}
export function Card(props: CardProps): JSX.Element;

/** Display heading for use inside a Card. */
export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>): JSX.Element;
