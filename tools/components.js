/* ==========================================================================
   KeyPels — reusable HTML components
   Every page (home, /services, each service page, legal) is assembled from
   these functions, so the header, footer and every shared section exist in
   exactly one place. `rel` is the path prefix back to the site root.
   ========================================================================== */

const { ICONS } = require('./icons');
const { renderVisual } = require('./visuals');
const { BRAND, NAV, MENUS, SOCIALS, CONTACT_PATH, ABOUT_PATH } = require('./site.config');

const esc = (s) => String(s).replace(/&(?![a-z#0-9]+;)/gi, '&amp;');
const arrowSvg = (size = 14) =>
  `<svg class="btn__arrow" viewBox="0 0 16 16" width="${size}" height="${size}" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const linkArrow = (size = 14) =>
  `<svg viewBox="0 0 16 16" width="${size}" height="${size}" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const serviceUrl = (rel, slug) => `${rel}services/${slug}/`;

/* ==========================================================================
   Brand mark
   ========================================================================== */
/* The mark is the supplied logo asset (assets/img/keypels-mark.png), served at
   32px and shipped at 128px so it stays crisp on high-density screens. `rel`
   is the path prefix back to the site root. */
function brandMark(rel) {
  return `<span class="brand__mark" aria-hidden="true">
        <img src="${rel || ''}assets/img/keypels-mark.png" width="32" height="32" alt="" decoding="async">
      </span>`;
}

/* ==========================================================================
   Header + services mega dropdown
   ========================================================================== */
function megaPanel(ctx, key) {
  const { rel, services, active, activeSection } = ctx;
  const menu = MENUS[key];

  const items = services.map((s) => {
    const current = active === s.slug && activeSection === key;
    return `
            <li>
              <a class="mega__item${current ? ' is-current' : ''}" href="${rel}${menu.base}${s.slug}/">
                <span class="mega__icon">${ICONS[s.icon]}</span>
                <span class="mega__text">
                  <span class="mega__title">${esc(s.navTitle)}</span>
                  <span class="mega__desc">${esc(menu.desc(s))}</span>
                </span>
                <span class="mega__arrow">${linkArrow(13)}</span>
              </a>
            </li>`;
  }).join('');

  return `        <li class="nav__item nav__item--menu" data-dropdown>
          <button class="nav__link nav__link--trigger" type="button" aria-expanded="false" aria-controls="${menu.id}" data-dropdown-trigger>
            <span>${esc(menu.label)}</span>
            <svg class="nav__chev" viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path d="M4 6.5 8 10.5l4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="mega" id="${menu.id}" data-dropdown-panel>
            <div class="mega__inner">
              <p class="mega__eyebrow">${esc(menu.eyebrow)}</p>
              <ul class="mega__grid">${items}
              </ul>
              <div class="mega__foot">
                <a class="mega__all" href="${rel}${menu.base}">${esc(menu.allLabel)}${linkArrow(13)}</a>
                <a class="btn btn--primary btn--sm" href="${rel}${CONTACT_PATH}"><span>Start a Project</span>${arrowSvg(13)}</a>
              </div>
            </div>
          </div>
        </li>`;
}

function header(ctx) {
  const { rel } = ctx;

  const navItems = NAV.map((item) => {
    if (item.type === 'menu') return megaPanel(ctx, item.menu);
    return `        <li><a class="nav__link" href="${rel}${item.href}">${esc(item.label)}</a></li>`;
  }).join('\n');

  return `<header class="header" data-header>
  <div class="container header__inner">
    <a class="brand" href="${rel}index.html" aria-label="${BRAND.name} — home">
      ${brandMark(rel)}
      <span class="brand__word">${BRAND.name}</span>
    </a>

    <nav class="nav" aria-label="Primary">
      <ul class="nav__list">
${navItems}
      </ul>
    </nav>

    <div class="header__actions">
      <a class="btn btn--primary btn--sm" href="${rel}${CONTACT_PATH}" data-magnetic>
        <span>Let&rsquo;s Talk</span>
        ${arrowSvg(14)}
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu" data-nav-toggle>
        <span class="nav-toggle__bars" aria-hidden="true"><i></i><i></i><i></i></span>
      </button>
    </div>
  </div>
</header>`;
}

/* ==========================================================================
   Mobile menu (services expands inline)
   ========================================================================== */
function mobileMenu(ctx) {
  const { rel, services } = ctx;

  let i = 0;
  const items = NAV.map((item) => {
    i += 1;
    if (item.type === 'menu') {
      const menu = MENUS[item.menu];
      const subItems = services.map((s) => `
            <li><a href="${rel}${menu.base}${s.slug}/"><span class="msub__icon">${ICONS[s.icon]}</span>${esc(s.navTitle)}</a></li>`).join('');

      return `        <li style="--i:${i}" class="mobile-menu__item--menu">
          <button class="mobile-menu__trigger" type="button" aria-expanded="false" aria-controls="m-${item.menu}" data-msub-trigger>
            <span class="mobile-menu__num">0${i}</span> ${esc(menu.label)}
            <svg class="mobile-menu__chev" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M4 6.5 8 10.5l4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="msub" id="m-${item.menu}" data-msub>
            <ul class="msub__list">${subItems}
              <li><a class="msub__all" href="${rel}${menu.base}">${esc(menu.allLabel)}${linkArrow(13)}</a></li>
            </ul>
          </div>
        </li>`;
    }
    return `        <li style="--i:${i}"><a href="${rel}${item.href}"><span class="mobile-menu__num">0${i}</span> ${esc(item.label)}</a></li>`;
  }).join('\n');

  return `<div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
  <div class="mobile-menu__inner">
    <nav aria-label="Mobile">
      <ul class="mobile-menu__list">
${items}
      </ul>
    </nav>
    <div class="mobile-menu__footer" style="--i:${i + 1}">
      <a class="btn btn--primary btn--block" href="${rel}${CONTACT_PATH}"><span>Start a Project</span>
        ${arrowSvg(14)}
      </a>
      <a class="mobile-menu__mail" href="mailto:${BRAND.email}">${BRAND.email}</a>
    </div>
  </div>
</div>`;
}

/* ==========================================================================
   Footer
   ========================================================================== */
const SOCIAL_SVG = {
  linkedin: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.6 8.75 22 11.1 22 14.2V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><circle cx="12" cy="12" r="3.4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path fill="currentColor" d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.2l-4.4-5.7L6.1 21H3l7.3-8.3L2.6 3h6.3l4 5.3ZM16.4 19.2h1.7L7.7 4.7H5.9Z"/></svg>'
};

function footer(ctx) {
  const { rel, services } = ctx;

  const serviceLinks = services.map((s) =>
    `            <li><a href="${serviceUrl(rel, s.slug)}">${esc(s.navTitle)}</a></li>`).join('\n');

  const portfolioLinks = services.map((s) =>
    `            <li><a href="${rel}portfolio/${s.slug}/">${esc(s.navTitle)}</a></li>`).join('\n');

  const socials = SOCIALS.map((s) =>
    `          <li><a href="${s.href}" aria-label="${BRAND.name} on ${s.label}" rel="noopener noreferrer nofollow" target="_blank">${SOCIAL_SVG[s.icon]}</a></li>`).join('\n');

  return `<footer class="footer" aria-labelledby="footer-title">
  <h2 class="sr-only" id="footer-title">Site footer</h2>
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <a class="brand brand--footer" href="${rel}index.html" aria-label="${BRAND.name} — home">
          ${brandMark(rel)}
          <span class="brand__word">${BRAND.name}</span>
        </a>
        <p class="footer__tag">${BRAND.tagline}</p>
        <ul class="socials">
${socials}
        </ul>
      </div>

      <nav class="footer__nav" aria-label="Footer">
        <div class="footer__col">
          <h3>Company</h3>
          <ul>
            <li><a href="${rel}services/">Services</a></li>
            <li><a href="${rel}portfolio/">Portfolio</a></li>
            <li><a href="${rel}${ABOUT_PATH}">About</a></li>
            <li><a href="${rel}index.html#work">Selected work</a></li>
            <li><a href="${rel}${CONTACT_PATH}">Contact</a></li>
          </ul>
        </div>
        <div class="footer__col">
          <h3>Services</h3>
          <ul>
${serviceLinks}
          </ul>
        </div>
        <div class="footer__col">
          <h3>Portfolio</h3>
          <ul>
${portfolioLinks}
          </ul>
        </div>
        <div class="footer__col">
          <h3>Get in touch</h3>
          <ul>
            <li><a href="mailto:${BRAND.email}">${BRAND.email}</a></li>
            <li><a href="tel:${BRAND.phoneHref}">${BRAND.phone}</a></li>
            <li><a href="${rel}${CONTACT_PATH}">Start a project</a></li>
            <li><a href="${rel}${CONTACT_PATH}">Book a call</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="footer__bottom">
      <p>&copy; ${BRAND.year} ${BRAND.name}. All rights reserved.</p>
      <ul class="footer__legal">
        <li><a href="${rel}privacy.html">Privacy Policy</a></li>
        <li><a href="${rel}terms.html">Terms</a></li>
        <li><a href="#top" data-to-top>Back to top &uarr;</a></li>
      </ul>
    </div>
  </div>
</footer>`;
}

/* ==========================================================================
   Service page sections
   ========================================================================== */

function breadcrumb(ctx, service) {
  return `<nav class="crumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="${ctx.rel}index.html">Home</a></li>
          <li><a href="${ctx.rel}services/">Services</a></li>
          <li aria-current="page">${esc(service.title)}</li>
        </ol>
      </nav>`;
}

function serviceHero(ctx, s) {
  const h = s.hero;
  const lines = h.h1.map((line, i) =>
    `        <span class="line" data-reveal data-delay="${80 + i * 90}"><span${i === h.gradientLine ? ' class="grad"' : ''}>${esc(line)}</span></span>`).join('\n');

  const chips = h.chips.map((c, i) =>
    `        <li data-reveal data-delay="${380 + i * 50}">${esc(c)}</li>`).join('\n');

  const stats = h.stats.map((st) =>
    `        <li><strong data-count="${st.value}" data-suffix="${st.suffix}">0</strong><span>${esc(st.label)}</span></li>`).join('\n');

  return `<section class="shero section--dark" aria-labelledby="page-title">
  <div class="shero__bg" aria-hidden="true">
    <span class="orb orb--sh1" data-parallax="0.12"></span>
    <span class="orb orb--sh2" data-parallax="-0.08"></span>
    <span class="grid-veil"></span>
  </div>
  <div class="container shero__inner">
    <div class="shero__copy">
      ${breadcrumb(ctx, s)}
      <p class="pill" data-reveal>
        <span class="pill__dot" aria-hidden="true"></span>
        ${esc(h.eyebrow)}
      </p>
      <h1 class="shero__title" id="page-title">
${lines}
      </h1>
      <p class="shero__lead" data-reveal data-delay="300">${esc(h.lead)}</p>
      <div class="shero__actions" data-reveal data-delay="340">
        <a class="btn btn--primary btn--lg" href="${ctx.rel}${CONTACT_PATH}" data-magnetic><span>Start a Project</span>${arrowSvg(15)}</a>
        <a class="btn btn--ghost btn--lg" href="#offerings"><span>See what we build</span>
          <svg class="btn__arrow" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
      <ul class="shero__chips">
${chips}
      </ul>
    </div>

    <div class="shero__visual" data-reveal data-delay="220">
      <div class="shero__stage" data-tilt>
        ${renderVisual(s.heroVisual, ctx.rel)}
      </div>
    </div>
  </div>

  <div class="container">
    <ul class="shero__stats" data-reveal data-delay="120">
${stats}
    </ul>
  </div>
</section>`;
}

function serviceIntro(ctx, s) {
  const i = s.intro;
  const points = i.points.map((p, idx) => `
        <li data-reveal data-delay="${idx * 60}">
          <span class="ipoint__icon">${ICONS[p.icon]}</span>
          <div><h3>${esc(p.title)}</h3><p>${esc(p.body)}</p></div>
        </li>`).join('');

  return `<section class="sintro section--light" aria-labelledby="intro-title">
  <div class="container sintro__inner">
    <div class="sintro__visual" data-reveal>
      <div class="sintro__frame">${renderVisual(i.visual, ctx.rel)}</div>
    </div>
    <div class="sintro__copy">
      <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(i.eyebrow)}</p>
      <h2 class="section-title" id="intro-title" data-reveal data-delay="60">${esc(i.h2)}</h2>
      ${i.body.map((p, n) => `<p class="sintro__p" data-reveal data-delay="${120 + n * 60}">${esc(p)}</p>`).join('\n      ')}
      <ul class="ipoints">${points}
      </ul>
    </div>
  </div>
</section>`;
}

function offerings(ctx, s) {
  const o = s.offerings;

  const tabs = o.items.map((it, i) => `
          <button class="otab${i === 0 ? ' is-active' : ''}" type="button" role="tab"
                  id="tab-${it.key}" aria-selected="${i === 0}" aria-controls="panel-${it.key}" tabindex="${i === 0 ? 0 : -1}">
            <span class="otab__icon">${ICONS[it.icon]}</span>
            <span class="otab__label">${esc(it.tab)}</span>
            <span class="otab__arrow">${linkArrow(13)}</span>
          </button>`).join('');

  const panels = o.items.map((it, i) => `
        <div class="opanel${i === 0 ? ' is-active' : ''}" role="tabpanel" id="panel-${it.key}" aria-labelledby="tab-${it.key}"${i === 0 ? '' : ' hidden'}>
          <div class="opanel__copy">
            <h3>${esc(it.title)}</h3>
            <p>${esc(it.body)}</p>
            <ul class="opanel__list">
              ${it.bullets.map((b) => `<li><span class="tick">${ICONS.check}</span>${esc(b)}</li>`).join('\n              ')}
            </ul>
            <a class="opanel__cta" href="${ctx.rel}${CONTACT_PATH}"><span>Discuss this</span>${linkArrow(14)}</a>
          </div>
          <div class="opanel__visual">${renderVisual(it.visual, ctx.rel)}</div>
        </div>`).join('');

  return `<section class="offerings section--dark section--rounded" id="offerings" aria-labelledby="offerings-title">
  <div class="offerings__bg" aria-hidden="true"><span class="orb orb--of1"></span><span class="grid-veil"></span></div>
  <div class="container">
    <header class="section-head section-head--split">
      <div>
        <p class="eyebrow eyebrow--light" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(o.eyebrow)}</p>
        <h2 class="section-title section-title--light" id="offerings-title" data-reveal data-delay="60">${esc(o.h2)}</h2>
      </div>
      <p class="section-lead section-lead--light" data-reveal data-delay="120">${esc(o.lead)}</p>
    </header>

    <div class="otabs" data-tabs data-reveal>
      <div class="otabs__list" role="tablist" aria-label="${esc(o.h2)}">${tabs}
      </div>
      <div class="otabs__panels">${panels}
      </div>
    </div>
  </div>
</section>`;
}

function assurance(ctx, s) {
  const a = s.assurance;
  const items = a.items.map((it, i) => `
      <li class="acard" data-reveal data-delay="${i * 60}">
        <span class="acard__icon">${ICONS[it.icon]}</span>
        <span class="acard__value"><span data-count="${it.value}" data-suffix="${it.suffix}">0</span></span>
        <h3>${esc(it.label)}</h3>
        <p>${esc(it.note)}</p>
      </li>`).join('');

  return `<section class="assurance section--light" aria-labelledby="assurance-title">
  <div class="container">
    <header class="section-head">
      <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(a.eyebrow)}</p>
      <h2 class="section-title" id="assurance-title" data-reveal data-delay="60">${esc(a.h2)}</h2>
      <p class="section-lead" data-reveal data-delay="120">${esc(a.lead)}</p>
    </header>
    <ul class="agrid">${items}
    </ul>
  </div>
</section>`;
}

function processSection(ctx, s) {
  const p = s.process;
  const steps = p.steps.map((st, i) => `
      <li class="pstep" data-reveal data-delay="${i * 60}">
        <span class="pstep__num">${String(i + 1).padStart(2, '0')}</span>
        <div class="pstep__body">
          <h3>${esc(st.title)}</h3>
          <p>${esc(st.body)}</p>
        </div>
        <span class="pstep__rail" aria-hidden="true"></span>
      </li>`).join('');

  return `<section class="sprocess section--dark section--rounded" aria-labelledby="process-title">
  <div class="sprocess__bg" aria-hidden="true"><span class="orb orb--pr1"></span><span class="grid-veil"></span></div>
  <div class="container">
    <header class="section-head section-head--split">
      <div>
        <p class="eyebrow eyebrow--light" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(p.eyebrow)}</p>
        <h2 class="section-title section-title--light" id="process-title" data-reveal data-delay="60">${esc(p.h2)}</h2>
      </div>
      <p class="section-lead section-lead--light" data-reveal data-delay="120">${esc(p.lead)}</p>
    </header>
    <ol class="psteps">${steps}
    </ol>
  </div>
</section>`;
}

function differentiators(ctx, s) {
  const d = s.differentiators;
  const items = d.items.map((it, i) => `
        <div class="ac-item" data-reveal data-delay="${i * 40}">
          <h3><button class="ac-trigger" type="button" aria-expanded="false" aria-controls="dif-${i}" id="dif-${i}-btn">
            <span>${esc(it.title)}</span><span class="ac-icon" aria-hidden="true"></span></button></h3>
          <div class="ac-panel" id="dif-${i}" role="region" aria-labelledby="dif-${i}-btn"><div class="ac-panel__inner">
            <p>${esc(it.body)}</p>
          </div></div>
        </div>`).join('');

  return `<section class="sdiff section--light" aria-labelledby="diff-title">
  <div class="container faq__inner">
    <header class="faq__head">
      <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(d.eyebrow)}</p>
      <h2 class="section-title" id="diff-title" data-reveal data-delay="60">${esc(d.h2)}</h2>
      <p class="section-lead" data-reveal data-delay="120">${esc(d.lead)}</p>
    </header>
    <div class="accordion" data-accordion>${items}
    </div>
  </div>
</section>`;
}

function benefits(ctx, s) {
  const b = s.benefits;
  const items = b.items.map((it, i) => `
      <li class="bcard" data-reveal data-delay="${(i % 3) * 60}">
        <span class="bcard__icon">${ICONS[it.icon]}</span>
        <h3>${esc(it.title)}</h3>
        <p>${esc(it.body)}</p>
      </li>`).join('');

  return `<section class="benefits section--dark section--rounded" aria-labelledby="benefits-title">
  <div class="benefits__bg" aria-hidden="true"><span class="orb orb--bn1"></span><span class="orb orb--bn2"></span><span class="grid-veil"></span></div>
  <div class="container">
    <header class="section-head section-head--split">
      <div>
        <p class="eyebrow eyebrow--light" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(b.eyebrow)}</p>
        <h2 class="section-title section-title--light" id="benefits-title" data-reveal data-delay="60">${esc(b.h2)}</h2>
      </div>
      <p class="section-lead section-lead--light" data-reveal data-delay="120">${esc(b.lead)}</p>
    </header>
    <ul class="bgrid">${items}
    </ul>
  </div>
</section>`;
}

function pricing(ctx, s) {
  const p = s.pricing;
  const tiers = p.tiers.map((t, i) => `
      <article class="tier${t.featured ? ' tier--featured' : ''}" data-reveal data-delay="${i * 70}">
        <span class="tier__top">
          <span class="tier__badge">${esc(t.badge)}</span>
          ${t.featured ? '<span class="tier__flag">Popular</span>' : ''}
        </span>
        <h3 class="tier__name">${esc(t.name)}</h3>
        <p class="tier__desc">${esc(t.desc)}</p>
        <p class="tier__price">
          <span class="tier__from">from</span>
          <span class="tier__amount">${esc(t.price)}</span>
          <span class="tier__period">${esc(t.period || '/month')}</span>
        </p>
        <p class="tier__tagline">${esc(t.tagline)}</p>
        <ul class="tier__features">
          ${t.features.map((f) => `<li><span class="tick">${ICONS.check}</span>${esc(f)}</li>`).join('\n          ')}
        </ul>
        <a class="btn ${t.featured ? 'btn--primary' : 'btn--ghost'} btn--block" href="${ctx.rel}${CONTACT_PATH}"><span>${esc(t.cta)}</span>${arrowSvg(14)}</a>
      </article>`).join('');

  return `<section class="pricing section--dark section--rounded" aria-labelledby="pricing-title">
  <div class="pricing__bg" aria-hidden="true"><span class="orb orb--pc1"></span><span class="grid-veil"></span></div>
  <div class="container">
    <header class="section-head">
      <p class="eyebrow eyebrow--light" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(p.eyebrow)}</p>
      <h2 class="section-title section-title--light" id="pricing-title" data-reveal data-delay="60">${esc(p.h2)}</h2>
      <p class="section-lead section-lead--light" data-reveal data-delay="120">${esc(p.lead)}</p>
    </header>
    <div class="tiers">${tiers}
    </div>
    <div class="pnote" data-reveal>
      <div><h3>${esc(p.note.title)}</h3><p>${esc(p.note.body)}</p></div>
      <a class="btn btn--glass" href="${ctx.rel}${CONTACT_PATH}"><span>Talk it through</span>${arrowSvg(14)}</a>
    </div>
  </div>
</section>`;
}

function faq(ctx, s) {
  const f = s.faq;
  const items = f.items.map((it, i) => `
        <div class="ac-item" data-reveal data-delay="${i * 35}">
          <h3><button class="ac-trigger" type="button" aria-expanded="false" aria-controls="q-${i}" id="q-${i}-btn">
            <span>${esc(it.q)}</span><span class="ac-icon" aria-hidden="true"></span></button></h3>
          <div class="ac-panel" id="q-${i}" role="region" aria-labelledby="q-${i}-btn"><div class="ac-panel__inner">
            <p>${esc(it.a)}</p>
          </div></div>
        </div>`).join('');

  return `<section class="faq section--light" aria-labelledby="faq-title">
  <div class="container faq__inner">
    <header class="faq__head">
      <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(f.eyebrow)}</p>
      <h2 class="section-title" id="faq-title" data-reveal data-delay="60">${esc(f.h2)}</h2>
      <p class="section-lead" data-reveal data-delay="120">Still unsure? <a href="${ctx.rel}${CONTACT_PATH}">Send us a note</a> — we reply personally.</p>
    </header>
    <div class="accordion" data-accordion>${items}
    </div>
  </div>
</section>`;
}

function ctaSection(ctx, s) {
  const c = s.cta;
  return `<section class="cta section--light" aria-labelledby="cta-title">
  <div class="container">
    <div class="cta__panel" data-reveal>
      <div class="cta__aurora" aria-hidden="true"></div>
      <div class="cta__grid" aria-hidden="true"></div>
      <div class="cta__content">
        <h2 class="cta__title" id="cta-title">${esc(c.h2[0])} <span class="grad">${esc(c.h2[1])}</span></h2>
        <p class="cta__text">${esc(c.body)}</p>
        <div class="cta__actions">
          <a class="btn btn--primary btn--lg" href="${ctx.rel}${CONTACT_PATH}" data-magnetic><span>${esc(c.primary)}</span>${arrowSvg(15)}</a>
          <a class="btn btn--glass btn--lg" href="mailto:${BRAND.email}"><span>${esc(c.secondary)}</span></a>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

/* ==========================================================================
   Homepage hero — KeyPels service network
   Six nodes (one per registered service) orbit a central hub, joined by
   connection lines carrying travelling pulses. Node order and labels come
   from the service registry, so the network never drifts out of sync.
   ========================================================================== */

/* Node anchor points, in the SVG's 0–100 coordinate space. The matching CSS
   positions live in sections.css under .hnode--1 … .hnode--6. */
const HERO_POINTS = [
  { x: 50, y: 10 },
  { x: 82, y: 30 },
  { x: 82, y: 70 },
  { x: 50, y: 90 },
  { x: 18, y: 70 },
  { x: 18, y: 30 }
];

function heroNetwork(ctx) {
  const { rel, services } = ctx;

  const lines = HERO_POINTS.map((p) => `M50 50 L${p.x} ${p.y}`);

  const base = lines.map((d) =>
    `        <path d="${d}" vector-effect="non-scaling-stroke"/>`).join('\n');

  const pulses = lines.map((d, i) =>
    `        <path d="${d}" pathLength="100" vector-effect="non-scaling-stroke" style="--d:${(i * 0.55).toFixed(2)}s"/>`).join('\n');

  const nodes = services.slice(0, HERO_POINTS.length).map((s, i) => `
      <li class="hnode hnode--${i + 1}" style="--d:${(i * 0.4).toFixed(2)}s">
        <a class="hnode__link" href="${serviceUrl(rel, s.slug)}">
          <span class="hnode__icon">${ICONS[s.icon]}</span>
          <span class="hnode__label">${esc(s.navTitle)}</span>
        </a>
      </li>`).join('');

  return `<div class="hnet" role="img" aria-label="KeyPels service network: ${services.map((s) => esc(s.navTitle)).join(', ')}">
    <svg class="hnet__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hnetLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#b3b4b6" stop-opacity=".55"/>
          <stop offset="1" stop-color="#ebebec" stop-opacity=".28"/>
        </linearGradient>
      </defs>
      <g class="hnet__base" stroke="url(#hnetLine)" fill="none">
${base}
      </g>
      <g class="hnet__pulse" stroke="#d0d1d3" fill="none" stroke-linecap="round">
${pulses}
      </g>
    </svg>

    <div class="hnet__hub">
      <span class="hnet__rings" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="hnet__core">
        <span class="hnet__mark" aria-hidden="true">
          <img src="${ctx.rel}assets/img/keypels-mark.png" width="26" height="26" alt="" decoding="async">
        </span>
        <span class="hnet__name">${BRAND.name}</span>
        <span class="hnet__sub"></span>
      </span>
    </div>

    <ul class="hnet__nodes">${nodes}
    </ul>
  </div>`;
}

/* ==========================================================================
   About page sections
   ========================================================================== */

function aboutHero(ctx, a) {
  const lines = a.hero.h1.map((line, i) =>
    `        <span class="line" data-reveal data-delay="${80 + i * 90}"><span${i === a.hero.gradientLine ? ' class="grad"' : ''}>${esc(line)}</span></span>`).join('\n');

  const stats = a.hero.stats.map((s, i) => `
        <li data-reveal data-delay="${120 + i * 70}">
          <strong><span data-count="${s.value}" data-suffix="${s.suffix}">0</span></strong>
          <span class="abstat__label">${esc(s.label)}</span>
          <span class="abstat__note">${esc(s.note)}</span>
        </li>`).join('');

  return `<section class="shero abhero section--dark" aria-labelledby="page-title">
  <div class="shero__bg" aria-hidden="true">
    <span class="orb orb--sh1" data-parallax="0.12"></span>
    <span class="orb orb--sh2" data-parallax="-0.08"></span>
    <span class="grid-veil"></span>
  </div>
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="${ctx.rel}index.html">Home</a></li>
        <li aria-current="page">About</li>
      </ol>
    </nav>
    <p class="pill" data-reveal><span class="pill__dot" aria-hidden="true"></span>${esc(a.hero.eyebrow)}</p>
    <h1 class="shero__title shero__title--center abhero__title" id="page-title">
${lines}
    </h1>
    <p class="shero__lead shero__lead--center" data-reveal data-delay="300">${esc(a.hero.lead)}</p>
    <div class="shero__actions shero__actions--center" data-reveal data-delay="340">
      <a class="btn btn--primary btn--lg" href="${ctx.rel}${CONTACT_PATH}" data-magnetic><span>Start a Project</span>${arrowSvg(15)}</a>
      <a class="btn btn--ghost btn--lg" href="${ctx.rel}services/"><span>Explore services</span>${arrowSvg(15)}</a>
    </div>
    <ul class="abstats">${stats}
    </ul>
  </div>
</section>`;
}

function journey(ctx, a) {
  const items = a.journey.milestones.map((m, i) => `
      <li class="jstep" data-reveal data-delay="${i * 90}">
        <span class="jstep__ghost" aria-hidden="true">${esc(m.year)}</span>

        <div class="jstep__aside">
          <span class="jstep__icon">${ICONS[m.icon]}</span>
          <span class="jstep__label">Stage ${String(i + 1).padStart(2, '0')}</span>
        </div>

        <span class="jstep__node" aria-hidden="true">
          <i class="jstep__ring jstep__ring--out"></i>
          <i class="jstep__ring jstep__ring--in"></i>
          <b class="jstep__core"></b>
        </span>

        <article class="jstep__card">
          <header class="jstep__head">
            <span class="jstep__year">${esc(m.year)}</span>
            <span class="jstep__chip">${esc(m.label)}</span>
          </header>
          <h3>${esc(m.title)}</h3>
          <p>${esc(m.body)}</p>
          <ul class="jstep__tags">${m.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        </article>
      </li>`).join('');

  return `<section class="journey section--light" aria-labelledby="journey-title">
  <div class="journey__glow" aria-hidden="true"></div>
  <div class="container">
    <header class="section-head section-head--center">
      <p class="eyebrow eyebrow--chip" data-reveal><span class="eyebrow__dot" aria-hidden="true"></span>${esc(a.journey.eyebrow)}</p>
      <h2 class="section-title" id="journey-title" data-reveal data-delay="60">${esc(a.journey.h2)}</h2>
      <p class="section-lead" data-reveal data-delay="120">${esc(a.journey.lead)}</p>
    </header>

    <ol class="jline" data-journey>
      <span class="jline__rail" aria-hidden="true"><i data-journey-fill></i></span>
${items}
    </ol>
  </div>
</section>`;
}

function missionVision(ctx, a) {
  const cards = a.purpose.cards.map((c, i) => `
      <article class="pcard${i === 0 ? ' pcard--accent' : ''}" data-reveal data-delay="${i * 80}">
        <span class="pcard__tag">${esc(c.tag)}</span>
        <span class="pcard__icon">${ICONS[c.icon]}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.body)}</p>
      </article>`).join('');

  return `<section class="purpose section--dark section--rounded" aria-labelledby="purpose-title">
  <div class="purpose__bg" aria-hidden="true"><span class="orb orb--pu1"></span><span class="orb orb--pu2"></span><span class="grid-veil"></span></div>
  <div class="container">
    <header class="section-head section-head--split">
      <div>
        <p class="eyebrow eyebrow--light" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(a.purpose.eyebrow)}</p>
        <h2 class="section-title section-title--light" id="purpose-title" data-reveal data-delay="60">${esc(a.purpose.h2)}</h2>
      </div>
      <p class="section-lead section-lead--light" data-reveal data-delay="120">${esc(a.purpose.lead)}</p>
    </header>
    <div class="pgrid">${cards}
    </div>
  </div>
</section>`;
}

function values(ctx, a) {
  const cards = a.values.items.map((v, i) => `
      <li class="vcard" data-reveal data-delay="${(i % 4) * 60}">
        <span class="vcard__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="vcard__icon">${ICONS[v.icon]}</span>
        <h3>${esc(v.title)}</h3>
        <p>${esc(v.body)}</p>
      </li>`).join('');

  return `<section class="values section--light" aria-labelledby="values-title">
  <div class="container">
    <header class="section-head">
      <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(a.values.eyebrow)}</p>
      <h2 class="section-title" id="values-title" data-reveal data-delay="60">${esc(a.values.h2)}</h2>
      <p class="section-lead" data-reveal data-delay="120">${esc(a.values.lead)}</p>
    </header>
    <ul class="vgrid">${cards}
    </ul>
  </div>
</section>`;
}

function whyUs(ctx, a) {
  const cards = a.why.items.map((w, i) => `
      <li class="wcard" data-reveal data-delay="${(i % 3) * 60}">
        <span class="wcard__tag">${esc(w.tag)}</span>
        <span class="wcard__icon">${ICONS[w.icon]}</span>
        <h3>${esc(w.title)}</h3>
        <p>${esc(w.body)}</p>
        <span class="wcard__stat">
          <b>${esc(w.stat)}</b>
          <i>${esc(w.statLabel)}</i>
        </span>
      </li>`).join('');

  return `<section class="whyus section--dark section--rounded" aria-labelledby="whyus-title">
  <div class="whyus__bg" aria-hidden="true"><span class="orb orb--wu1"></span><span class="grid-veil"></span></div>
  <div class="container">
    <header class="section-head section-head--split">
      <div>
        <p class="eyebrow eyebrow--light" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(a.why.eyebrow)}</p>
        <h2 class="section-title section-title--light" id="whyus-title" data-reveal data-delay="60">${esc(a.why.h2)}</h2>
      </div>
      <p class="section-lead section-lead--light" data-reveal data-delay="120">${esc(a.why.lead)}</p>
    </header>
    <ul class="wgrid">${cards}
    </ul>
  </div>
