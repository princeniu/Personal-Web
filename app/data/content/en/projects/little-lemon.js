export const littleLemonProject = {
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
        heading: 'Capstone Context',
        body: [
          'Little Lemon was the capstone project for the Google UX Design Certificate — a Mediterranean neighborhood restaurant brief used to walk through the full UX process end to end. The deliverable spans research, problem definition, low- and high-fidelity prototypes, usability testing, and iteration.',
          'I treated it less as a course assignment and more as a constrained product exercise: a real restaurant\'s hardest UX problems are the same as a tech product\'s — finding what you came for quickly, completing a transaction without dropping off, and trusting the place enough to come back.',
        ],
      },
      {
        type: 'text',
        heading: 'The Challenge',
        body: [
          'Diners arrive with one of three intents: browse the menu, make a reservation, or place an order. Each one needs to be reachable in seconds, on phones first, without forcing the user through the rest of the site.',
          'The design also had to work across responsive breakpoints and stay accessible — readable type, sufficient contrast, and clear focus states — without losing the warmth that makes a neighborhood restaurant feel inviting in the first place.',
        ],
      },
      {
        type: 'timeline',
        heading: 'UX Process',
        body: [
          'The work followed the five-phase UX process the certificate is built around — empathize, define, ideate, prototype, and test — with iteration looping back to earlier phases as testing surfaced new issues.',
        ],
        items: [
          {
            title: 'Empathize',
            description:
              'User interviews and competitive scans of restaurant booking experiences to understand what diners actually need before, during, and after a reservation.',
          },
          {
            title: 'Define',
            description:
              'Synthesized findings into personas, user journeys, and a problem statement focused on first-time visitors and return diners.',
          },
          {
            title: 'Ideate',
            description:
              'Mapped the information architecture, sketched alternate layouts for menu, reservation, and ordering, and selected directions worth prototyping.',
          },
          {
            title: 'Prototype',
            description:
              'Built low-fidelity wireframes, then high-fidelity mockups in Figma covering menu browsing, reservation, ordering, and confirmation flows.',
          },
          {
            title: 'Test & Iterate',
            description:
              'Ran usability tests on key tasks, identified friction points around menu navigation and reservation steps, and refined the high-fidelity flow accordingly.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Research & User Needs',
        body: [
          'Across early interviews and competitive analysis, three needs came up repeatedly: a clear sense of "what kind of place is this" within a few seconds of landing, a menu that can be scanned without horizontal scrolling on a phone, and a reservation flow that does not bury date, time, and party size behind extra screens.',
          'Those three needs became the design constraints the rest of the work answered to. Anything that pulled attention away from them — promotional banners, oversized hero images, secondary calls to action — had to justify itself or get cut.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Interface Exploration',
        images: ['littleLemonMenu', 'littleLemonReservation'],
        body: [
          'The high-fidelity screens focus on the two flows users actually came for: scanning the menu and booking a table. Both are reachable from the home view in one tap, both stay readable on mobile without zoom, and the visual system leans on warm neutrals and clear typographic hierarchy rather than decoration.',
        ],
      },
      {
        type: 'text',
        heading: 'Usability Testing',
        body: [
          'Usability testing centered on the core flows — finding a menu item, completing a reservation, and reviewing an order. I watched for hesitation points, unexpected back-button presses, and any moment where participants asked "wait, where is…" instead of moving forward.',
          'The recurring patterns were small but real: reservation steps benefited from clearer step indication, the menu needed stronger category affordances on mobile, and confirmation states needed to feel like the end of a flow rather than an interstitial. Each of those fed directly into the next iteration.',
        ],
      },
      {
        type: 'text',
        heading: 'Accessibility & Responsive Design',
        body: [
          'Accessibility was treated as part of the visual system, not a checklist at the end. Type scales, color contrast, focus states, and tap-target sizes were defined alongside the brand palette so every screen inherited them by default.',
          'The responsive behavior keeps the same primary actions reachable from any breakpoint. On mobile, the menu and reservation entry points stay above the fold; on larger screens, the layout breathes without rearranging the underlying hierarchy.',
        ],
      },
      {
        type: 'outcome',
        image: 'littleLemonHero',
        heading: 'Reflection',
        body: [
          'Little Lemon was the project where I learned that "UX process" is not a sequence to perform — it is a feedback loop where each phase keeps recompressing the problem until the design earns its complexity. Most of the changes that mattered came from cutting things, not adding them.',
          'It also reframed how I think about visual identity in product work. The warmth of a neighborhood restaurant did not come from decoration; it came from clear hierarchy, restrained imagery, and trusting the content to carry the brand. That is a habit I have brought into every product project since.',
        ],
      },
    ],
  };
