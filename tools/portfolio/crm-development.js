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
    note:
      'Live CRM builds. Each preview walks four screens from the product\u2019s own sidebar — hover any card to page through them.',
    projects: [
      {
        category: 'Customer CRM',
        tags: ['Bootstrap 5', 'Dashboards', 'Role-based access'],
        name: 'Relay CRM',
        sub: 'Customer Management Suite',
        body: 'A full customer management console — pipeline dashboard, lead scoring, company records and contact profiles behind one role-aware navigation.',
        preview: 'crm',
        src: 'dreams-crm',
        screens: 4,
        w: 620,
        h: 388
      },
      {
        category: 'Deal Management',
        tags: ['Kanban', 'Forecasting', 'Activity log'],
        name: 'Relay Deals',
        sub: 'Deal & Pipeline Workspace',
        body: 'The deal side of the same platform: a record view with the full activity trail, a stage dashboard, a drag-and-drop board and the pipeline table behind it.',
        preview: 'crm',
        src: 'deals-crm',
        screens: 4,
        w: 620,
        h: 388
      },
      {
        category: 'Sales Analytics',
        tags: ['Charts', 'Reporting', 'Exports'],
        name: 'Relay Insight',
        sub: 'Sales Reporting Layer',
        body: 'A reporting layer over the CRM — revenue summary, analytics, lead attribution and pipeline-stage reporting, each exportable for the weekly sales review.',
        preview: 'crm',
        src: 'sales-crm',
        screens: 4,
        w: 620,
        h: 388
      },
      {
        category: 'Property CRM',
        tags: ['Tailwind', 'Listings', 'Media upload'],
        name: 'Estate Desk',
        sub: 'Real Estate CRM',
        body: 'A property-focused CRM where listings, viewings and agent activity share a record — including the full add and edit flows for a new property.',
        preview: 'crm',
        src: 'property-crm',
        screens: 4,
        w: 620,
        h: 388
      },
      {
        category: 'Sales CRM',
        tags: ['Dashboards', 'Forecasting', 'Rep performance'],
        name: 'Salex',
        sub: 'Sales Operations Platform',
        body: 'A sales operations console covering overview, activity, per-rep performance and a rolling forecast against target for the quarter.',
        preview: 'crm',
        src: 'salex-crm',
        screens: 4,
        w: 620,
        h: 388
      },
      {
        category: 'Enterprise CRM',
        tags: ['Analytics', 'Reporting', 'Multi-module'],
        name: 'Duralux',
        sub: 'Enterprise CRM Console',
        body: 'A multi-module enterprise console — customer dashboard, traffic analytics, sales reporting and lead reporting under a single shell.',
        preview: 'crm',
        src: 'duralux-crm',
        screens: 4,
        w: 620,
        h: 388
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
