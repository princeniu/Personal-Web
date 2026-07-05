export const allWorkProject = {
    slug: 'all-work',
    title: 'All Work',
    description:
      'An index of shipped products, internships, prototypes, and exploratory builds across product design, mobile development, and AI tooling.',
    roles: ['Product Design', 'UX Research', 'Mobile Development', 'AI Integration', 'Prototyping'],
    summary: {
      title: 'All Work',
      description:
        'Shipped products, internship work, prototypes, and smaller builds that sit behind the featured case studies.',
      modelType: 'laptop',
      modelAlt: 'Overview of additional portfolio work',
    },
    sections: [
      {
        type: 'text',
        heading: 'The Rest of the Work',
        body: [
          'The featured case studies on the homepage are the projects I most want to walk through in depth. This page holds the rest: shipped products, real internship work, course projects, and smaller builds that shaped how I think about design and engineering.',
          'Most of this work sits in the same space: clearer interaction models, practical prototypes, and ideas pushed far enough that they can be tested or shipped.',
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
              'Personal knowledge system built on Markdown, Obsidian, Hermes Agent, cron workflows, and Git backup. It keeps useful project context from disappearing inside chat threads.',
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
              'React Native app paired with a custom BLE posture sensor. Live tracking, trends, and corrective push notifications.',
            tags: ['React Native', 'BLE', 'Firebase', 'Hardware'],
            href: '/projects/posture-checker',
          },
          {
            title: 'E-Tongue Sensory Platform',
            timeframe: '2025 · Human Factor Product Design',
            description:
              'Decision-support prototype that combines E-Tongue taste measurements with semi-trained panel feedback to help food teams compare samples and choose Go, Tweak, or Stop.',
            tags: ['Human Factors', 'Decision-Support UX', 'Figma', 'Usability Testing'],
            href: '/projects/etongue-sensory-platform',
          },
          {
            title: 'Little Lemon Restaurant',
            timeframe: '2024 · Google UX Capstone',
            description:
              'Responsive booking and ordering experience refined through user research and usability testing. Google UX Design Certificate capstone.',
            tags: ['UX Design', 'Figma', 'Responsive'],
            href: '/projects/little-lemon',
          },
        ],
      },
      {
        type: 'outcome',
        heading: 'Want to dig deeper?',
        body: [
          'If something on this page is relevant to a role you’re hiring for, get in touch. I’m happy to walk through process, decisions, and tradeoffs that don’t fit in a public case study.',
        ],
      },
    ],
  };
