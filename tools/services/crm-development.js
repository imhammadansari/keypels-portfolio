module.exports = {
  slug: 'crm-development',
  title: 'CRM Development',
  navTitle: 'CRM Development',
  navDesc: 'Custom CRM platforms built around your pipeline.',
  portfolioDesc: 'Sales, service and brokerage platforms.',
  icon: 'crm',
  number: '03',
  accent: ['#22d3ee', '#6366f1'],
  heroVisual: 'crm-board',
  cardVisual: 'crm',

  meta: {
    title: 'CRM Development Services — Custom CRM Platforms | KeyPels',
    description:
      'KeyPels builds custom CRM platforms that centralise customer data, streamline sales workflows and replace the spreadsheets your team works around.'
  },

  sections: ['hero', 'intro', 'offerings', 'tech', 'pricing', 'process', 'benefits', 'faq', 'cta', 'more'],

  hero: {
    eyebrow: 'CRM Development',
    h1: ['A CRM Your Team', 'Actually Wants To Use'],
    gradientLine: 1,
    lead:
      'Custom CRM platforms that centralise customer data, mirror how your pipeline really works, and remove the spreadsheets your team quietly keeps on the side.',
    chips: ['Custom data models', 'Pipeline automation', 'Reporting & forecasting', 'Two-way integrations'],
    stats: [
      { value: 1, suffix: '', label: 'Source of truth for customer data' },
      { value: 100, suffix: '%', label: 'Fields shaped to your process' },
      { value: 0, suffix: '', label: 'Per-seat licence lock-in' }
    ]
  },

  intro: {
    eyebrow: 'The problem with off-the-shelf',
    h2: 'Most Teams Do Not Outgrow Their CRM — They Work Around It',
    body: [
      'The tell-tale signs are always the same: a shadow spreadsheet, a naming convention nobody documented, three fields that mean the same thing, and a weekly report someone rebuilds by hand. The tool did not fit the process, so the process quietly bent around the tool.',
      'We start from your actual pipeline — the stages, the handoffs, the approvals, the exceptions — and build a platform around it. Data model first, then automation, then the reporting your leadership team has been assembling manually.'
    ],
    points: [
      { icon: 'layers', title: 'A data model that fits', body: 'Entities, relationships and lifecycle stages that match your business, not a template built for someone else’s.' },
      { icon: 'route', title: 'Workflow automation', body: 'Assignment rules, follow-up triggers, approvals and escalations that run without anyone remembering to.' },
      { icon: 'chart', title: 'Reporting leadership trusts', body: 'Pipeline, forecast, cohort and activity reporting built on one dataset instead of five exports.' },
      { icon: 'plug', title: 'Connected to everything else', body: 'Two-way sync with email, calendars, billing, support and the marketing stack you already run.' }
    ],
    visual: 'crm-detail'
  },

  offerings: {
    eyebrow: 'What we build',
    h2: 'CRM Services End To End',
    lead: 'Whether you need a platform built from scratch, an existing CRM extended, or years of messy data migrated cleanly.',
    items: [
      {
        key: 'sales-crm',
        tab: 'Sales CRM',
        icon: 'target',
        title: 'Sales & Pipeline CRM',
        body:
          'Deal pipelines, activity tracking, quotas and forecasting shaped around how your reps actually sell — with the admin burden automated away so the data stays current without nagging.',
        bullets: ['Custom pipeline stages and deal logic', 'Lead scoring and routing rules', 'Quota tracking and forecasting', 'Activity capture from email and calendar'],
        visual: 'crm-detail'
      },
      {
        key: 'service-crm',
        tab: 'Service & Support',
        icon: 'inbox',
        title: 'Service & Support CRM',
        body:
          'Case management with SLAs, queues and escalation paths, joined to the same customer record your sales team works from — so nobody has to ask the customer to repeat themselves.',
        bullets: ['Case queues, SLAs and escalation rules', 'Shared customer timeline across teams', 'Knowledge base and canned responses', 'Satisfaction tracking and reporting'],
        visual: 'support-console'
      },
      {
        key: 'custom-platform',
        tab: 'Custom Platform',
        icon: 'code',
        title: 'Fully Custom CRM Platforms',
        body:
          'When your business does not look like a standard sales funnel — brokerages, agencies, healthcare, logistics, multi-party marketplaces — we build the platform your operation actually needs.',
        bullets: ['Bespoke entities and relationship models', 'Role-based access and audit trails', 'Document generation and e-signature', 'Multi-team, multi-region configuration'],
        visual: 'app-console'
      },
      {
        key: 'integration',
        tab: 'Integration & Migration',
        icon: 'plug',
        title: 'CRM Integration & Data Migration',
        body:
          'Extending Salesforce, HubSpot or Dynamics with the logic they cannot express, and moving historical data across without losing relationships, attachments or the audit trail.',
        bullets: ['Two-way sync with existing CRMs', 'Deduplication and data cleansing', 'Historical migration with validation', 'Custom apps and middleware services'],
        visual: 'integration'
      }
    ]
  },

  process: {
    eyebrow: 'How we work',
    h2: 'From Messy Spreadsheets To One System',
    lead: 'A migration path that keeps the business running while the new platform takes over.',
    steps: [
      { title: 'Process Mapping', body: 'We sit with the people who use the system daily and document the real workflow — including the workarounds nobody admits to in a kick-off meeting.' },
      { title: 'Data Model Design', body: 'Entities, fields, relationships and permissions designed and reviewed before any interface work begins.' },
      { title: 'Build & Automate', body: 'Interface, business logic and automation delivered in short cycles, with a working environment your team can trial early.' },
      { title: 'Migrate & Validate', body: 'Historical data cleansed, deduplicated and imported, then reconciled against source records before cutover.' },
      { title: 'Adopt & Improve', body: 'Training, rollout support and a change queue for the refinements that only surface once real work runs through it.' }
    ]
  },

  tech: {
    eyebrow: 'Under the hood',
    h2: 'What We Build CRMs With',
    lead: 'Robust, boring-in-the-best-way technology chosen for data integrity and long-term maintainability.',
    groups: [
      { name: 'Application', icon: 'code', items: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python'] },
      { name: 'Data', icon: 'layers', items: ['PostgreSQL', 'Redis', 'Elasticsearch', 'Event logs', 'Data warehousing'] },
      { name: 'Integrations', icon: 'plug', items: ['Salesforce', 'HubSpot', 'Stripe', 'Google & Microsoft 365', 'Webhooks & REST'] },
      { name: 'Intelligence', icon: 'spark', items: ['Lead scoring', 'Summarisation', 'Next-best-action', 'Forecast modelling'] }
    ]
  },

  benefits: {
    eyebrow: 'Outcomes',
    h2: 'What Changes After Go-Live',
    lead: 'The operational differences clients report once one system holds the truth.',
    items: [
      { icon: 'search', title: 'One customer record', body: 'Sales, service and finance looking at the same history instead of three partial versions of it.' },
      { icon: 'clock', title: 'Hours back each week', body: 'Manual data entry, status chasing and report assembly automated out of the working day.' },
      { icon: 'chart', title: 'Forecasts you can defend', body: 'Pipeline maths driven by consistent stage definitions rather than optimistic gut feel.' },
      { icon: 'shield', title: 'Governance built in', body: 'Permissions, audit trails and retention rules that satisfy legal without slowing the team.' },
      { icon: 'spark', title: 'AI where it earns its place', body: 'Summarised call notes, drafted follow-ups and next-best-action prompts inside the workflow.' },
      { icon: 'refresh', title: 'Room to change', body: 'New products, regions and team structures added by configuration, not another vendor project.' }
    ]
  },

  pricing: {
    eyebrow: 'Engagement models',
    h2: 'Ways To Approach A CRM Build',
    lead: 'Three routes depending on whether you are extending, replacing or starting fresh.',
    tiers: [
      {
        badge: 'For a focused fix',
        name: 'CRM Extension',
        desc: 'Best for teams whose CRM is fundamentally right but cannot express how they actually sell.',
        price: '$549',
        period: '/month',
        tagline: 'Custom logic, apps and integrations on top of the CRM you already run.',
        features: [
          'Workflow and automation build-out',
          'Custom objects, fields and views',
          'Two-way integrations with core systems',
          'Reporting and dashboard development',
          'Admin handover and documentation'
        ],
        cta: 'Start Your Project'
      },
      {
        badge: 'Most selected',
        name: 'Custom CRM Platform',
        featured: true,
        desc: 'For businesses whose process does not fit a standard funnel and who want to own the platform outright.',
        price: '$1,199',
        period: '/month',
        tagline: 'A purpose-built CRM designed around your process, owned entirely by you.',
        features: [
          'Process mapping and data model design',
          'Full platform design and development',
          'Automation, approvals and notifications',
          'Historical data migration and validation',
          'Role-based access and audit trails',
          'Training, rollout and adoption support'
        ],
        cta: 'Book a Free Consultation'
      },
      {
        badge: 'For continuous change',
        name: 'Platform Partner',
        desc: 'For organisations adding products, regions or teams faster than a project engagement can keep up with.',
        price: '$1,899',
        period: '/month',
        tagline: 'An ongoing team for iteration, new modules and data operations.',
        features: [
          'Prioritised monthly delivery queue',
          'New modules and team onboarding',
          'Data quality and integration monitoring',
          'Reporting and forecast refinement',
          'Quarterly roadmap and review',
          'Agreed response and resolution times'
        ],
        cta: 'Talk to Our Team'
      }
    ],
    note: {
      title: 'Sitting on years of messy data?',
      body: 'Migration is usually the part teams underestimate. We can run a standalone data audit first — deduplication, relationship mapping and a validated migration plan — before any platform decision is made.'
    }
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'CRM Development Questions',
    items: [
      { q: 'Why build a custom CRM instead of buying one?', a: 'Buy when your process is genuinely standard — an off-the-shelf CRM will be cheaper and faster. Build when the workarounds are already costing you: shadow spreadsheets, fields repurposed to mean something else, reports rebuilt by hand every week, or a process the tool simply cannot express. We will tell you honestly which situation you are in.' },
      { q: 'Can you work with our existing Salesforce or HubSpot?', a: 'Yes. A large share of our CRM work is extending platforms clients already own — custom objects, automation, integrations and apps that sit on top. Replacing a CRM is only worth it when the platform itself is the constraint.' },
      { q: 'How do you handle migrating our existing data?', a: 'With an audit first: what records exist, which are duplicates, what relationships must survive and what can be archived. We then run staged imports into a test environment and reconcile against source data before cutover, so you can verify the numbers rather than take our word for it.' },
      { q: 'How long does a CRM project take?', a: 'A focused extension of an existing CRM is usually 4–8 weeks. A full custom platform with migration and rollout typically runs 4–6 months, delivered in phases so an early version is in real use well before the final one.' },
      { q: 'Will our team actually adopt it?', a: 'Adoption is a design problem before it is a training problem. We build with the people who use the system daily, get a working environment in front of them early, and remove admin steps rather than adding them. Training and a change queue for the first weeks are part of every rollout.' },
      { q: 'Can you add AI features to our CRM?', a: 'Yes — call and email summarisation, drafted follow-ups, lead scoring, next-best-action prompts and natural-language reporting. We add them where they save real time inside an existing workflow, not as a bolted-on chat window nobody opens.' },
      { q: 'Who hosts the platform and owns the data?', a: 'You do. We build in your cloud accounts and your repository wherever possible, with full documentation at handover. There is no per-seat licence to us and no proprietary platform to be locked into.' }
    ]
  },

  cta: {
    h2: ['Ready To Retire', 'The Spreadsheets?'],
    body: 'Show us how your pipeline really works — including the workarounds. We will map what a system built around it would look like.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
