module.exports = {
  slug: 'ai-automation',
  title: 'AI Automation',
  navTitle: 'AI Automation',
  navDesc: 'Intelligent workflows that remove manual work.',
  portfolioDesc: 'Invoice, onboarding and triage workflows.',
  icon: 'automation',
  number: '04',
  accent: ['#6366f1', '#22d3ee'],
  heroVisual: 'flow-canvas',
  cardVisual: 'flow',

  meta: {
    title: 'AI Automation Services — Intelligent Workflow Automation | KeyPels',
    description:
      'KeyPels automates repetitive business processes with AI-powered workflows — document handling, data entry, routing, approvals and reporting — with humans kept in the loop where it matters.'
  },

  sections: ['hero', 'intro', 'offerings', 'assurance', 'pricing', 'process', 'benefits', 'faq', 'cta', 'more'],

  hero: {
    eyebrow: 'AI Automation',
    h1: ['Automate The Work', 'Nobody Should Be Doing'],
    gradientLine: 1,
    lead:
      'We find the repetitive, rules-heavy work buried in your operation and replace it with intelligent workflows that run reliably — with people kept in the loop exactly where judgement is needed.',
    chips: ['Document processing', 'Workflow orchestration', 'System integration', 'Human-in-the-loop'],
    stats: [
      { value: 24, suffix: '/7', label: 'Workflows running unattended' },
      { value: 100, suffix: '%', label: 'Actions logged and auditable' },
      { value: 4, suffix: ' wks', label: 'Typical first automation live' }
    ]
  },

  intro: {
    eyebrow: 'Where the time actually goes',
    h2: 'Most Wasted Hours Sit Between Two Systems',
    body: [
      'Re-keying an invoice into the finance system. Copying a form response into the CRM. Reading a PDF to find one number. Chasing an approval by email. None of it is complicated — which is exactly why it should not be consuming skilled people’s afternoons.',
      'We audit where the hours go, quantify them, and automate the highest-value paths first. Each workflow is built to be observable and reversible: every action logged, every exception escalated to a person, and a clear record of what the system did and why.'
    ],
    points: [
      { icon: 'search', title: 'Audit before automation', body: 'We measure volume, handling time and error rate before proposing anything, so the business case is arithmetic rather than optimism.' },
      { icon: 'users', title: 'Humans where judgement matters', body: 'Approval gates and confidence thresholds route edge cases to a person instead of guessing at them.' },
      { icon: 'shield', title: 'Auditable by design', body: 'Every run is logged with inputs, outputs and decisions — reviewable long after the fact.' },
      { icon: 'refresh', title: 'Built to be maintained', body: 'Documented, monitored and owned by you, with alerting when a downstream system changes.' }
    ],
    visual: 'flow-detail'
  },

  offerings: {
    eyebrow: 'What we automate',
    h2: 'AI Automation Services',
    lead: 'Four categories that cover the majority of the manual work we are asked to remove.',
    items: [
      {
        key: 'document',
        tab: 'Document Processing',
        icon: 'book',
        title: 'Document & Data Extraction',
        body:
          'Invoices, contracts, forms, statements and scanned paperwork read, understood and turned into structured records in the systems that need them — with confidence scores and a review queue for anything ambiguous.',
        bullets: ['Invoice, contract and form extraction', 'Validation rules and confidence thresholds', 'Human review queue for exceptions', 'Direct write-back to finance or CRM'],
        visual: 'document-flow'
      },
      {
        key: 'workflow',
        tab: 'Workflow Orchestration',
        icon: 'route',
        title: 'Process & Workflow Automation',
        body:
          'Multi-step business processes — onboarding, approvals, renewals, dispatch — orchestrated end to end, with branching logic, retries, escalations and a live view of everything in flight.',
        bullets: ['Multi-step orchestration with branching', 'Approval gates and escalation paths', 'Retries, timeouts and failure handling', 'Live operational dashboard'],
        visual: 'flow-detail'
      },
      {
        key: 'integration',
        tab: 'System Integration',
        icon: 'plug',
        title: 'Integration & Data Sync',
        body:
          'The connective tissue between tools that were never designed to talk: CRM to finance, forms to fulfilment, spreadsheets to warehouse — kept in sync reliably instead of by a person on Monday mornings.',
        bullets: ['Two-way sync between core systems', 'Middleware for systems without APIs', 'Scheduled and event-driven pipelines', 'Data quality checks and alerting'],
        visual: 'integration'
      },
      {
        key: 'reporting',
        tab: 'Reporting & Insight',
        icon: 'chart',
        title: 'Automated Reporting',
        body:
          'The weekly deck somebody rebuilds by hand, generated automatically — pulled from source systems, checked for anomalies, summarised in plain language and delivered where your team already works.',
        bullets: ['Scheduled report generation and delivery', 'Anomaly detection and threshold alerts', 'Plain-language summaries of the numbers', 'Slack, email and dashboard distribution'],
        visual: 'reporting'
      }
    ]
  },

  assurance: {
    eyebrow: 'Operating standards',
    h2: 'How We Keep Automation Trustworthy',
    lead: 'Automation only saves time if people trust it. These are the guarantees we build into every workflow.',
    items: [
      { icon: 'shield', value: 100, suffix: '%', label: 'Actions logged', note: 'Full input, output and decision trail on every run.' },
      { icon: 'users', value: 1, suffix: '', label: 'Click to intervene', note: 'Any run can be paused, corrected or reversed by a person.' },
      { icon: 'gauge', value: 99, suffix: '%', label: 'Uptime target', note: 'Monitored with alerting on failures and silent stalls.' },
      { icon: 'clock', value: 4, suffix: ' wks', label: 'First workflow live', note: 'From audit to a production automation earning its keep.' }
    ]
  },

  process: {
    eyebrow: 'How we work',
    h2: 'From Audit To Autonomous',
    lead: 'We prove the value on one process before scaling the approach across the business.',
    steps: [
      { title: 'Process Audit', body: 'We shadow the work, measure volume and handling time, and rank candidates by hours saved against effort to build.' },
      { title: 'Design & Guardrails', body: 'Workflow logic, exception paths, approval gates and confidence thresholds agreed before anything is automated.' },
      { title: 'Build & Integrate', body: 'The automation is built and connected to your systems, with logging and monitoring wired in from the start.' },
      { title: 'Shadow Run', body: 'It runs alongside the manual process and we compare outputs, so accuracy is proven before anyone relies on it.' },
      { title: 'Scale & Monitor', body: 'Cut over, measure the hours reclaimed, then move to the next process on the ranked list.' }
    ]
  },

  benefits: {
    eyebrow: 'Outcomes',
    h2: 'What Automation Gives Back',
    lead: 'The measurable difference once the repetitive work stops touching human hands.',
    items: [
      { icon: 'clock', title: 'Reclaimed hours', body: 'Skilled people returned to work that needs a human, measured against the baseline from the audit.' },
      { icon: 'shield', title: 'Fewer errors', body: 'Consistent rules applied every time, with validation catching what tired eyes miss at five o’clock.' },
      { icon: 'bolt', title: 'Faster turnaround', body: 'Processes that took days measured in minutes — because the queue never sleeps or takes leave.' },
      { icon: 'chart', title: 'Visibility', body: 'A live view of what is in flight, what is stuck and where the bottleneck genuinely is.' },
      { icon: 'target', title: 'Capacity without headcount', body: 'Volume growth absorbed by throughput rather than another round of hiring.' },
      { icon: 'lock', title: 'Compliance evidence', body: 'A complete audit trail produced automatically instead of assembled before an inspection.' }
    ]
  },

  pricing: {
    eyebrow: 'Engagement models',
    h2: 'Ways To Start With Automation',
    lead: 'Start small and prove it, or hand over the whole operational backlog — both work.',
    tiers: [
      {
        badge: 'Start here',
        name: 'Automation Audit',
        desc: 'A fixed-scope review that tells you exactly what is worth automating before you commit to building anything.',
        price: '$690',
        period: ' one-off',
        tagline: 'Delivered as a working plan, not a slide deck.',
        features: [
          'Process shadowing and time measurement',
          'Ranked opportunity list with effort estimates',
          'Projected hours and cost saved',
          'Recommended architecture and tooling',
          'Credited against your first build'
        ],
        cta: 'Book an Audit'
      },
      {
        badge: 'Most selected',
        name: 'Workflow Build',
        featured: true,
        desc: 'Design, build and deploy the automations the audit identified, with humans kept in the loop where it matters.',
        price: '$899',
        period: '/month',
        tagline: 'The lane most teams start in after the audit.',
        features: [
          'End-to-end workflow development',
          'System integrations and middleware',
          'Human-in-the-loop review queues',
          'Logging, monitoring and alerting',
          'Shadow run and validated cutover',
          'Documentation and team handover'
        ],
        cta: 'Book a Free Consultation'
      },
      {
        badge: 'For ongoing change',
        name: 'Automation Partner',
        desc: 'A standing team working through your operational backlog, one measured process at a time.',
        price: '$1,590',
        period: '/month',
        tagline: 'Best for operations teams with more manual work than capacity.',
        features: [
          'Rolling automation delivery queue',
          'Monitoring and incident response',
          'Change handling when systems update',
          'Quarterly hours-saved reporting',
          'New process onboarding as you grow',
          'Priority communication channel'
        ],
        cta: 'Talk to Our Team'
      }
    ],
    note: {
      title: 'Not sure automation is the answer yet?',
      body: 'The audit is deliberately standalone. If the numbers do not justify building anything, we will tell you that and you will still have a documented, measured view of where your operational time goes.'
    }
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'AI Automation Questions',
    items: [
      { q: 'What kinds of processes are worth automating?', a: 'High-volume, rules-heavy work that moves information between systems: document and invoice handling, data entry, routing and triage, approvals, onboarding checklists, recurring reports and reconciliation. The strongest candidates are frequent, well-defined and currently done by someone who would rather be doing something else.' },
      { q: 'Will AI make mistakes on our data?', a: 'Sometimes — which is why we never deploy a model as an unchecked decision-maker. Extractions carry confidence scores, anything below threshold routes to a human review queue, validation rules catch impossible values, and every run is logged. During the shadow-run phase we compare automated output against the manual process until accuracy is proven.' },
      { q: 'Do we need to replace our existing software?', a: 'No. Automation usually sits between the systems you already run rather than replacing any of them. Where a tool has no usable API we build a middleware layer around it. Replacing software is a separate decision and rarely a prerequisite.' },
      { q: 'How quickly will we see a return?', a: 'The audit gives you the projected hours saved before you commit to a build, and a first workflow is typically live within about four weeks. Because we rank by hours saved against build effort, the earliest automations are usually the ones that pay back fastest.' },
      { q: 'What happens when one of our systems changes?', a: 'Monitoring alerts us when an integration starts failing or a workflow stalls silently. On a partner engagement, handling those changes is part of the arrangement. On a project engagement we hand over documentation and monitoring so your team can maintain it.' },
      { q: 'Is our data used to train external AI models?', a: 'No. We use enterprise API tiers with training disabled, keep data inside your infrastructure wherever practical, and can run open-weight models in your own environment when policy or regulation requires it. Data handling is documented before the build starts.' },
      { q: 'Can staff override or stop an automation?', a: 'Always. Every workflow has a pause control, a manual override path and the ability to reverse or reprocess a run. Automation should reduce work for your team, never take away their control of it.' }
    ]
  },

  cta: {
    h2: ['What Would You Do', 'With The Hours Back?'],
    body: 'Point us at the process everyone complains about. We will measure it, price the fix and show you what it saves.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
