export const profileContent = {
  eyebrow: 'About me',
  heading: 'Designing the seam between people and complex systems.',
  description:
    'I’m Zhuo (Prince) Niu, a designer-builder working across UI/UX, AI products, and human factors. I’m currently studying Human Factors Engineering at Tufts, with a Computer Engineering background from Purdue.\n\nI like building products at the point where a vague idea has to become real. That usually means asking what problem is worth solving, designing the first usable flow, testing the rough version, and then building enough of it for people to actually use.\n\nMy work sits between human factors, product design, and engineering. I care about the small moments that make a product feel clear instead of confusing: the prompt, the feedback, the recovery path, the first click that makes sense. Recently, I’ve worked on Porsche in-car interactions, a BLE-based posture tracking app, and SayIt, a shipped macOS voice-to-text tool.\n\nI’m currently looking for product design, UX, and human factors opportunities focused on building thoughtful products, refining UI/UX, and shaping complex user experiences.',
  ctaLabel: 'Send me a message',
};

export const contactContent = {
  title: 'Say hello',
  metaDescription:
    'Get in touch about product design, frontend development, mobile projects, or collaboration opportunities.',
  successTitle: 'Message Sent',
  successBody: 'I’ll get back to you within a couple of days. Thanks for reaching out.',
  backLabel: 'Back to homepage',
  unconfiguredMessage:
    'The contact form is not configured yet. Please reach out through GitHub for now.',
  failedMessage:
    'The message could not be sent. Please try again later or reach out through GitHub.',
};