</section>`;
}

function aboutCta(ctx, a) {
  return `<section class="cta cta--spaced section--light" aria-labelledby="abcta-title">
  <div class="container">
    <div class="cta__panel" data-reveal>
      <div class="cta__aurora" aria-hidden="true"></div>
      <div class="cta__grid" aria-hidden="true"></div>
      <div class="cta__content">
        <p class="cta__eyebrow">${esc(a.cta.eyebrow)}</p>
        <h2 class="cta__title" id="abcta-title">${esc(a.cta.h2[0])} <span class="grad">${esc(a.cta.h2[1])}</span></h2>
        <p class="cta__text">${esc(a.cta.body)}</p>
        <p class="cta__services">${a.cta.services.map((s) => `<span>${esc(s)}</span>`).join('')}</p>
        <div class="cta__actions">
          <a class="btn btn--primary btn--lg" href="${ctx.rel}${CONTACT_PATH}" data-magnetic><span>Start a Project</span>${arrowSvg(15)}</a>
          <a class="btn btn--glass btn--lg" href="mailto:${BRAND.email}"><span>Email the team</span></a>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

const ABOUT_SECTIONS = { hero: aboutHero, journey, purpose: missionVision, values, why: whyUs, cta: aboutCta };

/* ==========================================================================
   Contact page sections
   ========================================================================== */

