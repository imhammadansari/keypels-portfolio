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
    note:
      'Shipped iOS and Android products. Each preview uses the app’s own store screens — hover any card to swipe through them.',
    projects: [
      {
        category: 'Travel',
        tags: ['Android', 'iOS', 'Flight booking'],
        name: 'LIFTi',
        sub: 'Flight Booking & Luggage Sharing',
        body: 'A travel app that pairs flight search and booking with a peer-to-peer luggage-sharing marketplace, matching senders to travellers already on the route.',
        preview: 'app',
        src: 'lifti',
        screens: 8,
        w: 300,
        h: 650
      },
      {
        category: 'EdTech',
        tags: ['Android', 'Live video', 'Adaptive learning'],
        name: 'Vedantu',
        sub: 'Live Online Learning',
        body: 'A live-class learning platform for JEE, NEET and school syllabi, streaming interactive lessons with in-class testing and personalised mentoring.',
        preview: 'app',
        src: 'vedantu',
        screens: 8,
        w: 300,
        h: 650
      },
      {
        category: 'Health & Fitness',
        tags: ['iOS', 'HealthKit', 'Dashboards'],
        name: 'FitnessView',
        sub: 'Activity & Health Tracking',
        body: 'An activity dashboard that consolidates steps, workouts, hydration and health metrics into readable daily, weekly and monthly views.',
        preview: 'app',
        src: 'fitnessview',
        screens: 8,
        w: 300,
        h: 650
      },
      {
        category: 'Mobility',
        tags: ['Android', 'iOS', 'Real-time routing'],
        name: 'iRide',
        sub: 'Drive & Ride Platform',
        body: 'A two-sided ride-hailing app with rider booking, driver onboarding and real-time route and fare calculation across a single codebase.',
        preview: 'app',
        src: 'iride',
        screens: 8,
        w: 300,
        h: 650
      },
      {
        category: 'FinTech',
        tags: ['Android', 'Crypto', 'Wallet'],
        name: 'PayRemit',
        sub: 'Crypto Wallet & Payments',
        body: 'A multi-asset wallet for buying, selling and swapping crypto alongside everyday bill payments, airtime and data top-ups.',
        preview: 'app',
        src: 'payremit',
        screens: 6,
        w: 300,
        h: 650
      },
      {
        category: 'Healthcare',
        tags: ['Android', 'Telehealth', 'Bookings'],
        name: 'BigOHealth',
        sub: 'Instant Doctor Consultations',
        body: 'A telehealth app connecting patients to specialists for video consultation, second opinions, lab tests and surgery scheduling.',
        preview: 'app',
        src: 'bigohealth',
        screens: 6,
        w: 300,
        h: 650
      },
      {
        category: 'EdTech',
        tags: ['iOS', 'Android', 'Adaptive QBank'],
        name: 'King of the Curve',
        sub: 'Medical Exam Prep',
        body: 'A gamified pre-med exam-prep app with an adaptive question bank, spaced repetition and performance analytics per subject.',
        preview: 'app',
        src: 'kingofthecurve',
        screens: 5,
        w: 300,
        h: 650
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
