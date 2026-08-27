export const helmlineProject = {
  slug: 'helmline',
  title: 'Helmline',
  description:
    'A native iPhone control surface for self-hosted AI agents. Version 1.0 has been submitted to Apple App Review and is pending review.',
  roles: [
    'Product Design',
    'Human Factors',
    'SwiftUI Engineering',
    'AI Agent UX',
    'Security',
    'App Store Delivery',
  ],
  summary: {
    title: 'Helmline',
    description:
      'A native iPhone control surface for self-hosted AI agents, designed to keep sessions, execution, approvals, capture, and long-running work legible away from the host. Version 1.0 is pending App Review.',
    modelType: 'phone',
    modelAlt:
      'Helmline Sessions and Approvals screens using privacy-safe App Store fixture content',
    ctaLabel: 'View product case study',
    quickFacts: [
      { label: 'Role', value: 'Independent designer and engineer' },
      { label: 'Platform', value: 'Native iPhone app · SwiftUI' },
      { label: 'Status', value: 'Submitted for App Review' },
      { label: 'Release', value: 'Version 1.0 · Build 5 · Manual release' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'helmlineFocusEn01',
      alt: 'Helmline Sessions screen with synthetic launch-planning conversations',
    },
    {
      type: 'text',
      heading: 'Context: The Agent Keeps Working After the User Leaves the Desk',
      body: [
        'Self-hosted AI agents can read files, run tools, and continue long tasks on a Mac or VPS. Their usual interface, however, disappears when the user steps away. A smaller chat window does not solve the real mobile problem: understanding what is running, deciding when intervention is needed, and returning to the right context without moving the production runtime onto the phone.',
        'Helmline became a native iPhone control surface for that gap. It brings together sessions, streamed execution, approvals, capture, automation control, and system-level status while the compute, files, models, credentials, and long-running work stay on infrastructure the user controls.',
      ],
    },
    {
      type: 'text',
      heading: 'Product Decision: Bring Your Own Service',
      body: [
        'I chose a bring-your-own-service model instead of hosting user accounts, models, or agent data. A user connects Helmline to a compatible Hermes Gateway they operate on a Mac or VPS. The Gateway remains the source of truth, and the phone remains a client for input, inspection, and confirmation.',
        'This boundary keeps ownership understandable. Helmline does not need an account, and the developer does not become the custodian of the user’s runtime. It also avoids creating a second execution authority on iPhone: if a stream is interrupted, the client reconnects and reconciles with Gateway state rather than inventing a local result.',
      ],
    },
    {
      type: 'image',
      image: 'helmlineArchitectureEn',
      heading: 'System Architecture: Clear Responsibility at Every Layer',
      alt: 'Diagram of an iPhone connecting over authenticated HTTPS to a user-owned Hermes Gateway on a Mac or VPS, with tools, files, models, credentials, and automations remaining on the host',
      body: [
        'The iPhone connects over authenticated HTTPS, including private-network deployments such as Tailscale. Each Gateway profile keeps its endpoint, Keychain credential, sessions, drafts, and notification routing separate. Multiple Mac and VPS environments can therefore coexist without sharing operational context.',
        'The host owns execution. Helmline presents the minimum information needed to follow and control it. Streamed events support immediate feedback, while durable Gateway state resolves interruptions and reconnects.',
      ],
    },
    {
      type: 'gallery',
      heading: 'Core Workflow: Six Mobile Responsibilities',
      alt: 'Helmline App Store workflow screenshots using synthetic fixture data',
      images: [
        'helmlineFocusEn01',
        'helmlineFocusEn02',
        'helmlineFocusEn03',
        'helmlineFocusEn04',
        'helmlineFocusEn05',
        'helmlineFocusEn06',
      ],
      body: [
        'The product narrative follows the order in which mobile control becomes useful: find the right Session, follow Execution, resolve Approvals, Capture new input, switch between Multiple Gateways, and keep Native Status visible outside the app.',
        'These are the same privacy-safe Focus assets prepared for the App Store. They use synthetic launch-planning content and contain no production Gateway address, key, account, device identifier, or private conversation.',
      ],
    },
    {
      type: 'timeline',
      heading: 'Human Factors: Reduce the Cost of Checking In',
      body: [
        'The mobile experience is built around short, interruption-heavy moments. The goal is not to expose every runtime detail at once, but to preserve awareness, control, and a reliable path to deeper inspection.',
      ],
      items: [
        {
          title: 'Continuity before recency',
          description:
            'Sessions preserve project and Gateway context so returning from a notification or another device does not force the user to reconstruct where work belongs.',
        },
        {
          title: 'Progress before trace detail',
          description:
            'Execution is summarized as one legible progress surface. Reasoning and tool detail remain available without competing with the final result.',
        },
        {
          title: 'Scope before approval',
          description:
            'Approval requests identify the requested action and authorization scope before the user decides. Sensitive control paths add Face ID or device passcode confirmation.',
        },
        {
          title: 'Status without reopening',
          description:
            'Widget and Live Activity surfaces keep long-running work visible while respecting the difference between awareness and authorization.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Security and Privacy: Preserve User Control',
      body: [
        'Gateway credentials are stored in the iOS Keychain and scoped to explicit connection profiles. Helmline does not expose a production runtime publicly, and switching Gateways does not merge credentials or sessions. Sensitive approvals and protected control paths use a second confirmation through Face ID or the device passcode.',
        'Helmline is free, has no Helmline account, contains no advertising, and has no in-app purchases. Its published App Privacy position is that the developer does not collect data. User content is sent only to the Gateway the user selects; the practices of that Gateway and its configured providers remain the user’s responsibility.',
      ],
    },
    {
      type: 'text',
      heading: 'Native iOS Integration: Follow Work Beyond the Main Screen',
      body: [
        'Share Extension turns text, links, images, and audio into agent input. If immediate delivery is unavailable, the share outbox preserves the item for later routing. Voice capture supports short input and longer recordings, while background audio and transfer paths keep capture useful beyond a foreground-only demo.',
        'Widget and Live Activity surfaces expose task state at the system level. Deep links return to the relevant app context, while native text selection keeps long agent output usable as working material instead of a sealed transcript.',
      ],
    },
    {
      type: 'text',
      heading: 'Engineering Depth: Stateful Control Across Process Boundaries',
      body: [
        'The core engineering work sits in state coordination rather than isolated screens. SwiftUI views consume streamed execution, durable session state, local drafts, approval records, background events, and multiple connection identities. Reconnect behavior treats transient streams as feedback and the Gateway as the authority for final state.',
        'Local persistence covers profile metadata, share outbox items, recordings, drafts, and activity state. Keychain storage remains separate from ordinary preferences. Multi-instance routing carries Gateway identity through sessions, notifications, deep links, widgets, and background delivery so one host cannot silently inherit another host’s context.',
      ],
    },
    {
      type: 'text',
      heading: 'Productization: From Private Control Tool to Deliverable iOS Product',
      body: [
        'Productization meant more than stabilizing the main workflow. The project received an independent name and visual identity, English and Simplified Chinese localization, a complete six-screen storefront narrative, privacy policies, support and marketing metadata, content-rights attribution, age-rating and encryption decisions, and an isolated review path for Apple.',
        'The delivery chain also included App Store bundle and extension configuration, privacy manifests, archive verification, signed distribution export, App Store Connect validation, and the Version 1.0 Build 5 submission. The release is configured for manual publication after approval.',
      ],
    },
    {
      type: 'metrics',
      heading: 'Validation: Evidence Matched to the Claim',
      body: [
        'Validation was split by what each layer can honestly prove. Source and archive checks establish the product graph, versioning, privacy manifests, signing boundaries, extensions, localization, and release configuration. Storefront audits establish image dimensions and fixture safety. App Store status is kept separate from technical validation.',
      ],
      metrics: [
        { value: '1.0', label: 'Version submitted to Apple App Review' },
        { value: '5', label: 'Submitted build number' },
        { value: '2', label: 'Storefront languages: English and Simplified Chinese' },
        { value: '6', label: 'Core workflows in the App Store narrative' },
      ],
      evidence: [
        {
          label: 'Release configuration',
          value:
            'The frozen Build 5 source records Version 1.0.0, build 5, an iPhone app target, Widget extension, Share Extension, App Groups, shared Keychain access, and required platform capabilities.',
        },
        {
          label: 'Archive and storefront gates',
          value:
            'Release documentation records archive, signing, privacy-manifest, entitlement, localization, and Apple validation gates. The selected Focus screenshot set passed automated size and OCR safety audits.',
        },
        {
          label: 'Evidence boundary',
          value:
            'No user counts, download figures, revenue, performance percentages, review outcome, or public availability are claimed.',
        },
      ],
    },
    {
      type: 'text',
      heading: 'Current Status: App Review Pending',
      body: [
        'Helmline Version 1.0, Build 1.0.0 (5), has been submitted to Apple App Review and is currently waiting for review. It is not yet approved, publicly listed, or available for download. If Apple approves the submission, release remains a separate manual action.',
        'The website will only change to an availability claim after the public App Store page or App Store Connect provides fresh evidence that the app has been approved and manually released.',
      ],
    },
    {
      type: 'outcome',
      image: 'helmlineFocusEn06',
      backgroundOverlayOpacity: 0.86,
      heading: 'Reflection: Product Work Ends at the Delivery Boundary',
      body: [
        'Helmline began as a way to stay connected to agents running on infrastructure I controlled. Turning it into a complete product required the same attention to responsibility boundaries in every layer: what belongs on the phone, what stays on the host, what requires confirmation, what Apple needs to review, and what a public case study can safely claim.',
        'The result is not a remote chat wrapper. It is a native, low-friction control surface shaped around mobile attention, interruption, security, and cross-device continuity.',
        'Helmline is independently developed. It is compatible with the open-source Hermes Agent project but is not an official Nous Research product and is not endorsed by Nous Research.',
      ],
    },
  ],
};
