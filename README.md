# Liberty Exterior Co. Website

A complete, single-page marketing website for Liberty Exterior Co. (window cleaning, pressure washing, and gutter cleaning). Plain HTML, CSS, and JavaScript. No build step, no framework, no dependencies.

## What's in here

```
liberty-website/
  index.html        The entire website (HTML + CSS + JS in one file)
  images/           Logo-art placeholder illustrations for the hero and 3 services
  README.md         This file
```

## Run it locally

It's a static site, so any static server works. From inside this folder:

```bash
# Option A: Python (already installed on most machines)
python3 -m http.server 8000
# then open http://localhost:8000

# Option B: Node
npx serve
```

You can also just double-click `index.html` to open it in a browser. A local server is only needed so the contact form's fetch call behaves like it will in production.

## Deploy it (pick one)

All three give you a free hosted URL. Netlify is the simplest because the contact form works with zero extra setup.

### Netlify (recommended, form works out of the box)
1. Go to app.netlify.com, drag this `liberty-website` folder onto the page.
2. That's it. Netlify auto-detects the form (it has `data-netlify="true"`) and emails you submissions. Set the notification email under Site settings > Forms > Form notifications.

### Vercel
```bash
npm i -g vercel
vercel
```
Follow the prompts. For the form, see "Wiring the contact form" below (use Formspree).

### GitHub Pages
1. Push this folder to a GitHub repo.
2. Repo Settings > Pages > deploy from the `main` branch, root folder.
3. For the form, use Formspree (see below). Netlify Forms does not work on GitHub Pages.

### Custom domain
After deploying, add `libertyexteriorco.com` in your host's domain settings and point your DNS there. Each host has a one-page guide for this.

## Wiring the contact form

The form currently shows a "Request received" confirmation on submit. To actually receive leads, point it at a form service. Two easy options:

### Netlify Forms
Nothing to do. The form already has `name="quote"`, a hidden `form-name` field, and `data-netlify="true"`. Deploy on Netlify and submissions show up in your dashboard. Add your email under Forms > notifications.

### Formspree (works on any host)
1. Create a free form at formspree.io and copy its endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
2. In `index.html`, find the `<form id="quoteForm" ...>` tag and set the `action`:
   ```html
   <form id="quoteForm" ... action="https://formspree.io/f/abcdwxyz">
   ```
The JavaScript already posts to whatever `action` URL you set and then shows the confirmation. If `action` is empty, it still shows the confirmation so the page never looks broken during testing.

## Editing content

Everything is plain text in `index.html`. Common edits:

- **Phone number**: search for `8135975980` (used in `tel:` links) and `(813) 597-5980` (the visible text). Update both.
- **Email**: search for `chris@libertyexteriorco.com`.
- **Service area**: search for `the greater metro area` and replace with your city or region.
- **Copy**: each section is labeled with an HTML comment (`HERO`, `SERVICES`, `HOW IT WORKS`, `WHY CHOOSE`, `QUOTE`, `FOOTER`).

## Swapping the photos

The 4 files in `images/` are placeholder illustrations. Replace them with real job photos using the same filenames and the site picks them up automatically:

- `hero-house.png` — main hero image (shows around 510 x 480, gets cropped to fill)
- `svc-windows.png`, `svc-wash.png`, `svc-gutter.png` — service cards (show around 345 x 190)

Use landscape photos for best results. Keep the same names, or update the `src` attributes in `index.html`.

## Brand reference

- **Fonts**: Oswald (headings, the logo) and Libre Franklin (body). Loaded from Google Fonts in the `<head>`.
- **Colors**:
  - Liberty Navy `#16243D`
  - Flag Red `#B3303A`
  - Parchment `#F4EEE1`
  - Slate `#5B6675`
  - Success green `#1F8A5B` (checkmarks)

## Notes for the developer

This is production-ready static HTML and can ship as-is. If you'd rather rebuild it in a framework (React, Astro, etc.), treat `index.html` as the visual spec: the colors, fonts, spacing, copy, and section structure are all final. The layout uses CSS grid with inline styles plus a small `<style>` block at the top for hover states and the mobile breakpoints (stacks at 880px and 560px).
