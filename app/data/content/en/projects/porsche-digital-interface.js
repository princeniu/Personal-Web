export const porscheProject = {
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
        heading: 'Internship Context',
        body: [
          'I joined Porsche Asia Pacific as a UX/UI design intern, embedded with the team responsible for evolving Porsche Communication Management — the in-car infotainment surface drivers and passengers see across navigation, media, climate, voice, and assistance features.',
          'My remit centered on the Taycan-class digital cockpit: improving how core flows like navigation, voice control, and AI-driven assistance feel under real driving conditions, then translating those decisions into component-level specs that engineering could implement without ambiguity.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        body: [
          'As in-car software gets more capable, the cost of a confusing flow goes up. A driver pulling onto a freeway should not have to think about where a control lives, whether voice is listening, or whether a system action has actually been accepted.',
          'The design challenge was to reduce flow complexity, improve interface responsiveness, and let touch, voice, and AI assistance carry the same task — so drivers could pick whichever modality was safest in the moment, instead of being locked into the one the screen happened to expose.',
        ],
      },
      {
        type: 'timeline',
        heading: 'Process Timeline',
        body: [
          'The work moved through six phases — research, mapping, low-fidelity exploration, high-fidelity design, engineering hand-off, and post-hand-off optimization — with constant back-and-forth between design intent and what the platform could render under load.',
        ],
        items: [
          {
            title: 'Discovery & Audit',
            description:
              'Reviewed existing PCM flows, competitive automotive HMIs, and driver-distraction guidance to scope which surfaces deserved redesign first.',
          },
          {
            title: 'Flow Mapping',
            description:
              'Mapped voice, navigation, cruise, lane-keeping, and parking-assist flows end to end — including failure, retry, and re-entry paths.',
          },
          {
            title: 'Wireframing',
            description:
              'Tested grid menus, quick-control bars, and voice-command surfaces in low fidelity to compare information density, reach, and glanceability.',
          },
          {
            title: 'High-Fidelity Design',
            description:
              'Refined the layout, type scale, motion, and color treatment for in-car readability across varying ambient light conditions.',
          },
          {
            title: 'Engineering Hand-Off',
            description:
              'Documented component-level UI specs, motion behavior, and edge-case states so engineering had one canonical source of truth per surface.',
          },
          {
            title: 'Performance Optimization',
            description:
              'Iterated with engineering on micro-interactions and asset weights, contributing to a 30% reduction in interface load time at hand-off.',
          },
        ],
      },
      {
        type: 'image',
        image: 'porscheFlowchart',
        light: true,
        heading: 'Mapping the Voice Flow',
        alt: 'Flowchart for Porsche Digital Interface voice command interactions',
        body: [
          'Before drawing any screens, the voice flow had to be legible end to end. The flowchart maps the listening, confirmation, action, and error-recovery paths for navigation, cruise control, lane keeping, and parking assistance — including what the system says back when it does not understand, and how the driver returns to a safe default state without staring at the screen.',
          'This artifact was as much a contract with engineering as it was a design tool: it defined which prompts were allowed where, what feedback the driver would always receive, and where AI suggestions could appear without forcing a confirmation step.',
        ],
      },
      {
        type: 'text',
        heading: 'Multimodal Design Principles',
        body: [
          'A driver\'s attention is finite and safety-critical. The same task — set a destination, change a climate setting, accept a cruise suggestion — needs to be completable through whichever modality is safest in the moment, not just the one the screen happens to surface.',
          'I worked from three principles. Every primary action should be reachable through both touch and voice. AI suggestions should be glanceable and dismissible, never a forced modal. And feedback should always confirm system state, especially after a voice command, so drivers never have to look down to verify what just happened.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Wireframes',
        images: ['porscheWireframeMain', 'porscheWireframeNavigation'],
        body: [
          'The wireframes explored a grid-based app menu, persistent quick-access controls, a voice-command bar, and real-time system status feedback. The goal was to keep the home view scannable in under a second while making sure no primary task was more than two interactions deep.',
        ],
      },
      {
        type: 'gallery',
        heading: 'High-Fidelity Prototype',
        images: ['porscheHome', 'porschePrototype'],
        body: [
          'The high-fidelity prototype brought touch, visual hierarchy, and voice assistance together. Color and motion were tuned for in-car readability, and the layout reused shared primitives so the same component behavior carried across navigation, media, and assistant surfaces.',
        ],
      },
      {
        type: 'text',
        heading: 'Optimizing for Load Time',
        body: [
          'The 30% load-time reduction came out of a tight loop with engineering during and after hand-off. Component specs were rewritten to reuse shared primitives, animation durations and asset weights were tuned for the platform\'s rendering budget, and several redundant transition states collapsed into a single canonical path.',
          'The lesson was that performance is not a downstream "engineering" concern. Design decisions about hierarchy, transition complexity, and asset choice show up directly in how the interface feels under load — so treating hand-off as a continuation of the design, not an end of it, is what made the win measurable.',
        ],
      },
      {
        type: 'metrics',
        heading: 'Impact at a Glance',
        body: [
          'Iteration on micro-interactions and component-level UI specs translated directly into measurable performance and clarity gains during the engineering hand-off.',
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
        heading: 'Reflection',
        body: [
          'Designing for an automotive HMI sharpened how I think about attention budgets, error recovery, and the cost of every extra screen. The interface that ships to a driver has to absorb context the user has no time to give it — weather, traffic, modality preference, fatigue — without forcing them to translate the system\'s state back into safety.',
          'The most valuable habit I left with was treating the engineering hand-off as part of the design itself. Measurable wins like the 30% load-time reduction were the product of design and implementation iterating together, not of either side handing finished work over the wall.',
        ],
      },
    ],
  };
