export const featuredProjectSlugs = [
  'trekassist',
  'etongue-sensory-platform',
  'porsche-digital-interface',
  'sayit',
  'posture-checker',
];

export const legacyProjectSlugRedirects = {
  'more-work': 'all-work',
};

export const portfolioProjects = [
  {
    slug: 'etongue-sensory-platform',
    title: 'E-Tongue Sensory Decision Support Platform',
    description:
      'A human-centered decision-support platform that combines E-Tongue machine taste data with semi-trained panel feedback to help food developers compare prototypes and make Go / Tweak / Stop decisions.',
    roles: [
      'UX Researcher + UI Designer',
      'Human Factor Product Design',
      'Decision-Support UX',
      'Prototyping',
      'Usability Testing',
    ],
    summary: {
      title: 'E-Tongue Sensory Platform',
      description:
        'A Human Factor Product Design case study exploring how food developers can combine machine taste measurements with panelist perception data to make clearer early-stage product decisions.',
      modelType: 'laptop',
      modelAlt: 'E-Tongue sensory decision-support prototype shown on a laptop',
      quickFacts: [
        { label: 'Role', value: 'UX Researcher + UI Designer' },
        { label: 'Course', value: 'Human Factor Product Design' },
        { label: 'Methods', value: 'Stakeholder research, task analysis, prototyping, usability testing' },
        { label: 'Outcome', value: 'Early prototype for hybrid sensory evaluation and Go / Tweak / Stop decision support' },
      ],
    },
    sections: [
      {
        type: 'hero-image',
        image: 'etongueEarlyPrototype',
        alt: 'Early prototype walkthrough of the E-Tongue sensory decision-support platform',
      },
      {
        type: 'text',
        heading: 'Project Context',
        body: [
          'In Human Factor Product Design, our team explored how food developers could evaluate alternative product samples by combining two very different forms of evidence: E-Tongue machine taste measurements and feedback from semi-trained sensory panelists.',
          'The design challenge was not just to display more data. We needed to help teams compare samples, understand disagreement between machine readings and human perception, and move from raw sensory evidence toward a clearer product decision.',
        ],
      },
      {
        type: 'image-text',
        image: 'etongueDeviceContext',
        heading: 'Understanding the Sensing System',
        alt: 'Commercial E-Tongue taste sensing instrument used as domain reference',
        body: [
          'The project began with a physical sensing system, not just a screen. E-Tongue workflows involve preparing samples, running machine measurements, and interpreting outputs that are meaningful to food-science teams but not always transparent to broader product stakeholders.',
          'Using the device context from our course research helped us design the platform around the real handoff point: turning technical measurements into decisions that a development team can discuss, trust, and act on.',
        ],
      },
      {
        type: 'text',
        heading: 'The UX Problem',
        body: [
          'Machine taste data can be precise and repeatable, but it is difficult to interpret without domain context. Human panel feedback is richer and closer to real perception, but it can be subjective, slow, and inconsistent across participants.',
          'We framed the core UX problem as decision support: how might a platform help food developers understand what changed between samples, why it matters, and whether the next step should be Go, Tweak, or Stop?',
        ],
      },
      {
        type: 'image',
        image: 'etongueIssfDashboard',
        heading: 'Platform Concept: ISSF Dashboard',
        alt: 'ISSF Dashboard showing mixed panel method with E-Tongue + semi-trained data achieving 94% accuracy',
        body: [
          'The ISSF Dashboard translates the mixed-method vision into a working surface. A status line communicates the core methodology — Semi-trained panel + E-Tongue + GC-O — backed by accuracy (94%), correlation (r=0.91), and sample size (n=127), giving food developers a clear line of evidence confidence before they even begin comparing prototypes.',
          'Each sample card surfaces a hedonic score at a glance, while the dashboard panels for CATA attributes, intensity ratings, and emotional profiles let developers drill into the specific evidence behind every number.',
        ],
      },
      {
        type: 'timeline',
        heading: 'Process Timeline',
        body: [
          'The project moved from domain discovery into task analysis, concept selection, role-based workflows, early prototyping, and formative usability testing.',
        ],
        items: [
          {
            title: 'Client & Domain Discovery',
            description:
              'We reviewed the sensory-evaluation workflow, E-Tongue data outputs, and the decisions food developers need to make when comparing product prototypes.',
          },
          {
            title: 'Task Analysis',
            description:
              'We mapped how different users would configure samples, collect panelist responses, interpret machine testing, and compare evidence across products.',
          },
          {
            title: 'Concept Direction',
            description:
              'We compared dashboard, comparison-tool, and decision-support directions, then prioritized a workflow that could translate evidence into actionable recommendations.',
          },
          {
            title: 'Role-Based Prototype',
            description:
              'We separated the experience into panelist-facing questionnaires and food-developer-facing analysis views so each role could focus on the right level of detail.',
          },
          {
            title: 'Formative Testing',
            description:
              'We ran think-aloud usability sessions to observe questionnaire clarity, terminology comprehension, navigation behavior, and confusion around rating scales.',
          },
        ],
      },
      {
        type: 'image',
        image: 'etongueEarlyPrototype',
        heading: 'Early Prototype Walkthrough',
        alt: 'Video walkthrough of the early E-Tongue sensory platform prototype',
        body: [
          'This early prototype walkthrough shows the team\'s first end-to-end product direction: role-based entry, sample workflows, sensory questionnaire interactions, and the beginnings of a decision-support layer for interpreting results.',
          'We are intentionally treating this as process evidence rather than a final polished product. The value of the prototype was that it made the workflow concrete enough to critique, test, and iterate.',
        ],
      },
      {
        type: 'text',
        heading: 'Designing for Hybrid Sensory Evidence',
        body: [
          'The platform concept connected panelist tasks such as CATA selection, intensity ratings, hedonic ratings, and emotional response with developer tasks such as configuring samples, reviewing machine testing, analyzing agreement, and making final product calls.',
          'Instead of asking users to manually reconcile every chart and response, the experience emphasized interpretation: confidence, rationale, agreement patterns, off-note detection, and clear Go / Tweak / Stop recommendations.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Hybrid Evidence in Practice',
        images: ['etongueTasteProfile', 'etongueIssfScore'],
        body: [
          'Two views of the same hybrid evidence workflow. The Taste Profile radar visualizes 9-axis E-Tongue output — sourness through richness — from the Insent TS-5000Z with precise measurement conditions (2:5 dilution, 40°C, 7000rpm). The ISSF Score view combines machine data with panelist feedback into a single actionable recommendation: Go, Tweak, or Stop — with confidence, risk level, and estimated savings.',
          'Together, these surfaces let developers move between the raw sensory signal and the product-level decision without losing traceability back to the evidence.',
        ],
      },
      {
        type: 'gallery',
        heading: 'Final Prototype: ISSF Platform',
        images: [
          'etonguePrototypeMachineTesting',
          'etonguePrototypeAnalyzeResults',
          'etonguePrototypeFinalDecision',
          'etonguePrototypeConfigureProducts',
        ],
        body: [
          'The final prototype materialized the ISS-F platform across four core views. Machine Testing lets teams compare up to 12 product samples and 2 dairy controls across E-Tongue, GC-O aroma, and chemical composition data. Analyze Results surfaces CATA attributes, intensity ratings, hedonic scores, and emotional profiles from semi-trained panelists alongside machine readings.',
          'Final Decision translates the hybrid evidence into Go / Tweak / Stop recommendations — each backed by ISSF confidence scores, sensory profiles, trained-panel validation deltas, and estimated cost savings. Configure Products supports administrator workflows for creating evaluation sessions, managing panelist rosters, and tracking product status through Active → Complete.',
        ],
      },
      {
        type: 'image-text',
        image: 'etongueSensorCloseup',
        heading: 'From Sensor Readings to Decision Cues',
        alt: 'Close-up of E-Tongue sensor probes used as context for sensing workflow design',
        body: [
          'The sensing hardware made the hidden complexity of the workflow visible: multiple probes, repeated measurements, calibration expectations, and sample-level comparisons all sit behind the simple question of whether a food prototype is ready to move forward.',
          'That complexity shaped our interface priorities. We wanted the platform to preserve technical credibility while still giving users a readable path from sensor evidence to product-level interpretation.',
        ],
      },
      {
        type: 'metrics',
        heading: 'Testing Snapshot',
        body: [
          'Our usability testing was formative: the goal was to identify where terminology, scale design, and workflow expectations could break down before the system became more polished.',
        ],
        metrics: [
          { value: '3', label: 'Panelist participants tested' },
          { value: '19–60', label: 'Participant age range' },
          { value: '3', label: 'Core questionnaire tasks observed' },
        ],
        evidence: [
          {
            label: 'Terminology support',
            value:
              'Participants found in-flow definitions helpful, especially when sensory terms were unfamiliar or technically specific.',
          },
          {
            label: 'Scale clarity',
            value:
              'Inconsistent scoring formats and unclear emotional-response labels created confusion and became a priority for iteration.',
          },
          {
            label: 'Workflow expectation',
            value:
              'Testing surfaced moments where users expected clearer start states, stronger progress cues, and more consistent interaction patterns.',
          },
        ],
      },
      {
        type: 'outcome',
        image: 'etongueSensorCloseup',
        heading: 'Reflection',
        body: [
          'This project showed that complex data products do not become usable just by adding dashboards. When people need to make decisions under uncertainty, the interface has to organize evidence, surface tradeoffs, and explain why a recommendation is being made.',
          'For our team, the most important shift was moving from data visualization toward decision-support UX: designing a shared interpretation layer between machine measurements, human perception, and the next product-development action.',
        ],
      },
    ],
  },
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
        type: 'text',
        heading: 'Why Posture, Why Build the Hardware Too',
        body: [
          'I spend most of my day at a desk, and most existing posture apps either rely on the phone\'s gyroscope (which only works when the phone is strapped to your back) or on camera-based detection (which forces a specific seating position and feels invasive). Neither survives a normal workday.',
          'I wanted to test whether a small dedicated sensor — paired over Bluetooth Low Energy with a phone the user already carries — could close that gap: continuous, low-friction, privacy-respecting feedback that still lives in a familiar mobile interface.',
        ],
      },
      {
        type: 'text',
        heading: 'Problem Discovery',
        body: [
          'A scan of existing posture apps showed a recurring pattern: real-time feedback was either intrusive (frequent buzzes for momentary slouches) or absent (only end-of-day summaries). Long-term behavior change needs the middle ground — feedback that fires when posture is genuinely poor for long enough to matter, paired with trends the user can look back on without effort.',
          'That framing gave the project two non-negotiables: (1) a sensor that captures posture continuously without depending on phone placement, and (2) a feedback loop that respects the user\'s attention while still being useful day to day.',
        ],
      },
      {
        type: 'timeline',
        heading: 'Process Timeline',
        body: [
          'As a solo designer-builder, I treated the project as one continuous loop: design constraints fed hardware decisions, hardware behavior reshaped the UI, and the UI exposed new questions for the data layer.',
        ],
        items: [
          {
            title: 'Research',
            description:
              'Audited posture apps and wearables; defined target users (knowledge workers and students with sedentary days) and the core feedback gap.',
          },
          {
            title: 'Hardware Prototyping',
            description:
              'Built an Arduino-based posture sensor with BLE broadcast to validate that a small, battery-friendly device could stream posture data continuously.',
          },
          {
            title: 'System Architecture',
            description:
              'Defined the data flow from sensor to React Native app to local storage and Firebase, including reconnection and offline behavior.',
          },
          {
            title: 'UX Design',
            description:
              'Wireframed a single-dashboard mobile experience around live status, daily goals, trends, and quick settings.',
          },
          {
            title: 'BLE Integration',
            description:
              'Implemented the pairing flow, live data stream, and reconnection handling — the part of the system most likely to fail silently in the real world.',
          },
          {
            title: 'Feedback Loop Tuning',
            description:
              'Added thresholded push notifications so the app reacts to sustained poor posture instead of every momentary slouch, then refined trends and history surfaces around what users would actually want to look back on.',
          },
        ],
      },
      {
        type: 'image-text',
        image: 'postureArchitecture',
        light: true,
        heading: 'System Architecture',
        alt: 'Posture Checker app system architecture diagram',
        body: [
          'The architecture spans a BLE-enabled posture sensor, a React Native client (iOS + Android), local storage for offline resilience, Firebase for sync and auth, charting for trends, and push notifications for the corrective feedback loop. Designing this end-to-end as one person meant every layer had to stay deliberately simple.',
        ],
      },
      {
        type: 'image-text',
        image: 'postureActivity',
        heading: 'User Activity Flow',
        alt: 'Posture Checker app user activity flow',
        body: [
          'The user flow covers app launch, Bluetooth pairing, device detection, real-time posture analysis, corrective notifications, and progress visualization. Pairing was treated as a first-class moment — not a hidden settings step — because the value of the entire product depends on it succeeding the first time.',
        ],
      },
      {
        type: 'text',
        heading: 'Hardware & Connectivity Decisions',
        body: [
          'BLE was chosen over USB or Wi-Fi for three reasons: it preserves all-day battery life on a small wearable, it pairs cleanly with a phone the user already carries, and its connection model (advertise → connect → stream) maps onto a mobile UX that can recover gracefully from disconnects.',
          'Sampling was set to 1 Hz. Higher rates added battery cost and noise without changing the behavioral signal — sustained posture over many seconds is what matters, not millisecond-level twitches. Local storage holds the raw stream so trends and history work even when the network is unavailable.',
        ],
      },
      {
        type: 'image',
        image: 'postureWireframe',
        light: true,
        heading: 'Wireframes',
        alt: 'Posture Checker app wireframes',
        body: [
          'Wireframes organized posture status, daily goals, settings, stats, and core navigation into a single-dashboard structure. The bet was that a quick check-in (a few seconds, a few times a day) is more useful than a deep app the user has to "open and explore."',
        ],
      },
      {
        type: 'image',
        image: 'posturePrototype',
        dark: true,
        heading: 'High-Fidelity Prototype',
        alt: 'Posture Checker high-fidelity prototype screens',
        body: [
          'The high-fidelity prototype tightens tracking, goal progress, analytics, and settings into an approachable surface for repeated daily use. Information density was intentionally low: the home view answers "how am I sitting right now?" before anything else.',
        ],
      },
      {
        type: 'comparison-columns',
        image: 'postureFinalApp',
        light: true,
        heading: 'Designing the Feedback Loop',
        alt: 'Posture Checker final app screen',
        body: [
          'The riskiest UX decision in the product was when to interrupt the user. Notifying on every slouch trains the user to ignore the app; only summarizing at end-of-day misses the moment when correction matters.',
          'I settled on a sustained-threshold model: feedback fires when poor posture persists past a configurable duration. Combined with trend visualizations, it turns the app from a nag into a habit-building surface — the user sees "today vs. yesterday" instead of just "you are slouching, again."',
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
        heading: 'Reflection',
        body: [
          'Posture Checker was the project where I stopped treating "design" and "engineering" as separate phases. The hardware constraints (battery, sampling rate, BLE reconnection) reshaped the UI; the UI revealed which data the system actually needed to keep; and the feedback loop only worked once design intent and the data pipeline were tuned together.',
          'The shipped build proved that a single designer-builder can take a hardware-integrated mobile product from concept through a working multi-screen experience. The next iteration I would prioritize is on-device trend modeling — closing more of the feedback loop without requiring a cloud round-trip.',
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
          'SayIt started from a simple productivity gap. System dictation surfaces a modal that interrupts writing flow. Cloud transcription tools work, but they round-trip every word through somebody else\'s server, and they break the moment the network does.',
          'The goal was a menu bar utility that feels as immediate and native as a system shortcut: trigger from anywhere with a global hotkey, transcribe locally, and paste the result without ever leaving the window the user is already in.',
        ],
      },
      {
        type: 'text',
        heading: 'Why a Menu Bar Utility',
        body: [
          'A full-window app would have undercut the entire point. Voice-to-text only works as a productivity primitive when it disappears between uses — visible enough to invoke, quiet enough to ignore. The menu bar gives the app a permanent home without ever owning a workspace, which is the ergonomics the product needed.',
          'Building it as a native macOS app (rather than an Electron wrapper) was a deliberate choice. The product is judged against system utilities, not against other apps; it has to feel like Spotlight, not like a browser tab.',
        ],
      },
      {
        type: 'timeline',
        heading: 'From Idea to v1.0.5',
        body: [
          'SayIt was designed and built end to end as one person, then shipped publicly through GitHub Releases. The phases below trace the path from a SwiftUI sketch to a signed and notarized macOS binary.',
        ],
        items: [
          {
            title: 'Concept',
            description:
              'Defined the product as a menu bar dictation utility — global hotkey, single primary action, no full-window UI, on-device by default.',
          },
          {
            title: 'SwiftUI Prototype',
            description:
              'Stood up the popover surface, microphone selector, and engine settings to validate that the entire interaction could live inside a small floating panel.',
          },
          {
            title: 'whisper.cpp Integration',
            description:
              'Wired in on-device Whisper for fully local transcription, including model selection and fallback behavior when a model is missing or downloading.',
          },
          {
            title: 'Hotkey & Permissions',
            description:
              'Implemented global hotkey capture, microphone access prompts, and Accessibility-permission flows so the app could be triggered from any active window.',
          },
          {
            title: 'Notarization & Distribution',
            description:
              'Set up signing, notarization, and a GitHub Releases pipeline so the app installs cleanly on macOS without Gatekeeper warnings.',
          },
          {
            title: 'Public Release (v1.0.5)',
            description:
              'Iterated through five public versions, refining microphone resilience, HUD feedback, and onboarding based on usage in my own daily workflow.',
          },
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverIdle',
        heading: 'Product Surface & Core Controls',
        alt: 'SayIt popover showing microphone, engine, and start recording controls',
        body: [
          'The product centers on a compact popover: a single primary action, a microphone selector, a transcription engine choice, and lightweight status messaging. The interface stays quiet until needed, matching the expectation of a utility — not a traditional full-window app.',
          'The design decision behind this surface was to resist feature creep. Every additional control would have pulled the app further away from "press hotkey, talk, paste."',
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverRecording',
        heading: 'One-Toggle Recording Flow',
        alt: 'SayIt popover during active recording and transcription workflow',
        body: [
          'Interaction was reduced to a reliable toggle: start recording, stop and transcribe, then copy the result automatically. Supporting states — recording duration, live audio level, slow-transcription hints, and HUD feedback in the menu bar — keep the app understandable without becoming visually heavy.',
          'The HUD itself does most of the work. Once the hotkey is muscle memory, the user does not need to look at the popover at all; the menu bar icon and a brief overlay are enough to confirm the system is doing the right thing.',
        ],
      },
      {
        type: 'text',
        heading: 'On-Device, Always',
        body: [
          'Choosing whisper.cpp over a cloud API was a product decision before it was a technical one. Local transcription means the app keeps working offline, never sees a per-request bill, and gives users a credible privacy story — voice is sensitive data, and "we don\'t send it anywhere" is a much stronger guarantee than any privacy policy.',
          'The trade-off is model size and cold-start cost. The app exposes engine and model selection so users on lighter machines can pick a smaller model, while users who care more about accuracy can opt into a larger one.',
        ],
      },
      {
        type: 'text',
        heading: 'The Permissions & Hotkey Wall',
        body: [
          'The hardest part of shipping a macOS utility is not the feature — it is the trust gradient the OS demands. SayIt needs Microphone access to capture audio and Accessibility access to paste into other apps. Each prompt is a place users can drop off, and each one is rendered by macOS, not by the app.',
          'The fix was to design the onboarding around those prompts instead of around the app\'s own UI: explain why each permission is needed before macOS asks, and give the user a recoverable path back to permissions in System Settings if they decline. The hotkey itself uses standard global hotkey APIs, with a settings surface that lets the user rebind it without restarting the app.',
        ],
      },
      {
        type: 'image-text',
        image: 'sayitIphoneMic',
        heading: 'Device Resilience & Ecosystem Fit',
        alt: 'iPhone Continuity microphone connected to SayIt on macOS',
        body: [
          'Microphone reliability turned out to be the most fragile part of the product. Devices appear and disappear constantly — Bluetooth headsets, external interfaces, Continuity mics, lid closures — and a transcription utility that loses input mid-sentence is worse than one that never started.',
          'The app handles device changes explicitly: it watches for input route changes, falls back to a sensible default when the chosen mic disappears, and supports Continuity microphone handoff so iPhone-as-mic works in clamshell and external-monitor setups without any extra setup from the user.',
        ],
      },
      {
        type: 'text',
        heading: 'Shipping a Notarized macOS App',
        body: [
          'The codebase had to clear three bars to be installable by anyone but me: code signing with a valid Developer ID certificate, Apple notarization for Gatekeeper, and a clean release artifact distributed through GitHub Releases.',
          'Each of those steps is small in isolation and brutal in combination — entitlements, hardened runtime, notary submission, stapling, and download-link plumbing all have to align before a stranger can double-click the app and have it just open. Getting that pipeline reliable is what made shipping v1.0.5 possible without manual intervention each time.',
        ],
      },
      {
        type: 'metrics',
        heading: 'Build Snapshot',
        body: [
          'SayIt is a small product by surface area and a meaningful one by depth — every layer (audio capture, transcription, permissions, distribution) had to be production-ready for a single user double-clicking a downloaded binary to have a clean experience.',
        ],
        metrics: [
          { value: 'v1.0.5', label: 'Public release on GitHub Releases' },
          { value: '5', label: 'Iterations refining microphone, HUD, and onboarding' },
          { value: '100%', label: 'On-device transcription via whisper.cpp' },
          { value: '2', label: 'System permissions surfaced (Microphone · Accessibility)' },
        ],
        evidence: [
          {
            label: 'End-to-end execution',
            value:
              'Designed and built solo across product surface, audio pipeline, transcription engine, permissions UX, and signed/notarized distribution.',
          },
          {
            label: 'Privacy-first by default',
            value:
              'Audio never leaves the device — whisper.cpp runs locally, with model selection exposed so users can trade accuracy for speed on their own hardware.',
          },
          {
            label: 'Resilient to real ecosystems',
            value:
              'Handles input device changes, supports Continuity microphone handoff, and degrades predictably when permissions or models are missing.',
          },
        ],
      },
      {
        type: 'outcome',
        image: 'sayitBrand',
        heading: 'Reflection',
        body: [
          'SayIt is the project where I stopped designing for a deck and started designing for a binary. Every decision — popover density, HUD timing, model choice, permission copy — got tested against the same question: does this still feel like a system utility, or does it feel like an app?',
          'For the portfolio, SayIt is the strongest example of end-to-end product execution I have: identifying a focused problem, shaping the interaction model, choosing the right technology, and delivering a signed, notarized macOS product that real users can download and use today.',
        ],
      },
    ],
  },
];

export const resolveProjectSlug = slug => legacyProjectSlugRedirects[slug] ?? slug;

export const getProjectPath = slug => `/projects/${slug}`;
