# Handoff: The National Satirer — Tabloid Homepage (A.D.D. Edition)

## Overview
A satirical supermarket-tabloid "inside spread" that doubles as a personal homepage. The
subject ("Kenzo Bradbury") is treated as a hounded celebrity, and the fake stories are
portals to the owner's real sites (portfolio, Rachel Bakery, deffgoingback review site,
friends' pages). The design is intentionally loud, chaotic, and over-animated — a
gossip-rag parody with a scrolling news ticker, spinning starbursts, blinking banners,
color-cycling headlines, a working reader poll, horoscopes, reader mail, and a
miracle-cure ad.

## About the Design Files
The file in this bundle (`The National Satirer.dc.html`) is a **design reference created
in HTML** — a prototype showing the intended look and behavior, **not production code to
copy directly**. The `.dc.html` format wraps the markup in a lightweight component runtime
(`support.js`); ignore that scaffolding. The task is to **recreate this design in the
target codebase's existing environment** (React, Vue, Astro, plain HTML, etc.) using its
established patterns. If no environment exists yet, pick the most appropriate stack for a
small personal site and implement it there.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, layout, and animations are
all specified below and in the source file. Recreate the UI as closely as possible.
Photos are drop-in placeholders (diagonal-hatch boxes) the owner will replace with real
images; links currently point to `#` and must be wired to real destinations.

## Screens / Views
Single scrolling page, top to bottom. One outer "newspaper" card (max-width 1180px,
4px black border) on a dark hatched backdrop, containing these stacked bands:

### 1. Breaking-news marquee (top)
- **Layout:** full-width black bar, single line of text scrolling right→left forever.
- **Content:** repeated set — "★ BREAKING · Beard achieves sentience · ★ SHOCKING ·
  Croissant cartel expands into West County · ★ EXCLUSIVE · Man naps for 6 weeks,
  thrives" (duplicated so the loop is seamless).
- **Type:** Oswald 700, uppercase, 14px, letter-spacing .1em, 7px vertical padding.
- **Colors:** bg `#1c1a17`, bottom border 4px `#ff2e63`; words alternate `#ffe600`,
  `#00d1c1`, `#ff2e63`, `#fdf7e3`, `#7c3aff`.
- **Animation:** `translateX(0 → -50%)`, 22s linear infinite.

### 2. Tagline bar
- Full-width, uppercase Oswald 700, 12px, letter-spacing .3em, centered.
- Text: "The Truth Is In Here · Sort Of · Do Not Trust A Single Word".
- Color `#fdf7e3`; background flashes between `#ff2e63`/`#00d1c1`/`#7c3aff` (4s, steps(1)).

### 3. Masthead
- **Layout:** flex row, `align-items: flex-end`, space-between, 20px gap; three columns.
- **Left:** small info block — "World Exclusive" chip (Oswald 700, `#fdf7e3` on `#7c3aff`,
  blinking 1.1s steps(1)), then "Vol. II · No. 405" and "The A.D.D. Edition".
- **Center title:** "The National / Satirer" — Anton, 88px, line-height .85,
  letter-spacing -.02em, uppercase, `#1c1a17`, layered text-shadow
  `3px 3px 0 #ffe600, 6px 6px 0 #ff2e63`.
- **Right:** price "$4.99" (Anton 34px, color-cycling 3s), fake barcode
  (repeating-linear-gradient bars), code "0 000405 999999".
- Section padding 20px 40px 12px; 4px bottom border `#1c1a17`; subtle radial yellow glow.

### 4. Teaser strip
- 4 equal flex cells, each Oswald 700 uppercase 13px, 9px 12px padding, centered.
- Cells (bg / text): "Poolside Bombshell" `#ff2e63`/`#fdf7e3`; "Beard Watch 2026"
  `#ffe600`/`#1c1a17`; "Bakery Empire Exposed" `#00a884`/`#fdf7e3`; "Horoscopes →
  Doomed" `#7c3aff`/`#fdf7e3`.

### 5. Lead story
- **Label chip:** "⚡ Shocking Poolside Photos ⚡" — Oswald 700 uppercase 15px, `#fdf7e3`
  on `#ff2e63`, shake animation (3s ease-in-out infinite).
