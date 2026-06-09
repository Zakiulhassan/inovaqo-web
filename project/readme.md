# Inovaqo Design System

> We engineer software that **makes a difference.**

Inovaqo is a software studio that designs and builds smart web and mobile apps for
teams that want to move fast and build right. Some of the work runs on AI and
machine learning; some turns messy data into useful insight; all of it ships
**sharp, scalable, and real**. The brand voice is plain-spoken and confident:
*"No bloated process. No buzzword soup. Just clear communication, strong
engineering, and products that make a difference."*

This project is the brand's design system — tokens, components, UI kit, and slide
templates — that lets design agents produce on-brand Inovaqo work.

---

## Source material

Only brand reference imagery was provided (no codebase or Figma). Everything here
is derived from these uploads, kept in `uploads/` for reference:

| File | What it is |
|---|---|
| `uploads/inovaqo logo.svg` | The INOVAQO wordmark (cyan, with the rising-line "N" mark). Cleaned + recolored into `assets/`. |
| `uploads/Desktop - 10.png` | Brand **color sheet**. ⚠️ The bright-cyan swatch is mislabeled `#C9E835` (a yellow-green); the authoritative brand cyan is taken from the logo: **`#10D5C8`**. |
| `uploads/image 4.png` | The **Brand Mission** slide — the source of the *growing dashed line* motif and the handwritten-script emphasis treatment. |
| `uploads/Desktop - 11.png` | A "Shape / Design Language" sheet that belongs to a **different** company (tkxel). Used only as loose inspiration for an abstract-geometric mindset — **not** reproduced. All branding here is Inovaqo's own. |

> **No production code or Figma was available.** If you have the real website
> repo, app source, or Figma file, share them and the UI kit can be made
> pixel-exact rather than brand-faithful.

---

## Content fundamentals (voice & tone)

- **Voice:** direct, plain, quietly confident. Sentence-style — short declaratives,
  often fragments for punch ("No bloated process. No buzzword soup.").
- **Person:** "we" for the studio, "you / your" for the client. Collaborative, never
  corporate-distant.
- **Casing:** Sentence case for headings and body. **UPPERCASE only** for mono
  eyebrows/labels (with wide tracking) and badges. Never Title Case headlines.
- **Emphasis:** one or two words per headline set in **display italic, brand cyan**
  (e.g. *intuitive*, *efficient*, *makes a difference*). Use sparingly — one
  emphasis phrase per view.
- **Spelling:** British/international spellings appear in source ("optimise",
  "optimisation"). Match the client's locale; default to the source's "-ise".
- **Buzzwords:** avoided on purpose. Say what the thing does. No "synergy",
  "leverage", "paradigm". Concrete verbs: engineer, build, ship, streamline.
- **Emoji:** not used. Iconography is clean line icons (see below).
- **Vibe:** an engineering studio that cares about craft and speaks like a person.

Examples (lifted/extrapolated from the brand):
- Hero: *"We engineer software that **makes a difference.**"*
- Mission: *"To provide **intuitive** and **efficient** tools that streamline
  workflows, enhance focus, and optimise time management."*
- Proof: *"Products we made sharp, scalable, and real."*

---

## Visual foundations

**Color.** A teal/cyan world. The hero color is bright **cyan `#10D5C8`** (`--cyan-400`,
`--brand`). It sits over a deep **teal-tinted ink** range — `#0A3C40` (deep teal,
`--cyan-900`) and `#09191B` (near-black, `--n-950`). Neutrals are *cool and
teal-tinted*, not gray (e.g. slate `#526162`, sage `#9AAF97`, mint `#D8FFE7`).
Light surfaces use a faint mint-white paper `#F4FBF8`. Status colors lean into the
palette: success is a teal-green `#14A085`. A full **dark theme**
(`[data-theme="dark"]`) mirrors the brand's dark slides.

**Type.** Substituted from Google Fonts (no originals provided — please confirm):
- **Space Grotesk** — display & headings. Geometric, slightly techy; echoes the
  angular INOVAQO wordmark. Tight tracking (`-0.02 to -0.03em`) at large sizes.
- **Manrope** — body & UI. Clean, lightly geometric, very legible.
- **Space Mono** — eyebrows, labels, code, data. UPPERCASE, wide tracking.
- *Emphasis* words use Space Grotesk **italic** in brand cyan (no script font).

**Gradient.** Pulled straight from the logo: **cyan `#10D5C8` → deep teal
`#075F59`** (`--gradient-brand`, ~120°). Use it for feature panels, a standout work
card, or accents — sparingly, as a hero moment, not everywhere. A darker
`--gradient-deep` (teal → ink) fills large dark surfaces.

