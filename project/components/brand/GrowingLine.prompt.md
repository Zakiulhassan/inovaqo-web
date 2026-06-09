The signature Inovaqo motif — a dashed cyan "growing line" that connects sections and leads the eye through a page or story.

```jsx
<GrowingLine variant="loop" />                      {/* between two sections */}
<GrowingLine variant="rise" height={90} />
<GrowingLine variant="wave" dashed={false} animate="draw" /> {/* solid draw-on */}
```

Variants: `wave` (gentle S), `loop` (the hero loop-de-loop), `rise`, `dip`. It stretches to full width; default is a marching-dash flow. Use `color` to recolor, or set `--line` on a parent. Respects reduced-motion.
