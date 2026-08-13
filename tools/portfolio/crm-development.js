module.exports = {
  slug: 'crm-development',
  service: 'CRM Development',
  title: 'CRM Development Portfolio',
  heroVisual: 'crm-board',

  meta: {
    title: 'CRM Development Portfolio — Custom CRM Platforms | KeyPels',
    description:
      'A view of the custom CRM platforms KeyPels builds — sales pipelines, service desks, brokerage systems and membership platforms, with the migrations that came with them.'
  },

  hero: {
    h1: ['CRM Development', 'Portfolio'],
    lead:
      'From extending an existing CRM to replacing a decade of spreadsheets, a curated view of the customer platforms we design, build and migrate.'
  },

  capabilities: ['Data Modelling', 'Pipeline Automation', 'Integrations & Sync', 'Reporting & Forecasting', 'Migration & Data Quality'],

  work: {
    h2: 'Our Work',
    lead: 'A selection of the customer platforms we deliver for clients across industries.',
    projects: [
      {
        category: 'B2B Sales',
        tags: ['PostgreSQL', 'Forecasting', 'Email sync'],
        name: 'Pipetrack',
        sub: 'Sales Intelligence CRM',
        body: 'A pipeline platform with custom deal stages, automatic activity capture from email and calendar, quota tracking and a forecast built on consistent stage definitions.',
        visual: 'crm-detail'
      },
      {
        category: 'Customer Service',
        tags: ['SLAs', 'Queues', 'Knowledge base'],
        name: 'Helmdesk',
        sub: 'Service & Support CRM',
        body: 'Case management with queue routing, SLA timers and escalation paths, joined to the same customer record sales works from so nobody asks a customer to repeat themselves.',
        visual: 'support-console'
      },
      {
        category: 'Financial Services',
        tags: ['Compliance', 'Audit trail', 'Documents'],
        name: 'Brokerbase',
        sub: 'Brokerage Platform',
        body: 'A bespoke platform for a business that does not look like a sales funnel — multi-party relationships, document generation, e-signature and a full regulatory audit trail.',
        visual: 'app-console'
      },
      {
        category: 'Professional Services',
        tags: ['Resourcing', 'Time tracking', 'Billing'],
        name: 'Studioline',
        sub: 'Agency Delivery CRM',
        body: 'Opportunities, resourcing and delivery in one system, so a signed proposal turns into a staffed project plan and an invoice schedule without three separate re-keyings.',
        visual: 'reporting'
      },
      {
        category: 'Logistics',
        tags: ['Accounts', 'Rate cards', 'ERP sync'],
        name: 'Freightview',
        sub: 'Account Management CRM',
        body: 'Account, contract and rate-card management for a freight operator, synchronised two-way with the ERP so commercial teams and operations never disagree on terms.',
        visual: 'integration'
      },
      {
        category: 'Membership',
        tags: ['Renewals', 'Segmentation', 'Payments'],
        name: 'Circlebase',
        sub: 'Membership CRM',
        body: 'A membership platform handling joins, renewals, lapses and win-back journeys, with segmentation driving automated communications and a self-service member portal.',
        visual: 'revops'
      }
    ]
  },

  approach: {
    h2: 'Our Approach',
    lead: 'How a CRM engagement runs, from mapping the real process to the retainer that follows go-live.',
    steps: [
      { icon: 'search', title: 'Process Mapping', body: 'We sit with the people who use the system daily and document the real workflow — including the workarounds nobody admits to in a kick-off meeting.' },
      { icon: 'layers', title: 'Data Model Design', body: 'Entities, fields, relationships and permissions designed and reviewed before any interface work begins, because everything downstream depends on it.' },
      { icon: 'route', title: 'Build & Automate', body: 'Interface, business logic and automation delivered in short cycles, with a working environment your team can trial while the build continues.' },
      { icon: 'shield', title: 'Migrate & Validate', body: 'Historical data audited, deduplicated and imported into a test environment, then reconciled against source records before anyone commits to cutover.' },
      { icon: 'users', title: 'Rollout & Training', body: 'Staged rollout by team, hands-on training and a fast-response change queue for the first weeks, when adoption is genuinely decided.' },
      { icon: 'gauge', title: 'Iterate & Extend', body: 'New modules, new regions and new reporting added by configuration and delivery sprints rather than another full vendor project.' }
    ]
  },

  outcomes: {
    h2: ['Ready To Retire', 'The Spreadsheets?'],
    lead: 'The problems that usually prompt a CRM project — and how each one gets solved.',
    items: [
      { title: 'Shadow spreadsheets everywhere?', body: 'They exist because the tool could not express the process. We map what people actually do first, then build the system around it, which is what makes the side-spreadsheet unnecessary rather than forbidden.' },
      { title: 'Nobody updates the CRM?', body: 'Adoption is a design problem before a training one. We remove admin steps rather than adding them — automatic activity capture, sensible defaults and fewer required fields at the point of entry.' },
      { title: 'Data you cannot trust?', body: 'Migration begins with an audit: duplicates, orphaned relationships and dead fields identified before import, then reconciled against source records so you can verify the numbers yourself.' },
      { title: 'Reports nobody believes?', body: 'One dataset, consistent stage definitions and reporting built into the platform, so the weekly forecast stops being five exports stitched together by hand each Monday.' },
      { title: 'Locked into per-seat licences?', body: 'Custom platforms run in your cloud accounts with your repository and full documentation at handover. Growing the team stops being a budget conversation with a vendor.' }
    ]
  },

  cta: {
    h2: ['Ready To Build', 'One Source Of Truth?'],
    body: 'Show us how your pipeline really works — including the workarounds. We will map what a system built around it would look like.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
