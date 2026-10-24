#!/usr/bin/env node
/* ==========================================================================
   KeyPels — static site generator
   Assembles every service page from tools/services/*.js and injects the
   shared header / mobile menu / footer into the hand-authored pages
   (index.html, privacy.html, terms.html) between HTML markers.

   Run:  npm run build      (or: node tools/build.js)
   ========================================================================== */

const fs = require('fs');
const path = require('path');

const { BRAND, SOCIALS, SERVICE_SLUGS, CONTACT_PATH, ABOUT_PATH } = require('./site.config');
const C = require('./components');
const { ICONS } = require('./icons');

const ROOT = path.join(__dirname, '..');
const services = SERVICE_SLUGS.map((slug) => require(`./services/${slug}`));
const portfolios = SERVICE_SLUGS.map((slug) => require(`./portfolio/${slug}`));

/* --------------------------------------------------------------------------
   Shared <head>
   -------------------------------------------------------------------------- */
const favicon = (rel) => `<link rel="icon" type="image/png" href="${rel}assets/img/favicon.ico">
<link rel="icon" type="image/png" sizes="192x192" href="${rel}assets/img/icon-192.png">
<link rel="apple-touch-icon" href="${rel}assets/img/apple-touch-icon.png">`;

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"></noscript>`;

function head(o) {
  const { rel, title, description, url, jsonld } = o;
  return `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${description}">
<meta name="theme-color" content="#080807">
<meta name="color-scheme" content="dark light">
<link rel="canonical" href="${url}">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${BRAND.name}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:url" content="${url}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">

${favicon(rel)}

${FONTS}

<link rel="stylesheet" href="${rel}assets/css/base.css">
<link rel="stylesheet" href="${rel}assets/css/sections.css">
<link rel="stylesheet" href="${rel}assets/css/service.css">
<link rel="stylesheet" href="${rel}assets/css/redesign.css">

<script type="application/ld+json">
${JSON.stringify(jsonld, null, 2)}
</script>`;
}

function page(o) {
  const { rel, main, ctx } = o;
  return `<!DOCTYPE html>
<html lang="en">
<head>
${head(o)}
</head>

<body id="top">
<a class="skip-link" href="#main">Skip to content</a>
<div class="scroll-progress" aria-hidden="true"><span data-scroll-progress></span></div>

${C.header(ctx)}

${C.mobileMenu(ctx)}

<main id="main">

${main}

</main>

${C.footer(ctx)}

<script src="${rel}assets/js/main.js" defer></script>
</body>
</html>
`;
}

/* --------------------------------------------------------------------------
   Structured data
   -------------------------------------------------------------------------- */
function serviceJsonLd(s, url, rel) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: s.title,
        serviceType: s.title,
        description: s.meta.description,
        url,
        provider: { '@type': 'Organization', name: BRAND.name, url: BRAND.origin + '/' },
        areaServed: 'Worldwide'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BRAND.origin + '/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: BRAND.origin + '/services/' },
          { '@type': 'ListItem', position: 3, name: s.title, item: url }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: s.faq.items.map((it) => ({
          '@type': 'Question',
          name: it.q,
          acceptedAnswer: { '@type': 'Answer', text: it.a }
        }))
      }
    ].concat(rel ? [] : [])
  };
}

/* --------------------------------------------------------------------------
   Service pages
   -------------------------------------------------------------------------- */
function buildServicePage(s) {
  const rel = '../../';
  const ctx = { rel, services, active: s.slug, activeSection: 'services' };
  const url = `${BRAND.origin}/services/${s.slug}/`;

  const isDark = (key) => (C.TONES[key] || '').indexOf('dark') === 0;

  const main = s.sections
    .map((key, i) => {
      const fn = C.SECTIONS[key];
      if (!fn) throw new Error(`Unknown section "${key}" in ${s.slug}`);
      let html = fn(ctx, s);

      // Square off the seam where two dark blocks meet.
      if (C.TONES[key] === 'dark-rounded') {
        const join = [];
        if (isDark(s.sections[i - 1])) join.push('is-join-t');
        if (isDark(s.sections[i + 1])) join.push('is-join-b');
        if (join.length) html = html.replace('section--rounded', 'section--rounded ' + join.join(' '));
      }
      return html;
    })
    .join('\n\n');

  const html = page({
    rel,
    ctx,
    main,
    title: s.meta.title,
    description: s.meta.description,
    url,
    jsonld: serviceJsonLd(s, url)
  });

  const dir = path.join(ROOT, 'services', s.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  return `services/${s.slug}/index.html`;
}

/* --------------------------------------------------------------------------
   Portfolio pages
   -------------------------------------------------------------------------- */
const PORTFOLIO_ORDER = ['hero', 'work', 'approach', 'outcomes', 'cta'];

function buildPortfolioPage(p) {
  const rel = '../../';
  const ctx = { rel, services, active: p.slug, activeSection: 'portfolio' };
  const url = `${BRAND.origin}/portfolio/${p.slug}/`;

  const main = PORTFOLIO_ORDER.map((key) => C.PORTFOLIO_SECTIONS[key](ctx, p)).join('\n\n');

  const html = page({
    rel,
    ctx,
    main,
    title: p.meta.title,
    description: p.meta.description,
    url,
    jsonld: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CollectionPage',
          name: p.title,
          description: p.meta.description,
          url,
          about: { '@type': 'Service', name: p.service, provider: { '@type': 'Organization', name: BRAND.name } }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BRAND.origin + '/' },
            { '@type': 'ListItem', position: 2, name: 'Portfolio', item: BRAND.origin + '/portfolio/' },
            { '@type': 'ListItem', position: 3, name: p.service, item: url }
          ]
        }
      ]
    }
  });

  const dir = path.join(ROOT, 'portfolio', p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  return `portfolio/${p.slug}/index.html`;
}


