module.exports = {
  slug: 'ai-agents',
  title: 'AI Agents',
  navTitle: 'AI Agents',
  navDesc: 'Autonomous agents that complete real work.',
  portfolioDesc: 'Support, ops and research agents in production.',
  icon: 'agent',
  number: '05',
  accent: ['#8b5cf6', '#6366f1'],
  heroVisual: {
    img: 'portfolio/gmail-email-agent.webp',
    kind: 'canvas',
    alt: 'Email agent with tools and memory',
    w: 1014,
    h: 570
  },
  cardVisual: 'agent',

  meta: {
    title: 'AI Agent Development — Autonomous Agents For Business | KeyPels',
    description:
      'KeyPels builds AI agents that handle tasks end to end — reading requests, querying your systems, taking action and escalating to people when judgement is required.'
  },

  sections: ['hero', 'intro', 'offerings', 'assurance', 'pricing', 'differentiators', 'process', 'faq', 'cta'],

  hero: {
    eyebrow: 'AI Agents',
    h1: ['Agents That Finish', 'The Job, Not Just The Sentence'],
    gradientLine: 1,
    lead:
      'We build AI agents that read a request, look things up in your systems, take the action and hand off to a person when judgement is required — with guardrails you define and a full record of everything they did.',
    chips: ['Tool use & function calling', 'RAG over your data', 'Guardrails & approvals', 'Full action audit trail'],
    stats: [
      { value: 24, suffix: '/7', label: 'Coverage without a rota' },
      { value: 100, suffix: '%', label: 'Actions traceable end to end' },
      { value: 3, suffix: ' wks', label: 'From scope to a working pilot' }
    ]
  },

  intro: {
    eyebrow: 'Beyond chat',
    h2: 'The Difference Between Answering And Doing',
    body: [
      'A chat interface that explains your refund policy is useful. An agent that verifies the order, checks eligibility against the policy, issues the refund, updates the CRM and emails the customer is a different category of thing — it removes the work rather than describing it.',
      'That difference is engineering, not prompting. It needs reliable tool access to your systems, retrieval over your real policies and data, permission boundaries, deterministic checks around non-deterministic reasoning, and an escalation path for everything the agent should not decide alone.'
    ],
    points: [
      { icon: 'plug', title: 'Connected to your systems', body: 'Typed tools with scoped permissions for your CRM, billing, ticketing and internal APIs.' },
      { icon: 'book', title: 'Grounded in your knowledge', body: 'Retrieval over your policies, product data and documentation, with citations back to the source.' },
      { icon: 'shield', title: 'Guardrails you control', body: 'Value limits, approval gates, blocked actions and confidence thresholds set by you, enforced in code.' },
      { icon: 'search', title: 'Observable by default', body: 'Every step, tool call and decision recorded and replayable — for debugging and for audit.' }
    ],
    visual: {
      img: 'portfolio/ai-coaching-agent.webp',
      kind: 'canvas',
      alt: 'Multi-stage coaching agent',
      w: 1056,
      h: 607
    }
  },

  offerings: {
    eyebrow: 'What we build',
    h2: 'AI Agents For Real Operations',
    lead: 'Four agent patterns that cover most of what businesses actually need automated.',
    items: [
      {
        key: 'support',
        tab: 'Support Agents',
        icon: 'inbox',
        title: 'Customer Support Agents',
        body:
          'Agents that resolve tickets rather than deflect them: verifying accounts, checking order state, issuing refunds or replacements within policy, and escalating anything unusual with the context already gathered.',
        bullets: ['Ticket triage, tagging and routing', 'Account and order verification', 'Policy-bounded resolution actions', 'Clean escalation with full context'],
        visual: {
          img: 'portfolio/voice-booking-agent.webp',
          kind: 'canvas',
          alt: 'Customer support voice agent',
          w: 583,
          h: 279
        }
      },
      {
        key: 'internal',
        tab: 'Internal Copilots',
        icon: 'users',
        title: 'Internal Team Copilots',
        body:
          'Agents embedded where your team already works — Slack, Teams, your admin tools — answering from internal knowledge, preparing documents, and completing the admin steps around a task.',
        bullets: ['Grounded answers from internal knowledge', 'Document drafting and summarisation', 'Actions inside your internal tools', 'Permission-aware per user and team'],
        visual: {
          img: 'portfolio/personal-assistant-agent.webp',
          kind: 'canvas',
          alt: 'Internal team copilot',
          w: 1100,
          h: 270
        }
      },
      {
        key: 'revops',
        tab: 'Sales & RevOps',
        icon: 'target',
        title: 'Sales & Revenue Agents',
        body:
          'Agents that qualify inbound leads, enrich records, keep the CRM current, draft follow-ups in your voice and flag the deals that have gone quiet before the forecast does.',
        bullets: ['Lead qualification and enrichment', 'Automatic CRM hygiene and updates', 'Drafted follow-ups for human approval', 'Pipeline risk detection and alerts'],
        visual: {
          img: 'portfolio/woocommerce-ops-agent.webp',
          kind: 'canvas',
          alt: 'Sales and revenue operations agent',
          w: 1075,
          h: 487
        }
      },
      {
        key: 'research',
        tab: 'Data & Research',
        icon: 'search',
        title: 'Data & Research Agents',
        body:
          'Agents that gather, verify and summarise information at a scale people cannot sustain — monitoring sources, extracting structured data and producing briefs with citations you can check.',
        bullets: ['Multi-source gathering and monitoring', 'Structured extraction into your systems', 'Cited briefs and change alerts', 'Scheduled or event-triggered runs'],
        visual: {
          img: 'portfolio/database-chat-agent.webp',
          kind: 'canvas',
          alt: 'Data and research agent querying a database',
          w: 871,
          h: 511
        }
      }
    ]
  },

  differentiators: {
    eyebrow: 'Why KeyPels',
    h2: 'What Separates A Pilot From Production',
    lead: 'Most agent projects stall between an impressive demo and something the business can rely on. This is what closes that gap.',
    items: [
      { title: 'Evaluation before deployment', body: 'We build a test set from your real cases and score the agent against it on every change. Without evaluation you are not improving an agent, you are rearranging prompts and hoping. Regressions get caught before your customers find them.' },
      { title: 'Permissions modelled properly', body: 'Agents act with scoped credentials, per-tool boundaries and value limits — not a shared admin key. What an agent may do is defined explicitly, enforced in code, and reviewed like any other access decision.' },
      { title: 'Deterministic where it matters', body: 'Money movement, data deletion and legal commitments run through conventional code with hard rules. Language models decide what should happen; validated logic decides whether it is permitted.' },
      { title: 'Escalation that carries context', body: 'When an agent hands off to a person, it hands off the full picture — what was asked, what it checked, what it concluded and why it stopped. No customer repeats themselves to a human afterwards.' },
      { title: 'Cost and latency engineered', body: 'Model routing, caching and context management are treated as design constraints. An agent that is brilliant but slow and expensive does not survive contact with production volume.' }
    ]
  },

  process: {
    eyebrow: 'How we work',
    h2: 'How We Get An Agent Into Production',
    lead: 'Narrow scope, measured accuracy, then widened authority as it earns trust.',
    steps: [
      { title: 'Scope The Job', body: 'We pick one well-defined task with a measurable outcome, and agree explicitly what the agent may and may not decide.' },
      { title: 'Build The Tools', body: 'Typed, permission-scoped integrations with your systems, plus retrieval over the knowledge the agent needs to be right.' },
      { title: 'Evaluate', body: 'A test set built from your real historical cases, scored on every iteration, with a target agreed before launch.' },
      { title: 'Pilot With Oversight', body: 'The agent runs with a human reviewing its actions, so accuracy is proven on live work before authority widens.' },
      { title: 'Widen The Mandate', body: 'Approval gates relax as the numbers justify it, and the next task joins the agent’s scope.' }
    ]
  },

  tech: {
    eyebrow: 'Under the hood',
    h2: 'What We Build Agents With',
    lead: 'Model-agnostic architecture, so you are never rebuilding because a provider changed their pricing.',
    groups: [
      { name: 'Models', icon: 'spark', items: ['Claude', 'OpenAI', 'Open-weight models', 'Self-hosted inference', 'Model routing'] },
      { name: 'Retrieval', icon: 'book', items: ['RAG pipelines', 'Vector databases', 'Hybrid search', 'Re-ranking', 'Citation tracking'] },
      { name: 'Orchestration', icon: 'route', items: ['Tool & function calling', 'MCP servers', 'Multi-step planning', 'Queues and retries', 'State management'] },
      { name: 'Operations', icon: 'gauge', items: ['Evaluation harnesses', 'Tracing and replay', 'Cost and latency monitoring', 'Guardrail enforcement'] }
    ]
  },

  assurance: {
    eyebrow: 'Operating standards',
    h2: 'The Guarantees Around Every Agent',
    lead: 'Autonomy is only acceptable with accountability attached.',
    items: [
      { icon: 'shield', value: 100, suffix: '%', label: 'Actions logged', note: 'Every tool call and decision recorded and replayable.' },
      { icon: 'users', value: 1, suffix: '', label: 'Human override', note: 'Any agent can be paused or reversed instantly.' },
      { icon: 'target', value: 0, suffix: '', label: 'Unscoped permissions', note: 'No shared admin keys, ever — access is explicit per tool.' },
      { icon: 'gauge', value: 100, suffix: '%', label: 'Evaluated releases', note: 'No change ships without scoring against your test set.' }
    ]
  },

  pricing: {
    eyebrow: 'Agent engagement models',
    h2: 'Pricing Built Around Proving An Agent Before Scaling It',
    lead: 'Start with one scoped task and a measured pilot. Widen the agent’s mandate when the numbers — not the demo — justify it.',
    tiers: [
      {
        badge: 'Prove it first',
        name: 'Agent Pilot',
        desc: 'One well-defined task, scoped and evaluated against your real historical cases before it touches live work.',
        price: '$890',
        period: '/month',
        tagline: 'A measured pilot, not a proof-of-concept that dies in a demo.',
        features: [
          'One scoped task with agreed guardrails',
          'Tool integration with two of your systems',
          'Retrieval over your policies and data',
          'Evaluation set built from your real cases',
          'Human-review pilot with accuracy reporting'
        ],
        cta: 'Start a Pilot'
      },
      {
        badge: 'Most selected',
        name: 'Production Agent',
        featured: true,
        desc: 'A fully deployed agent working live inside your operation, with the observability and guardrails that make it safe to trust.',
        price: '$1,690',
        period: '/month',
        tagline: 'The lane most teams move into once the pilot numbers hold.',
        features: [
          'Everything in Agent Pilot',
          'Production deployment with staged rollout',
          'Permission-scoped tools and value limits',
          'Full action tracing, replay and audit trail',
          'Cost, latency and quality monitoring',
          'Continuous evaluation on every release'
        ],
        cta: 'Book a Free Consultation'
      },
      {
        badge: 'For serious scale',
        name: 'Agent Platform',
        desc: 'A multi-agent estate with shared tooling, shared evaluation infrastructure and a roadmap owned alongside your team.',
        price: '$2,900',
        period: '/month',
        tagline: 'Best for teams putting agents behind several parts of the business.',
        features: [
          'Multiple agents on shared infrastructure',
          'Reusable tool and MCP server library',
          'Model routing and self-hosted options',
          'Security review and compliance support',
          'Quarterly roadmap and performance review',
          'Priority communication channel'
        ],
        cta: 'Talk to Our Team'
      }
    ],
    note: {
      title: 'Not sure an agent is the right answer yet?',
      body: 'A pilot is deliberately narrow and time-boxed. If the evaluation shows a deterministic workflow would do the job more cheaply and reliably, we will tell you — and build that instead.'
    }
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'AI Agent Questions',
    items: [
      { q: 'What is the difference between an AI agent and a chatbot?', a: 'A chatbot converses. An agent acts — it can call your systems, look up records, complete a multi-step task and produce a result. A refund chatbot explains the policy; a refund agent verifies the order, checks eligibility, issues the refund and updates the CRM. Both have their place, but they are different engineering problems.' },
      { q: 'How do you stop an agent doing something it should not?', a: 'Permission scoping per tool, hard value and rate limits, explicit blocked actions, approval gates on anything irreversible, and deterministic validation around every consequential step. During pilot, a human reviews actions before they execute; that gate only relaxes once measured accuracy justifies it.' },
      { q: 'What if the agent gets something wrong?', a: 'It escalates rather than guesses when confidence is low or a case falls outside its scope, handing a person the full context. Actions are logged and reversible, and every failure feeds back into the evaluation set so the same mistake is caught automatically on the next release.' },
      { q: 'Which AI models do you use?', a: 'We stay model-agnostic and choose per task — frontier models where reasoning quality matters, smaller or open-weight models where cost, latency or data residency dominates. The architecture keeps model choice swappable, so a pricing or capability change does not mean a rebuild.' },
      { q: 'Will our data be used to train models?', a: 'No. We use enterprise API tiers with training disabled, and where policy or regulation requires it we run open-weight models entirely inside your own infrastructure. Data flow and retention are documented before development begins.' },
      { q: 'How long before an agent is doing useful work?', a: 'A scoped pilot on one task typically reaches a working state in about three weeks, then runs with human oversight while we measure accuracy against your real cases. Widening its mandate is a decision driven by those numbers rather than a fixed timetable.' },
      { q: 'Can agents work with the systems we already have?', a: 'Yes. Agents connect through APIs, webhooks or a middleware layer we build for systems that lack one — CRMs, ticketing, billing, ERPs and internal tools. Replacing your existing stack is not a prerequisite.' }
    ]
  },

  cta: {
    h2: ['What Should Your', 'Agent Take Off Your Desk?'],
    body: 'Name the task that eats your team’s day. We will scope an agent for it, define the guardrails and show you the numbers from a pilot.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
