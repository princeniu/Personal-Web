export const trekassistProject = {
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
  };
