export const hermesIosCompanionProject = {
  slug: 'hermes-ios-companion',
  title: 'Hermes iOS Companion',
  description:
    'An independently built, self-hosted iOS control surface for Hermes Agent. It keeps conversations, execution status, security approvals, voice input, and iOS system surfaces connected across private Mac and VPS instances.',
  roles: ['Product Design', 'SwiftUI', 'iOS Systems', 'AI Agent UX', 'Security', 'Reliability'],
  summary: {
    title: 'Hermes iOS Companion',
    description:
      'A self-hosted iOS companion I designed and built to continue AI agent sessions, inspect tool execution, approve sensitive actions, and receive task status from private Mac and VPS instances.',
    modelType: 'phone',
    modelAlt: 'Hermes iOS Companion approval and execution trace screens running with sanitized simulator fixtures',
    quickFacts: [
      { label: 'Role', value: 'Solo designer and iOS engineer' },
      { label: 'Stack', value: 'SwiftUI, SSE, APNs, ActivityKit, Tailscale' },
      { label: 'Deployment', value: 'Physical iPhone, Mac and VPS private beta' },
      { label: 'Validation', value: '595 unit tests plus focused UI and device acceptance' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'hermesIosHeroEn',
      alt: 'Hermes iOS Companion, a self-hosted mobile control surface for AI agents',
    },
    {
      type: 'text',
      heading: 'Overview',
      body: [
        'Hermes iOS Companion is an independently built mobile control surface for the open-source Hermes Agent. It lets me continue conversations, inspect tool execution, handle security approvals, use voice input, and follow long-running tasks when I am away from the computer that hosts the agent.',
        'The project is a deployed personal system and private beta, not a general consumer chat app. I designed and built the iOS client, its interaction model, gateway protocol integration, security boundaries, and Apple platform surfaces. It is not an official Nous Research product.',
      ],
    },
    {
      type: 'image',
      image: 'hermesIosCoreProductEn',
      heading: 'A Mobile Control Surface, Not a Chat Wrapper',
      alt: 'Sanitized current-main Hermes iOS Companion screens showing grouped sessions, chat execution, and security approvals',
      body: [
        'The primary workflows are organized around agent continuity rather than message volume. Sessions stay grouped by project and instance, tool execution remains inspectable without taking over the conversation, and approval requests surface the command and authorization scope before a decision.',
        'These screens were captured from a current-main Simulator build using fixture sessions, example commands, and isolated instance names. No production endpoint, credential, or private conversation is present.',
      ],
    },
    {
      type: 'text',
      heading: 'The Problem: Desktop Agents Lose Their Interface When You Walk Away',
      body: [
        'A desktop AI agent can read files, run tools, and complete long tasks, but its interface usually disappears the moment the user leaves the desk. A mobile chat box alone does not solve that problem. The phone also needs to communicate execution state, preserve session continuity, surface system events, and make high-risk actions explicit.',
        'The product goal was therefore not to shrink the desktop experience. It was to identify the few responsibilities that matter on a phone: lightweight input, status awareness, interruption handling, and trusted confirmation.',
      ],
    },
    {
      type: 'text',
      heading: 'The Product Decision: Keep the Runtime Off the Phone',
      body: [
        'The iPhone does not run the agent runtime. Hermes remains on a Mac or VPS, where it has the files, tools, compute, and long-lived process context it needs. The phone acts as a secure control surface that sends input and renders state from the Gateway.',
        'This boundary reduced product and security complexity. The Gateway remains the source of truth. The mobile client can reconnect, reconcile, or lose a transient event without becoming a second authority for the task itself.',
      ],
    },
    {
      type: 'image',
      image: 'hermesIosArchitecture',
      heading: 'Architecture: One Source of Truth, Several Feedback Paths',
      alt: 'Architecture diagram showing an iPhone connecting through Tailscale HTTPS to isolated Hermes Gateway instances on a Mac and VPS',
      body: [
        'The iPhone reaches each Hermes Gateway through Tailscale HTTPS. Mac and VPS profiles keep endpoint identity, credentials, sessions, and notification routing separate. Requests move to the selected Gateway, while SSE streams provide foreground progress and APNs, Widget, Live Activity, and Dynamic Island provide system-level status.',
        'SSE and push are feedback layers, not competing databases. After interruption or reconnect, the client reconciles against Gateway state instead of assuming every transient event was received.',
      ],
    },
    {
      type: 'image',
      image: 'hermesIosSystemSurfaces',
      heading: 'The Work Continues Outside the App',
      alt: 'Sanitized Simulator captures of Hermes Share Extension, Widget, Dynamic Island, and native text selection',
      body: [
        'Share Extension turns a URL, text, or image into agent input and preserves it in an outbox when immediate delivery is unavailable. WidgetKit exposes instance-aware status, while ActivityKit and Dynamic Island carry live task state into the system UI. Native text selection keeps long agent output useful as working material rather than a read-only transcript.',
        'These Simulator captures prove the rendered Apple-platform surfaces. Physical-device acceptance separately covers APNs delivery, Face ID or passcode app lock, Share outbox delivery, and lifecycle behavior that Simulator screenshots cannot establish.',
      ],
    },
    {
      type: 'timeline',
      heading: 'Core Challenges',
      body: [
        'The difficult work was not rendering chat bubbles. It was preserving trust and continuity across networks, processes, devices, and iOS lifecycle boundaries.',
      ],
      items: [
        {
          title: 'Non-replayable SSE and disconnect recovery',
          description:
            'Separated streamed feedback from durable Gateway state, then added reconnect and reconciliation paths so an interrupted stream does not silently become the product truth.',
        },
        {
          title: 'Mac and VPS identity isolation',
          description:
            'Bound sessions, credentials, drafts, notifications, and deep links to explicit instance identities so switching environments does not leak context across systems.',
        },
        {
          title: 'Layered confirmation for sensitive control',
          description:
            'Made authorization scope explicit and required a second confirmation for dangerous session grants. Face ID or device passcode protects app re-entry and destructive Gateway restart rather than turning a notification tap into authorization.',
        },
        {
          title: 'Offline Share outbox',
          description:
            'Made Share Extension input durable when the app or Gateway is unavailable, then routed queued items back to the intended instance and session when connectivity returns.',
        },
        {
          title: 'Push, Widget, and Live Activity routing',
          description:
            'Mapped background events to the correct profile and task while keeping the Gateway authoritative for final state.',
        },
        {
          title: 'Voice drafts and long-session interaction',
          description:
            'Preserved transcribed drafts across interruptions and treated scrolling, collapse behavior, and precise text selection as core productivity interactions.',
        },
        {
          title: 'Bilingual and accessible interaction',
          description:
            'Built English and Chinese UI, Dynamic Type behavior, VoiceOver structure, and minimum touch targets into the primary workflows instead of adding them after the feature set stabilized.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Remote Control Must Stay Legible',
      body: [
        'Remote execution creates a human factors problem: the user needs enough context to make a decision without reading a desktop-sized trace on a phone. The approval flow exposes intent and authorization scope, then requires an additional confirmation for dangerous session grants. Separately, Face ID or device passcode protects app re-entry and destructive Gateway restart.',
        'During execution, reasoning and tool calls collapse into a compact progress surface. Details remain available for inspection, but the final answer stays outside the trace so status, diagnostic detail, and outcome do not compete for attention. The public screens in this case study use safe simulator fixtures from the current main build.',
      ],
    },
    {
      type: 'metrics',
      heading: 'Validation Snapshot',
      body: [
        'The strongest evidence is the complete system running across a physical iPhone and two self-hosted environments. Automated tests cover deterministic behavior, while device acceptance verifies the Apple services and network conditions that mocks cannot prove.',
      ],
      metrics: [
        { value: '595', label: 'Unit tests in the latest recorded acceptance run' },
        { value: '2', label: 'Focused UI tests for precise text selection' },
        { value: '2', label: 'Isolated Hermes instances across Mac and VPS' },
        { value: '1', label: 'Physical iPhone used for repeated end-to-end acceptance' },
      ],
      evidence: [
        {
          label: 'Native iOS surfaces',
          value:
            'Verified APNs, Face ID or passcode app lock, authenticated Gateway restart, Share Extension, Widget, Live Activity, Dynamic Island, voice input, and bilingual behavior on device.',
        },
        {
          label: 'Continuity under interruption',
          value:
            'Exercised SSE recovery, background and foreground transitions, draft restoration, offline outbox behavior, and instance-specific routing.',
        },
        {
          label: 'Production-minded boundaries',
          value:
            'Uses private Tailscale connectivity, Keychain-backed secrets, fail-closed approval behavior, and Gateway reconciliation rather than exposing the runtime publicly.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Known Limits and Release Boundary',
      body: [
        'Hermes iOS Companion is a private beta and deployed personal system. It is not on the App Store, is not publicly available, and is not presented as an official Hermes app. Setup still assumes a self-hosted Hermes Gateway and Tailscale access, which is appropriate for the current audience but not consumer onboarding.',
        'Public screenshots use example data and sanitized fixtures. Live Gateway URLs, API keys, pairing payloads, Tailscale domains, device tokens, APNs credentials, and private conversation content are intentionally excluded.',
      ],
    },
    {
      type: 'outcome',
      image: 'hermesIosHeroEn',
      backgroundOverlayOpacity: 0.82,
      heading: 'What This Project Demonstrates',
      body: [
        'Hermes iOS Companion is my clearest end-to-end example of combining AI systems, UX judgment, native iOS engineering, backend protocol work, security, and real deployment into one coherent product.',
        'The main lesson was that an AI companion should not imitate the runtime. It should translate the runtime into the smallest set of mobile interactions that preserve continuity, awareness, and trust.',
        'Built independently by Prince Niu as a companion for the open-source Hermes Agent. Not an official Nous Research product.',
      ],
    },
  ],
};