**The growing line — the signature motif.** A **dashed cyan line** that leads the
eye from one section to the next, sometimes with a playful loop-de-loop (straight
from the mission slide). Implemented as `.ino-line__path` (CSS, in `tokens/base.css`)
and the `GrowingLine` React component (`wave | loop | rise | dip`). Default behavior
is a slow marching-dash *flow*; a solid *draw-on* variant exists too. Use it between
sections, as a process timeline (nodes on the line), or trailing under a hero.
Always respects `prefers-reduced-motion`.

**Backgrounds.** Solid color fields, not photos by default — deep teal / ink with a
soft **radial cyan glow** behind heroes. Imagery, when present, is dark-overlaid and
cool-toned (per the mission slide). No gradient-soup; the one gradient used is the
subtle teal panel fill on feature cards.

**Shape & elevation.** Generous, friendly **radii** (cards `16px`, pills `999px`,
icon tiles `12px`). **Shadows** are soft and teal-tinted (`rgba(9,25,27,…)`), plus a
**cyan glow** (`--shadow-cyan`) for hover on primary actions. Borders are hairline
and low-contrast (`--border`).

**Cards.** White (or dark-teal `brand` variant) surface, hairline border or soft
shadow, `16px` radius, comfortable padding (`24px`). Interactive cards lift `-3px`
and deepen their shadow on hover.

**Buttons.** **Pill-shaped.** Primary = solid cyan with ink text and a cyan glow on
hover; secondary = outline; ghost = text; inverse = white→mint for dark surfaces.
Press = subtle `translateY(1px) scale(.99)`.

**Motion & states.** Calm and quick. `--ease-out` `cubic-bezier(.16,1,.3,1)` for most
transitions (~220ms); a slight-overshoot `--ease-emph` for toggles. Hover shifts to a
darker/brighter brand step or a tinted surface; focus shows a 4px cyan ring
(`--shadow-glow`). No bounce on content, no infinite decorative loops except the
growing-line flow.

---

## Iconography

- **Line icons, Lucide-style** — 24px grid, ~2px stroke, rounded caps/joins,
  `currentColor`. They match the geometric, no-nonsense brand. Used in service
  cards, nav, forms, social.
- For real projects, link **[Lucide](https://lucide.dev)** from CDN, or use any
  matching 2px-stroke set (Heroicons outline, Feather). The DS doesn't ship an icon
  font — icons in the components/cards are inline SVG so they recolor and scale
  cleanly. *(Flagged: no proprietary icon set was provided; Lucide is the
  recommended substitute.)*
- **No emoji.** **No filled/duotone** icon styles. Keep strokes consistent.
- **Brand mark:** the INOVAQO wordmark in `assets/` (full-color cyan, mono-white,
  mono-ink). The rising-line "N" can stand alone as a small mark on dark panels.

---

## Index / manifest

**Foundations**
- `styles.css` — global entry point (import this one file). `@import`s everything below.
- `tokens/colors.css` — brand cyan scale, teal-tinted neutrals, accents, semantic
  aliases, dark theme.
- `tokens/typography.css` — families, type scale, weights, line-heights, tracking.
- `tokens/scale.css` — spacing, radius, borders, shadows, motion, layout.
- `tokens/base.css` — base element styles + utilities (`.ino-eyebrow`,
  `.ino-script`, and the **growing-line** classes).
- `tokens/fonts.css` — Google Fonts import (substitutions; confirm/replace).

**Components** (React; `window.InovaqoDesignSystem_13093e.<Name>`)
- `components/buttons/` — `Button`, `IconButton`
- `components/forms/` — `Input`, `Switch`
- `components/display/` — `Badge`, `Avatar`, `Card` (+ `CardTitle`)
- `components/brand/` — `GrowingLine` (the signature motif)

**UI kits**
- `ui_kits/website/` — Inovaqo marketing homepage (hero, services, work, mission,
  process, contact, footer). `index.html` is **generated** from `site.jsx` + the DS
  component sources (see the comment in `index.html`; rebuild logic in
  `_dev/build-site.js`). Edit `site.jsx`, then rebuild.

**Slides** (`slides/`, 1280×720, self-contained)
- `title.html`, `mission.html`, `capabilities.html`, `stat.html`, `closing.html`

**Assets** (`assets/`)
- `inovaqo-logo.svg` (cyan), `inovaqo-logo-white.svg`, `inovaqo-logo-ink.svg`

**Specimen cards** (`guidelines/`) — the small swatch/type/spacing/brand cards shown
in the Design System tab.

**Other**
- `SKILL.md` — makes this usable as a downloadable Claude Skill.
- `_dev/` — build + preview helpers (not part of the shipped system).