/* --------------------------------------------------------------------------
   Index pages (/services, /portfolio) — shared hero + list rows
   -------------------------------------------------------------------------- */
function indexHero({ rel, crumb, pill, lines, lead, anchor, anchorLabel }) {
  return `<section class="shero sv-hero sv-hero--index section--dark" aria-labelledby="page-title">
  <div class="shero__bg" aria-hidden="true">
    <span class="orb orb--sh1" data-parallax="0.12"></span>
    <span class="orb orb--sh2" data-parallax="-0.08"></span>
    <span class="grid-veil"></span>
  </div>
  <div class="container sv-hero__grid">
    <div class="sv-hero__copy">
      <nav class="crumbs" aria-label="Breadcrumb">
        <ol>
          <li><a href="${rel}index.html">Home</a></li>
          <li aria-current="page">${crumb}</li>
        </ol>
      </nav>
      <p class="pill" data-reveal><span class="pill__dot" aria-hidden="true"></span>${pill}</p>
      <h1 class="shero__title" id="page-title">
        <span class="line" data-reveal data-delay="80"><span>${lines[0]}</span></span>
        <span class="line" data-reveal data-delay="170"><span class="grad">${lines[1]}</span></span>
      </h1>
    </div>
    <div class="sv-hero__aside">
      <p class="shero__lead" data-reveal data-delay="280">${lead}</p>
      <div class="shero__actions" data-reveal data-delay="340">
        <a class="btn btn--primary btn--lg" href="${rel}${CONTACT_PATH}" data-magnetic><span>Start a Project</span>${C.arrowSvg(15)}</a>
        <a class="btn btn--ghost btn--lg" href="#all"><span>${anchorLabel}</span>
          <svg class="btn__arrow" viewBox="0 0 16 16" width="15" height="15" aria-hidden="true"><path d="M8 3v10M4 9l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>
    </div>
  </div>
</section>`;
}

function indexList(rows) {
  return `<ul class="rd-list">${rows.map((r, i) => `
      <li data-reveal data-delay="${(i % 3) * 50}">
        <a class="rd-list__item" href="${r.href}">
          <span class="rd-list__n">${r.num}</span>
          <span class="rd-list__icon">${r.icon}</span>
          <span class="rd-list__body">
            <h2>${C.esc(r.title)}</h2>
            <p>${C.esc(r.text)}</p>
          </span>
          <span class="rd-list__link"><span>${C.esc(r.link)}</span>${C.linkArrow(15)}</span>
        </a>
      </li>`).join('')}
    </ul>`;
}

function indexBody({ id, eyebrow, h2, lead, list }) {
  return `<section class="more rd-index section--light" id="all" aria-labelledby="all-title">
  <div class="container">
    <header class="rd-head">
      <div class="rd-head__main">
        <p class="eyebrow" data-reveal><span class="eyebrow__line" aria-hidden="true"></span>${eyebrow}</p>
        <h2 class="section-title" id="all-title" data-reveal data-delay="60">${h2}</h2>
      </div>
      <p class="section-lead rd-head__lead" data-reveal data-delay="120">${lead}</p>
    </header>
    ${list}
  </div>
</section>`;
}

/* --------------------------------------------------------------------------
   /portfolio index
   -------------------------------------------------------------------------- */
