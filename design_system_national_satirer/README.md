# The National Satirer — Design System

A satirical supermarket-tabloid design kit. Loud, cheap-newsprint aesthetic: heavy black
frames, four screaming accent colors, three fonts, and unapologetic infinite animation.
Built for parody homepages/spreads where fake celebrity stories link out to real sites.

## Files
- **`tokens.css`** — CSS custom properties (colors, fonts, borders, shadows). Single
  source of truth. Import first.
- **`styles.css`** — `@keyframes` (13 named animations), reusable primitive classes
  (`.sat-canvas`, `.sat-headline`, `.sat-banner`, `.sat-photo`, `.sat-link`…), animation
  utility classes (`.sat-anim-*`), and a `prefers-reduced-motion` guard. Import second.
- **`Design System.dc.html`** — visual specimen: color, type, components, motion, voice.
  Open in a browser to see everything rendered.
- **`The National Satirer.dc.html`** — the full reference spread (the actual homepage)
  showing every component composed together. Use as the copy-paste source of truth.

## Fonts
Google Fonts — load in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;500;600;700&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
```
- **Anton** — display headlines, price, section bars. Always UPPERCASE, line-height .85–.9,
  negative tracking on big sizes.
- **Oswald** (400–700) — labels, kickers, banners, UI. UPPERCASE, wide tracking (.05–.3em).
- **PT Serif** (400/700 + italics) — body copy, decks, quotes, reader mail.

## Color
| Token | Hex | Use |
|---|---|---|
| Ink | `#1c1a17` | borders, bars, primary text |
| Ink soft | `#2a2620` | body copy |
| Paper | `#fdf7e3` | main newsprint |
| Paper pure | `#ffffff` | callout boxes |
| Red / hot pink | `#ff2e63` | primary alarm accent |
| Alarm yellow | `#ffe600` | highlights, tape tags |
| Cyan | `#00d1c1` | electric panel |
| Green / teal | `#00a884` | deep panel |
| Purple | `#7c3aff` | violet panel |
| Caption | `#6b6455` | captions, disclaimers |
| Backdrop | `#14121a` | dark page behind card |
| Photo hatch | `#d8d2c2` / `#cec7b4` | placeholder fill |

**Rule:** never more than two accent colors on a single panel. Panels rotate through
red / yellow / cyan / green / purple so the eye keeps moving.

## Components
- **Banner / chip** — Oswald 700 uppercase on a solid accent. Variants: red (default),
  `--yellow`, `--ink`, purple. Optional `sat-shake` / `sat-blink`.
- **Starburst** — CSS `clip-path` spiky star, conic-gradient stripes, rotated text inside,
  `sat-pulse`.
- **Photo placeholder** — diagonal-hatch box, heavy border, optional "circle of shame"
  ellipse + tilted "Caught!!" tape tag + `sat-flashborder`.
- **Price + barcode** — Anton price (color-cycling) over a repeating-linear-gradient
  barcode.
- **Gossip blurb** — colored bullet kicker + PT Serif body on an accent panel.
- **Poll** — two vote buttons that swap to fixed result bars on click (single `vote`
  state).
- **Miracle ad** — double-border yellow box, blinking "Advertisement", Anton claim,
  flashing "Not Real" bar.
- **Marquee ticker** — full-width scrolling breaking-news bar (`sat-marquee`).

## Motion
13 keyframes in `styles.css`: `sat-marquee`, `sat-pulse`, `sat-spin`, `sat-blink`,
`sat-hue`, `sat-wobble`, `sat-bounce`, `sat-tape`, `sat-flashborder`, `sat-flash-bg`,
`sat-shake`, `sat-jitter`, `sat-slide-color`. All decorative and infinite. **Always** gate
them behind `@media (prefers-reduced-motion: reduce)` (styles.css does this for the
`.sat-anim-*` utilities and `.sat-marquee-track`).

## Voice
- SCREAM every headline in Anton caps.
- Quote anonymous "sources" who immediately give their full name.
- Undercut every claim with a footnote of doubt / disclaimer.
- Roast affectionately — silly, never punching down.
- Hard newsprint edges: **zero border-radius**, no soft pastel gradients.
- Wire fake stories to the owner's real destinations (portfolio, bakery, review site…).

## Usage
```html
<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="styles.css">
<!-- + the Google Fonts link above -->

<div class="sat-page">
  <div class="sat-canvas">
    <span class="sat-banner sat-anim-shake">⚡ Shocking ⚡</span>
    <h1 class="sat-headline" style="font-size:76px">Dad Bod or
      <span class="sat-anim-colorcycle">Father Figure?</span></h1>
    <!-- compose the rest from The National Satirer.dc.html -->
  </div>
</div>
```
