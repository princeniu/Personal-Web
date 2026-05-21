export const littleLemonProject = {
  slug: 'little-lemon',
  title: 'Little Lemon Restaurant',
  description:
    'A restaurant booking and ordering experience for clearer navigation, accessible mobile use, and a reservation flow that gets out of the diner’s way.',
  roles: ['User Research', 'UX Design', 'Interface Design', 'Responsive Design'],
  summary: {
    title: 'Little Lemon',
    description:
      'A Google UX Design Certificate capstone on restaurant browsing, reservations, and ordering, refined through user research and usability testing.',
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
      heading: 'Capstone Context',
      body: [
        'Little Lemon was my capstone project for the Google UX Design Certificate, built around a Mediterranean neighborhood restaurant brief. The assignment covered the full UX process: research, problem definition, early wireframes, polished prototypes, usability testing, and iteration.',
        'I treated it as a small product exercise rather than a checkbox course project. A restaurant site has the same basic pressure as many digital products: people arrive with a task, need confidence quickly, and leave if the path feels harder than it should.',
      ],
    },
    {
      type: 'text',
      heading: 'The Challenge',
      body: [
        'Diners usually arrive with one of three intents: browse the menu, make a reservation, or place an order. Each path needs to be reachable within seconds on a phone, without forcing users through the rest of the site.',
        'The design also needed to work across responsive breakpoints and stay accessible through readable type, sufficient contrast, clear focus states, and tap targets large enough for real use. The harder part was keeping that clarity without making the restaurant feel generic.',
      ],
    },
    {
      type: 'timeline',
      heading: 'UX Process',
      body: [
        'The work followed the certificate’s five-phase UX process: empathize, define, ideate, prototype, and test. Testing then pulled earlier decisions back into revision.',
      ],
      items: [
        {
          title: 'Empathize',
          description:
            'Used interviews and competitive scans of restaurant booking experiences to understand what diners need before, during, and after a reservation.',
        },
        {
          title: 'Define',
          description:
            'Synthesized findings into personas, user journeys, and a problem statement for first-time visitors and return diners.',
        },
        {
          title: 'Ideate',
          description:
            'Mapped the information architecture, sketched menu, reservation, and ordering layouts, and selected directions worth prototyping.',
        },
        {
          title: 'Prototype',
          description:
            'Built low-fidelity wireframes and polished Figma mockups covering menu browsing, reservation, ordering, and confirmation flows.',
        },
        {
          title: 'Test & Iterate',
          description:
            'Ran usability tests on key tasks, found friction in menu navigation and reservation steps, and revised the final flow.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Research & User Needs',
      body: [
        'Across early interviews and competitive analysis, three needs kept coming up: users needed to understand the restaurant within a few seconds, scan the menu on a phone without horizontal scrolling, and reserve a table without date, time, and party size being buried behind extra screens.',
        'Those needs became the guardrails for the rest of the design. Promotional banners, oversized hero images, and secondary calls to action all had to earn their space or be removed.',
      ],
    },
    {
      type: 'gallery',
      heading: 'Interface Exploration',
      images: ['littleLemonMenu', 'littleLemonReservation'],
      body: [
        'The final screens center on the two flows diners came for most often: scanning the menu and booking a table. Both are reachable from the home view in one tap, both stay readable on mobile without zoom, and the visual system uses warm neutrals and clear type hierarchy instead of decorative noise.',
      ],
    },
    {
      type: 'text',
      heading: 'Usability Testing',
      body: [
        'Usability testing centered on finding a menu item, completing a reservation, and reviewing an order. I watched for hesitation, unexpected back-button presses, and any moment where participants paused because they could not tell where to go next.',
        'The issues were small but useful: reservation steps needed clearer progress indication, menu categories needed stronger affordances on mobile, and confirmation states needed to feel like the end of a flow rather than a waiting room. Those findings fed directly into the next iteration.',
      ],
    },
    {
      type: 'text',
      heading: 'Accessibility & Responsive Design',
      body: [
        'Accessibility was treated as part of the visual system, not a checklist at the end. Type scales, color contrast, focus states, and tap-target sizes were defined alongside the brand palette so every screen inherited them by default.',
        'The responsive behavior keeps the same primary actions reachable at every breakpoint. On mobile, the menu and reservation entry points stay near the top; on larger screens, the layout gains space without changing the underlying hierarchy.',
      ],
    },
    {
      type: 'outcome',
      image: 'littleLemonHero',
      heading: 'Reflection',
      body: [
        'Little Lemon taught me that the UX process is not a sequence to perform for a case study. It is a way to keep compressing the problem until the interface only contains what has earned its place.',
        'It also changed how I think about visual identity in product work. The warmth of a neighborhood restaurant did not come from decoration. It came from clear hierarchy, restrained imagery, and letting the content carry the brand. That restraint has stayed with me in later product work.',
      ],
    },
  ],
};
