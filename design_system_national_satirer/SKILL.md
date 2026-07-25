# The National Satirer — Design System

Use this skill when building anything in the **National Satirer** tabloid-parody style: a
satirical supermarket-gossip-rag look (screaming headlines, heavy newsprint frames, alarm
colors, over-the-top animation) — homepages, spreads, cover pages, fake ads, poll widgets.

## What this is
A loud tabloid/gossip-rag parody kit. Aesthetic anchors: hard black newsprint frames (no
rounded corners), a warm paper base, FOUR screaming accent colors used no more than two
per panel, three fonts (Anton display / Oswald labels / PT Serif body), and unapologetic
infinite animation (scrolling ticker, spinning starbursts, blinking banners, color-cycling
headlines).

## How to use it
1. Read `README.md` for the full token/component/voice reference.
2. Import `tokens.css` then `styles.css`; add the Google Fonts link (Anton, Oswald 400-700,
   PT Serif 400/700+italics).
3. Compose from the reference spread `The National Satirer.dc.html` — copy its section
   markup (masthead, marquee, lead story, three-column spread, poll, reader mail, ad) and
   swap in new content.
4. See everything rendered in `Design System.dc.html`.

## Non-negotiables
- **Zero border-radius.** Hard newsprint edges only.
- **Max two accent colors per panel.** Rotate red/yellow/cyan/green/purple across panels.
- **Headlines are Anton, UPPERCASE, tight line-height.** Labels are Oswald, wide tracking.
  Body is PT Serif.
- **Every claim gets a disclaimer / footnote of doubt.** Sources are anonymous, then named.
- **Gate all infinite animation behind `prefers-reduced-motion`.**
- **Voice:** silly, affectionate roast — never punch down.

## Tokens (quick ref)
Ink `#1c1a17` · Paper `#fdf7e3` · Red `#ff2e63` · Yellow `#ffe600` · Cyan `#00d1c1` ·
Green `#00a884` · Purple `#7c3aff` · Caption `#6b6455` · Backdrop `#14121a`.

## Components
Banner/chip · Starburst · Photo placeholder (with circle-of-shame + tape tag) ·
Price+barcode · Gossip blurb · Poll (buttons → result bars) · Miracle ad · Marquee ticker.
Full markup lives in `The National Satirer.dc.html`.
