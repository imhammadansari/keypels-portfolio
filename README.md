# KeyPels — Agency Website

Marketing site for **KeyPels**, a software development and AI solutions agency.
Static output, zero runtime dependencies, ready to deploy to any host (Netlify, Vercel,
Cloudflare Pages, S3 + CloudFront, nginx/Apache).

## Structure

```
index.html                      Homepage (hand-authored; header/footer injected by the build)
privacy.html  terms.html        Legal pages
services/index.html             Services overview  → /services/
services/<slug>/index.html      One page per service → /services/web-development/ …
portfolio/index.html            Portfolio overview → /portfolio/
portfolio/<slug>/index.html     One portfolio per service → /portfolio/web-development/ …
about/index.html                About page   → /about/
contact/index.html              Contact page → /contact/

assets/css/base.css             Design tokens, reset, typography, buttons, primitives
assets/css/sections.css         Homepage sections + global header, mega dropdown, footer
assets/css/service.css          Service-page components + the illustration library
assets/js/main.js               All interactions (no framework, no bundler)

tools/site.config.js            Brand, navigation and the service registry
tools/services/<slug>.js        All content for one service page
tools/portfolio/<slug>.js       All content for one portfolio page
tools/pages/about.js            About page content
tools/pages/contact.js          Contact page content
tools/icons.js                  Shared inline SVG icon set
tools/visuals.js                Shared illustration library
tools/components.js             Header, mobile menu, footer and every page section
tools/build.js                  Generator
```

## Working on it

```bash
npm run build     # regenerate service pages + inject header/footer + sitemap
npm run serve     # serve the folder (clean URLs need a server, not file://)
npm run dev       # both
```

There is no bundler and no framework. `tools/build.js` writes plain HTML; the browser
loads three CSS files and one JS file.

### Adding a service

1. Create `tools/services/my-service.js` (copy the closest existing one — each file is
   pure data plus a `sections` array that controls the page flow).
2. Create `tools/portfolio/my-service.js` the same way.
3. Add its slug to `SERVICE_SLUGS` in `tools/site.config.js`.
4. `npm run build`.

The new service appears automatically in **both** header dropdowns, the mobile menu, the
`/services` and `/portfolio` indexes, both footer columns, the "Other services" and
"Other portfolios" blocks on every page, and `sitemap.xml`. Service information is never
written twice.

### Editing the header or footer

Edit `tools/components.js`, then `npm run build`. The header, mobile menu and footer are
injected into `index.html`, `privacy.html` and `terms.html` between markers:

```html
<!-- @header --> … <!-- /@header -->
<!-- @mobilemenu --> … <!-- /@mobilemenu -->
<!-- @footer --> … <!-- /@footer -->
```

Anything you type between those markers is overwritten on the next build. Everything
outside them (the entire homepage body) is hand-authored and left untouched.

## Page architecture

Every service page is composed from the same section renderers in `tools/components.js`,
ordered per service by its `sections` array — so pages share an architecture without
sharing a layout:

| Section | Component | Used by |
|---|---|---|
| `hero` | `serviceHero` | all |
| `intro` | `serviceIntro` — sticky visual + copy + four points | all |
| `offerings` | `offerings` — vertical tabs with an illustrated panel | all |
| `assurance` | `assurance` — measurable standards, animated counters | mobile, automation, agents, chatbots |
| `process` | `processSection` — 4–7 numbered steps | all |
| `differentiators` | accordion | mobile, agents |
| `benefits` | `benefits` — icon card grid | mobile, crm, automation, chatbots |
| `tech` | `techSection` — grouped stack | web, crm, agents |
| `pricing` | `pricing` — three engagement models | web, mobile, crm, automation, chatbots |
| `faq` | `faq` — accordion + FAQPage schema | all |
| `cta` | `ctaSection` | all |
| `more` | `moreServices` | all |

Portfolio pages share the header, footer, CTA panel and illustration library, and add four
components of their own in the same design language:

