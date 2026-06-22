# Liberty Exterior Co. — Website

A multi-page, SEO-optimized **Astro + Tailwind CSS** site for Liberty Exterior Co.
(window cleaning, pressure washing, gutter cleaning) serving Montgomery & Chester
County, PA. Static output, deploys to Vercel with zero config.

## Quick start

```bash
npm install      # install dependencies (Node 18+ required)
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to /dist
npm run preview  # preview the built site locally
```

## How it deploys

- Pushing to the `main` branch on GitHub auto-deploys to Vercel.
- `vercel.json` pins the framework to **astro** (`buildCommand: npm run build`,
  `outputDirectory: dist`) so Vercel builds correctly regardless of the project's
  original preset.
- `@astrojs/sitemap` generates `sitemap-index.xml`; `public/robots.txt` points to it.
  **After deploying, submit `https://libertyexteriorco.com/sitemap-index.xml` in
  Google Search Console.**

## Page map

| URL | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/contact` | `src/pages/contact.astro` (Jobber form + phone + hours) |
| `/services/window-cleaning` | `src/pages/services/[service].astro` |
| `/services/pressure-washing` | ↑ generated from `services` data |
| `/services/gutter-cleaning` | ↑ |
| `/service-areas` | `src/pages/service-areas/index.astro` |
| `/service-areas/<town>` | `src/pages/service-areas/[town].astro` (one per town) |
| `/privacy`, `/terms` | legal pages (placeholder copy — review with counsel) |
| `/sitemap-index.xml` | auto-generated |

Currently generated town pages: blue-bell, whitpain, ambler, malvern, exton,
west-chester, great-valley, wayne, media, doylestown, newtown.

## Architecture

- **`src/data/site.ts`** — single source of truth. Business facts, the services
  tree (drives the mega-menu, service grid, and service pages), the towns array,
  "why choose us" items, stats, and testimonials all live here.
- **`src/layouts/Layout.astro`** — all `<head>` SEO tags (title, meta description,
  canonical, Open Graph, Twitter Card), Google Fonts, and the site-wide
  `LocalBusiness` JSON-LD. Pages pass extra schema (Service, FAQPage, town
  LocalBusiness) via the `schema` prop.
- **`src/components/`** — `TopBar`, `Header` (mega-menu), `Hero`, `PageHero`,
  `ServiceAreaBand`, `ServiceGrid`, `WhyChooseGrid`, `StatBand`, `Testimonials`,
  `ServiceAreaList`, `CTABand`, `Footer`, `QuoteForm` (Jobber embed), `Logo`, `Icon`.
- **`src/styles/global.css`** — brand tokens as Tailwind `@theme` (navy `#16243D`,
  flag-red `#B3303A`, parchment, slate, success green, accents) plus ported
  component classes (buttons, mega-menu, cards).

## How to add a town

Add one entry to the `towns` array in `src/data/site.ts`:

```ts
{ slug: "phoenixville", name: "Phoenixville", county: "Chester County",
  region: "Chester County",
  blurb: "One or two local sentences about this town." },
```

A page (`/service-areas/phoenixville`), its schema, a sitemap entry, and links from
the service-area list + footer are all generated automatically on the next build.

## How to add / change a service or sub-service

Edit the `services` array in `src/data/site.ts`. Each service drives its own page,
the mega-menu dropdown, the home service grid, and its Service + FAQPage schema.

## How to swap photos

Drop real photos into `public/images/` using the same filenames and they're picked
up automatically:

- `hero-home.jpg` — homepage hero background (currently a placeholder copy of the
  old hero art). **Replace with a real landscape job photo.**
- `svc-windows.png`, `svc-wash.png`, `svc-gutter.png` — service card + page images.

Keep the same names, or update the `image` fields in `src/data/site.ts`. All images
have descriptive, keyword-aware alt text — update it if the photo changes.

## Brand reference

- **Fonts:** Oswald (headings + logo), Libre Franklin (body) via Google Fonts.
- **Colors:** Navy `#16243D`, Flag Red `#B3303A`, Parchment `#F4EEE1`,
  Slate `#5B6675`, Success green `#1F8A5B`, accents `#cf6a6f` / `#e07a80`,
  dark `#0f1a30`.

## ✅ Placeholder checklist — fill these in

Search the project for `{{` to find every placeholder. All live in
`src/data/site.ts` unless noted.

- [ ] **`{{REVIEW_COUNT}}`** — number of reviews (hero badge + schema). Once you
      have genuine reviews, set it, then flip `ENABLE_AGGREGATE_RATING = true` in
      `src/layouts/Layout.astro` to turn on rich-result star ratings.
- [ ] **`{{TESTIMONIAL_1/2/3}}`** + customer names/towns — real reviews in
      `testimonials`.
- [ ] **`{{HIC_NUMBER}}`** — PA Home Improvement Contractor # (footer). Remove the
      line if you don't register one.
- [ ] **`{{ADDRESS}}`** — business address (footer + LocalBusiness schema). Remove
      if home-based, or add `streetAddress`/`postalCode` in `Layout.astro` and the
      footer.
- [ ] **Office hours** — `business.hours` currently shows Mon–Fri 8–6, Sat 9–3, Sun
      closed. Set your real availability.
- [ ] **`{{FACEBOOK_URL}}` / `{{INSTAGRAM_URL}}` / `{{GOOGLE_PROFILE_URL}}`** —
      social links (`business.social`); used in the footer and `sameAs` schema.
- [ ] **`{{LAST_UPDATED_DATE}}`** + legal copy — `src/pages/privacy.astro` and
      `terms.astro` contain placeholder policies. Review with counsel.
- [ ] **Real photos** — replace `public/images/hero-home.jpg` and the service images.

## Bigger SEO wins (off-site)

1. Claim and fully complete a **Google Business Profile** for the Blue Bell / Malvern
   / Exton area.
2. Ask every customer for a review the day the job is finished.
3. After deploy, confirm the new service/town URLs are live and **submit the sitemap
   in Google Search Console.**
