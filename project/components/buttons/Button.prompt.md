Pill-shaped Inovaqo button — use for any primary or secondary action; cyan-forward, with sizes, icons, loading and an inverse variant for dark surfaces.

```jsx
<Button variant="primary" iconRight={<Arrow/>}>Start a project</Button>
<Button variant="secondary">See our work</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="inverse">Talk to us</Button>   {/* on dark teal */}
<Button loading>Sending…</Button>
```

Variants: `primary` (cyan, glows on hover), `secondary` (outline), `ghost` (text), `inverse` (white→mint, for dark backgrounds), `danger`. Sizes: `sm | md | lg`. Pass `as="a"` + `href` for link buttons. `loading` shows a spinner and disables the button.