function contactHero(ctx, c) {
  const methods = c.methods.map((m, i) => `
        <li class="cmethod" data-reveal data-delay="${i * 60}">
          <a class="cmethod__link" href="${m.href}"${m.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
            <span class="cmethod__icon">${ICONS[m.icon]}</span>
            <span class="cmethod__body">
              <span class="cmethod__label">${esc(m.label)}</span>
              <span class="cmethod__value">${esc(m.value)}</span>
              <span class="cmethod__note">${esc(m.note)}</span>
            </span>
            <span class="cmethod__arrow">${linkArrow(14)}</span>
          </a>
        </li>`).join('');

  return `<section class="shero cthero section--dark" aria-labelledby="page-title">
  <div class="shero__bg" aria-hidden="true">
    <span class="orb orb--sh1" data-parallax="0.12"></span>
    <span class="orb orb--sh2" data-parallax="-0.08"></span>
    <span class="grid-veil"></span>
  </div>
  <div class="container">
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="${ctx.rel}index.html">Home</a></li>
        <li aria-current="page">Contact</li>
      </ol>
    </nav>
    <p class="pill" data-reveal><span class="pill__dot" aria-hidden="true"></span>${esc(c.hero.eyebrow)}</p>
    <h1 class="shero__title cthero__title" id="page-title">
      <span class="line" data-reveal data-delay="80"><span>${esc(c.hero.h1[0])}</span></span>
      <span class="line" data-reveal data-delay="170"><span class="grad">${esc(c.hero.h1[1])}</span></span>
    </h1>
    <p class="shero__lead" data-reveal data-delay="280">${esc(c.hero.lead)}</p>
    <ul class="cmethods">${methods}
    </ul>
  </div>
</section>`;
}

