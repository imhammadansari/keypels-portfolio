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
    projects: [
      {
        category: 'Finance Ops',
        tags: ['OCR', 'Extraction', 'ERP write-back'],
        name: 'Ledgerflow',
        sub: 'Invoice Processing',
        body: 'Supplier invoices read, validated against purchase orders and written into the finance system, with confidence thresholds routing anything ambiguous to a review queue.',
        visual: 'document-flow'
      },
      {
        category: 'HR & People',
        tags: ['Orchestration', 'Approvals', 'Provisioning'],
        name: 'Onboardly',
        sub: 'Employee Onboarding',
        body: 'A single orchestrated flow across contracts, e-signature, account provisioning, equipment requests and first-week scheduling, with escalation when a step stalls.',
        visual: 'flow-detail'
      },
      {
        category: 'Insurance',
        tags: ['Classification', 'Triage', 'Guardrails'],
        name: 'Claimsort',
        sub: 'Claims Triage',
        body: 'Inbound claims classified, enriched from policy data and routed by complexity and value, with hard rules keeping anything above threshold in human hands.',
        visual: 'support-console'
      },
      {
        category: 'Commerce',
        tags: ['Sync', 'Reconciliation', 'Webhooks'],
        name: 'Orderbridge',
        sub: 'Order-to-Cash Sync',
        body: 'Two-way synchronisation between storefront, warehouse and accounting, with reconciliation checks that surface mismatches before they become month-end problems.',
        visual: 'integration'
      },
      {
        category: 'Compliance',
        tags: ['Scheduling', 'Evidence', 'Audit trail'],
        name: 'Auditline',
        sub: 'Compliance Reporting',
        body: 'Evidence gathered continuously from source systems and assembled into audit-ready reports, replacing the fortnight of manual collation before each inspection.',
        visual: 'reporting'
      },
      {
        category: 'Sales Ops',
        tags: ['Generation', 'Pricing rules', 'CRM'],
        name: 'Quotesmith',
        sub: 'Quote Generation',
        body: 'Configured quotes generated from CRM opportunity data and pricing rules, produced as branded documents and logged back against the deal automatically.',
        visual: 'app-console'
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
