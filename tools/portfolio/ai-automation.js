module.exports = {
  slug: 'ai-automation',
  service: 'AI Automation',
  title: 'AI Automation Portfolio',
  heroVisual: 'flow-canvas',

  meta: {
    title: 'AI Automation Portfolio — Intelligent Workflow Automation | KeyPels',
    description:
      'A view of the automations KeyPels builds — invoice and document processing, onboarding orchestration, claims triage, system sync and automated reporting.'
  },

  hero: {
    h1: ['AI Automation', 'Portfolio'],
    lead:
      'The repetitive, rules-heavy work we have replaced with intelligent workflows — measured before we built them, and monitored ever since.'
  },

  capabilities: ['Document Processing', 'Workflow Orchestration', 'System Integration', 'Human-in-the-Loop', 'Monitoring & Reporting'],

  work: {
    h2: 'Our Work',
    lead: 'A selection of the automation programmes we deliver for operations teams across industries.',
    note:
      'Production automation builds. Each preview is the live workflow canvas — hover any card to watch it run left to right.',
    projects: [
      {
        category: 'Lead Gen',
        tags: ['n8n', 'Google Maps', 'Enrichment'],
        name: 'Google Maps Lead Gen',
        sub: 'Local Business Prospecting',
        body: 'A prospecting pipeline that harvests businesses from Maps, enriches each record and scores it before anything reaches the sales inbox.',
        preview: 'flow',
        src: 'google-maps-lead-gen',
        w: 1100,
        h: 393
      },
      {
        category: 'Lead Gen',
        tags: ['n8n', 'Apify', 'CRM sync'],
        name: 'Lead Scraper',
        sub: 'Multi-Source Lead Pipeline',
        body: 'An end-to-end scraping pipeline that collects prospects, dedupes them against the CRM and pushes only new, complete records downstream.',
        preview: 'flow',
        src: 'lead-scraper',
        w: 1100,
        h: 218
      },
      {
        category: 'Sales',
        tags: ['n8n', 'LLM', 'Slack'],
        name: 'AI Lead Qualification',
        sub: 'Automated Lead Scoring',
        body: 'A qualification workflow that scores and categorises each inbound lead against an ideal-customer profile and alerts the team on the hot ones.',
        preview: 'flow',
        src: 'ai-lead-qualification',
        w: 735,
        h: 379
      },
      {
        category: 'Sales',
        tags: ['n8n', 'Apify', 'Google Sheets'],
        name: 'LinkedIn Enrichment',
        sub: 'Profile Enrichment Loop',
        body: 'A batched enrichment loop that reads profile URLs from a sheet, respects API rate limits and writes the enriched data back row by row.',
        preview: 'flow',
        src: 'linkedin-enrichment',
        w: 1078,
        h: 321
      },
      {
        category: 'Sales',
        tags: ['n8n', 'Calendar', 'News API'],
        name: 'Pre-Call Research',
        sub: 'Meeting Prep Briefings',
        body: 'A morning workflow that reads the day’s calendar, researches each company and emails a prepared briefing before the first call.',
        preview: 'flow',
        src: 'pre-call-research',
        w: 1100,
        h: 324
      },
      {
        category: 'Email',
        tags: ['n8n', 'Gmail', 'Classification'],
        name: 'Email Reply Classifier',
        sub: 'Outreach Response Triage',
        body: 'A classifier that reads every reply to an outreach campaign, labels the intent and drafts a suggested response for the rep to approve.',
        preview: 'flow',
        src: 'email-reply-classifier',
        w: 1100,
        h: 270
      },
      {
        category: 'Email',
        tags: ['n8n', 'Gmail', 'Google Sheets'],
        name: 'Bulk Email Sender',
        sub: 'Scheduled Campaign Sender',
        body: 'A scheduled sender that works a queue from Sheets, merges per-recipient fields and marks each row sent so nothing goes out twice.',
        preview: 'flow',
        src: 'bulk-email-sender',
        w: 901,
        h: 360
      },
      {
        category: 'Scheduling',
        tags: ['n8n', 'Cal.com', 'Webhooks'],
        name: 'Cal.com Booking API',
        sub: 'Availability & Booking Service',
        body: 'A webhook service that checks live availability and books the slot in Cal.com, answering the caller synchronously with the result.',
        preview: 'flow',
        src: 'calcom-booking-api',
        w: 987,
        h: 513
      },
      {
        category: 'Scheduling',
        tags: ['n8n', 'Calendly', 'Slack'],
        name: 'Calendly Link Generator',
        sub: 'Personalised Booking Links',
        body: 'A workflow that builds single-use, personalised Calendly links on demand, logs them to Sheets and notifies the owner in Slack.',
        preview: 'flow',
        src: 'calendly-link-generator',
        w: 1100,
        h: 378
      },
      {
        category: 'CRM',
        tags: ['n8n', 'Salesforce', 'Dedupe'],
        name: 'Salesforce Account Sync',
        sub: 'Account Deduplication Sync',
        body: 'A sync that reconciles a company sheet against Salesforce, merges duplicates and creates only the accounts and contacts that are genuinely new.',
        preview: 'flow',
        src: 'salesforce-account-sync',
        w: 1100,
        h: 394
      },
      {
        category: 'E-Commerce',
        tags: ['n8n', 'WooCommerce', 'Mautic'],
        name: 'WooCommerce Mautic Sync',
        sub: 'Customer Marketing Sync',
        body: 'A sync that mirrors WooCommerce customers into Mautic, creating or updating each contact so marketing lists never drift from the store.',
        preview: 'flow',
        src: 'woocommerce-mautic-sync',
        w: 829,
        h: 450
      },
      {
        category: 'Marketing',
        tags: ['n8n', 'Multi-channel', 'Approval'],
        name: 'Social Content Pipeline',
        sub: 'Multi-Platform Publishing',
        body: 'A content pipeline that generates the post and visual, routes it for approval, then publishes to every channel and logs the result.',
        preview: 'flow',
        src: 'social-content-pipeline',
        w: 1050,
        h: 438
      },
      {
        category: 'Reporting',
        tags: ['n8n', 'Search Console', 'Sheets'],
        name: 'Search Console Reporting',
        sub: 'Automated SEO Reporting',
        body: 'A scheduled reporting job that pulls query, page and date dimensions from Search Console and refreshes a live sheet for the whole team.',
        preview: 'flow',
        src: 'search-console-reporting',
        w: 930,
        h: 469
      }
    ]
  },

  approach: {
    h2: 'Our Approach',
    lead: 'How automation work runs — measured first, proven in shadow, then scaled.',
    steps: [
      { icon: 'search', title: 'Process Audit', body: 'We shadow the work, measure volume, handling time and error rate, and rank candidates by hours saved against effort to build.' },
      { icon: 'shield', title: 'Design & Guardrails', body: 'Workflow logic, exception paths, approval gates and confidence thresholds agreed and written down before anything is automated.' },
      { icon: 'plug', title: 'Build & Integrate', body: 'The automation is built and connected to your systems, with structured logging and monitoring wired in from the first commit.' },
      { icon: 'refresh', title: 'Shadow Run', body: 'It runs alongside the manual process and we compare outputs case by case, so accuracy is proven with your data before anyone relies on it.' },
      { icon: 'bolt', title: 'Cutover', body: 'Staged switch-over with a manual fallback available throughout, then a measured comparison against the baseline from the audit.' },
      { icon: 'gauge', title: 'Monitor & Extend', body: 'Alerting on failures and silent stalls, change handling when upstream systems move, and the next process on the ranked list.' }
    ]
  },

  outcomes: {
    h2: ['Ready To Get', 'The Hours Back?'],
    lead: 'The objections and problems that come up in every automation conversation.',
    items: [
      { title: 'Not sure what is worth automating?', body: 'The audit is deliberately standalone. You get measured handling times and a ranked opportunity list — and if the numbers do not justify building anything, we will say so.' },
      { title: 'Worried AI will make mistakes?', body: 'Nothing ships as an unchecked decision-maker. Extractions carry confidence scores, low-confidence cases route to a human queue, and the shadow-run phase proves accuracy before cutover.' },
      { title: 'Do we have to replace our software?', body: 'No. Automation usually sits between the systems you already run. Where a tool has no usable API we build a middleware layer around it rather than replacing it.' },
      { title: 'What happens when a system changes?', body: 'Monitoring alerts on failures and on workflows that go silently quiet. On a partner engagement, handling those changes is part of the arrangement.' },
      { title: 'Will staff lose control?', body: 'Every workflow has a pause control, a manual override and the ability to reverse or reprocess a run. Automation should remove work from your team, never authority.' }
    ]
  },

  cta: {
    h2: ['What Would You Do', 'With The Hours Back?'],
    body: 'Point us at the process everyone complains about. We will measure it, price the fix and show you what it saves.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