function contactForm(ctx, c) {
  const options = c.form.services.map((s) => `<option>${esc(s)}</option>`).join('\n              ');

  const facts = c.form.facts.map((f) =>
    `        <li><span>${esc(f.label)}</span><b>${esc(f.value)}</b></li>`).join('\n');

  return `<section class="ctform section--light" id="form" aria-labelledby="form-title">
  <div class="container ctform__inner">
    <div class="ctform__aside">
      <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(c.form.eyebrow)}</p>
      <h2 class="section-title" id="form-title" data-reveal data-delay="60">${esc(c.form.h2)}</h2>
      <p class="section-lead" data-reveal data-delay="120">${esc(c.form.lead)}</p>

      <ul class="ctfacts" data-reveal data-delay="160">
${facts}
      </ul>

      <div class="ctsteps" data-reveal data-delay="200">
        <h3>What happens next</h3>
        <ol>
          ${c.form.steps.map((s) => `<li><span class="tick">${ICONS.check}</span>${esc(s)}</li>`).join('\n          ')}
        </ol>
      </div>
    </div>

    <div class="ctform__panel" data-reveal data-delay="100">
      <!-- Add an action attribute pointing at your form endpoint (Formspree, Resend, your own API) to deliver submissions. -->
      <form class="form" data-form novalidate
            action="https://api.web3forms.com/submit" method="POST">
        <!-- Web3Forms. The key identifies the destination inbox
             (contact@keypels.com) and is public by design; it grants nothing
             but the right to post to that inbox. -->
        <input type="hidden" name="access_key" value="c9cf9507-6b19-4c3c-ae6a-cbad1f87da88">
        <input type="hidden" name="from_name" value="KeyPels website enquiry">
        <!-- honeypot: real people never see it, bots fill it in -->
        <input type="checkbox" name="botcheck" tabindex="-1" aria-hidden="true"
               style="display:none !important" autocomplete="off">
        <div class="field">
          <label for="f-name">Full Name</label>
          <input id="f-name" name="name" type="text" autocomplete="name" placeholder="Jordan Rivera" required>
          <p class="field__error" data-error-for="f-name" role="alert"></p>
        </div>
        <div class="field">
          <label for="f-email">Email Address</label>
          <input id="f-email" name="email" type="email" autocomplete="email" placeholder="you@company.com" required>
          <p class="field__error" data-error-for="f-email" role="alert"></p>
        </div>
        <div class="field">
          <label for="f-company">Company</label>
          <input id="f-company" name="company" type="text" autocomplete="organization" placeholder="Company name">
          <p class="field__error" data-error-for="f-company" role="alert"></p>
        </div>
        <div class="field">
          <label for="f-service">Service</label>
          <div class="select">
            <select id="f-service" name="service" required>
              <option value="" selected disabled>Select a service</option>
              ${options}
            </select>
            <span class="select__icon" aria-hidden="true">
              <svg viewBox="0 0 16 16" width="14" height="14"><path d="M4 6.5 8 10.5l4-4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>
          </div>
          <p class="field__error" data-error-for="f-service" role="alert"></p>
        </div>
        <div class="field field--full">
          <label for="f-subject">Subject</label>
          <input id="f-subject" name="subject" type="text" placeholder="What&rsquo;s this about?">
          <p class="field__error" data-error-for="f-subject" role="alert"></p>
        </div>
        <div class="field field--full">
          <label for="f-details">Message</label>
          <textarea id="f-details" name="details" rows="5" placeholder="Tell us about your project — what you are building, what problem it should solve, and when you need it live." required></textarea>
          <p class="field__error" data-error-for="f-details" role="alert"></p>
        </div>
        <div class="form__foot">
          <button class="btn btn--primary btn--lg" type="submit" data-magnetic>
            <span>Send Message</span>${arrowSvg(15)}
          </button>
          <p class="form__note">We&rsquo;ll only use your details to reply to this enquiry.</p>
        </div>
        <p class="form__status" data-form-status role="status" aria-live="polite"></p>
      </form>
    </div>
  </div>
</section>`;
}

