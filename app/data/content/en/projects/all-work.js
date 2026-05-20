export const allWorkProject = {
slug: 'all-work',
    title: 'All Work',
    description:
      'A broader index of shipped products, internships, prototypes, and exploratory builds across product design, mobile development, and AI tooling.',
    roles: ['Product Design', 'UX Research', 'Mobile Development', 'AI Integration', 'Prototyping'],
    summary: {
      title: 'All Work',
      description:
        'An index of shipped products, internship work, prototypes, and exploratory builds — the broader portfolio behind the featured case studies.',
      modelType: 'laptop',
      modelAlt: 'Overview of additional portfolio work',
    },
    sections: [
      {
        type: 'text',
        heading: 'The Broader Portfolio',
        body: [
          'The featured case studies on the homepage cover the work I most want to walk through end to end. This page holds the rest: shipped products, real internship work, course-driven case studies, and the smaller builds that shape how I think about design and engineering.',
          'The common thread is the same as the featured work: reducing complexity, making interaction models clearer, and getting ideas into a form that can actually be tested or shipped.',
        ],
      },
      {
        type: 'project-grid',
        heading: 'Selected Work',
        body: [
          'A scannable view of recent and ongoing work. Featured case studies open into full project pages; the rest is summarized here.',
        ],
        items: [
          {
            title: 'SayIt',
            timeframe: 'Apr 2026 · Shipped',
            description:
              'Production macOS menu bar app for voice-to-text. Global hotkey, on-device Whisper, signed and notarized v1.0.5 release on GitHub Releases.',
            tags: ['Swift', 'SwiftUI', 'whisper.cpp', 'AppKit'],
            href: '/projects/sayit',
          },
          {
            title: 'KnowledgeOS',
            timeframe: 'May 2026 · Live System',
            description:
              'Agent-maintained personal knowledge system built on Markdown, Obsidian, Hermes Agent, cron workflows, and Git backup. Designed to turn daily conversations, project updates, and research into durable long-term context.',
            tags: ['AI Systems', 'Knowledge Architecture', 'Markdown', 'Automation'],
            href: '/projects/knowledgeos',
          },
          {
            title: 'TrekAssist',
            timeframe: 'Sep 2025 – Dec 2025 · Tufts',
            description:
              'Solar-powered e-ink national park guide. Usability tested with 9 participants across 6 outdoor scenarios; surfaced and addressed Low Power discoverability.',
            tags: ['Human Factors', 'Figma', 'Usability Testing', 'E-Ink'],
            href: '/projects/trekassist',
          },
          {
            title: 'Porsche Digital Interface',
            timeframe: 'Jun 2024 – Sep 2024 · Porsche Asia Pacific',
            description:
              'In-car interaction prototypes for Porsche Communication Management. Iterative UI tuning contributed to a 30% reduction in interface load time.',
            tags: ['UX/UI', 'Multimodal', 'Figma', 'Automotive HMI'],
            href: '/projects/porsche-digital-interface',
          },
          {
            title: 'Posture Checker',
            timeframe: 'Sep 2024 – Dec 2024',
            description:
              'Cross-platform React Native app paired with a custom BLE posture sensor. Real-time tracking, trends, and corrective push notifications.',
            tags: ['React Native', 'BLE', 'Firebase', 'Hardware'],
            href: '/projects/posture-checker',
          },
          {
            title: 'AI-Driven Multimodal UX (China GPI Tech)',
            timeframe: 'Jun 2023 – Aug 2023 · Internship',
            description:
              'Designed multimodal UX flows blending voice, touch, and GUI. Refined NLP voice commands, lifting speech recognition accuracy to 95%.',
            tags: ['Multimodal UX', 'NLP', 'Voice Interaction'],
          },
          {
            title: 'Little Lemon Restaurant',
            timeframe: '2024 · Google UX Capstone',
            description:
              'Responsive booking and ordering experience refined through user research and usability testing. Google UX Design Certificate capstone.',
            tags: ['UX Design', 'Figma', 'Responsive'],
            href: '/projects/little-lemon',
          },
          {
            title: 'Meta iOS Developer · Capstone',
            timeframe: '2024 · Coursera',
            description:
              'Native iOS work covering Swift, Core Data, version control, and product-level UI/UX research as part of the Meta iOS Developer Professional Certificate.',
            tags: ['Swift', 'Core Data', 'iOS'],
          },
          {
            title: 'Private & Client Work',
            timeframe: 'Available on request',
            description:
              'Additional design-system, prototyping, and implementation-heavy work that lives inside client products. Walkthroughs available on request.',
            tags: ['Design Systems', 'Prototyping', 'Frontend'],
          },
        ],
      },
      {
        type: 'outcome',
        heading: 'Want to dig deeper?',
        body: [
          'If something on this page is relevant to a role you’re hiring for, get in touch — I’m happy to walk through process, decisions, and tradeoffs that don’t fit in a public case study.',
        ],
      },
    ],
  };
