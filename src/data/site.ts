// ============================================================
// SINGLE SOURCE OF TRUTH for Liberty Exterior Co.
// Edit business facts, services, and towns here — pages, the
// mega-menu, the service grid, schema, and the sitemap all read
// from this file. To add a town, add one entry to `towns`.
// {{ }} markers are placeholders YOU must fill in (see README).
// ============================================================

export const business = {
  name: "Liberty Exterior Co.",
  legalName: "Liberty Exterior Co.",
  domain: "https://libertyexteriorco.com",
  phoneDisplay: "(215) 978-9719",
  phoneHref: "tel:2159789719",
  email: "chris@libertyexteriorco.com",
  foundedYear: 2026,
  priceRange: "$$",
  // Placeholders — do not invent. Fill in when known (see README checklist).
  hicNumber: "{{HIC_NUMBER}}",
  address: "{{ADDRESS}}",
  reviewCount: "{{REVIEW_COUNT}}",
  // Office hours — edit to your real availability.
  hours: [
    { day: "Mon–Fri", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 3:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: {
    facebook: "{{FACEBOOK_URL}}",
    instagram: "{{INSTAGRAM_URL}}",
    google: "{{GOOGLE_PROFILE_URL}}",
  },
  // Counties served (used in schema + copy).
  counties: ["Montgomery County", "Chester County"],
  state: "PA",
} as const;

// The Jobber embed — preserved exactly from the original site.
// Rendered raw inside the QuoteForm component.
export const jobber = {
  clienthubId: "20e4967a-d1b4-4256-b3e1-75265d5650c0-4888609",
  scriptSrc:
    "https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js",
  formUrl:
    "https://clienthub.getjobber.com/client_hubs/20e4967a-d1b4-4256-b3e1-75265d5650c0/public/work_request/embedded_work_request_form?form_id=4888609",
  cssHref:
    "https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css",
} as const;

export type SubService = { name: string; desc: string };
export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string; // one-line for cards / menus
  icon: string; // Icon component name
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[]; // body paragraphs
  included: string[];
  subservices: SubService[];
  process: { title: string; body: string }[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    short: "Streak-free glass inside and out, screens, tracks, and skylights.",
    icon: "window",
    image: "/images/svc-windows.png",
    imageAlt:
      "Professional window cleaner squeegeeing a streak-free residential window in the Philadelphia suburbs",
    metaTitle: "Window Cleaning in Montgomery & Chester County | Liberty Exterior Co.",
    metaDescription:
      "Professional interior & exterior window cleaning in Blue Bell, Malvern, Exton & nearby. Streak-free glass, screens, tracks, and skylights. Free same-day quotes.",
    intro: [
      "Clean windows change how your whole home feels — more daylight, a sharper view, and a first impression that says the place is cared for. Liberty Exterior Co. delivers streak-free glass for homes and businesses across Montgomery and Chester County, using purified water and professional squeegee work rather than the soapy smears a quick DIY pass leaves behind.",
      "We treat the full window, not just the pane. That means the interior and exterior glass, the screens, and the tracks and sills where dirt and dead bugs collect. For second-story and hard-to-reach glass we use pure-water-fed poles that rinse spotless and keep our crew safely on the ground. The result is glass that genuinely disappears — no haze in the morning sun, no streaks at sunset.",
      "Every visit is handled by careful, fully insured crews who treat your home like their own: shoes off where it matters, furniture moved back exactly where it was, and a walkthrough before we leave so you only sign off when it's right. Whether it's a one-time spring refresh or a recurring schedule, you get the same upfront pricing and the same 100% satisfaction guarantee.",
    ],
    included: [
      "Interior and exterior glass, hand-detailed and squeegee-finished",
      "Screen cleaning and reset",
      "Window track and sill detailing",
      "Spot-free purified-water rinse on exterior glass",
      "Sills wiped and frames touched up",
      "Full walkthrough before we pack up",
    ],
    subservices: [
      { name: "Interior & Exterior Glass", desc: "Both sides hand-detailed for a true streak-free finish." },
      { name: "Screen Cleaning", desc: "Screens removed, washed, dried, and reset so airflow and views stay clear." },
      { name: "Track & Sill Detailing", desc: "We vacuum and wipe the grime, grit, and debris that build up in tracks." },
      { name: "Hard-Water Stain Removal", desc: "Mineral spotting from sprinklers and runoff buffed off the glass." },
      { name: "Storefront / Commercial Glass", desc: "Entry doors and display glass kept spotless on a schedule that fits your hours." },
      { name: "Skylights", desc: "Overhead and angled glass cleaned safely to bring the daylight back." },
    ],
    process: [
      { title: "Free quote", body: "Tell us your window count and we send a clear, no-obligation price the same day." },
      { title: "We schedule you in", body: "Pick a window that works. We confirm and show up on time." },
      { title: "Detailed, careful clean", body: "Glass, screens, tracks, and sills — done right and tidied up." },
      { title: "Walkthrough & guarantee", body: "We check every pane with you. Not happy? We make it right." },
    ],
    faqs: [
      { q: "Do you clean both the inside and outside of the windows?", a: "Yes. Our standard window cleaning covers interior and exterior glass, plus screens, tracks, and sills. If you only want exterior, just let us know and we'll price it accordingly." },
      { q: "How often should I have my windows cleaned?", a: "Most homeowners in Montgomery and Chester County do it once or twice a year — typically spring and fall. Homes near trees, pollen, or busy roads, and most storefronts, benefit from a recurring quarterly schedule." },
      { q: "Can you reach second-story and hard-to-access windows?", a: "Yes. We use pure-water-fed poles and the right ladders to safely clean upper-floor windows and skylights, so you get spotless glass without anyone climbing where they shouldn't." },
      { q: "Will you remove hard-water stains?", a: "In most cases, yes. Mineral spotting from sprinklers and runoff can usually be buffed out. Severe, long-set staining sometimes needs a dedicated restoration step, which we'll flag in your quote." },
    ],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    short: "Soft-wash house exteriors plus driveways, patios, decks, and more.",
    icon: "spray",
    image: "/images/svc-wash.png",
    imageAlt:
      "Soft-wash house washing removing dirt and algae from siding on a suburban Pennsylvania home",
    metaTitle: "Pressure Washing in Montgomery & Chester County | Liberty Exterior Co.",
    metaDescription:
      "Soft-wash house washing, driveways, patios, decks, siding & roofs in Blue Bell, Malvern, West Chester & nearby. Licensed, insured, free same-day quotes.",
    intro: [
      "Green algae on the siding, black streaks on the roof, a driveway gone gray — exterior grime builds so slowly you stop seeing it, until a fresh wash reminds you what the house is supposed to look like. Liberty Exterior Co. brings that curb appeal back for homes and businesses throughout Montgomery and Chester County.",
      "We match the method to the surface. Siding, soft roofs, and painted wood get a low-pressure soft wash with professional cleaning solutions that kill algae and mildew at the root instead of just blasting the surface. Hard surfaces like concrete driveways, walkways, and pavers get controlled high-pressure cleaning that lifts out ground-in dirt and stains. Using the wrong pressure is how DIY jobs etch concrete and strip paint — getting it right is the whole job.",
      "Our crews are fully insured and trained to protect what's around the work zone: plants are rinsed and watered, fixtures are covered, and we keep runoff in check. You get upfront pricing, a same-day quote, and our 100% satisfaction guarantee on every wash — one-time or on a recurring plan that keeps the algae from ever coming back.",
    ],
    included: [
      "Surface-appropriate soft wash or high-pressure cleaning",
      "Algae, mildew, and mold treatment that prevents fast regrowth",
      "Pre-wash plant protection and post-wash rinse",
      "Detailed edges, corners, and trouble spots",
      "Careful, fully insured crews",
      "Walkthrough and satisfaction check before we leave",
    ],
    subservices: [
      { name: "House Washing (Soft Wash)", desc: "Low-pressure cleaning that safely strips algae and dirt from siding." },
      { name: "Driveways & Walkways", desc: "High-pressure cleaning that lifts years of grime, oil, and stains from concrete." },
      { name: "Patios & Decks", desc: "Gentle, wood- and stone-safe washing that brings outdoor living space back." },
      { name: "Siding Cleaning", desc: "Vinyl, fiber-cement, and stucco brightened without damaging the surface." },
      { name: "Roof Washing", desc: "Soft-wash treatment that removes black streaks and roof algae at the root." },
      { name: "Fence Cleaning", desc: "Wood and vinyl fencing cleaned to match a freshly washed home." },
    ],
    process: [
      { title: "Free quote", body: "Send us the surfaces and square footage; we price it the same day." },
      { title: "We schedule you in", body: "We confirm a date and arrive on time, ready to work." },
      { title: "Right method, right pressure", body: "Soft wash for delicate surfaces, high pressure for hard ones." },
      { title: "Walkthrough & guarantee", body: "We review the results with you and stand behind every wash." },
    ],
    faqs: [
      { q: "What's the difference between soft washing and pressure washing?", a: "Soft washing uses low pressure plus cleaning solutions to safely treat siding, roofs, and painted surfaces — it kills algae and mildew rather than just blasting it. Pressure washing uses higher pressure for hard surfaces like concrete. We choose the method that won't damage your surface." },
      { q: "Will pressure washing damage my siding or roof?", a: "Not when it's done correctly. That's exactly why we soft wash delicate surfaces. High pressure on the wrong surface is how DIY jobs etch concrete or strip paint — matching pressure to material is the core of professional washing." },
      { q: "How often should I wash my home's exterior?", a: "Most homes in our area benefit from a house wash every 1–2 years, and concrete every year or two. Shaded, tree-lined, and north-facing surfaces grow algae faster and may need annual attention. Recurring plans keep it from ever building up." },
      { q: "Do you protect landscaping during the wash?", a: "Yes. We pre-rinse and water plants before and after, cover sensitive fixtures, and manage runoff so your landscaping is protected throughout the job." },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    short: "Cleared, flushed gutters and downspouts — plus guards and brightening.",
    icon: "gutter",
    image: "/images/svc-gutter.png",
    imageAlt:
      "Technician clearing leaves and debris from a home's gutters to restore proper drainage",
    metaTitle: "Gutter Cleaning in Montgomery & Chester County | Liberty Exterior Co.",
    metaDescription:
      "Gutter clearing, downspout flushing, brightening & guard installation in Ambler, Blue Bell, Exton & nearby. Protect your home. Free same-day quotes.",
    intro: [
      "Clogged gutters are quiet until they're expensive. When leaves and grit dam up the channel, water spills over the edge and finds your fascia, your foundation, and your basement instead of the downspout. Liberty Exterior Co. keeps that water moving where it should — protecting homes across Montgomery and Chester County one cleaning at a time.",
      "We don't just scoop the top layer and leave. We clear the full run of debris by hand, bag it, then flush the gutters and downspouts with water to confirm everything actually drains. If a downspout is blocked, we clear it. If we spot a loose hanger, a separated seam, or early fascia damage while we're up there, we tell you — so a five-dollar problem doesn't become a five-thousand-dollar one.",
      "For homeowners tired of the twice-a-year climb, we install quality gutter guards that keep leaves out while letting water through, and we offer gutter brightening to strip the black tiger-stripe stains off the gutter faces. Every job is handled by careful, fully insured crews, backed by upfront pricing and our 100% satisfaction guarantee.",
    ],
    included: [
      "Full hand-clearing of leaves and debris from every run",
      "Debris bagged and hauled away — not left in your beds",
      "Downspouts flushed and confirmed flowing",
      "Visual check of hangers, seams, and fascia",
      "Ground-level cleanup before we leave",
      "Careful, fully insured crews",
    ],
    subservices: [
      { name: "Gutter Clearing & Flush", desc: "Full hand-clearing followed by a water flush to confirm proper drainage." },
      { name: "Downspout Clearing", desc: "Blocked downspouts cleared so water reaches the ground, not your foundation." },
      { name: "Gutter Brightening", desc: "Black tiger-stripe stains scrubbed off the exterior gutter faces." },
      { name: "Gutter Guard Installation", desc: "Quality guards that keep leaves out and end the twice-a-year climb." },
    ],
    process: [
      { title: "Free quote", body: "Tell us your home's size and gutter run; we price it the same day." },
      { title: "We schedule you in", body: "We confirm a date and arrive ready, with the right ladders and gear." },
      { title: "Clear, flush, inspect", body: "Hand-clear the debris, flush the system, and flag anything we see." },
      { title: "Walkthrough & guarantee", body: "We confirm everything drains and stand behind the work." },
    ],
    faqs: [
      { q: "How often should gutters be cleaned?", a: "For most homes in our area, twice a year — late spring and late fall — keeps them flowing. Homes surrounded by mature trees, especially oaks and pines, often need more frequent attention. Gutter guards can stretch that interval considerably." },
      { q: "Do you flush the downspouts too?", a: "Always. Clearing the gutters without confirming the downspouts flow is only half the job. We flush the full system with water and clear any blockages so you know it actually drains." },
      { q: "Do you haul away the debris?", a: "Yes. We bag the leaves and debris and take them with us — we don't leave piles in your flower beds or on the lawn." },
      { q: "Are gutter guards worth it?", a: "For tree-heavy properties, usually yes. Quality guards dramatically cut how often the gutters need clearing and reduce the risk of clogs and overflow. We'll give you an honest read on whether they make sense for your home." },
    ],
  },
];

export type Town = {
  slug: string;
  name: string;
  county: string;
  region: string;
  blurb: string;
};

// To add a town: add one entry here. A page, schema, sitemap entry,
// and service-area link are generated automatically.
export const towns: Town[] = [
  { slug: "blue-bell", name: "Blue Bell", county: "Montgomery County", region: "Montgomery County",
    blurb: "From the neighborhoods off Skippack Pike to the homes around Normandy Farms, Blue Bell properties show off when the glass, siding, and gutters are kept clean." },
  { slug: "whitpain", name: "Whitpain", county: "Montgomery County", region: "Montgomery County",
    blurb: "Whitpain Township homes sit on wooded lots that look their best with regular exterior care — and fill gutters fast every fall." },
  { slug: "ambler", name: "Ambler", county: "Montgomery County", region: "Montgomery County",
    blurb: "Ambler's mix of historic borough homes and newer construction all benefit from careful, surface-appropriate exterior cleaning." },
  { slug: "malvern", name: "Malvern", county: "Chester County", region: "Chester County",
    blurb: "From the borough to the Great Valley corporate corridor, Malvern homes and businesses count on clean glass and bright exteriors." },
  { slug: "exton", name: "Exton", county: "Chester County", region: "Chester County",
    blurb: "Exton's busy mix of residential developments and commercial frontage means exteriors take a beating — and shine after a professional wash." },
  { slug: "west-chester", name: "West Chester", county: "Chester County", region: "Chester County",
    blurb: "West Chester's historic homes and storefronts deserve glass and surfaces cleaned with the right method for each material." },
  { slug: "great-valley", name: "Great Valley", county: "Chester County", region: "Chester County",
    blurb: "Homes and offices across the Great Valley benefit from recurring exterior cleaning that keeps curb appeal high year-round." },
  { slug: "wayne", name: "Wayne", county: "Delaware County", region: "Main Line",
    blurb: "Main Line homes in Wayne set a high bar for curb appeal — spotless windows and clean exteriors are part of the standard." },
  { slug: "media", name: "Media", county: "Delaware County", region: "Delaware County",
    blurb: "From borough rowhomes to leafy side streets, Media properties look their best with regular window, wash, and gutter care." },
  { slug: "doylestown", name: "Doylestown", county: "Bucks County", region: "Bucks County",
    blurb: "Doylestown's historic charm shows brightest when the glass is streak-free and the exterior is clean." },
  { slug: "newtown", name: "Newtown", county: "Bucks County", region: "Bucks County",
    blurb: "Newtown homes and businesses rely on careful exterior cleaning to protect and brighten their properties." },
];

// Towns featured in the hero service-area band (a readable subset).
export const featuredTownNames = ["Blue Bell", "Malvern", "Exton", "West Chester", "Ambler", "Wayne"];

export type WhyItem = { icon: string; title: string; body: string };

export const whyChoose: WhyItem[] = [
  { icon: "bolt", title: "Free Same-Day Quotes", body: "Reach out and get a clear, no-obligation price the same day — no waiting around." },
  { icon: "shield", title: "Licensed & Fully Insured", body: "Every job is covered. You're protected from the moment we arrive to the moment we leave." },
  { icon: "badge", title: "100% Satisfaction Guarantee", body: "If it's not right, we make it right. You sign off only when you're happy." },
  { icon: "home", title: "Locally Owned & Operated", body: "We live and work in Montgomery and Chester County — your neighbors, not a franchise." },
  { icon: "users", title: "Careful, Insured Crews", body: "Trained teams who protect your landscaping, fixtures, and floors like their own." },
  { icon: "tag", title: "Upfront, Honest Pricing", body: "The number we quote is the number you pay. No surprises, no pressure." },
  { icon: "repeat", title: "Recurring Plans Available", body: "Set it and forget it. Keep your home spotless year-round on a schedule that suits you." },
  { icon: "star", title: "Five-Star Service", body: "We're building our reputation one meticulous job at a time — and it shows." },
];

export type Stat = { value: string; label: string };

// HONEST credibility band — no fabricated history or job counts.
export const stats: Stat[] = [
  { value: "100%", label: "Satisfaction Guarantee" },
  { value: "Licensed", label: "& Fully Insured" },
  { value: "Free", label: "Same-Day Quotes" },
  { value: "Local", label: "Montgomery & Chester County" },
];

// Review-platform placeholders for the testimonials section.
export const reviewPlatforms = ["Google", "Yelp", "Facebook", "Nextdoor"];

export type Testimonial = { quote: string; name: string; town: string };

// Editable placeholders — replace with real reviews once you have them.
export const testimonials: Testimonial[] = [
  { quote: "{{TESTIMONIAL_1 — paste a real customer review here once you have one.}}", name: "{{Customer name}}", town: "{{Town}}" },
  { quote: "{{TESTIMONIAL_2 — paste a real customer review here once you have one.}}", name: "{{Customer name}}", town: "{{Town}}" },
  { quote: "{{TESTIMONIAL_3 — paste a real customer review here once you have one.}}", name: "{{Customer name}}", town: "{{Town}}" },
];

// Primary navigation (the mega-menu is built from `services`).
export const nav = [
  { label: "Services", href: "/#services", mega: true },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
