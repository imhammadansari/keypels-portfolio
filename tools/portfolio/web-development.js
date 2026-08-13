module.exports = {
  slug: 'web-development',
  service: 'Web Development',
  title: 'Web Development Portfolio',
  heroVisual: 'browser-stack',

  meta: {
    title: 'Web Development Portfolio — Websites & Web Apps | KeyPels',
    description:
      'A curated view of the web products KeyPels designs and builds — from high-conversion marketing sites to multi-tenant SaaS platforms and public-sector portals.'
  },

  hero: {
    h1: ['Web Development', 'Portfolio'],
    lead:
      'From high-conversion landing pages to enterprise SaaS platforms, a curated view of the web products we design and build for ambitious brands.'
  },

  capabilities: ['Frontend Engineering', 'Backend & APIs', 'E-Commerce', 'CMS & Content', 'DevOps & Infrastructure'],

  work: {
    h2: 'Our Work',
    lead: 'A selection of the project types we deliver for clients across industries.',
    projects: [
      {
        category: 'SaaS',
        tags: ['React', 'Node.js', 'Stripe'],
        name: 'Northsignal',
        sub: 'B2B SaaS Platform',
        body: 'A multi-tenant B2B platform with role-based access, real-time collaboration and subscription billing, built to keep per-tenant data isolated as the account base grows.',
        visual: 'app-console'
      },
      {
        category: 'E-Commerce',
        tags: ['Next.js', 'Shopify', 'Headless'],
        name: 'Maisonry',
        sub: 'Luxury Commerce Store',
        body: 'A headless storefront for a premium fashion retailer with a 3D product configurator, dynamic sizing guidance and a checkout tuned for completion on poor connections.',
        visual: 'commerce'
      },
      {
        category: 'Media',
        tags: ['JAMstack', 'Headless CMS', 'CDN'],
        name: 'Broadsheet',
        sub: 'Publishing Platform',
        body: 'An editorial platform built for millions of monthly page views, with CDN-first delivery, automated image optimisation and incremental static regeneration for breaking stories.',
        visual: 'browser-detail'
      },
      {
        category: 'Public Sector',
        tags: ['WCAG 2.1 AA', 'Laravel', 'Vue'],
        name: 'CivicDesk',
        sub: 'Citizen Services Portal',
        body: 'An accessibility-first services portal handling high-volume form submissions, with progressive disclosure, save-and-resume applications and full keyboard and screen-reader support.',
        visual: 'document-flow'
      },
      {
        category: 'Healthcare',
        tags: ['HIPAA', 'AWS', 'FHIR'],
        name: 'Carelink',
        sub: 'Patient Portal',
        body: 'A compliance-aware patient portal with appointment booking, secure messaging, lab-result delivery and integration into an existing electronic health record system.',
        visual: 'support-console'
      },
      {
        category: 'PropTech',
        tags: ['Python', 'PostGIS', 'Maps'],
        name: 'Plotline',
        sub: 'Property Search Platform',
        body: 'An interactive listing and search platform with map-based exploration, geospatial filtering, affordability calculators and a two-way sync into the agents’ CRM.',
        visual: 'crm-detail'
      }
    ]
  },

  approach: {
    h2: 'Our Approach',
    lead: 'The methodology behind every web engagement, from first workshop to post-launch retainer.',
    steps: [
      { icon: 'search', title: 'Requirements & Architecture', body: 'Stakeholder interviews, technical requirements gathering and system architecture design before any code is committed.' },
      { icon: 'wand', title: 'Design & Prototype', body: 'Wireframes, a component library and clickable prototypes validated with real users before development starts.' },
      { icon: 'refresh', title: 'Iterative Build', body: 'Feature-first development in two-week sprints, with a staging deployment you can click through after every one.' },
      { icon: 'shield', title: 'Performance & Security Audit', body: 'Lighthouse audits, dependency and OWASP vulnerability scanning and an accessibility review before every production release.' },
      { icon: 'globe', title: 'Launch & SEO Setup', body: 'Production deployment, DNS and redirect migration, structured data, XML sitemaps and search console configuration.' },
      { icon: 'gauge', title: 'Ongoing Maintenance', body: 'Monthly security patches, dependency updates, performance monitoring and continued feature development on retainer.' }
    ]
  },

  outcomes: {
    h2: ['Ready To Build Your', 'Next Web Product?'],
    lead: 'The problems clients usually arrive with — and how we deal with each of them.',
    items: [
      { title: 'Slow, outdated website?', body: 'We rebuild legacy sites on modern stacks with a performance budget enforced in the deployment pipeline, so speed is a build requirement rather than a post-launch clean-up job.' },
      { title: 'Conversion rate issues?', body: 'Our UX-led process instruments the funnel from day one, so changes are argued from event data and experiments rather than opinions about button colours.' },
      { title: 'Scaling pains?', body: 'We architect for traffic spikes from the start — caching strategy, queue-backed workloads and infrastructure that scales horizontally without a re-platform.' },
      { title: 'Security vulnerabilities?', body: 'Dependency scanning, hardened headers and OWASP checks run in CI on every release, and a security review is part of launch rather than an afterthought.' },
      { title: 'Missed deadlines?', body: 'Two-week sprints with a demo-able build at the end of each give you constant visibility into progress and early warning when scope is at risk.' }
    ]
  },

  cta: {
    h2: ['Have A Web Project', 'In Mind?'],
    body: 'Tell us what the site or platform needs to do for the business. We will come back with an approach, a timeline and a straight answer on cost.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
