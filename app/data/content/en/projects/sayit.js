export const sayitProject = {
  slug: 'sayit',
  title: 'SayIt',
  description:
    'A native macOS menu bar dictation app that turns speech into text from a global hotkey, supports local Whisper transcription, and stays out of the user’s way.',
  roles: ['Product Design', 'SwiftUI', 'macOS Development', 'Interaction Design', 'AI Integration'],
  summary: {
      title: 'SayIt',
      description:
        'A shipped macOS voice-to-text utility I designed, built, signed, and released. It pairs a global hotkey with local Whisper support and a small HUD that stays out of the way.',
      modelType: 'macosUtility',
      modelAlt: 'SayIt macOS menu bar utility preview with floating popover and hotkey workflow',
      quickFacts: [
        { label: 'Role', value: 'Designer-Builder (solo product + engineering)' },
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
          'I wanted the utility to feel closer to a system shortcut than a standalone app: trigger it from anywhere, transcribe locally, paste the result, and keep writing in the same window.',
        ],
      },
      {
        type: 'text',
        heading: 'Why a Menu Bar Utility',
        body: [
          'A full-window app would have undercut the entire point. Voice-to-text works best as a productivity primitive when it disappears between uses: visible enough to invoke, quiet enough to ignore. The menu bar gives the app a permanent home without taking over the workspace.',
          'Building it as a native macOS app (rather than an Electron wrapper) was a deliberate choice. The product is judged against system utilities, not against other apps; it has to feel like Spotlight, not like a browser tab.',
        ],
      },
      {
        type: 'timeline',
        heading: 'From Idea to v1.0.5',
        body: [
          'I designed, built, signed, notarized, and shipped SayIt through GitHub Releases. The phases below trace the path from a SwiftUI sketch to a public macOS binary.',
        ],
        items: [
          {
            title: 'Concept',
            description:
              'Defined the product as a menu bar dictation utility: global hotkey, one primary action, no full-window UI, and on-device transcription by default.',
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
          'The product centers on a compact popover: one primary action, a microphone selector, a transcription engine choice, and lightweight status messaging. The interface stays quiet until needed, which fits a utility better than a traditional full-window app.',
          'The design decision behind this surface was to resist feature creep. Every additional control would have pulled the app further away from "press hotkey, talk, paste."',
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverRecording',
        heading: 'One-Toggle Recording Flow',
        alt: 'SayIt popover during active recording and transcription workflow',
        body: [
          'Interaction was reduced to a reliable toggle: start recording, stop and transcribe, then copy the result automatically. Recording duration, live audio level, slow-transcription hints, and menu bar HUD feedback keep the app understandable without making it visually heavy.',
          'The HUD itself does most of the work. Once the hotkey is muscle memory, the user does not need to look at the popover at all; the menu bar icon and a brief overlay are enough to confirm the system is doing the right thing.',
        ],
      },
      {
        type: 'text',
        heading: 'On-Device, Always',
        body: [
          'Choosing whisper.cpp over a cloud API was a product decision before it was a technical one. Local transcription means the app keeps working offline, avoids per-request cost, and gives users a privacy guarantee that is easy to understand: voice data stays on the device.',
          'The trade-off is model size and cold-start cost. The app exposes engine and model selection so users on lighter machines can pick a smaller model, while users who care more about accuracy can opt into a larger one.',
        ],
      },
      {
        type: 'text',
        heading: 'The Permissions & Hotkey Wall',
        body: [
          'The hardest part of shipping a macOS utility was not the core feature. It was the trust gradient the OS demands. SayIt needs Microphone access to capture audio and Accessibility access to paste into other apps. Each prompt is a place users can drop off, and each one is rendered by macOS, not by the app.',
          'The fix was to design the onboarding around those prompts instead of around the app\'s own UI: explain why each permission is needed before macOS asks, and give the user a recoverable path back to permissions in System Settings if they decline. The hotkey itself uses standard global hotkey APIs, with a settings surface that lets the user rebind it without restarting the app.',
        ],
      },
      {
        type: 'image-text',
        image: 'sayitIphoneMic',
        heading: 'Device Resilience & Ecosystem Fit',
        alt: 'iPhone Continuity microphone connected to SayIt on macOS',
        body: [
          'Microphone reliability turned out to be the most fragile part of the product. Devices appear and disappear constantly: Bluetooth headsets, external interfaces, Continuity mics, lid closures. A transcription utility that loses input mid-sentence is worse than one that never started.',
          'The app handles device changes explicitly: it watches for input route changes, falls back to a sensible default when the chosen mic disappears, and supports Continuity microphone handoff so iPhone-as-mic works in clamshell and external-monitor setups without any extra setup from the user.',
        ],
      },
      {
        type: 'text',
        heading: 'Shipping a Notarized macOS App',
        body: [
          'The codebase had to clear three bars to be installable by anyone but me: code signing with a valid Developer ID certificate, Apple notarization for Gatekeeper, and a clean release artifact distributed through GitHub Releases.',
          'Each step is small in isolation and painful in combination. Entitlements, hardened runtime, notary submission, stapling, and download-link plumbing all have to align before a stranger can double-click the app and have it just open. Getting that pipeline reliable is what made v1.0.5 shippable without manual work every time.',
        ],
      },
      {
        type: 'metrics',
        heading: 'Build Snapshot',
        body: [
          'SayIt has a small surface area, but the depth is real. Audio capture, transcription, permissions, and distribution all had to be production-ready before a downloaded binary could feel clean to a new user.',
        ],
        metrics: [
          { value: 'v1.0.5', label: 'Public release on GitHub Releases' },
          { value: '5', label: 'Iterations refining microphone, HUD, and onboarding' },
          { value: '100%', label: 'On-device transcription via whisper.cpp' },
          { value: '2', label: 'System permissions surfaced (Microphone · Accessibility)' },
        ],
        evidence: [
          {
            label: 'Solo product execution',
            value:
              'Designed and built solo across product surface, audio pipeline, transcription engine, permissions UX, and signed/notarized distribution.',
          },
          {
            label: 'Privacy-first by default',
            value:
              'Audio never leaves the device. whisper.cpp runs locally, with model selection exposed so users can trade accuracy for speed on their own hardware.',
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
          'SayIt is the project where I stopped designing for a deck and started designing for a binary. Popover density, HUD timing, model choice, and permission copy all had to answer the same question: does this still feel like a system utility, or does it feel like an app?',
          'For the portfolio, SayIt is my clearest example of turning a focused product idea into shipped software: define the problem, shape the interaction model, choose the right technical path, and deliver a signed, notarized macOS product that people can download today.',
        ],
      },
    ],
  };
