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
loads three CSS files and one JS file. `index.html` loads `service.css` too — the media
frames and portfolio previews in its services and selected-work grids live there.

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
| `pricing` | `pricing` — three engagement models | web, mobile, crm, automation, chatbots |
| `faq` | `faq` — accordion + FAQPage schema | all |
| `cta` | `ctaSection` | all |

Portfolio pages share the header, footer and CTA panel, and add three components of their
own in the same design language:

| Section | Component | Contents |
|---|---|---|
| `hero` | `portfolioHero` | Breadcrumb, title, lead, cover illustration, capability pills |
| `work` | `workGrid` | Project cards — number, category, live preview, title, description, tech tags |
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

The palette is gold on charcoal:

| | |
|---|---|
| `--gold` `#D4A017` | primary |
| `--gold-hover` `#E0B52A` | hover / the light end of the ramp, used on charcoal |
| `--gold-accent` `#B8860B` | accent / the deep end, used on paper |
| `--ink-900` `#171717` | dark surfaces |
| `--paper-alt` `#FAF8F2` | page background |
| `--text-dark` `#222222` | body text |
| `--on-gold` `#171717` | text on a gold fill — white on gold is only 2.3:1 |

The `--indigo-*` / `--violet-*` / `--cyan-*` token names are historical and now hold
points on the gold ramp. The 300/400 end is the light gold used on charcoal, the 500/600
end the deep gold used on paper — which is how they were already used, so re-theming was
a values-only change.

Fonts (Plus Jakarta Sans / Inter) load asynchronously from Google Fonts behind a full
system fallback stack, so the page still renders correctly offline.

## Illustrations

Every device mockup, dashboard, workflow canvas, agent log and chat panel used on the
service pages is hand-built markup in `tools/visuals.js` styled by `service.css` —
nothing to optimise, nothing that can 404, and each composition is service-specific
rather than stock.

Two things are the exception, and both show real captures rather than a drawing of one:

- the **portfolio work grids**, via the preview components below;
- the **service-page frames** — hero, intro and every offering tab — plus the homepage
  work cards. Each declares its visual as an object instead of a library key:

  ```js
  heroVisual: { img: 'preview/web/steela.webp', kind: 'browser',
                label: 'steela.com.au', alt: '…', w: 500, h: 1562 }
  ```

  `kind` picks the chrome — `browser` for sites and CRM consoles, `phone` for app screens,
  `canvas` for workflow canvases (whose plate takes the canvas's own aspect ratio, clamped,
  so a 4:1 workflow does not sit in a 16:9 letterbox). `renderVisual` still accepts a plain
  string, so any frame can fall back to the drawn library.

  Each page's set is chosen to match its sections and is **distinct within that page** — no
  image repeats on a page, and no hero image reappears further down it.

```
assets/img/logo.svg       Brand mark (header, footer, hero hub) — 128px, served at 32
assets/img/favicon.png            Tab icon
assets/img/apple-touch-icon.png   iOS home screen
assets/img/keypels-logo.png       Supplied source lockup (not served)
assets/img/preview/web/<slug>.webp        Tall page capture, one per website
assets/img/preview/app/<slug>/NN.webp     Play Store screens, one folder per app
assets/img/preview/crm/<slug>/NN.webp     Four sidebar pages, one folder per CRM
assets/img/portfolio/<slug>.webp          Workflow canvas (the .png beside it is the source)
```

## Portfolio previews

Each card in a `work.projects` array declares a `preview` type; `workGrid` in
`tools/components.js` picks the matching renderer, so one component drives every grid:

| `preview` | Asset | At rest | Engaged |
|---|---|---|---|
| `site` | one tall capture | hero of the page | scrolls down the page and back |
| `app` | the app's store screens | screen 1 | swipes right-to-left through the screens |
| `crm` | four pages from its own sidebar | page 1 | swipes right-to-left through the pages |
| `flow` | the workflow canvas, filling the frame | its first nodes | pans left to right across the whole canvas |

Cards with no `preview` key fall back to `renderVisual(pr.visual)` — the homepage work
cards and the service-page illustrations still use that path.