function buildPortfolioIndex() {
  const rel = '../';
  const ctx = { rel, services, active: null, activeSection: 'portfolio' };
  const url = `${BRAND.origin}/portfolio/`;

  const list = indexList(services.map((s, i) => ({
    href: `${rel}portfolio/${s.slug}/`,
    num: s.number,
    icon: C.ICONS[s.icon],
    title: s.navTitle,
    text: portfolios[i].hero.lead.split('—')[0].trim(),
    link: `View ${s.navTitle} work`
  })));

  const main = `${indexHero({
    rel,
    crumb: 'Portfolio',
    pill: 'Selected work',
    lines: ['The Work Behind', 'Every Service Line'],
    lead: 'Six portfolios covering the platforms, apps, workflows and agents we build — the scope, the stack and the engineering decisions behind each one.',
    anchorLabel: 'Browse portfolios'
  })}

${indexBody({
    eyebrow: 'All portfolios',
    h2: 'Browse Work By Discipline',
    lead: 'Each portfolio covers the project types, the approach behind them and the problems they were built to solve.',
    list
  })}

${C.PORTFOLIO_SECTIONS.cta({ rel, services }, {
    cta: {
      h2: ['Want To See Work', 'Closer To Yours?'],
      body: 'Tell us the problem you are solving and we will walk you through the most relevant projects, the decisions behind them and what they cost to build.',
      primary: 'Start a Project',
      secondary: 'Talk to an Expert'
    }
  })}`;

  const html = page({
    rel,
    ctx,
    main,
    title: `Portfolio — Web, Mobile, CRM & AI Work | ${BRAND.name}`,
    description:
      'Explore KeyPels portfolios across web development, mobile apps, CRM platforms, AI automation, AI agents and chatbots.',
    url,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'KeyPels Portfolio',
      url,
      hasPart: portfolios.map((p) => ({
        '@type': 'CollectionPage',
        name: p.title,
        url: `${BRAND.origin}/portfolio/${p.slug}/`
      }))
    }
  });

  fs.mkdirSync(path.join(ROOT, 'portfolio'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'portfolio', 'index.html'), html, 'utf8');
  return 'portfolio/index.html';
}

/* --------------------------------------------------------------------------
   /services index
   -------------------------------------------------------------------------- */
function buildServicesIndex() {
  const rel = '../';
  const ctx = { rel, services, active: null, activeSection: 'services' };
  const url = `${BRAND.origin}/services/`;

  const list = indexList(services.map((s) => ({
    href: C.serviceUrl(rel, s.slug),
    num: s.number,
    icon: ICONS[s.icon],
    title: s.navTitle,
    text: s.navDesc,
    link: `Explore ${s.navTitle}`
  })));

  const main = `${indexHero({
    rel,
    crumb: 'Services',
    pill: 'Six ways we help',
    lines: ['Technology That Moves', 'Your Business Forward'],
    lead: 'From scalable software to intelligent automation, KeyPels builds technology that solves real business problems. Every engagement is custom-built, owned by you, and designed to keep earning after launch.',
    anchorLabel: 'Browse services'
  })}

${indexBody({
    eyebrow: 'All services',
    h2: 'Pick The Problem You Need Solved',
    lead: 'Most engagements combine two or three of these — a custom platform with an AI agent on top, or a mobile app feeding a CRM you actually own.',
    list
  })}

${C.SECTIONS.cta({ rel, services }, {
    cta: {
      h2: ['Not Sure Where', 'To Start?'],
      body: 'Tell us the outcome you need and we will tell you which of these actually gets you there — including when the answer is “less than you think”.',
      primary: 'Start a Project',
      secondary: 'Talk to an Expert'
    }
  })}`;

  const html = page({
    rel,
    ctx,
    main,
    title: `Services — Software Development & AI Solutions | ${BRAND.name}`,
    description:
      'Web development, mobile apps, CRM platforms, AI automation, AI agents and chatbots — six custom-built service lines from KeyPels.',
    url,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'KeyPels Services',
      url,
      hasPart: services.map((s) => ({
        '@type': 'Service',
        name: s.title,
        description: s.navDesc,
        url: `${BRAND.origin}/services/${s.slug}/`
      }))
    }
  });

  fs.mkdirSync(path.join(ROOT, 'services'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'services', 'index.html'), html, 'utf8');
  return 'services/index.html';
}

/* --------------------------------------------------------------------------
   About page
   -------------------------------------------------------------------------- */
function buildAbout() {
  const a = require('./pages/about');
  const rel = '../';
  const ctx = { rel, services, active: null, activeSection: 'about' };
  const url = `${BRAND.origin}/${ABOUT_PATH}`;

  const order = ['hero', 'journey', 'purpose', 'values', 'why', 'cta'];
  const main = order.map((k) => C.ABOUT_SECTIONS[k](ctx, a)).join('\n\n');

  const html = page({
    rel,
    ctx,
    main,
    title: a.meta.title,
    description: a.meta.description,
    url,
    jsonld: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          name: 'About ' + BRAND.name,
          description: a.meta.description,
          url
        },
        {
          '@type': 'Organization',
          name: BRAND.name,
          url: BRAND.origin + '/',
          email: BRAND.email,
          telephone: BRAND.phone,
          description: a.purpose.cards[0].body,
          sameAs: SOCIALS.map((s) => s.href)
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BRAND.origin + '/' },
            { '@type': 'ListItem', position: 2, name: 'About', item: url }
          ]
        }
      ]
    }
  });

  const dir = path.join(ROOT, ABOUT_PATH);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  return `${ABOUT_PATH}index.html`;
}