| Section | Component | Contents |
|---|---|---|
| `hero` | `portfolioHero` | Breadcrumb, title, lead, cover illustration, capability pills |
| `work` | `workGrid` | Six project cards — number, category, illustration, title, description, tech tags |
| `approach` | `approachGrid` | Six methodology steps with icons |
| `outcomes` | `outcomesGrid` | Five common-challenge cards |

About and Contact are single pages, each assembled from its own section set:

| Page | Sections |
|---|---|
| About | Hero with four animated counters → "Our Journey" milestone timeline → Mission & Vision → Core Values → Why KeyPels (six cards, each with a stat) → CTA |
| Contact | Hero with four contact-method cards → enquiry form with "what happens next" → office switcher with a CSS-drawn map → quick-answers FAQ → CTA |

## Navigation

`NAV` in `tools/site.config.js` drives the header and mobile menu:

```
Services ▾   Portfolio ▾   About            [ Let's Talk → /contact/ ]
```

Both dropdowns iterate the same service registry. `CONTACT_PATH` and `ABOUT_PATH` in the
same file are used by every CTA on the site, so moving either page is a one-line change.

## Design system

Everything visual is driven by the custom properties at the top of `assets/css/base.css`
— brand colours, gradients, surfaces, radii, rhythm, typefaces. Service pages introduce
no new tokens, no new type scale and no new button styles; they reuse `.btn`,
`.section-head`, `.eyebrow`, `.accordion` and the `.cta` panel from the homepage.

Fonts (Plus Jakarta Sans / Inter) load asynchronously from Google Fonts behind a full
system fallback stack, so the page still renders correctly offline.

## Illustrations

There are no image files anywhere in the site. Every device mockup, dashboard, workflow
canvas, agent log and chat panel is hand-built markup in `tools/visuals.js` styled by
`service.css` — nothing to optimise, nothing that can 404, and each composition is
service-specific rather than stock.

## Interactions (`assets/js/main.js`)

Each behaviour is an isolated function that no-ops when its markup is absent:

- Sticky header — compacts on scroll, hides on scroll-down, returns on scroll-up
- Services mega dropdown — hover intent, click, full keyboard support, `Esc` to close
- Mobile menu with an expanding services submenu, focus return and scroll lock
- Offering tabs — roving tabindex, arrow/Home/End keys, correct ARIA
- `IntersectionObserver` scroll reveals with per-element stagger
- Animated counters, process timeline fill, FAQ accordion, nav scroll-spy
- Hero parallax, pointer tilt, card spotlight, magnetic CTAs
- Contact form with inline validation, and header-aware smooth anchor scrolling

Motion-heavy effects are disabled under `prefers-reduced-motion: reduce`, and
pointer-driven effects are skipped on touch devices.

## Wiring the contact form

`index.html` → `<form class="form" data-form>` validates and shows a success state
client-side only. To deliver submissions, add an `action` and replace the marked block
near the end of `initForm()` in `assets/js/main.js`:

```js
fetch(form.action, { method: 'POST', body: new FormData(form) })
  .then(function (r) { if (!r.ok) throw new Error(); /* success UI */ })
  .catch(function () { /* error UI */ });
```

## Before going live

- Replace `contact@keypels.com` and the `https://keypels.com/` URLs (`tools/site.config.js`
  drives canonical, OG, sitemap; `robots.txt` has its own copy)
- Point the LinkedIn / Instagram / X links at the real profiles
- Add a real `og:image` (1200×630) and reference it from the `<head>`
- Swap the placeholder client wordmarks in the homepage trust marquee for real logos
- Review the numbers used as engineering standards (Lighthouse 95+, 60 fps, 99% crash-free,
  response times). They are deliberately targets rather than historical claims — confirm
  each one is a commitment you want to make.
- **Confirm the pricing.** Every service page now shows three tiers with "from" monthly
  figures. Web and mobile mirror the reference pricing structure; the other four were set to
  fit each service. All of them live in `tools/services/<slug>.js` — check every number
  before this goes live.
- Work/case-study cards on the homepage and every portfolio page are **representative
  project profiles, not real named clients** — each portfolio grid carries a visible note
  saying so. Swap them for genuine case studies as soon as you can name clients, and remove
  the note when you do.