export const usesContent = {
  metaDescription:
    'The tools, frameworks, AI workflows, and hardware I use to design and ship things across web, mobile, and macOS.',
  heroTitle: 'Uses',
  heroDescription:
    'A somewhat comprehensive list of the tools, apps, frameworks, and hardware I rely on day to day to design and ship things across web, mobile, and macOS.',
  sections: [
    {
      heading: 'Design',
      items: [
        {
          label: 'Figma',
          url: 'https://www.figma.com',
          description:
            'My primary environment for UI design — high-fidelity prototypes, component specs, and most of the visual work I ship lives here.',
        },
        {
          label: 'Design Systems',
          description:
            'How I keep visuals and behavior consistent across screens, platforms, and engineers.',
        },
        {
          label: 'UI Components',
          description:
            'I think in reusable building blocks: composable, documented, and resilient to design changes.',
        },
        {
          label: 'Material Design',
          url: 'https://m3.material.io/',
          description:
            'My reference language whenever I’m designing for Android or Material-flavored web products.',
        },
        {
          label: 'Human Interface Guidelines',
          url: 'https://developer.apple.com/design/human-interface-guidelines/',
          description:
            'The equivalent reference for anything I’m designing on iOS, iPadOS, or macOS.',
        },
        {
          label: 'Human-Centered Design',
          description:
            'The lens I bring to every project — start from the user’s context, not the feature list.',
        },
        {
          label: 'User Research',
          description:
            'Interviews and contextual inquiry to understand who I’m actually designing for before I touch a canvas.',
        },
        {
          label: 'Usability Testing',
          description:
            'Structured task scenarios with metrics like success rate, completion time, errors, and ease ratings to drive iteration.',
        },
        {
          label: 'Typography',
          description:
            'Picking and pairing typefaces is the fastest way to make an interface feel intentional.',
        },
        {
          label: 'Color Theory',
          description:
            'Palettes, hierarchy, and accessibility-aware contrast.',
        },
      ],
    },
    {
      heading: 'Development',
      items: [
        {
          label: 'Python',
          url: 'https://www.python.org/',
          description:
            'My main language for backend services, data work, and quick scripts.',
        },
        {
          label: 'Swift + SwiftUI',
          url: 'https://developer.apple.com/swift/',
          description:
            'What I reach for whenever I’m building native macOS or iOS apps.',
        },
        {
          label: 'JavaScript',
          url: 'https://developer.mozilla.org/docs/Web/JavaScript',
          description:
            'The glue for everything browser-based — still where most of my web work starts.',
        },
        {
          label: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          description:
            'What I reach for once a JS project grows past a single screen and I want the compiler to catch my mistakes.',
        },
        {
          label: 'React',
          url: 'https://react.dev/',
          description:
            'My primary web UI library — the component model just clicks for me as a designer.',
        },
        {
          label: 'React Native',
          url: 'https://reactnative.dev/',
          description:
            'What I use for cross-platform mobile when I want one codebase across iOS and Android.',
        },
        {
          label: 'HTML & CSS',
          description:
            'The fundamentals; still the most underrated skills in front-end.',
        },
        {
          label: 'Tailwind CSS',
          url: 'https://tailwindcss.com/',
          description:
            'My default styling layer on new web projects — utility-first keeps me moving fast.',
        },
        {
          label: 'C / C++',
          description:
            'What I drop down to whenever I’m working closer to the hardware.',
        },
      ],
    },
    {
      heading: 'Tools, APIs & Data',
      items: [
        {
          label: 'Git',
          url: 'https://git-scm.com/',
          description: 'Version control on every project I touch.',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/',
          description:
            'Where my code, releases, and CI live — including signed and notarized macOS distribution workflows.',
        },
        {
          label: 'Firebase',
          url: 'https://firebase.google.com/',
          description:
            'My go-to for auth and real-time data on quick mobile builds.',
        },
        {
          label: 'Expo',
          url: 'https://expo.dev/',
          description:
            'The React Native tooling I rely on for builds, dev clients, and OTA updates.',
        },
        {
          label: 'Xcode',
          url: 'https://developer.apple.com/xcode/',
          description:
            'The IDE for anything Swift, SwiftUI, or Apple-platform debugging.',
        },
        {
          label: 'RESTful APIs',
          description: 'My default for service-to-service communication.',
        },
        {
          label: 'GraphQL',
          url: 'https://graphql.org/',
          description:
            'What I prefer when the data shape varies a lot per screen and I want to pull only what I need.',
        },
        {
          label: 'SQL',
          description: 'The language I use to query relational data day to day.',
        },
        {
          label: 'PostgreSQL',
          url: 'https://www.postgresql.org/',
          description:
            'My default relational store for anything beyond a prototype.',
        },
        {
          label: 'FastAPI',
          url: 'https://fastapi.tiangolo.com/',
          description:
            'The Python framework I use for APIs and quick backend prototypes.',
        },
      ],
    },
    {
      heading: 'AI & Agentic Tools',
      items: [
        {
          label: 'Prompt Engineering',
          description:
            'Crafting and iterating prompts to get reliable, well-structured outputs from LLMs.',
        },
        {
          label: 'AI-Assisted Coding',
          description:
            'Pair-programming with models throughout the day, from refactors to scaffolding to exploring unfamiliar codebases.',
        },
        {
          label: 'OpenAI Codex',
          url: 'https://openai.com/codex/',
          description:
            'What I reach for on code generation and quick experiments.',
        },
        {
          label: 'Claude Code',
          url: 'https://www.anthropic.com/claude-code',
          description:
            'My daily driver for AI-assisted coding inside the terminal.',
        },
        {
          label: 'RAG Systems',
          description:
            'How I ground LLM answers in private or domain-specific data when a product can’t rely on the model’s pre-training alone.',
        },
        {
          label: 'Dify',
          url: 'https://dify.ai/',
          description:
            'The platform I use to build agent workflows and chain LLM calls without writing all the orchestration glue from scratch.',
        },
        {
          label: 'AI Agent Workflows',
          description:
            'Designing how multiple agents and tools collaborate to complete a task end-to-end.',
        },
        {
          label: 'Human-AI Interaction',
          description:
            'The design lens I bring to AI products — making model behavior legible, recoverable, and trustworthy.',
        },
        {
          label: 'Whisper / Speech-to-Text',
          url: 'https://openai.com/research/whisper',
          description:
            'Whisper (and whisper.cpp for fully on-device, privacy-preserving transcription) is what I use whenever a product needs speech-to-text.',
        },
      ],
    },
  ],
  system: [
    { label: 'Operating system', value: 'macOS' },
    { label: 'Browser', value: 'Arc' },
    { label: 'Monitor', value: 'LG 27UN850-W 4K' },
    { label: 'Keyboard', value: 'Keychron K2' },
    { label: 'Mouse', value: 'Logitech G305' },
    { label: 'Laptop', value: 'MacBook Air M3' },
    { label: 'Headphones', value: 'Apple AirPods' },
  ],
};
