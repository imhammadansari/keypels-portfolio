module.exports = {
  slug: 'mobile-app-development',
  title: 'Mobile App Development',
  navTitle: 'Mobile App Development',
  navDesc: 'Native-quality iOS and Android products.',
  portfolioDesc: 'FinTech, health, commerce and logistics apps.',
  icon: 'mobile',
  number: '02',
  accent: ['#8b5cf6', '#22d3ee'],
  heroVisual: {
    img: 'preview/app/lifti/03.webp',
    kind: 'phone',
    alt: 'LIFTi flight booking screen',
    w: 300,
    h: 650
  },
  cardVisual: 'phone',

  meta: {
    title: 'Mobile App Development Services — iOS & Android | KeyPels',
    description:
      'KeyPels designs and develops modern iOS and Android applications — native and cross-platform — with the performance, polish and release discipline a real product needs.'
  },

  sections: ['hero', 'intro', 'offerings', 'assurance', 'pricing', 'process', 'differentiators', 'benefits', 'faq', 'cta'],

  hero: {
    eyebrow: 'Mobile App Development',
    h1: ['Mobile Products People', 'Keep Coming Back To'],
    gradientLine: 1,
    lead:
      'We design and develop iOS and Android applications with the performance, polish and release discipline of a product team — not a one-off project drop.',
    chips: ['Swift & Kotlin', 'React Native', 'Flutter', 'App Store & Play delivery'],
    stats: [
      { value: 60, suffix: ' fps', label: 'Interaction target on mid-tier devices' },
      { value: 2, suffix: ' wks', label: 'Build in your hands, every sprint' },
      { value: 100, suffix: '%', label: 'Store submission handled for you' }
    ]
  },

  intro: {
    eyebrow: 'Beyond the download',
    h2: 'An App Is Judged In The First Ninety Seconds',
    body: [
      'Onboarding, first render, the moment a list scrolls — that is where users decide whether your product is worth a place on their home screen. We design for those moments first, then build outward to the features that keep people returning in week four.',
      'Every engagement covers the whole lifecycle: product definition, UI/UX, native or cross-platform engineering, QA on real devices, store submission, and the release cadence that follows. You end up with an app you can keep shipping, not one that quietly rots between versions.'
    ],
    points: [
      { icon: 'gauge', title: 'Performance on real devices', body: 'Tested on mid-tier hardware and poor networks, because that is what most of your users actually have.' },
      { icon: 'fingerprint', title: 'Platform-native feel', body: 'Navigation, gestures, typography and haptics that match what iOS and Android users already expect.' },
      { icon: 'lock', title: 'Secure by construction', body: 'Encrypted storage, secure auth flows, certificate pinning and platform privacy requirements handled up front.' },
      { icon: 'refresh', title: 'Built to keep releasing', body: 'Automated builds, staged rollouts, crash reporting and analytics wired in from the very first version.' }
    ],
    visual: {
      img: 'preview/app/fitnessview/01.webp',
      kind: 'phone',
      alt: 'FitnessView activity dashboard',
      w: 300,
      h: 650
    }
  },

  offerings: {
    eyebrow: 'What we build',
    h2: 'Mobile Development Services For Every Product Stage',
    lead: 'From a first native release to a multi-platform product with deep backend integration.',
    items: [
      {
        key: 'ios',
        tab: 'iOS Apps',
        icon: 'mobile',
        title: 'iOS App Development',
        body:
          'Swift and SwiftUI applications built to Apple’s guidelines and reviewed with App Store submission in mind from the beginning — so approval is a formality rather than a scramble.',
        bullets: ['Swift, SwiftUI and UIKit', 'Human Interface Guidelines compliance', 'App Store submission and review support', 'Widgets, notifications and deep links'],
        visual: {
          img: 'preview/app/iride/03.webp',
          kind: 'phone',
          alt: 'iRide iOS ride screen',
          w: 300,
          h: 650
        }
      },
      {
        key: 'android',
        tab: 'Android Apps',
        icon: 'mobile',
        title: 'Android App Development',
        body:
          'Kotlin and Jetpack Compose applications tuned for the range of devices and screen sizes Android actually ships on, with Play Console delivery and staged rollouts handled for you.',
        bullets: ['Kotlin and Jetpack Compose', 'Material design implementation', 'Play Console delivery and staged rollout', 'Device-matrix testing on real hardware'],
        visual: {
          img: 'preview/app/vedantu/04.webp',
          kind: 'phone',
          alt: 'Vedantu Android class screen',
          w: 300,
          h: 650
        }
      },
      {
        key: 'cross-platform',
        tab: 'Cross-Platform',
        icon: 'layers',
        title: 'Cross-Platform Development',
        body:
          'React Native and Flutter builds that share one codebase across iOS and Android without the tell-tale compromises — native modules where they matter, shared logic everywhere else.',
        bullets: ['React Native and Flutter', 'Shared business logic, native modules', 'Single release pipeline for both stores', 'Faster path to a two-platform launch'],
        visual: {
          img: 'preview/app/kingofthecurve/03.webp',
          kind: 'phone',
          alt: 'King of the Curve cross-platform screen',
          w: 300,
          h: 650
        }
      },
      {
        key: 'commerce-apps',
        tab: 'Commerce Apps',
        icon: 'cart',
        title: 'eCommerce Mobile Apps',
        body:
          'Shopping experiences engineered around repeat purchase: fast catalogue browsing, saved payment methods, push-driven re-engagement and a checkout that survives a bad connection.',
        bullets: ['Catalogue, search and merchandising', 'Apple Pay, Google Pay and card checkout', 'Push notifications and lifecycle messaging', 'Order tracking and account management'],
        visual: {
          img: 'preview/app/payremit/02.webp',
          kind: 'phone',
          alt: 'PayRemit wallet and checkout screen',
          w: 300,
          h: 650
        }
      },
      {
        key: 'enterprise',
        tab: 'Enterprise Apps',
        icon: 'shield',
        title: 'Enterprise Mobile Apps',
        body:
          'Field, logistics and internal-operations apps that work offline, sync cleanly when signal returns, and satisfy the security and device-management requirements your IT team will ask about.',
        bullets: ['Offline-first data and conflict handling', 'SSO, MDM and device policy support', 'Integration with ERP, CRM and internal APIs', 'Role-based permissions and audit trails'],
        visual: {
          img: 'preview/app/bigohealth/04.webp',
          kind: 'phone',
          alt: 'BigOHealth enterprise consultation screen',
          w: 300,
          h: 650
        }
      }
    ]
  },

  assurance: {
    eyebrow: 'How we measure ourselves',
    h2: 'The Bar We Build To',
    lead: 'Concrete engineering targets applied to every mobile engagement, written into the agreement rather than the sales deck.',
    items: [
      { icon: 'gauge', value: 60, suffix: ' fps', label: 'Scroll and animation target', note: 'Held on mid-tier devices, not just the latest flagship.' },
      { icon: 'bolt', value: 2, suffix: ' s', label: 'Cold start budget', note: 'Time to interactive on a mid-range Android handset.' },
      { icon: 'shield', value: 99, suffix: '%', label: 'Crash-free sessions', note: 'Monitored continuously with alerting on regressions.' },
      { icon: 'refresh', value: 2, suffix: ' wks', label: 'Release cadence', note: 'An installable build on your device every sprint.' }
    ]
  },

  process: {
    eyebrow: 'Our process',
    h2: 'How A KeyPels App Gets Built',
    lead: 'Seven stages, each with something you can see, click or install at the end of it.',
    steps: [
      { title: 'Consultation & Assessment', body: 'We start with the problem, the users and the commercial goal — then pressure-test whether an app is genuinely the right answer.' },
      { title: 'Scope Definition', body: 'Feature set, platforms, integrations and release plan agreed and written down, with a clear line between version one and later.' },
      { title: 'UI/UX Design', body: 'Flows, wireframes and a clickable prototype you can put in front of real users before a line of production code exists.' },
      { title: 'Development', body: 'Native or cross-platform engineering in two-week cycles, with an installable build on your device at the end of each one.' },
      { title: 'Testing & QA', body: 'Automated tests plus manual passes on a real device matrix — different screen sizes, OS versions and network conditions.' },
      { title: 'Deployment', body: 'Store listings, assets, review submission, phased rollout and release monitoring across the App Store and Google Play.' },
      { title: 'Maintenance & Support', body: 'OS upgrades, crash triage, performance work and a roadmap for the features version two deserves.' }
    ]
  },

  differentiators: {
    eyebrow: 'Why KeyPels',
    h2: 'What Makes Our Mobile Work Different',
    lead: 'The things clients tell us they did not get from the last team they hired.',
    items: [
      { title: 'A senior team, on your product', body: 'The engineers and designers in your kick-off are the ones who build the app. No hand-off to a junior bench once the contract is signed, and no rotating cast between sprints.' },
      { title: 'Product thinking, not ticket-taking', body: 'We push back when a requested feature will not move the metric you care about, and we bring alternatives. You are buying judgement as well as delivery capacity.' },
      { title: 'Designed for the devices people own', body: 'Performance work happens on mid-tier hardware and throttled networks throughout the build, so the experience holds up outside a demo on the newest phone.' },
      { title: 'Release discipline from day one', body: 'CI, automated builds, crash reporting, analytics and staged rollouts are configured in the first sprint — not bolted on the week before launch.' },
      { title: 'Support that continues after launch', body: 'OS releases break things every year. Our retainers cover upgrades, crash triage and continuous improvement so your app does not quietly decay.' }
    ]
  },

  benefits: {
    eyebrow: 'Benefits',
    h2: 'What You Get From Building With Us',
    lead: 'The practical outcomes behind the engineering decisions.',
    items: [
      { icon: 'layers', title: 'Scalable architecture', body: 'A structure that absorbs new features and user growth without a rewrite in eighteen months.' },
      { icon: 'lock', title: 'Enhanced security', body: 'Encrypted storage, secure authentication, certificate pinning and compliance with platform privacy rules.' },
      { icon: 'users', title: 'Interfaces people understand', body: 'Platform-native patterns and accessible design, validated with real users before build.' },
      { icon: 'bolt', title: 'Faster time to market', body: 'A focused first release that reaches the store while the opportunity is still open.' },
      { icon: 'chart', title: 'Decisions backed by data', body: 'Analytics and funnels instrumented from version one, so roadmap arguments end with evidence.' },
      { icon: 'target', title: 'Cost you can plan around', body: 'Fixed-scope phases with a clear change process — no surprise invoices at the end of a sprint.' }
    ]
  },

  pricing: {
    eyebrow: 'Engagement models',
    h2: 'App Development Built For Launch, Growth And Scale',
    lead: 'Whether you are validating an MVP or expanding a mature product, each model gives you a clear delivery shape with room to evolve.',
    tiers: [
      {
        badge: 'For new product ideas',
        name: 'MVP Launch',
        desc: 'Perfect for startups validating a concept with a fast, focused mobile release.',
        price: '$499',
        period: '/month',
        tagline: 'A lean build lane for teams moving from idea to first release.',
        features: [
          'Single-platform iOS or Android app',
          'Core user flows and onboarding',
          'Clickable prototype to production build',
          'API integration for essential features',
          'Launch support and QA testing'
        ],
        cta: 'Launch Your MVP'
      },
      {
        badge: 'Most requested',
        name: 'Growth App',
        featured: true,
        desc: 'Built for product teams that need richer functionality, stronger UX and ongoing release support.',
        price: '$799',
        period: '/month',
        tagline: 'Ideal for scaling mobile products with active user acquisition and retention goals.',
        features: [
          'Cross-platform or dual-platform delivery',
          'Advanced UI system and micro-interactions',
          'Admin panel or CMS integration',
          'Push notifications and analytics events',
          'App store deployment support',
          'Priority fixes and release iterations'
        ],
        cta: 'Book a Free Consultation'
      },
      {
        badge: 'For serious scale',
        name: 'Product Partner',
        desc: 'A dedicated mobile product partnership for complex apps, deep integrations and roadmap ownership.',
        price: '$999',
        period: '/month',
        tagline: 'Best for established apps that need a reliable partner embedded in the roadmap.',
        features: [
          'Multi-role squad for ongoing sprints',
          'Complex backend or third-party integrations',
          'Performance, security and crash monitoring',
          'Feature experimentation and retention flows',
          'Dedicated release planning and reporting',
          'Priority communication channel'
        ],
        cta: 'Talk to Our Team'
      }
    ],
    note: {
      title: 'Need a custom mobile roadmap or enterprise scope?',
      body: 'We also run discovery workshops, product redesigns, backend-heavy mobile platforms and combined app-plus-web ecosystems with tailored engagement models.'
    }
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'Mobile App Questions',
    items: [
      { q: 'What platforms do you develop mobile apps for?', a: 'iOS and Android, natively with Swift and Kotlin or cross-platform with React Native and Flutter. Which route we recommend depends on your feature set, performance needs and how much of the product is genuinely platform-specific — we make that call with you during scoping, not after the contract.' },
      { q: 'How long does it take to develop a mobile app?', a: 'A focused MVP typically takes 3–4 months from kick-off to store approval. A richer product with backend integrations, multiple roles and offline behaviour usually runs 6–9 months. You get an installable build every two weeks throughout, so progress is never a matter of trust.' },
      { q: 'Native or cross-platform — which should we choose?', a: 'Cross-platform is usually right when the two platforms should behave the same way and time to market matters; it can cut build time meaningfully. Native earns its cost when you need heavy graphics, deep hardware access, complex background work or platform-specific interaction. We will tell you which applies to your case even when it is the cheaper answer.' },
      { q: 'Do you handle App Store and Google Play submission?', a: 'Yes. Store listings, screenshots, metadata, privacy declarations, review submission and phased rollout are all part of delivery. We also stay on through the first release window to handle any reviewer feedback quickly.' },
      { q: 'What does mobile app development cost?', a: 'It depends on platforms, feature depth and integrations, so we quote after scoping rather than guessing up front. Every engagement is broken into fixed-scope phases with a defined change process, so you can plan spend and stop or extend at clear points.' },
      { q: 'Do you provide UI/UX design as well as development?', a: 'We do — flows, wireframes, a full interface design and a clickable prototype, all produced in-house by the same team that builds the app. Design and engineering working together is a large part of why the result feels considered.' },
      { q: 'Can you integrate the app with our existing systems?', a: 'Yes. We regularly connect mobile apps to CRMs, ERPs, payment providers, analytics platforms and bespoke internal APIs, including building a middleware layer when the existing system has no usable API.' },
      { q: 'How do you keep our app secure?', a: 'Encrypted local storage, secure authentication flows, certificate pinning, no secrets in the bundle, dependency scanning and adherence to Apple and Google privacy requirements. For regulated clients we also support external penetration testing and remediation.' },
      { q: 'What happens after launch?', a: 'Our support retainers cover OS upgrades, crash triage, performance monitoring, store compliance changes and a prioritised queue for new features — because the version that ships is rarely the version that succeeds.' }
    ]
  },

  cta: {
    h2: ['Got An App Idea?', 'Let’s Ship It Properly.'],
    body: 'Bring us the concept, the half-finished build or the app that needs rescuing. We will tell you honestly what it takes to get it to the store and keep it there.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
