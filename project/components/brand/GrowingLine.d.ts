import * as React from 'react';

/**
 * Inovaqo's signature growing line — a dashed cyan path that leads the eye
 * from one section to the next. Place it between sections (full width) or as a
 * decorative connector. Stretches horizontally; set `height` for vertical room.
 * @startingPoint section="Brand" subtitle="Signature dashed connector line" viewport="700x140"
 */
export interface GrowingLineProps extends React.SVGAttributes<SVGSVGElement> {
  /** Path shape. @default "wave" */
  variant?: 'wave' | 'loop' | 'rise' | 'dip';
  /** Rendered height in px. @default 120 */
  height?: number;
  /** Dashed (signature) vs solid line. @default true */
  dashed?: boolean;
  /** 'flow' = marching dashes, 'draw' = draw-on (solid only), 'none'. @default "flow" */
  animate?: 'flow' | 'draw' | 'none';
  /** Stroke width. @default 2.5 */
  strokeWidth?: number;
  /** Override line color (defaults to brand cyan via --line). */
  color?: string;
}
export function GrowingLine(props: GrowingLineProps): JSX.Element;
