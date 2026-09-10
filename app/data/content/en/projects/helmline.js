export const helmlineProject = {
  slug: 'helmline',
  title: 'Helmline',
  description:
    'A native iPhone client for self-hosted AI agents. Independently designed, built, and released on the App Store. Requires your own compatible Hermes Gateway.',
  url: 'https://apps.apple.com/app/id6787791371',
  linkLabel: 'Download on the App Store',
  roles: ['Independent Product Design', 'Human Factors & UX', 'SwiftUI Engineering', 'App Store Release'],
  summary: {
    title: 'Helmline',
    description:
      'Follow agent work and review sensitive actions from iPhone while execution stays on your own host. Independently designed, built, and released on the App Store. Requires a compatible self-hosted Gateway.',
    modelType: 'phone',
    modelAlt: 'Helmline sessions and approvals with fictional demonstration content',
    ctaLabel: 'View product case study',
    quickFacts: [
      { label: 'Role', value: 'Independent designer and engineer' },
      { label: 'Platform', value: 'Native iPhone app · SwiftUI' },
      { label: 'Status', value: 'Available on the App Store' },
      { label: 'Release', value: 'Version 1.0 · Free · iOS 17+' },
    ],
  },
  sections: [
    {
      type: 'text',
      heading: 'The problem: work continues when you leave the desk',
      body: [
        'I built Helmline for people who already run self-hosted AI agents on a Mac or VPS. Away from the computer, they still need to know what is running, inspect a result, or approve an action. A smaller chat window alone does not make that work understandable or safe to control.',
        'I owned the product scope, interaction design, native iOS implementation, integration with compatible Hermes Gateways, device validation, and App Store delivery. The project started from my own workflow, not a formal user-research study.',
      ],
    },
    {
      type: 'gallery',
      heading: 'Find the work. Inspect progress. Decide what can proceed.',
      images: ['helmlineScreenEn01', 'helmlineScreenEn02', 'helmlineScreenEn03'],
      alt: 'Helmline sessions, execution summary, and approval interface',
      body: [
        'Actual app interfaces captured with fictional demonstration content for the 1.0 storefront. The conversations and interview notes shown are fixtures, not user research or private sessions. Explore the three screens.',
      ],
    },
    {
      type: 'timeline',
      heading: 'Three decisions that shaped the mobile experience',
      items: [
        {
          title: 'Show progress before the full trace',
          description: 'A compact execution summary keeps tool activity from overwhelming the conversation. Detailed steps remain available when the user needs to inspect how a result was produced.',
        },
        {
          title: 'Separate awareness from authorization',
          description: 'Widget and Live Activity surfaces make active work visible without reopening the app. Sensitive approvals require Face ID or the device passcode instead of turning a status glance into authorization.',
        },
        {
          title: 'Keep each host’s context separate',
          description: 'Mac and VPS connections remain distinct. Gateway identity follows sessions and navigation so switching hosts does not mix the work the user is inspecting or controlling.',
        },
      ],
    },
    {
      type: 'image',
      image: 'helmlineArchitectureEn',
      heading: 'The phone is a client, not a second agent runtime',
      alt: 'iPhone client connected to a user-controlled Hermes Gateway; agent execution, desktop tools, files, and models remain on the host',
      body: [
        'I chose a bring-your-own-Gateway model rather than building a hosted AI service. iPhone handles viewing, input, and control. Agent execution, desktop tools, and long-running tasks stay on the user-controlled host. This preserves a single authority for task state, but asks users to deploy and maintain their own compatible Gateway.',
      ],
    },
    {
      type: 'text',
      heading: 'Engineering challenge: continuity across boundaries',
      body: [
        'The difficult part was coordinating state across streams, app navigation, and native extensions. The client needs to present live feedback without treating a dropped connection as a completed task. Gateway state remains authoritative, while connection-scoped local state keeps one host’s context separate from another’s.',
        'I integrated Share Sheet input, audio capture for Gateway transcription, automation controls, Widget, and Live Activity into the same product. Gateway credentials live in the iOS Keychain. These are native entry points into host-side work, not desktop tools running locally on iPhone.',
      ],
    },
    {
      type: 'text',
      heading: 'Delivered: a public App Store release',
      body: [
        'I took the product through physical-iPhone validation, distribution signing, English and Simplified Chinese storefront preparation, Apple review, and manual release. Version 1.0 is now publicly available, delivered as build 1.0.0 (5). The public listing is the independently accessible evidence of release: https://apps.apple.com/app/id6787791371',
        'This demonstrates end-to-end product delivery, not market traction. I am not claiming download growth, retention, revenue, or product-market fit. The screenshots illustrate the interface; they do not replace device validation.',
      ],
    },
    {
      type: 'text',
      heading: 'What users need to know',
      body: [
        'Helmline is free, with no Helmline account, advertising, or in-app purchases. It requires iOS 17 or later and a compatible Hermes Gateway that the user deploys and manages. Model and related service costs depend on the selected providers. Available operations depend on the connected Gateway’s capabilities.',
        'It is not an out-of-the-box hosted AI service. Users remain responsible for host security, network access, and the data practices of their Gateway and providers. The App Store lists the developer’s privacy declaration as Data Not Collected; that does not mean content never leaves the phone.',
        'Helmline is independently developed and compatible with open-source Hermes Agent. It is not an official Nous Research product and is not endorsed by Nous Research.',
      ],
    },
    {
      type: 'text',
      heading: 'What this project taught me',
      body: [
        'A mobile agent interface needs more than conversation UI. It needs clear answers to what is happening, which host owns the work, and when the user must make a deliberate decision. Shipping Helmline meant carrying those boundaries through the interaction design, native implementation, and release process.',
      ],
    },
  ],
};
