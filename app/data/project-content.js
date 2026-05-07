export const featuredProjectSlugs = [
  'trekassist',
  'porsche-digital-interface',
  'sayit',
  'posture-checker',
  'little-lemon',
];

export const legacyProjectSlugRedirects = {
  'more-work': 'all-work',
};

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
        'Automotive HMI redesign for the Porsche Taycan: research-backed flows and high-fidelity prototypes for navigation, voice control, and AI assistance, focused on safer multimodal interaction.',
      modelType: 'laptop',
      modelAlt: 'Porsche Digital Interface prototype shown on a laptop',
      quickFacts: [
        { label: 'Role', value: 'UX / UI Designer (Porsche Asia Pacific internship)' },
        { label: 'Methods', value: 'UX research, multimodal flow design, prototyping' },
        { label: 'Tools', value: 'Figma' },
        { label: 'Outcome', value: '30% reduction in interface load time after iterative UI optimization' },
      ],
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
        type: 'metrics',
        heading: 'Impact at a Glance',
        body: [
          'Iteration on micro-interactions and component-level UI specs translated directly into measurable performance and clarity gains during the engineering handoff.',
        ],
        metrics: [
          { value: '30%', label: 'Reduction in interface load time' },
          { value: '4', label: 'Multimodal flows shipped (touch · voice · AI · GUI)' },
          { value: '12+', label: 'High-fidelity component specs handed off' },
        ],
        evidence: [
          {
            label: 'Performance',
            value:
              'Iterative tuning of micro-interactions and asset weights contributed to a 30% reduction in load time across the navigation, voice, and assistant surfaces.',
          },
          {
            label: 'Cross-functional alignment',
            value:
              'Design rationale and interaction-flow walkthroughs aligned design and engineering on usability goals, visual consistency, and technical feasibility before development.',
          },
          {
            label: 'Multimodal coverage',
            value:
              'Flows spanned touch, voice command, and AI-driven assistance — so drivers could complete the same task through whichever modality was safer in the moment.',
          },
        ],
      },
      {
        type: 'outcome',
        image: 'porscheOutcome',
        heading: 'Project Outcomes',
        body: [
          'The redesigned interface reduced task complexity through optimized navigation flows and multimodal inputs. Usability testing indicated stronger satisfaction with the AI voice assistant and clearer control paths, and the iterated UI contributed to a 30% reduction in load time at handoff.',
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
        'A React Native mobile app paired with a BLE wearable sensor that delivers real-time corrective feedback, stores local posture data, and visualizes back-health progress.',
      modelType: 'phone',
      modelAlt: 'Posture Checker app screens shown on phones',
      quickFacts: [
        { label: 'Role', value: 'Product Designer + Mobile Developer (solo)' },
        { label: 'Methods', value: 'User research, BLE prototyping, system architecture, push-feedback loops' },
        { label: 'Tools', value: 'React Native, Expo, BLE, Arduino, Firebase, Figma' },
        { label: 'Outcome', value: 'Cross-platform iOS + Android app paired with a custom BLE posture sensor' },
      ],
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
        type: 'metrics',
        heading: 'Build Snapshot',
        body: [
          'The build covered the full product surface: a hardware-paired mobile app, an end-to-end interaction model, and a feedback loop designed to make posture habits visible.',
        ],
        metrics: [
          { value: '2', label: 'Platforms shipped (iOS + Android via React Native)' },
          { value: '1', label: 'Custom BLE-enabled posture sensor integrated' },
          { value: '5+', label: 'Core screens (status, goals, trends, history, settings)' },
          { value: '1 Hz', label: 'Real-time posture sampling cadence' },
        ],
        evidence: [
          {
            label: 'Hardware-software integration',
            value:
              'Designed and implemented the BLE pairing flow connecting the React Native app to a custom posture sensor, including reconnection handling and live data streaming.',
          },
          {
            label: 'Feedback loop',
            value:
              'Push notifications fire when poor posture persists past a threshold, supporting behavior change without nagging users for momentary slouches.',
          },
          {
            label: 'Information surfaces',
            value:
              'Live status, daily goals, historical trends, and good-vs-slouch visualizations were unified into a single mobile dashboard for quick daily check-ins.',
          },
        ],
      },
      {
        type: 'outcome',
        image: 'postureTeam',
        heading: 'Project Outcomes',
        body: [
          'The digital and physical posture correction system helped users understand posture habits through immediate feedback, stored trends, and recurring notifications. The shipped build proved that a single designer-builder can take a hardware-integrated mobile product from concept through a working multi-screen experience.',
        ],
      },
    ],
  },
  {
    slug: 'trekassist',
    title: 'TrekAssist',
    description:
      'A solar-powered e-ink guide for Yellowstone visitors, designed through a human-centered process to support outdoor navigation, emergency response, safety alerts, and low-power interaction.',
    roles: [
      'Human Factors',
      'Safety-Critical UX',
      'Usability Testing',
      'E-Ink Interface',
      'Outdoor Navigation',
    ],
    summary: {
      title: 'TrekAssist',
      description:
        'A team UX/HFE case study for a solar-powered outdoor e-ink device, validated through usability testing with 9 participants across 6 scenario-based tasks covering navigation, emergency support, and low-power interaction.',
      modelType: 'laptop',
      modelAlt: 'TrekAssist e-ink national park guide interface shown on a laptop',
      quickFacts: [
        { label: 'Role', value: 'UX / Human Factors Designer (team)' },
        { label: 'Methods', value: 'UI design, usability testing (n=9), scenario tasks, flow mapping' },
        { label: 'Tools', value: 'Figma, e-ink prototyping' },
        { label: 'Outcome', value: 'Validated safety-critical flows; surfaced Low Power discoverability fix' },
      ],
    },
    sections: [
      {
        type: 'hero-image',
        image: 'trekassistHomeAlert',
        alt: 'TrekAssist home screen with weather alert and navigation options',
      },
      {
        type: 'text',
        heading: 'Overview',
        body: [
          'TrekAssist is a solar-powered e-ink guide concept designed for visitors exploring Yellowstone National Park. As a team UX/HFE project, TrekAssist focused on helping park visitors navigate unfamiliar outdoor environments, respond to weather and safety alerts, access emergency support, and manage device battery life under strict display and power constraints.',
          'Unlike a standard mobile travel app, TrekAssist was designed for a dedicated outdoor device with an 800×600 landscape e-ink display, limited color use, and a maximum refresh rate of 1Hz. These constraints shaped the interface around static layouts, large controls, persistent safety information, and selective use of color for critical interactions.',
        ],
      },
      {
        type: 'text',
        heading: 'Problem Context',
        body: [
          'National park visitors often make decisions in unfamiliar, high-variability environments. Weather can change quickly, trails may be confusing, wildlife encounters can create safety risks, and phone battery or signal availability may be unreliable.',
          'The design challenge was to create an interface that could help visitors understand where they are, notice important alerts, access emergency support quickly, browse guided tours and destinations, prepare for hikes, and conserve battery during long outdoor trips.',
        ],
      },
      {
        type: 'timeline',
        heading: 'Process Timeline',
        body: [
          'This sequence framed TrekAssist as a constrained human-centered design process rather than a static interface concept.',
        ],
        items: [
          {
            title: 'Concept Exploration',
            description: 'Defined the park-visitor problem space and outdoor constraints.',
          },
          {
            title: 'Flow Mapping',
            description: 'Mapped discovery, safety, emergency, and low-power user flows.',
          },
          {
            title: 'Prototype Design',
            description: 'Designed e-ink-friendly screens with static layouts and large controls.',
          },
          {
            title: 'Usability Testing',
            description: 'Tested 9 participants across 6 scenario-based tasks.',
          },
          {
            title: 'Findings Synthesis',
            description: 'Identified strong emergency/navigation performance and Low Power discoverability issues.',
          },
          {
            title: 'Iteration',
            description: 'Refined alert visibility, battery access, map readability, and safety affordances.',
          },
          {
            title: 'Final Prototype',
            description: 'Balanced exploration, safety, and low-power outdoor interaction.',
          },
        ],
      },
      {
        type: 'image',
        image: 'trekassistDiscoveryFlow',
        light: true,
        heading: 'Early Exploration and Information Architecture',
        alt: 'TrekAssist discovery user interface flow diagram',
        body: [
          'Our team explored both safety-first and discovery-oriented directions before combining them into a park guide focused on safety, navigation clarity, and power-aware interaction. The flow mapping helped define what belonged at the top level of the interface and what needed to remain persistent across screens.',
        ],
      },
      {
        type: 'image',
        image: 'trekassistSafetyFlow',
        light: true,
        heading: 'Safety-Critical Flow Planning',
        alt: 'TrekAssist safety user interface flow diagram',
        body: [
          'Safety-critical elements were not hidden inside individual sections. The interface used persistent global elements: a top alert ribbon for active warnings, a global Emergency button, and accessible settings and battery indicators. This structure supported both everyday exploration and urgent safety scenarios.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Key Interface Decisions',
        images: [
          'trekassistAlertModal',
          'trekassistEmergencyConfirmation',
          'trekassistMapMammoth',
        ],
        body: [
          'Weather alerts remained visible through a persistent top ribbon and could expand into a focused modal when the warning required attention. Emergency contact stayed globally available, but a confirmation step reduced accidental activation while preserving quick access to help.',
          'The map combined wayfinding, active warning information, destination context, battery access, and emergency support in one static layout suitable for a low-refresh e-ink device.',
        ],
      },
      {
        type: 'text',
        heading: 'Usability Testing',
        body: [
          'To evaluate the prototype, our team conducted usability testing with 9 participants across six scenario-based tasks: checking weather warnings, contacting a ranger through Emergency, starting a guided tour to Mammoth Hot Springs, finding information about Yellowstone Lake, locating safety tips for a long hike, and activating Low Power Mode.',
          'We measured task completion, time on task, number of errors, number of attempts, ease ratings, and qualitative feedback. The goal was not only to confirm whether users could complete tasks, but also to identify where the interface created hesitation, confusion, or unnecessary effort.',
        ],
      },
      {
        type: 'metrics',
        heading: 'Testing Snapshot',
        body: [
          'The test combined task performance metrics with qualitative comments to identify where the interface supported safety-critical behavior and where it created unnecessary effort.',
        ],
        metrics: [
          { value: '9', label: 'Participants' },
          { value: '6', label: 'Scenario-Based Tasks' },
          { value: '7/9', label: 'Errors on Low Power Mode' },
          { value: '22.8s', label: 'Avg. Low Power Task Time' },
          { value: '5.3/7', label: 'Low Power Ease Rating' },
        ],
        evidence: [
          {
            label: 'Strong task areas',
            value:
              'Emergency contact, weather warnings, destination information, and guided-tour tasks were generally successful.',
          },
          {
            label: 'Key issue',
            value:
              'Low Power Mode was available, but participants did not consistently discover where to activate it.',
          },
          {
            label: 'Design implication',
            value:
              'Battery access and power-saving prompts needed to become more visible, contextual, and directly connected to the battery state.',
          },
        ],
      },
      {
        type: 'image',
        image: 'trekassistPostTestConcept',
        light: true,
        heading: 'Findings and Iteration',
        alt: 'TrekAssist post-usability-test prototype concept screens',
        body: [
          'Core emergency, weather, destination, and guided tour tasks were generally successful, suggesting that the large-button structure and persistent safety elements supported task recognition.',
          'Before testing, Low Power Mode was technically available, but its location depended on users discovering the settings path. After testing, the battery icon and settings relationship became a key redesign area, with future iterations pointing toward contextual low-battery prompts and more visible power-saving controls.',
          'Testing also showed that purely grayscale screens reduced visual appeal and made some information harder to distinguish, so the final direction used color selectively for safety distinction, visual orientation, hierarchy, and emotional appeal.',
        ],
      },
      {
        type: 'image',
        image: 'trekassistSettings',
        light: true,
        heading: 'Low Power Discoverability',
        alt: 'TrekAssist settings screen with battery and low power options',
        body: [
          'Because Low Power Mode was available but hard to discover, the settings and battery relationship became a key iteration area. For a solar-powered outdoor device, battery-saving controls need to be immediately visible when users need them, not treated as secondary preferences.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Final Prototype Flows',
        images: [
          'trekassistGuidedTours',
          'trekassistGuidedTourMammoth',
          'trekassistSafetyScreen',
        ],
        body: [
          'The final prototype balanced exploration and safety through scannable guided-tour cards, destination detail pages, and preventative safety content. TrekAssist supported users before, during, and after route decisions rather than only reacting to emergencies.',
        ],
      },
      {
        type: 'outcome',
        image: 'trekassistGrandPrismaticBg',
        backgroundOverlayOpacity: 0.68,
        heading: 'Reflection',
        body: [
          'TrekAssist showed how interface design changes when the product moves from a standard mobile app to a constrained outdoor device. Safety-critical and battery-related features need to be more than available; they need to be immediately discoverable, visually distinct, and understandable under stress.',
          'The e-ink display, limited refresh rate, and solar-powered battery forced the team to simplify layouts, reduce unnecessary motion, and think carefully about when color was truly necessary. The result was a process-driven UX/HFE case study balancing visitor safety, outdoor readability, power conservation, and park exploration.',
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
      quickFacts: [
        { label: 'Role', value: 'UX Designer' },
        { label: 'Methods', value: 'User research, usability testing, responsive design' },
        { label: 'Tools', value: 'Figma' },
        { label: 'Outcome', value: 'Google UX Design Certificate capstone case study' },
      ],
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
        'A shipped macOS voice-to-text utility, designed and built end-to-end as a privacy-first menu bar product with a global hotkey, real-time HUD feedback, and local Whisper support.',
      modelType: 'macosUtility',
      modelAlt: 'SayIt macOS menu bar utility preview with floating popover and hotkey workflow',
      quickFacts: [
        { label: 'Role', value: 'Designer-Builder (solo, end-to-end)' },
        { label: 'Methods', value: 'Product design, native development, on-device AI' },
        { label: 'Tools', value: 'SwiftUI, Whisper, Xcode' },
        { label: 'Outcome', value: 'Shipped macOS app with downloadable releases' },
      ],
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
