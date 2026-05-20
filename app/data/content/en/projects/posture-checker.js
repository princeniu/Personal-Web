export const postureProject = {
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
  };
