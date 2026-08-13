/* ==========================================================================
   Contact page content
   Phone / WhatsApp / office addresses come from BRAND in site.config.js and
   are PLACEHOLDERS — replace them before launch.
   ========================================================================== */

const { BRAND } = require('../site.config');

module.exports = {
  meta: {
    title: 'Contact KeyPels — Start a Project',
    description:
      'Talk to KeyPels about web development, mobile apps, CRM platforms, AI automation, AI agents and chatbots. Email contact@keypels.com or send a project enquiry.'
  },

  hero: {
    eyebrow: 'Get in touch',
    h1: ['Let’s Start', 'A Conversation.'],
    lead:
      'Have a project in mind, or just want to explore what is possible? Send us a message and you will hear back from a senior engineer within one business day — not a sales queue.'
  },

  methods: [
    {
      icon: 'inbox',
      label: 'Email us',
      value: BRAND.email,
      note: 'Best for project briefs and detailed questions',
      href: `mailto:${BRAND.email}`
    },
    {
      icon: 'chat',
      label: 'WhatsApp',
      value: BRAND.whatsapp,
      note: 'Quick questions and scheduling',
      href: `https://wa.me/${BRAND.whatsappHref}`,
      external: true
    },
    {
      icon: 'clock',
      label: 'Call us',
      value: BRAND.phone,
      note: 'Mon–Fri, 09:00–18:00',
      href: `tel:${BRAND.phoneHref}`
    },
    {
      icon: 'users',
      label: 'Book a call',
      value: 'Intro call, 30 minutes',
      note: 'Scope, approach and a straight answer on cost',
      href: '#form'
    }
  ],

  form: {
    eyebrow: 'Project enquiry',
    h2: 'Tell Us What You’re Building',
    lead:
      'The more you tell us about the problem, the more useful our first reply will be. There is no obligation and no automated follow-up sequence.',
    services: [
      'Web Development',
      'Mobile App Development',
      'CRM Development',
      'AI Automation',
      'AI Agents',
      'Chatbots',
      'Not sure yet'
    ],
    facts: [
      { label: 'Response time', value: 'Within 1 business day' },
      { label: 'Engagements', value: 'Projects & retainers' },
      { label: 'Working style', value: 'Remote, worldwide' },
      { label: 'Minimum engagement', value: 'No minimum for a first call' }
    ],
    steps: [
      'A senior engineer reads your message — not a bot or an SDR',
      'We reply with first questions, or book a 30-minute intro call',
      'You get a written approach, timeline and cost before committing to anything'
    ]
  },

  offices: {
    eyebrow: 'Find us',
    h2: 'Where We Work From',
    lead:
      'We are remote-first and work with clients across time zones. Switch between locations for the address and direct contacts of each.',
    note:
      'Office addresses shown here are placeholders — replace them in tools/site.config.js before launch.'
  },

  faq: {
    eyebrow: 'Before you write',
    h2: 'Quick Answers',
    items: [
      {
        q: 'How quickly will you reply?',
        a: 'Within one business day, from someone who can actually discuss the technical detail. If your message arrives over a weekend you will hear back on Monday.'
      },
      {
        q: 'What should I include in my message?',
        a: 'What you are building or what is currently slowing you down, roughly when you need it live, and any hard constraints — existing systems, compliance requirements or a fixed budget. Rough is fine; we will ask the rest.'
      },
      {
        q: 'Do you work with our time zone?',
        a: 'Yes. We are remote-first and work with clients across Europe, North America and Asia-Pacific, with a guaranteed overlap window agreed at the start of every engagement.'
      },
      {
        q: 'Can we sign an NDA before talking in detail?',
        a: 'Of course. Send yours over or ask for ours, and we will have it signed before the first technical conversation.'
      },
      {
        q: 'Do you take on small projects?',
        a: 'Sometimes — it depends on whether we can do it properly at that size. If a project is not a good fit for us we will say so early and, where we can, point you somewhere better.'
      },
      {
        q: 'What if I am not sure what I need yet?',
        a: 'That is a normal starting point. Pick "Not sure yet" in the form and describe the problem instead of the solution. Working out what should actually be built is part of what we do.'
      }
    ]
  },

  cta: {
    h2: ['Prefer To Just', 'Send An Email?'],
    body: `Write to ${BRAND.email} with whatever detail you have. A senior engineer will read it and reply personally.`,
    primary: 'Start a Project',
    secondary: 'Email the team'
  }
};
