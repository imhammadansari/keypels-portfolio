module.exports = {
  slug: 'web-development',
  title: 'Web Development',
  navTitle: 'Web Development',
  navDesc: 'Fast, scalable websites and web applications.',
  portfolioDesc: 'SaaS platforms, storefronts and portals.',
  icon: 'web',
  number: '01',
  accent: ['#6366f1', '#8b5cf6'],
  heroVisual: 'browser-stack',
  cardVisual: 'browser',

  meta: {
    title: 'Web Development Services — Websites & Web Applications | KeyPels',
    description:
      'KeyPels designs and builds fast, scalable, conversion-focused websites and custom web applications — from marketing sites and eCommerce to complex internal platforms.'
  },

  sections: ['hero', 'intro', 'offerings', 'assurance', 'pricing', 'process', 'tech', 'faq', 'cta', 'more'],

  hero: {
    eyebrow: 'Web Development',
    h1: ['Web Development That', 'Earns Its Place'],
    gradientLine: 1,
    lead:
      'We design and build websites and web applications that load fast, rank well, and turn visitors into customers — engineered to keep performing long after launch.',
    chips: ['Next.js & React', 'Headless CMS', 'Core Web Vitals', 'API-first'],
    stats: [
      { value: 95, suffix: '+', label: 'Lighthouse performance target' },
      { value: 100, suffix: '%', label: 'Custom-built front ends' },
      { value: 3, suffix: ' wks', label: 'Typical time to first release' }
    ]
  },

  intro: {
    eyebrow: 'From idea to launch',
    h2: 'A Website Is A Product, Not A Brochure',
    body: [
      'Every build starts with the same questions: who is this for, what should it make them do, and how will we know it worked. From there we shape information architecture, interface design, engineering and analytics as one piece of work rather than a relay race between vendors.',
      'You get a single team through planning, UI/UX, development, testing, deployment and ongoing improvement — so nobody is guessing what was agreed three months ago, and nothing gets dropped between hand-offs.'
    ],
    points: [
      { icon: 'gauge', title: 'Performance as a requirement', body: 'Budgets for weight, render time and Core Web Vitals are set before design begins, not measured after launch.' },
      { icon: 'search', title: 'Built to be found', body: 'Semantic markup, clean URL structure, structured data and server-rendered content on every route that matters.' },
      { icon: 'layers', title: 'Content your team can edit', body: 'Editors get a proper CMS with real components — no rebuilding pages in a rich-text box.' },
      { icon: 'shield', title: 'Secure and observable', body: 'Hardened headers, dependency policy, error tracking and uptime alerting configured on day one.' }
    ],
    visual: 'browser-detail'
  },

  offerings: {
    eyebrow: 'What we build',
    h2: 'Our Web Development Services',
    lead: 'Four delivery lanes covering everything from a launch-ready marketing site to a platform your business runs on.',
    items: [
      {
        key: 'business-websites',
        tab: 'Business Websites',
        icon: 'globe',
        title: 'Business Website Development',
        body:
          'Marketing sites built to convert: sharp messaging, considered motion and a page-speed profile that keeps paid traffic cheap. Editors get reusable blocks so new campaigns ship without a developer.',
        bullets: ['Design system & component library', 'Headless CMS with editable blocks', 'Analytics, events and conversion tracking', 'On-page SEO and schema markup'],
        visual: 'browser-detail'
      },
      {
        key: 'ecommerce',
        tab: 'eCommerce',
        icon: 'cart',
        title: 'eCommerce Development',
        body:
          'Storefronts engineered around checkout completion. We tune catalogue browsing, search, cart and payments, and integrate the stock, tax and fulfilment systems you already run on.',
        bullets: ['Headless storefronts on Shopify or custom', 'Payment, tax and shipping integrations', 'Faceted search and merchandising rules', 'Checkout instrumentation and A/B testing'],
        visual: 'commerce'
      },
      {
        key: 'web-apps',
        tab: 'Web Applications',
        icon: 'code',
        title: 'Custom Web Applications',
        body:
          'Dashboards, portals, booking systems and internal tools — the software your operation depends on. Multi-tenant where you need it, role-aware throughout, and designed for daily use rather than a demo.',
        bullets: ['Role-based access and audit trails', 'Real-time data and background jobs', 'Reporting, exports and admin tooling', 'Documented APIs for future integrations'],
        visual: 'app-console'
      },
      {
        key: 'support',
        tab: 'Maintenance & Support',
        icon: 'refresh',
        title: 'Website Maintenance & Support',
        body:
          'A retainer that keeps the site fast, patched and improving: monitored uptime, dependency updates, performance regressions caught early, and a prioritised queue for the changes your team asks for.',
        bullets: ['Uptime, error and performance monitoring', 'Security patching and dependency upgrades', 'Monthly performance and SEO reporting', 'Agreed response times for fixes and changes'],
        visual: 'monitoring'
      }
    ]
  },

  process: {
    eyebrow: 'How we work',
    h2: 'From First Call To Live Site',
    lead: 'A structured, transparent process that takes a web idea from concept to a launch you can measure.',
    steps: [
      { title: 'Discovery Call', body: 'We map your goals, audience, competitors and constraints — and agree what success will look like in numbers.' },
      { title: 'Planning', body: 'Sitemap, scope, technical approach and timeline, written down. You approve the plan before anyone opens an editor.' },
      { title: 'Design & Development', body: 'Interface design and engineering run together in short cycles, with a staging link you can click through every week.' },
      { title: 'Launch & Support', body: 'Deployment, redirects, analytics and monitoring — then a maintenance lane for continuous improvement.' }
    ]
  },

  tech: {
    eyebrow: 'Tech expertise',
    h2: 'The Stack We Build On',
    lead: 'Mainstream, well-supported technology chosen so your site stays maintainable long after the build team moves on.',
    groups: [
      { name: 'Front end', icon: 'code', items: ['React', 'Next.js', 'TypeScript', 'HTML & CSS', 'Tailwind', 'Web Components'] },
      { name: 'Back end & data', icon: 'layers', items: ['Node.js', 'Python', 'REST & GraphQL APIs', 'PostgreSQL', 'Redis', 'Prisma'] },
      { name: 'Content', icon: 'book', items: ['Headless CMS', 'Sanity', 'Contentful', 'WordPress (headless)', 'MDX', 'Structured content models'] },
      { name: 'Cloud & delivery', icon: 'cloud', items: ['Vercel', 'AWS', 'Cloudflare', 'CI/CD pipelines', 'Edge caching', 'Observability'] }
    ]
  },

  assurance: {
    eyebrow: 'What you can hold us to',
    h2: 'Standards We Build Against',
    lead: 'Not marketing numbers — the engineering targets written into every web engagement we take on.',
    items: [
      { icon: 'gauge', value: 95, suffix: '+', label: 'Lighthouse performance', note: 'Measured on production, on a throttled mobile connection.' },
      { icon: 'clock', value: 1, suffix: ' day', label: 'Support response', note: 'Business-day response on every maintenance retainer.' },
      { icon: 'shield', value: 100, suffix: '%', label: 'Code you own', note: 'Your repository, your infrastructure, no lock-in.' },
      { icon: 'refresh', value: 2, suffix: ' wks', label: 'Release cadence', note: 'A demo-able build in your hands at least every two weeks.' }
    ]
  },

  pricing: {
    eyebrow: 'Transparent delivery retainers',
    h2: 'Premium Pricing For Teams That Care About Quality And Momentum',
    lead: 'Each plan is structured for a different growth stage, with the same focus on clean execution, fast communication and measurable business impact.',
    tiers: [
      {
        badge: 'Launch-ready foundation',
        name: 'Starter',
        desc: 'Best for founders and lean teams that need a polished digital presence quickly.',
        price: '$399',
        period: '/month',
        tagline: 'Flexible monthly delivery and support for fast launches.',
        features: [
          'Up to 6 strategic website pages',
          'Mobile-first responsive interface',
          'Technical SEO foundation',
          'CMS-ready build and handoff',
          'Launch QA plus training session'
        ],
        cta: 'Start Your Project'
      },
      {
        badge: 'Most selected',
        name: 'Growth',
        featured: true,
        desc: 'Ideal for growing businesses that need more pages, stronger funnels and ongoing optimisation.',
        price: '$799',
        period: '/month',
        tagline: 'Built for teams scaling marketing, content and lead generation.',
        features: [
          'Unlimited landing pages and campaigns',
          'Advanced on-page SEO structure',
          'Conversion-focused UX refinements',
          'CMS, blog or landing page system',
          'Analytics dashboard setup',
          'Priority support and revisions'
        ],
        cta: 'Book a Free Consultation'
      },
      {
        badge: 'High-performance delivery',
        name: 'Scale',
        desc: 'For established brands that need custom functionality, integrations and a dedicated product partner.',
        price: '$1,499',
        period: '/month',
        tagline: 'A senior delivery lane for complex products and enterprise growth initiatives.',
        features: [
          'Up to 15 custom pages or flows',
          'Custom app-like interactions',
          'API and workflow integrations',
          'Performance monitoring and tuning',
          'Dedicated sprint planning cadence',
          'Slack channel and priority support'
        ],
        cta: 'Talk to Our Team'
      }
    ],
    note: {
      title: 'Need a custom roadmap instead of a fixed package?',
      body: 'We also quote enterprise websites, replatforming projects, app-plus-web bundles and ongoing white-label product partnerships for agencies and in-house teams.'
    }
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'Web Development Questions',
    items: [
      { q: 'What technologies do you build websites with?', a: 'Primarily React and Next.js on the front end with Node.js or Python services behind it, deployed to Vercel, AWS or Cloudflare. Where a headless CMS fits we use Sanity, Contentful or a headless WordPress. We choose from a deliberately small, well-supported set so your site stays maintainable and easy to hire for.' },
      { q: 'Will my website be responsive and fast?', a: 'Yes — and both are treated as requirements rather than a final polish. We set a performance budget before design starts, build mobile-first, server-render the routes that matter for SEO, and enforce Core Web Vitals checks in the deployment pipeline so a regression fails the build rather than reaching production.' },
      { q: 'How long does a web project take?', a: 'A focused marketing site is typically 3–6 weeks. A custom web application or commerce build usually runs 3–5 months depending on integrations and the number of user roles. We break every project into milestones during planning so you always know what is landing next.' },
      { q: 'Do you handle SEO and accessibility?', a: 'Technical SEO is part of the build: semantic markup, clean URLs, metadata, structured data, sitemaps and fast server-rendered pages. On accessibility we target WCAG 2.1 AA — keyboard navigation, focus states, colour contrast and screen-reader semantics are checked before launch, not retrofitted.' },
      { q: 'Can you integrate with our existing systems?', a: 'Yes. We regularly connect web platforms to CRMs, ERPs, payment gateways, marketing automation, analytics warehouses and bespoke internal APIs. If a system has an API — or can be given one — we can integrate it, including building the middleware when a direct connection is not practical.' },
      { q: 'Do you offer maintenance after launch?', a: 'We do. Retainers cover uptime and error monitoring, security patching, dependency upgrades, performance work and a prioritised queue for the changes your team requests, with agreed response times written into the agreement.' },
      { q: 'Who owns the code and the hosting accounts?', a: 'You do, from day one. We work in your repository and your cloud accounts wherever possible, and hand over full documentation at launch. There is no proprietary platform to stay locked into.' }
    ]
  },

  cta: {
    h2: ['Ready To Rebuild', 'Your Web Presence?'],
    body: 'Tell us what the site needs to do for the business. We will come back with an approach, a timeline and a straight answer on cost.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
