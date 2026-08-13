/* ==========================================================================
   About page content
   NOTE: the "Our Journey" milestones and the hero counters are the two places
   holding company-specific claims. They are written as editable placeholders —
   confirm every year and every number before launch.
   ========================================================================== */

module.exports = {
  meta: {
    title: 'About KeyPels — A Team Building Technology With Purpose',
    description:
      'KeyPels is a software development and AI solutions partner. Meet the team, the way we work, and the standards behind every product we build.'
  },

  hero: {
    eyebrow: 'About KeyPels',
    h1: ['A Focused Team Building', 'High-Quality Digital Products', 'With Precision'],
    gradientLine: 2,
    lead:
      'Senior engineers, designers and strategists building software and AI systems that businesses can actually run on — one partnership at a time.',
    stats: [
      { value: 6, suffix: '', label: 'Service lines', note: 'Web, mobile, CRM, automation, agents, chatbots' },
      { value: 100, suffix: '%', label: 'Custom-built', note: 'No templates, no rented platforms, no lock-in' },
      { value: 1, suffix: ' day', label: 'Response time', note: 'Business-day reply from a senior engineer' },
      { value: 24, suffix: '/7', label: 'Support coverage', note: 'Monitoring and alerting on live systems' }
    ]
  },

  journey: {
    eyebrow: 'Our journey',
    h2: 'Four Milestones. One Continuous Story.',
    lead:
      'From a small founding team to a  running production systems, every stage shaped how we build, who we work with and what we refuse to compromise on.',
    milestones: [
      {
        year: '2023',
        label: 'The beginning',
        icon: 'spark',
        title: 'Company Founded',
        body:
          'KeyPels started with a simple conviction: most business software fails not because the technology is hard, but because nobody stayed close enough to the problem. We set out to build web and custom software that solves the actual constraint rather than the requested feature.',
        tags: ['Web development', 'Custom software', 'Founding team']
      },
      {
        year: '2024',
        label: 'Finding our shape',
        icon: 'users',
        title: 'Growing Client Partnerships',
        body:
          'Our work spread across industries — commerce, professional services, logistics, healthcare and internal enterprise tooling. The pattern held: engagements that started as one project became long-term partnerships because the systems kept earning their keep.',
        tags: ['Multi-industry delivery', 'Retainers', 'Mobile & CRM']
      },
      {
        year: '2025',
        label: 'A new layer',
        icon: 'agent',
        title: 'Expanding Into AI',
        body:
          'We added AI automation, agents and conversational systems to the practice — not as a trend, but because the same clients kept asking us to remove the same repetitive work. Evaluation, guardrails and observability became core engineering disciplines for us.',
        tags: ['AI automation', 'AI agents', 'Evaluation & guardrails']
      },
      {
        year: '2026',
        label: 'Where we are now',
        icon: 'globe',
        title: 'Building For What Is Next',
        body:
          'Today we work with startups, growing businesses and established organisations, shipping scalable, secure software and intelligent systems — while keeping the things that made the first year work: senior people, direct communication and full ownership handed to the client.',
        tags: ['Six service lines', 'Long-term partnerships', 'Full code ownership']
      }
    ]
  },

  purpose: {
    eyebrow: 'Core purpose',
    h2: 'Mission & Vision',
    lead: 'Two statements we actually use when deciding what work to take and how to build it.',
    cards: [
      {
        tag: 'Mission',
        icon: 'target',
        title: 'Why We Exist',
        body:
          'To help businesses of every size build reliable technology that improves efficiency, supports growth and solves real operational problems — through practical, well-engineered software rather than impressive demos.'
      },
      {
        tag: 'Vision',
        icon: 'globe',
        title: 'Where We Are Going',
        body:
          'To be the  businesses keep for years: shipping dependable software, building long-term relationships, and making AI a genuine operating advantage rather than a line item on a roadmap.'
      }
    ]
  },

  values: {
    eyebrow: 'What we stand for',
    h2: 'Our Core Values',
    lead:
      'These are not words on a wall. They are the standards every person here is held to on every project, every day.',
    items: [
      {
        icon: 'spark',
        title: 'Innovation',
        body:
          'We keep exploring new technology and practical applications for it, so our clients stay ahead. Every project is a chance to improve how we build, not just what we build.'
      },
      {
        icon: 'shield',
        title: 'Quality',
        body:
          'Reliable, secure, well-crafted software with attention to detail, performance and long-term maintainability — because someone inherits every line we write.'
      },
      {
        icon: 'users',
        title: 'Partnership',
        body:
          'The best results come from working closely with people who know their business. We aim to understand your goals well enough to argue with you about them.'
      },
      {
        icon: 'search',
        title: 'Transparency',
        body:
          'Open, honest communication at every stage. Clear updates, realistic timelines and early warning when something is at risk — including when the news is inconvenient.'
      }
    ]
  },

  why: {
    eyebrow: 'Why choose us',
    h2: 'Why KeyPels?',
    lead:
      'Choosing a  is a decision you live with for years. Here is what you get with us, and the standard attached to each of them.',
    items: [
      {
        tag: 'Faster delivery',
        icon: 'bolt',
        title: 'Efficient Development',
        body: 'Short cycles with a demo-able build at the end of each one, so timelines shrink without quality, performance or maintainability paying for it.',
        stat: '2 wks',
        statLabel: 'Release cadence'
      },
      {
        tag: 'Expertise',
        icon: 'layers',
        title: 'Experienced Team',
        body: 'The engineers and designers in your kick-off are the ones who build the product. No hand-off to a junior bench once the contract is signed.',
        stat: 'Senior',
        statLabel: 'Team composition'
      },
      {
        tag: 'One partner',
        icon: 'route',
        title: 'End-To-End Delivery',
        body: 'Planning, design, development, deployment and support handled by one team, so nothing is dropped in the gap between vendors.',
        stat: '6',
        statLabel: 'Practice areas'
      },
      {
        tag: 'Built for growth',
        icon: 'chart',
        title: 'Scalable Solutions',
        body: 'Architecture that absorbs new features, new regions and more traffic without the rewrite that usually arrives eighteen months in.',
        stat: '10×',
        statLabel: 'Headroom by design'
      },
      {
        tag: 'Ongoing assistance',
        icon: 'gauge',
        title: 'Reliable Support',
        body: 'Maintenance, updates, monitoring and technical support after launch, so the thing we built together keeps running properly.',
        stat: '24/7',
        statLabel: 'Monitoring coverage'
      },
      {
        tag: 'Collaboration',
        icon: 'users',
        title: 'Clear Communication',
        body: 'Regular updates, direct access to the people doing the work, and honest discussion when a decision needs to change.',
        stat: '100%',
        statLabel: 'Project transparency'
      }
    ]
  },

  cta: {
    eyebrow: 'Let’s build something good',
    h2: ['Let’s Talk About', 'Your Project.'],
    body:
      'Whether you are building a new product, improving an existing platform or extending your team, tell us about the idea and we will work out the right way to build it.',
    services: ['Web Development', 'Mobile Apps', 'CRM Platforms', 'AI Automation', 'AI Agents', 'Chatbots']
  }
};