function offices(ctx, c) {
  const tabs = BRAND.offices.map((o, i) => `
          <button class="otab otab--office${i === 0 ? ' is-active' : ''}" type="button" role="tab"
                  id="tab-${o.key}" aria-selected="${i === 0}" aria-controls="panel-${o.key}" tabindex="${i === 0 ? 0 : -1}">
            <span class="otab__icon">${ICONS[i === 0 ? 'globe' : 'layers']}</span>
            <span class="otab__label">${esc(o.label)}<span class="otab__sub">${esc(o.city)}</span></span>
            <span class="otab__arrow">${linkArrow(13)}</span>
          </button>`).join('');

  const panels = BRAND.offices.map((o, i) => `
        <div class="opanel opanel--office${i === 0 ? ' is-active' : ''}" role="tabpanel" id="panel-${o.key}" aria-labelledby="tab-${o.key}"${i === 0 ? '' : ' hidden'}>
          <div class="opanel__copy">
            <h3>${esc(o.label)}</h3>
            <address>${o.lines.map((l) => esc(l)).join('<br>')}</address>
            <ul class="office__meta">
              <li><span class="office__k">Email</span><a href="mailto:${BRAND.email}">${BRAND.email}</a></li>
              <li><span class="office__k">Phone</span><a href="tel:${BRAND.phoneHref}">${BRAND.phone}</a></li>
              <li><span class="office__k">Hours</span><b>Mon&ndash;Fri, 09:00&ndash;18:00</b></li>
            </ul>
            <a class="opanel__cta" href="mailto:${BRAND.email}"><span>Email this office</span>${linkArrow(14)}</a>
          </div>
          <div class="opanel__visual">
            <div class="mapview" aria-hidden="true">
              <span class="mapview__grid"></span>
              <span class="mapview__road mapview__road--a"></span>
              <span class="mapview__road mapview__road--b"></span>
              <span class="mapview__road mapview__road--c"></span>
              <span class="mapview__block mapview__block--1"></span>
              <span class="mapview__block mapview__block--2"></span>
              <span class="mapview__block mapview__block--3"></span>
              <span class="mapview__pin"><i></i></span>
              <span class="mapview__label">${esc(o.city)}</span>
            </div>
          </div>
        </div>`).join('');

  return `<section class="offices section--dark section--rounded" aria-labelledby="offices-title">
  <div class="offices__bg" aria-hidden="true"><span class="orb orb--of2"></span><span class="grid-veil"></span></div>
  <div class="container">
    <header class="section-head section-head--split">
      <div>
        <p class="eyebrow eyebrow--light" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(c.offices.eyebrow)}</p>
        <h2 class="section-title section-title--light" id="offices-title" data-reveal data-delay="60">${esc(c.offices.h2)}</h2>
      </div>
      <p class="section-lead section-lead--light" data-reveal data-delay="120">${esc(c.offices.lead)}</p>
    </header>

    <div class="otabs" data-tabs data-reveal>
      <div class="otabs__list" role="tablist" aria-label="${esc(c.offices.h2)}">${tabs}
      </div>
      <div class="otabs__panels">${panels}
      </div>
    </div>

    <p class="offices__note" data-reveal>${esc(c.offices.note)}</p>
  </div>
</section>`;
}

