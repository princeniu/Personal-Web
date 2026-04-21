export const featuredProjectSlugs = [
  'porsche-digital-interface',
  'posture-checker',
  'little-lemon',
  'sayit',
];

export const legacyProjectSlugRedirects = {};

export const portfolioProjects = [
  {
    slug: 'porsche-digital-interface',
    title: 'Porsche Digital Interface',
    description:
      'Redesigning an in-car digital experience for Porsche Taycan with a focus on navigation, voice interaction, and safer multimodal control.',
    roles: ['UX Research', 'UX Design', 'UI Design', 'Product Design', 'Prototyping'],
    summary: {
      title: 'Porsche Digital Interface',
      description:
        'Contributed to Porsche in-car UX design by creating high-fidelity prototypes and research-backed flows for navigation, voice control, and AI assistance.',
      modelType: 'laptop',
      modelAlt: 'Porsche Digital Interface prototype shown on a laptop',
    },
    sections: [
      {
        type: 'hero-image',
        image: 'porscheHome',
        alt: 'Porsche Digital Interface home screen',
      },
      {
        type: 'text',
        heading: 'The Problem',
        body: [
          'As automotive technology advances, in-car control systems need to feel seamless, intuitive, and safe. Porsche aimed to refine Porsche Communication Management with clearer navigation, voice control, and AI-driven interactions.',
          'The design challenge was to reduce complex user flows, improve interface responsiveness, and support multimodal interaction without distracting drivers from the road.',
        ],
      },
      {
        type: 'image',
        image: 'porscheFlowchart',
        light: true,
        heading: 'Interaction Flow',
        alt: 'Flowchart for Porsche Digital Interface voice command interactions',
        body: [
          'The flowchart maps voice command interactions for navigation, cruise control, lane keeping, and parking assistance. It prioritizes clarity, accessible feedback, predictable prompts, and error recovery.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Wireframes',
        images: ['porscheWireframeMain', 'porscheWireframeNavigation'],
        body: [
          'The wireframes explored a grid-based app menu, quick access controls, a voice command bar, and real-time system status feedback for an easier in-car experience.',
        ],
      },
      {
        type: 'gallery',
        heading: 'High-Fidelity Prototype',
        images: ['porscheHome', 'porschePrototype'],
        body: [
          'The prototype brought touch, visual hierarchy, and voice assistance together so drivers could complete key tasks with less friction and fewer distractions.',
        ],
      },
      {
        type: 'outcome',
        image: 'porscheOutcome',
        heading: 'Project Outcomes',
        body: [
          'The redesigned interface reduced task complexity through optimized navigation flows and multimodal inputs. Usability testing indicated stronger satisfaction with the AI voice assistant and clearer control paths.',
        ],
      },
    ],
  },
  {
    slug: 'posture-checker',
    title: 'Posture Checker',
    description:
      'A cross-platform posture monitoring app using React Native and Bluetooth Low Energy to track real-time posture data, visualize progress, and send corrective alerts.',
    roles: [
      'User Research',
      'UX Design',
      'UI Design',
      'React Native',
      'Mobile Development',
      'Product Design',
    ],
    summary: {
      title: 'Posture Checker',
      description:
        'A posture tracking app that connects to wearable sensors, stores local posture data, sends alerts, and visualizes back-health progress.',
      modelType: 'phone',
      modelAlt: 'Posture Checker app screens shown on phones',
    },
    sections: [
      {
        type: 'hero-image',
        image: 'postureApp',
        alt: 'Posture Checker app interface',
      },
      {
        type: 'image-text',
        image: 'postureArchitecture',
        light: true,
        heading: 'System Architecture',
        alt: 'Posture Checker app system architecture diagram',
        body: [
          'The architecture combines React Native UI, Bluetooth device connectivity, posture data processing, local storage, charting, and push notifications for a seamless real-time tracking loop.',
        ],
      },
      {
        type: 'image-text',
        image: 'postureActivity',
        heading: 'User Activity Flow',
        alt: 'Posture Checker app user activity flow',
        body: [
          'The user flow covers app launch, Bluetooth pairing, device detection, real-time posture analysis, corrective notifications, and progress visualization.',
        ],
      },
      {
        type: 'image',
        image: 'postureWireframe',
        light: true,
        heading: 'Wireframes',
        alt: 'Posture Checker app wireframes',
        body: [
          'The wireframes organize posture status, daily goals, settings, stats, and core navigation into a simple mobile structure optimized for quick feedback.',
        ],
      },
      {
        type: 'image',
        image: 'posturePrototype',
        dark: true,
        heading: 'High-Fidelity Prototype',
        alt: 'Posture Checker high-fidelity prototype screens',
        body: [
          'The high-fidelity prototype refines tracking, goal progress, analytics, and settings into an approachable mobile experience for repeated daily use.',
        ],
      },
      {
        type: 'comparison-columns',
        image: 'postureFinalApp',
        light: true,
        heading: 'Physical Product Integration',
        alt: 'Posture Checker final app screen',
        body: [
          'The app connects with a physical posture device to deliver real-time posture monitoring, feedback, goal tracking, and visual progress insights.',
        ],
      },
      {
        type: 'outcome',
        image: 'postureTeam',
        heading: 'Project Outcomes',
        body: [
          'The digital and physical posture correction system helped users understand posture habits through immediate feedback, stored trends, and recurring notifications.',
        ],
      },
    ],
  },
  {
    slug: 'little-lemon',
    title: 'Little Lemon Restaurant',
    description:
      'A restaurant booking and ordering experience designed for intuitive navigation, accessibility, and clear end-to-end reservation flows.',
    roles: ['User Research', 'UX Design', 'Interface Design', 'Responsive Design'],
    summary: {
      title: 'Little Lemon',
      description:
        'A Google UX Design Certificate project focused on responsive restaurant browsing, reservation, and ordering flows refined through user research and usability testing.',
      modelType: 'phone',
      modelAlt: 'Little Lemon restaurant app screens shown on phones',
    },
    sections: [
      {
        type: 'hero-image',
        image: 'littleLemonHero',
        alt: 'Little Lemon restaurant mobile interface',
      },
      {
        type: 'text',
        heading: 'The Challenge',
        body: [
          'The project focused on helping diners browse the menu, make reservations, and move through the restaurant experience without confusion or unnecessary steps.',
          'The design needed to work across mobile and responsive layouts while keeping core actions easy to find.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Interface Exploration',
        images: ['littleLemonMenu', 'littleLemonReservation'],
        body: [
          'The interface exploration focused on menu browsing, reservation steps, visual hierarchy, and clear task completion for first-time visitors.',
        ],
      },
      {
        type: 'outcome',
        image: 'littleLemonHero',
        heading: 'Project Outcomes',
        body: [
          'The final experience presents a clearer restaurant journey from discovery to reservation, with improved navigation and a visual system suited to a friendly neighborhood restaurant.',
        ],
      },
    ],
  },
  {
    slug: 'more-work',
    title: 'More Work',
    description:
      'A broader view of product, prototype, and implementation work spanning shipped tools, client collaborations, and smaller experiments that support the core portfolio.',
    roles: ['Product Design', 'Frontend Development', 'Prototyping', 'Interaction Design'],
    summary: {
      title: 'More Work',
      description:
        'A lightweight index for additional work, private case studies, and cross-disciplinary product explorations outside the featured portfolio.',
      modelType: 'laptop',
      modelAlt: 'Additional portfolio work overview',
    },
    sections: [
      {
        type: 'text',
        heading: 'What Lives Here',
        body: [
          'This page holds the work that does not fit neatly into the featured case studies on the homepage: smaller product launches, exploratory builds, internal tools, and private client work that can only be shared selectively.',
          'The common thread is the same as the rest of the portfolio: reducing complexity, making interaction models clearer, and getting ideas into a form that can be tested or shipped.',
        ],
      },
      {
        type: 'text',
        heading: 'Kinds of Projects',
        body: [
          'Across recent engagements, the work has included design systems, rapid prototypes, UX refinements for existing products, cross-platform interface work, and implementation-heavy collaboration where design decisions had to hold up in production.',
          'Some of that work is public, some is embedded in client products, and some is intentionally kept lightweight in the portfolio because the most useful artifact is the shipped outcome rather than a long case study.',
        ],
      },
      {
        type: 'outcome',
        heading: 'Availability',
        body: [
          'Additional samples and project walkthroughs are available on request when the context is relevant. That is the simplest way to keep the public portfolio focused while still making room for broader work history.',
        ],
      },
    ],
  },
  {
    slug: 'sayit',
    title: 'SayIt',
    description:
      'A native macOS menu bar dictation app that turns speech into text with a single hotkey, local-first transcription, and a workflow designed to feel as fast as a system utility.',
    roles: ['Product Design', 'SwiftUI', 'macOS Development', 'Interaction Design', 'AI Integration'],
    summary: {
      title: 'SayIt',
      description:
        'Designed and built a privacy-first macOS voice-to-text utility with a menu bar workflow, global hotkey, real-time HUD feedback, and local Whisper support.',
      modelType: 'laptop',
      modelAlt: 'SayIt macOS menu bar app shown on a laptop',
    },
    sections: [
      {
        type: 'hero-image',
        image: 'sayitBrand',
        alt: 'SayIt branding and app icon',
      },
      {
        type: 'text',
        heading: 'The Opportunity',
        body: [
          'SayIt started from a simple productivity gap: system dictation and cloud transcription tools either interrupted writing flow, added friction, or raised privacy concerns for everyday capture.',
          'The goal was to build a menu bar utility that feels immediate and native on macOS, letting users trigger recording from anywhere, transcribe quickly, and paste the result without breaking focus.',
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverIdle',
        heading: 'Product Surface and Core Controls',
        alt: 'SayIt popover showing microphone, engine, and start recording controls',
        body: [
          'The product centers on a compact popover with a single primary action, microphone selection, transcription engine settings, and lightweight status messaging. The interface stays quiet until needed, matching the expectation of a utility rather than a traditional full-window app.',
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverRecording',
        heading: 'One-Toggle Recording Flow',
        alt: 'SayIt popover during active recording and transcription workflow',
        body: [
          'Interaction design was intentionally reduced to a reliable toggle: start recording, stop and transcribe, then copy the result automatically. Supporting states like recording duration, audio level, slow transcription hints, and HUD feedback help the app stay understandable without becoming visually heavy.',
        ],
      },
      {
        type: 'image-text',
        image: 'sayitIphoneMic',
        heading: 'Device Resilience and Ecosystem Fit',
        alt: 'iPhone Continuity microphone connected to SayIt on macOS',
        body: [
          'A notable detail in the product strategy was microphone reliability. Beyond local speech capture and Whisper integration, the app accounts for device changes and supports Continuity microphone handoff, which makes the workflow more dependable in clamshell or external-monitor setups.',
        ],
      },
      {
        type: 'outcome',
        image: 'sayitBrand',
        heading: 'Outcome',
        body: [
          'The project shipped as a real macOS product with downloadable releases, a polished onboarding flow, localized strings, and a tested codebase spanning app control, permissions, audio capture, and transcription behavior.',
          'For the portfolio, SayIt adds a stronger example of end-to-end product execution: identifying a focused problem, shaping the interaction model, and delivering a native tool that connects UX decisions directly to production implementation.',
        ],
      },
    ],
  },
];

export const resolveProjectSlug = slug => legacyProjectSlugRedirects[slug] ?? slug;

export const getProjectPath = slug => `/projects/${slug}`;