`app` and `crm` share one mechanic: a flex track translated by `--i`, so anything that
declares `data-screens` is paged by the same code. `flow` computes `--pv-pan` at build
time from the canvas aspect — exactly far enough for its right-hand end to reach the frame
edge. A canvas that already fits the frame gets no pan and uses the left-to-right veil
reveal instead.

The scroll, the pan and the reveal are pure CSS on `transform`. `initPreviews()` in
`main.js` adds only the two things CSS cannot do: hydrating `data-src` assets the first
time a card is engaged, and stepping `--i`. On touch there is no hover, so a card engages
when it settles in the middle of the viewport — no visible controls either way.
Everything is disabled under `prefers-reduced-motion: reduce`.

### Regenerating a preview

Captures are produced outside the repo (headless Chrome — 1280 wide and scrolled for
websites, 1440x900 per page for CRMs, Play Store images for apps). To swap one, replace the
file and update the `w`/`h` on that project — they carry the `width`/`height` attributes
that keep the grid free of layout shift, and they also drive the timing: `h` sets the
website scroll duration at a constant speed, and `w`/`h` set the workflow pan distance.

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

The enquiry form posts to **Web3Forms**, which delivers to the inbox its access key is
registered to (`contact@keypels.com`). There are two copies of the same markup — the
homepage contact section in `index.html`, and the contact page in `tools/components.js` —
and both carry the same hidden fields:

| Field | Purpose |
|---|---|
| `access_key` | identifies the destination inbox. Public by design — it grants nothing but the right to post to that inbox, so it lives in the markup as the service intends |
| `from_name` | sender name on the delivered mail |
| `botcheck` | honeypot; hidden from people, filled in by bots |

`initForm()` in `assets/js/main.js` handles the rest: it validates, POSTs the `FormData`,
and drives the existing `.form__status` element for both outcomes. Three details worth
knowing before editing it:

- **Only fields carrying `required` are validated.** Company has none, so it submits
  empty — the field is genuinely optional, not just missing a visual asterisk.
- **`replyto` is set from the email field** at submit time, so replying to the notification
  reaches the sender rather than the form.
- **The form's own Subject field doubles as the email subject**, falling back to a generic
  one when left blank. Do not add a hidden `subject` input — it would collide with the
  visible field and Web3Forms would receive an array.

The submit button is disabled and relabelled while a request is in flight, so a second
click cannot fire a second submission.

Web3Forms rejects requests that do not come from a browser, so the endpoint cannot be
exercised with `curl` — test through a real page.

## Before going live

- `BRAND.origin` in `tools/site.config.js` drives every canonical, OG url and sitemap
  entry, and `robots.txt` carries its own copy. It is set to `https://www.keypels.com`
  because the host 308-redirects the bare domain to www — a canonical pointing at a URL
  that redirects away is what stops a page being indexed cleanly. If you ever switch the
  redirect to serve the bare domain, change both places to match.
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
- Work cards on the **homepage** are still representative project profiles rather than
  named clients. Swap them for genuine case studies as soon as you can name clients.
- Every portfolio grid now names **real third-party products** and shows captures of them. Confirm you have the right to present each one as
  your work, and that the client is happy to be named, before this goes public. Trademarked
  names and screenshots belong to their owners.

## Search appearance

Three things drive how the site shows up in Google, and all three are wired:

- **Site name** — Google takes it from `WebSite` structured data on the homepage root. Without
  it, it falls back to printing the bare URL. `index.html` carries a `WebSite` + `Organization`
  graph with `name: "KeyPels"`; keep it on the root page and keep the `@id`s pointing at the
  canonical host.
- **Description** — every page has its own `<meta name="description">`. "No information is
  available for this page" in a result means Google could not crawl the page, not that the tag
  is missing; check `robots.txt`, the canonical host and Search Console coverage first.
- **Favicon** — Google only accepts a square icon of 48px or a multiple of 48. `favicon.png` is
  96×96 and `icon-192.png` is 192×192; both are referenced from every page. A 64px icon is
  silently ignored, which is why none showed before.

None of this takes effect until the site is deployed and Google recrawls. After deploying,
request indexing for `/` in Search Console rather than waiting.
