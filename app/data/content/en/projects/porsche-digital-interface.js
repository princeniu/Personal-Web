export const porscheProject = {
  slug: 'porsche-digital-interface',
  title: 'Porsche Digital Interface',
  description:
    'UX/UI internship work for Porsche Communication Management, with a focus on navigation flows, voice interaction, and safer multimodal control in the Taycan cockpit.',
  roles: ['UX Research', 'UX Design', 'UI Design', 'Product Design', 'Prototyping'],
  summary: {
      title: 'Porsche Digital Interface',
      description:
        'Automotive HMI work for Porsche Communication Management. I worked on navigation and voice interaction flows, then translated design decisions into prototypes and specs the team could use.',
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
          'I joined Porsche Asia Pacific as a UX/UI design intern on work related to Porsche Communication Management, the in-car infotainment surface drivers and passengers use for navigation, media, climate, voice, and assistance features.',
          'My work centered on the Taycan-class digital cockpit: improve navigation, voice control, and AI-assisted flows under driving conditions, then turn those design decisions into component-level specs engineering could implement clearly.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem',
        body: [
          'As in-car software gets more capable, the cost of a confusing flow goes up. A driver pulling onto a freeway should not have to think about where a control lives, whether voice is listening, or whether a system action has actually been accepted.',
          'The design challenge was to reduce flow complexity, improve interface responsiveness, and let touch, voice, and AI assistance support the same task. Drivers should be able to use the safest modality in the moment, even when that control is not the one most visible on screen.',
        ],
      },
      {
        type: 'timeline',
        heading: 'Process Timeline',
        body: [
          'The work moved through research, flow mapping, low-fidelity exploration, high-fidelity design, engineering hand-off, and post-hand-off optimization. The important part was the back-and-forth between design intent and what the platform could render under load.',
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
              'Mapped voice, navigation, cruise, lane-keeping, and parking-assist flows, including failure, retry, and re-entry paths.',
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
          'Before drawing any screens, the voice flow had to be readable from trigger to recovery. The flowchart maps listening, confirmation, action, and error-recovery paths for navigation, cruise control, lane keeping, and parking assistance. It also covers what the system says when it does not understand, and how the driver gets back to a safe default state without staring at the screen.',
          'This artifact was as much a contract with engineering as it was a design tool: it defined which prompts were allowed where, what feedback the driver would always receive, and where AI suggestions could appear without forcing a confirmation step.',
        ],
      },
      {
        type: 'text',
        heading: 'Multimodal Design Principles',
        body: [
          'A driver\'s attention is finite and safety-critical. Setting a destination, changing climate, or accepting a cruise suggestion should work through whichever modality is safest in the moment, not only through the control currently visible on screen.',
          'I worked from three principles: primary actions should be reachable through both touch and voice, AI suggestions should be glanceable and dismissible, and feedback should always confirm system state after a command. The driver should not have to look down just to verify what happened.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Wireframes',
        images: ['porscheWireframeMain', 'porscheWireframeNavigation'],
        body: [
          'The wireframes explored a grid-based app menu, persistent quick-access controls, a voice-command bar, and system status feedback. The home view needed to be readable in a quick glance, with primary tasks no more than two interactions deep.',
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
          'The lesson was that performance is not a downstream "engineering" concern. Hierarchy, transition complexity, and asset choice all affect how the interface feels under load. Treating hand-off as a continuation of design, not the end of it, is what made the win measurable.',
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
              'Flows spanned touch, voice command, and AI-driven assistance, so drivers could complete the same task through whichever modality was safer in the moment.',
          },
        ],
      },
      {
        type: 'outcome',
        image: 'porscheOutcome',
        heading: 'Reflection',
        body: [
          'Designing for an automotive HMI sharpened how I think about attention budgets, error recovery, and the cost of every extra screen. The interface has to account for context the driver has no time to explain: weather, traffic, modality preference, fatigue. It cannot make the driver translate system state back into safety.',
          'The most valuable habit I left with was treating the engineering hand-off as part of the design itself. Measurable wins like the 30% load-time reduction were the product of design and implementation iterating together, not of either side handing finished work over the wall.',
        ],
      },
    ],
};
