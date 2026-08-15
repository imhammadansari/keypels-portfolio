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
    note:
      'Production agent builds. Each preview is the live workflow canvas — hover any card to watch it run left to right.',
    projects: [
      {
        category: 'Voice AI',
        tags: ['n8n', 'Gemini', 'Calendar API'],
        name: 'Voice Booking Agent',
        sub: 'Dental Appointment Agent',
        body: 'A voice agent that answers calls, checks live availability, books the appointment and writes the patient record back — memory and tools wired to one reasoning loop.',
        preview: 'flow',
        src: 'voice-booking-agent',
        w: 583,
        h: 279
      },
      {
        category: 'Personal AI',
        tags: ['n8n', 'Telegram', 'Google Workspace'],
        name: 'Personal Assistant Agent',
        sub: 'Voice & Text Executive Assistant',
        body: 'An assistant that takes voice or text over Telegram, transcribes it, then creates tasks, drafts email and manages the calendar through a shared tool set.',
        preview: 'flow',
        src: 'personal-assistant-agent',
        w: 1100,
        h: 270
      },
      {
        category: 'Data AI',
        tags: ['n8n', 'OpenAI', 'PostgreSQL'],
        name: 'Database Chat Agent',
        sub: 'Natural Language to SQL',
        body: 'A conversational agent that answers business questions by querying Postgres directly, holding session memory so follow-up questions keep their context.',
        preview: 'flow',
        src: 'database-chat-agent',
        w: 871,
        h: 511
      },
      {
        category: 'Email AI',
        tags: ['n8n', 'Claude', 'Gmail API'],
        name: 'Gmail Email Agent',
        sub: 'Inbox Triage & Reply Agent',
        body: 'An agent that reads incoming mail, decides whether to file, escalate or answer it, and drafts the reply through a structured output parser.',
        preview: 'flow',
        src: 'gmail-email-agent',
        w: 1014,
        h: 570
      },
      {
        category: 'Commerce AI',
        tags: ['n8n', 'Telegram', 'WooCommerce'],
        name: 'WooCommerce Ops Agent',
        sub: 'Store Operations Agent',
        body: 'A store agent reachable over Telegram that reads orders, updates products and reports on stock, with its own operating brief held in memory.',
        preview: 'flow',
        src: 'woocommerce-ops-agent',
        w: 1075,
        h: 487
      },
      {
        category: 'Coaching AI',
        tags: ['n8n', 'LLM', 'Multi-step'],
        name: 'AI Coaching Agent',
        sub: 'Client Coaching Workflow',
        body: 'A multi-stage coaching agent that intakes client context, plans a programme and follows up on progress across a long-running conversation.',
        preview: 'flow',
        src: 'ai-coaching-agent',
        w: 1056,
        h: 607
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