- **Headline:** "Kenzo Bradbury: Dad Bod or Father Figure?" — Anton 76px, line-height .86.
  "Father Figure?" is an inline-block that color-cycles (2.5s) and wobbles (3s).
- **Deck:** PT Serif italic 21px; "SIX WEEKS" highlighted on `#ffe600`.
- **Body grid:** `1.5fr 1fr`, 24px gap.
  - Left = photo placeholder: `aspect-ratio 4/3`, diagonal-hatch fill, 4px border with
    flashing border/box-shadow (1.4s), a pulsing red ellipse "circle of shame", a bouncing
    "← The Evidence" note (`#7c3aff`), and a tilted "Caught!!" tape tag (`#ffe600`).
    Caption underneath in Oswald 12px `#6b6455`.
  - Right = 3 body paragraphs (PT Serif 16px, line-height 1.55) with an Anton drop-cap
    "I" that color-cycles; last paragraph ends in the portfolio gallery link.
- **Starburst (absolute, top-right of section):** 132×132 spiky star (CSS `clip-path`
  polygon) with conic-gradient yellow/pink stripes, containing "World Exclusive!" (Anton
  26px, rotated -8°, hue-rotating). Pulses (scale, 1.6s).

### 6. Three-column spread
Grid `250px 1fr 290px`, 4px bottom border, 3px column dividers.
- **Left — "The Hot Sheet"** (bg `#00d1c1`): black title bar (Anton 26px, hue-rotating),
  subtitle "Everything · Nobody · Asked", then 5 gossip blurbs separated by 2px dashed
  rules. Each blurb = a colored bullet kicker (Oswald 700 uppercase 12px; alternating
  `#7c3aff` / `#ff2e63`, some blinking) + PT Serif 14px body. Kickers: Spotted, Feud
  Watch, Bombshell, Friends & Enablers, Just In.
- **Center** (bg `#fdf7e3`): "Beard Watch · Exclusive" chip; headline "Is Kenzo Growing
  It Out For A Role??" (Anton 45px, "Role??" color-cycles); PT Serif italic deck; a
  `1fr 1fr` grid of body text + a wobbling `3/4` photo placeholder. Below, the **Bakery
  box**: 4px `#ff2e63` border with flashing border (1.8s), a bouncing "🥐 Exclusive
  Tell-All" tab, headline "Inside Rachel's Underground Bakery Empire" (Anton 34px, last
  words color-cycle), body copy about the "illicit sustenance laboratory hidden in the
  redwoods — right here in West County," and an "Enter the bakery →" link.
- **Right** (bg `#7c3aff`): **Miracle ad** — 4px double border, bg `#ffe600`, wobbling
  (5s): "Advertisement" (blinking), "Melt Away 40 lbs With This One 3D Pinted Device"
  (Anton 30px), italic "Doctors are FURIOUS. Nerds are RICH.", and a flashing-bg
  "Results Not Typical · Or Real" bar. Below, **Horoscopes** — black "✦ Your Stars ✦"
  bar (hue-rotating), 4 entries (Aries, Leo, Scorpio, Pisces) with Oswald kickers and PT
  Serif bodies on the purple panel.

### 7. Poll + Reader mail (bottom grid `1fr 1fr`)
- **Poll** (bg `#ffe600`): "▶ You Decide ◀" kicker (blinking), "Dad Bod or Father
  Figure?" headline. Two vote buttons (Oswald 700 18px, 4px border, `#fdf7e3` bg; hover
  scales + rotates and turns `#ff2e63` / `#7c3aff`). After voting, buttons are replaced by
  result bars: Dad Bod 71% (`#ff2e63`, hue-rotating fill), Father Figure 29% (`#7c3aff`),
  a "★ your vote" tag on the chosen option, and a joke disclaimer line.
- **Reader mail** (bg `#00a884`): "Dear Satirer," (Anton 30px `#fdf7e3`), subtitle
  "Letters We Absolutely Made Up", 3 fake letters (PT Serif 14px) with italic
  attributions.

### 8. Footer
Centered Oswald uppercase 11px `#6b6455` on `#fdf7e3`: "The National Satirer · A.D.D.
Edition · Entirely Fictional · Suspiciously Delicious" + parody disclaimer.