function contactFaq(ctx, c) {
  const items = c.faq.items.map((it, i) => `
        <div class="ac-item" data-reveal data-delay="${i * 40}">
          <h3><button class="ac-trigger" type="button" aria-expanded="false" aria-controls="cq-${i}" id="cq-${i}-btn">
            <span>${esc(it.q)}</span><span class="ac-icon" aria-hidden="true"></span></button></h3>
          <div class="ac-panel" id="cq-${i}" role="region" aria-labelledby="cq-${i}-btn"><div class="ac-panel__inner">
            <p>${esc(it.a)}</p>
          </div></div>
        </div>`).join('');

  return `<section class="faq section--light" aria-labelledby="cfaq-title">
  <div class="container faq__inner">
    <header class="faq__head">
      <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${esc(c.faq.eyebrow)}</p>
      <h2 class="section-title" id="cfaq-title" data-reveal data-delay="60">${esc(c.faq.h2)}</h2>
      <p class="section-lead" data-reveal data-delay="120">Prefer to just email? <a href="mailto:${BRAND.email}">${BRAND.email}</a></p>
    </header>
    <div class="accordion" data-accordion>${items}
    </div>
  </div>
</section>`;
}

const CONTACT_SECTIONS = { hero: contactHero, form: contactForm, offices, faq: contactFaq, cta: ctaSection };

