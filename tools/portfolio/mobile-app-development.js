module.exports = {
  slug: 'mobile-app-development',
  service: 'Mobile App Development',
  title: 'Mobile App Development Portfolio',
  heroVisual: 'phone-duo',

  meta: {
    title: 'Mobile App Development Portfolio — iOS & Android | KeyPels',
    description:
      'A track record of the iOS and Android products KeyPels designs and builds — fintech, healthcare, commerce, fitness, education and logistics applications.'
  },

  hero: {
    h1: ['Mobile App Development', 'Portfolio'],
    lead:
      'Explore the kind of high-performance iOS and Android applications we build — the ones users keep on their home screen and businesses run on.'
  },

  capabilities: ['iOS Development', 'Android Development', 'Cross-Platform', 'Backend & APIs', 'Testing & Launch'],

  work: {
    h2: 'Our Work',
    lead: 'A selection of the mobile products we deliver for clients across industries.',
    projects: [
      {
        category: 'FinTech',
        tags: ['iOS', 'Android', 'Open Banking'],
        name: 'Ledgerly',
        sub: 'Personal Finance App',
        body: 'A multi-currency budgeting and investment tracker with open-banking aggregation, real-time portfolio analysis and biometric authentication on both platforms.',
        visual: 'phone-detail'
      },
      {
        category: 'Healthcare',
        tags: ['React Native', 'Telehealth', 'EMR'],
        name: 'Clinicly',
        sub: 'Healthcare Scheduling',
        body: 'A patient-facing booking and telehealth application integrated with clinic EMR systems, handling high monthly booking volume with strict data-handling requirements.',
        visual: 'support-console'
      },
      {
        category: 'E-Commerce',
        tags: ['Flutter', 'Apple Pay', 'AR'],
        name: 'Cartway',
        sub: 'Commerce App',
        body: 'A headless commerce app spanning hundreds of product categories, with AR try-on, saved payment methods and a one-tap checkout that survives a dropped connection.',
        visual: 'commerce-app'
      },
      {
        category: 'Health & Fitness',
        tags: ['SwiftUI', 'HealthKit', 'watchOS'],
        name: 'Cadence',
        sub: 'Fitness & Coaching',
        body: 'A personalised workout and nutrition coaching app with Apple Watch integration, a streamed trainer video library and adaptive programme generation.',
        visual: 'cross-platform'
      },
      {
        category: 'EdTech',
        tags: ['Kotlin', 'Offline-first', 'AI'],
        name: 'Studypath',
        sub: 'Learning Platform',
        body: 'An adaptive learning app for school-age students with gamified progression, offline course downloads and AI-generated practice questions per topic.',
        visual: 'android-detail'
      },
      {
        category: 'Logistics',
        tags: ['Cross-platform', 'Maps', 'Offline sync'],
        name: 'Routewise',
        sub: 'Fleet Management',
        body: 'Real-time fleet tracking and driver management with route optimisation, fuel logging and maintenance scheduling — built offline-first for poor-signal depots.',
        visual: 'enterprise-app'
      }
    ]
  },

  approach: {
    h2: 'Our Approach',
    lead: 'The delivery methodology behind every mobile engagement, from research through to post-launch iteration.',
    steps: [
      { icon: 'search', title: 'Discovery & Scoping', body: 'User research, competitive benchmarking and technical feasibility review to define a clear product specification and delivery timeline.' },
      { icon: 'wand', title: 'UI/UX Design', body: 'Wireframes, interactive prototypes and a full design system delivered for approval before a single line of production code is written.' },
      { icon: 'refresh', title: 'Agile Development', body: 'Two-week sprint cycles with an installable build at the end of every one, so progress is something you hold rather than something you are told.' },
      { icon: 'shield', title: 'QA & Performance', body: 'Automated UI tests, device-fragmentation testing, load testing and accessibility audits across the full range of target hardware.' },
      { icon: 'mobile', title: 'App Store Launch', body: 'End-to-end App Store and Google Play submission — metadata, screenshots, privacy declarations and review-board response support.' },
      { icon: 'gauge', title: 'Post-Launch Support', body: 'Crash monitoring, feature iteration driven by user analytics and OS-update compatibility maintenance to keep the app healthy.' }
    ]
  },

  outcomes: {
    h2: ['Ready To Launch', 'Your Mobile App?'],
    lead: 'The problems teams usually bring us — and how each one gets handled.',
    items: [
      { title: 'Slow time to market?', body: 'Our delivery framework ships a testable build every two weeks, so the first release reaches real users while the opportunity is still open rather than after it has closed.' },
      { title: 'Cross-platform costs?', body: 'We maximise shared code between iOS and Android with React Native or Flutter, and reserve native work for the parts of the product that genuinely need it.' },
      { title: 'Poor app ratings?', body: 'Usability problems get caught in prototype testing before build, and crash reporting plus analytics are wired in from version one so regressions surface before reviews do.' },
      { title: 'Backend bottlenecks?', body: 'We architect mobile-first APIs designed for the traffic pattern apps actually create — bursty, offline-tolerant and cache-friendly — so scale does not force a re-platform.' },
      { title: 'Maintenance burden?', body: 'Retainer plans cover OS updates, crash triage, store compliance changes and feature additions on a predictable monthly budget.' }
    ]
  },

  cta: {
    h2: ['Got A Mobile Product', 'To Build?'],
    body: 'Bring us the concept, the half-finished build or the app that needs rescuing. We will tell you honestly what it takes to get it to the store and keep it there.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
