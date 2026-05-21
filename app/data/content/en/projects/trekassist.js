export const trekassistProject = {
  slug: 'trekassist',
  title: 'TrekAssist',
  description:
    'A solar-powered e-ink guide for Yellowstone visitors, shaped through UX/HFE research to support outdoor navigation, emergency response, safety alerts, and low-power interaction.',
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
      'A team UX/HFE case study for a solar-powered outdoor e-ink device, tested with 9 participants across 6 tasks covering navigation, emergency support, and low-power interaction.',
    modelType: 'laptop',
    modelAlt: 'TrekAssist e-ink national park guide interface shown on a laptop',
    quickFacts: [
      { label: 'Role', value: 'UX / Human Factors Designer (team)' },
      { label: 'Methods', value: 'UI design, usability testing (n=9), task scenarios, flow mapping' },
      { label: 'Tools', value: 'Figma, e-ink prototyping' },
      { label: 'Outcome', value: 'Validated safety flows; identified Low Power discoverability issue' },
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
        'TrekAssist is a solar-powered e-ink guide concept for visitors exploring Yellowstone National Park. As a team UX/HFE project, it asked how a dedicated outdoor device could help people navigate unfamiliar terrain, notice weather and safety alerts, reach emergency support, and protect battery life during long trips.',
        'This was not a standard mobile travel app. The device had an 800×600 landscape e-ink display, limited color, and a maximum refresh rate of 1Hz. Those constraints pushed the interface toward static layouts, larger controls, persistent safety information, and color reserved for moments that needed attention.',
      ],
    },
    {
      type: 'text',
      heading: 'Problem Context',
      body: [
        'National park visitors often make decisions with incomplete information. Weather shifts, trail signs can be confusing, wildlife encounters introduce risk, and phone signal or battery may not be reliable.',
        'The interface needed to help visitors understand where they are, catch important alerts, contact help quickly, browse guided tours and destinations, prepare for hikes, and conserve power without digging through settings.',
      ],
    },
    {
      type: 'timeline',
      heading: 'Process Timeline',
      body: [
        'The process treated TrekAssist as a constrained UX/HFE problem rather than a static screen concept.',
      ],
      items: [
        {
          title: 'Concept Exploration',
          description: 'Defined the park-visitor problem space and outdoor device constraints.',
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
          description: 'Tested 9 participants across 6 task scenarios.',
        },
        {
          title: 'Findings Synthesis',
          description: 'Found strong emergency/navigation performance and a Low Power discoverability problem.',
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
        'Our team explored safety-first and discovery-led directions before combining them into a park guide centered on safety, navigation clarity, and power-aware interaction. Flow mapping helped decide what belonged at the top level and what needed to stay visible across screens.',
      ],
    },
    {
      type: 'image',
      image: 'trekassistSafetyFlow',
      light: true,
      heading: 'Safety-Critical Flow Planning',
      alt: 'TrekAssist safety user interface flow diagram',
      body: [
        'Safety functions were not buried inside separate sections. The interface kept three things globally available: a top alert ribbon for active warnings, an Emergency button, and accessible settings and battery indicators. That structure supported ordinary exploration as well as urgent safety moments.',
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
        'Weather alerts stayed visible in a persistent top ribbon and could expand into a focused modal when the warning required attention. Emergency contact stayed globally available, with a confirmation step to reduce accidental activation without slowing down real requests for help.',
        'The map placed wayfinding, active warnings, destination context, battery access, and emergency support in one static layout that could work on a low-refresh e-ink display.',
      ],
    },
    {
      type: 'text',
      heading: 'Usability Testing',
      body: [
        'To evaluate the prototype, our team tested 9 participants on six tasks: checking weather warnings, contacting a ranger through Emergency, starting a guided tour to Mammoth Hot Springs, finding Yellowstone Lake information, locating long-hike safety tips, and activating Low Power Mode.',
        'We recorded task completion, time on task, errors, attempts, ease ratings, and qualitative feedback. Completion alone was not enough. We wanted to see where the interface created hesitation, confusion, or extra effort.',
      ],
    },
    {
      type: 'metrics',
      heading: 'Testing Snapshot',
      body: [
        'The test combined performance metrics with participant comments, making it clear where the interface supported safety behavior and where it asked users to work too hard.',
      ],
      metrics: [
        { value: '9', label: 'Participants' },
        { value: '6', label: 'Task Scenarios' },
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
            'Low Power Mode existed, but participants did not consistently discover where to activate it.',
        },
        {
          label: 'Design implication',
          value:
            'Battery access and power-saving prompts needed to be more visible, contextual, and directly tied to battery state.',
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
        'Emergency, weather, destination, and guided-tour tasks were generally successful, which suggested that the large-button structure and persistent safety elements helped users recognize where to go.',
        'Low Power Mode was technically available before testing, but it depended on users finding the right settings path. After testing, the battery icon and settings relationship became a redesign priority, pointing toward contextual low-battery prompts and more visible power controls.',
        'Testing also showed that purely grayscale screens reduced visual appeal and made some information harder to distinguish. The final direction used color selectively for safety distinction, orientation, hierarchy, and warmth.',
      ],
    },
    {
      type: 'image',
      image: 'trekassistSettings',
      light: true,
      heading: 'Low Power Discoverability',
      alt: 'TrekAssist settings screen with battery and low power options',
      body: [
        'Because Low Power Mode existed but was hard to find, the relationship between settings and battery state became a key iteration area. For a solar-powered outdoor device, power-saving controls should appear when users need them, not sit quietly as secondary preferences.',
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
        'The final prototype balanced exploration and safety through scannable guided-tour cards, destination detail pages, and preventative safety content. TrekAssist supports people before, during, and after route decisions, instead of only reacting once something goes wrong.',
      ],
    },
    {
      type: 'outcome',
      image: 'trekassistGrandPrismaticBg',
      backgroundOverlayOpacity: 0.68,
      heading: 'Reflection',
      body: [
        'TrekAssist showed how much interface design changes when the product moves from a phone app to a constrained outdoor device. Safety and battery features cannot merely exist. Under stress, they need to be discoverable, visually distinct, and easy to understand.',
        'The e-ink display, limited refresh rate, and solar-powered battery forced the team to simplify layouts, avoid unnecessary motion, and be selective with color. The result is a process-led UX/HFE case study about visitor safety, outdoor readability, power conservation, and park exploration.',
      ],
    },
  ],
};