/* ==========================================================================
   Portfolio page sections
   ========================================================================== */

function portfolioCrumb(ctx, p) {
  return `<nav class="crumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="${ctx.rel}index.html">Home</a></li>
          <li><a href="${ctx.rel}portfolio/">Portfolio</a></li>
          <li aria-current="page">${esc(p.service)}</li>
        </ol>
      </nav>`;
}

function portfolioHero(ctx, p) {
  const lines = p.hero.h1.map((line, i) =>
    `        <span class="line" data-reveal data-delay="${80 + i * 90}"><span${i === p.hero.h1.length - 1 ? ' class="grad"' : ''}>${esc(line)}</span></span>`).join('\n');

  const caps = p.capabilities.map((c, i) =>
    `        <li data-reveal data-delay="${360 + i * 55}"><span class="pcap__dot" aria-hidden="true"></span>${esc(c)}</li>`).join('\n');

  return `<section class="shero pfhero section--dark" aria-labelledby="page-title">
  <div class="shero__bg" aria-hidden="true">
    <span class="orb orb--sh1" data-parallax="0.12"></span>
    <span class="orb orb--sh2" data-parallax="-0.08"></span>
    <span class="grid-veil"></span>
  </div>
  <div class="container shero__inner">
    <div class="shero__copy">
      ${portfolioCrumb(ctx, p)}
      <p class="pill" data-reveal><span class="pill__dot" aria-hidden="true"></span>Portfolio</p>
      <h1 class="shero__title" id="page-title">
${lines}
      </h1>
      <p class="shero__lead" data-reveal data-delay="300">${esc(p.hero.lead)}</p>
      <div class="shero__actions" data-reveal data-delay="340">
        <a class="btn btn--primary btn--lg" href="${ctx.rel}${CONTACT_PATH}" data-magnetic><span>Start a Project</span>${arrowSvg(15)}</a>
        <a class="btn btn--ghost btn--lg" href="${ctx.rel}services/${p.slug}/"><span>${esc(p.service)} service</span>${arrowSvg(15)}</a>
      </div>
    </div>
    <div class="shero__visual" data-reveal data-delay="220">
      <div class="shero__stage" data-tilt>
        ${renderVisual(p.heroVisual, ctx.rel)}
      </div>
    </div>
  </div>

  <div class="container">
    <ul class="pcaps" data-reveal data-delay="120">
${caps}
    </ul>
  </div>
</section>`;
}

/* --------------------------------------------------------------------------
   Portfolio previews
   Three interchangeable renderers behind one `pr.preview` switch, so every card
   in every portfolio grid gets its animation from the same place:

     site  a tall page capture that scrolls from the hero down on hover
     app   the app's own store screens, swiped right-to-left on hover
     flow  a workflow canvas revealed left to right, node after node

   All three animate `transform` only. The heavy assets are declared through
   `data-src` and hydrated by main.js the first time a card is engaged, so a
   grid of 26 cards costs one image each on load rather than all of them.
   -------------------------------------------------------------------------- */

/* constant scroll speed (px of capture per second) rather than a fixed
   duration, so a short page and a tall one feel the same to scrub. */
const PV_SPEED = 430;

function previewSite(ctx, pr) {
  const travel = Math.max(0, pr.h - 200);
  const dur = Math.max(2.6, Math.min(9, travel / PV_SPEED)).toFixed(2);
  return `<div class="pv pv--site" data-preview style="--pv-dur:${dur}s">
            <span class="pv__chrome" aria-hidden="true"><i></i><i></i><i></i><b>${esc(pr.domain || '')}</b></span>
            <div class="pv__port">
              <img class="pv__shot" src="${ctx.rel}assets/img/preview/web/${pr.src}.webp"
                   width="${pr.w}" height="${pr.h}" loading="lazy" decoding="async"
                   alt="${esc(pr.name)} website preview">
            </div>
          </div>`;
}

function previewApp(ctx, pr) {
  const screens = Array.from({ length: pr.screens }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    const src = `${ctx.rel}assets/img/preview/app/${pr.src}/${n}.webp`;
    /* screen 1 loads with the card; the rest wait for the first hover */
    return i === 0
      ? `<img class="pv__screen" src="${src}" width="${pr.w}" height="${pr.h}" loading="lazy" decoding="async" alt="${esc(pr.name)} app screen 1">`
      : `<img class="pv__screen" data-src="${src}" width="${pr.w}" height="${pr.h}" decoding="async" alt="">`;
  }).join('');

  return `<div class="pv pv--app" data-preview data-screens="${pr.screens}">
            <div class="pv__phone">
              <span class="pv__notch" aria-hidden="true"></span>
              <div class="pv__port">
                <div class="pv__track">${screens}</div>
              </div>
            </div>
          </div>`;
}

/* Four pages walked from the product's own left sidebar, paged through on
   hover. Same track mechanic as the app swipe — only the frame differs. */
