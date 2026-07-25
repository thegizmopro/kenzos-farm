# The National Satirer — kenzos-farm

A tabloid-parody personal homepage for Kenzo Bradbury. Loud supermarket-gossip-rag
aesthetic, built as a single static page with vanilla HTML/CSS/JS — no framework,
no build step, no dependencies.

The fake stories are portals to the owner's real sites (portfolio, Rachel Bakery,
review site, friends' pages). The only real state on the page is the reader poll,
which persists to `localStorage`.

## Stack

- Plain HTML5 + CSS3 + vanilla JS
- Three stylesheets: `css/tokens.css` (CSS custom properties) → `css/styles.css`
  (keyframes + utility primitives) → `css/layout.css` (page layout & responsive)
- Fonts from Google Fonts: **Anton** (display), **Oswald** (UI), **PT Serif** (body)

## Run locally

Just open `index.html` in a browser. No server required.

If you want a dev server (LiveReload, etc.):

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploy

This is a flat static site — works on Vercel, Netlify, Cloudflare Pages, or GitHub
Pages with zero configuration. Set the project root to `/` and the build command to
none.

## TODO — real URLs

The following links are placeholder `#` waiting on the owner's real destinations.
Search for `TODO` in `index.html`:

- Lead story: "SEE THE FULL SHOCKING GALLERY" → portfolio
- Hot sheet: "More at the café" → café site
- Hot sheet: "The friends files" → friends page
- Beard story: "The critics weigh in" → deffgoingback review site
- Bakery box: "Enter the bakery" → Rachel Bakery

## TODO — real photos

All photos are CSS diagonal-hatch placeholders labeled `[ paparazzi photo ]`,
`[ beard photo ]`. Drop real images into an `/img` directory and replace the
`.ns-photo` elements' contents as needed.

## Project layout

```
.
├── index.html                              ← the page
├── css/
│   ├── tokens.css                          ← design tokens (single source of truth)
│   ├── styles.css                          ← keyframes + utility primitives
│   └── layout.css                          ← page layout & responsive
├── js/
│   └── poll.js                             ← poll widget (localStorage)
├── design_handoff_national_satirer/        ← original design handoff (reference)
└── design_system_national_satirer/         ← original design system (reference)
```

The two `design_*_national_satirer/` directories are the original spec materials
and are kept for reference. They are not loaded by `index.html`.

## Design tokens

| Token | Hex | Use |
|---|---|---|
| Ink | `#1c1a17` | borders, bars, primary text |
| Ink soft | `#2a2620` | body copy on paper |
| Paper | `#fdf7e3` | main newsprint |
| Red / hot pink | `#ff2e63` | primary alarm accent |
| Alarm yellow | `#ffe600` | highlights, tape tags |
| Cyan | `#00d1c1` | electric panel |
| Green / teal | `#00a884` | deep panel |
| Purple | `#7c3aff` | violet panel |
| Caption | `#6b6455` | captions, disclaimers |
| Backdrop | `#14121a` | dark page behind card |

## Non-negotiables

- **Zero border-radius.** Hard newsprint edges only.
- **Max two accent colors per panel.** Rotate red/yellow/cyan/green/purple across panels.
- **All infinite animation gated behind `prefers-reduced-motion`.**
- **Voice:** silly, affectionate roast — never punch down.

## License

Personal site. All persons, pools, and beards depicted are parody.