/* --------------------------------------------------------------------------
   Contact page
   -------------------------------------------------------------------------- */
function buildContact() {
  const c = require('./pages/contact');
  const rel = '../';
  const ctx = { rel, services, active: null, activeSection: 'contact' };
  const url = `${BRAND.origin}/${CONTACT_PATH}`;

  const order = ['hero', 'form', 'offices', 'faq', 'cta'];
  const main = order.map((k) => C.CONTACT_SECTIONS[k](ctx, c)).join('\n\n');

  const html = page({
    rel,
    ctx,
    main,
    title: c.meta.title,
    description: c.meta.description,
    url,
    jsonld: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          name: 'Contact ' + BRAND.name,
          description: c.meta.description,
          url
        },
        {
          '@type': 'Organization',
          name: BRAND.name,
          url: BRAND.origin + '/',
          email: BRAND.email,
          contactPoint: [{
            '@type': 'ContactPoint',
            contactType: 'sales',
            email: BRAND.email,
            telephone: BRAND.phone,
            availableLanguage: 'English'
          }]
        },
        {
          '@type': 'FAQPage',
          mainEntity: c.faq.items.map((it) => ({
            '@type': 'Question',
            name: it.q,
            acceptedAnswer: { '@type': 'Answer', text: it.a }
          }))
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: BRAND.origin + '/' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: url }
          ]
        }
      ]
    }
  });

  const dir = path.join(ROOT, CONTACT_PATH);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  return `${CONTACT_PATH}index.html`;
}

/* --------------------------------------------------------------------------
   Patch hand-authored pages between markers
   -------------------------------------------------------------------------- */
function patch(file, rel) {
  const abs = path.join(ROOT, file);
  let html = fs.readFileSync(abs, 'utf8');
  const ctx = { rel, services, active: null };

  const blocks = {
    header: C.header(ctx),
    mobilemenu: C.mobileMenu(ctx),
    herovisual: `      <div class="hero__stage" data-tilt>\n  ${C.heroNetwork(ctx)}\n      </div>`,
    footer: C.footer(ctx)
  };

  let replaced = 0;
  Object.keys(blocks).forEach((name) => {
    const re = new RegExp(`<!-- @${name} -->[\\s\\S]*?<!-- /@${name} -->`);
    if (!re.test(html)) return;
    html = html.replace(re, `<!-- @${name} -->\n${blocks[name]}\n<!-- /@${name} -->`);
    replaced += 1;
  });

  fs.writeFileSync(abs, html, 'utf8');
  return `${file} (${replaced} block${replaced === 1 ? '' : 's'})`;
}

/* --------------------------------------------------------------------------
   Sitemap
   -------------------------------------------------------------------------- */
function buildSitemap() {
  const urls = [
    { loc: `${BRAND.origin}/`, priority: '1.0', freq: 'monthly' },
    { loc: `${BRAND.origin}/services/`, priority: '0.9', freq: 'monthly' },
    ...services.map((s) => ({ loc: `${BRAND.origin}/services/${s.slug}/`, priority: '0.8', freq: 'monthly' })),
    { loc: `${BRAND.origin}/portfolio/`, priority: '0.9', freq: 'monthly' },
    ...portfolios.map((p) => ({ loc: `${BRAND.origin}/portfolio/${p.slug}/`, priority: '0.7', freq: 'monthly' })),
    { loc: `${BRAND.origin}/${ABOUT_PATH}`, priority: '0.8', freq: 'monthly' },
    { loc: `${BRAND.origin}/${CONTACT_PATH}`, priority: '0.8', freq: 'monthly' },
    { loc: `${BRAND.origin}/privacy.html`, priority: '0.2', freq: 'yearly' },
    { loc: `${BRAND.origin}/terms.html`, priority: '0.2', freq: 'yearly' }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.freq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
  return 'sitemap.xml';
}

/* --------------------------------------------------------------------------
   Run
   -------------------------------------------------------------------------- */
function run() {
  const written = [];
  services.forEach((s) => written.push(buildServicePage(s)));
  written.push(buildServicesIndex());
  portfolios.forEach((p) => written.push(buildPortfolioPage(p)));
  written.push(buildPortfolioIndex());
  written.push(buildAbout());
  written.push(buildContact());
  written.push(patch('index.html', ''));
  written.push(patch('privacy.html', ''));
  written.push(patch('terms.html', ''));
  written.push(buildSitemap());

  console.log('KeyPels build complete:');
  written.forEach((w) => console.log('  ✓ ' + w));
}

run();