function previewCrm(ctx, pr) {
  const pages = Array.from({ length: pr.screens }, (_, i) => {
    const n = String(i + 1).padStart(2, '0');
    const src = `${ctx.rel}assets/img/preview/crm/${pr.src}/${n}.webp`;
    return i === 0
      ? `<img class="pv__page" src="${src}" width="${pr.w}" height="${pr.h}" loading="lazy" decoding="async" alt="${esc(pr.name)} — screen 1">`
      : `<img class="pv__page" data-src="${src}" width="${pr.w}" height="${pr.h}" decoding="async" alt="">`;
  }).join('');

  return `<div class="pv pv--crm" data-preview data-screens="${pr.screens}">
            <span class="pv__chrome" aria-hidden="true"><i></i><i></i><i></i><b>${esc(pr.name)}</b></span>
            <div class="pv__port">
              <div class="pv__track">${pages}</div>
            </div>
          </div>`;
}

/* The canvas fills the frame, so a wide workflow is cropped at rest. `--pv-pan`
   is how far it has to travel for its right-hand end to reach the frame edge —
   the hover animation walks that distance, so the nodes come past in the order
   the workflow runs. Canvases that already fit get 0 and fall back to the
   left-to-right reveal instead. */
const PV_FRAME_RATIO = 1.92;   // the card visual's own width / height

function previewFlow(ctx, pr) {
  const ratio = pr.w / pr.h;
  const overflow = ratio > PV_FRAME_RATIO ? (ratio - PV_FRAME_RATIO) / ratio : 0;
  const pan = (overflow * 100).toFixed(2);
  const dur = (2.4 + overflow * 3.4).toFixed(2);

  return `<div class="pv pv--flow${overflow ? ' pv--pans' : ''}" data-preview style="--pv-pan:${pan}%;--pv-dur:${dur}s">
            <div class="pv__port">
              <img class="pv__canvas" src="${ctx.rel}assets/img/portfolio/${pr.src}.webp"
                   width="${pr.w}" height="${pr.h}" loading="lazy" decoding="async"
                   alt="${esc(pr.name)} workflow">
              <span class="pv__veil" aria-hidden="true"></span>
              <span class="pv__scan" aria-hidden="true"></span>
            </div>
          </div>`;
}

const PREVIEWS = { site: previewSite, app: previewApp, flow: previewFlow, crm: previewCrm };

function cardVisual(ctx, pr) {
  const render = PREVIEWS[pr.preview];
  return render ? render(ctx, pr) : renderVisual(pr.visual, ctx.rel);
}

function workGrid(ctx, p) {
  const cards = p.work.projects.map((pr, i) => `
      <article class="pfcard${pr.preview ? ' pfcard--pv' : ''}"${pr.preview ? ' data-pv-card' : ''} data-reveal data-delay="${(i % 3) * 70}">
        <div class="pfcard__visual${pr.preview ? ' pfcard__visual--pv' : ''}">${cardVisual(ctx, pr)}</div>
        <div class="pfcard__body">
          <div class="pfcard__meta">
            <span class="pfcard__num">${String(i + 1).padStart(2, '0')}</span>
            <span class="pfcard__cat">${esc(pr.category)}</span>
          </div>
          <h3 class="pfcard__title">${esc(pr.name)}<span>, ${esc(pr.sub)}</span></h3>
          <p class="pfcard__text">${esc(pr.body)}</p>
          <ul class="pfcard__tags">${pr.tags.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        </div>
      </article>`).join('');

  return `<section class="pfwork section--light" id="work" aria-labelledby="work-title">
  <div class="container">
    <header class="section-head section-head--split">
      <div>
        <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>Selected work</p>
        <h2 class="section-title" id="work-title" data-reveal data-delay="60">${esc(p.work.h2)}</h2>
      </div>
      <p class="section-lead" data-reveal data-delay="120">${esc(p.work.lead)}</p>
    </header>
    <div class="pfgrid">${cards}
    </div>
    <p class="pfnote" data-reveal>
      ${p.work.note ? esc(p.work.note) : `Representative project profiles showing the scope, stack and complexity we deliver in ${esc(p.service.toLowerCase())}.
      Named client work and references are shared under NDA on request.`}
    </p>
  </div>
</section>`;
}

function approachGrid(ctx, p) {
  const steps = p.approach.steps.map((st, i) => `
      <li class="apcard" data-reveal data-delay="${(i % 3) * 60}">
        <span class="apcard__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="apcard__icon">${ICONS[st.icon]}</span>
        <h3>${esc(st.title)}</h3>
        <p>${esc(st.body)}</p>
      </li>`).join('');

  return `<section class="approach section--dark section--rounded" aria-labelledby="approach-title">
  <div class="approach__bg" aria-hidden="true"><span class="orb orb--ap1"></span><span class="grid-veil"></span></div>
  <div class="container">
    <header class="section-head section-head--split">
      <div>
        <p class="eyebrow eyebrow--light" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>Methodology</p>
        <h2 class="section-title section-title--light" id="approach-title" data-reveal data-delay="60">${esc(p.approach.h2)}</h2>
      </div>
      <p class="section-lead section-lead--light" data-reveal data-delay="120">${esc(p.approach.lead)}</p>
    </header>
    <ol class="apgrid">${steps}
    </ol>
  </div>
</section>`;
}

function outcomesGrid(ctx, p) {
  const items = p.outcomes.items.map((it, i) => `
      <li class="ocard" data-reveal data-delay="${(i % 3) * 60}">
        <h3><span class="ocard__q" aria-hidden="true">?</span>${esc(it.title)}</h3>
        <p>${esc(it.body)}</p>
      </li>`).join('');

  return `<section class="outcomes section--light" aria-labelledby="outcomes-title">
  <div class="container">
    <header class="section-head">
      <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>Common challenges</p>
      <h2 class="section-title" id="outcomes-title" data-reveal data-delay="60">${esc(p.outcomes.h2[0])} <span class="grad">${esc(p.outcomes.h2[1])}</span></h2>
      <p class="section-lead" data-reveal data-delay="120">${esc(p.outcomes.lead)}</p>
    </header>
    <ul class="ogrid">${items}
    </ul>
  </div>
</section>`;
}

const PORTFOLIO_SECTIONS = {
  hero: portfolioHero,
  work: workGrid,
  approach: approachGrid,
  outcomes: outcomesGrid,
  cta: ctaSection
};

/* Tone of each section, used by the generator to square off the corners where
   two dark blocks sit next to each other (otherwise the light page colour
   shows through the rounded seam between them). */
const TONES = {
  hero: 'dark',
  intro: 'light',
  offerings: 'dark-rounded',
  assurance: 'light',
  process: 'dark-rounded',
  differentiators: 'light',
  benefits: 'dark-rounded',
  pricing: 'dark-rounded',
  faq: 'light',
  cta: 'light'
};

const SECTIONS = {
  hero: serviceHero,
  intro: serviceIntro,
  offerings,
  assurance,
  process: processSection,
  differentiators,
  benefits,
  pricing,
  faq,
  cta: ctaSection,
};

module.exports = {
  header, mobileMenu, footer, heroNetwork,
  SECTIONS, PORTFOLIO_SECTIONS, ABOUT_SECTIONS, CONTACT_SECTIONS, TONES,
  esc, arrowSvg, linkArrow, serviceUrl, brandMark, ICONS
};
