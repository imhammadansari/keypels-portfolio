module.exports = {
  slug: 'chatbots',
  title: 'Chatbots',
  navTitle: 'Chatbots',
  navDesc: 'Conversational assistants that convert and resolve.',
  portfolioDesc: 'Product guides, support and booking assistants.',
  icon: 'chat',
  number: '06',
  accent: ['#22d3ee', '#8b5cf6'],
  heroVisual: {
    img: 'portfolio/whatsapp-multimodal-chatbot.webp',
    kind: 'canvas',
    alt: 'Multimodal chatbot workflow',
    w: 777,
    h: 744
  },
  cardVisual: 'chat',

  meta: {
    title: 'Chatbot Development Services — AI Chat Assistants | KeyPels',
    description:
      'KeyPels builds intelligent chatbots for websites, support, lead generation, sales and internal operations — grounded in your own content and connected to your systems.'
  },

  sections: ['hero', 'intro', 'offerings', 'assurance', 'pricing', 'process', 'benefits', 'faq', 'cta'],

  hero: {
    eyebrow: 'Chatbots',
    h1: ['Conversations That', 'Convert And Resolve'],
    gradientLine: 1,
    lead:
      'Intelligent chat assistants grounded in your own content and connected to your systems — so answers are accurate, on-brand, and lead somewhere useful instead of a dead end.',
    chips: ['Grounded in your content', 'Web, WhatsApp & Slack', 'CRM connected', 'Human handover'],
    stats: [
      { value: 24, suffix: '/7', label: 'First-response coverage' },
      { value: 100, suffix: '%', label: 'Answers traced to a source' },
      { value: 2, suffix: ' wks', label: 'Typical time to first launch' }
    ]
  },

  intro: {
    eyebrow: 'Why most chatbots fail',
    h2: 'Nobody Hates Chatbots. They Hate Being Stonewalled',
    body: [
      'The reputation problem comes from bots that pattern-match a keyword, return the wrong article and then loop. Users are not resistant to chat — they are resistant to wasting ninety seconds before finding the contact link they wanted in the first place.',
      'We build assistants that retrieve from your actual content, cite where an answer came from, admit when they do not know, and hand over to a person with the conversation attached. The measure of success is resolved conversations and captured intent, not containment rate.'
    ],
    points: [
      { icon: 'book', title: 'Grounded in your content', body: 'Answers retrieved from your documentation, policies and product data — with a source behind each one.' },
      { icon: 'users', title: 'Graceful handover', body: 'Escalation to a human with the full transcript, so nobody is asked to repeat themselves.' },
      { icon: 'plug', title: 'Connected, not decorative', body: 'Order lookups, bookings, quotes and CRM capture handled inside the conversation.' },
      { icon: 'chart', title: 'Measured properly', body: 'Resolution rate, escalation reasons and unanswered questions reported and used to improve it.' }
    ],
    visual: {
      img: 'portfolio/dental-scheduling-chatbot.webp',
      kind: 'canvas',
      alt: 'Clinic booking chatbot',
      w: 976,
      h: 577
    }
  },

  offerings: {
    eyebrow: 'What we build',
    h2: 'Chatbot Solutions For Every Front Door',
    lead: 'Four assistant types, each with a different job and a different definition of success.',
    items: [
      {
        key: 'website',
        tab: 'Website Assistant',
        icon: 'globe',
        title: 'Website & Product Assistants',
        body:
          'A guide that helps visitors find the right product, compare options, answer pre-sales questions and reach the next step — trained on your site, catalogue and documentation.',
        bullets: ['Product guidance and comparison', 'Pre-sales question handling', 'Content-grounded answers with sources', 'Direct routes to demo, quote or checkout'],
        visual: {
          img: 'portfolio/whatsapp-rag-support.webp',
          kind: 'canvas',
          alt: 'Knowledge-grounded product assistant',
          w: 1100,
          h: 337
        }
      },
      {
        key: 'support',
        tab: 'Support Bot',
        icon: 'inbox',
        title: 'Customer Support Chatbots',
        body:
          'First-line support that genuinely resolves: order status, account questions, troubleshooting steps and policy answers, escalating to your team with full context when it should.',
        bullets: ['Order and account lookups', 'Guided troubleshooting flows', 'Ticket creation with conversation history', 'Escalation rules you configure'],
        visual: {
          img: 'portfolio/whatsapp-support-bot.webp',
          kind: 'canvas',
          alt: 'Customer support chatbot',
          w: 981,
          h: 243
        }
      },
      {
        key: 'leadgen',
        tab: 'Lead Generation',
        icon: 'target',
        title: 'Lead Generation & Sales Bots',
        body:
          'Assistants that qualify interest conversationally rather than through a seven-field form, book meetings against live calendar availability and write everything into the CRM.',
        bullets: ['Conversational qualification', 'Calendar-aware meeting booking', 'Automatic CRM record creation', 'Routing by territory, product or value'],
        visual: {
          img: 'portfolio/lead-capture-chatbot.webp',
          kind: 'canvas',
          alt: 'Lead generation chatbot',
          w: 826,
          h: 375
        }
      },
      {
        key: 'internal',
        tab: 'Internal Helpdesk',
        icon: 'users',
        title: 'Internal Helpdesk Bots',
        body:
          'A Slack or Teams assistant for the questions your ops, HR and IT teams answer twenty times a week — grounded in internal documentation and aware of who is asking.',
        bullets: ['Policy and process answers from internal docs', 'Permission-aware responses per team', 'Request raising and status checks', 'Slack, Teams and intranet deployment'],
        visual: {
          img: 'portfolio/discord-ai-bot.webp',
          kind: 'canvas',
          alt: 'Internal helpdesk routing bot',
          w: 1008,
          h: 597
        }
      }
    ]
  },

  assurance: {
    eyebrow: 'Quality standards',
    h2: 'How We Keep Answers Trustworthy',
    lead: 'A chatbot that invents an answer costs more than no chatbot at all. These are the constraints we build in.',
    items: [
      { icon: 'book', value: 100, suffix: '%', label: 'Sourced answers', note: 'Responses retrieved from your content, with citations available.' },
      { icon: 'users', value: 1, suffix: '', label: 'Tap to a human', note: 'Handover always available, with the transcript attached.' },
      { icon: 'bolt', value: 2, suffix: ' s', label: 'First response target', note: 'Streamed replies so the conversation never feels stalled.' },
      { icon: 'refresh', value: 30, suffix: ' days', label: 'Tuning window', note: 'Post-launch review of real conversations and gap fixing.' }
    ]
  },

  process: {
    eyebrow: 'How we work',
    h2: 'From Content To Conversation',
    lead: 'Launched in weeks, then improved with evidence from real conversations.',
    steps: [
      { title: 'Define The Job', body: 'We agree what the assistant is for, what it must never do, and how success will be measured before design starts.' },
      { title: 'Ground The Knowledge', body: 'Your documentation, policies and product data indexed and structured so retrieval returns the right passage, not a vague match.' },
      { title: 'Build & Connect', body: 'Conversation design, brand voice, system integrations and escalation rules built and tested against real questions.' },
      { title: 'Launch & Tune', body: 'Live behind analytics, with unanswered questions and escalation reasons reviewed weekly and fixed.' }
    ]
  },

  benefits: {
    eyebrow: 'Outcomes',
    h2: 'What A Good Assistant Changes',
    lead: 'What clients see once conversations are handled properly rather than deflected.',
    items: [
      { icon: 'clock', title: 'Instant first response', body: 'Every visitor answered immediately, including outside working hours and across time zones.' },
      { icon: 'inbox', title: 'Lighter support queue', body: 'Repetitive questions resolved in the conversation so your team handles the cases that need them.' },
      { icon: 'target', title: 'More qualified leads', body: 'Conversational qualification captures intent that a static contact form loses entirely.' },
      { icon: 'search', title: 'Insight into demand', body: 'A record of what people actually ask — the best product and content roadmap input you will get.' },
      { icon: 'globe', title: 'Multilingual by default', body: 'One assistant answering in the languages your customers use, without duplicating content.' },
      { icon: 'shield', title: 'Consistent answers', body: 'Everyone gets the current policy, not whichever version the last person memorised.' }
    ]
  },

  pricing: {
    eyebrow: 'Engagement models',
    h2: 'Ways To Launch A Chat Assistant',
    lead: 'Start with one channel and one job, then widen once the numbers are in.',
    tiers: [
      {
        badge: 'Fastest to live',
        name: 'Launch Assistant',
        desc: 'Best for teams who want an accurate, on-brand assistant answering visitors within weeks.',
        price: '$349',
        period: '/month',
        tagline: 'One channel, grounded in your content, live in weeks.',
        features: [
          'Content indexing and retrieval setup',
          'Conversation design in your brand voice',
          'Website widget deployment',
          'Human handover and transcript capture',
          '30 days of post-launch tuning'
        ],
        cta: 'Start Your Project'
      },
      {
        badge: 'Most selected',
        name: 'Connected Assistant',
        featured: true,
        desc: 'For businesses that need conversations to end in a completed action, not a link to a contact form.',
        price: '$749',
        period: '/month',
        tagline: 'An assistant wired into your systems that resolves rather than deflects.',
        features: [
          'Everything in Launch Assistant',
          'CRM, ticketing and order integrations',
          'Booking, quoting and account actions',
          'Multi-channel deployment',
          'Analytics dashboard and reporting',
          'Priority fixes and content updates'
        ],
        cta: 'Book a Free Consultation'
      },
      {
        badge: 'For continuous gains',
        name: 'Conversation Partner',
        desc: 'For teams treating the assistant as a product — measured, tuned and expanded every month.',
        price: '$1,190',
        period: '/month',
        tagline: 'Ongoing tuning, expansion and content improvement.',
        features: [
          'Monthly conversation review and tuning',
          'Knowledge gap identification and fixes',
          'New channels and languages added',
          'A/B testing of flows and messaging',
          'Quarterly performance reporting',
          'Dedicated Slack channel'
        ],
        cta: 'Talk to Our Team'
      }
    ],
    note: {
      title: 'Already running a chatbot that underperforms?',
      body: 'We also take over existing assistants — auditing real transcripts, fixing the retrieval layer, redesigning escalation and reporting on what actually changed.'
    }
  },

  faq: {
    eyebrow: 'FAQ',
    h2: 'Chatbot Questions',
    items: [
      { q: 'How is this different from the chatbot builders we can buy?', a: 'Off-the-shelf builders are good at scripted flows and weak at two things that decide success: retrieval quality over your real content, and doing something useful in your systems. We build the retrieval layer properly and connect the assistant to your CRM, ticketing and order systems so a conversation can end in a completed action rather than a link.' },
      { q: 'Will it make things up?', a: 'It is constrained to answer from retrieved content and is instructed to say it does not know and offer handover rather than improvise. Answers can carry citations back to source, and every unanswered question is logged so gaps get filled with real content instead of guesswork.' },
      { q: 'What content does it need to work?', a: 'Whatever you already have — website pages, help centre articles, PDFs, policy documents, product data and past support tickets. Part of our work is structuring that material so retrieval returns the right passage; you do not need to write a knowledge base from scratch first.' },
      { q: 'Can it hand over to a human?', a: 'Yes, and it should. Handover can trigger on user request, low confidence, sentiment, or specific topics you flag as human-only. The full transcript and everything gathered goes with it, so the customer never has to start again.' },
      { q: 'Which channels can you deploy to?', a: 'Website widget, in-app, WhatsApp, Facebook Messenger, Instagram, Slack, Microsoft Teams and email. The same knowledge base and integrations serve every channel, so behaviour stays consistent wherever the conversation happens.' },
      { q: 'How long does it take to launch?', a: 'A grounded website assistant typically goes live in about two weeks. Adding system integrations for order lookups, bookings or account actions usually takes another two to four depending on the systems involved.' },
      { q: 'How do you measure whether it is working?', a: 'Resolution rate, escalation rate and reasons, unanswered questions, conversation-to-lead conversion and satisfaction where you collect it. We deliberately do not optimise for containment — keeping someone away from your team is not the same as helping them.' }
    ]
  },

  cta: {
    h2: ['Ready To Answer', 'Every Visitor Instantly?'],
    body: 'Send us your site and your support inbox. We will show you what an assistant grounded in your own content could resolve.',
    primary: 'Start a Project',
    secondary: 'Talk to an Expert'
  }
};
