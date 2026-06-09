---
name: inovaqo-design
description: Use this skill to generate well-branded interfaces and assets for Inovaqo, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

Quick start:
- Link `styles.css` for all design tokens (colors, type, spacing, the growing-line
  motif classes). Every token is a CSS custom property — e.g. `var(--brand)` is the
  cyan `#10D5C8`, `var(--font-display)` is Space Grotesk.
- The signature **growing line** is the brand's defining motif. Use the
  `.ino-line__path` classes (CSS) or the `GrowingLine` React component to lead the
  eye between sections. Don't skip it — it's core to the brand.
- Components live in `components/<group>/<Name>.jsx`. In a self-contained HTML file,
  the simplest path is to inline the component sources (strip `import`/`export`) into
  one `<script type="text/babel">` — see `ui_kits/website/index.html` for the pattern.
- Logos are in `assets/` (cyan / white / ink). Fonts are Google Fonts (Space Grotesk,
  Manrope, Caveat, Space Mono) loaded via `tokens/fonts.css`.
- Voice: plain, confident, no buzzwords; sentence case; one handwritten-script
  emphasis word per headline; no emoji.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
