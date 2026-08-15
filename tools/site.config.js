/* ==========================================================================
   KeyPels — global site configuration
   Single source of truth for brand, navigation and the services registry.
   Consumed by the generator (tools/build.js) and mirrored to the browser as
   assets/js/services.data.js so runtime code never re-declares service info.
   ========================================================================== */

const BRAND = {
  name: 'KeyPels',
  tagline: 'Building smarter digital products and AI-powered businesses.',
  email: 'contact@keypels.com',

  /* PLACEHOLDER contact details — replace before launch.
     The number uses the 555-01xx range reserved for fictional use, so it can
     never dial a real line by accident. */
  phone: '+1 (555) 010-2030',
  phoneHref: '+15550102030',
  whatsapp: '+1 (555) 010-2031',
  whatsappHref: '15550102031',
  offices: [
    { key: 'hq', label: 'Head Office', city: 'Remote-first HQ', lines: ['KeyPels HQ', 'Address line one', 'City, Postcode', 'Country'] },
    { key: 'studio', label: 'Delivery Studio', city: 'Engineering studio', lines: ['KeyPels Studio', 'Address line one', 'City, Postcode', 'Country'] }
  ],

  origin: 'https://www.keypels.com',
  year: 2026
};

/* Where every "Let's Talk" / "Start a Project" button points. */
const CONTACT_PATH = 'contact/';
const ABOUT_PATH = 'about/';

/* The two mega menus. Both iterate the same service registry, so a new
   service appears in each of them automatically. */
const MENUS = {
  services: {
    id: 'services-menu',
    label: 'Services',
    eyebrow: 'What we build',
    base: 'services/',
    allLabel: 'All services',
    desc: (s) => s.navDesc
  },
  portfolio: {
    id: 'portfolio-menu',
    label: 'Portfolio',
    eyebrow: 'Selected work',
    base: 'portfolio/',
    allLabel: 'All portfolio work',
    desc: (s) => s.portfolioDesc || s.navDesc
  }
};

/* Primary navigation. `type: 'menu'` renders the matching mega dropdown. */
const NAV = [
  { label: 'Services', type: 'menu', menu: 'services' },
  { label: 'Portfolio', type: 'menu', menu: 'portfolio' },
  { label: 'About', href: ABOUT_PATH }
];

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'X', href: 'https://x.com/', icon: 'x' }
];

/* Service order drives the dropdown, the /services index, footer links and the
   "other services" navigation at the foot of every service page. */
const SERVICE_SLUGS = [
  'web-development',
  'mobile-app-development',
  'crm-development',
  'ai-automation',
  'ai-agents',
  'chatbots'
];

module.exports = { BRAND, NAV, MENUS, SOCIALS, SERVICE_SLUGS, CONTACT_PATH, ABOUT_PATH };
