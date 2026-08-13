module.exports = {
  slug: 'ai-agents',
  service: 'AI Agents',
  title: 'AI Agents Portfolio',
  heroVisual: 'agent-console',

  meta: {
    title: 'AI Agents Portfolio — Autonomous Agents In Production | KeyPels',
    description:
      'A view of the AI agents KeyPels builds — support resolution, internal copilots, lead qualification, research and triage agents, with the guardrails and evaluation behind them.'
  },

  hero: {
    h1: ['AI Agents', 'Portfolio'],
    lead:
      'Agents that finish the job rather than describe it — scoped to one task, evaluated against real cases, and given only the permissions the work requires.'
  },

  capabilities: ['Tool & Function Calling', 'RAG & Knowledge', 'Guardrails & Approvals', 'Evaluation Harnesses', 'Tracing & Observability'],

  work: {
    h2: 'Our Work',
    lead: 'A selection of the agent patterns we put into production across industries.',
    projects: [
      {
        category: 'Customer Support',
        tags: ['Tool use', 'Policy RAG', 'Value limits'],
        name: 'Resolve',
        sub: 'Refund & Returns Agent',
        body: 'Verifies the order, checks eligibility against live policy, issues the refund within a hard value limit and updates the CRM — escalating anything unusual with context attached.',
        visual: 'agent-detail'
      },
      {
        category: 'Internal Ops',
        tags: ['Slack', 'Permission-aware', 'Actions'],
        name: 'Deskmate',
        sub: 'Internal Team Copilot',
        body: 'An assistant embedded where the team already works, answering from internal documentation, drafting documents and completing the admin steps around a request.',
        visual: 'copilot'
      },
      {
        category: 'Revenue Ops',
        tags: ['Enrichment', 'CRM hygiene', 'Drafting'],
        name: 'Qualify',
        sub: 'Lead Qualification Agent',
        body: 'Qualifies and enriches inbound leads, keeps records current, drafts follow-ups in your voice for approval and flags deals that have gone quiet before the forecast does.',
        visual: 'revops'
      },
      {
        category: 'Procurement',
        tags: ['Multi-source', 'Citations', 'Scheduled'],
        name: 'Scout',
        sub: 'Supplier Research Agent',
        body: 'Monitors sources, extracts structured supplier and pricing data into your systems and produces cited briefs, flagging what changed since the last run.',
        visual: 'research'
      },
      {
        category: 'Service Desk',
        tags: ['Triage', 'Routing', 'Escalation'],
        name: 'Frontline',
        sub: 'Tier-1 Triage Agent',
        body: 'Classifies and routes inbound tickets, gathers the diagnostic detail an engineer would ask for first, and resolves the repetitive cases entirely within policy.',
        visual: 'support-console'
      },
      {
        category: 'Legal Ops',
        tags: ['Extraction', 'Clause review', 'Human gate'],
        name: 'Clausewise',
        sub: 'Contract Review Agent',
        body: 'Extracts key terms, compares clauses against your playbook and surfaces deviations for a reviewer — never approving or committing to anything on its own.',
        visual: 'document-flow'
      }
    ]
  },

  approach: {
    h2: 'Our Approach',
    lead: 'How an agent gets from a scoped task to a widened mandate, without the pilot-that-never-ships problem.',
    steps: [
      { icon: 'target', title: 'Scope The Job', body: 'One well-defined task with a measurable outcome, and an explicit list of what the agent may and may not decide on its own.' },
      { icon: 'plug', title: 'Build The Tools', body: 'Typed, permission-scoped integrations with your systems, plus retrieval over the knowledge the agent needs in order to be right.' },
      { icon: 'gauge', title: 'Evaluate', body: 'A test set built from your real historical cases, scored on every iteration, with a target agreed before anything goes live.' },
      { icon: 'users', title: 'Pilot With Oversight', body: 'The agent runs on live work with a human reviewing its actions, so accuracy is proven in production conditions before authority widens.' },
      { icon: 'shield', title: 'Harden', body: 'Guardrails, rate and value limits, tracing, replay and cost and latency monitoring — the parts that separate a demo from a dependency.' },
      { icon: 'route', title: 'Widen The Mandate', body: 'Approval gates relax as the numbers justify it, and the next task joins the agent’s scope on the same evidence-led terms.' }
    ]
  },

  outcomes: {
    h2: ['What Should Your Agent', 'Take Off Your Desk?'],
    lead: 'The questions every serious agent conversation runs into.',
    items: [
      { title: 'How is this different from a chatbot?', body: 'A chatbot converses; an agent acts. It calls your systems, completes a multi-step task and produces a result. Both have a place, but they are different engineering problems with different risks.' },
      { title: 'How do you stop it doing something bad?', body: 'Permission scoping per tool, hard value and rate limits, blocked actions, approval gates on anything irreversible, and deterministic validation around every consequential step.' },
      { title: 'What happens when it is unsure?', body: 'It escalates rather than guesses, handing a person the full picture of what it checked and why it stopped. Every failure feeds the evaluation set so it is caught automatically next time.' },
      { title: 'Which model are we tied to?', body: 'None. The architecture keeps model choice swappable and routes per task, so a pricing or capability change from a provider is a config decision rather than a rebuild.' },
      { title: 'Is our data used for training?', body: 'No. Enterprise API tiers with training disabled, and open-weight models running inside your own infrastructure where policy or regulation requires it.' }
    ]
  },

  cta: {
    h2: ['Ready To Put An Agent', 'On Real Work?'],
    body: 'Name the task that eats your team’s day. We will scope an agent for it, define the guardrails and show you the numbers from a pilot.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