## Interactions & Behavior
- **Poll:** the only real state. Initial view shows two buttons; clicking either sets
  `vote` to `'dad'` or `'father'`, which swaps the buttons for the fixed result bars
  (71% / 29%) and marks the chosen bar with "★ your vote". No un-vote. Results are
  hardcoded, not tallied.
- **Links:** all `<a href="#">` are placeholders. Wire to: portfolio (lead "SEE THE FULL
  SHOCKING GALLERY"), café, friends files, Rachel Bakery ("Enter the bakery"),
  deffgoingback / critics ("The critics weigh in"). Owner will supply URLs.
- **Hover:** links invert to `#1c1a17` on `#ffe600` with underline; poll buttons scale
  ~1.04 + slight rotate and change background.
- **Animations:** all decorative and infinite (see per-section notes). Named keyframes:
  `sat-pulse` (starburst/ellipse scale), `sat-spin` (confetti), `sat-blink`
  (steps(1) opacity flip), `sat-hue` (hue-rotate 360°), `sat-wobble` (±3° rotate),
  `sat-jitter`, `sat-marquee` (ticker), `sat-flash-bg` (cycle 3 bgs), `sat-bounce`
  (translateY), `sat-tape` (scale on a -4° tilt), `sat-flashborder` (border color +
  glow), `sat-shake` (translate/rotate), `sat-slide-color` (cycle text color). Respect
  `prefers-reduced-motion` in production — gate the infinite animations behind it.
- **Responsive:** source is desktop-first (1180px canvas). For mobile, collapse the
  `250px 1fr 290px` and `1fr 1fr` grids to single column and reduce the Anton display
  sizes (masthead 88px → ~48px, lead 76px → ~40px).

## State Management
- `vote: null | 'dad' | 'father'` — single piece of state driving the poll swap. No data
  fetching, no persistence (optional: persist to localStorage if you want the vote to
  stick across reloads).

## Design Tokens
**Colors**
- Ink / near-black: `#1c1a17` (borders, text, bars)
- Paper: `#fdf7e3`; alt paper: `#fff`
- Tabloid red / hot pink: `#ff2e63`
- Alarm yellow: `#ffe600`
- Cyan: `#00d1c1`; deep teal/green: `#00a884`
- Purple: `#7c3aff`
- Muted caption gray: `#6b6455`
- Body ink (softer): `#2a2620`
- Dark page backdrop: `#14121a` (with `#191527` hatch stripes)
- Photo placeholder hatch: `#d8d2c2` / `#cec7b4`

**Typography**
- Display: **Anton** 400 (all headlines, price, section bars) — uppercase, tight
  line-height (.85–.9), negative letter-spacing on large sizes.
- Labels / kickers / UI: **Oswald** 400–700 — uppercase, wide letter-spacing (.05–.3em).
- Body / decks / quotes: **PT Serif** 400/700 + italics.
- Sizes in use: 88 / 76 / 45 / 44 / 34 / 30 / 26 / 24 (display); 21 / 18 / 16 / 15 / 14 /
  13 (serif body/decks); 15 / 14 / 13 / 12 / 11 / 9 (Oswald labels).

**Borders / structure**
- Heavy black frames: 4px `#1c1a17` (outer + band dividers), 3px column dividers,
  2px dashed `#1c1a17` for gossip separators.
- Accent frames: 4px `#ff2e63` (bakery box), 4px double `#1c1a17` (ad).
- No border-radius anywhere (hard newsprint edges). No soft drop shadows except the outer
  card `0 30px 80px rgba(0,0,0,.6)` and animated glow on flashing borders.

**Spacing**
- Section padding ~20–30px vertical, 26–40px horizontal. Grid gaps 18–24px. Card max-width
  1180px.

## Assets
No real image assets — all photos are CSS diagonal-hatch placeholders labeled
`[ paparazzi photo ]`, `[ beard photo ]`, etc. Barcode and starburst are pure CSS
(`repeating-linear-gradient` and `clip-path` polygon). Emoji used as decorative accents
(⚡ 🏊 🧔 🥐 ✦ ▶ ◀ ●). Fonts loaded from Google Fonts: Anton, Oswald (400–700), PT Serif
(400/700 + italics). Owner will supply real photos to drop into the placeholders.

## Files
- `The National Satirer.dc.html` — the full high-fidelity prototype (all sections,
  animations, and the poll logic). This is the single source of truth for this handoff.
