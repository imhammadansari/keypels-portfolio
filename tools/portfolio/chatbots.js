module.exports = {
  slug: 'chatbots',
  service: 'Chatbots',
  title: 'Chatbots Portfolio',
  heroVisual: 'chat-panel',

  meta: {
    title: 'Chatbot Portfolio — AI Chat Assistants | KeyPels',
    description:
      'A view of the conversational assistants KeyPels builds — product guides, support deflection, lead generation, internal helpdesks and multilingual commerce assistants.'
  },

  hero: {
    h1: ['Chatbot', 'Portfolio'],
    lead:
      'Assistants grounded in real content and wired into real systems — measured on conversations resolved and intent captured, never on how long someone was kept away from your team.'
  },

  capabilities: ['Retrieval & Grounding', 'Conversation Design', 'Channel Deployment', 'System Actions', 'Analytics & Tuning'],

  work: {
    h2: 'Our Work',
    lead: 'A selection of the conversational assistants we deliver across industries.',
    note:
      'Production chatbot builds. Each preview is the live workflow canvas — hover any card to watch it run left to right.',
    projects: [
      {
        category: 'WhatsApp',
        tags: ['n8n', 'WhatsApp API', 'RAG'],
        name: 'WhatsApp RAG Support',
        sub: 'Knowledge-Grounded Support Bot',
        body: 'A support bot that answers on WhatsApp from a vector-indexed knowledge base, so replies stay grounded in the documentation rather than invented.',
        preview: 'flow',
        src: 'whatsapp-rag-support',
        w: 1100,
        h: 337
      },
      {
        category: 'WhatsApp',
        tags: ['n8n', 'Vision', 'Multimodal'],
        name: 'WhatsApp Multimodal Chatbot',
        sub: 'Image, Voice & Text Bot',
        body: 'A chatbot that handles image, audio and text messages on one thread, routing each media type down its own processing branch before replying in context.',
        preview: 'flow',
        src: 'whatsapp-multimodal-chatbot',
        w: 777,
        h: 744
      },
      {
        category: 'WhatsApp',
        tags: ['n8n', 'Google Sheets', 'Escalation'],
        name: 'WhatsApp Support Bot',
        sub: 'Automated Customer Support',
        body: 'A first-line support bot grounded in company knowledge, with a 24-hour window check and human hand-off when it cannot answer confidently.',
        preview: 'flow',
        src: 'whatsapp-support-bot',
        w: 981,
        h: 243
      },
      {
        category: 'WhatsApp',
        tags: ['n8n', 'Airtable', 'Bookings'],
        name: 'Restaurant WhatsApp Chatbot',
        sub: 'Table Booking Assistant',
        body: 'A restaurant bot that answers menu questions and takes table bookings over WhatsApp, writing confirmed reservations straight into the venue system.',
        preview: 'flow',
        src: 'restaurant-whatsapp-chatbot',
        w: 979,
        h: 351
      },
      {
        category: 'Web',
        tags: ['n8n', 'OpenAI', 'Session memory'],
        name: 'Lead Capture Chatbot',
        sub: 'Conversational Lead Collection',
        body: 'A site chatbot that collects name, phone, email and intent conversationally, saving to Sheets only once the full lead record is complete.',
        preview: 'flow',
        src: 'lead-capture-chatbot',
        w: 826,
        h: 375
      },
      {
        category: 'Healthcare',
        tags: ['n8n', 'Google Calendar', 'Sheets'],
        name: 'Dental Scheduling Chatbot',
        sub: 'Clinic Booking Assistant',
        body: 'A clinic chatbot that checks calendar availability, creates the appointment and logs the patient detail without a receptionist in the loop.',
        preview: 'flow',
        src: 'dental-scheduling-chatbot',
        w: 976,
        h: 577
      },
      {
        category: 'Discord',
        tags: ['n8n', 'Webhooks', 'Routing'],
        name: 'Discord AI Bot',
        sub: 'Community Triage Bot',
        body: 'A community bot that classifies each incoming request and routes it to the right department channel — success, IT or helpdesk — or stays silent.',
        preview: 'flow',
        src: 'discord-ai-bot',
        w: 1008,
        h: 597
      }
    ]
  },

  approach: {
    h2: 'Our Approach',
    lead: 'How an assistant goes from your existing content to a measurably useful conversation.',
    steps: [
      { icon: 'target', title: 'Define The Job', body: 'What the assistant is for, what it must never do and how success will be measured — agreed before any conversation design starts.' },
      { icon: 'book', title: 'Ground The Knowledge', body: 'Your documentation, policies, product data and past tickets indexed and structured so retrieval returns the right passage rather than a vague match.' },
      { icon: 'wand', title: 'Design The Conversation', body: 'Brand voice, fallback behaviour, escalation triggers and the handful of flows that need to be deterministic rather than generated.' },
      { icon: 'plug', title: 'Connect The Systems', body: 'Order lookups, bookings, quotes and CRM capture wired in, so a conversation can end in a completed action instead of a link.' },
      { icon: 'bolt', title: 'Launch', body: 'Deployed behind analytics on the first channel, with human handover live from day one and a transcript attached to every escalation.' },
      { icon: 'refresh', title: 'Tune Weekly', body: 'Unanswered questions and escalation reasons reviewed and fixed with real content — the fastest product and content roadmap input you will get.' }
    ]
  },

  outcomes: {
    h2: ['Ready To Answer', 'Every Visitor Instantly?'],
    lead: 'What teams worry about before launching an assistant, and how each concern is handled.',
    items: [
      { title: 'Will it make things up?', body: 'It answers from retrieved content and is instructed to say it does not know and offer handover rather than improvise. Answers can carry citations, and every gap is logged and filled with real content.' },
      { title: 'Will it annoy our customers?', body: 'Handover is always one tap away and triggers on request, low confidence, sentiment or topics you flag as human-only. We optimise for resolution, never containment.' },
      { title: 'We do not have a knowledge base', body: 'Most clients do not. Website pages, help articles, PDFs, product data and past tickets are usually enough — structuring that material is part of the work.' },
      { title: 'Can it actually do anything?', body: 'Yes, when it is connected. Order lookups, bookings, quotes, account changes and CRM capture all happen inside the conversation rather than being handed back as instructions.' },
      { title: 'How do we know it is working?', body: 'Resolution rate, escalation rate and reasons, unanswered questions and conversation-to-lead conversion — reported monthly and used to decide what gets fixed next.' }
    ]
  },

  cta: {
    h2: ['Ready To Launch', 'A Real Assistant?'],
    body: 'Send us your site and your support inbox. We will show you what an assistant grounded in your own content could resolve.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
