export const sayitProject = {
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
  };
