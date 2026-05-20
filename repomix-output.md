This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.storybook/
  main.js
  manager-head.html
  manager.js
  preview.css
  preview.jsx
  story-container.css
  story-container.jsx
  vite.config.js
app/
  assets/
    fonts/
      ipa-gothic.woff2
    etongue-device-context-placeholder.jpg
    etongue-device-context.jpg
    etongue-device-context.webp
    etongue-early-prototype-placeholder.jpg
    etongue-early-prototype-poster.jpg
    etongue-early-prototype-poster.webp
    etongue-early-prototype.mp4
    etongue-issf-dashboard.png
    etongue-issf-dashboard.webp
    etongue-issf-score.png
    etongue-issf-score.webp
    etongue-prototype-analyze-results.png
    etongue-prototype-analyze-results.webp
    etongue-prototype-configure-products.png
    etongue-prototype-configure-products.webp
    etongue-prototype-final-decision.png
    etongue-prototype-final-decision.webp
    etongue-prototype-machine-testing.png
    etongue-prototype-machine-testing.webp
    etongue-sensor-closeup-placeholder.jpg
    etongue-sensor-closeup.jpg
    etongue-sensor-closeup.webp
    etongue-taste-profile.png
    etongue-taste-profile.webp
    flatline.mp4
    flatline.png
    iphone-11.glb
    knowledgeos-architecture-placeholder.jpg
    knowledgeos-architecture.svg
    knowledgeos-architecture.webp
    knowledgeos-compiled-truth-placeholder.jpg
    knowledgeos-compiled-truth.svg
    knowledgeos-compiled-truth.webp
    knowledgeos-vault-structure-placeholder.jpg
    knowledgeos-vault-structure.svg
    knowledgeos-vault-structure.webp
    knowledgeos-weekly-review-placeholder.jpg
    knowledgeos-weekly-review.svg
    knowledgeos-weekly-review.webp
    little-lemon-1-large.jpg
    little-lemon-1-placeholder.jpg
    little-lemon-1.jpg
    little-lemon-2-large.jpg
    little-lemon-2-placeholder.jpg
    little-lemon-2.jpg
    macbook-pro.glb
    notfound.jpg
    notfound.mp4
    porsche-background-large.jpg
    porsche-background-placeholder.jpg
    porsche-background-tile-large.jpg
    porsche-background-tile-placeholder.jpg
    porsche-background-tile.jpg
    porsche-background-tile.webp
    porsche-background.jpg
    porsche-background.webp
    porsche-flowchart-large.jpg
    porsche-flowchart-placeholder.jpg
    porsche-flowchart.jpg
    porsche-flowchart.webp
    porsche-interface-home-large.jpg
    porsche-interface-home-placeholder.jpg
    porsche-interface-home.jpg
    porsche-prototype-large.jpg
    porsche-prototype-placeholder.jpg
    porsche-prototype.jpg
    porsche-wireframe-main-large.jpg
    porsche-wireframe-main-placeholder.jpg
    porsche-wireframe-main.jpg
    porsche-wireframe-nav-large.jpg
    porsche-wireframe-nav-placeholder.jpg
    porsche-wireframe-nav.jpg
    posture-activity-large.jpg
    posture-activity-placeholder.jpg
    posture-activity.jpg
    posture-architecture-large.jpg
    posture-architecture-placeholder.jpg
    posture-architecture.jpg
    posture-background-tile-large.jpg
    posture-background-tile-placeholder.jpg
    posture-background-tile.jpg
    posture-background-tile.webp
    posture-checker-app-large.png
    posture-checker-app-large.webp
    posture-checker-app-placeholder.png
    posture-checker-app.png
    posture-checker-app.webp
    posture-final-app-large.png
    posture-final-app-large.webp
    posture-final-app-placeholder.png
    posture-final-app.png
    posture-final-app.webp
    posture-login-large.jpg
    posture-login-placeholder.jpg
    posture-login.jpg
    posture-progress-large.jpg
    posture-progress-placeholder.jpg
    posture-progress.jpg
    posture-prototype-large.jpg
    posture-prototype-placeholder.jpg
    posture-prototype.jpg
    posture-team-placeholder.jpg
    posture-team.jpg
    posture-team.webp
    posture-tracker-large.jpg
    posture-tracker-placeholder.jpg
    posture-tracker.jpg
    posture-wireframe-large.jpg
    posture-wireframe-placeholder.jpg
    posture-wireframe.jpg
    profile-large.jpg
    profile-placeholder.jpg
    profile.jpg
    profile.webp
    sayit-brand.png
    sayit-brand.webp
    sayit-iphone-mic.jpg
    sayit-popover-idle.png
    sayit-popover-recording.png
    trekassist-alert-modal-large.jpg
    trekassist-alert-modal-placeholder.jpg
    trekassist-alert-modal.jpg
    trekassist-discovery-flow-large.jpg
    trekassist-discovery-flow-placeholder.jpg
    trekassist-discovery-flow.jpg
    trekassist-emergency-confirmation-large.jpg
    trekassist-emergency-confirmation-placeholder.jpg
    trekassist-emergency-confirmation.jpg
    trekassist-grand-prismatic-bg-large.jpg
    trekassist-grand-prismatic-bg-large.webp
    trekassist-grand-prismatic-bg-placeholder.jpg
    trekassist-grand-prismatic-bg.jpg
    trekassist-guided-tour-mammoth-large.jpg
    trekassist-guided-tour-mammoth-placeholder.jpg
    trekassist-guided-tour-mammoth.jpg
    trekassist-guided-tours-large.jpg
    trekassist-guided-tours-placeholder.jpg
    trekassist-guided-tours.jpg
    trekassist-home-alert-large.jpg
    trekassist-home-alert-placeholder.jpg
    trekassist-home-alert.jpg
    trekassist-map-mammoth-large.jpg
    trekassist-map-mammoth-placeholder.jpg
    trekassist-map-mammoth.jpg
    trekassist-post-test-concept-large.jpg
    trekassist-post-test-concept-placeholder.jpg
    trekassist-post-test-concept.jpg
    trekassist-safety-flow-large.jpg
    trekassist-safety-flow-placeholder.jpg
    trekassist-safety-flow.jpg
    trekassist-safety-screen-large.jpg
    trekassist-safety-screen-placeholder.jpg
    trekassist-safety-screen.jpg
    trekassist-settings-large.jpg
    trekassist-settings-placeholder.jpg
    trekassist-settings.jpg
    trekassist-yellowstone-sign-bg-large.jpg
    trekassist-yellowstone-sign-bg-placeholder.jpg
    trekassist-yellowstone-sign-bg.jpg
    uses-background-placeholder.jpg
    uses-background.mp4
  components/
    button/
      button.jsx
      button.module.css
      button.stories.jsx
      index.js
    carousel/
      carousel-fragment.glsl
      carousel-vertex.glsl
      carousel.jsx
      carousel.module.css
      carousel.stories.jsx
      index.js
    decoder-text/
      decoder-text.jsx
      decoder-text.module.css
      decoder-text.stories.jsx
      index.js
    divider/
      divider.jsx
      divider.module.css
      index.js
    footer/
      footer.jsx
      footer.module.css
      index.js
    heading/
      heading.jsx
      heading.module.css
      heading.stories.jsx
      index.js
    icon/
      icon.jsx
      icon.module.css
      icon.stories.jsx
      icons.svg
      index.js
      manifest.json
    image/
      image.jsx
      image.module.css
      image.stories.jsx
      index.js
    input/
      index.js
      input.jsx
      input.module.css
      input.stories.jsx
      text-area.jsx
      text-area.module.css
    link/
      index.js
      link.jsx
      link.module.css
      link.stories.jsx
    list/
      index.js
      list.jsx
      list.module.css
      list.stories.jsx
    loader/
      index.js
      loader.jsx
      loader.module.css
      loader.stories.jsx
    model/
      device-models.js
      index.js
      model.jsx
      model.module.css
      model.stories.jsx
    monogram/
      index.js
      monogram.jsx
      monogram.module.css
      Monogram.stories.jsx
    progress/
      index.js
      progress.jsx
      progress.module.css
    section/
      index.js
      section.jsx
      section.module.css
    segmented-control/
      index.js
      segmented-control.jsx
      segmented-control.module.css
      segmented-control.stories.jsx
    table/
      index.js
      table.jsx
      table.module.css
      table.stories.jsx
    text/
      index.js
      text.jsx
      text.module.css
      text.stories.jsx
    theme-provider/
      index.js
      theme-provider.jsx
      theme.js
    transition/
      index.js
      transition.jsx
    visually-hidden/
      index.js
      visually-hidden.jsx
      visually-hidden.module.css
  data/
    content/
      en/
        projects/
          all-work.js
          etongue-sensory-platform.js
          knowledgeos.js
          little-lemon.js
          porsche-digital-interface.js
          posture-checker.js
          sayit.js
          trekassist.js
        index.js
      zh/
        projects/
          all-work.js
          etongue-sensory-platform.js
          knowledgeos.js
          little-lemon.js
          porsche-digital-interface.js
          posture-checker.js
          sayit.js
          trekassist.js
        index.js
        site-content.js
    project-content.js
    projects.js
    site-content.js
  hooks/
    index.js
    useFormInput.js
    useHasMounted.js
    useHydrated.js
    useInterval.js
    useInViewport.js
    useParallax.js
    usePrevious.js
    useScrollToHash.js
    useWindowSize.js
  i18n/
    links.js
    locales.js
    route.js
  layouts/
    error/
      error-flatline.svg
      error.jsx
      error.module.css
      index.js
    navbar/
      index.js
      nav-data.js
      nav-toggle.jsx
      nav-toggle.module.css
      navbar.jsx
      navbar.module.css
      theme-toggle.jsx
      theme-toggle.module.css
    project/
      index.js
      project.jsx
      project.module.css
  routes/
    contact/
      contact.jsx
      contact.module.css
      route.js
    home/
      displacement-sphere-fragment.glsl
      displacement-sphere-vertex.glsl
      displacement-sphere.jsx
      displacement-sphere.module.css
      home.jsx
      home.module.css
      intro.jsx
      intro.module.css
      katakana.svg
      profile.jsx
      profile.module.css
      project-summary.jsx
      project-summary.module.css
      route.js
    projects/
      project-case.jsx
      project-case.module.css
    projects.$slug/
      route.jsx
    uses/
      route.js
      uses.jsx
      uses.module.css
    $.jsx
    api.set-theme.js
    zh-contact.js
    zh-home.js
    zh-projects-$slug.jsx
    zh-uses.js
  utils/
    delay.js
    image.js
    meta.js
    session.js
    style.js
    three.js
    throttle.js
  config.json
  global.module.css
  reset.module.css
  root.jsx
  root.module.css
docs/
  plans/
    2026-04-15-modular-portfolio.md
    2026-05-19-bilingual-content-audit.md
    2026-05-19-bilingual-portfolio-optimization.md
    2026-05-19-knowledgeos-case-copy-v1.md
    2026-05-19-knowledgeos-portfolio-case.md
functions/
  [[path]].js
logo-exploration/
  zn-logo-c2-final-candidates.html
  zn-logo-concepts-v2.html
  zn-logo-concepts.html
public/
  _headers
  favicon.ico
  favicon.svg
  humans.txt
  icon-192.png
  icon-256.png
  icon-512.png
  icon.svg
  manifest.json
  resume.pdf
  robots.txt
  shortcut.png
  sitemap.xml
  social-image.png
scripts/
  dev.cjs
  draco.cjs
  generate-sitemap.cjs
  optimize-images.cjs
tests/
  project-content.test.mjs
.dev.vars.example
.eslintrc.cjs
.gitignore
.node-version
.npmrc
.prettierrc
.unimportedrc.json
jsconfig.json
LICENSE
package.json
postcss.config.cjs
README.md
vite.config.js
wrangler.toml
```

# Files

## File: app/data/content/en/projects/all-work.js
````javascript
export const allWorkProject = {
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
            title: 'KnowledgeOS',
            timeframe: 'May 2026 · Live System',
            description:
              'Agent-maintained personal knowledge system built on Markdown, Obsidian, Hermes Agent, cron workflows, and Git backup. Designed to turn daily conversations, project updates, and research into durable long-term context.',
            tags: ['AI Systems', 'Knowledge Architecture', 'Markdown', 'Automation'],
            href: '/projects/knowledgeos',
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
  };
````

## File: app/data/content/en/projects/etongue-sensory-platform.js
````javascript
export const etongueProject = {
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
  };
````

## File: app/data/content/en/projects/knowledgeos.js
````javascript
export const knowledgeosProject = {
slug: 'knowledgeos',
    title: 'KnowledgeOS',
    description:
      'A local-first personal knowledge operating system maintained by AI agents — turning scattered conversations, project updates, research, and decisions into structured Markdown knowledge that can be searched, reviewed, audited, and reused.',
    roles: [
      'AI System Design',
      'Knowledge Architecture',
      'Agent Workflow Design',
      'Local-First Tools',
      'Automation',
      'Personal Infrastructure',
    ],
    summary: {
      title: 'KnowledgeOS',
      description:
        'An agent-maintained personal knowledge system built on Markdown, Obsidian, Hermes Agent, cron workflows, and Git backup — designed to turn daily conversations, project updates, research, and decisions into durable long-term context.',
      modelType: 'laptop',
      modelAlt: 'KnowledgeOS system architecture and Markdown knowledge vault preview',
      quickFacts: [
        { label: 'Role', value: 'Designer-Builder / System Architect' },
        {
          label: 'Methods',
          value: 'Information architecture, agent workflow design, automation, audit loops',
        },
        { label: 'Stack', value: 'Markdown, Obsidian, Hermes Agent, Python, Cron, Git' },
        {
          label: 'Outcome',
          value: 'Live system with automated capture, review, audit, and backup',
        },
      ],
    },
    sections: [
      {
        type: 'hero-image',
        image: 'knowledgeosArchitecture',
        alt: 'KnowledgeOS architecture diagram showing inputs, agent maintenance layer, Markdown vault, and review outputs',
      },
      {
        type: 'text',
        heading: 'Overview',
        body: [
          'KnowledgeOS is a local-first personal knowledge operating system I designed and built to solve a recurring scaling problem in my own work: important context was being created every day through AI conversations, project updates, research sessions, and product decisions, but most of it disappeared after the session ended.',
          'Instead of treating the knowledge base as a place where I manually file notes, I designed KnowledgeOS as an agent-maintained system. The user focuses on thinking, building, and deciding; the agent handles the maintenance layer — classifying useful information, deduplicating repeated ideas, updating project memory, synthesizing weekly patterns, auditing structure health, and backing up the vault over time.',
          'The system is intentionally simple at the storage layer. Markdown remains the source of truth, readable by Obsidian, VS Code, Git, and Hermes Agent. Its compiled knowledge layer deliberately borrows from LLM Wiki and GBrain: source-backed concept pages, entity memory, relationship mapping, and current judgments that agents can reuse across sessions.',
        ],
      },
      {
        type: 'text',
        heading: 'The Problem: Knowledge Maintenance, Not Knowledge Storage',
        body: [
          'AI tools make it easier to generate ideas, plans, code, research summaries, and decisions. But they also create a new failure mode: valuable context gets scattered across chat threads, local files, project notes, browser tabs, and memory systems that were not designed to preserve structure over time.',
          'Traditional note-taking tools mostly solve storage. They give users a place to put information, but they still depend on the user to decide what matters, where it belongs, when it should be merged, and how old notes should update when the truth changes. That maintenance work is exactly what breaks under speed.',
          'The design challenge was to build a system where AI does not just generate more text. It maintains the knowledge layer: deciding what deserves to persist, connecting it to the right long-term context, and periodically rewriting scattered updates into current judgment.',
        ],
      },
      {
        type: 'text',
        heading: 'Design Principles',
        body: [
          'The first principle was agent-maintained, not user-maintained. KnowledgeOS should not ask me to manually sort every useful thought. Hermes Agent follows capture rules to decide whether something should be ignored, appended to an existing note, turned into project memory, or preserved as a longer-term pattern.',
          'The second principle was Markdown as source of truth. I avoided databases, proprietary dashboards, and premature vector infrastructure because the system needed to stay inspectable, portable, and resilient. Every durable piece of knowledge lives in a local file that can be read by humans and edited by agents.',
          'The third principle was save less, maintain better. KnowledgeOS does not preserve raw transcript dumps. A note has to reduce future repeated explanation, support a project, improve a decision, become career material, capture a reusable workflow, or clarify a long-term pattern. The system is designed to protect attention, not archive everything.',
          'The final principle was current judgment over passive archive. Core pages maintain a current synthesis, an evidence timeline, and related links. The goal is not only to remember what happened, but to keep the latest useful understanding easy to retrieve.',
        ],
      },
      {
        type: 'timeline',
        heading: 'From Notes to Maintained Knowledge',
        body: [
          'KnowledgeOS evolved from a simple local vault into a running agent-maintained knowledge system through a sequence of architecture, rule design, automation, and operational hardening decisions.',
        ],
        items: [
          {
            title: 'Knowledge Audit',
            description:
              'Identified repeated context loss across AI conversations, projects, research, career material, and product decisions.',
          },
          {
            title: 'Information Architecture',
            description:
              'Designed a stable vault structure for projects, AI workflows, product ideas, UX/HFE, career, trading, learning, research, and reviews.',
          },
          {
            title: 'Capture Protocol',
            description:
              'Defined rules for what should be saved, ignored, merged, anonymized, or turned into long-term project memory.',
          },
          {
            title: 'Agent Automation',
            description:
              'Connected Hermes Agent to daily capture, weekly synthesis, maintenance audit, and backup workflows.',
          },
          {
            title: 'Compiled Knowledge Layer',
            description:
              'Added an LLM Wiki / GBrain-inspired compiled knowledge layer: source-backed pages, entity relations, current judgments, evidence timelines, and research synthesis pages.',
          },
          {
            title: 'Operational Hardening',
            description:
              'Added Git backup, cron verification, broken-link checks, audit checklists, and generated weekly HTML review artifacts.',
          },
        ],
      },
      {
        type: 'image',
        image: 'knowledgeosArchitecture',
        heading: 'System Architecture: Local Source of Truth, Agent Maintenance Layer',
        alt: 'KnowledgeOS system architecture diagram with inputs, agent maintenance layer, Markdown vault, and derived outputs',
        body: [
          'KnowledgeOS separates the system into four layers. Inputs come from real work: Hermes conversations, project updates, research sources, learning notes, career material, and product ideas. The agent maintenance layer applies capture rules, privacy filtering, classification, deduplication, synthesis, and audits.',
          'The knowledge layer remains local and legible: a Markdown vault organized around projects, AI workflows, product ideas, research wiki pages, and review logs. Derived outputs — Obsidian views, weekly HTML artifacts, resume bullets, portfolio material, and Git backups — are generated from that source of truth rather than becoming separate knowledge silos.',
        ],
      },
      {
        type: 'image',
        image: 'knowledgeosVaultStructure',
        heading: 'Designing the Agent Workflow',
        alt: 'KnowledgeOS vault structure and agent workflow for evaluating, classifying, updating, and reviewing knowledge',
        body: [
          'The core workflow starts before anything is written. When a conversation or task produces potentially reusable knowledge, the agent first evaluates whether it has long-term value. If it does, the agent checks privacy boundaries, searches for related existing notes, and decides whether to update a current page or create a new record.',
          'This prevents the vault from becoming a transcript dump. New project progress updates existing project memory. Product strategy updates the relevant product idea. Stable preferences belong in lightweight agent memory, while structured long-term knowledge goes into KnowledgeOS. Weekly synthesis and maintenance audits then keep the system from drifting as the vault grows.',
        ],
      },
      {
        type: 'image',
        image: 'knowledgeosCompiledTruth',
        heading: 'From Saved Notes to Maintained Judgment',
        alt: 'A sanitized KnowledgeOS project memory page showing current judgment, evidence timeline, and relations',
        body: [
          'One of the most important shifts was moving from saved knowledge to maintained judgment. This layer is where the influence from LLM Wiki and GBrain becomes explicit: source-backed pages preserve provenance, entity memory keeps projects, people, concepts, and tools connected, and current-judgment blocks make the latest synthesis easy for future agents to reuse.',
          'For example, a project page can hold the current strategic read, the dated events that support it, links to related workflows or research, and the next action. That structure makes the knowledge more useful to future AI sessions because the agent can retrieve the current state quickly instead of re-reading every historical note.',
        ],
      },
      {
        type: 'image',
        image: 'knowledgeosWeeklyReview',
        heading: 'Review Loops as Product Infrastructure',
        alt: 'KnowledgeOS weekly review or maintenance audit artifact showing automated synthesis and structure checks',
        body: [
          'KnowledgeOS uses review loops to keep the system alive. Daily capture turns high-value events into lightweight records. Weekly review synthesizes patterns across projects, decisions, learning, and career material. Maintenance audit checks structural health — broken links, vague placeholders, source coverage, backup status, and whether the system is drifting away from its rules.',
          'This turned the knowledge base into operational infrastructure. The system does not only remember; it periodically checks whether its own memory is still organized, connected, and useful.',
        ],
      },
      {
        type: 'metrics',
        heading: 'Evidence Snapshot',
        body: [
          'KnowledgeOS is a live personal system, so the clearest evidence is operational: the vault has structure, links resolve, automated workflows run, and the knowledge layer is backed up as a recoverable local asset.',
        ],
        metrics: [
          { value: '100+', label: 'Markdown knowledge files' },
          { value: '450+', label: 'Internal wikilinks' },
          { value: '0', label: 'Broken links at latest audit' },
          { value: '4', label: 'Scheduled maintenance workflows' },
          { value: 'Git-backed', label: 'Local-first recovery layer' },
        ],
        evidence: [
          {
            label: 'Knowledge quality',
            value:
              'Capture rules filter for reusable knowledge, project decisions, career material, workflows, and long-term patterns instead of preserving raw transcript dumps.',
          },
          {
            label: 'Operational reliability',
            value:
              'Daily capture, weekly review, maintenance audit, HTML artifact generation, and Git backup run through scheduled automation.',
          },
          {
            label: 'System evolution',
            value:
              'The system evolved from simple capture into source-backed compiled knowledge with current judgments, evidence timelines, relations, and retrieval benchmarks.',
          },
        ],
      },
      {
        type: 'text',
        heading: 'Key System Decisions',
        body: [
          'I chose Markdown over a database because the early risk was not query speed; it was ownership, inspectability, and maintenance. Markdown keeps the knowledge layer portable and human-readable while still being easy for agents to search, edit, and back up.',
          'I designed rules before automation because automating an unclear system only creates structured mess. The capture protocol defines what deserves to persist, what should be ignored, what needs privacy filtering, and when new information should update an existing page instead of creating another note.',
          'I used LLM Wiki and GBrain as reference projects, but treated them as patterns rather than templates. From LLM Wiki, I pulled the idea of source-backed compiled pages. From GBrain, I pulled the idea of persistent entity memory and relationship-aware context. KnowledgeOS combines those ideas with a local-first Markdown workflow and Hermes-driven maintenance loops.',
          'I also prioritized review loops over passive archive. The most valuable layer is not the folder tree; it is the recurring process that turns scattered updates into current judgment.',
        ],
      },
      {
        type: 'outcome',
        image: 'knowledgeosArchitecture',
        backgroundOverlayOpacity: 0.72,
        heading: 'Reflection',
        body: [
          'KnowledgeOS changed the role of a personal knowledge system from a place where I store notes into an infrastructure layer that helps me maintain judgment. The hardest part of AI-native knowledge work is not generation — it is maintenance: deciding what deserves to persist, where it belongs, how it should update, and when old context should be rewritten into a clearer current understanding.',
          'For me, this project sits at the intersection of human factors, product design, and agentic systems. It is not about adding AI to a note-taking tool. It is about redesigning the responsibility boundary between human and machine: the human thinks, builds, and decides; the agent maintains the context that makes those decisions compound.',
        ],
      },
    ],
  };
````

## File: app/data/content/en/projects/little-lemon.js
````javascript
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
````

## File: app/data/content/en/projects/porsche-digital-interface.js
````javascript
export const porscheProject = {
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
  };
````

## File: app/data/content/en/projects/posture-checker.js
````javascript
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
````

## File: app/data/content/en/projects/sayit.js
````javascript
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
````

## File: app/data/content/en/projects/trekassist.js
````javascript
export const trekassistProject = {
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
  };
````

## File: app/data/content/en/index.js
````javascript
import { sayitProject } from './projects/sayit.js';
import { knowledgeosProject } from './projects/knowledgeos.js';
import { porscheProject } from './projects/porsche-digital-interface.js';
import { postureProject } from './projects/posture-checker.js';
import { trekassistProject } from './projects/trekassist.js';
import { etongueProject } from './projects/etongue-sensory-platform.js';
import { littleLemonProject } from './projects/little-lemon.js';
import { allWorkProject } from './projects/all-work.js';

export {
  sayitProject,
  knowledgeosProject,
  porscheProject,
  postureProject,
  trekassistProject,
  etongueProject,
  littleLemonProject,
  allWorkProject,
};
````

## File: app/data/content/zh/projects/all-work.js
````javascript
export const allWorkProject = {
  slug: 'all-work',
  title: '全部项目',
  description:
    '一个更完整的作品索引，覆盖已发布产品、实习项目、原型和探索性构建，横跨产品设计、移动开发与 AI 工具。',
  roles: ['产品设计', 'UX 研究', '移动开发', 'AI 集成', '原型设计'],
  summary: {
    title: '全部项目',
    description:
      '已发布产品、实习工作、原型和探索性构建的索引——主页精选案例背后的更完整作品集。',
    modelType: 'laptop',
    modelAlt: '额外作品集项目概览',
  },
  sections: [
    {
      type: 'text',
      heading: '更完整的作品集',
      body: [
        '主页上的精选案例覆盖的是我最希望完整讲清楚过程的工作。这个页面收纳其余内容：已发布产品、真实实习项目、课程驱动的案例研究，以及一些塑造我设计与工程思考方式的小型构建。',
        '共同线索与精选项目一致：降低复杂度，让交互模型更清楚，并把想法推进到真正可以被测试或发布的形态。',
      ],
    },
    {
      type: 'project-grid',
      heading: '精选工作',
      tagsLabel: '工具与方法',
      ctaLabel: '查看案例',
      body: [
        '近期和持续项目的可扫读视图。精选案例可以进入完整项目页，其余项目在这里做摘要展示。',
      ],
      items: [
        {
          title: 'SayIt',
          timeframe: '2026 年 4 月 · 已发布',
          description:
            '生产级 macOS 菜单栏语音转文字 App。支持全局快捷键、本地 Whisper、签名与公证，并在 GitHub Releases 发布 v1.0.5。',
          tags: ['Swift', 'SwiftUI', 'whisper.cpp', 'AppKit'],
          href: '/zh/projects/sayit',
        },
        {
          title: 'KnowledgeOS',
          timeframe: '2026 年 5 月 · 运行中的系统',
          description:
            '由 agent 维护的个人知识系统，基于 Markdown、Obsidian、Hermes Agent、cron 工作流和 Git 备份构建。用于把日常对话、项目更新和研究沉淀为长期上下文。',
          tags: ['AI Systems', 'Knowledge Architecture', 'Markdown', 'Automation'],
          href: '/zh/projects/knowledgeos',
        },
        {
          title: 'TrekAssist',
          timeframe: '2025 年 9 月 – 12 月 · Tufts',
          description:
            '太阳能电子墨水屏国家公园导览设备。通过 9 位参与者、6 个户外场景任务进行可用性测试，并发现和处理 Low Power 可发现性问题。',
          tags: ['Human Factors', 'Figma', 'Usability Testing', 'E-Ink'],
          href: '/zh/projects/trekassist',
        },
        {
          title: 'Porsche Digital Interface',
          timeframe: '2024 年 6 月 – 9 月 · Porsche Asia Pacific',
          description:
            '为 Porsche Communication Management 设计车载交互原型。通过迭代式 UI 调整，帮助界面加载时间降低约 30%。',
          tags: ['UX/UI', 'Multimodal', 'Figma', 'Automotive HMI'],
          href: '/zh/projects/porsche-digital-interface',
        },
        {
          title: 'Posture Checker',
          timeframe: '2024 年 9 月 – 12 月',
          description:
            '跨平台 React Native App，配合自制 BLE 姿势传感器使用。支持实时追踪、趋势查看和纠正性推送通知。',
          tags: ['React Native', 'BLE', 'Firebase', 'Hardware'],
          href: '/zh/projects/posture-checker',
        },
        {
          title: 'AI-Driven Multimodal UX (China GPI Tech)',
          timeframe: '2023 年 6 月 – 8 月 · 实习',
          description:
            '设计融合语音、触控和 GUI 的多模态 UX 流程。优化 NLP 语音指令，将语音识别准确率提升到 95%。',
          tags: ['Multimodal UX', 'NLP', 'Voice Interaction'],
        },
        {
          title: 'Little Lemon Restaurant',
          timeframe: '2024 · Google UX Capstone',
          description:
            '通过用户研究和可用性测试迭代的响应式餐厅预约与点餐体验。Google UX Design Certificate capstone。',
          tags: ['UX Design', 'Figma', 'Responsive'],
          href: '/zh/projects/little-lemon',
        },
        {
          title: 'Meta iOS Developer · Capstone',
          timeframe: '2024 · Coursera',
          description:
            '原生 iOS 项目，覆盖 Swift、Core Data、版本控制，以及 Meta iOS Developer Professional Certificate 中的产品级 UI/UX 研究。',
          tags: ['Swift', 'Core Data', 'iOS'],
        },
        {
          title: 'Private & Client Work',
          timeframe: '可按需介绍',
          description:
            '其他位于客户产品内部的 design system、原型和偏实现型工作。可按需进行 walkthrough。',
          tags: ['Design Systems', 'Prototyping', 'Frontend'],
        },
      ],
    },
    {
      type: 'outcome',
      heading: '想进一步了解？',
      body: [
        '如果这个页面里的某个项目与你正在招聘的角色相关，欢迎联系我——我很乐意讲解那些不适合放进公开案例页的流程、决策和权衡。',
      ],
    },
  ],
};
````

## File: app/data/content/zh/projects/etongue-sensory-platform.js
````javascript
export const etongueProject = {
  slug: 'etongue-sensory-platform',
  title: 'E-Tongue Sensory Decision Support Platform',
  description:
    '一个以人为中心的决策支持平台，将 E-Tongue 机器味觉数据与半训练感官评审反馈结合，帮助食品开发团队比较原型并做出 Go / Tweak / Stop 决策。',
  roles: [
    'UX Researcher + UI Designer',
    'Human Factor Product Design',
    '决策支持 UX',
    '原型设计',
    '可用性测试',
  ],
  summary: {
    title: 'E-Tongue Sensory Platform',
    description:
      '一个 Human Factor Product Design 案例，探索食品开发者如何结合机器味觉测量与评审感知数据，做出更清晰的早期产品决策。',
    modelType: 'laptop',
    modelAlt: '笔记本电脑上展示的 E-Tongue 感官决策支持原型',
    quickFacts: [
      { label: '角色', value: 'UX Researcher + UI Designer' },
      { label: '课程', value: 'Human Factor Product Design' },
      { label: '方法', value: '利益相关者研究、任务分析、原型设计、可用性测试' },
      { label: '结果', value: '用于混合感官评估和 Go / Tweak / Stop 决策支持的早期原型' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'etongueEarlyPrototype',
      alt: 'E-Tongue 感官决策支持平台早期原型演示',
    },
    {
      type: 'text',
      heading: '项目背景',
      body: [
        '在 Human Factor Product Design 课程中，我们团队探索食品开发者如何通过结合两类非常不同的证据来评估产品样本：E-Tongue 机器味觉测量，以及半训练感官评审员的反馈。',
        '设计挑战不只是展示更多数据。我们需要帮助团队比较样本、理解机器读数与人类感知之间的不一致，并从原始感官证据推进到更清晰的产品决策。',
      ],
    },
    {
      type: 'image-text',
      image: 'etongueDeviceContext',
      heading: '理解感测系统',
      alt: '作为领域参考的商用 E-Tongue 味觉感测仪器',
      body: [
        '项目从一个物理感测系统开始，而不只是一个屏幕。E-Tongue 工作流涉及样本准备、机器测量，以及解释对食品科学团队有意义但对更广泛产品利益相关者不一定透明的输出。',
        '课程研究中的设备语境帮助我们围绕真实交接点设计平台：把技术测量转化为开发团队能够讨论、信任并采取行动的决策依据。',
      ],
    },
    {
      type: 'text',
      heading: 'UX 问题',
      body: [
        '机器味觉数据可以精确且可重复，但脱离领域语境后很难解释。人类评审反馈更丰富，也更接近真实感知，但它可能主观、缓慢，并且在参与者之间不一致。',
        '我们将核心 UX 问题定义为决策支持：平台如何帮助食品开发者理解样本之间发生了什么变化、为什么重要，以及下一步应该 Go、Tweak 还是 Stop？',
      ],
    },
    {
      type: 'image',
      image: 'etongueIssfDashboard',
      heading: '平台概念：ISSF Dashboard',
      alt: 'ISSF Dashboard 展示 E-Tongue + 半训练评审混合方法，并达到 94% 准确率',
      body: [
        'ISSF Dashboard 将混合方法愿景转化为一个可操作界面。状态栏说明核心方法——Semi-trained panel + E-Tongue + GC-O——并展示准确率（94%）、相关性（r=0.91）和样本量（n=127），让食品开发者在比较原型之前就能看到清晰的证据可信度。',
        '每个样本卡片在第一眼呈现 hedonic score，而 CATA attributes、intensity ratings 和 emotional profiles 面板则让开发者深入查看每个数字背后的具体证据。',
      ],
    },
    {
      type: 'timeline',
      heading: '流程时间线',
      body: [
        '项目从领域发现推进到任务分析、概念选择、基于角色的工作流、早期原型和形成性可用性测试。',
      ],
      items: [
        {
          title: '客户与领域发现',
          description:
            '梳理感官评估流程、E-Tongue 数据输出，以及食品开发者在比较产品原型时需要做出的决策。',
        },
        {
          title: '任务分析',
          description:
            '映射不同用户如何配置样本、收集评审反馈、解释机器测试结果，并跨产品比较证据。',
        },
        {
          title: '概念方向',
          description:
            '比较 dashboard、comparison tool 和 decision-support 方向后，优先选择能把证据转化为可行动建议的工作流。',
        },
        {
          title: '基于角色的原型',
          description:
            '将体验拆分为评审员问卷和食品开发者分析视图，让每个角色聚焦在合适的信息粒度。',
        },
        {
          title: '形成性测试',
          description:
            '通过 think-aloud 可用性测试观察问卷清晰度、术语理解、导航行为和评分量表中的困惑。',
        },
      ],
    },
    {
      type: 'image',
      image: 'etongueEarlyPrototype',
      heading: '早期原型演示',
      alt: '早期 E-Tongue 感官平台原型的视频演示',
      body: [
        '这段早期原型演示呈现了团队第一版端到端产品方向：基于角色的入口、样本工作流、感官问卷交互，以及用于解释结果的决策支持层雏形。',
        '我们有意把它作为流程证据，而不是最终打磨完成的产品。这个原型的价值在于，它让工作流具体到可以被批评、测试和迭代。',
      ],
    },
    {
      type: 'text',
      heading: '为混合感官证据设计',
      body: [
        '平台概念连接了评审员任务（如 CATA 选择、强度评分、喜好评分和情绪反应）与开发者任务（如配置样本、查看机器测试、分析一致性和做出最终产品判断）。',
        '我们没有让用户手动调和每张图表和每条反馈，而是强调解释层：信心、理由、一致性模式、异味检测，以及清晰的 Go / Tweak / Stop 建议。',
      ],
    },
    {
      type: 'gallery',
      heading: '混合证据的实际呈现',
      images: ['etongueTasteProfile', 'etongueIssfScore'],
      body: [
        '这是同一套混合证据工作流的两个视角。Taste Profile 雷达图展示来自 Insent TS-5000Z 的 9 轴 E-Tongue 输出——从酸味到浓郁度——并保留具体测量条件（2:5 稀释、40°C、7000rpm）。ISSF Score 视图则把机器数据和评审反馈合并为一个可行动建议：Go、Tweak 或 Stop，并附带信心、风险等级和预计节省成本。',
        '这两类界面让开发者能在原始感官信号和产品层决策之间切换，同时不丢失回溯证据的路径。',
      ],
    },
    {
      type: 'gallery',
      heading: '最终原型：ISSF Platform',
      images: [
        'etonguePrototypeMachineTesting',
        'etonguePrototypeAnalyzeResults',
        'etonguePrototypeFinalDecision',
        'etonguePrototypeConfigureProducts',
      ],
      body: [
        '最终原型通过四个核心视图呈现 ISS-F 平台。Machine Testing 支持团队比较最多 12 个产品样本和 2 个乳制品对照，覆盖 E-Tongue、GC-O aroma 和化学成分数据。Analyze Results 将 CATA attributes、intensity ratings、hedonic scores 和 semi-trained panelists 的 emotional profiles 与机器读数放在一起。',
        'Final Decision 将混合证据转化为 Go / Tweak / Stop 建议，每条建议都由 ISSF confidence scores、sensory profiles、trained-panel validation deltas 和预计节省成本支撑。Configure Products 支持管理员创建评估会话、管理评审员名单，并追踪产品从 Active 到 Complete 的状态。',
      ],
    },
    {
      type: 'image-text',
      image: 'etongueSensorCloseup',
      heading: '从传感器读数到决策线索',
      alt: 'E-Tongue 传感器探针特写，用作感测工作流设计语境',
      body: [
        '感测硬件让工作流背后的隐藏复杂度变得可见：多个探针、重复测量、校准预期和样本级比较，都服务于一个看似简单的问题——食品原型是否准备好继续推进。',
        '这种复杂度塑造了我们的界面优先级：平台需要保留技术可信度，同时给用户一条从传感器证据到产品层解释的可读路径。',
      ],
    },
    {
      type: 'metrics',
      heading: '测试快照',
      body: [
        '我们的可用性测试是形成性的：目标是在系统进一步打磨前，识别术语、量表设计和工作流预期可能失效的地方。',
      ],
      metrics: [
        { value: '3', label: '参与测试的评审员' },
        { value: '19–60', label: '参与者年龄范围' },
        { value: '3', label: '观察的核心问卷任务' },
      ],
      evidence: [
        {
          label: '术语支持',
          value:
            '参与者认为流程内定义很有帮助，尤其是在感官术语陌生或技术性较强时。',
        },
        {
          label: '量表清晰度',
          value:
            '不一致的评分格式和不清晰的情绪反应标签造成困惑，并成为迭代重点。',
        },
        {
          label: '工作流预期',
          value:
            '测试暴露了若干用户期待更清晰起始状态、更强进度提示和更一致交互模式的时刻。',
        },
      ],
    },
    {
      type: 'outcome',
      image: 'etongueSensorCloseup',
      heading: '反思',
      body: [
        '这个项目说明，复杂数据产品不会因为增加 dashboard 就自然变得可用。当人们需要在不确定性下做决策时，界面必须组织证据、呈现权衡，并解释为什么会产生某个建议。',
        '对我们团队来说，最重要的转变是从数据可视化走向决策支持 UX：在机器测量、人类感知和下一步产品开发行动之间设计一个共享解释层。',
      ],
    },
  ],
};
````

## File: app/data/content/zh/projects/knowledgeos.js
````javascript
export const knowledgeosProject = {
slug: 'knowledgeos',
    title: 'KnowledgeOS',
    description:
      '一个由 AI agent 维护的本地优先个人知识操作系统——将散落在日常对话、项目更新、研究和决策中的信息，转化为结构化 Markdown 知识，可被搜索、审查、审计和复用。',
    roles: ['AI 系统设计', '知识架构', 'Agent 工作流设计', '本地优先工具', '自动化', '个人基础设施'],
    summary: {
      title: 'KnowledgeOS',
      description: '一个由 agent 维护的个人知识系统，基于 Markdown、Obsidian、Hermes Agent、cron 工作流和 Git 备份构建——旨在将日常对话、项目更新、研究和决策转化为持久化的长期上下文。',
      modelType: 'laptop',
      modelAlt: 'KnowledgeOS 系统架构与 Markdown 知识库预览',
      quickFacts: [
        { label: '角色', value: 'Designer-Builder / 系统架构师' },
        { label: '方法', value: '信息架构、agent 工作流设计、自动化、审计循环' },
        { label: '技术栈', value: 'Markdown、Obsidian、Hermes Agent、Python、Cron、Git' },
        { label: '成果', value: '运行中的系统，含自动采集、审查、审计与备份' },
      ],
    },
    sections: [
      {
        type: 'hero-image',
        image: 'knowledgeosArchitecture',
        alt: 'KnowledgeOS 架构图，展示输入层、agent 维护层、Markdown 知识库与审查输出',
      },
      {
        type: 'text',
        heading: '概述',
        body: [
          'KnowledgeOS 是我为自身工作中反复出现的扩展问题设计和构建的本地优先个人知识操作系统：每天通过 AI 对话、项目更新、研究会议和产品决策产生大量有价值的上下文，但大部分在会话结束后就消失了。',
          '我不是把知识库当成一个手动归档笔记的地方。我把它设计成了一个由 agent 维护的系统。用户专注于思考、构建和决策；agent 处理维护层——分类有用信息、去重重复想法、更新项目记忆、合成每周模式、审计结构健康、随时间推移备份整个知识库。',
          '系统在存储层刻意保持简单。Markdown 仍然是真相来源，可被 Obsidian、VS Code、Git 和 Hermes Agent 读取。其编译知识层有意借鉴了 LLM Wiki 和 GBrain 的理念：有源可查的概念页面、实体记忆、关系映射以及 agent 可跨会话复用的当前判断。',
        ],
      },
      {
        type: 'text',
        heading: '问题：知识维护，而非知识存储',
        body: [
          'AI 工具使生成想法、计划、代码、研究摘要和决策变得更加容易。但同时也制造了一种新的失败模式：有价值的上下文散落在聊天线程、本地文件、项目笔记、浏览器标签页和记忆系统中，而这些系统并非为长期保存结构而设计。',
          '传统笔记工具大多只解决了存储问题。它们给用户一个存放信息的地方，但仍然依赖用户来决定什么重要、放在哪里、何时合并、以及在事实变化后旧笔记应如何更新。这种维护工作正是在速度下最先崩溃的部分。',
          '设计挑战在于构建一个系统，让 AI 不只是生成更多文本。它维护知识层：决定什么值得保留，将其连接到正确的长期上下文中，并定期将零散的更新改写为当前判断。',
        ],
      },
      {
        type: 'text',
        heading: '设计原则',
        body: [
          '第一条原则是 agent 维护，而非用户维护。KnowledgeOS 不应要求我手动分类每一条有用的想法。Hermes Agent 遵循采集规则来决定某条信息应该被忽略、追加到已有笔记、转化为项目记忆，还是保留为长期模式。',
          '第二条原则是 Markdown 作为真相来源。我避免了数据库、专有仪表盘和过早的向量基础设施，因为系统需要保持可检查、可移植和可恢复。每一份持久化的知识都存在于一个可被人类阅读、可被 agent 编辑的本地文件中。',
          '第三条原则是少存、维护好。KnowledgeOS 不保存原始对话转储。一条笔记必须能减少未来的重复解释、支持一个项目、改善一个决策、成为职业素材、捕获一个可复用工作流或阐明一个长期模式。系统被设计为保护注意力，而非归档一切。',
          '最后一条原则是当前判断优于被动存档。核心页面维护一个当前综合判断、一条证据时间线以及相关链接。目标不仅是记住发生了什么，而是让最新的有用理解易于检索。',
        ],
      },
      {
        type: 'timeline',
        heading: '从笔记到维护化的知识',
        body: ['KnowledgeOS 从一个简单的本地知识库，通过一系列架构、规则设计、自动化和运维加固决策，演化为一个持续运行的 agent 维护知识系统。'],
        items: [
          { title: '知识审计', description: '识别了 AI 对话、项目、研究、职业素材和产品决策中反复出现的上下文丢失问题。' },
          { title: '信息架构', description: '为项目、AI 工作流、产品想法、UX/HFE、职业、交易、学习、研究和审查设计了一个稳定的知识库结构。' },
          { title: '采集协议', description: '定义了哪些内容应保存、忽略、合并、匿名化或转化为长期项目记忆的规则。' },
          { title: 'Agent 自动化', description: '将 Hermes Agent 连接到每日采集、每周综合、维护审计和备份工作流。' },
          { title: '编译知识层', description: '添加了受 LLM Wiki / GBrain 启发的编译知识层：有源页面、实体关系、当前判断、证据时间线和研究综合页。' },
          { title: '运维加固', description: '添加了 Git 备份、cron 验证、失效链接检查、审计检查清单以及自动生成的每周 HTML 审查产物。' },
        ],
      },
      {
        type: 'image',
        image: 'knowledgeosArchitecture',
        heading: '系统架构：本地真相来源，Agent 维护层',
        alt: 'KnowledgeOS 系统架构图，含输入层、agent 维护层、Markdown 知识库和衍生输出',
        body: [
          'KnowledgeOS 将系统分为四层。输入来自真实工作：Hermes 对话、项目更新、研究来源、学习笔记、职业素材和产品想法。agent 维护层应用采集规则、隐私过滤、分类、去重、综合和审计。',
          '知识层保持本地化和可读性：一个围绕项目、AI 工作流、产品想法、研究 wiki 页面和审查日志组织的 Markdown 知识库。衍生输出——Obsidian 视图、每周 HTML 产物、简历要点、作品集素材和 Git 备份——都从该真相来源生成，而非成为独立的知识孤岛。',
        ],
      },
      {
        type: 'image',
        image: 'knowledgeosVaultStructure',
        heading: '设计 Agent 工作流',
        alt: 'KnowledgeOS 知识库结构与 agent 工作流，用于评估、分类、更新和审查知识',
        body: [
          '核心工作流在写入任何内容之前就已启动。当一次对话或任务产生可能可复用的知识时，agent 首先评估它是否具有长期价值。如果有，agent 会检查隐私边界，搜索相关已有笔记，并决定是更新当前页面还是创建新记录。',
          '这防止了知识库变成对话转储。新的项目进展更新已有的项目记忆。产品策略更新相关的产品想法。稳定偏好属于轻量级 agent 记忆，而结构化的长期知识进入 KnowledgeOS。每周综合和维护审计则确保知识库在规模增长时不会偏离轨道。',
        ],
      },
      {
        type: 'image',
        image: 'knowledgeosCompiledTruth',
        heading: '从保存的笔记到维护化的判断',
        alt: '一份脱敏的 KnowledgeOS 项目记忆页面，展示当前判断、证据时间线和关联关系',
        body: [
          '最重要的转变之一是从「保存的知识」转向「维护化的判断」。这一层明确体现了 LLM Wiki 和 GBrain 的影响：有源页面保留出处，实体记忆连接项目、人物、概念和工具，当前判断块让未来 agent 能够快速复用最新综合结果。',
          '例如，一个项目页面可以包含当前的战略判断、支撑它的事件时间线、相关工作流或研究的链接，以及下一步行动。这种结构让知识对未来 AI 会话更有用，因为 agent 可以快速检索当前状态，而不是重新阅读每一条历史笔记。',
        ],
      },
      {
        type: 'image',
        image: 'knowledgeosWeeklyReview',
        heading: '审查循环作为产品基础设施',
        alt: 'KnowledgeOS 每周审查或维护审计产物，展示自动化综合与结构检查',
        body: [
          'KnowledgeOS 使用审查循环保持系统活力。每日采集将高价值事件转化为轻量记录。每周审查综合跨项目、决策、学习和职业素材的模式。维护审计检查结构健康——失效链接、模糊占位符、来源覆盖度、备份状态，以及系统是否在偏离其规则。',
          '这把知识库变成了运维基础设施。系统不仅记忆；它定期检查自己的记忆是否仍然有序、连接和有用。',
        ],
      },
      {
        type: 'metrics',
        heading: '证据快照',
        body: ['KnowledgeOS 是一个运行中的个人系统，因此最清晰的证据是运维层面的：知识库有结构、链接可解析、自动化工作流在运行、知识层作为可恢复的本地资产已备份。'],
        metrics: [
          { value: '100+', label: 'Markdown 知识文件' },
          { value: '450+', label: '内部 wikilink' },
          { value: '0', label: '最近审计中的失效链接' },
          { value: '4', label: '定时维护工作流' },
          { value: 'Git 备份', label: '本地优先恢复层' },
        ],
        evidence: [
          { label: '知识质量', value: '采集规则筛选可复用知识、项目决策、职业素材、工作流和长期模式，而非保存原始对话转储。' },
          { label: '运维可靠性', value: '每日采集、每周审查、维护审计、HTML 产物生成和 Git 备份通过定时自动化运行。' },
          { label: '系统演进', value: '系统从简单采集演变为带有当前判断、证据时间线、关系映射和检索基准的有源编译知识。' },
        ],
      },
      {
        type: 'text',
        heading: '关键系统决策',
        body: [
          '我选择 Markdown 而非数据库，因为早期风险不是查询速度，而是所有权、可检查性和可维护性。Markdown 保持知识层可移植、人类可读，同时 agent 仍然可以方便地搜索、编辑和备份。',
          '我在自动化之前先设计规则，因为自动化一个模糊的系统只会制造结构化的混乱。采集协议定义了什么值得保留、什么应忽略、什么需要隐私过滤，以及何时新信息应更新已有页面而非创建另一条笔记。',
          '我用 LLM Wiki 和 GBrain 作为参考项目，但把它们当作模式而非模板。从 LLM Wiki，我汲取了有源编译页面的理念。从 GBrain，我汲取了持久实体记忆和关系感知上下文的理念。KnowledgeOS 将这些理念与本地优先的 Markdown 工作流和 Hermes 驱动的维护循环结合在一起。',
          '我还优先选择了审查循环而非被动存档。最有价值的一层不是文件夹树；而是将零散更新转化为当前判断的定期流程。',
        ],
      },
      {
        type: 'outcome',
        image: 'knowledgeosArchitecture',
        backgroundOverlayOpacity: 0.72,
        heading: '反思',
        body: [
          'KnowledgeOS 将个人知识系统的角色从「存放笔记的地方」转变为「帮助我维护判断的基础设施层」。AI 原生知识工作中最难的部分不是生成，而是维护：决定什么值得保留、它属于哪里、它应如何更新，以及何时旧上下文应被改写为更清晰的当前理解。',
          '对我而言，这个项目处于人因工程、产品设计和 agent 系统的交叉点上。它不是在笔记工具上添加 AI，而是重新设计人与机器之间的责任边界：人类思考、构建和决策；agent 维护使这些决策能够复合的上下文。',
        ],
      },
    ],
   };
````

## File: app/data/content/zh/projects/little-lemon.js
````javascript
export const littleLemonProject = {
  slug: 'little-lemon',
  title: 'Little Lemon Restaurant',
  description:
    '一个餐厅预订与点餐体验，关注直觉导航、可访问性，以及清晰的端到端预约流程。',
  roles: ['用户研究', 'UX 设计', '界面设计', '响应式设计'],
  summary: {
    title: 'Little Lemon',
    description:
      'Google UX Design Certificate 的 capstone 项目，围绕响应式餐厅浏览、预约和点餐流程，通过用户研究和可用性测试进行迭代。',
    modelType: 'phone',
    modelAlt: '手机上展示的 Little Lemon 餐厅 App 页面',
    quickFacts: [
      { label: '角色', value: 'UX Designer' },
      { label: '方法', value: '用户研究、可用性测试、响应式设计' },
      { label: '工具', value: 'Figma' },
      { label: '结果', value: 'Google UX Design Certificate capstone case study' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'littleLemonHero',
      alt: 'Little Lemon 餐厅移动端界面',
    },
    {
      type: 'text',
      heading: 'Capstone 背景',
      body: [
        'Little Lemon 是 Google UX Design Certificate 的 capstone 项目——一个以地中海社区餐厅为背景的设计 brief，用来完整走过 UX 流程。交付内容覆盖研究、问题定义、低保真和高保真原型、可用性测试与迭代。',
        '我没有只把它当作课程作业，而是把它作为一个受约束的产品练习：真实餐厅最难的 UX 问题和科技产品很像——快速找到想要的内容、顺畅完成交易，并建立足够信任让用户愿意再次回来。',
      ],
    },
    {
      type: 'text',
      heading: '设计挑战',
      body: [
        '用餐者通常带着三种意图之一进入：浏览菜单、预约座位，或下单。每个入口都需要在几秒内可达，优先适配手机，并且不强迫用户绕完整个网站。',
        '设计还需要跨响应式断点稳定工作并保持可访问性——可读字体、足够对比度、清晰焦点状态——同时不丢失社区餐厅本身的温暖感。',
      ],
    },
    {
      type: 'timeline',
      heading: 'UX 流程',
      body: [
        '项目遵循证书课程中的五阶段 UX 流程——共情、定义、构思、原型和测试——并在测试暴露新问题后循环回到前面的阶段继续迭代。',
      ],
      items: [
        {
          title: '共情',
          description:
            '通过用户访谈和餐厅预约体验竞品扫描，理解用餐者在预约前、中、后真正需要什么。',
        },
        {
          title: '定义',
          description:
            '将发现综合为 personas、user journeys 和问题陈述，聚焦第一次访问者与回访用餐者。',
        },
        {
          title: '构思',
          description:
            '梳理信息架构，为菜单、预约和点餐绘制不同布局，并选择值得原型化的方向。',
        },
        {
          title: '原型',
          description:
            '在 Figma 中构建低保真线框图和高保真 mockup，覆盖菜单浏览、预约、点餐和确认流程。',
        },
        {
          title: '测试与迭代',
          description:
            '围绕关键任务进行可用性测试，识别菜单导航和预约步骤中的摩擦点，并据此优化高保真流程。',
        },
      ],
    },
    {
      type: 'text',
      heading: '研究与用户需求',
      body: [
        '在早期访谈和竞品分析中，三个需求反复出现：用户落地几秒内需要知道“这是什么样的餐厅”；菜单必须能在手机上快速浏览且不需要横向滚动；预约流程不能把日期、时间和人数隐藏在额外页面之后。',
        '这三个需求成为后续设计必须回应的约束。任何会把注意力从它们身上移开的东西——促销 banner、过大的 hero 图、次要 CTA——都必须证明自己有必要，否则就被删掉。',
      ],
    },
    {
      type: 'gallery',
      heading: '界面探索',
      images: ['littleLemonMenu', 'littleLemonReservation'],
      body: [
        '高保真页面聚焦用户真正来完成的两个流程：浏览菜单和预约座位。两者都能从首页一键到达，在移动端无需缩放即可阅读；视觉系统依靠温暖中性色和清晰字体层级，而不是装饰。',
      ],
    },
    {
      type: 'text',
      heading: '可用性测试',
      body: [
        '可用性测试围绕核心流程展开：找到菜单项、完成预约、查看订单。我观察参与者在哪些地方犹豫、是否意外按返回、以及任何他们停下来问“等等，哪里有……”的时刻。',
        '反复出现的问题不大但真实：预约流程需要更清楚的步骤指示，菜单在移动端需要更强的分类 affordance，确认状态需要让人明确感到流程已经结束，而不是像一个过渡页。这些都直接进入下一轮迭代。',
      ],
    },
    {
      type: 'text',
      heading: '可访问性与响应式设计',
      body: [
        '可访问性被当作视觉系统的一部分，而不是最后才检查的清单。字体比例、色彩对比、焦点状态和点击目标尺寸都与品牌色板一起定义，让每个页面默认继承这些基础。',
        '响应式行为保持同一套主要动作在任何断点都容易触达。移动端中，菜单和预约入口保持在首屏附近；大屏中，布局获得更多呼吸空间，但底层层级不被打乱。',
      ],
    },
    {
      type: 'outcome',
      image: 'littleLemonHero',
      heading: '反思',
      body: [
        'Little Lemon 是让我理解“UX 流程”不是一套要表演的步骤，而是一个反馈循环的项目：每一阶段都会继续压缩问题，直到设计的复杂度真的有理由存在。真正有影响的改变大多来自删减，而不是增加。',
        '它也重塑了我对产品视觉识别的理解。社区餐厅的温暖感不是来自装饰，而是来自清晰层级、克制的图像使用，以及相信内容本身能承载品牌。这成为我之后每个产品项目都会带入的习惯。',
      ],
    },
  ],
};
````

## File: app/data/content/zh/projects/porsche-digital-interface.js
````javascript
export const porscheProject = {
  slug: 'porsche-digital-interface',
  title: 'Porsche Digital Interface',
  description:
    '为 Porsche Taycan 重新设计车载数字体验，聚焦导航、语音交互和更安全的多模态操控。',
  roles: ['UX Research', 'UX Design', 'UI Design', 'Product Design', 'Prototyping'],
  summary: {
    title: 'Porsche Digital Interface',
    description:
      'Porsche Taycan 车载 HMI 重设计：基于用户研究的交互流程与高保真原型，覆盖导航、语音控制与 AI 辅助，聚焦更安全的多模态交互。',
    modelType: 'laptop',
    modelAlt: 'Porsche Digital Interface 原型在笔记本上展示',
    quickFacts: [
      { label: '角色', value: 'UX / UI Designer（Porsche Asia Pacific 实习）' },
      { label: '方法', value: 'UX 研究、多模态流程设计、原型制作' },
      { label: '工具', value: 'Figma' },
      { label: '成果', value: 'UI 优化迭代后界面加载时间降低 30%' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'porscheHome',
      alt: 'Porsche Digital Interface 主屏幕',
    },
    {
      type: 'text',
      heading: '实习背景',
      body: [
        '我以 UX/UI 设计实习生的身份加入 Porsche Asia Pacific，嵌入负责 Porsche Communication Management 演化迭代的团队。PCM 是驾驶员和乘客在导航、媒体、空调、语音和辅助功能中接触的车载信息娱乐界面。',
        '我的工作范围围绕 Taycan 级别的数字座舱展开：优化导航、语音控制和 AI 辅助等核心流程在实际驾驶场景下的体验，然后将设计决策沉淀为组件级规范，让工程团队可以直接落地。',
      ],
    },
    {
      type: 'text',
      heading: '问题定义',
      body: [
        '车载软件能力越强，混乱流程的代价就越高。一个正准备驶入高速的驾驶员不应该去思考某个控件在哪、语音是否在听、系统操作是否已确认。',
        '设计挑战在于：降低流程复杂度、提升界面响应性，并让触控、语音和 AI 辅助三者能够承载同一任务——这样驾驶员在任一时刻都可以选择最安全的交互方式，而不是被屏幕当前显示的内容锁死。',
      ],
    },
    {
      type: 'timeline',
      heading: '项目流程',
      body: [
        '工作经历了六个阶段——调研、映射、低保真探索、高保真设计、工程交接和交接后优化——设计意图与平台渲染能力之间持续往返迭代。',
      ],
      items: [
        {
          title: '调研与审计',
          description:
            '审查现有 PCM 流程、竞品车载 HMI 和驾驶员分心指南，确定优先重设计的界面范围。',
        },
        {
          title: '流程映射',
          description:
            '端到端梳理语音、导航、巡航、车道保持和泊车辅助流程——包括失败、重试和重新进入路径。',
        },
        {
          title: '线框图',
          description:
            '低保真测试网格菜单、快捷控件栏和语音指令界面，比较信息密度、触达范围和扫视效率。',
        },
        {
          title: '高保真设计',
          description:
            '优化布局、字号体系、动效和色彩方案，确保在不同环境光线条件下的车内可读性。',
        },
        {
          title: '工程交接',
          description:
            '编写组件级 UI 规范、动效行为和边缘状态文档，让工程团队对每个界面有唯一权威源。',
        },
        {
          title: '性能优化',
          description:
            '与工程团队迭代微交互和资源权重，最终使界面加载时间降低 30%。',
        },
      ],
    },
    {
      type: 'image',
      image: 'porscheFlowchart',
      light: true,
      heading: '语音流程映射',
      alt: 'Porsche Digital Interface 语音指令交互流程图',
      body: [
        '在画任何界面之前，语音流程必须端到端清晰可读。流程图梳理了导航、巡航控制、车道保持和泊车辅助的监听、确认、执行和错误恢复路径——包括系统不理解时如何回应驾驶员，以及驾驶员如何在不盯着屏幕的情况下回到安全默认状态。',
        '这份产物既是设计工具，也是与工程的契约：它定义了哪些提示可以在哪些位置出现、驾驶员始终会收到什么反馈、以及在哪些情况下 AI 建议可以出现而不需要强制确认步骤。',
      ],
    },
    {
      type: 'text',
      heading: '多模态设计原则',
      body: [
        '驾驶员的注意力是有限且安全关键的。同一项任务——设定目的地、调节空调、接受巡航建议——应该可以通过当前时刻最安全的交互方式完成，而非只能通过屏幕上恰好展示的那一种。',
        '我围绕三个原则展开工作：每个主要操作都应通过触控和语音均可触达；AI 建议应该是可扫视且可忽略的，绝不应成为强制弹窗；反馈始终应确认系统状态，尤其是语音指令之后，这样驾驶员不需要低头去确认刚才发生了什么。',
      ],
    },
    {
      type: 'gallery',
      heading: '线框图',
      images: ['porscheWireframeMain', 'porscheWireframeNavigation'],
      body: [
        '线框图探索了基于网格的应用菜单、持久快捷控件、语音指令栏和实时系统状态反馈。核心目标是让主视图在一个扫视的瞬间就能被理解，同时确保任何主要任务不超过两次交互即可触达。',
      ],
    },
    {
      type: 'gallery',
      heading: '高保真原型',
      images: ['porscheHome', 'porschePrototype'],
      body: [
        '高保真原型将触控、视觉层级和语音辅助整合在一起。色彩和动效针对车内可读性进行了调校，布局复用了共享的基础组件，让相同的组件行为在导航、媒体和辅助界面之间保持一致。',
      ],
    },
    {
      type: 'text',
      heading: '加载时间优化',
      body: [
        '30% 的加载时间降低来自于交接期间和之后与工程团队的紧密迭代。组件规范被重写以复用共享原语，动画时长和资源权重根据平台渲染预算进行了调优，多个冗余的过渡状态合并为单一的规范路径。',
        '我带走的一个重要启示是：性能不是下游的"工程问题"。层级、过渡复杂度和资源选择等设计决策，都会直接反映在界面实际加载时的体感上——因此把交接视为设计的延续而非设计的终点，是那个可量化成果之所以成立的关键。',
      ],
    },
    {
      type: 'metrics',
      heading: '成果概览',
      body: [
        '微交互和组件级 UI 规范的迭代，在工程交接阶段直接转化为可量化的性能和清晰度提升。',
      ],
      metrics: [
        { value: '30%', label: '界面加载时间降低' },
        { value: '4', label: '多模态流程交付（触控 · 语音 · AI · GUI）' },
        { value: '12+', label: '高保真组件规范交付' },
      ],
      evidence: [
        {
          label: '性能',
          value:
            '微交互和资源权重的迭代调优使导航、语音和辅助界面的加载时间降低 30%。',
        },
        {
          label: '跨职能对齐',
          value:
            '设计理念和交互流程的讲解帮助设计与工程团队在可用性目标、视觉一致性和技术可行性上对齐，并在开发启动之前达成共识。',
        },
        {
          label: '多模态覆盖',
          value:
            '交互流程覆盖触控、语音指令和 AI 驱动辅助——使驾驶员能够在任一时刻通过最安全的方式完成同一任务。',
        },
      ],
    },
    {
      type: 'outcome',
      image: 'porscheOutcome',
      heading: '反思',
      body: [
        '为车载 HMI 做设计，强化了我对注意力预算、错误恢复和每一张额外屏幕成本的思考方式。交付给驾驶员使用的界面必须吸收用户没有时间去给予的上下文——天气、交通、交互偏好、疲劳状态——而不需要他们把系统的状态再翻译回安全。',
        '我带走的最宝贵习惯是把工程交接视为设计本身的一部分。30% 加载时间降低这样的可衡量成果，是设计与实现共同迭代的产物，而不是某一方把"已完成的工作"抛过墙来的结果。',
      ],
    },
  ],
};
````

## File: app/data/content/zh/projects/posture-checker.js
````javascript
export const postureProject = {
  slug: 'posture-checker',
  title: 'Posture Checker',
  description:
    '一款跨平台坐姿监测 App，使用 React Native 和 Bluetooth Low Energy 追踪实时坐姿数据、可视化进度并发送纠正提醒。',
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
      '一款 React Native 移动应用，搭配 BLE 可穿戴传感器，提供实时纠正反馈、本地存储坐姿数据，并可视化背部健康进展。',
    modelType: 'phone',
    modelAlt: 'Posture Checker 应用界面在手机上展示',
    quickFacts: [
      { label: '角色', value: 'Product Designer + Mobile Developer（独立完成）' },
      { label: '方法', value: '用户研究、BLE 原型、系统架构、推送反馈闭环' },
      { label: '工具', value: 'React Native, Expo, BLE, Arduino, Firebase, Figma' },
      { label: '成果', value: '跨平台 iOS + Android App，搭配定制 BLE 坐姿传感器' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'postureApp',
      alt: 'Posture Checker 应用界面',
    },
    {
      type: 'text',
      heading: '为什么做坐姿，为什么连硬件也做',
      body: [
        '我每天大部分时间都在桌前度过，而市面上大多数坐姿 App 要么依赖手机陀螺仪（只有把手机绑在身上才有效），要么依赖摄像头检测（要求固定坐姿、侵入感强）。两者都无法在正常工作日中存活。',
        '我想验证一个假设：用一颗小型专用传感器——通过 Bluetooth Low Energy 与用户随身携带的手机配对——能否弥补这个缺口：持续、低摩擦、尊重隐私的反馈，同时保持在一个用户熟悉的移动界面中。',
      ],
    },
    {
      type: 'text',
      heading: '问题发现',
      body: [
        '对现有坐姿 App 的扫描揭示了一个反复出现的模式：实时反馈要么过于侵入（每次弯腰都震动一下），要么完全缺失（只有一天结束后的总结）。长期行为改变需要的是中间地带——当坐姿确实持续差到值得关注时才触发反馈，同时提供用户可以回顾的趋势数据，不需要额外努力。',
        '这个判断给了项目两个不可妥协的约束：（1）一个能持续捕获坐姿数据的传感器，不依赖手机摆放位置；（2）一个尊重用户注意力、但仍能在日常中发挥作用的反馈闭环。',
      ],
    },
    {
      type: 'timeline',
      heading: '项目流程',
      body: [
        '作为独立 designer-builder，我把项目视为一个连续的循环：设计约束引导硬件决策，硬件行为重塑 UI，而 UI 又暴露了数据层的新问题。',
      ],
      items: [
        {
          title: '调研',
          description:
            '审计坐姿 App 和可穿戴设备；定义目标用户（久坐的知识工作者和学生）及核心反馈缺口。',
        },
        {
          title: '硬件原型',
          description:
            '用 Arduino 搭建基于 BLE 广播的坐姿传感器，验证小型低功耗设备能够持续传输坐姿数据。',
        },
        {
          title: '系统架构',
          description:
            '定义传感器到 React Native App 再到本地存储和 Firebase 的数据流，包括重连和离线行为。',
        },
        {
          title: 'UX 设计',
          description:
            '围绕实时状态、每日目标、趋势和快捷设置，线框化一个单仪表板的移动端体验。',
        },
        {
          title: 'BLE 集成',
          description:
            '实现配对流程、实时数据流和重连处理——这是整个系统在真实环境中最可能静默失效的部分。',
        },
        {
          title: '反馈闭环调优',
          description:
            '引入基于持续时长的推送通知，只在姿势持续不佳时才报警而非每次瞬间弯腰都提示；随后根据用户实际关心的内容优化趋势和历史界面。',
        },
      ],
    },
    {
      type: 'image-text',
      image: 'postureArchitecture',
      light: true,
      heading: '系统架构',
      alt: 'Posture Checker 系统架构图',
      body: [
        '架构横跨 BLE 坐姿传感器、React Native 客户端（iOS + Android）、用于离线韧性的本地存储、用于同步和认证的 Firebase、趋势图表，以及形成纠正反馈闭环的推送通知。作为一个人从端到端设计这一体系，每一层都必须刻意保持简单。',
      ],
    },
    {
      type: 'image-text',
      image: 'postureActivity',
      heading: '用户活动流程',
      alt: 'Posture Checker 用户活动流程',
      body: [
        '用户流程覆盖 App 启动、蓝牙配对、设备检测、实时坐姿分析、纠正通知和进度可视化。配对被视为一流的产品时刻——而非隐藏在设置中的步骤——因为整个产品的价值取决于它第一次就能成功。',
      ],
    },
    {
      type: 'text',
      heading: '硬件与连接决策',
      body: [
        '选择 BLE 而非 USB 或 Wi-Fi 有三点原因：它保留了小型可穿戴设备的全天电池续航；它能与用户随身携带的手机干净配对；其连接模型（广播 → 连接 → 流式传输）能映射到一个可以从断连中优雅恢复的移动端 UX。',
        '采样率设为 1 Hz。更高的采样率增加了电池消耗和噪声，但没有改变行为信号——持续数秒的坐姿才是重要的，而非毫秒级的抖动。本地存储持有原始流，确保即便网络不可用，趋势和历史仍然可用。',
      ],
    },
    {
      type: 'image',
      image: 'postureWireframe',
      light: true,
      heading: '线框图',
      alt: 'Posture Checker 线框图',
      body: [
        '线框图将坐姿状态、每日目标、设置、统计和核心导航组织为单一仪表板结构。核心假设是：每天几次、每次几秒钟的快速查看，比一个用户必须"进入并探索"的重度 App 更有价值。',
      ],
    },
    {
      type: 'image',
      image: 'posturePrototype',
      dark: true,
      heading: '高保真原型',
      alt: 'Posture Checker 高保真原型界面',
      body: [
        '高保真原型将追踪、目标进度、分析和设置浓缩为一个适合每日重复使用的平易近人界面。信息密度刻意控制在很低的水平：主视图在回答任何其他问题之前，先回答"我现在坐得怎么样？"',
      ],
    },
    {
      type: 'comparison-columns',
      image: 'postureFinalApp',
      light: true,
      heading: '设计反馈闭环',
      alt: 'Posture Checker 最终应用界面',
      body: [
        '产品中最冒险的 UX 决策是何时打断用户。每次弯腰都通知，会训练用户忽略 App；只在一天结束时汇总，又错过了纠正行为的关键时刻。',
        '我采用了一个基于持续时长的模型：反馈仅在姿势持续不佳超过可配置时长后才触发。结合趋势可视化，它将 App 从"唠叨"转变为习惯建立的载体——用户看到的是"今天 vs 昨天"，而不只是"你又驼背了"。',
      ],
    },
    {
      type: 'metrics',
      heading: '构建概览',
      body: [
        '构建覆盖了完整的产品面：一个硬件配对移动 App、端到端的交互模型，以及一个旨在让坐姿习惯变得可见的反馈闭环。',
      ],
      metrics: [
        { value: '2', label: '交付平台（iOS + Android，基于 React Native）' },
        { value: '1', label: '集成定制 BLE 坐姿传感器' },
        { value: '5+', label: '核心界面（状态、目标、趋势、历史、设置）' },
        { value: '1 Hz', label: '实时坐姿采样频率' },
      ],
      evidence: [
        {
          label: '软硬件集成',
          value:
            '设计并实现 BLE 配对流程，将 React Native App 连接到定制坐姿传感器，包括重连处理和实时数据流。',
        },
        {
          label: '反馈闭环',
          value:
            '推送通知仅在持续坐姿不佳超过阈值后触发，支持行为改变而不因瞬间弯腰打扰用户。',
        },
        {
          label: '信息呈现',
          value:
            '实时状态、每日目标、历史趋势和良好/驼背可视化统一整合为单一移动端仪表板，用于日常快速查看。',
        },
      ],
    },
    {
      type: 'outcome',
      image: 'postureTeam',
      heading: '反思',
      body: [
        'Posture Checker 是我不再把"设计"和"工程"视为独立阶段的那个项目。硬件约束（电池、采样频率、BLE 重连）重塑了 UI；UI 揭示了系统实际需要保留哪些数据；而反馈闭环只有在设计意图和数据管线同时调优后才真正生效。',
        '最终交付的构建证明了一个独立的 designer-builder 可以将一个硬件集成移动产品从概念推进到一个完整的多屏可体验状态。如果继续迭代，我会优先做端侧趋势建模——在不依赖云端往返的情况下闭合更多反馈闭环。',
      ],
    },
  ],
};
````

## File: app/data/content/zh/projects/sayit.js
````javascript
export const sayitProject = {
slug: 'sayit',
    title: 'SayIt',
    description:
      '一款原生 macOS 菜单栏语音转文字工具，通过全局快捷键触发、本地转录，将语音转换为文本。交互设计以系统级工具的效率为标准——按下快捷键、说话、粘贴，整个过程不离开当前窗口。',
    roles: ['产品设计', 'SwiftUI', 'macOS 开发', '交互设计', 'AI 集成'],
    summary: {
      title: 'SayIt',
      description:
        '已发布的 macOS 语音转文字工具，端到端独立设计与开发。以隐私优先的菜单栏产品形态交付，支持全局快捷键、实时 HUD 反馈与本地 Whisper 转录。',
      modelType: 'macosUtility',
      modelAlt: 'SayIt macOS 菜单栏工具预览，展示悬浮面板与快捷键工作流',
      quickFacts: [
        { label: '角色', value: 'Designer-Builder（独立、端到端）' },
        { label: '方法', value: '产品设计、原生开发、端侧 AI' },
        { label: '工具', value: 'SwiftUI、Whisper、Xcode' },
        { label: '成果', value: '已发布 macOS 应用，支持 GitHub Releases 下载' },
      ],
    },
    sections: [
      {
        type: 'hero-image',
        image: 'sayitBrand',
        alt: 'SayIt 品牌标识与应用图标',
      },
      {
        type: 'text',
        heading: '产品机会',
        body: [
          'SayIt 的起点是一个简单的效率缺口。系统自带的听写功能会弹出一个打断写作流的模态窗口。云端转录工具虽然能用，但每个词都要经过别人的服务器往返一次，网络一断就失效。',
          '目标是做一个菜单栏工具，用起来和系统快捷键一样即时、原生：用全局快捷键从任意位置触发，本地转录，粘贴结果，用户始终不离开当前窗口。',
        ],
      },
      {
        type: 'text',
        heading: '为什么做成菜单栏工具',
        body: [
          '做成全窗口应用会直接削弱产品的核心价值。语音转文字只有在使用间隙中消失时，才能真正成为效率原语——需要时可见，不需要时安静。菜单栏给了应用一个常驻位置，却从不占据工作空间，这恰好是产品所需的人机关系。',
          '选择用原生 macOS 应用（而非 Electron 套壳）是一个刻意的决定。这个产品是被拿来和系统工具比较的，不是和其他应用比较；它必须像 Spotlight 一样轻，而不是像一个浏览器标签页。',
        ],
      },
      {
        type: 'timeline',
        heading: '从想法到 v1.0.5',
        body: [
          'SayIt 由一个人端到端设计并开发，随后通过 GitHub Releases 公开发布。以下阶段记录了从一个 SwiftUI 草图到一个已签名和公证的 macOS 二进制文件的完整路径。',
        ],
        items: [
          { title: '产品概念', description: '将产品定义为一个菜单栏语音转文字工具——全局快捷键、单一主操作、无全窗口 UI、默认端侧处理。' },
          { title: 'SwiftUI 原型', description: '搭建了 popover 表面、麦克风选择器与引擎设置，验证整个交互能否容纳在一个小型悬浮面板中。' },
          { title: 'whisper.cpp 集成', description: '接入端侧 Whisper 实现完全本地转录，包括模型选择以及模型缺失或下载中时的降级行为。' },
          { title: '快捷键与权限', description: '实现了全局快捷键捕获、麦克风访问提示以及辅助功能权限流程，使应用可以从任意活跃窗口触发。' },
          { title: '公证与分发', description: '搭建了签名、公证和 GitHub Releases 分发管线，使应用在 macOS 上干净安装，不会触发 Gatekeeper 警告。' },
          { title: '公开发布 (v1.0.5)', description: '经历了五个公开版本迭代，基于我日常使用中的体验，持续优化麦克风的稳定性、HUD 反馈和首次引导流程。' },
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverIdle',
        heading: '产品界面与核心控制',
        alt: 'SayIt popover 展示麦克风、引擎和开始录音控件',
        body: [
          '产品以紧凑的 popover 为中心：一个主操作按钮、一个麦克风选择器、一个转录引擎选项，以及轻量级的状态消息。界面在不被需要时保持安静，符合「工具」而非「传统全窗口应用」的预期。',
          '这个界面的设计决策是抵抗功能膨胀。每增加一个控件，都会让应用离「按快捷键、说话、粘贴」的核心体验更远一步。',
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverRecording',
        heading: '一键式录音流程',
        alt: 'SayIt popover 在录音和转录过程中的状态',
        body: [
          '交互被简化成一个可靠的切换操作：开始录音，停止并转录，然后自动复制结果。辅助状态——录音时长、实时音量、慢速转录提示和菜单栏 HUD 反馈——让应用保持可理解但不视觉过重。',
          'HUD 承担了大部分工作。一旦快捷键形成肌肉记忆，用户根本不需要看 popover；菜单栏图标和一个短暂的浮层就足以确认系统正在正确运行。',
        ],
      },
      {
        type: 'text',
        heading: '始终端侧',
        body: [
          '选择 whisper.cpp 而非云端 API，首先是一个产品决策，其次才是技术决策。本地转录意味着应用离线也能工作，永不产生每次请求的费用，并且给用户一个可信的隐私叙事——语音是敏感数据，「我们不会把它发到任何地方」比任何隐私政策都更有说服力。',
          '代价是模型体积与冷启动成本。应用暴露了引擎和模型选择功能，让轻量机型的用户可以选更小的模型，而更关注准确率的用户可以选更大的模型。',
        ],
      },
      {
        type: 'text',
        heading: '权限与快捷键的门槛',
        body: [
          '发布一个 macOS 工具最难的部分不是功能，而是操作系统要求的信任梯度。SayIt 需要麦克风权限来捕获音频，需要辅助功能权限来向其他应用粘贴文本。每一次权限弹窗都是用户可能流失的节点，而且每个弹窗都是 macOS 渲染的，不受应用控制。',
          '解决方案是把首次引导设计成围绕这些弹窗展开，而非围绕应用自己的 UI：在 macOS 弹出请求之前先解释为什么需要该权限，并在用户拒绝后提供一条可恢复的路径回到系统设置。快捷键本身使用标准的全局快捷键 API，配置面板允许用户在不重启应用的情况下重新绑定按键。',
        ],
      },
      {
        type: 'image-text',
        image: 'sayitIphoneMic',
        heading: '设备韧性与生态适配',
        alt: 'iPhone 连续互通麦克风连接到 macOS 上的 SayIt',
        body: [
          '麦克风的可靠性最终成为产品中最脆弱的部分。设备持续出现和消失——蓝牙耳机、外置声卡、连续互通麦克风、合盖——一个在句中丢失输入信号的转录工具，比一个从未启动的工具更糟糕。',
          '应用显式处理设备变更：它监控输入路由的变化，当所选麦克风消失时自动回退到一个合理默认值，并支持连续互通麦克风切换，这样在合盖和外接显示器场景下，iPhone 作为麦克风可以即插即用。',
        ],
      },
      {
        type: 'text',
        heading: '发布一个经过公证的 macOS 应用',
        body: [
          '要让除了我自己以外的人也能安装，代码库必须通过三道关卡：使用有效 Developer ID 证书进行代码签名、通过 Apple 公证以满足 Gatekeeper 要求，以及通过 GitHub Releases 分发的干净的发布产物。',
          '每一步单独来看都不大，组合起来却很折磨人——entitlements、hardened runtime、notary submission、stapling 和下载链接路径必须全部对齐，才能让一个陌生人双击应用就直接打开。把这条管线做可靠，是让 v1.0.5 的发布不需要每次手动干预的关键。',
        ],
      },
      {
        type: 'metrics',
        heading: '构建概览',
        body: [
          'SayIt 是一个表面面积小但深度可观的产品——音频采集、转录、权限和分发每一层都必须达到生产级标准，才能让一个用户双击下载的二进制文件就获得干净的体验。',
        ],
        metrics: [
          { value: 'v1.0.5', label: 'GitHub Releases 公开发布' },
          { value: '5', label: '迭代次数（麦克风、HUD、引导流程）' },
          { value: '100%', label: '通过 whisper.cpp 端侧转录' },
          { value: '2', label: '处理的系统权限（麦克风 · 辅助功能）' },
        ],
        evidence: [
          { label: '端到端交付', value: '独立设计并开发，覆盖产品界面、音频管线、转录引擎、权限体验以及签名/公证分发全链路。' },
          { label: '默认隐私优先', value: '音频从不离开设备——whisper.cpp 本地运行，模型选择暴露给用户以在自己的硬件上权衡准确率和速度。' },
          { label: '适配真实生态', value: '处理输入设备变更，支持连续互通麦克风切换，在权限缺失或模型缺失时可预期地降级。' },
        ],
      },
      {
        type: 'outcome',
        image: 'sayitBrand',
        heading: '反思',
        body: [
          'SayIt 是我从「为幻灯片做设计」转向「为二进制文件做设计」的项目。每一个决策——popover 的密度、HUD 的时机、模型的选择、权限的文案——都经过同一个问题的检验：这仍然像一个系统工具，还是开始像一个 App？',
          '在这个作品集中，SayIt 是我端到端产品交付的最强例证：找到一个聚焦的问题，塑造交互模型，选择合适的技术，交付一个经过签名和公证的 macOS 产品，真实用户今天就可以下载使用。',
        ],
      },
    ],
   };
````

## File: app/data/content/zh/projects/trekassist.js
````javascript
export const trekassistProject = {
  slug: 'trekassist',
  title: 'TrekAssist',
  description:
    '一款面向 Yellowstone 游客的太阳能电子墨水屏导览设备，通过以人为中心的设计流程支持户外导航、紧急响应、安全提醒和低功耗交互。',
  roles: [
    '人因工程',
    '安全关键 UX',
    '可用性测试',
    '电子墨水屏界面',
    '户外导航',
  ],
  summary: {
    title: 'TrekAssist',
    description:
      '一个团队 UX/HFE 案例：为太阳能户外电子墨水屏设备设计体验，并通过 9 位参与者、6 个场景任务验证导航、紧急支持与低功耗交互。',
    modelType: 'laptop',
    modelAlt: '笔记本电脑上展示的 TrekAssist 电子墨水屏国家公园导览界面',
    quickFacts: [
      { label: '角色', value: 'UX / 人因设计师（团队项目）' },
      { label: '方法', value: 'UI 设计、可用性测试（n=9）、场景任务、流程映射' },
      { label: '工具', value: 'Figma、电子墨水屏原型' },
      { label: '结果', value: '验证安全关键流程，并发现低电量模式可发现性问题' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'trekassistHomeAlert',
      alt: 'TrekAssist 首页，包含天气警报和导航选项',
    },
    {
      type: 'text',
      heading: '项目概览',
      body: [
        'TrekAssist 是一个面向 Yellowstone National Park 游客的太阳能电子墨水屏导览概念。作为团队 UX/HFE 项目，我们关注如何帮助游客在不熟悉的户外环境中导航、响应天气与安全提醒、获取紧急支持，并在严格的显示与电量限制下管理设备续航。',
        '它不是普通的手机旅行 App，而是为专用户外设备设计：800×600 横向电子墨水屏、有限色彩、最高 1Hz 刷新率。这些限制推动我们采用更静态的布局、更大的控件、持续可见的安全信息，以及只在关键交互中选择性使用颜色。',
      ],
    },
    {
      type: 'text',
      heading: '问题背景',
      body: [
        '国家公园游客经常需要在陌生且高度变化的环境中做判断。天气可能快速变化，路线可能不清晰，野生动物接触会带来安全风险，手机电量和信号也不总是可靠。',
        '设计挑战是：创造一个界面，帮助游客理解自己在哪里、注意重要提醒、快速访问紧急支持、浏览导览路线和目的地、为徒步做准备，并在长时间户外活动中节省电量。',
      ],
    },
    {
      type: 'timeline',
      heading: '流程时间线',
      body: [
        '这条流程把 TrekAssist 定位为一个受约束的人本设计过程，而不是一个静态界面概念。',
      ],
      items: [
        {
          title: '概念探索',
          description: '定义国家公园游客的问题空间与户外使用约束。',
        },
        {
          title: '流程映射',
          description: '梳理探索、安全、紧急响应和低功耗相关的用户流程。',
        },
        {
          title: '原型设计',
          description: '设计适合电子墨水屏的静态布局与大尺寸控件。',
        },
        {
          title: '可用性测试',
          description: '用 6 个场景任务测试 9 位参与者。',
        },
        {
          title: '发现综合',
          description: '确认紧急/导航流程表现较强，同时发现低电量模式可发现性不足。',
        },
        {
          title: '迭代优化',
          description: '优化提醒可见性、电量入口、地图可读性和安全 affordance。',
        },
        {
          title: '最终原型',
          description: '平衡探索、安全和低功耗户外交互。',
        },
      ],
    },
    {
      type: 'image',
      image: 'trekassistDiscoveryFlow',
      light: true,
      heading: '早期探索与信息架构',
      alt: 'TrekAssist 探索流程的用户界面流程图',
      body: [
        '团队在早期同时探索了安全优先和探索导向两种方向，随后将它们整合为一个关注安全、导航清晰度和电量感知交互的公园导览设备。流程映射帮助我们判断哪些内容应该放在界面顶层，哪些信息必须跨页面持续可见。',
      ],
    },
    {
      type: 'image',
      image: 'trekassistSafetyFlow',
      light: true,
      heading: '安全关键流程规划',
      alt: 'TrekAssist 安全流程的用户界面流程图',
      body: [
        '安全关键元素没有被藏在单独页面里。界面采用持续存在的全局元素：顶部警报栏显示当前提醒，全局 Emergency 按钮支持紧急访问，同时保留容易找到的设置和电量指示。这种结构既支持日常探索，也支持紧急安全场景。',
      ],
    },
    {
      type: 'gallery',
      heading: '关键界面决策',
      images: [
        'trekassistAlertModal',
        'trekassistEmergencyConfirmation',
        'trekassistMapMammoth',
      ],
      body: [
        '天气提醒通过顶部固定提醒条保持可见，当警报需要注意时可以展开为聚焦的弹窗。紧急联系保持全局可用，但通过确认步骤降低误触风险，同时不牺牲快速求助。',
        '地图将路线指引、当前警报、目的地信息、电量入口和紧急支持放在同一个静态布局中，适合低刷新率电子墨水屏设备。',
      ],
    },
    {
      type: 'text',
      heading: '可用性测试',
      body: [
        '为了评估原型，团队邀请 9 位参与者完成 6 个场景任务：查看天气警报、通过 Emergency 联系 ranger、开始 Mammoth Hot Springs 导览、查找 Yellowstone Lake 信息、查看长途徒步安全建议，以及开启 Low Power Mode。',
        '我们记录任务完成情况、完成时间、错误次数、尝试次数、易用性评分和定性反馈。目标不只是确认用户能不能完成任务，也要找出界面在哪些地方造成犹豫、困惑或额外负担。',
      ],
    },
    {
      type: 'metrics',
      heading: '测试快照',
      body: [
        '测试结合任务表现指标和定性评论，帮助我们判断界面在哪些地方支持了安全关键行为，在哪些地方制造了不必要的努力。',
      ],
      metrics: [
        { value: '9', label: '参与者' },
        { value: '6', label: '场景任务' },
        { value: '7/9', label: '低电量模式任务中出错' },
        { value: '22.8s', label: '低电量任务平均时间' },
        { value: '5.3/7', label: '低电量任务易用性评分' },
      ],
      evidence: [
        {
          label: '表现较强的任务区域',
          value:
            '紧急联系、天气警报、目的地信息和导览任务整体完成情况较好。',
        },
        {
          label: '关键问题',
          value:
            'Low Power Mode 虽然存在，但参与者并不总能发现在哪里开启。',
        },
        {
          label: '设计启发',
          value:
            '电量入口和省电提示需要更明显、更情境化，并与电池状态建立直接联系。',
        },
      ],
    },
    {
      type: 'image',
      image: 'trekassistPostTestConcept',
      light: true,
      heading: '发现与迭代',
      alt: 'TrekAssist 可用性测试后的原型概念页面',
      body: [
        '核心的紧急、天气、目的地和导览任务整体表现较好，说明大按钮结构和持续可见的安全元素有助于用户识别任务入口。',
        '测试前，Low Power Mode 在功能上可用，但位置依赖用户找到设置路径。测试后，电池图标与设置入口之间的关系成为重点重设计区域，后续方向指向更情境化的低电量提示和更可见的省电控制。',
        '测试也显示，纯灰阶界面会降低视觉吸引力，并让部分信息更难区分。因此最终方向选择性使用颜色，用于安全区分、视觉定位、层级和情绪吸引力。',
      ],
    },
    {
      type: 'image',
      image: 'trekassistSettings',
      light: true,
      heading: '低电量模式的可发现性',
      alt: 'TrekAssist 设置页面，包含电池和低电量选项',
      body: [
        '因为 Low Power Mode 存在但不容易被发现，设置与电池状态之间的关系成为关键迭代点。对于太阳能户外设备，省电控制不能被当作次级偏好，而应该在用户需要时立即可见。',
      ],
    },
    {
      type: 'gallery',
      heading: '最终原型流程',
      images: [
        'trekassistGuidedTours',
        'trekassistGuidedTourMammoth',
        'trekassistSafetyScreen',
      ],
      body: [
        '最终原型通过易扫读的导览卡片、目的地详情页和预防性安全内容，在探索与安全之间取得平衡。TrekAssist 不只是对紧急情况做反应，而是在用户做路线决策之前、之中和之后提供支持。',
      ],
    },
    {
      type: 'outcome',
      image: 'trekassistGrandPrismaticBg',
      backgroundOverlayOpacity: 0.68,
      heading: '反思',
      body: [
        'TrekAssist 让我看到，当产品从标准移动 App 转向受约束的户外设备时，界面设计会发生什么变化。安全关键和电量相关功能不只是“存在”就够了；它们必须在压力场景下立刻可发现、视觉上可区分、语义上可理解。',
        '电子墨水屏、有限刷新率和太阳能电池迫使团队简化布局、减少不必要的动效，并认真判断颜色在什么时候真正必要。最终结果是一个以流程为核心的 UX/HFE 案例，平衡游客安全、户外可读性、电量节省和公园探索。',
      ],
    },
  ],
};
````

## File: app/data/content/zh/index.js
````javascript
// Chinese project translations
import { sayitProject } from './projects/sayit.js';
import { knowledgeosProject } from './projects/knowledgeos.js';
import { porscheProject } from './projects/porsche-digital-interface.js';
import { postureProject } from './projects/posture-checker.js';
import { trekassistProject } from './projects/trekassist.js';
import { etongueProject } from './projects/etongue-sensory-platform.js';
import { littleLemonProject } from './projects/little-lemon.js';
import { allWorkProject } from './projects/all-work.js';

export {
  sayitProject,
  knowledgeosProject,
  porscheProject,
  postureProject,
  trekassistProject,
  etongueProject,
  littleLemonProject,
  allWorkProject,
};

export const portfolioProjects = [
  etongueProject,
  porscheProject,
  postureProject,
  trekassistProject,
  littleLemonProject,
  knowledgeosProject,
  allWorkProject,
  sayitProject,
];
````

## File: app/data/content/zh/site-content.js
````javascript
export const profileContent = {
  eyebrow: '关于我',
  heading: '在人因与复杂系统的接缝处做设计。',
  description:
    '我是牛拙Prince，关注 UI/UX、AI 产品与人因工程交叉方向的 designer-builder。目前在 Tufts 攻读 Human Factors Engineering 硕士，本科毕业于 Purdue 计算机工程。\n\n我习惯从真实问题出发，把模糊想法推进到可测试、可使用的产品形态。过程通常是：先判断什么值得解决，设计第一个可用流程，测试粗糙版本，然后把它真正做成能用的东西。\n\n我的工作重叠在人因、产品设计和工程之间。我特别关注那些让产品「变清楚而不是变混乱」的小瞬间：提示的时机、反馈的方式、出错的恢复路径、第一个让人感到对的点击。我最近交付了 Porsche Asia Pacific 的 PCM 车载界面 UI 工作（帮助将加载时间降低了约 30%），做过一个 BLE 配对的姿势追踪 App，并通过 GitHub Releases 发布了 SayIt——一个运行在 macOS 上的语音转文字工具。\n\n我正在寻找产品设计、UX 和人因方向的角色，关注打磨到位的产品、细致的 UI/UX 和复杂的多模态体验。',
  ctaLabel: '联系我',
};

export const contactContent = {
  title: '打个招呼',
  metaDescription:
    '关于产品设计、前端开发、移动项目或合作机会，欢迎联系。',
  privacyNote:
    '你的邮箱仅用于回复本条消息，不会被分享。',
  rateLimitedMessage:
    '你刚刚发了一条消息，请稍等一分钟再发。',
  successTitle: '消息已发送',
  successBody: '我会尽快回复，通常在一周内。感谢联系。',
  backLabel: '回到首页',
  unconfiguredMessage:
    '联系表单尚未配置。暂时请通过 GitHub 联系。',
  failedMessage:
    '消息发送失败。请稍后重试，或通过 GitHub 联系。',
};

export const usesContent = {
  metaDescription:
    '我在 Web、移动端和 macOS 上设计和交付产品时所使用的工具、框架、AI 工作流和硬件。',
  heroTitle: '常用工具',
  heroDescription:
    '一份不太完整的清单，涵盖我日常在 Web、移动端和 macOS 上设计和交付产品时依赖的工具、应用、框架和硬件。',
  sections: [
    {
      heading: '设计',
      items: [
        {
          label: 'Figma',
          url: 'https://www.figma.com',
          description:
            '我的主要 UI 设计环境——高保真原型、组件规格和大部分视觉产出都在这里。',
        },
        {
          label: 'Design Systems',
          description:
            '我在跨屏幕、跨平台和跨工程师协作时保持视觉和行为一致性的方法。',
        },
        {
          label: 'UI Components',
          description:
            '我习惯用可复用的构建块来思考界面：可组合、有文档、能应对设计变更。',
        },
        {
          label: 'Material Design',
          url: 'https://m3.material.io/',
          description:
            '设计 Android 或 Material 风格 Web 产品时的参考语言。',
        },
        {
          label: 'Human Interface Guidelines',
          url: 'https://developer.apple.com/design/human-interface-guidelines/',
          description:
            '设计 iOS、iPadOS 或 macOS 产品时的对应参考。',
        },
        {
          label: 'Human-Centered Design',
          description:
            '我带到每个项目里的视角：从用户的语境出发，而不是从功能列表出发。',
        },
        {
          label: 'User Research',
          description:
            '在打开画布之前，通过访谈和情境调研理解我到底在为谁设计。',
        },
        {
          label: 'Usability Testing',
          description:
            '用结构化任务场景和指标（成功率、完成时间、错误数、易用性评分）驱动迭代。',
        },
        {
          label: 'Typography',
          description:
            '选择和搭配字体是让界面立刻显得有意图的最快方式。',
        },
        {
          label: 'Color Theory',
          description:
            '色板、层级和关注无障碍对比度的用色。',
        },
      ],
    },
    {
      heading: '开发',
      items: [
        {
          label: 'Python',
          url: 'https://www.python.org/',
          description:
            '我后端服务、数据处理和快速脚本的主力语言。',
        },
        {
          label: 'Swift + SwiftUI',
          url: 'https://developer.apple.com/swift/',
          description:
            '做原生 macOS 或 iOS App 时的首选。',
        },
        {
          label: 'JavaScript',
          url: 'https://developer.mozilla.org/docs/Web/JavaScript',
          description:
            '一切浏览器相关的基础胶水——仍然是大部分 Web 工作的起点。',
        },
        {
          label: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          description:
            '当 JS 项目超过一个页面、我希望编译器帮我抓错误的时候会切换过来。',
        },
        {
          label: 'React',
          url: 'https://react.dev/',
          description:
            '我的主力 Web UI 库——组件模型和我的设计师思维很合拍。',
        },
        {
          label: 'React Native',
          url: 'https://reactnative.dev/',
          description:
            '做跨平台移动端时用的一套代码覆盖 iOS 和 Android。',
        },
        {
          label: 'HTML & CSS',
          description:
            '基本功；仍然是被低估的前端技能。',
        },
        {
          label: 'Tailwind CSS',
          url: 'https://tailwindcss.com/',
          description:
            '新 Web 项目的默认样式层——utility-first 让我保持快速推进。',
        },
        {
          label: 'C / C++',
          description:
            '需要贴近硬件的时候会降到这里。',
        },
      ],
    },
    {
      heading: '工具、API 与数据',
      items: [
        {
          label: 'Git',
          url: 'https://git-scm.com/',
          description: '我碰到的每个项目都用版本控制。',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/',
          description:
            '代码、Release 和 CI 都在这——包括签名和公证后的 macOS 分发流程。',
        },
        {
          label: 'Firebase',
          url: 'https://firebase.google.com/',
          description:
            '做快速移动端构建时，认证和实时数据的首选。',
        },
        {
          label: 'Expo',
          url: 'https://expo.dev/',
          description:
            'React Native 工具链——构建、开发客户端和 OTA 更新都靠它。',
        },
        {
          label: 'Xcode',
          url: 'https://developer.apple.com/xcode/',
          description:
            '所有 Swift、SwiftUI 和 Apple 平台调试的 IDE。',
        },
        {
          label: 'RESTful APIs',
          description: '服务间通信的默认方式。',
        },
        {
          label: 'GraphQL',
          url: 'https://graphql.org/',
          description:
            '当每个页面的数据形状差异大、我只想拉需要的数据时会更倾向用这个。',
        },
        {
          label: 'SQL',
          description: '日常查询关系型数据的语言。',
        },
        {
          label: 'PostgreSQL',
          url: 'https://www.postgresql.org/',
          description:
            '超出原型阶段后的默认关系型存储。',
        },
        {
          label: 'FastAPI',
          url: 'https://fastapi.tiangolo.com/',
          description:
            '做 API 和快速后端原型时用的 Python 框架。',
        },
      ],
    },
    {
      heading: 'AI 与 Agent 工具',
      items: [
        {
          label: 'Prompt Engineering',
          description:
            '设计和迭代 prompt，从 LLM 中获取可靠、结构化的输出。',
        },
        {
          label: 'AI 辅助编程',
          description:
            '全天和模型结对编程，从重构到脚手架到探索陌生代码库。',
        },
        {
          label: 'OpenAI Codex',
          url: 'https://openai.com/codex/',
          description:
            '代码生成和快速实验时用的工具。',
        },
        {
          label: 'Claude Code',
          url: 'https://www.anthropic.com/claude-code',
          description:
            '终端里 AI 辅助编程的日常主力。',
        },
        {
          label: 'n8n',
          url: 'https://n8n.io/',
          description:
            '可视化工作流自动化——连接 API、触发器和 AI 步骤。',
        },
        {
          label: 'Make (Integromat)',
          url: 'https://www.make.com/',
          description:
            '跨应用自动化场景和集成编排。',
        },
        {
          label: 'Hermes Agent',
          description:
            '个人 AI agent 系统——自动化、工作流和多 agent 编排。',
        },
        {
          label: 'RAG 系统',
          description:
            '当产品不能仅依赖模型预训练知识时，用私有或领域数据落地 LLM 回答。',
        },
        {
          label: 'AI Agent 工作流',
          description:
            '设计多个 agent 和工具如何协作完成端到端任务。',
        },
        {
          label: 'Human-AI Interaction',
          description:
            '我带到 AI 产品里的设计视角——让模型行为可理解、可恢复、值得信赖。',
        },
        {
          label: 'Whisper / 语音转文字',
          url: 'https://openai.com/research/whisper',
          description:
            '当产品需要语音转文字时，我用 Whisper（以及 whisper.cpp 做完全本地、保护隐私的转录）。',
        },
      ],
    },
  ],
  system: [
    { label: '操作系统', value: 'macOS' },
    { label: '浏览器', value: 'Arc' },
    { label: '显示器', value: 'LG 27UN850-W 4K' },
    { label: '键盘', value: 'Keychron K2' },
    { label: '鼠标', value: 'Logitech G305' },
    { label: '笔记本', value: 'MacBook Air M3' },
    { label: '耳机', value: 'Apple AirPods' },
  ],
};
````

## File: app/i18n/links.js
````javascript
import config from '~/config.json';
import { defaultLocale, supportedLocales } from './locales';
import { localizePath, stripLocaleFromPathname } from './route';

export function getLocalizedUrl(pathname, locale) {
  return `${config.url}${localizePath(pathname, locale)}`;
}

export function getAlternateLinks(pathname) {
  const basePath = stripLocaleFromPathname(pathname);

  return [
    ...supportedLocales.map(locale => ({
      rel: 'alternate',
      hrefLang: locale === 'zh' ? 'zh-CN' : locale,
      href: getLocalizedUrl(basePath, locale),
    })),
    {
      rel: 'alternate',
      hrefLang: 'x-default',
      href: getLocalizedUrl(basePath, defaultLocale),
    },
  ];
}
````

## File: app/i18n/locales.js
````javascript
export const defaultLocale = 'en';
export const supportedLocales = ['en', 'zh'];

export const localeLabels = {
  en: 'English',
  zh: '中文',
};

export const localeMeta = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    schemaLanguage: 'en-US',
  },
  zh: {
    htmlLang: 'zh-CN',
    ogLocale: 'zh_CN',
    schemaLanguage: 'zh-CN',
  },
};

export function isSupportedLocale(locale) {
  return supportedLocales.includes(locale);
}
````

## File: app/i18n/route.js
````javascript
import { defaultLocale } from './locales';

export function getLocaleFromPathname(pathname = '/') {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : defaultLocale;
}

export function stripLocaleFromPathname(pathname = '/') {
  if (pathname === '/zh') return '/';
  if (pathname.startsWith('/zh/')) return pathname.slice(3) || '/';
  return pathname || '/';
}

export function localizePath(pathname = '/', locale = defaultLocale) {
  const [pathPart, hashPart] = pathname.split('#');
  const basePath = stripLocaleFromPathname(pathPart || '/');
  const hash = hashPart ? `#${hashPart}` : '';

  if (locale === defaultLocale) return `${basePath}${hash}`;
  if (basePath === '/') return `/${locale}${hash}`;

  return `/${locale}${basePath}${hash}`;
}

export function getPathnameWithoutTrailingSlash(pathname = '/') {
  return pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}
````

## File: app/routes/zh-contact.js
````javascript
import { Contact, action } from './contact/contact';
import { contactContent as zhContact } from '~/data/content/zh/site-content';
import { baseMeta } from '~/utils/meta';

export { action };

export const meta = () => {
  return baseMeta({
    prefix: '牛拙Prince',
    title: zhContact.title,
    description: zhContact.metaDescription,
    path: '/zh/contact',
    locale: 'zh',
  });
};

export default Contact;
````

## File: app/routes/zh-home.js
````javascript
import { Home, links } from './home/home';
import { baseMeta } from '~/utils/meta';

export { links };

export const meta = () => {
  return baseMeta({
    prefix: '牛拙Prince',
    title: '产品设计 · 人因工程 · AI 产品',
    description: `牛拙Prince 的作品集——一个工作在人因工程、产品设计和 AI 交叉处的 designer-builder。项目覆盖车载界面、安全关键户外设备和原生 macOS AI 工具等复杂系统的 UI/UX。`,
    path: '/zh',
    locale: 'zh',
  });
};

export default Home;
````

## File: app/routes/zh-projects-$slug.jsx
````javascript
import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { baseMeta } from '~/utils/meta';
import { withAssets } from '~/data/projects';
import { ProjectCase } from './projects/project-case';
import {
  portfolioProjects as zhProjectsRaw,
} from '~/data/content/zh';
import {
  legacyProjectSlugRedirects,
  resolveProjectSlug,
} from '~/data/project-content';

const zhProjects = zhProjectsRaw.map(withAssets);
const getZhProjectBySlug = slug => zhProjects.find(p => p.slug === slug);

export const loader = async ({ params }) => {
  if (legacyProjectSlugRedirects[params.slug]) {
    return redirect(`/zh/projects/${legacyProjectSlugRedirects[params.slug]}`, 301);
  }

  const resolvedSlug = resolveProjectSlug(params.slug);
  const project = getZhProjectBySlug(resolvedSlug);

  if (!project) {
    throw new Response(null, { status: 404, statusText: 'Project not found' });
  }

  return json({ slug: project.slug });
};

export const meta = ({ params }) => {
  const project = getZhProjectBySlug(resolveProjectSlug(params.slug));

  if (!project) {
    return baseMeta({
      prefix: '牛拙Prince',
      title: '项目未找到',
      description: '请求的项目不存在。',
      path: `/zh/projects/${params.slug}`,
      locale: 'zh',
    });
  }

  return baseMeta({
    title: project.title,
    description: project.description,
    prefix: '项目',
    path: `/zh/projects/${params.slug}`,
    locale: 'zh',
  });
};

export default function ZhProjectRoute() {
  const { slug } = useLoaderData();
  const project = getZhProjectBySlug(slug);

  return <ProjectCase project={project} />;
}
````

## File: app/routes/zh-uses.js
````javascript
import { Uses } from './uses/uses';
import { usesContent as zhUses } from '~/data/content/zh/site-content';
import { baseMeta } from '~/utils/meta';

export const meta = () => {
  return baseMeta({
    prefix: '牛拙Prince',
    title: zhUses.heroTitle,
    description: zhUses.metaDescription,
    path: '/zh/uses',
    locale: 'zh',
  });
};

export default Uses;
````

## File: docs/plans/2026-05-19-bilingual-content-audit.md
````markdown
# Bilingual Portfolio Phase 0 Content Audit

**Date:** 2026-05-19

**Goal:** Map current route/content/SEO structure before implementing bilingual English + Chinese support with English as default and Chinese under `/zh`.

---

## Current Architecture Snapshot

- Stack: Remix 2 + Vite + React + Cloudflare Pages.
- Portfolio path: `/Users/prince/Desktop/portfolio`.
- Default site language is currently English.
- `root.jsx` hardcodes `<html lang="en">` in normal and error boundaries.
- SEO helper `app/utils/meta.js` hardcodes `og:locale = en_US` and JSON-LD `inLanguage = en-US`.
- Public sitemap is static output at `public/sitemap.xml`, generated by `scripts/generate-sitemap.cjs`.
- Current sitemap only includes English URLs.
- Project content is concentrated in `app/data/project-content.js` and is large enough that direct bilingual expansion in that file would be hard to maintain.

---

## Current Public Route Map

### Route modules

- `/` → `app/routes/home/route.js` → `app/routes/home/home.jsx`
- `/contact` → `app/routes/contact/route.js` → `app/routes/contact/contact.jsx`
- `/uses` → `app/routes/uses/route.js` → `app/routes/uses/uses.jsx`
- `/projects/:slug` → `app/routes/projects.$slug/route.jsx`
- catch-all 404 → `app/routes/$.jsx`
- theme action → `app/routes/api.set-theme.js`

### Current project slugs

Extracted from `app/data/project-content.js`:

- `etongue-sensory-platform`
- `porsche-digital-interface`
- `posture-checker`
- `trekassist`
- `little-lemon`
- `knowledgeos`
- `all-work`
- `sayit`

### Current featured project slugs

- `trekassist`
- `etongue-sensory-platform`
- `porsche-digital-interface`
- `sayit`
- `posture-checker`

### Legacy redirects

- `/projects/more-work` → `/projects/all-work`

### Current sitemap routes

From `public/sitemap.xml`:

- `/`
- `/contact`
- `/uses`
- `/projects/etongue-sensory-platform`
- `/projects/porsche-digital-interface`
- `/projects/posture-checker`
- `/projects/trekassist`
- `/projects/little-lemon`
- `/projects/knowledgeos`
- `/projects/all-work`

Note: `sayit` is intentionally excluded from sitemap in `scripts/generate-sitemap.cjs`, with comment stating SayIt is reachable from homepage but not indexed as isolated route.

---

## Current Content Sources

### Global config

File: `app/config.json`

Contains:

- `name`
- `role`
- `disciplines`
- `url`
- `email`
- `location`
- social handles
- repo URL
- ascii console text

Needs localization:

- `role`
- `disciplines`
- potentially `location` display string

Should remain shared:

- `name`
- `url`
- `email`
- social handles
- repo URL

### Page/global content

File: `app/data/site-content.js`

Contains:

- `profileContent`
- `contactContent`
- `usesContent`

Needs localization:

- all user-facing strings
- contact labels/messages
- uses sections/descriptions
- profile/about copy

### Project content

File: `app/data/project-content.js`

Contains:

- project metadata
- project sections
- roles
- descriptions
- headings
- metrics
- alt text
- project-grid content
- featured slugs
- legacy redirects
- path helper

Needs modularization before full translation.

Recommended split:

```txt
app/data/content/en/projects/*.js
app/data/content/zh/projects/*.js
app/data/project-assets.js
```

### Asset mapping

File: `app/data/projects.js`

Contains:

- image/video imports
- asset objects with `src`, `srcSet`, `placeholder`, dimensions
- `withAssets` mapping from content image keys to asset objects
- project lookup helpers

Should mostly remain shared. Avoid duplicating assets per language.

Important pitfall: gallery/carousel needs `srcSet`. Do not break this during refactor.

### Navigation content

File: `app/layouts/navbar/nav-data.js`

Currently hardcoded labels:

- `Projects`
- `About`
- `All Work`
- `Contact`
- `Uses`
- `LinkedIn`
- `Github`
- `Bluesky`
- `Figma`
- `Resume (PDF)`

Needs localization for nav labels and resume label. Social service names can remain English.

---

## Hardcoded User-Facing English Strings Found

### `app/root.jsx`

- `<html lang="en">`
- error boundary `<html lang="en">`
- `Skip to main content`
- console text: `Taking a peek huh? Check out the source code: ...`

Localization priority:

- high: html lang, skip link
- low: console easter egg

### `app/utils/meta.js`

- keywords string
- `Portfolio of ${name}`
- `og:locale = en_US`
- `jobTitle: 'UI/UX Designer & AI Product Developer'`
- person schema description
- `knowsAbout` terms
- `websiteSchema().inLanguage = en-US`

Localization priority:

- high: `og:locale`, `inLanguage`, page title/description support
- medium: JSON-LD jobTitle/description
- low: keywords initially, but should eventually be bilingual-aware

### `app/routes/home/intro.jsx`

- `Resume rotating disciplines`
- `Pause rotating disciplines`
- button `title`: `Resume` / `Pause`
- `Scroll to projects`

Localization priority: high because these are accessibility strings.

### `app/routes/home/profile.jsx`

- profile content comes from `site-content.js`
- `href="/contact"` should become locale-aware
- image alt: `Portrait of Zhuo (Prince) Niu`

Localization priority: medium-high.

### `app/routes/home/home.jsx`

- meta title: `Product Design · Human Factors · AI Products`
- meta description string
- CTA path `/projects/all-work` should become locale-aware
- generated project links should become locale-aware for Chinese pages

Localization priority: high.

### `app/routes/home/project-summary.jsx`

Hardcoded inside SayIt custom preview:

- `Edit`
- `Engine`
- `Listening`
- `Space`
- `Global hotkey`
- `“Turn spoken thoughts into clean text.”`

Localization priority: medium. These are visual mockup labels; can either remain English as UI screenshot/prototype language or be localized if the visual preview is treated as content.

### `app/routes/contact/contact.jsx`

Content from `contactContent`, plus hardcoded strings:

- meta title: `Contact`
- validation: `Please enter a valid email address.`
- validation: `Please enter a message.`
- validation: `Email address must be shorter than ... characters.`
- validation: `Message must be shorter than ... characters.`
- SES subject: `Portfolio message from ...`
- SES source display: `Portfolio <...>`
- honeypot label: `Name`
- form label: `Your email`
- form label: `Message`
- loading text: `Sending...`
- button: `Send message`

Localization priority:

- high: visible labels, validation messages, loading/button text
- medium: meta title
- low: SES subject/source can remain English internally, unless email templates are localized later

Important implementation note: contact `action` currently imports `contactContent` statically. For localized validation, the action needs to derive locale from request URL/path or receive hidden locale input.

### `app/routes/uses/uses.jsx`

Content from `usesContent`, plus hardcoded:

- meta title: `Uses`
- section heading: `System`

Localization priority: high for Chinese `/zh/uses`.

### `app/routes/projects.$slug/route.jsx`

Hardcoded strings:

- redirect path `/projects/...`
- 404 statusText: `Project not found`
- meta fallback title: `Project not found`
- meta fallback description: `The requested project could not be found.`
- meta prefix: `Projects`
- meta path `/projects/${params.slug}`

Needs locale-aware handling for `/zh/projects/:slug`.

Localization priority: high.

### `app/routes/projects/project-case.jsx`

Hardcoded strings:

- `Tools and methods`
- `View case study →`

Most content comes from project data.

Localization priority: medium-high because this affects All Work/project-grid sections.

### `app/routes/$.jsx`

Hardcoded strings:

- statusText: `Not found`
- title: `Page not found`
- description: `The page you are looking for could not be found.`

Localization priority: medium.

### `app/layouts/error/error.jsx`

Hardcoded strings:

- `Error: redacted`
- 404 message paragraph
- `Error: method denied`
- `Error: anomaly`
- `Flatlined`
- `Emotional support`
- `Back to homepage`
- animation credits

Localization priority: medium. Error page can be localized after core pages.

### `app/components/footer/footer.jsx`

Hardcoded string:

- `Crafted by yours truly`

Localization priority: medium.

### `app/layouts/navbar/navbar.jsx`

- Uses nav/social labels from `nav-data.js`.
- logo `aria-label` uses `config.name`, `config.role`.
- logo destination currently checks `location.pathname === '/' ? '/#intro' : '/'`; needs locale-aware home path.
- hash scrolling logic assumes `location.pathname === '/'`; needs Chinese home awareness for `/zh`.

Localization priority: high because navbar controls language switching and page navigation.

### `app/layouts/navbar/nav-toggle.jsx` and theme toggle

Not audited in detail yet. Likely contains labels such as menu open/close and theme toggle. Should be included in Phase 1/2 hardcoded string search before implementation.

---

## SEO and Metadata Gaps

### Current gaps

- `root.jsx` hardcodes `html lang`.
- `baseMeta` hardcodes `og:locale`.
- `websiteSchema` hardcodes `inLanguage: en-US`.
- canonical generation is path-based but not explicitly locale-aware.
- no `hreflang` links.
- sitemap has only English routes.
- sitemap generator reads project slugs from `app/data/project-content.js`; this will break if project content is split unless generator is updated.

### Needed changes

- Add locale detection from pathname.
- Make root loader return `locale`, `htmlLang`, `canonicalUrl`, and alternate links.
- Make `baseMeta` accept `locale`, `path`, and localized strings.
- Add alternate links in `<head>`.
- Update sitemap generator to include `/zh` URLs and eventually alternate links.
- Update JSON-LD to accept locale-specific `inLanguage`, job title, and description.

---

## Route Implementation Options

### Recommended for safety: thin duplicated route modules

Keep existing English route modules untouched as much as possible. Add thin Chinese route modules that reuse the same components with `locale: 'zh'`.

Candidate route files:

```txt
app/routes/zh/route.js or Remix-compatible equivalent for /zh
app/routes/zh.contact/route.js or equivalent for /zh/contact
app/routes/zh.uses/route.js or equivalent for /zh/uses
app/routes/zh.projects.$slug/route.jsx or equivalent for /zh/projects/:slug
```

Need confirm exact Remix file-route convention used by this codebase before implementation. Existing project already uses a mix of route directories and flat dynamic route `projects.$slug/route.jsx`.

### Avoid in Phase 1

Avoid fully replacing current route structure with optional locale params. Too much risk for existing production URLs.

---

## Recommended Phase 1 MVP Scope

### Include

- Locale helpers:
  - `app/i18n/locales.js`
  - `app/i18n/route.js`
  - optional `app/i18n/links.js`
- Dynamic root language:
  - normal `<html lang>`
  - error `<html lang>` if feasible
- Locale-aware canonical URL generation.
- Basic `hreflang` helper, even if only root/contact/uses/project paths are supported initially.
- Navbar language toggle.
- Locale-aware nav paths and logo path.
- `/zh` homepage route.
- `/zh/contact` route.
- `/zh/uses` route.
- `/zh/projects/:slug` route.
- Chinese global content modules with homepage/contact/uses translations.
- Project pages can initially fall back to English until per-project Chinese content is available.

### Defer

- Full project-content split.
- Full Chinese translation for all projects.
- Sitemap alternate link XML detail.
- Localized JSON-LD polish.
- Error page full localization.
- SayIt visual preview mockup label localization.

---

## Recommended First Implementation Order

1. Confirm route convention by adding the smallest `/zh` route and running route/build checks.
2. Add `app/i18n` helpers.
3. Make root loader detect locale and set `<html lang>`.
4. Add localized nav data with English fallback.
5. Add language toggle in navbar.
6. Add Chinese copies of homepage/contact/uses content.
7. Wire homepage, contact, and uses components to receive locale-aware content.
8. Add `/zh/projects/:slug` with English fallback for project content.
9. Verify routes locally.
10. Only after this MVP works, split project content per project.

---

## Verification Commands

Run from project root:

```bash
cd /Users/prince/Desktop/portfolio
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 20.19.2
npm test
npx eslint app tests --ext .js,.jsx,.mjs
npm run build
```

If build fails with sandbox file descriptor/NFS issues, use the known `/tmp/pf-build` workaround from the portfolio deployment skill.

---

## Phase 0 Conclusion

The bilingual conversion should start with a route/content foundation, not translation. The largest technical risk is not rendering Chinese, but preserving existing English URLs while making content and SEO locale-aware. The largest maintenance risk is expanding the already-large `project-content.js`; this should be modularized before translating the entire project archive.

Recommended next phase: implement Phase 1 MVP foundation with `/zh` routes, locale helpers, dynamic root metadata, and a navbar language toggle, while keeping project content in English fallback until the content layer is stabilized.
````

## File: docs/plans/2026-05-19-bilingual-portfolio-optimization.md
````markdown
# Bilingual Portfolio Optimization Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task after Phase 0 audit is complete.

**Goal:** Convert Prince's portfolio into a bilingual English/Chinese site while keeping English as the default experience and preserving existing production URLs.

**Architecture:** English remains at the current canonical routes. Chinese content is added under `/zh` routes. Content is moved into lightweight locale-aware modules instead of introducing a heavy i18n framework. Project assets remain shared so images, videos, placeholders, and carousel behavior are not duplicated.

**Tech Stack:** Remix 2, Vite, React, Cloudflare Pages/Wrangler, existing portfolio data modules.

---

## Product Decision

Use English as the default language and add Chinese under `/zh`.

### Default routes

- `/`
- `/contact`
- `/uses`
- `/projects/sayit`
- `/projects/trekassist`
- `/projects/all-work`

### Chinese routes

- `/zh`
- `/zh/contact`
- `/zh/uses`
- `/zh/projects/sayit`
- `/zh/projects/trekassist`
- `/zh/projects/all-work`

### Rationale

- Existing English URLs remain stable for recruiters, resumes, LinkedIn, GitHub, and search results.
- Chinese becomes easy to share without query parameters.
- `/zh` is better for SEO than `?lang=zh`.
- Avoid browser-language redirects because the site is primarily recruiter-facing and should default to English.
- Avoid `/en` initially because English is the canonical/default language.

---

## Recommended Technical Direction

### Use lightweight locale modules

Do not start with `i18next`, `react-intl`, or another large i18n framework. The portfolio is a content-heavy site, not a complex application dashboard. A local content module approach is lower-maintenance and easier to review.

Recommended structure:

```txt
app/
  i18n/
    locales.js
    route.js
    links.js
    content.js

  data/
    content/
      en/
        config.js
        site-content.js
        nav-data.js
        project-content.js
        projects/
          sayit.js
          knowledgeos.js
          trekassist.js
          porsche-digital-interface.js
          posture-checker.js
          etongue.js
          little-lemon.js
      zh/
        config.js
        site-content.js
        nav-data.js
        project-content.js
        projects/
          sayit.js
          knowledgeos.js
          trekassist.js
          porsche-digital-interface.js
          posture-checker.js
          etongue.js
          little-lemon.js

  data/
    project-assets.js
```

### Keep slugs stable

Project slugs should not be translated.

Good:

```txt
/zh/projects/sayit
/zh/projects/knowledgeos
/zh/projects/porsche-digital-interface
```

Avoid:

```txt
/zh/projects/语音输入工具
/zh/projects/知识系统
```

Stable slugs reduce maintenance, avoid broken links, and preserve a clean portfolio structure.

---

## i18n Utility Design

### `app/i18n/locales.js`

```js
export const defaultLocale = 'en';
export const supportedLocales = ['en', 'zh'];

export const localeLabels = {
  en: 'English',
  zh: '中文',
};

export const localeMeta = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
  },
  zh: {
    htmlLang: 'zh-CN',
    ogLocale: 'zh_CN',
  },
};
```

### `app/i18n/route.js`

```js
export function getLocaleFromPathname(pathname) {
  return pathname === '/zh' || pathname.startsWith('/zh/') ? 'zh' : 'en';
}

export function stripLocaleFromPathname(pathname) {
  if (pathname === '/zh') return '/';
  if (pathname.startsWith('/zh/')) return pathname.slice(3);
  return pathname;
}

export function localizePath(pathname, locale) {
  const basePath = stripLocaleFromPathname(pathname);

  if (locale === 'en') return basePath;
  if (basePath === '/') return '/zh';

  return `/zh${basePath}`;
}
```

### `app/i18n/content.js`

```js
import * as enContent from '~/data/content/en';
import * as zhContent from '~/data/content/zh';

export function getContent(locale) {
  return locale === 'zh' ? zhContent : enContent;
}
```

---

## Content Model

### Global content

Centralize common strings:

```js
export const commonContent = {
  skipToMain: 'Skip to main content',
  scrollToProjects: 'Scroll to projects',
  pauseDisciplines: 'Pause rotating disciplines',
  resumeDisciplines: 'Resume rotating disciplines',
  backToHome: 'Back to homepage',
  notFoundTitle: 'Page not found',
};
```

Chinese equivalent:

```js
export const commonContent = {
  skipToMain: '跳到主要内容',
  scrollToProjects: '查看项目',
  pauseDisciplines: '暂停领域轮播',
  resumeDisciplines: '继续领域轮播',
  backToHome: '返回首页',
  notFoundTitle: '页面未找到',
};
```

### Page content

Move existing page-level content into locale modules:

- Home intro
- Profile/About
- Contact
- Uses
- All Work
- Footer
- Error / 404 states

### Project metadata

Each localized project should preserve the same slug and asset keys:

```js
{
  slug: 'sayit',
  title: 'SayIt',
  role: 'Product Designer + Swift Developer',
  year: '2026',
  description: '...',
  disciplines: ['AI Product', 'macOS', 'Voice Interface'],
}
```

Chinese:

```js
{
  slug: 'sayit',
  title: 'SayIt',
  role: '产品设计 + Swift 开发',
  year: '2026',
  description: '...',
  disciplines: ['AI 产品', 'macOS', '语音交互'],
}
```

### Project case studies

Split current large `project-content.js` into project-specific modules so translation and review are manageable.

Do this before translating every project.

---

## Asset Strategy

Do not duplicate images or videos between languages.

Shared asset module should own:

- image imports
- video imports
- `src`
- `srcSet`
- `placeholder`
- dimensions

Localized content should only reference asset keys.

Important existing pitfall: gallery/carousel images must include `srcSet`. The carousel renders via Three.js canvas and uses `srcSet`, not just `src`. Do not break the existing image asset pipeline during i18n refactoring.

---

## Language Toggle UX

### Placement

Add a minimal language toggle in the navbar, near the existing theme toggle.

Recommended label:

```txt
EN / 中文
```

or:

```txt
English / 中文
```

Current language should be visually active. The other language should link to the equivalent page.

### Behavior

- `/projects/sayit` → click 中文 → `/zh/projects/sayit`
- `/zh/projects/sayit` → click English → `/projects/sayit`
- `/` → click 中文 → `/zh`
- `/zh` → click English → `/`

### Avoid

- Do not use flags.
- Do not use a dropdown for only two languages.
- Do not hide language switching on mobile.

---

## SEO Requirements

### Dynamic HTML lang

Current `root.jsx` hardcodes `<html lang="en">`. This must become locale-aware.

- English: `<html lang="en">`
- Chinese: `<html lang="zh-CN">`

### Dynamic Open Graph locale

Current `baseMeta` uses `og:locale = en_US`. This must become locale-aware.

- English: `en_US`
- Chinese: `zh_CN`

### Canonical URLs

Each language should canonicalize to itself.

- English: `https://princeniu.com/projects/sayit`
- Chinese: `https://princeniu.com/zh/projects/sayit`

Do not canonicalize Chinese pages to English pages.

### hreflang

Every bilingual page should include:

```html
<link rel="alternate" hreflang="en" href="https://princeniu.com/projects/sayit" />
<link rel="alternate" hreflang="zh-CN" href="https://princeniu.com/zh/projects/sayit" />
<link rel="alternate" hreflang="x-default" href="https://princeniu.com/projects/sayit" />
```

### Sitemap

`sitemap.xml` should include both English and Chinese URLs. Ideally add alternate language links in the sitemap as well.

---

## Translation Strategy

Do not direct-translate the English portfolio. Chinese should be localized.

### Style

Chinese should be:

- professional but natural
- concise
- not resume-cliche heavy
- not machine-translated
- comfortable with Chinese-English mixed terminology when appropriate

### Terms to preserve or use bilingually

- SayIt
- KnowledgeOS
- TrekAssist
- E-Tongue
- Porsche Asia Pacific
- Tufts
- Purdue
- Human Factors Engineering / 人因工程
- Usability Testing / 可用性测试
- Design Engineering / 设计工程
- Voice Interface / 语音交互
- Information Architecture / 信息架构

### Example localization principle

English:

> I’m Zhuo (Prince) Niu, a designer-builder working across UI/UX, AI products, and human factors.

Avoid stiff direct translation:

> 我是 牛拙Prince，一个工作在 UI/UX、AI 产品和人因领域的设计建造者。

Prefer localized Chinese:

> 我是 牛拙Prince，关注 UI/UX、AI 产品与人因工程交叉方向的 designer-builder。我习惯从真实问题出发，把模糊想法推进到可测试、可使用的产品形态。

---

## Project Translation Priority

### Batch 1

1. SayIt
2. KnowledgeOS

Reason: strongest current AI-first builder signal.

### Batch 2

3. Porsche Digital Interface
4. Posture Checker

Reason: career credibility + engineering/HFE credibility.

### Batch 3

5. TrekAssist
6. E-Tongue
7. Little Lemon

Reason: HFE/course case-study depth and full archive completion.

---

## Implementation Phases

## Phase 0: Content and Route Audit

**Objective:** Understand all routes, content sources, hardcoded English strings, SEO points, and migration risk before changing architecture.

**Files to inspect:**

- `app/root.jsx`
- `app/utils/meta.js`
- `app/config.json`
- `app/data/site-content.js`
- `app/data/project-content.js`
- `app/data/projects.js`
- `app/layouts/navbar/nav-data.js`
- `app/layouts/navbar/navbar.jsx`
- `app/components/footer/footer.jsx`
- `app/routes/**/*.jsx`
- sitemap and robots routes/files

**Deliverable:**

- `docs/plans/2026-05-19-bilingual-content-audit.md`

**Acceptance criteria:**

- All public routes are listed.
- All hardcoded user-facing English strings are categorized.
- All content modules are mapped.
- SEO/i18n changes are listed.
- Phase 1 MVP scope is finalized.

---

## Phase 1: Locale Foundation MVP

**Objective:** Add `/zh` route support and language awareness without rewriting all content.

**Tasks:**

1. Create `app/i18n/locales.js`.
2. Create `app/i18n/route.js`.
3. Create `app/i18n/links.js` for localized path and hreflang helper functions.
4. Update root loader to derive locale from pathname.
5. Make `<html lang>` dynamic.
6. Make canonical URL locale-aware.
7. Add minimal `/zh` home route reusing the existing Home component with Chinese content stub or injected locale.
8. Add language toggle to navbar.

**Acceptance criteria:**

- `/` works.
- `/zh` works.
- English homepage remains visually unchanged.
- Language toggle switches `/` ↔ `/zh`.
- `<html lang>` is correct for both pages.
- Build passes.

---

## Phase 2: Global Page Content Migration

**Objective:** Move global user-facing text into localized content modules.

**Pages/components:**

- Home intro
- About/profile
- Featured project labels
- Contact
- Uses
- Navbar
- Footer
- Common accessibility labels
- Error/404 messages

**Acceptance criteria:**

- `/zh` homepage is meaningfully localized.
- `/zh/contact` is localized.
- `/zh/uses` is localized.
- English pages remain unchanged.
- No obvious hardcoded English remains in global Chinese pages except proper nouns and technical names.

---

## Phase 3: Project Content Modularization

**Objective:** Split project content into per-project modules before translating all case studies.

**Tasks:**

1. Extract shared project asset mapping.
2. Split English project content into one file per project.
3. Preserve existing export shape.
4. Verify all English project pages are unchanged.
5. Add Chinese project modules progressively.

**Acceptance criteria:**

- All English project pages still render.
- Gallery/carousel still works.
- `srcSet` remains intact.
- Tests, lint, and build pass.

---

## Phase 4: High-Value Chinese Case Studies

**Objective:** Translate and polish the most valuable project pages first.

**Batch 1:**

- SayIt
- KnowledgeOS

**Batch 2:**

- Porsche Digital Interface
- Posture Checker

**Batch 3:**

- TrekAssist
- E-Tongue
- Little Lemon

**Acceptance criteria per project:**

- Title, role, description, disciplines, sections, metrics, and alt text localized.
- Chinese reads naturally, not like direct translation.
- Project names and technical terms are preserved where appropriate.
- Layout remains stable on mobile and desktop.

---

## Phase 5: SEO, Sitemap, and Structured Data

**Objective:** Make the bilingual site search-engine friendly.

**Tasks:**

1. Add locale-aware `baseMeta` support.
2. Add dynamic `og:locale`.
3. Add `hreflang` links.
4. Add localized canonical URLs.
5. Update sitemap with Chinese URLs.
6. Review JSON-LD `personSchema` and `websiteSchema` for locale handling.

**Acceptance criteria:**

- View-source confirms correct canonical and hreflang.
- `/sitemap.xml` contains English and Chinese URLs.
- Chinese pages do not canonicalize to English.
- No structured data errors introduced.

---

## Phase 6: Visual, Accessibility, and Route QA

**Objective:** Verify bilingual content does not break the interface.

**Smoke-test routes:**

```txt
/
/zh
/contact
/zh/contact
/uses
/zh/uses
/projects/sayit
/zh/projects/sayit
/projects/knowledgeos
/zh/projects/knowledgeos
/projects/porsche-digital-interface
/zh/projects/porsche-digital-interface
/projects/posture-checker
/zh/projects/posture-checker
/projects/all-work
/zh/projects/all-work
/sitemap.xml
/robots.txt
```

**QA checks:**

- Desktop, tablet, and mobile layout.
- No horizontal overflow.
- Navbar language toggle works with keyboard.
- Mobile language toggle visible.
- Gallery/carousel images load.
- Contact form states localized.
- Accessibility labels are localized where useful.
- Build/test/lint pass.

---

## Phase 7: Deployment

**Objective:** Deploy only after local content and visual QA pass.

**Branch:**

```bash
git checkout -b feature/bilingual-portfolio
```

**Verification commands:**

```bash
cd /Users/prince/Desktop/portfolio
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 20.19.2
npm test
npx eslint app tests --ext .js,.jsx,.mjs
npm run build
npm run start
```

**Deploy command after approval:**

```bash
npx wrangler pages deploy build/client --project-name personal-web --branch main --commit-dirty=true
```

Do not deploy immediately after build success. First perform local browser QA and ask Prince to review the local page.

---

## Risk Register

### Risk: Content doubles and becomes hard to maintain

Mitigation:

- Split content per locale and per project.
- Keep project slugs stable.
- Share assets.
- Avoid giant bilingual files.

### Risk: Chinese SEO becomes duplicate content

Mitigation:

- Locale-specific canonical URLs.
- `hreflang` links.
- sitemap includes both languages.

### Risk: Existing English links break

Mitigation:

- Do not move English URLs.
- Add `/zh` as new routes only.
- Preserve legacy redirects.

### Risk: Translation reads like AI output

Mitigation:

- Localize rather than direct-translate.
- Preserve English terms where appropriate.
- Review each project manually.

### Risk: Layout breaks due to Chinese text

Mitigation:

- QA every batch.
- Check desktop/mobile.
- Keep button labels concise.

### Risk: Gallery/carousel breaks during content migration

Mitigation:

- Preserve shared asset module.
- Keep `srcSet` for gallery images.
- Verify canvas-based carousel by visual QA.

---

## Work Estimate

### MVP bilingual framework + homepage + two key projects

Estimated: 1.5-2.5 focused days.

Includes:

- `/zh` route foundation
- language toggle
- homepage Chinese
- Contact/Uses Chinese
- SayIt Chinese
- KnowledgeOS Chinese
- basic SEO

### Full high-quality bilingual portfolio

Estimated: 4-7 focused days.

Includes:

- all case studies
- full SEO/sitemap/hreflang
- mobile QA
- visual polish
- production deploy

---

## Recommended First Delivery Slice

Start with this MVP:

```txt
- English default unchanged
- /zh route foundation
- language toggle
- homepage Chinese
- Contact Chinese
- Uses Chinese
- SayIt Chinese
- KnowledgeOS Chinese
- baseline SEO
```

This gives the bilingual version real value quickly without blocking on every older project.

---

## Final Decision

Use:

```txt
Default English routes unchanged
Chinese under /zh
Lightweight custom i18n layer
Locale-specific content modules
Project-by-project content split
Shared asset pipeline
Phased rollout
```

This optimizes for production safety, recruiter-facing clarity, SEO correctness, and long-term maintainability.
````

## File: logo-exploration/zn-logo-c2-final-candidates.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ZN Logo C2 Final Candidates — Open Modular</title>
  <style>
    * { box-sizing: border-box; }
    :root {
      --dark-bg: oklch(17.76% 0 0);
      --dark-surface: oklch(21.78% 0 0);
      --light-bg: oklch(96.12% 0 0);
      --accent: oklch(84.42% 0.19 50);
      --ink: #f7f7f7;
      --paper: #111;
      --muted: color-mix(in oklab, var(--ink) 64%, transparent);
      --line: color-mix(in oklab, var(--ink) 12%, transparent);
      --font: Gotham, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
    body {
      margin: 0;
      background:
        radial-gradient(circle at 18% 0%, color-mix(in oklab, var(--accent) 13%, transparent), transparent 34rem),
        var(--dark-bg);
      color: var(--ink);
      font-family: var(--font);
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
    }
    .page { width: min(1180px, calc(100vw - 40px)); margin: 0 auto; padding: 56px 0 80px; }
    .hero { display: grid; grid-template-columns: 1fr .9fr; gap: 34px; align-items: end; border-bottom: 1px solid var(--line); padding-bottom: 30px; margin-bottom: 28px; }
    .eyebrow { font: 12px/1 var(--mono); color: var(--accent); letter-spacing: .14em; text-transform: uppercase; margin-bottom: 14px; }
    h1 { margin: 0; font-size: clamp(42px, 7vw, 92px); line-height: .92; letter-spacing: -.075em; }
    .hero p { margin: 0; color: var(--muted); font-size: 17px; max-width: 560px; }
    .controls { display: flex; flex-wrap: wrap; gap: 10px; margin: 0 0 34px; }
    button { appearance: none; border: 1px solid var(--line); background: color-mix(in oklab, var(--dark-surface) 82%, transparent); color: var(--ink); border-radius: 999px; min-height: 42px; padding: 0 16px; font: 600 13px/1 var(--font); cursor: pointer; }
    button[aria-pressed="true"] { background: var(--accent); color: #111; border-color: var(--accent); }
    .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
    .card { background: color-mix(in oklab, var(--dark-surface) 88%, transparent); border: 1px solid var(--line); border-radius: 24px; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,.22); }
    .cardHeader { padding: 22px; border-bottom: 1px solid var(--line); min-height: 148px; }
    h2 { margin: 0 0 8px; font-size: 22px; letter-spacing: -.045em; line-height: 1.08; }
    .stance { margin: 0; color: var(--muted); font-size: 14px; }
    .specimen { padding: 22px; display: grid; gap: 18px; }
    .largeMark { min-height: 190px; display: grid; place-items: center; border-radius: 18px; background: linear-gradient(135deg, rgba(255,255,255,.045), rgba(255,255,255,.008)), #171717; color: var(--ink); position: relative; overflow: hidden; }
    .largeMark::before { content: ""; position: absolute; inset: 18px; background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px); background-size: 22px 22px; mask-image: radial-gradient(circle, black, transparent 70%); opacity: .42; }
    .largeMark svg { position: relative; z-index: 1; width: 178px; height: auto; overflow: visible; }
    .preview { border: 1px solid var(--line); border-radius: 16px; padding: 14px; display: grid; gap: 12px; }
    .preview.light { background: var(--light-bg); color: var(--paper); border-color: rgba(0,0,0,.09); }
    .preview.dark { background: #151515; color: var(--ink); }
    .label { font: 11px/1 var(--mono); color: color-mix(in oklab, currentColor 48%, transparent); text-transform: uppercase; letter-spacing: .08em; }
    .row { display: flex; align-items: center; gap: 14px; min-height: 50px; }
    .markBox { width: 48px; height: 48px; display: grid; place-items: center; flex: 0 0 auto; }
    .word { display: grid; gap: 3px; }
    .word strong { font-size: 13px; letter-spacing: -.02em; }
    .word span { font-size: 12px; color: color-mix(in oklab, currentColor 55%, transparent); }
    .scale { display: flex; align-items: center; gap: 12px; }
    .favicon { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 9px; background: currentColor; color: #151515; }
    .favicon svg { color: var(--accent); }
    .note { border-top: 1px solid var(--line); padding-top: 14px; font-size: 13px; color: var(--muted); min-height: 96px; }
    .note strong { color: var(--ink); display: block; margin-bottom: 4px; }
    code { display: block; white-space: pre-wrap; color: color-mix(in oklab, var(--ink) 70%, transparent); font: 11px/1.45 var(--mono); background: rgba(0,0,0,.18); border: 1px solid var(--line); border-radius: 14px; padding: 12px; max-height: 120px; overflow: auto; }
    .recommendation { margin-top: 22px; padding: 24px; border-radius: 24px; background: linear-gradient(135deg, color-mix(in oklab, var(--accent) 16%, transparent), rgba(255,255,255,.025)); border: 1px solid color-mix(in oklab, var(--accent) 34%, transparent); display: grid; grid-template-columns: .72fr 1.28fr; gap: 24px; align-items: center; }
    .recommendation h2 { font-size: 34px; margin: 0; letter-spacing: -.055em; }
    .recommendation p { margin: 0; color: color-mix(in oklab, var(--ink) 76%, transparent); }
    .fill { fill: currentColor; }
    .accentFill { fill: var(--accent); }
    .stroke { fill: none; stroke: currentColor; stroke-width: 4.2; stroke-linecap: round; stroke-linejoin: round; }
    .strokeAccent { fill: none; stroke: var(--accent); stroke-width: 4.2; stroke-linecap: round; stroke-linejoin: round; }
    .card[data-theme="light"] { background: #fff; color: #111; }
    .card[data-theme="light"] .largeMark { background: #f2f2f2; color: #111; }
    .card[data-theme="light"] .stance,
    .card[data-theme="light"] .note { color: rgba(0,0,0,.62); }
    .card[data-theme="light"] .note strong { color: #111; }
    .card[data-theme="light"] code { color: rgba(0,0,0,.7); background: rgba(0,0,0,.04); border-color: rgba(0,0,0,.1); }
    @media (max-width: 980px) { .hero, .grid, .recommendation { grid-template-columns: 1fr; } .cardHeader { min-height: auto; } }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <div>
        <div class="eyebrow">Selected direction / C2 Open Modular ZN</div>
        <h1>C2 Final<br />Candidates</h1>
      </div>
      <p>Since C2 feels right, this board narrows it into three near-final options. All keep the open modular cut vibe, but tune the tradeoff between ZN readability, personal looseness, and production-readiness for the existing portfolio monogram component.</p>
    </section>

    <div class="controls" aria-label="Preview controls">
      <button id="darkBtn" aria-pressed="true">Dark board</button>
      <button id="lightBtn" aria-pressed="false">Light board</button>
      <button id="compactBtn" aria-pressed="false">Compact marks</button>
    </div>

    <section class="grid">
      <article class="card variant">
        <header class="cardHeader">
          <h2>C2.1 Balanced Modular</h2>
          <p class="stance">Closest to the selected C2, but slightly thinner and more open. Safest final candidate.</p>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 72 44" role="img" aria-label="Balanced modular ZN logo">
              <path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z" />
              <path class="accentFill" d="M54 8h7v28h-7V18L33 36h-8l29-26v-2Z" />
            </svg>
          </div>
          <div class="preview dark"><div class="label">Navbar / dark</div><div class="row"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z"/><path class="accentFill" d="M54 8h7v28h-7V18L33 36h-8l29-26v-2Z"/></svg></span><span class="word"><strong>Zhuo Niu</strong><span>Designer-builder</span></span></div></div>
          <div class="preview light"><div class="label">Navbar / light + favicon</div><div class="row"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z"/><path class="accentFill" d="M54 8h7v28h-7V18L33 36h-8l29-26v-2Z"/></svg></span><span class="scale"><span class="favicon"><svg viewBox="0 0 72 44" width="24"><path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z"/></svg></span></span></div></div>
          <p class="note"><strong>Use if:</strong> You want C2 as-is, just production-polished. Best balance of recognizable ZN and mature portfolio vibe.</p>
          <code>viewBox="0 0 72 44"
&lt;path d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z" /&gt;</code>
        </div>
      </article>

      <article class="card variant">
        <header class="cardHeader">
          <h2>C2.2 Looser Cut</h2>
          <p class="stance">Keeps modular geometry but introduces a slight path-like rhythm, so it feels less corporate.</p>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 72 44" role="img" aria-label="Looser cut ZN logo">
              <path class="fill" d="M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z" />
              <path class="accentFill" d="M55 8h7v28h-7V19L35 36h-8l28-25V8Z" />
              <path d="M19 31l7 5h-7z" fill="rgba(255,255,255,.24)" />
            </svg>
          </div>
          <div class="preview dark"><div class="label">Navbar / dark</div><div class="row"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="fill" d="M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z"/><path class="accentFill" d="M55 8h7v28h-7V19L35 36h-8l28-25V8Z"/></svg></span><span class="word"><strong>Zhuo Niu</strong><span>HFE × AI Product</span></span></div></div>
          <div class="preview light"><div class="label">Navbar / light + favicon</div><div class="row"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="fill" d="M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z"/><path class="accentFill" d="M55 8h7v28h-7V19L35 36h-8l28-25V8Z"/></svg></span><span class="scale"><span class="favicon"><svg viewBox="0 0 72 44" width="24"><path class="fill" d="M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z"/></svg></span></span></div></div>
          <p class="note"><strong>Use if:</strong> You like C2 but still want more creative looseness. This is my personal favorite for “not a template.”</p>
          <code>viewBox="0 0 72 44"
&lt;path d="M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z" /&gt;</code>
        </div>
      </article>

      <article class="card variant">
        <header class="cardHeader">
          <h2>C2.3 Outline Hybrid</h2>
          <p class="stance">Translates C2 into a lighter outline form. More airy, but less compatible with current fill hover.</p>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 72 44" role="img" aria-label="Outline modular ZN logo">
              <path class="stroke" d="M11 10 H49 L25 32 H53" />
              <path class="stroke" d="M18 33 V10 L54 33 V10" />
              <path class="strokeAccent" d="M54 10 V33" />
            </svg>
          </div>
          <div class="preview dark"><div class="label">Navbar / dark</div><div class="row"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="stroke" d="M11 10 H49 L25 32 H53"/><path class="stroke" d="M18 33 V10 L54 33 V10"/><path class="strokeAccent" d="M54 10 V33"/></svg></span><span class="word"><strong>Zhuo Niu</strong><span>Product Developer</span></span></div></div>
          <div class="preview light"><div class="label">Navbar / light + favicon</div><div class="row"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="stroke" d="M11 10 H49 L25 32 H53"/><path class="stroke" d="M18 33 V10 L54 33 V10"/><path class="strokeAccent" d="M54 10 V33"/></svg></span><span class="scale"><span class="favicon"><svg viewBox="0 0 72 44" width="24"><path class="stroke" stroke-width="5.8" d="M11 10 H49 L25 32 H53"/><path class="stroke" stroke-width="5.8" d="M18 33 V10 L54 33 V10"/></svg></span></span></div></div>
          <p class="note"><strong>Use if:</strong> You decide the filled modular mark is still too heavy. This is lightest, but less distinctive than C2.1/C2.2.</p>
          <code>viewBox="0 0 72 44"
&lt;path d="M11 10 H49 L25 32 H53" /&gt;
&lt;path d="M18 33 V10 L54 33 V10" /&gt;</code>
        </div>
      </article>
    </section>

    <section class="recommendation">
      <h2>My pick</h2>
      <p><strong>C2.2 Looser Cut</strong> is the best next step: it keeps the modular C2 vibe you liked, but adds just enough looseness to avoid feeling like a corporate template. If you want safest/cleanest, use C2.1. I would not choose C2.3 unless you decide the filled mark is still too heavy.</p>
    </section>
  </main>

  <script>
    const variants = [...document.querySelectorAll('.variant')];
    const darkBtn = document.querySelector('#darkBtn');
    const lightBtn = document.querySelector('#lightBtn');
    const compactBtn = document.querySelector('#compactBtn');
    function setTheme(theme) {
      variants.forEach(v => v.dataset.theme = theme);
      darkBtn.setAttribute('aria-pressed', theme === 'dark');
      lightBtn.setAttribute('aria-pressed', theme === 'light');
    }
    darkBtn.addEventListener('click', () => setTheme('dark'));
    lightBtn.addEventListener('click', () => setTheme('light'));
    compactBtn.addEventListener('click', () => {
      const pressed = compactBtn.getAttribute('aria-pressed') === 'true';
      compactBtn.setAttribute('aria-pressed', String(!pressed));
      document.querySelectorAll('.largeMark svg').forEach(svg => svg.style.transform = !pressed ? 'scale(.72)' : 'scale(1)');
    });
  </script>
</body>
</html>
````

## File: logo-exploration/zn-logo-concepts-v2.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ZN Logo Concept Board v2 — Refined A/C Directions</title>
  <style>
    * { box-sizing: border-box; }
    :root {
      --dark-bg: oklch(17.76% 0 0);
      --dark-surface: oklch(21.78% 0 0);
      --light-bg: oklch(96.12% 0 0);
      --ink: #f7f7f7;
      --paper: #111;
      --muted: color-mix(in oklab, var(--ink) 63%, transparent);
      --accent: oklch(84.42% 0.19 50);
      --line: color-mix(in oklab, var(--ink) 12%, transparent);
      --font: Gotham, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
    body {
      margin: 0;
      background:
        radial-gradient(circle at 12% 0%, color-mix(in oklab, var(--accent) 13%, transparent), transparent 32rem),
        radial-gradient(circle at 85% 18%, rgba(255,255,255,.06), transparent 24rem),
        var(--dark-bg);
      color: var(--ink);
      font-family: var(--font);
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
    }
    .page { width: min(1240px, calc(100vw - 40px)); margin: 0 auto; padding: 56px 0 80px; }
    .hero {
      display: grid;
      grid-template-columns: 1.08fr .92fr;
      gap: 34px;
      align-items: end;
      padding-bottom: 30px;
      margin-bottom: 28px;
      border-bottom: 1px solid var(--line);
    }
    .eyebrow { font: 12px/1 var(--mono); color: var(--accent); letter-spacing: .14em; text-transform: uppercase; margin-bottom: 14px; }
    h1 { margin: 0; font-size: clamp(42px, 7vw, 92px); line-height: .92; letter-spacing: -.075em; }
    .hero p { margin: 0; color: var(--muted); font-size: 17px; max-width: 560px; }
    .summary {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin: 0 0 24px;
    }
    .summary div { border: 1px solid var(--line); background: rgba(255,255,255,.025); border-radius: 18px; padding: 16px; }
    .summary strong { display: block; font-size: 13px; color: var(--ink); margin-bottom: 4px; }
    .summary span { display: block; font-size: 13px; color: var(--muted); }
    .controls { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 34px; }
    button { appearance: none; border: 1px solid var(--line); background: color-mix(in oklab, var(--dark-surface) 80%, transparent); color: var(--ink); border-radius: 999px; min-height: 42px; padding: 0 16px; font: 600 13px/1 var(--font); cursor: pointer; }
    button[aria-pressed="true"] { background: var(--accent); color: #111; border-color: var(--accent); }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
    .card { background: color-mix(in oklab, var(--dark-surface) 88%, transparent); border: 1px solid var(--line); border-radius: 24px; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,.22); }
    .cardHeader { padding: 22px 22px 18px; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; gap: 18px; align-items: start; }
    h2 { margin: 0 0 7px; font-size: 23px; letter-spacing: -.045em; line-height: 1.08; }
    .stance { margin: 0; color: var(--muted); font-size: 14px; }
    .tag { font: 12px/1 var(--mono); color: var(--accent); white-space: nowrap; padding-top: 4px; }
    .specimen { padding: 24px; display: grid; gap: 20px; }
    .largeMark {
      min-height: 200px;
      display: grid;
      place-items: center;
      border-radius: 18px;
      background:
        linear-gradient(135deg, rgba(255,255,255,.045), rgba(255,255,255,.008)),
        #171717;
      color: var(--ink);
      position: relative;
      overflow: hidden;
    }
    .largeMark::before {
      content: "";
      position: absolute;
      inset: 18px;
      background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 22px 22px;
      mask-image: radial-gradient(circle, black, transparent 70%);
      opacity: .42;
    }
    .largeMark svg { position: relative; z-index: 1; width: 188px; height: auto; overflow: visible; }
    .previewRow { display: grid; grid-template-columns: 1.08fr .92fr .92fr; gap: 12px; }
    .preview { border: 1px solid var(--line); border-radius: 16px; padding: 14px; min-height: 116px; display: grid; gap: 10px; align-content: center; }
    .preview.dark { background: #151515; color: var(--ink); }
    .preview.light { background: var(--light-bg); color: var(--paper); border-color: rgba(0,0,0,.09); }
    .label { font: 11px/1 var(--mono); color: color-mix(in oklab, currentColor 48%, transparent); text-transform: uppercase; letter-spacing: .08em; }
    .navbarMock { display: flex; align-items: center; gap: 16px; }
    .markBox { width: 48px; height: 48px; display: grid; place-items: center; }
    .navText { display: grid; gap: 3px; }
    .navText strong { font-size: 13px; letter-spacing: -.02em; }
    .navText span { font-size: 12px; color: color-mix(in oklab, currentColor 55%, transparent); }
    .faviconSet { display: flex; align-items: center; gap: 12px; }
    .favicon { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 9px; background: currentColor; color: #151515; }
    .favicon svg { color: var(--accent); }
    .hoverDemo { position: relative; display: grid; place-items: center; width: 52px; height: 52px; overflow: hidden; }
    .hoverDemo::after { content: ""; position: absolute; inset: 8px; background: var(--accent); transform: translateY(54%); opacity: .92; mix-blend-mode: screen; }
    .notes { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .note { border-top: 1px solid var(--line); padding-top: 14px; font-size: 13px; color: var(--muted); }
    .note strong { display: block; color: var(--ink); margin-bottom: 4px; }
    code { display: block; white-space: pre-wrap; color: color-mix(in oklab, var(--ink) 70%, transparent); font: 11px/1.45 var(--mono); background: rgba(0,0,0,.18); border: 1px solid var(--line); border-radius: 14px; padding: 12px; max-height: 90px; overflow: auto; }
    .recommendation { margin-top: 22px; padding: 24px; border-radius: 24px; background: linear-gradient(135deg, color-mix(in oklab, var(--accent) 16%, transparent), rgba(255,255,255,.025)); border: 1px solid color-mix(in oklab, var(--accent) 34%, transparent); display: grid; grid-template-columns: .72fr 1.28fr; gap: 24px; align-items: center; }
    .recommendation h2 { font-size: 34px; margin: 0; letter-spacing: -.055em; }
    .recommendation p { margin: 0; color: color-mix(in oklab, var(--ink) 76%, transparent); }

    .stroke { fill: none; stroke: currentColor; stroke-width: 4.1; stroke-linecap: round; stroke-linejoin: round; }
    .strokeThin { fill: none; stroke: currentColor; stroke-width: 3.25; stroke-linecap: round; stroke-linejoin: round; }
    .strokeSquare { fill: none; stroke: currentColor; stroke-width: 4.2; stroke-linecap: butt; stroke-linejoin: round; }
    .fill { fill: currentColor; }
    .accent { stroke: var(--accent); fill: none; }
    .accentFill { fill: var(--accent); }
    .card[data-theme="light"] { background: #fff; color: #111; }
    .card[data-theme="light"] .largeMark { background: #f2f2f2; color: #111; }
    .card[data-theme="light"] .stance,
    .card[data-theme="light"] .note { color: rgba(0,0,0,.62); }
    .card[data-theme="light"] .note strong { color: #111; }
    .card[data-theme="light"] code { color: rgba(0,0,0,.7); background: rgba(0,0,0,.04); border-color: rgba(0,0,0,.1); }
    @media (max-width: 940px) { .hero, .grid, .recommendation { grid-template-columns: 1fr; } .summary { grid-template-columns: 1fr; } .previewRow, .notes { grid-template-columns: 1fr; } }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <div>
        <div class="eyebrow">Round 2 / less bulky / clearer ZN / more creative</div>
        <h1>ZN Logo<br />Refinement v2</h1>
      </div>
      <p>This round keeps the vibe of <strong>C. Modular Cut</strong> and <strong>A. Shared Diagonal</strong>, but makes the marks lighter, less rigid, and more legible as ZN. The goal is not final production code yet — it is narrowing the visual direction.</p>
    </section>

    <section class="summary">
      <div><strong>What changed from A</strong><span>Thinner strokes, more asymmetry, looser diagonals, less blocky construction.</span></div>
      <div><strong>What changed from C</strong><span>Clearer Z + N separation, less dense fill mass, more negative space.</span></div>
      <div><strong>What to judge</strong><span>Can you read ZN at navbar size, and does it feel like you rather than a template?</span></div>
    </section>

    <div class="controls" aria-label="Preview controls">
      <button id="darkBtn" aria-pressed="true">Dark board</button>
      <button id="lightBtn" aria-pressed="false">Light board</button>
      <button id="compactBtn" aria-pressed="false">Compact marks</button>
    </div>

    <section class="grid">
      <article class="card variant" id="a2-loose-diagonal">
        <header class="cardHeader">
          <div>
            <h2>A2. Loose Diagonal ZN</h2>
            <p class="stance">A refined A: lighter, more handwritten-path energy, but still clean enough for a portfolio.</p>
          </div>
          <div class="tag">Best A update</div>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 72 44" role="img" aria-label="Loose diagonal ZN logo">
              <path class="stroke" d="M12 10 C22 7 39 8 53 9 L20 34 C31 32 47 33 60 34" />
              <path class="strokeThin" d="M18 33 L18 11 L52 33 L52 11" />
              <path class="strokeThin accent" d="M22 31 L50 12" />
            </svg>
          </div>
          <div class="previewRow">
            <div class="preview dark"><div class="label">Navbar / dark</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="stroke" d="M12 10 C22 7 39 8 53 9 L20 34 C31 32 47 33 60 34"/><path class="strokeThin" d="M18 33 L18 11 L52 33 L52 11"/><path class="strokeThin accent" d="M22 31 L50 12"/></svg></span><span class="navText"><strong>Zhuo Niu</strong><span>Designer-builder</span></span></div></div>
            <div class="preview light"><div class="label">Navbar / light</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="stroke" d="M12 10 C22 7 39 8 53 9 L20 34 C31 32 47 33 60 34"/><path class="strokeThin" d="M18 33 L18 11 L52 33 L52 11"/><path class="strokeThin accent" d="M22 31 L50 12"/></svg></span></div></div>
            <div class="preview dark"><div class="label">Favicon scale</div><div class="faviconSet"><span class="favicon"><svg viewBox="0 0 72 44" width="24"><path class="stroke" stroke-width="5.8" d="M12 10 C22 7 39 8 53 9 L20 34 C31 32 47 33 60 34"/><path class="strokeThin" stroke-width="4.8" d="M18 33 L18 11 L52 33 L52 11"/></svg></span><span class="hoverDemo"><svg viewBox="0 0 72 44" width="38"><path class="stroke" d="M12 10 C22 7 39 8 53 9 L20 34 C31 32 47 33 60 34"/><path class="strokeThin" d="M18 33 L18 11 L52 33 L52 11"/></svg></span></div></div>
          </div>
          <div class="notes"><p class="note"><strong>What improved</strong>Still reads as ZN, but the curved top/bottom strokes make it less rigid and less bulky than A v1.</p><p class="note"><strong>Concern</strong>The Z and N overlap is still visually busy. For final SVG, we may remove the yellow diagonal or make it only appear on hover.</p></div>
          <code>&lt;path d="M12 10 C22 7 39 8 53 9 L20 34 C31 32 47 33 60 34" /&gt;
&lt;path d="M18 33 L18 11 L52 33 L52 11" /&gt;</code>
        </div>
      </article>

      <article class="card variant" id="a3-offset-path">
        <header class="cardHeader">
          <div>
            <h2>A3. Offset Path ZN</h2>
            <p class="stance">A more creative A: Z is a route, N is a structural echo. More motion, less logo-template.</p>
          </div>
          <div class="tag">Most creative A</div>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 72 44" role="img" aria-label="Offset path ZN logo">
              <path class="strokeSquare" d="M12 12 H50 L21 32 H61" />
              <path class="strokeThin" d="M18 35 V10 L53 35 V9" />
              <circle class="accentFill" cx="50" cy="12" r="2.8" />
              <circle class="accentFill" cx="21" cy="32" r="2.8" />
            </svg>
          </div>
          <div class="previewRow">
            <div class="preview dark"><div class="label">Navbar / dark</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="strokeSquare" d="M12 12 H50 L21 32 H61"/><path class="strokeThin" d="M18 35 V10 L53 35 V9"/><circle class="accentFill" cx="50" cy="12" r="2.8"/><circle class="accentFill" cx="21" cy="32" r="2.8"/></svg></span><span class="navText"><strong>Zhuo Niu</strong><span>HFE × AI Product</span></span></div></div>
            <div class="preview light"><div class="label">Navbar / light</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="strokeSquare" d="M12 12 H50 L21 32 H61"/><path class="strokeThin" d="M18 35 V10 L53 35 V9"/><circle class="accentFill" cx="50" cy="12" r="2.8"/><circle class="accentFill" cx="21" cy="32" r="2.8"/></svg></span></div></div>
            <div class="preview dark"><div class="label">Favicon scale</div><div class="faviconSet"><span class="favicon"><svg viewBox="0 0 72 44" width="24"><path class="strokeSquare" stroke-width="5.8" d="M12 12 H50 L21 32 H61"/><path class="strokeThin" stroke-width="4.6" d="M18 35 V10 L53 35 V9"/></svg></span><span class="hoverDemo"><svg viewBox="0 0 72 44" width="38"><path class="strokeSquare" d="M12 12 H50 L21 32 H61"/><path class="strokeThin" d="M18 35 V10 L53 35 V9"/></svg></span></div></div>
          </div>
          <div class="notes"><p class="note"><strong>What improved</strong>The mark feels less “perfectly engineered” because the N sits slightly behind the Z path. It has more interaction-flow energy.</p><p class="note"><strong>Concern</strong>More expressive, but maybe less premium than A2. The dots should be optional, probably not in favicon.</p></div>
          <code>&lt;path d="M12 12 H50 L21 32 H61" /&gt;
&lt;path d="M18 35 V10 L53 35 V9" /&gt;
&lt;circle cx="50" cy="12" r="2.8" /&gt;</code>
        </div>
      </article>

      <article class="card variant" id="c2-open-cut">
        <header class="cardHeader">
          <div>
            <h2>C2. Open Modular ZN</h2>
            <p class="stance">A clearer C: preserves modular cut vibe, but opens the mass so Z and N become more readable.</p>
          </div>
          <div class="tag">Best C update</div>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 72 44" role="img" aria-label="Open modular ZN logo">
              <path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z" />
              <path class="accentFill" d="M54 8h7v28h-7V18L33 36h-8l29-26v-2Z" />
            </svg>
          </div>
          <div class="previewRow">
            <div class="preview dark"><div class="label">Navbar / dark</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z"/><path class="accentFill" d="M54 8h7v28h-7V18L33 36h-8l29-26v-2Z"/></svg></span><span class="navText"><strong>Zhuo Niu</strong><span>Product Developer</span></span></div></div>
            <div class="preview light"><div class="label">Navbar / light</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z"/><path class="accentFill" d="M54 8h7v28h-7V18L33 36h-8l29-26v-2Z"/></svg></span></div></div>
            <div class="preview dark"><div class="label">Favicon scale</div><div class="faviconSet"><span class="favicon"><svg viewBox="0 0 72 44" width="24"><path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z"/></svg></span><span class="hoverDemo"><svg viewBox="0 0 72 44" width="38"><path class="fill" d="M10 8h40v6H27L10 29v7h42v-6H28l24-22h-9L18 31V8h-8Z"/></svg></span></div></div>
          </div>
          <div class="notes"><p class="note"><strong>What improved</strong>Compared with C v1, this has clearer Z top/bottom and a visible N right pillar. More negative space, less heavy block.</p><p class="note"><strong>Concern</strong>Still the most “logo brand” direction. If you want personal/creative, pair it with a thinner final cut.</p></div>
          <code>&lt;path d="M10 8h40v6H27L10 29v7h42v-6H28..." /&gt;
&lt;path d="M54 8h7v28h-7V18L33 36..." /&gt;</code>
        </div>
      </article>

      <article class="card variant" id="c3-ribbon-cut">
        <header class="cardHeader">
          <div>
            <h2>C3. Ribbon Cut ZN</h2>
            <p class="stance">A more creative C: a folded ribbon / system path that reads as Z first, N second.</p>
          </div>
          <div class="tag">Most distinctive</div>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 72 44" role="img" aria-label="Ribbon cut ZN logo">
              <path class="fill" d="M10 9h43l-5 6H27L10 30v5h42l5-6H29l26-20h-8L20 29V9h-10Z" />
              <path class="accentFill" d="M52 9h8v26h-8V21L37 35h-9l24-22V9Z" opacity=".96" />
              <path d="M20 29l7 6h-7z" fill="rgba(255,255,255,.24)" />
            </svg>
          </div>
          <div class="previewRow">
            <div class="preview dark"><div class="label">Navbar / dark</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="fill" d="M10 9h43l-5 6H27L10 30v5h42l5-6H29l26-20h-8L20 29V9h-10Z"/><path class="accentFill" d="M52 9h8v26h-8V21L37 35h-9l24-22V9Z"/></svg></span><span class="navText"><strong>Zhuo Niu</strong><span>Designer-builder</span></span></div></div>
            <div class="preview light"><div class="label">Navbar / light</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 72 44" width="48"><path class="fill" d="M10 9h43l-5 6H27L10 30v5h42l5-6H29l26-20h-8L20 29V9h-10Z"/><path class="accentFill" d="M52 9h8v26h-8V21L37 35h-9l24-22V9Z"/></svg></span></div></div>
            <div class="preview dark"><div class="label">Favicon scale</div><div class="faviconSet"><span class="favicon"><svg viewBox="0 0 72 44" width="24"><path class="fill" d="M10 9h43l-5 6H27L10 30v5h42l5-6H29l26-20h-8L20 29V9h-10Z"/></svg></span><span class="hoverDemo"><svg viewBox="0 0 72 44" width="38"><path class="fill" d="M10 9h43l-5 6H27L10 30v5h42l5-6H29l26-20h-8L20 29V9h-10Z"/></svg></span></div></div>
          </div>
          <div class="notes"><p class="note"><strong>What improved</strong>More creative and less generic than C2. The angled cuts make it feel like a constructed system instead of a block-letter monogram.</p><p class="note"><strong>Concern</strong>ZN readability is better than C v1, but still stylized. It may need a small “Zhuo Niu” wordmark nearby in some contexts.</p></div>
          <code>&lt;path d="M10 9h43l-5 6H27L10 30v5h42..." /&gt;
&lt;path d="M52 9h8v26h-8V21L37 35..." /&gt;</code>
        </div>
      </article>
    </section>

    <section class="recommendation">
      <h2>My v2 take</h2>
      <p><strong>A2</strong> is the best refinement if you want “clearly ZN + more personal + less bulky.” <strong>C2</strong> is the best refinement if you want the C vibe but need better legibility. My recommendation is to take <strong>A2's loose motion</strong> and <strong>C2's production-ready fill logic</strong>, then make a final hybrid for the actual site SVG.</p>
    </section>
  </main>

  <script>
    const variants = [...document.querySelectorAll('.variant')];
    const darkBtn = document.querySelector('#darkBtn');
    const lightBtn = document.querySelector('#lightBtn');
    const compactBtn = document.querySelector('#compactBtn');
    function setTheme(theme) {
      variants.forEach(v => v.dataset.theme = theme);
      darkBtn.setAttribute('aria-pressed', theme === 'dark');
      lightBtn.setAttribute('aria-pressed', theme === 'light');
    }
    darkBtn.addEventListener('click', () => setTheme('dark'));
    lightBtn.addEventListener('click', () => setTheme('light'));
    compactBtn.addEventListener('click', () => {
      const pressed = compactBtn.getAttribute('aria-pressed') === 'true';
      compactBtn.setAttribute('aria-pressed', String(!pressed));
      document.querySelectorAll('.largeMark svg').forEach(svg => svg.style.transform = !pressed ? 'scale(.72)' : 'scale(1)');
    });
  </script>
</body>
</html>
````

## File: logo-exploration/zn-logo-concepts.html
````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ZN Logo Concept Board — Zhuo Niu Portfolio</title>
  <style>
    * { box-sizing: border-box; }
    :root {
      --dark-bg: oklch(17.76% 0 0);
      --dark-surface: oklch(21.78% 0 0);
      --light-bg: oklch(96.12% 0 0);
      --light-surface: #fff;
      --ink: #f7f7f7;
      --paper-ink: #141414;
      --muted: color-mix(in oklab, var(--ink) 62%, transparent);
      --accent: oklch(84.42% 0.19 50);
      --line: color-mix(in oklab, var(--ink) 12%, transparent);
      --font: Gotham, system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
      --mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }
    body {
      margin: 0;
      background:
        radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--accent) 10%, transparent), transparent 30rem),
        var(--dark-bg);
      color: var(--ink);
      font-family: var(--font);
      -webkit-font-smoothing: antialiased;
      line-height: 1.5;
    }
    a { color: inherit; }
    .page {
      width: min(1240px, calc(100vw - 40px));
      margin: 0 auto;
      padding: 56px 0 80px;
    }
    .hero {
      display: grid;
      grid-template-columns: 1.2fr .8fr;
      gap: 32px;
      align-items: end;
      margin-bottom: 36px;
      border-bottom: 1px solid var(--line);
      padding-bottom: 30px;
    }
    .eyebrow {
      font-family: var(--mono);
      color: var(--accent);
      letter-spacing: .14em;
      text-transform: uppercase;
      font-size: 12px;
      margin-bottom: 12px;
    }
    h1 {
      margin: 0;
      font-size: clamp(42px, 7vw, 96px);
      line-height: .92;
      letter-spacing: -.07em;
      font-weight: 700;
    }
    .hero p {
      margin: 0;
      color: color-mix(in oklab, var(--ink) 72%, transparent);
      font-size: 17px;
      max-width: 520px;
    }
    .controls {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0 34px;
    }
    button {
      appearance: none;
      border: 1px solid var(--line);
      background: color-mix(in oklab, var(--dark-surface) 80%, transparent);
      color: var(--ink);
      border-radius: 999px;
      min-height: 42px;
      padding: 0 16px;
      font: 600 13px/1 var(--font);
      cursor: pointer;
    }
    button[aria-pressed="true"] {
      background: var(--accent);
      color: #111;
      border-color: var(--accent);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }
    .card {
      background: color-mix(in oklab, var(--dark-surface) 86%, transparent);
      border: 1px solid var(--line);
      border-radius: 24px;
      overflow: hidden;
      min-height: 540px;
      box-shadow: 0 24px 80px rgba(0,0,0,.22);
    }
    .cardHeader {
      padding: 22px 22px 18px;
      border-bottom: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      gap: 18px;
      align-items: start;
    }
    .card h2 {
      margin: 0 0 6px;
      font-size: 24px;
      letter-spacing: -.04em;
      line-height: 1.1;
    }
    .stance {
      margin: 0;
      color: color-mix(in oklab, var(--ink) 62%, transparent);
      font-size: 14px;
    }
    .rank {
      font-family: var(--mono);
      color: var(--accent);
      font-size: 12px;
      white-space: nowrap;
      padding-top: 4px;
    }
    .specimen {
      padding: 24px;
      display: grid;
      gap: 20px;
    }
    .largeMark {
      min-height: 190px;
      display: grid;
      place-items: center;
      border-radius: 18px;
      background:
        linear-gradient(135deg, rgba(255,255,255,.04), rgba(255,255,255,.01)),
        #181818;
      color: var(--ink);
      position: relative;
      overflow: hidden;
    }
    .largeMark::before {
      content: "";
      position: absolute;
      inset: 20px;
      background-image: linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px);
      background-size: 24px 24px;
      mask-image: radial-gradient(circle, black, transparent 68%);
      opacity: .45;
    }
    .largeMark svg { position: relative; z-index: 1; width: 180px; height: auto; }
    .previewRow {
      display: grid;
      grid-template-columns: 1.1fr .9fr .9fr;
      gap: 12px;
    }
    .preview {
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 14px;
      min-height: 116px;
      display: grid;
      gap: 10px;
      align-content: center;
    }
    .preview.light {
      background: var(--light-bg);
      color: var(--paper-ink);
      border-color: rgba(0,0,0,.09);
    }
    .preview.dark { background: #151515; color: var(--ink); }
    .label {
      font-family: var(--mono);
      font-size: 11px;
      color: color-mix(in oklab, currentColor 48%, transparent);
      text-transform: uppercase;
      letter-spacing: .08em;
    }
    .navbarMock {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .navbarMock .markBox {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
    }
    .navText { display: grid; gap: 3px; }
    .navText strong { font-size: 13px; letter-spacing: -.02em; }
    .navText span { font-size: 12px; color: color-mix(in oklab, currentColor 55%, transparent); }
    .faviconSet { display: flex; align-items: center; gap: 12px; }
    .favicon {
      display: grid; place-items: center;
      border-radius: 9px;
      background: currentColor;
      color: #151515;
    }
    .light .favicon { color: #111; background: currentColor; }
    .favicon svg { color: var(--accent); }
    .hoverDemo {
      position: relative;
      display: grid;
      place-items: center;
      width: 52px; height: 52px;
      overflow: hidden;
    }
    .hoverDemo::after {
      content: "";
      position: absolute;
      inset: 8px;
      background: var(--accent);
      transform: translateY(60%);
      opacity: .95;
      mix-blend-mode: screen;
      clip-path: inset(0 round 2px);
    }
    .notes {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }
    .note {
      border-top: 1px solid var(--line);
      padding-top: 14px;
      font-size: 13px;
      color: color-mix(in oklab, var(--ink) 68%, transparent);
    }
    .note strong { color: var(--ink); display: block; margin-bottom: 4px; }
    code {
      display: block;
      white-space: pre-wrap;
      color: color-mix(in oklab, var(--ink) 70%, transparent);
      font: 11px/1.45 var(--mono);
      background: rgba(0,0,0,.18);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 12px;
      max-height: 90px;
      overflow: auto;
    }
    .recommendation {
      margin-top: 22px;
      padding: 24px;
      border-radius: 24px;
      background: linear-gradient(135deg, color-mix(in oklab, var(--accent) 16%, transparent), rgba(255,255,255,.025));
      border: 1px solid color-mix(in oklab, var(--accent) 34%, transparent);
      display: grid;
      grid-template-columns: .72fr 1.28fr;
      gap: 24px;
      align-items: center;
    }
    .recommendation h2 { margin: 0; font-size: 34px; letter-spacing: -.05em; line-height: 1; }
    .recommendation p { margin: 0; color: color-mix(in oklab, var(--ink) 74%, transparent); }
    .mark-stroke { fill: none; stroke: currentColor; stroke-width: 5.2; stroke-linecap: square; stroke-linejoin: miter; }
    .mark-stroke-round { fill: none; stroke: currentColor; stroke-width: 5.4; stroke-linecap: round; stroke-linejoin: round; }
    .mark-fill { fill: currentColor; }
    .accentNode { fill: var(--accent); }
    .variant[data-theme="light"] .largeMark { background: #f2f2f2; color: #111; }
    .variant[data-theme="light"] { background: #fff; color: #111; }
    .variant[data-theme="light"] .stance,
    .variant[data-theme="light"] .note { color: rgba(0,0,0,.62); }
    .variant[data-theme="light"] .note strong { color: #111; }
    .variant[data-theme="light"] code { color: rgba(0,0,0,.7); background: rgba(0,0,0,.04); border-color: rgba(0,0,0,.1); }
    @media (max-width: 920px) {
      .hero, .grid, .recommendation { grid-template-columns: 1fr; }
      .card { min-height: auto; }
      .previewRow, .notes { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <div>
        <div class="eyebrow">Zhuo Niu / Prince Niu / Personal Portfolio</div>
        <h1>ZN Logo<br />Concept Board</h1>
      </div>
      <p>Four SVG-first logo directions for replacing the current template monogram. Designed to fit the existing portfolio: dark theme, bright yellow accent, fixed left navbar, small favicon use, and a designer-builder / HFE / AI-product identity.</p>
    </section>

    <div class="controls" aria-label="Preview controls">
      <button id="darkBtn" aria-pressed="true">Dark board</button>
      <button id="lightBtn" aria-pressed="false">Light board</button>
      <button id="compactBtn" aria-pressed="false">Compact marks</button>
    </div>

    <section class="grid">
      <article class="card variant" id="shared-diagonal">
        <header class="cardHeader">
          <div>
            <h2>A. Shared Diagonal ZN</h2>
            <p class="stance">Geometric, precise, engineering-minded. Z and N share one diagonal gesture.</p>
          </div>
          <div class="rank">Strong-fit</div>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 64 40" role="img" aria-label="Shared diagonal ZN mark">
              <path class="mark-stroke" d="M10 7 H48 L16 33 H54" />
              <path class="mark-stroke" d="M16 33 V7 L48 33 V7" />
              <path class="mark-stroke" style="stroke: var(--accent); opacity:.95" d="M16 33 L48 7" />
            </svg>
          </div>
          <div class="previewRow">
            <div class="preview dark">
              <div class="label">Navbar / dark</div>
              <div class="navbarMock"><span class="markBox"><svg viewBox="0 0 64 40" width="48"><path class="mark-stroke" d="M10 7 H48 L16 33 H54"/><path class="mark-stroke" d="M16 33 V7 L48 33 V7"/><path class="mark-stroke" style="stroke:var(--accent)" d="M16 33 L48 7"/></svg></span><span class="navText"><strong>Zhuo Niu</strong><span>Designer-builder</span></span></div>
            </div>
            <div class="preview light">
              <div class="label">Navbar / light</div>
              <div class="navbarMock"><span class="markBox"><svg viewBox="0 0 64 40" width="48"><path class="mark-stroke" d="M10 7 H48 L16 33 H54"/><path class="mark-stroke" d="M16 33 V7 L48 33 V7"/><path class="mark-stroke" style="stroke:var(--accent)" d="M16 33 L48 7"/></svg></span></div>
            </div>
            <div class="preview dark">
              <div class="label">Favicon scale</div>
              <div class="faviconSet"><span class="favicon" style="width:32px;height:32px"><svg viewBox="0 0 64 40" width="22"><path class="mark-stroke" stroke-width="7" d="M10 7 H48 L16 33 H54"/><path class="mark-stroke" stroke-width="7" d="M16 33 V7 L48 33 V7"/></svg></span><span class="hoverDemo"><svg viewBox="0 0 64 40" width="36"><path class="mark-stroke" d="M10 7 H48 L16 33 H54"/><path class="mark-stroke" d="M16 33 V7 L48 33 V7"/></svg></span></div>
            </div>
          </div>
          <div class="notes"><p class="note"><strong>Why it fits</strong>Best balance of personal initials + technical precision. The shared diagonal gives the mark a reason to exist rather than two plain letters.</p><p class="note"><strong>Risk</strong>At favicon size, the full Z+N structure is slightly busy. Final version should simplify stroke overlaps.</p></div>
          <code>&lt;svg viewBox="0 0 64 40"&gt;
  &lt;path d="M10 7 H48 L16 33 H54" /&gt;
  &lt;path d="M16 33 V7 L48 33 V7" /&gt;
&lt;/svg&gt;</code>
        </div>
      </article>

      <article class="card variant" id="path-zn">
        <header class="cardHeader">
          <div>
            <h2>B. Path / Journey ZN</h2>
            <p class="stance">A single continuous route through Z into N. More UX flow, navigation, human factors.</p>
          </div>
          <div class="rank">Most personal</div>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 64 40" role="img" aria-label="Path journey ZN mark">
              <path class="mark-stroke-round" d="M10 8 H48 L17 32 H55" />
              <path class="mark-stroke-round" d="M18 32 V8 L49 32 V8" />
              <circle class="accentNode" cx="10" cy="8" r="3.4" />
              <circle class="accentNode" cx="55" cy="32" r="3.4" />
            </svg>
          </div>
          <div class="previewRow">
            <div class="preview dark"><div class="label">Navbar / dark</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 64 40" width="48"><path class="mark-stroke-round" d="M10 8 H48 L17 32 H55"/><path class="mark-stroke-round" d="M18 32 V8 L49 32 V8"/><circle class="accentNode" cx="10" cy="8" r="3.4"/><circle class="accentNode" cx="55" cy="32" r="3.4"/></svg></span><span class="navText"><strong>Zhuo Niu</strong><span>HFE × AI product</span></span></div></div>
            <div class="preview light"><div class="label">Navbar / light</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 64 40" width="48"><path class="mark-stroke-round" d="M10 8 H48 L17 32 H55"/><path class="mark-stroke-round" d="M18 32 V8 L49 32 V8"/><circle class="accentNode" cx="10" cy="8" r="3.4"/><circle class="accentNode" cx="55" cy="32" r="3.4"/></svg></span></div></div>
            <div class="preview dark"><div class="label">Favicon scale</div><div class="faviconSet"><span class="favicon" style="width:32px;height:32px"><svg viewBox="0 0 64 40" width="22"><path class="mark-stroke-round" stroke-width="7" d="M10 8 H48 L17 32 H55"/><path class="mark-stroke-round" stroke-width="7" d="M18 32 V8 L49 32 V8"/></svg></span><span class="hoverDemo"><svg viewBox="0 0 64 40" width="36"><path class="mark-stroke-round" d="M10 8 H48 L17 32 H55"/><path class="mark-stroke-round" d="M18 32 V8 L49 32 V8"/></svg></span></div></div>
          </div>
          <div class="notes"><p class="note"><strong>Why it fits</strong>It connects initials to your UX/HFE story: flows, paths, transitions from vague idea to working product.</p><p class="note"><strong>Risk</strong>Rounded endpoints feel friendlier but slightly less premium. Needs restraint so it doesn't become an app icon.</p></div>
          <code>&lt;svg viewBox="0 0 64 40"&gt;
  &lt;path d="M10 8 H48 L17 32 H55" /&gt;
  &lt;path d="M18 32 V8 L49 32 V8" /&gt;
  &lt;circle cx="10" cy="8" r="3.4" /&gt;
&lt;/svg&gt;</code>
        </div>
      </article>

      <article class="card variant" id="modular-zn">
        <header class="cardHeader">
          <div>
            <h2>C. Modular Cut ZN</h2>
            <p class="stance">Filled shape with deliberate cuts. Feels like systems, components, code, construction.</p>
          </div>
          <div class="rank">Most iconic</div>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 64 40" role="img" aria-label="Modular cut ZN mark">
              <path class="mark-fill" fill-rule="evenodd" d="M8 6h39v6H24.5L8 28v6h41v-6H25.8L47 7.5V34h7V6h-7L21 31.5V6H8Zm8 6v10.5L27 12H16Z" />
              <rect class="accentNode" x="49" y="6" width="7" height="28" />
            </svg>
          </div>
          <div class="previewRow">
            <div class="preview dark"><div class="label">Navbar / dark</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 64 40" width="48"><path class="mark-fill" fill-rule="evenodd" d="M8 6h39v6H24.5L8 28v6h41v-6H25.8L47 7.5V34h7V6h-7L21 31.5V6H8Zm8 6v10.5L27 12H16Z"/><rect class="accentNode" x="49" y="6" width="7" height="28"/></svg></span><span class="navText"><strong>Zhuo Niu</strong><span>Product Developer</span></span></div></div>
            <div class="preview light"><div class="label">Navbar / light</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 64 40" width="48"><path class="mark-fill" fill-rule="evenodd" d="M8 6h39v6H24.5L8 28v6h41v-6H25.8L47 7.5V34h7V6h-7L21 31.5V6H8Zm8 6v10.5L27 12H16Z"/><rect class="accentNode" x="49" y="6" width="7" height="28"/></svg></span></div></div>
            <div class="preview dark"><div class="label">Favicon scale</div><div class="faviconSet"><span class="favicon" style="width:32px;height:32px"><svg viewBox="0 0 64 40" width="22"><path class="mark-fill" d="M8 6h39v6H24.5L8 28v6h41v-6H25.8L47 7.5V34h7V6h-7L21 31.5V6H8Z"/></svg></span><span class="hoverDemo"><svg viewBox="0 0 64 40" width="36"><path class="mark-fill" d="M8 6h39v6H24.5L8 28v6h41v-6H25.8L47 7.5V34h7V6h-7L21 31.5V6H8Z"/></svg></span></div></div>
          </div>
          <div class="notes"><p class="note"><strong>Why it fits</strong>Cleanest for production because it is a fill-based mark like the current template; hover highlight can reuse the existing clipPath technique.</p><p class="note"><strong>Risk</strong>Most “brand/logo” feeling, but less warm. Could read as a tech studio mark more than a person.</p></div>
          <code>&lt;svg viewBox="0 0 64 40"&gt;
  &lt;path fill-rule="evenodd" d="M8 6h39v6H24.5..." /&gt;
&lt;/svg&gt;</code>
        </div>
      </article>

      <article class="card variant" id="human-zn">
        <header class="cardHeader">
          <div>
            <h2>D. Human-Centered ZN</h2>
            <p class="stance">Softer geometry with one human node. Balances technical structure and HFE warmth.</p>
          </div>
          <div class="rank">Warmest</div>
        </header>
        <div class="specimen">
          <div class="largeMark">
            <svg viewBox="0 0 64 40" role="img" aria-label="Human-centered ZN mark">
              <path class="mark-stroke-round" d="M11 9 H45 L19 31 H53" />
              <path class="mark-stroke-round" d="M18 31 V9 L48 31 V9" />
              <circle class="accentNode" cx="32" cy="20" r="5" />
              <circle cx="32" cy="20" r="2" fill="#151515" />
            </svg>
          </div>
          <div class="previewRow">
            <div class="preview dark"><div class="label">Navbar / dark</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 64 40" width="48"><path class="mark-stroke-round" d="M11 9 H45 L19 31 H53"/><path class="mark-stroke-round" d="M18 31 V9 L48 31 V9"/><circle class="accentNode" cx="32" cy="20" r="5"/><circle cx="32" cy="20" r="2" fill="#151515"/></svg></span><span class="navText"><strong>Zhuo Niu</strong><span>Human-centered AI</span></span></div></div>
            <div class="preview light"><div class="label">Navbar / light</div><div class="navbarMock"><span class="markBox"><svg viewBox="0 0 64 40" width="48"><path class="mark-stroke-round" d="M11 9 H45 L19 31 H53"/><path class="mark-stroke-round" d="M18 31 V9 L48 31 V9"/><circle class="accentNode" cx="32" cy="20" r="5"/><circle cx="32" cy="20" r="2" fill="#fff"/></svg></span></div></div>
            <div class="preview dark"><div class="label">Favicon scale</div><div class="faviconSet"><span class="favicon" style="width:32px;height:32px"><svg viewBox="0 0 64 40" width="22"><path class="mark-stroke-round" stroke-width="7" d="M11 9 H45 L19 31 H53"/><path class="mark-stroke-round" stroke-width="7" d="M18 31 V9 L48 31 V9"/></svg></span><span class="hoverDemo"><svg viewBox="0 0 64 40" width="36"><path class="mark-stroke-round" d="M11 9 H45 L19 31 H53"/><path class="mark-stroke-round" d="M18 31 V9 L48 31 V9"/><circle class="accentNode" cx="32" cy="20" r="4"/></svg></span></div></div>
          </div>
          <div class="notes"><p class="note"><strong>Why it fits</strong>The center node hints at people inside systems, which matches Human Factors better than a purely mechanical mark.</p><p class="note"><strong>Risk</strong>The node is meaningful, but it adds detail. If used, favicon should drop the inner circle.</p></div>
          <code>&lt;svg viewBox="0 0 64 40"&gt;
  &lt;path d="M11 9 H45 L19 31 H53" /&gt;
  &lt;path d="M18 31 V9 L48 31 V9" /&gt;
  &lt;circle cx="32" cy="20" r="5" /&gt;
&lt;/svg&gt;</code>
        </div>
      </article>
    </section>

    <section class="recommendation">
      <h2>My take</h2>
      <p><strong>A is the safest winner</strong> for a recruiting portfolio: recognizable initials, crisp engineering feel, and compatible with the current SVG/hover system. <strong>B is the most conceptually yours</strong> if you want the mark to carry the UX/HFE “journey/path” idea. I would not ship D as-is; I would borrow its warmth only if A feels too cold.</p>
    </section>
  </main>

  <script>
    const variants = [...document.querySelectorAll('.variant')];
    const darkBtn = document.querySelector('#darkBtn');
    const lightBtn = document.querySelector('#lightBtn');
    const compactBtn = document.querySelector('#compactBtn');
    function setTheme(theme) {
      variants.forEach(v => v.dataset.theme = theme);
      darkBtn.setAttribute('aria-pressed', theme === 'dark');
      lightBtn.setAttribute('aria-pressed', theme === 'light');
    }
    darkBtn.addEventListener('click', () => setTheme('dark'));
    lightBtn.addEventListener('click', () => setTheme('light'));
    compactBtn.addEventListener('click', () => {
      const pressed = compactBtn.getAttribute('aria-pressed') === 'true';
      compactBtn.setAttribute('aria-pressed', String(!pressed));
      document.documentElement.style.setProperty('--compact-scale', !pressed ? '.72' : '1');
      document.querySelectorAll('.largeMark svg').forEach(svg => svg.style.transform = !pressed ? 'scale(.72)' : 'scale(1)');
    });
  </script>
</body>
</html>
````

## File: .storybook/main.js
````javascript
import { mergeConfig } from 'vite';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    { name: '@storybook/addon-essentials', options: { backgrounds: false } },
    '@storybook/addon-links',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.js',
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
      build: {
        assetsInlineLimit: 1024,
      },
    });
  },
};

export default config;
````

## File: .storybook/manager-head.html
````html
<style>
  .sidebar-header img {
    width: 32px;
  }
</style>

<title>Hamish Williams | Storybook</title>
<meta
  name="description"
  content="My custom design component system created from the ground up used in building my portfolio"
/>

<meta name="theme-color" content="#111111" />
<meta name="author" content="Hamish Williams" />

<link rel="shortcut icon" href="/favicon.svg" />
<link rel="apple-touch-icon" href="/icon-256.png" />
<link type="text/plain" rel="author" href="/humans.txt" />

<meta property="og:image" content="https://hamishw.com/social-image.png" />
<meta property="og:image:type" content="image/png" />
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="675" />
<meta property="og:image:alt" content="Banner for the site" />

<meta property="og:title" content="Hamish Williams | Storybook" />
<meta property="og:site_name" content="hamishw.com" />
<meta property="og:url" content="https://storybook.hamishw.com" />
<meta
  property="og:description"
  content="My custom design component system created from the ground up used in building my portfolio"
/>

<meta name="twitter:card" content="summary" />
<meta
  name="twitter:description"
  content="My custom design component system created from the ground up used in building my portfolio"
/>
<meta name="twitter:title" content="Hamish Williams | Storybook" />
<meta name="twitter:site" content="@hamishMW" />
<meta name="twitter:image" content="https://hamishw.com/social-image.png" />
````

## File: .storybook/preview.css
````css
.storyRoot {
  position: absolute;
  inset: 0;
  background: var(--background);
}
````

## File: .storybook/preview.jsx
````javascript
import { useEffect } from 'react';
import { ThemeProvider, themeStyles } from '../app/components/theme-provider';
import '../app/reset.module.css';
import '../app/global.module.css';
import './preview.css';

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    useEffect(() => {
      document.body.dataset.theme = theme;
    }, [theme]);

    return (
      <ThemeProvider theme={theme}>
        <style>{themeStyles}</style>
        <div id="story-root" className="storyRoot">
          <Story />
        </div>
      </ThemeProvider>
    );
  },
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'paintbrush',
      items: ['light', 'dark'],
    },
  },
};

export const parameters = {
  layout: 'fullscreen',
  controls: { hideNoControlsWarning: true },
};
````

## File: .storybook/story-container.css
````css
.storyContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
````

## File: .storybook/story-container.jsx
````javascript
import './story-container.css';

export const StoryContainer = ({
  padding = 32,
  stretch,
  gutter = 32,
  vertical,
  children,
  style,
}) => (
  <div
    className="storyContainer"
    style={{
      padding,
      gap: gutter,
      flexDirection: vertical ? 'column' : 'row',
      alignItems: stretch ? 'stretch' : 'flex-start',
      justifyContent: stretch ? 'stretch' : 'flex-start',
      ...style,
    }}
  >
    {children}
  </div>
);
````

## File: .storybook/vite.config.js
````javascript
import { defineConfig, loadEnv } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  process.env = { ...process.env, ...env };

  return {
    plugins: [jsconfigPaths(), react()],
  };
});
````

## File: app/assets/knowledgeos-architecture.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">KnowledgeOS architecture diagram</title>
  <desc id="desc">A dark architecture diagram showing inputs flowing into an agent maintenance layer, then into a Markdown knowledge vault and derived outputs, with a review and backup loop.</desc>
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f2937" stroke-width="0.6" opacity="0.45"/>
    </pattern>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#050505"/>
      <stop offset="48%" stop-color="#0b0b0d"/>
      <stop offset="100%" stop-color="#15100a"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#e8a838" stop-opacity="0.25"/>
      <stop offset="70%" stop-color="#e8a838" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#e8a838" stop-opacity="0"/>
    </radialGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000000" flood-opacity="0.36"/>
    </filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#e8a838" opacity="0.88"/>
    </marker>
    <marker id="arrowMuted" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#8b949e" opacity="0.75"/>
    </marker>
    <style>
      .mono { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
      .title { font-size: 42px; font-weight: 680; fill: #f7f7f7; letter-spacing: -0.03em; }
      .subtitle { font-size: 18px; fill: #a1a1aa; letter-spacing: -0.01em; }
      .section-title { font-size: 20px; font-weight: 650; fill: #f2f2f2; letter-spacing: -0.02em; }
      .label { font-size: 16px; font-weight: 580; fill: #f4f4f5; }
      .small { font-size: 13px; fill: #a1a1aa; }
      .tiny { font-size: 12px; fill: #85858f; }
      .card { fill: #111113; stroke: #2b2b31; stroke-width: 1.2; }
      .card-strong { fill: #14120d; stroke: #e8a838; stroke-width: 1.6; }
      .card-blue { fill: rgba(8, 51, 68, 0.32); stroke: #22d3ee; stroke-width: 1.3; }
      .card-green { fill: rgba(6, 78, 59, 0.30); stroke: #34d399; stroke-width: 1.3; }
      .card-violet { fill: rgba(76, 29, 149, 0.28); stroke: #a78bfa; stroke-width: 1.3; }
      .card-amber { fill: rgba(120, 53, 15, 0.26); stroke: #e8a838; stroke-width: 1.3; }
      .line { fill: none; stroke: #e8a838; stroke-width: 2.2; marker-end: url(#arrow); opacity: 0.8; }
      .muted-line { fill: none; stroke: #8b949e; stroke-width: 1.7; marker-end: url(#arrowMuted); opacity: 0.6; }
      .loop-line { fill: none; stroke: #e8a838; stroke-width: 1.8; stroke-dasharray: 7 8; marker-end: url(#arrow); opacity: 0.72; }
      .pill { fill: rgba(232, 168, 56, 0.10); stroke: rgba(232, 168, 56, 0.42); stroke-width: 1; }
    </style>
  </defs>

  <rect width="1600" height="1000" fill="url(#bg)"/>
  <rect width="1600" height="1000" fill="url(#grid)" opacity="0.55"/>
  <circle cx="1270" cy="160" r="360" fill="url(#glow)"/>
  <circle cx="340" cy="820" r="300" fill="url(#glow)" opacity="0.45"/>

  <g class="mono">
    <rect x="70" y="56" width="1460" height="888" rx="34" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.08)"/>

    <g transform="translate(110 105)">
      <circle cx="10" cy="11" r="5" fill="#e8a838"/>
      <text x="30" y="18" class="tiny" fill="#e8a838">LIVE LOCAL-FIRST SYSTEM</text>
      <text x="0" y="74" class="title">KnowledgeOS</text>
      <text x="0" y="110" class="subtitle">Agent-maintained personal knowledge system built on Markdown source of truth</text>
    </g>

    <!-- Layer labels -->
    <text x="140" y="255" class="section-title">Inputs</text>
    <text x="495" y="255" class="section-title">Agent Maintenance Layer</text>
    <text x="935" y="255" class="section-title">Markdown Knowledge Vault</text>
    <text x="1260" y="255" class="section-title">Derived Outputs</text>

    <!-- Inputs -->
    <g filter="url(#softShadow)">
      <rect x="120" y="300" width="260" height="76" rx="16" class="card-blue"/>
      <text x="145" y="331" class="label">Hermes conversations</text>
      <text x="145" y="355" class="small">Telegram + agent sessions</text>

      <rect x="120" y="398" width="260" height="76" rx="16" class="card-blue"/>
      <text x="145" y="429" class="label">Project updates</text>
      <text x="145" y="453" class="small">progress, decisions, blockers</text>

      <rect x="120" y="496" width="260" height="76" rx="16" class="card-blue"/>
      <text x="145" y="527" class="label">Research sources</text>
      <text x="145" y="551" class="small">papers, posts, videos, notes</text>

      <rect x="120" y="594" width="260" height="76" rx="16" class="card-blue"/>
      <text x="145" y="625" class="label">Career + learning</text>
      <text x="145" y="649" class="small">portfolio, courses, patterns</text>
    </g>

    <!-- Agent layer -->
    <g filter="url(#softShadow)">
      <rect x="465" y="295" width="340" height="390" rx="24" class="card-strong"/>
      <text x="500" y="335" class="label">Hermes Agent</text>
      <text x="500" y="360" class="small">rules-driven maintenance workflow</text>

      <rect x="500" y="392" width="270" height="42" rx="12" class="pill"/>
      <text x="520" y="419" class="small">capture protocol</text>
      <rect x="500" y="445" width="270" height="42" rx="12" class="pill"/>
      <text x="520" y="472" class="small">privacy filtering</text>
      <rect x="500" y="498" width="270" height="42" rx="12" class="pill"/>
      <text x="520" y="525" class="small">classification + dedupe</text>
      <rect x="500" y="551" width="270" height="42" rx="12" class="pill"/>
      <text x="520" y="578" class="small">weekly synthesis</text>
      <rect x="500" y="604" width="270" height="42" rx="12" class="pill"/>
      <text x="520" y="631" class="small">maintenance audit</text>
    </g>

    <!-- Vault -->
    <g filter="url(#softShadow)">
      <rect x="900" y="295" width="310" height="390" rx="24" class="card-violet"/>
      <text x="935" y="335" class="label">Local Markdown Vault</text>
      <text x="935" y="360" class="small">human-readable source of truth</text>

      <text x="940" y="414" class="small">02-projects / project memory</text>
      <text x="912" y="472" class="label">Compiled Knowledge Layer</text>
      <text x="940" y="506" class="small">LLM Wiki-style source-backed pages</text>
      <text x="940" y="544" class="small">GBrain-style entity memory + relations</text>
      <text x="940" y="582" class="small">Current judgments / evidence timelines</text>
      <text x="940" y="625" class="tiny">Compiled Truth · Evidence Timeline · Relations</text>
    </g>

    <!-- Outputs -->
    <g filter="url(#softShadow)">
      <rect x="1260" y="300" width="240" height="76" rx="16" class="card-green"/>
      <text x="1284" y="331" class="label">Obsidian views</text>
      <text x="1284" y="355" class="small">browse, graph, backlinks</text>

      <rect x="1260" y="398" width="240" height="76" rx="16" class="card-green"/>
      <text x="1284" y="429" class="label">Weekly HTML</text>
      <text x="1284" y="453" class="small">review artifacts</text>

      <rect x="1260" y="496" width="240" height="76" rx="16" class="card-green"/>
      <text x="1284" y="527" class="label">Career material</text>
      <text x="1284" y="551" class="small">resume + portfolio bullets</text>

      <rect x="1260" y="594" width="240" height="76" rx="16" class="card-green"/>
      <text x="1284" y="625" class="label">Git backup</text>
      <text x="1284" y="649" class="small">recoverable local asset</text>
    </g>

    <!-- Arrows -->
    <path d="M 382 338 C 420 338 425 390 464 390" class="muted-line"/>
    <path d="M 382 436 C 420 436 425 455 464 455" class="muted-line"/>
    <path d="M 382 534 C 420 534 425 520 464 520" class="muted-line"/>
    <path d="M 382 632 C 420 632 425 585 464 585" class="muted-line"/>
    <path d="M 807 490 C 846 490 858 490 898 490" class="line"/>
    <path d="M 1212 338 C 1232 338 1238 338 1258 338" class="muted-line"/>
    <path d="M 1212 436 C 1232 436 1238 436 1258 436" class="muted-line"/>
    <path d="M 1212 534 C 1232 534 1238 534 1258 534" class="muted-line"/>
    <path d="M 1212 632 C 1232 632 1238 632 1258 632" class="muted-line"/>

    <!-- Loop -->
    <path d="M 1380 692 C 1375 728 1328 748 1260 752" class="loop-line"/>
    <path d="M 410 752 C 335 744 278 724 250 690" class="loop-line"/>
    <text x="560" y="728" class="small" fill="#e8a838">review · audit · backup loop keeps context current</text>

    <!-- Bottom cards -->
    <g filter="url(#softShadow)">
      <rect x="120" y="760" width="315" height="104" rx="18" class="card"/>
      <text x="146" y="798" class="label">Local-first ownership</text>
      <text x="146" y="827" class="small">Markdown remains portable, inspectable,</text>
      <text x="146" y="850" class="small">and recoverable through Git.</text>

      <rect x="470" y="760" width="315" height="104" rx="18" class="card"/>
      <text x="496" y="798" class="label">Agent-maintained</text>
      <text x="496" y="827" class="small">The agent classifies, dedupes, updates,</text>
      <text x="496" y="850" class="small">and audits instead of dumping transcripts.</text>

      <rect x="820" y="760" width="315" height="104" rx="18" class="card"/>
      <text x="846" y="798" class="label">Maintained judgment</text>
      <text x="846" y="827" class="small">Core pages keep current synthesis,</text>
      <text x="846" y="850" class="small">evidence timelines, and relations.</text>

      <rect x="1170" y="760" width="330" height="104" rx="18" class="card"/>
      <text x="1196" y="798" class="label">Operational loop</text>
      <text x="1196" y="827" class="small">Daily capture, weekly synthesis, audits,</text>
      <text x="1196" y="850" class="small">HTML artifacts, and backup cron jobs.</text>
    </g>
  </g>
</svg>
````

## File: app/assets/knowledgeos-compiled-truth.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">KnowledgeOS compiled truth layer</title>
  <desc id="desc">A sanitized dark mockup showing KnowledgeOS current judgment, evidence timeline, and relations sections.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050505"/><stop offset="1" stop-color="#16110a"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="22" stdDeviation="24" flood-color="#000" flood-opacity="0.45"/></filter>
    <style>.font{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.title{font-size:42px;font-weight:700;fill:#f7f7f7;letter-spacing:-.03em}.sub{font-size:18px;fill:#a1a1aa}.h{font-size:22px;font-weight:700;fill:#f7f7f7}.label{font-size:16px;font-weight:650;fill:#f4f4f5}.small{font-size:14px;fill:#a1a1aa}.tiny{font-size:12px;fill:#85858f}.gold{fill:#e8a838}.panel{fill:#101012;stroke:#2b2b31;stroke-width:1.2}.card{fill:#151518;stroke:#29292f;stroke-width:1}.accent{fill:rgba(232,168,56,.10);stroke:rgba(232,168,56,.42);stroke-width:1}.line{stroke:#e8a838;stroke-width:2;opacity:.65}</style>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <g class="font">
    <rect x="72" y="58" width="1456" height="884" rx="34" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.08)"/>
    <text x="118" y="132" class="title">From saved notes to maintained judgment</text>
    <text x="118" y="170" class="sub">Core pages keep the latest synthesis visible while preserving evidence and relationships.</text>

    <g filter="url(#shadow)">
      <rect x="126" y="238" width="1348" height="620" rx="26" class="panel"/>
      <rect x="126" y="238" width="1348" height="66" rx="26" fill="#171719"/>
      <text x="170" y="280" class="tiny">02-projects / knowledgeos.md · sanitized page structure</text>
      <text x="170" y="364" class="h">KnowledgeOS</text>
      <text x="170" y="397" class="small">Agent-maintained personal knowledge system · Markdown-first · local source of truth</text>

      <rect x="170" y="440" width="590" height="210" rx="20" class="accent"/>
      <text x="202" y="486" class="label gold">Current Judgment / Compiled Truth</text>
      <text x="202" y="528" class="small">KnowledgeOS has moved beyond a note vault into running personal infrastructure.</text>
      <text x="202" y="560" class="small">The next priority is not storing more information, but maintaining current</text>
      <text x="202" y="592" class="small">judgment across projects, workflows, research, and career context.</text>

      <rect x="810" y="440" width="598" height="210" rx="20" class="card"/>
      <text x="838" y="498" class="label gold">Reference patterns</text>
      <text x="842" y="528" class="small">→ LLM Wiki: source-backed pages</text>
      <text x="842" y="560" class="small">→ GBrain: entity memory + relations</text>
      <text x="842" y="592" class="small">→ Hermes Agent: workflow maintenance</text>
      <text x="842" y="624" class="small">→ Reviews / audits / weekly synthesis</text>

      <rect x="170" y="690" width="1238" height="112" rx="20" class="card"/>
      <text x="202" y="734" class="label">Evidence Timeline</text>
      <line x1="224" y1="770" x2="1330" y2="770" class="line"/>
      <circle cx="280" cy="770" r="8" fill="#e8a838"/><text x="254" y="804" class="tiny">v0.1</text>
      <circle cx="575" cy="770" r="8" fill="#e8a838"/><text x="520" y="804" class="tiny">source layer</text>
      <circle cx="870" cy="770" r="8" fill="#e8a838"/><text x="810" y="804" class="tiny">compiled truth</text>
      <circle cx="1165" cy="770" r="8" fill="#e8a838"/><text x="1110" y="804" class="tiny">audit + backup</text>
    </g>
  </g>
</svg>
````

## File: app/assets/knowledgeos-vault-structure.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">KnowledgeOS vault structure</title>
  <desc id="desc">A sanitized dark interface mockup showing the KnowledgeOS Markdown vault folder structure and agent-maintained layers.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050505"/><stop offset="1" stop-color="#15100a"/></linearGradient>
    <radialGradient id="glow" cx="78%" cy="14%" r="60%"><stop offset="0" stop-color="#e8a838" stop-opacity="0.24"/><stop offset="1" stop-color="#e8a838" stop-opacity="0"/></radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="22" stdDeviation="24" flood-color="#000" flood-opacity="0.45"/></filter>
    <style>
      .font{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.title{font-size:42px;font-weight:700;fill:#f7f7f7;letter-spacing:-.03em}.sub{font-size:18px;fill:#a1a1aa}.label{font-size:17px;font-weight:650;fill:#f4f4f5}.small{font-size:14px;fill:#a1a1aa}.tiny{font-size:12px;fill:#85858f}.gold{fill:#e8a838}.panel{fill:#101012;stroke:#2b2b31;stroke-width:1.2}.row{fill:#151518;stroke:#29292f;stroke-width:1}.row2{fill:#121215;stroke:#24242a;stroke-width:1}.pill{fill:rgba(232,168,56,.10);stroke:rgba(232,168,56,.40);stroke-width:1}.blue{fill:rgba(34,211,238,.08);stroke:rgba(34,211,238,.4)}.green{fill:rgba(52,211,153,.08);stroke:rgba(52,211,153,.4)}.violet{fill:rgba(167,139,250,.08);stroke:rgba(167,139,250,.4)}
    </style>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/><circle cx="1280" cy="130" r="410" fill="url(#glow)"/>
  <g class="font">
    <rect x="72" y="58" width="1456" height="884" rx="34" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.08)"/>
    <text x="118" y="132" class="title">Markdown vault as source of truth</text>
    <text x="118" y="170" class="sub">Sanitized KnowledgeOS structure: stable folders, review loops, and compiled knowledge pages</text>

    <g filter="url(#shadow)">
      <rect x="118" y="230" width="410" height="620" rx="24" class="panel"/>
      <rect x="118" y="230" width="410" height="58" rx="24" fill="#171719"/>
      <circle cx="150" cy="259" r="7" fill="#ff5f57"/><circle cx="174" cy="259" r="7" fill="#ffbd2e"/><circle cx="198" cy="259" r="7" fill="#28c840"/>
      <text x="228" y="265" class="tiny">KnowledgeOS / local Markdown vault</text>
      <g transform="translate(146 326)">
        <text y="0" class="small">▾ 00-inbox</text>
        <text y="38" class="small">▸ 01-self</text>
        <text y="76" class="small">▾ 02-projects</text>
        <rect x="-10" y="93" width="330" height="34" rx="8" class="pill"/><text x="18" y="116" class="small gold">knowledgeos.md</text>
        <text y="154" class="small">▾ 03-ai-workflows</text>
        <text y="192" class="small">▾ 04-product-ideas</text>
        <text y="230" class="small">▸ 05-ux-hfe</text>
        <text y="268" class="small">▸ 06-career</text>
        <text y="306" class="small">▸ 07-trading</text>
        <text y="344" class="small">▸ 08-learning</text>
        <text y="382" class="small">▾ 09-research</text>
        <text y="420" class="small">▾ 90-reviews</text>
        <text x="28" y="456" class="tiny">daily / weekly / audits</text>
      </g>
    </g>

    <g filter="url(#shadow)">
      <rect x="590" y="230" width="892" height="620" rx="24" class="panel"/>
      <text x="640" y="294" class="label">Agent-maintained knowledge layers</text>
      <text x="640" y="326" class="small">The vault is organized around what future work needs to retrieve, not around where a note happened to be captured.</text>
      <g transform="translate(640 382)">
        <rect width="360" height="122" rx="18" class="row"/><text x="28" y="42" class="label">Project memory</text><text x="28" y="75" class="small">Current state, decisions, evidence timeline, next actions</text>
        <rect x="412" width="360" height="122" rx="18" class="row2"/><text x="440" y="42" class="label">AI workflows</text><text x="440" y="75" class="small">Capture rules, automation patterns, agent procedures</text>
        <rect y="160" width="360" height="122" rx="18" class="row2"/><text x="28" y="202" class="label">Product ideas</text><text x="28" y="235" class="small">Positioning, strategy, productization boundaries</text>
        <rect x="412" y="160" width="360" height="122" rx="18" class="row"/><text x="440" y="202" class="label">LLM Wiki + GBrain layer</text><text x="440" y="235" class="small">Source-backed concepts, entity memory, relations, queries</text>
        <rect y="320" width="772" height="122" rx="18" class="pill"/><text x="28" y="362" class="label">Review loop</text><text x="28" y="395" class="small">Daily capture → weekly synthesis → maintenance audit → Git backup</text>
      </g>
    </g>
  </g>
</svg>
````

## File: app/assets/knowledgeos-weekly-review.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000" role="img" aria-labelledby="title desc">
  <title id="title">KnowledgeOS review and audit loop</title>
  <desc id="desc">A sanitized dark mockup showing KnowledgeOS daily capture, weekly review, maintenance audit, HTML artifact generation, and Git backup loop.</desc>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#050505"/><stop offset="1" stop-color="#15100a"/></linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="22" stdDeviation="24" flood-color="#000" flood-opacity="0.45"/></filter>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10z" fill="#e8a838"/></marker>
    <style>.font{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}.title{font-size:42px;font-weight:700;fill:#f7f7f7;letter-spacing:-.03em}.sub{font-size:18px;fill:#a1a1aa}.h{font-size:22px;font-weight:700;fill:#f7f7f7}.label{font-size:16px;font-weight:650;fill:#f4f4f5}.small{font-size:14px;fill:#a1a1aa}.tiny{font-size:12px;fill:#85858f}.gold{fill:#e8a838}.panel{fill:#101012;stroke:#2b2b31;stroke-width:1.2}.card{fill:#151518;stroke:#29292f;stroke-width:1}.accent{fill:rgba(232,168,56,.10);stroke:rgba(232,168,56,.42);stroke-width:1}.line{fill:none;stroke:#e8a838;stroke-width:2.2;marker-end:url(#arrow);opacity:.78}</style>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  <g class="font">
    <rect x="72" y="58" width="1456" height="884" rx="34" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.08)"/>
    <text x="118" y="132" class="title">Review loops as product infrastructure</text>
    <text x="118" y="170" class="sub">KnowledgeOS uses scheduled synthesis and audits to keep the vault useful as it grows.</text>

    <g filter="url(#shadow)">
      <rect x="140" y="260" width="1320" height="560" rx="28" class="panel"/>

      <rect x="210" y="350" width="220" height="150" rx="20" class="card"/>
      <text x="240" y="402" class="label">Daily Capture</text>
      <text x="240" y="438" class="small">High-value events</text>
      <text x="240" y="466" class="small">become lightweight</text>
      <text x="240" y="494" class="small">structured records.</text>

      <rect x="530" y="350" width="220" height="150" rx="20" class="accent"/>
      <text x="560" y="402" class="label gold">Weekly Synthesis</text>
      <text x="560" y="438" class="small">Patterns and state</text>
      <text x="560" y="466" class="small">changes update</text>
      <text x="560" y="494" class="small">current judgment.</text>

      <rect x="850" y="350" width="220" height="150" rx="20" class="card"/>
      <text x="880" y="402" class="label">Maintenance Audit</text>
      <text x="880" y="438" class="small">Checks links, sources,</text>
      <text x="880" y="466" class="small">markers, structure,</text>
      <text x="880" y="494" class="small">and backup health.</text>

      <rect x="1170" y="350" width="220" height="150" rx="20" class="card"/>
      <text x="1200" y="402" class="label">Derived Artifacts</text>
      <text x="1200" y="438" class="small">HTML reviews,</text>
      <text x="1200" y="466" class="small">career bullets,</text>
      <text x="1200" y="494" class="small">Git recovery.</text>

      <path d="M 438 425 C 470 425 492 425 522 425" class="line"/>
      <path d="M 758 425 C 790 425 812 425 842 425" class="line"/>
      <path d="M 1078 425 C 1110 425 1132 425 1162 425" class="line"/>

      <rect x="260" y="610" width="1080" height="96" rx="20" class="accent"/>
      <text x="302" y="652" class="label gold">Operational principle</text>
      <text x="302" y="684" class="small">The system does not only remember. It periodically checks whether its memory is still organized, connected, source-backed, and useful.</text>
    </g>
  </g>
</svg>
````

## File: app/components/button/button.jsx
````javascript
import { Icon } from '~/components/icon';
import { Loader } from '~/components/loader';
import { Transition } from '~/components/transition';
import { Link } from '@remix-run/react';
import { forwardRef } from 'react';
import { classes } from '~/utils/style';
import styles from './button.module.css';

function isExternalLink(href) {
  return href?.includes('://');
}

export const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return <ButtonContent href={href} ref={ref} {...rest} />;
  }

  return (
    <ButtonContent
      unstable_viewTransition
      as={Link}
      prefetch="intent"
      to={href}
      ref={ref}
      {...rest}
    />
  );
});

const ButtonContent = forwardRef(
  (
    {
      className,
      as,
      secondary,
      loading,
      loadingText = 'loading',
      icon,
      iconEnd,
      iconHoverShift,
      iconOnly,
      children,
      rel,
      target,
      href,
      disabled,
      ...rest
    },
    ref
  ) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? 'a' : 'button';
    const Component = as || defaultComponent;

    return (
      <Component
        className={classes(styles.button, className)}
        data-loading={loading}
        data-icon-only={iconOnly}
        data-secondary={secondary}
        data-icon={icon}
        href={href}
        rel={rel || isExternal ? 'noopener noreferrer' : undefined}
        target={target || isExternal ? '_blank' : undefined}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {!!icon && (
          <Icon
            className={styles.icon}
            data-start={!iconOnly}
            data-shift={iconHoverShift}
            icon={icon}
          />
        )}
        {!!children && <span className={styles.text}>{children}</span>}
        {!!iconEnd && (
          <Icon
            className={styles.icon}
            data-end={!iconOnly}
            data-shift={iconHoverShift}
            icon={iconEnd}
          />
        )}
        <Transition unmount in={loading}>
          {({ visible, nodeRef }) => (
            <Loader
              ref={nodeRef}
              className={styles.loader}
              size={32}
              text={loadingText}
              data-visible={visible}
            />
          )}
        </Transition>
      </Component>
    );
  }
);
````

## File: app/components/button/button.module.css
````css
@layer components {
  .button {
    --buttonSize: calc((56 / 16) * 1rem);
    --buttonFontSize: calc((18 / 16) * 1rem);
    --buttonFocusWidth: 4px;
    --buttonPadding: 0 var(--spaceL);
    --buttonTextColor: var(--background);
    --buttonTextOpacity: 1;
    --buttonLoaderDelay: 0s;

    height: var(--buttonSize);
    padding: var(--buttonPadding);
    cursor: pointer;
    transition-property: opacity, color, background;
    transition-duration: var(--durationS);
    transition-timing-function: var(--bezierFastoutSlowin);
    display: inline-flex;
    align-items: center;
    color: var(--buttonTextColor);
    position: relative;
    isolation: isolate;

    &:active {
      transition-duration: calc(var(--durationXS) / 2);
    }

    &::after {
      content: '';
      transition-property: opacity, color, background;
      transition-duration: var(--durationM);
      transition-timing-function: var(--bezierFastoutSlowin);
      background: var(--primary);
      position: absolute;
      inset: 0;
      z-index: -1;
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 8px),
        calc(100% - 8px) 100%,
        0 100%
      );
    }

    @media (--mediaUseMotion) {
      transition-property: transform, opacity, color, background;

      &:hover {
        transform: scale(1.05);
      }

      &:active {
        transform: scale(1);
      }
    }

    &[data-secondary='true'] {
      --buttonSpace: 10px;
      --buttonTextColor: var(--primary);

      background: none;
      padding-left: var(--buttonSpace);
      padding-right: var(--buttonSpace);
      position: relative;
      left: calc(var(--buttonSpace) * -1);
      height: calc((32 / 16) * 1rem);

      &::after {
        content: '';
        height: calc((32 / 16) * 1rem);
        position: absolute;
        inset: 0;
        background-color: color-mix(in lab, var(--primary) 20%, transparent);
        transform: scale3d(0, 1, 1);
        transform-origin: right;
        clip-path: none;
      }

      &:hover {
        transform: none;
        background: transparent;
      }

      &:hover::after {
        transform: scale3d(1, 1, 1);
        transform-origin: left;
      }

      &[data-icon='chevron-right'] {
        padding-left: calc(var(--buttonSpace) / 2);
      }

      @media (--mediaUseMotion) {
        &::after {
          transition: transform var(--durationM) var(--bezierFastoutSlowin);
        }
      }
    }

    &[data-loading='true'] {
      --buttonTextOpacity: 0;
    }

    &[data-icon-only='true'] {
      --buttonPadding: 0;
      --buttonTextColor: var(--textBody);

      width: var(--buttonSize);
      align-items: center;
      justify-content: center;
      padding: 0;

      &:hover {
        transform: none;
      }

      &::after {
        background: color-mix(in lab, var(--text) 0%, transparent);
      }

      &:hover::after {
        background: color-mix(in lab, var(--text) 10%, transparent);
      }
    }

    &[disabled] {
      pointer-events: none;
      opacity: 0.4;
    }
  }

  .text {
    font-size: var(--buttonFontSize);
    font-weight: var(--fontWeightMedium);
    opacity: var(--buttonTextOpacity);
    position: relative;
    line-height: 1;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity var(--durationM) var(--bezierFastoutSlowin);
  }

  .loader {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: var(--background);
    opacity: 0;
    transition: opacity var(--durationM) ease var(--buttonLoaderDelay);

    &[data-visible='true'] {
      opacity: 1;
    }
  }

  .icon {
    transition-property: opacity, fill;
    transition-duration: var(--durationS);
    transition-timing-function: var(--bezierFastoutSlowin);

    @media (--mediaUseMotion) {
      transition-property: transform, opacity, fill;
    }

    &[data-start='true'] {
      margin-right: var(--spaceS);
    }

    &[data-end='true'] {
      margin-left: var(--spaceS);
    }

    @media (--mediaUseMotion) {
      .button:hover &[data-shift='true'] {
        transform: translate3d(var(--spaceXS), 0, 0);
      }
    }

    .button[data-loading='true'] & {
      opacity: 0;
    }
  }
}
````

## File: app/components/button/button.stories.jsx
````javascript
import { Button } from '~/components/button';
import { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Button',
};

const LoadableButton = props => {
  const [loading, setLoading] = useState(false);
  return <Button loading={loading} onClick={() => setLoading(!loading)} {...props} />;
};

export const Primary = () => (
  <StoryContainer>
    <Button onClick={action('clicked')}>Text only</Button>
    <Button icon="send" onClick={action('clicked')}>
      Icon left
    </Button>
    <Button iconEnd="arrow-right" onClick={action('clicked')}>
      Icon right
    </Button>
  </StoryContainer>
);

export const Secondary = () => (
  <StoryContainer>
    <Button secondary onClick={action('clicked')}>
      Text only
    </Button>
    <Button secondary icon="arrow-right" onClick={action('clicked')}>
      Icon left
    </Button>
    <Button secondary iconEnd="arrow-right" onClick={action('clicked')}>
      Icon right
    </Button>
  </StoryContainer>
);

export const IconOnly = () => (
  <StoryContainer gutter={20}>
    <Button iconOnly aria-label="Send" icon="send" onClick={action('clicked')} />
    <Button iconOnly aria-label="Figma" icon="figma" onClick={action('clicked')} />
    <Button iconOnly aria-label="Close" icon="close" onClick={action('clicked')} />
  </StoryContainer>
);

export const Loader = () => (
  <StoryContainer>
    <LoadableButton>Click to load</LoadableButton>
    <LoadableButton icon="send">Click to load</LoadableButton>
  </StoryContainer>
);
````

## File: app/components/button/index.js
````javascript
export { Button } from './button';
````

## File: app/components/carousel/carousel-fragment.glsl
````glsl
varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform float dispFactor;
uniform float direction;
uniform bool reduceMotion;

void main() {
  if (reduceMotion) {
    // Simple crossfade
    vec4 _currentImage = texture2D(currentImage, vUv);
    vec4 _nextImage = texture2D(nextImage, vUv);
    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  } else {
    // Liquid distortion effect
    vec2 uv = vUv;
    vec4 _currentImage;
    vec4 _nextImage;
    float intensity = 0.6;

    vec4 orig1 = texture2D(currentImage, uv);
    vec4 orig2 = texture2D(nextImage, uv);

    vec2 distortedPosition = vec2(
      uv.x + direction * (dispFactor * (orig2.r * intensity)),
      uv.y + direction * (dispFactor * (orig2 * intensity))
    );

    vec2 distortedPosition2 = vec2(
      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),
      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))
    );

    _currentImage = texture2D(currentImage, distortedPosition);
    _nextImage = texture2D(nextImage, distortedPosition2);

    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  }
}
````

## File: app/components/carousel/carousel-vertex.glsl
````glsl
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
````

## File: app/components/carousel/carousel.jsx
````javascript
import { animate, useReducedMotion } from 'framer-motion';
import { useInViewport } from '~/hooks';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Color,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  LinearSRGBColorSpace,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from 'three';
import { resolveSrcFromSrcSet } from '~/utils/image';
import { cssProps } from '~/utils/style';
import { cleanRenderer, cleanScene, textureLoader } from '~/utils/three';
import styles from './carousel.module.css';
import fragment from './carousel-fragment.glsl?raw';
import vertex from './carousel-vertex.glsl?raw';

function determineIndex(imageIndex, index, images, direction) {
  if (index !== null) return index;
  const length = images.length;
  const prevIndex = (imageIndex - 1 + length) % length;
  const nextIndex = (imageIndex + 1) % length;
  const finalIndex = direction > 0 ? nextIndex : prevIndex;
  return finalIndex;
}

export const Carousel = ({ width, height, images, placeholder, ...rest }) => {
  const [dragging, setDragging] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [textures, setTextures] = useState();
  const [canvasRect, setCanvasRect] = useState();
  const [webglReady, setWebglReady] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);
  const canvas = useRef();
  const imagePlane = useRef();
  const geometry = useRef();
  const material = useRef();
  const scene = useRef();
  const camera = useRef();
  const renderer = useRef();
  const animating = useRef(false);
  const swipeDirection = useRef();
  const lastSwipePosition = useRef();
  const scheduledAnimationFrame = useRef();
  const reduceMotion = useReducedMotion();
  const inViewport = useInViewport(canvas, true);
  const placeholderRef = useRef();
  const initSwipeX = useRef();

  const currentImageAlt = `Slide ${imageIndex + 1} of ${images.length}. ${
    images[imageIndex].alt
  }`;

  useEffect(() => {
    if (dragging) {
      document.body.style.cursor = 'grabbing';
    }

    return () => {
      document.body.style.cursor = '';
    };
  }, [dragging]);

  useEffect(() => {
    const cameraOptions = [width / -2, width / 2, height / 2, height / -2, 1, 1000];

    try {
      renderer.current = new WebGLRenderer({
        canvas: canvas.current,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: true,
      });
    } catch {
      setLoaded(true);
      setWebglFailed(true);
      return undefined;
    }

    camera.current = new OrthographicCamera(...cameraOptions);
    scene.current = new Scene();
    renderer.current.setPixelRatio(2);
    renderer.current.setClearColor(0x111111, 1.0);
    renderer.current.setSize(width, height);
    renderer.current.domElement.style.width = '100%';
    renderer.current.domElement.style.height = 'auto';
    scene.current.background = new Color(0x111111);
    camera.current.position.z = 1;
    setWebglReady(true);

    return () => {
      animating.current = false;
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, [height, width]);

  useEffect(() => {
    if (!webglReady || webglFailed) return undefined;

    let mounted = true;

    const loadImages = async () => {
      const anisotropy = renderer.current.capabilities.getMaxAnisotropy();

      const texturePromises = images.map(async image => {
        const imageSrc = image.srcSet ? await resolveSrcFromSrcSet(image) : image.src;
        const imageTexture = await textureLoader.loadAsync(imageSrc);
        await renderer.current.initTexture(imageTexture);
        imageTexture.colorSpace = LinearSRGBColorSpace;
        imageTexture.minFilter = LinearFilter;
        imageTexture.magFilter = LinearFilter;
        imageTexture.anisotropy = anisotropy;
        imageTexture.generateMipmaps = false;
        return imageTexture;
      });

      const textures = await Promise.all(texturePromises);

      // Cancel if the component has unmounted during async code
      if (!mounted) return;

      material.current = new ShaderMaterial({
        uniforms: {
          dispFactor: { type: 'f', value: 0 },
          direction: { type: 'f', value: 1 },
          currentImage: { type: 't', value: textures[0] },
          nextImage: { type: 't', value: textures[1] },
          reduceMotion: { type: 'b', value: reduceMotion },
        },
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: false,
        opacity: 1,
      });

      geometry.current = new PlaneGeometry(width, height, 1);
      imagePlane.current = new Mesh(geometry.current, material.current);
      imagePlane.current.position.set(0, 0, 0);
      scene.current.add(imagePlane.current);

      setLoaded(true);
      setTextures(textures);

      requestAnimationFrame(() => {
        renderer.current.render(scene.current, camera.current);
      });
    };

    if (inViewport && !loaded) {
      loadImages();
    }

    return () => {
      mounted = false;
    };
  }, [height, images, inViewport, loaded, reduceMotion, webglFailed, webglReady, width]);

  const goToIndex = useCallback(
    ({ index, direction = 1 }) => {
      if (webglFailed) {
        setImageIndex(index);
        return;
      }

      if (!textures) return;
      setImageIndex(index);
      const { uniforms } = material.current;
      uniforms.nextImage.value = textures[index];
      uniforms.direction.value = direction;

      const onComplete = () => {
        uniforms.currentImage.value = textures[index];
        uniforms.dispFactor.value = 0;
        animating.current = false;
      };

      if (uniforms.dispFactor.value !== 1) {
        animating.current = true;

        animate(uniforms.dispFactor.value, 1, {
          type: 'spring',
          stiffness: 100,
          damping: 20,
          restSpeed: 0.001,
          restDelta: 0.001,
          onUpdate: value => {
            uniforms.dispFactor.value = value;
          },
          onComplete,
        });
      }
    },
    [textures, webglFailed]
  );

  const navigate = useCallback(
    ({ direction, index = null, ...rest }) => {
      if (!loaded) return;

      if (webglFailed) {
        const finalIndex = determineIndex(imageIndex, index, images, direction);
        goToIndex({ index: finalIndex, direction, ...rest });
        return;
      }

      if (animating.current) {
        cancelAnimationFrame(scheduledAnimationFrame.current);
        scheduledAnimationFrame.current = requestAnimationFrame(() =>
          navigate({ direction, index, ...rest })
        );
        return;
      }

      const finalIndex = determineIndex(imageIndex, index, textures, direction);
      goToIndex({ index: finalIndex, direction: direction, ...rest });
    },
    [goToIndex, imageIndex, images, loaded, textures, webglFailed]
  );

  const onNavClick = useCallback(
    index => {
      if (index === imageIndex) return;
      const direction = index > imageIndex ? 1 : -1;
      navigate({ direction, index });
    },
    [imageIndex, navigate]
  );

  useEffect(() => {
    if (webglFailed) return undefined;

    const handleResize = () => {
      const rect = canvas.current.getBoundingClientRect();
      setCanvasRect(rect);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [webglFailed]);

  useEffect(() => {
    if (!webglReady || webglFailed) return undefined;

    let animation;

    const animate = () => {
      animation = requestAnimationFrame(animate);
      if (animating.current) {
        renderer.current.render(scene.current, camera.current);
      }
    };

    animation = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [webglFailed, webglReady]);

  useEffect(() => {
    if (placeholder) {
      const purgePlaceholder = () => {
        setShowPlaceholder(false);
      };

      const placeholderElement = placeholderRef.current;
      placeholderElement.addEventListener('transitionend', purgePlaceholder);

      return () => {
        if (placeholderElement) {
          placeholderElement.removeEventListener('transitionend', purgePlaceholder);
        }
      };
    }
  }, [placeholder]);

  const onSwipeMove = useCallback(
    x => {
      if (webglFailed || animating.current || !material.current || !textures) return;
      lastSwipePosition.current = x;
      const absoluteX = Math.abs(x);
      const containerWidth = canvasRect.width;
      swipeDirection.current = x > 0 ? -1 : 1;
      const swipePercentage = 1 - ((absoluteX - containerWidth) / containerWidth) * -1;
      const nextIndex = determineIndex(imageIndex, null, images, swipeDirection.current);
      const uniforms = material.current.uniforms;
      const displacementClamp = Math.min(Math.max(swipePercentage, 0), 1);

      uniforms.currentImage.value = textures[imageIndex];
      uniforms.nextImage.value = textures[nextIndex];
      uniforms.direction.value = swipeDirection.current;

      uniforms.dispFactor.value = displacementClamp;

      requestAnimationFrame(() => {
        renderer.current.render(scene.current, camera.current);
      });
    },
    [canvasRect, imageIndex, images, textures, webglFailed]
  );

  const onSwipeEnd = useCallback(() => {
    if (webglFailed) return;
    if (!material.current) return;
    const uniforms = material.current.uniforms;
    const duration = (1 - uniforms.dispFactor.value) * 1000;
    const position = Math.abs(lastSwipePosition.current);
    const minSwipeDistance = canvasRect.width * 0.2;
    lastSwipePosition.current = 0;

    if (animating.current) return;
    if (position === 0 || !position) return;

    if (position > minSwipeDistance) {
      navigate({
        duration,
        direction: swipeDirection.current,
      });
    } else {
      uniforms.currentImage.value = uniforms.nextImage.value;
      uniforms.nextImage.value = uniforms.currentImage.value;
      uniforms.dispFactor.value = 1 - uniforms.dispFactor.value;

      navigate({
        direction: swipeDirection.current * -1,
        index: imageIndex,
      });
    }
  }, [canvasRect, imageIndex, navigate, webglFailed]);

  const handlePointerMove = useCallback(
    event => {
      onSwipeMove(event.clientX - initSwipeX.current);
    },
    [onSwipeMove]
  );

  const handlePointerUp = useCallback(() => {
    setDragging(false);
    onSwipeEnd();

    document.removeEventListener('pointerup', handlePointerUp);
    document.removeEventListener('pointermove', handlePointerMove);
  }, [handlePointerMove, onSwipeEnd]);

  const handlePointerDown = useCallback(
    event => {
      if (webglFailed) return;

      initSwipeX.current = event.clientX;
      setDragging(true);

      document.addEventListener('pointermove', handlePointerMove);
      document.addEventListener('pointerup', handlePointerUp);
    },
    [handlePointerMove, handlePointerUp, webglFailed]
  );

  const handleKeyDown = event => {
    switch (event.key) {
      case 'ArrowRight':
        navigate({ direction: 1 });
        break;
      case 'ArrowLeft':
        navigate({ direction: -1 });
        break;
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={styles.carousel} onKeyDown={handleKeyDown} {...rest}>
      <div className={styles.content}>
        <div
          className={styles.imageWrapper}
          data-dragging={dragging}
          onPointerDown={handlePointerDown}
          style={cssProps({ aspectRatio: `${width} / ${height}` })}
        >
          <div
            aria-atomic
            className={styles.canvasWrapper}
            aria-live="polite"
            aria-label={currentImageAlt}
            role="img"
          >
            {webglFailed ? (
              <img
                className={styles.fallbackImage}
                src={placeholder}
                srcSet={images[imageIndex].srcSet}
                sizes={images[imageIndex].sizes}
                alt=""
                role="presentation"
              />
            ) : (
              <canvas aria-hidden className={styles.canvas} ref={canvas} />
            )}
          </div>
          {!webglFailed && showPlaceholder && placeholder && (
            <img
              aria-hidden
              className={styles.placeholder}
              data-loaded={loaded && !!textures}
              src={placeholder}
              ref={placeholderRef}
              alt=""
              role="presentation"
            />
          )}
        </div>
        <button
          className={styles.button}
          data-prev={true}
          aria-label="Previous slide"
          onClick={() => navigate({ direction: -1 })}
        >
          <ArrowLeft />
        </button>
        <button
          className={styles.button}
          data-next={true}
          aria-label="Next slide"
          onClick={() => navigate({ direction: 1 })}
        >
          <ArrowRight />
        </button>
      </div>
      <div className={styles.nav}>
        {images.map((image, index) => (
          <button
            className={styles.navButton}
            key={image.alt}
            onClick={() => onNavClick(index)}
            aria-label={`Jump to slide ${index + 1}`}
            aria-pressed={index === imageIndex}
          />
        ))}
      </div>
    </div>
  );
};

function ArrowLeft() {
  return (
    <svg fill="currentColor" width="18" height="42" viewBox="0 0 18 42">
      <path d="M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg fill="currentColor" width="18" height="42" viewBox="0 0 18 42">
      <path d="M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z" />
    </svg>
  );
}
````

## File: app/components/carousel/carousel.stories.jsx
````javascript
import { Carousel } from '~/components/carousel';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Carousel',
};

export const Images = () => (
  <StoryContainer>
    <Carousel
      style={{ maxWidth: 800, width: '100%' }}
      placeholder="/site-preview.png"
      images={[
        {
          src: '/site-preview.png',
          alt: 'Portfolio site preview',
        },
        {
          src: '/social-image.png',
          alt: 'Portfolio social preview',
        },
      ]}
      width={1920}
      height={1080}
    />
  </StoryContainer>
);
````

## File: app/components/carousel/index.js
````javascript
export { Carousel } from './carousel';
````

## File: app/components/decoder-text/decoder-text.jsx
````javascript
import { VisuallyHidden } from '~/components/visually-hidden';
import { useReducedMotion, useSpring } from 'framer-motion';
import { memo, useEffect, useRef } from 'react';
import { delay } from '~/utils/delay';
import { classes } from '~/utils/style';
import styles from './decoder-text.module.css';

// prettier-ignore
const glyphs = [
  '界', '面', '体', '验',
  '交', '互', '设', '计',
  '编', '程', '代', '码',
  '前', '端', '后', '端',
  '响', '应', '轻', '量',
  '网', '页', '应', '用',
  '智', '能', '无', '界',
  '适', '配', '跨', '端',
  '动', '效', '动', '画',
  '极', '简', '拟', '态',
  '丝', '滑', '云', '端',
  '流', '畅', '易', '用',
  '创', '新', '思', '维',
  '布', '局', '样', '式',
  '优', '化', '效', '率',
];

const CharType = {
  Glyph: 'glyph',
  Value: 'value',
};

function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position) {
      return { type: CharType.Value, value };
    }

    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }

    return { type: CharType.Glyph, value: output[index].value };
  });
}

export const DecoderText = memo(
  ({ text, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: '' }]);
    const container = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });

    useEffect(() => {
      const containerInstance = container.current;
      const content = text.split('');
      let animation;

      const renderOutput = () => {
        const characterMap = output.current.map(item => {
          return `<span class="${styles[item.type]}">${item.value}</span>`;
        });

        containerInstance.innerHTML = characterMap.join('');
      };

      const unsubscribeSpring = decoderSpring.on('change', value => {
        output.current = shuffle(content, output.current, value);
        renderOutput();
      });

      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content.length);
      };

      if (start && !animation && !reduceMotion) {
        startSpring();
      }

      if (reduceMotion) {
        output.current = content.map((value, index) => ({
          type: CharType.Value,
          value: content[index],
        }));
        renderOutput();
      }

      return () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]);

    return (
      <span className={classes(styles.text, className)} {...rest}>
        <VisuallyHidden className={styles.label}>{text}</VisuallyHidden>
        <span aria-hidden className={styles.content} ref={container} />
      </span>
    );
  }
);
````

## File: app/components/decoder-text/decoder-text.module.css
````css
@layer components {
  .text {
    &::after {
      content: '_';
      visibility: hidden;
    }
  }

  .glyph {
    opacity: 0.8;
    font-weight: var(--fontWeightRegular);
    font-family: var(--chineseFontStack);
    line-height: 0;
  }

  .value {
    opacity: 1;
  }
}
````

## File: app/components/decoder-text/decoder-text.stories.jsx
````javascript
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'DecoderText',
  args: {
    text: 'Slick cyberpunk text',
  },
};

export const Text = ({ text }) => (
  <StoryContainer>
    <Heading level={3}>
      <DecoderText delay={0} text={text} />
    </Heading>
  </StoryContainer>
);
````

## File: app/components/decoder-text/index.js
````javascript
export { DecoderText } from './decoder-text';
````

## File: app/components/divider/divider.jsx
````javascript
import { classes, cssProps, numToMs } from '~/utils/style';
import styles from './divider.module.css';

export const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => (
  <div
    className={classes(styles.divider, className)}
    style={cssProps(
      {
        lineWidth: lineWidth,
        lineHeight: lineHeight,
        notchWidth: notchWidth,
        notchHeight: notchHeight,
        collapseDelay: numToMs(collapseDelay),
      },
      style
    )}
    {...rest}
  >
    <div className={styles.line} data-collapsed={collapsed} />
    <div
      className={styles.notch}
      data-collapsed={collapsed}
      style={cssProps({ collapseDelay: numToMs(collapseDelay + 160) })}
    />
  </div>
);

Divider.defaultProps = {
  lineWidth: '100%',
  lineHeight: '2px',
  notchWidth: '90px',
  notchHeight: '10px',
  collapsed: false,
  collapseDelay: 0,
};
````

## File: app/components/divider/divider.module.css
````css
@layer components {
  .divider {
    position: relative;
    width: var(--lineWidth);
    height: var(--lineHeight);
  }

  .line {
    width: 100%;
    height: 100%;
    background-color: var(--primary);
    opacity: 1;
    transition-property: opacity;
    transition-duration: var(--durationL);
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-delay: var(--collapseDelay);
    transform-origin: left center;
    transform: scaleX(1);

    @media (--mediaUseMotion) {
      transition-property: transform, opacity;
    }

    &[data-collapsed='true'] {
      opacity: 0;
      transform: scaleX(0);
    }
  }

  .notch {
    background-color: var(--primary);
    position: absolute;
    transition-property: opacity;
    transition-duration: var(--durationL);
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-delay: var(--collapseDelay);
    opacity: 1;
    clip-path: polygon(0 -1px, 100% -1px, calc(100% - 10px) 100%, 10px 100%);
    width: var(--notchWidth);
    height: var(--notchHeight);
    top: var(--lineHeight);

    @media (--mediaUseMotion) {
      transition-property: clip-path, opacity;
    }

    &[data-collapsed='true'] {
      opacity: 0;
      clip-path: polygon(0 -1px, 0 -1px, 10px 100%, 10px 100%);
    }
  }
}
````

## File: app/components/divider/index.js
````javascript
export { Divider } from './divider';
````

## File: app/components/footer/footer.jsx
````javascript
import { Link } from '~/components/link';
import { Text } from '~/components/text';
import { classes } from '~/utils/style';
import config from '~/config.json';
import styles from './footer.module.css';

export const Footer = ({ className }) => (
  <footer className={classes(styles.footer, className)}>
    <Text size="s" align="center">
      <span className={styles.date}>
        {`© ${new Date().getFullYear()} ${config.name}.`}
      </span>
      <Link secondary className={styles.link} href="/humans.txt" target="_self">
        Crafted by yours truly
      </Link>
    </Text>
  </footer>
);
````

## File: app/components/footer/footer.module.css
````css
@layer components {
  .footer {
    --lineHeightBody: 1.1;

    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    width: 100vw;
    padding: var(--space3XL) var(--spaceL);
    z-index: var(--zIndex2);
    position: relative;
    color: var(--textLight);
  }

  .link {
    display: inline-flex;
  }

  .date {
    padding-right: var(--spaceXS);
    display: inline-flex;
  }
}
````

## File: app/components/footer/index.js
````javascript
export { Footer } from './footer';
````

## File: app/components/heading/heading.jsx
````javascript
import { Fragment } from 'react';
import { classes } from '~/utils/style';
import styles from './heading.module.css';

export const Heading = ({
  children,
  level = 1,
  as,
  align = 'auto',
  weight = 'medium',
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;

  return (
    <Fragment>
      <Component
        className={classes(styles.heading, className)}
        data-align={align}
        data-weight={weight}
        data-level={clampedLevel}
        {...rest}
      >
        {children}
      </Component>
    </Fragment>
  );
};
````

## File: app/components/heading/heading.module.css
````css
@layer components {
  .heading {
    line-height: var(--lineHeightTitle);
    color: var(--textTitle);

    &[data-level='0'] {
      letter-spacing: -0.05em;
      font-size: var(--fontSizeH0);
    }

    &[data-level='1'] {
      letter-spacing: -0.05em;
      font-size: var(--fontSizeH1);
    }

    &[data-level='2'] {
      font-size: var(--fontSizeH2);
      letter-spacing: -0.04em;
    }

    &[data-level='3'] {
      font-size: var(--fontSizeH3);
      letter-spacing: -0.02em;
    }

    &[data-level='4'] {
      font-size: var(--fontSizeH4);
      letter-spacing: -0.01em;
    }

    &[data-level='5'] {
      font-size: var(--fontSizeH5);
    }

    &[data-align='auto'] {
      text-align: inherit;
    }

    &[data-align='start'] {
      text-align: start;
    }

    &[data-align='center'] {
      text-align: center;
    }

    &[data-weight='regular'] {
      font-weight: var(--fontWeightRegular);
    }

    &[data-weight='medium'] {
      font-weight: var(--fontWeightMedium);
    }

    &[data-weight='bold'] {
      font-weight: var(--fontWeightBold);
    }
  }
}
````

## File: app/components/heading/heading.stories.jsx
````javascript
import { Heading } from '~/components/heading';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Heading',
};

export const Level = () => (
  <StoryContainer vertical>
    <Heading level={0}>Heading 0</Heading>
    <Heading level={1}>Heading 1</Heading>
    <Heading level={2}>Heading 2</Heading>
    <Heading level={3}>Heading 3</Heading>
    <Heading level={4}>Heading 4</Heading>
    <Heading level={5}>Heading 5</Heading>
  </StoryContainer>
);

export const Weight = () => (
  <StoryContainer vertical>
    <Heading level={3} weight="regular">
      Regular
    </Heading>
    <Heading level={3} weight="medium">
      Medium
    </Heading>
    <Heading level={3} weight="bold">
      Bold
    </Heading>
  </StoryContainer>
);

export const Align = () => (
  <StoryContainer vertical stretch>
    <Heading level={3} align="start">
      Start
    </Heading>
    <Heading level={3} align="center">
      Center
    </Heading>
  </StoryContainer>
);
````

## File: app/components/heading/index.js
````javascript
export { Heading } from './heading';
````

## File: app/components/icon/icon.jsx
````javascript
import { classes } from '~/utils/style';
import styles from './icon.module.css';
import { forwardRef } from 'react';
import sprites from './icons.svg';

export const Icon = forwardRef(({ icon, className, size, ...rest }, ref) => {
  return (
    <svg
      aria-hidden
      ref={ref}
      className={classes(styles.icon, className)}
      width={size || 24}
      height={size || 24}
      {...rest}
    >
      <use href={`${sprites}#${icon}`} />
    </svg>
  );
});
````

## File: app/components/icon/icon.module.css
````css
@layer components {
  .icon {
    fill: currentColor;
  }
}
````

## File: app/components/icon/icon.stories.jsx
````javascript
import { Icon } from '~/components/icon';
import manifest from '~/components/icon/manifest.json';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Icon',
};

export const Icons = () => {
  return (
    <StoryContainer>
      {Object.keys(manifest).map(key => (
        <Icon key={key} icon={key} />
      ))}
    </StoryContainer>
  );
};
````

## File: app/components/icon/index.js
````javascript
export { Icon } from './icon';
````

## File: app/components/image/image.jsx
````javascript
import { Button } from '~/components/button';
import { Icon } from '~/components/icon';
import { useTheme } from '~/components/theme-provider';
import { useReducedMotion } from 'framer-motion';
import { useHasMounted, useInViewport } from '~/hooks';
import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { resolveSrcFromSrcSet } from '~/utils/image';
import { classes, cssProps, numToMs } from '~/utils/style';
import styles from './image.module.css';

export const Image = ({
  className,
  style,
  reveal,
  delay = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(' ')[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={classes(styles.image, className)}
      data-visible={inViewport || loaded}
      data-reveal={reveal}
      data-raised={raised}
      data-theme={theme}
      style={cssProps({ delay: numToMs(delay) }, style)}
      ref={containerRef}
    >
      <ImageElements
        delay={delay}
        onLoad={onLoad}
        loaded={loaded}
        inViewport={inViewport}
        reveal={reveal}
        src={src}
        srcSet={srcSet}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder,
  delay,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();

  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };

    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);

  useEffect(() => {
    if (!videoRef.current || !videoSrc) return;

    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };

    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };

    if (!play) {
      pauseVideo();

      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }

    if (videoInteracted) return;

    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);

  const togglePlaying = event => {
    event.preventDefault();

    setVideoInteracted(true);

    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={styles.elementWrapper}
      data-reveal={reveal}
      data-visible={inViewport || loaded}
      style={cssProps({ delay: numToMs(delay + 1000) })}
    >
      {isVideo && hasMounted && (
        <Fragment>
          <video
            muted
            loop
            playsInline
            className={styles.element}
            data-loaded={loaded}
            data-cover={cover}
            autoPlay={!reduceMotion}
            onLoadStart={onLoad}
            src={videoSrc}
            aria-label={alt}
            ref={videoRef}
            {...rest}
          />
          {!noPauseButton && (
            <Button className={styles.button} onClick={togglePlaying}>
              <Icon icon={playing ? 'pause' : 'play'} />
              {playing ? 'Pause' : 'Play'}
            </Button>
          )}
        </Fragment>
      )}
      {!isVideo && (
        <img
          className={styles.element}
          data-loaded={loaded}
          data-cover={cover}
          onLoad={onLoad}
          decoding="async"
          src={showFullRes ? src : undefined}
          srcSet={showFullRes ? srcSet : undefined}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          {...rest}
        />
      )}
      {showPlaceholder && (
        <img
          aria-hidden
          className={styles.placeholder}
          data-loaded={loaded}
          data-cover={cover}
          style={cssProps({ delay: numToMs(delay) })}
          ref={placeholderRef}
          src={placeholder}
          width={width}
          height={height}
          onTransitionEnd={() => setShowPlaceholder(false)}
          decoding="async"
          loading="lazy"
          alt=""
          role="presentation"
        />
      )}
    </div>
  );
};

function getIsVideo(src) {
  return typeof src === 'string' && src.includes('.mp4');
}
````

## File: app/components/image/image.module.css
````css
@layer components {
  .image {
    position: relative;
    transform: translate3d(0, 0, 0);
    display: grid;
    grid-template-columns: 100%;
    isolation: isolate;

    &[data-raised='true'] {
      box-shadow: 0 50px 100px -20px color-mix(in lab, var(--black) 25%, transparent),
        0 30px 60px -30px color-mix(in lab, var(--black) 30%, transparent);
    }

    &[data-reveal='true'] {
      --revealDuration: 1.8s;

      transition: box-shadow var(--durationL) ease calc(var(--revealDuration) / 2);

      &:not([data-visible='true']) {
        box-shadow: none;
      }

      &::before {
        content: '';
        background-color: var(--accent);
        position: absolute;
        inset: 0;
        transform: scale3d(0, 1, 1);
        transform-origin: left;
        will-change: transform;
        z-index: var(--zIndex2);
      }

      @media (--mediaUseMotion) {
        &[data-visible='true']::before:global {
          animation: reveal var(--revealDuration) var(--bezierFastoutSlowin) var(--delay);
        }
      }
    }
  }

  .container {
    position: relative;
    transform: none;
    display: grid;
    grid-template-columns: 100%;
  }

  .elementWrapper {
    opacity: 0;
    transition: none;
    transform: none;
    position: relative;
    display: grid;
    grid-template-columns: 100%;

    &[data-reveal='true'] {
      opacity: 0;
      transition: opacity var(--durationM) ease var(--delay);

      @media (--mediaReduceMotion) {
        transition-delay: calc(var(--delay) - 1s);
      }
    }

    &[data-visible='true'] {
      opacity: 1;
    }
  }

  .placeholder,
  .element {
    width: 100%;
    height: auto;
    grid-column: 1;
    grid-row: 1;

    &[data-cover='true'] {
      height: 100%;
      object-fit: cover;
    }
  }

  .placeholder {
    transition: opacity var(--durationM) ease var(--delay);
    pointer-events: none;
    position: relative;
    z-index: var(--zIndex1);
    opacity: 1;

    &[data-loaded='true'] {
      opacity: 0;
    }
  }

  .element {
    opacity: 0;

    &[data-loaded='true'] {
      opacity: 1;
    }
  }

  .button {
    opacity: 0;
    position: absolute;
    top: var(--spaceM);
    left: var(--spaceM);
    height: 32px;
    color: var(--white);
    padding: 0 8px 0 2px;

    &::after {
      background-color: color-mix(in lab, var(--black) 80%, transparent);
    }

    .elementWrapper:hover &,
    &:focus {
      opacity: 1;
    }
  }
}
````

## File: app/components/image/image.stories.jsx
````javascript
import { Image } from '~/components/image';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Image',
};

const imageData = {
  alt: 'Portfolio site preview',
  src: '/site-preview.png',
  width: 960,
  height: 540,
  placeholder: '/site-preview.png',
};

const Story = args => (
  <StoryContainer>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0px, 960px)' }}>
      <Image alt="Portfolio site preview" {...imageData} {...args} />
    </div>
  </StoryContainer>
);

export const Default = Story.bind({});

Default.args = {
  ...imageData,
};

export const Reveal = Story.bind({});

Reveal.args = {
  ...imageData,
  reveal: true,
};
````

## File: app/components/image/index.js
````javascript
export { Image } from './image';
````

## File: app/components/input/index.js
````javascript
export { Input } from './input';
````

## File: app/components/input/input.jsx
````javascript
import { useId, useRef, useState } from 'react';
import { Icon } from '~/components/icon';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { classes, cssProps, msToNum } from '~/utils/style';
import { TextArea } from './text-area';
import styles from './input.module.css';

export const Input = ({
  id,
  label,
  value,
  multiline,
  className,
  style,
  error,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const errorRef = useRef();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : 'input';

  const handleBlur = event => {
    setFocused(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <div
      className={classes(styles.container, className)}
      data-error={!!error}
      style={style}
      {...rest}
    >
      <div className={styles.content}>
        <label
          className={styles.label}
          data-focused={focused}
          data-filled={!!value}
          id={labelId}
          htmlFor={inputId}
        >
          {label}
        </label>
        <InputElement
          className={styles.input}
          id={inputId}
          aria-labelledby={labelId}
          aria-describedby={error ? errorId : undefined}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required={required}
          maxLength={maxLength}
          type={type}
          name={name}
        />
        <div className={styles.underline} data-focused={focused} />
      </div>
      <Transition unmount in={error} timeout={msToNum(tokens.base.durationM)}>
        {({ visible, nodeRef }) => (
          <div
            ref={nodeRef}
            className={styles.error}
            data-visible={visible}
            id={errorId}
            role="alert"
            style={cssProps({
              height: visible ? errorRef.current?.getBoundingClientRect().height : 0,
            })}
          >
            <div className={styles.errorMessage} ref={errorRef}>
              <Icon icon="error" />
              {error}
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};
````

## File: app/components/input/input.module.css
````css
@layer components {
  .container {
    --inputFontSize: calc((16 / 16) * 1rem);
    --inputFocusColor: var(--primary);
    --inputUnderlineColor: color-mix(in lab, var(--text) 20%, transparent);

    position: relative;
    display: flex;
    flex-direction: column;

    &[data-error='true'] {
      --inputUnderlineColor: var(--error);
    }
  }

  .content {
    position: relative;
    display: flex;
  }

  .input {
    display: block;
    color: var(--textBody);
    box-shadow: inset 0 -2px 0 0 var(--inputUnderlineColor);
    transition: background-color 5000s linear 0s;
    width: 100%;
    font-size: var(--inputFontSize);
    line-height: var(--lineHeightBody);
    padding: var(--spaceL) 0 var(--spaceM);
    overflow-x: hidden;
    outline: none;

    &:-internal-autofill-selected {
      -webkit-text-fill-color: var(--textBody);
      box-shadow: 0 0 0 1000px color-mix(in lab, var(--text) 10%, transparent) inset;
    }

    /* Needs to be a single selector to work in safari */
    &:-webkit-autofill {
      -webkit-text-fill-color: var(--textBody);
      box-shadow: 0 0 0 1000px color-mix(in lab, var(--text) 10%, transparent) inset;
    }

    &::-webkit-contacts-auto-fill-button:hover {
      background-color: var(--primary);
    }

    @media (--mediaReduceMotion) {
      #root & {
        transition: background-color 5000s linear 0s;
      }
    }
  }

  .underline {
    background: var(--inputFocusColor);
    transform: scale3d(0, 1, 1);
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 0;
    transform-origin: left;

    @media (--mediaUseMotion) {
      transition: transform var(--durationM) var(--bezierFastoutSlowin);
    }

    &[data-focused='true'] {
      transform: scale3d(1, 1, 1);
    }
  }

  .label {
    color: color-mix(in lab, var(--text) 80%, transparent);
    position: absolute;
    top: var(--spaceL);
    left: 0;
    display: block;
    cursor: text;
    transform-origin: top left;
    transition: color var(--durationM) ease;

    @media (--mediaUseMotion) {
      transition: transform var(--durationM) var(--bezierFastoutSlowin),
        color var(--durationM) ease;
    }

    &[data-filled='true'],
    &[data-focused='true'] {
      color: color-mix(in lab, var(--text) 54%, transparent);
      transform: scale(0.8) translateY(calc(var(--spaceL) * -1));
    }
  }

  .error {
    transition-property: opacity;
    transition-duration: var(--durationM);
    transition-timing-function: var(--bezierFastoutSlowin);
    height: var(--height);
    opacity: 0;

    @media (--mediaUseMotion) {
      transition-property: height, opacity;
    }

    &[data-visible='true'] {
      opacity: 1;
    }
  }

  .errorMessage {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: var(--spaceXS);
    padding-top: var(--spaceS);
    color: var(--error);
  }
}
````

## File: app/components/input/input.stories.jsx
````javascript
import { Input } from '~/components/input';
import { useFormInput } from '~/hooks';

export default {
  title: 'Input',
};

const Story = args => {
  const exampleValue = useFormInput('');
  return (
    <div style={{ maxWidth: 400, width: '100%', padding: 30 }}>
      <Input {...exampleValue} {...args} />
    </div>
  );
};

export const Text = Story.bind({});

Text.args = {
  label: 'Your name',
  type: 'text',
};

export const Multiline = Story.bind({});

Multiline.args = {
  label: 'Type a message',
  type: 'text',
  multiline: true,
};
````

## File: app/components/input/text-area.jsx
````javascript
import { useEffect, useRef, useState } from 'react';
import { classes, cssProps } from '~/utils/style';
import styles from './text-area.module.css';

export const TextArea = ({
  className,
  resize = 'none',
  value,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = useState(minRows);
  const [textareaDimensions, setTextareaDimensions] = useState();
  const textareaRef = useRef();

  useEffect(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight =
      parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({ lineHeight, paddingHeight });
  }, []);

  const handleChange = event => {
    onChange(event);

    const { lineHeight, paddingHeight } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;

    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };

  return (
    <textarea
      className={classes(styles.textarea, className)}
      ref={textareaRef}
      onChange={handleChange}
      style={cssProps({ resize })}
      rows={rows}
      value={value}
      {...rest}
    />
  );
};
````

## File: app/components/input/text-area.module.css
````css
@layer components {
  .textarea {
    resize: var(--resize);
  }
}
````

## File: app/components/link/index.js
````javascript
export { Link } from './link';
````

## File: app/components/link/link.jsx
````javascript
import { forwardRef } from 'react';
import { Link as RouterLink } from '@remix-run/react';
import { classes } from '~/utils/style';
import styles from './link.module.css';

// File extensions that can be linked to
const VALID_EXT = ['txt', 'png', 'jpg'];

function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href?.split('.').pop());
  return href?.includes('://') || href?.[0] === '#' || isValidExtension;
}

export const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href?.includes('://');
    const relValue = rel || (isExternal ? 'noreferrer noopener' : undefined);
    const targetValue = target || (isExternal ? '_blank' : undefined);

    const linkProps = {
      className: classes(styles.link, className),
      ['data-secondary']: secondary,
      rel: relValue,
      href: href,
      target: targetValue,
      ref: ref,
      ...rest,
    };

    if (isAnchor(href)) {
      return (
        <a {...linkProps} href={href}>
          {children}
        </a>
      );
    }

    return (
      <RouterLink unstable_viewTransition prefetch="intent" {...linkProps} to={href}>
        {children}
      </RouterLink>
    );
  }
);
````

## File: app/components/link/link.module.css
````css
@layer components {
  .link {
    --lineStrokeWidth: 2px;
    --linkColor: var(--primary);
    --lineOpacity: 30%;
    --filledLineGradient: linear-gradient(var(--linkColor), var(--linkColor));
    --unfilledLineGradient: linear-gradient(
      color-mix(in lab, var(--linkColor) var(--lineOpacity), transparent),
      color-mix(in lab, var(--linkColor) var(--lineOpacity), transparent)
    );

    cursor: pointer;
    display: inline;
    color: var(--linkColor);
    background: var(--filledLineGradient) no-repeat 100% 100% / 0 var(--lineStrokeWidth),
      var(--unfilledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth);
    padding-bottom: var(--lineStrokeWidth);

    &:hover,
    &:focus {
      background: var(--filledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth),
        var(--unfilledLineGradient) no-repeat 0 100% / 100% var(--lineStrokeWidth);
    }

    @media (--mediaUseMotion) {
      transition-duration: var(--durationM);
      transition-timing-function: var(--bezierFastoutSlowin);
      transition-property: background-size;
    }

    &[data-secondary='true'] {
      --linkColor: var(--text);
    }
  }
}
````

## File: app/components/link/link.stories.jsx
````javascript
import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://princeniu.com">Primary link</Link>
    <Link secondary href="https://princeniu.com">
      Secondary link
    </Link>
  </StoryContainer>
);
````

## File: app/components/list/index.js
````javascript
export { List, ListItem } from './list';
````

## File: app/components/list/list.jsx
````javascript
import { classes } from '~/utils/style';
import styles from './list.module.css';

export const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? 'ol' : 'ul';

  return (
    <Element className={classes(styles.list, className)} {...rest}>
      {children}
    </Element>
  );
};

export const ListItem = ({ children, ...rest }) => {
  return (
    <li className={styles.item} {...rest}>
      {children}
    </li>
  );
};
````

## File: app/components/list/list.module.css
````css
@layer components {
  .list {
    padding-left: 1.7em;
    line-height: var(--lineHeightBody);

    ol& {
      list-style-type: decimal-leading-zero;
    }

    ul& {
      list-style-type: none;
    }
  }

  .item {
    --bulletSize: min(1.2em, 24px);
    --markerGap: var(--spaceS);

    margin-bottom: 0.6em;

    ol &::marker {
      color: var(--primary);
      font-variant-numeric: ordinal;
      font-size: min(1.2em, 16px);
      font-weight: var(--fontWeightMedium);
      font-family: var(--monoFontStack);
    }

    ul &::before {
      content: '';
      position: relative;
      display: inline-block;
      vertical-align: middle;
      left: calc(var(--markerGap) * -1);
      margin-left: calc(var(--bulletSize) * -1);
      width: var(--bulletSize);
      height: var(--bulletSize);
      background-color: var(--primary);
      mask-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.586 12L7.793 6.207l1.414-1.414 6.5 6.5.707.707-.707.707-6.5 6.5-1.414-1.414L13.586 12z"/></svg>');
    }
  }
}
````

## File: app/components/list/list.stories.jsx
````javascript
import { List } from '~/components/list';
import { StoryContainer } from '../../../.storybook/story-container';
import { ListItem } from './list';

export default {
  title: 'List',
};

const Story = args => {
  return (
    <StoryContainer>
      <List {...args}>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </List>
    </StoryContainer>
  );
};

export const Unordered = Story.bind({});

Unordered.args = {
  ordered: false,
};

export const Ordered = Story.bind({});

Ordered.args = {
  ordered: true,
};
````

## File: app/components/loader/index.js
````javascript
export { Loader } from './loader';
````

## File: app/components/loader/loader.jsx
````javascript
import { Text } from '~/components/text';
import { useReducedMotion } from 'framer-motion';
import { classes, cssProps } from '~/utils/style';
import { forwardRef } from 'react';
import styles from './loader.module.css';

export const Loader = forwardRef(
  (
    { className, style, width = 32, height = 4, text = 'Loading...', center, ...rest },
    ref
  ) => {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
      return (
        <Text className={classes(styles.text, className)} weight="medium" {...rest}>
          {text}
        </Text>
      );
    }

    return (
      <div
        ref={ref}
        className={classes(styles.loader, className)}
        data-center={center}
        style={cssProps({ width, height }, style)}
        {...rest}
      >
        <div className={styles.span} />
      </div>
    );
  }
);
````

## File: app/components/loader/loader.module.css
````css
@layer components {
  .loader {
    display: grid;
    grid-template-columns: 100%;
    width: var(--width);
    height: var(--height);
    background: color-mix(in lab, currentColor 20%, transparent);

    &[data-center='true'] {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .text {
    color: inherit;
  }

  @keyframes loaderSpan {
    0% {
      transform: scaleX(0);
      transform-origin: left;
    }

    50% {
      transform: scaleX(1);
      transform-origin: left;
    }

    51% {
      transform: scaleX(1);
      transform-origin: right;
    }

    100% {
      transform: scaleX(0);
      transform-origin: right;
    }
  }

  .span {
    grid-area: 1 / 1;
    background: currentColor;
    animation: loaderSpan 0.7s var(--bezierFastoutSlowin) infinite;
    transform: scaleX(0);
    transform-origin: left;
  }
}
````

## File: app/components/loader/loader.stories.jsx
````javascript
import { Loader } from '~/components/loader';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Loader',
};

export const Default = () => (
  <StoryContainer>
    <Loader width={48} />
  </StoryContainer>
);
````

## File: app/components/model/device-models.js
````javascript
import iphone11 from '~/assets/iphone-11.glb';
import macbookPro from '~/assets/macbook-pro.glb';

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

export const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
};
````

## File: app/components/model/index.js
````javascript
export { Model } from './model';
````

## File: app/components/model/model.jsx
````javascript
import { animate, useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport } from '~/hooks';
import {
  createRef,
  startTransition,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  AmbientLight,
  Color,
  DirectionalLight,
  Group,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshDepthMaterial,
  OrthographicCamera,
  PerspectiveCamera,
  PlaneGeometry,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderTarget,
  WebGLRenderer,
} from 'three';
import { HorizontalBlurShader, VerticalBlurShader } from 'three-stdlib';
import { resolveSrcFromSrcSet } from '~/utils/image';
import { classes, cssProps, numToMs } from '~/utils/style';
import {
  cleanRenderer,
  cleanScene,
  modelLoader,
  removeLights,
  textureLoader,
} from '~/utils/three';
import { ModelAnimationType } from './device-models';
import { throttle } from '~/utils/throttle';
import styles from './model.module.css';

const MeshType = {
  Frame: 'Frame',
  Logo: 'Logo',
  Screen: 'Screen',
};

const rotationSpringConfig = {
  stiffness: 40,
  damping: 20,
  mass: 1.4,
  restSpeed: 0.001,
};

export const Model = ({
  models,
  show = true,
  showDelay = 0,
  cameraPosition = { x: 0, y: 0, z: 8 },
  style,
  className,
  onLoad,
  alt,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [webglReady, setWebglReady] = useState(false);
  const [webglFailed, setWebglFailed] = useState(false);
  const container = useRef();
  const canvas = useRef();
  const camera = useRef();
  const modelGroup = useRef();
  const scene = useRef();
  const renderer = useRef();
  const shadowGroup = useRef();
  const renderTarget = useRef();
  const renderTargetBlur = useRef();
  const shadowCamera = useRef();
  const depthMaterial = useRef();
  const horizontalBlurMaterial = useRef();
  const verticalBlurMaterial = useRef();
  const plane = useRef();
  const lights = useRef();
  const blurPlane = useRef();
  const fillPlane = useRef();
  const isInViewport = useInViewport(container, false, { threshold: 0.2 });
  const reduceMotion = useReducedMotion();
  const rotationX = useSpring(0, rotationSpringConfig);
  const rotationY = useSpring(0, rotationSpringConfig);

  useEffect(() => {
    const { clientWidth, clientHeight } = container.current;

    try {
      renderer.current = new WebGLRenderer({
        canvas: canvas.current,
        alpha: true,
        antialias: false,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: true,
      });
    } catch {
      setLoaded(true);
      setWebglFailed(true);
      onLoad?.();
      return undefined;
    }

    renderer.current.setPixelRatio(2);
    renderer.current.setSize(clientWidth, clientHeight);
    renderer.current.outputColorSpace = SRGBColorSpace;

    camera.current = new PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100);
    camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    scene.current = new Scene();

    modelGroup.current = new Group();
    scene.current.add(modelGroup.current);

    // Lighting
    const ambientLight = new AmbientLight(0xffffff, 1.2);
    const keyLight = new DirectionalLight(0xffffff, 1.1);
    const fillLight = new DirectionalLight(0xffffff, 0.8);

    fillLight.position.set(-6, 2, 2);
    keyLight.position.set(0.5, 0, 0.866);
    lights.current = [ambientLight, keyLight, fillLight];
    lights.current.forEach(light => scene.current.add(light));

    // The shadow container, if you need to move the plane just move this
    shadowGroup.current = new Group();
    scene.current.add(shadowGroup.current);
    shadowGroup.current.position.set(0, 0, -0.8);
    shadowGroup.current.rotateX(Math.PI / 2);

    const renderTargetSize = 512;
    const planeWidth = 8;
    const planeHeight = 8;
    const cameraHeight = 1.5;
    const shadowOpacity = 0.8;
    const shadowDarkness = 3;

    // The render target that will show the shadows in the plane texture
    renderTarget.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize);
    renderTarget.current.texture.generateMipmaps = false;

    // The render target that we will use to blur the first render target
    renderTargetBlur.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize);
    renderTargetBlur.current.texture.generateMipmaps = false;

    // Make a plane and make it face up
    const planeGeometry = new PlaneGeometry(planeWidth, planeHeight).rotateX(Math.PI / 2);

    const planeMaterial = new MeshBasicMaterial({
      map: renderTarget.current.texture,
      opacity: shadowOpacity,
      transparent: true,
    });

    plane.current = new Mesh(planeGeometry, planeMaterial);
    // The y from the texture is flipped!
    plane.current.scale.y = -1;
    shadowGroup.current.add(plane.current);

    // The plane onto which to blur the texture
    blurPlane.current = new Mesh(planeGeometry);
    blurPlane.current.visible = false;
    shadowGroup.current.add(blurPlane.current);

    // The plane with the color of the ground
    const fillMaterial = new MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0,
      transparent: true,
    });

    fillPlane.current = new Mesh(planeGeometry, fillMaterial);
    fillPlane.current.rotateX(Math.PI);
    fillPlane.current.position.y -= 0.00001;
    shadowGroup.current.add(fillPlane.current);

    // The camera to render the depth material from
    shadowCamera.current = new OrthographicCamera(
      -planeWidth / 2,
      planeWidth / 2,
      planeHeight / 2,
      -planeHeight / 2,
      0,
      cameraHeight
    );
    // Get the camera to look up
    shadowCamera.current.rotation.x = Math.PI / 2;
    shadowGroup.current.add(shadowCamera.current);

    // Like MeshDepthMaterial, but goes from black to transparent
    depthMaterial.current = new MeshDepthMaterial();
    depthMaterial.current.userData.darkness = { value: shadowDarkness };
    depthMaterial.current.onBeforeCompile = shader => {
      shader.uniforms.darkness = depthMaterial.current.userData.darkness;
      shader.fragmentShader = `
        uniform float darkness;
        ${shader.fragmentShader.replace(
          'gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );',
          'gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );'
        )}
      `;
    };
    depthMaterial.current.depthTest = false;
    depthMaterial.current.depthWrite = false;

    horizontalBlurMaterial.current = new ShaderMaterial(HorizontalBlurShader);
    horizontalBlurMaterial.current.depthTest = false;

    verticalBlurMaterial.current = new ShaderMaterial(VerticalBlurShader);
    verticalBlurMaterial.current.depthTest = false;

    const unsubscribeX = rotationX.on('change', renderFrame);
    const unsubscribeY = rotationY.on('change', renderFrame);

    setWebglReady(true);

    return () => {
      renderTarget.current?.dispose();
      renderTargetBlur.current?.dispose();
      removeLights(lights.current);
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
      unsubscribeX();
      unsubscribeY();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blurShadow = useCallback(amount => {
    if (!blurPlane.current || !renderer.current) return;

    blurPlane.current.visible = true;

    // Blur horizontally and draw in the renderTargetBlur
    blurPlane.current.material = horizontalBlurMaterial.current;
    blurPlane.current.material.uniforms.tDiffuse.value = renderTarget.current.texture;
    horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256);

    renderer.current.setRenderTarget(renderTargetBlur.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);

    // Blur vertically and draw in the main renderTarget
    blurPlane.current.material = verticalBlurMaterial.current;
    blurPlane.current.material.uniforms.tDiffuse.value = renderTargetBlur.current.texture;
    verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256);

    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(blurPlane.current, shadowCamera.current);

    blurPlane.current.visible = false;
  }, []);

  // Handle render passes for a single frame
  const renderFrame = useCallback(() => {
    if (
      !camera.current ||
      !depthMaterial.current ||
      !modelGroup.current ||
      !renderer.current ||
      !scene.current ||
      !shadowCamera.current
    ) {
      return;
    }

    const blurAmount = 5;

    // Remove the background
    const initialBackground = scene.current.background;
    scene.current.background = null;

    // Force the depthMaterial to everything
    // cameraHelper.visible = false;
    scene.current.overrideMaterial = depthMaterial.current;

    // Render to the render target to get the depths
    renderer.current.setRenderTarget(renderTarget.current);
    renderer.current.render(scene.current, shadowCamera.current);

    // And reset the override material
    scene.current.overrideMaterial = null;

    blurShadow(blurAmount);

    // A second pass to reduce the artifacts
    // (0.4 is the minimum blur amout so that the artifacts are gone)
    blurShadow(blurAmount * 0.4);

    // Reset and render the normal scene
    renderer.current.setRenderTarget(null);
    scene.current.background = initialBackground;

    modelGroup.current.rotation.x = rotationX.get();
    modelGroup.current.rotation.y = rotationY.get();

    renderer.current.render(scene.current, camera.current);
  }, [blurShadow, rotationX, rotationY]);

  // Handle mouse move animation
  useEffect(() => {
    const onMouseMove = throttle(event => {
      const { innerWidth, innerHeight } = window;

      const position = {
        x: (event.clientX - innerWidth / 2) / innerWidth,
        y: (event.clientY - innerHeight / 2) / innerHeight,
      };

      rotationY.set(position.x / 2);
      rotationX.set(position.y / 2);
    }, 100);

    if (isInViewport && !reduceMotion) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  // Handle window resize
  useEffect(() => {
    if (!webglReady) return undefined;

    const handleResize = () => {
      if (!container.current) return;

      const { clientWidth, clientHeight } = container.current;

      renderer.current.setSize(clientWidth, clientHeight);
      camera.current.aspect = clientWidth / clientHeight;
      camera.current.updateProjectionMatrix();

      renderFrame();
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [renderFrame, webglReady]);

  return (
    <div
      className={classes(styles.model, className)}
      data-loaded={loaded}
      style={cssProps({ delay: numToMs(showDelay) }, style)}
      ref={container}
      role="img"
      aria-label={alt}
      {...rest}
    >
      {!webglFailed && <canvas className={styles.canvas} ref={canvas} />}
      {webglReady &&
        models.map((model, index) => (
          <Device
            key={JSON.stringify(model.position)}
            renderer={renderer}
            modelGroup={modelGroup}
            show={show}
            showDelay={showDelay}
            renderFrame={renderFrame}
            index={index}
            setLoaded={setLoaded}
            onLoad={onLoad}
            model={model}
          />
        ))}
    </div>
  );
};

const Device = ({
  renderer,
  model,
  modelGroup,
  renderFrame,
  index,
  showDelay,
  setLoaded,
  onLoad,
  show,
}) => {
  const [loadDevice, setLoadDevice] = useState();
  const reduceMotion = useReducedMotion();
  const placeholderScreen = createRef();

  useEffect(() => {
    const applyScreenTexture = async (texture, node) => {
      texture.colorSpace = SRGBColorSpace;
      texture.flipY = false;
      texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy();
      texture.generateMipmaps = false;

      // Decode the texture to prevent jank on first render
      await renderer.current.initTexture(texture);

      node.material.color = new Color(0xffffff);
      node.material.transparent = true;
      node.material.map = texture;
    };

    // Generate promises to await when ready
    const load = async () => {
      const { texture, position, url } = model;
      let loadFullResTexture;
      let playAnimation;

      const [placeholder, gltf] = await Promise.all([
        await textureLoader.loadAsync(texture.placeholder),
        await modelLoader.loadAsync(url),
      ]);

      modelGroup.current.add(gltf.scene);

      gltf.scene.traverse(async node => {
        if (node.material) {
          node.material.color = new Color(0x1f2025);
        }

        if (node.name === MeshType.Screen) {
          // Create a copy of the screen mesh so we can fade it out
          // over the full resolution screen texture
          placeholderScreen.current = node.clone();
          placeholderScreen.current.material = node.material.clone();
          node.parent.add(placeholderScreen.current);
          placeholderScreen.current.material.opacity = 1;
          placeholderScreen.current.position.z += 0.001;

          applyScreenTexture(placeholder, placeholderScreen.current);

          loadFullResTexture = async () => {
            const image = await resolveSrcFromSrcSet(texture);
            const fullSize = await textureLoader.loadAsync(image);
            await applyScreenTexture(fullSize, node);

            animate(1, 0, {
              onUpdate: value => {
                placeholderScreen.current.material.opacity = value;
                renderFrame();
              },
            });
          };
        }
      });

      const targetPosition = new Vector3(position.x, position.y, position.z);

      if (reduceMotion) {
        gltf.scene.position.set(...targetPosition.toArray());
      }

      // Simple slide up animation
      if (model.animation === ModelAnimationType.SpringUp) {
        playAnimation = () => {
          const startPosition = new Vector3(
            targetPosition.x,
            targetPosition.y - 1,
            targetPosition.z
          );

          gltf.scene.position.set(...startPosition.toArray());

          animate(startPosition.y, targetPosition.y, {
            type: 'spring',
            delay: (300 * index + showDelay) / 1000,
            stiffness: 60,
            damping: 20,
            mass: 1,
            restSpeed: 0.0001,
            restDelta: 0.0001,
            onUpdate: value => {
              gltf.scene.position.y = value;
              renderFrame();
            },
          });
        };
      }

      // Swing the laptop lid open
      if (model.animation === ModelAnimationType.LaptopOpen) {
        playAnimation = () => {
          const frameNode = gltf.scene.children.find(
            node => node.name === MeshType.Frame
          );
          const startRotation = new Vector3(MathUtils.degToRad(90), 0, 0);
          const endRotation = new Vector3(0, 0, 0);

          gltf.scene.position.set(...targetPosition.toArray());
          frameNode.rotation.set(...startRotation.toArray());

          return animate(startRotation.x, endRotation.x, {
            type: 'spring',
            delay: (300 * index + showDelay + 300) / 1000,
            stiffness: 80,
            damping: 20,
            restSpeed: 0.0001,
            restDelta: 0.0001,
            onUpdate: value => {
              frameNode.rotation.x = value;
              renderFrame();
            },
          });
        };
      }

      return { loadFullResTexture, playAnimation };
    };

    setLoadDevice({ start: load });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!loadDevice || !show) return;
    let animation;

    const onModelLoad = async () => {
      const { loadFullResTexture, playAnimation } = await loadDevice.start();

      setLoaded(true);
      onLoad?.();

      if (!reduceMotion) {
        animation = playAnimation();
      }

      await loadFullResTexture();

      if (reduceMotion) {
        renderFrame();
      }
    };

    startTransition(() => {
      onModelLoad();
    });

    return () => {
      animation?.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadDevice, show]);
};

export default Model;
````

## File: app/components/model/model.module.css
````css
@layer components {
  .model {
    position: relative;
    opacity: 0;

    &[data-loaded='true']:global {
      animation: fade-in 1s ease forwards var(--delay);
    }
  }

  .canvas {
    position: absolute;
    inset: 0;
  }
}
````

## File: app/components/monogram/index.js
````javascript
export { Monogram } from './monogram';
````

## File: app/components/monogram/Monogram.stories.jsx
````javascript
import { Monogram } from '~/components/monogram';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Monogram',
};

export const Default = () => (
  <StoryContainer>
    <Monogram highlight />
  </StoryContainer>
);
````

## File: app/components/progress/index.js
````javascript
export { Progress } from './progress';
````

## File: app/components/progress/progress.jsx
````javascript
import { useNavigation } from '@remix-run/react';
import { useRef, useEffect, useState } from 'react';
import styles from './progress.module.css';

export function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);

  useEffect(() => {
    clearTimeout(timeout.current);

    if (state !== 'idle') {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);

  useEffect(() => {
    if (!progressRef.current) return;

    const controller = new AbortController();

    if (state !== 'idle') {
      return setAnimationComplete(false);
    }

    Promise.all(
      progressRef.current
        .getAnimations({ subtree: true })
        .map(animation => animation.finished)
    ).then(() => {
      if (controller.signal.aborted) return;
      setAnimationComplete(true);
    });

    return () => {
      controller.abort();
    };
  }, [state]);

  return (
    <div
      className={styles.progress}
      data-status={state}
      data-visible={visible}
      data-complete={animationComplete}
      ref={progressRef}
    />
  );
}
````

## File: app/components/progress/progress.module.css
````css
@layer components {
  .progress {
    --duration: 500ms;
    --progress: 0;
    --delay: 300ms;
    --opacity: 1;

    height: 2px;
    background: var(--accent);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: var(--zIndex4);
    opacity: var(--opacity);
    transform: scaleX(var(--progress));
    transform-origin: left;
    transition: transform var(--duration) var(--bezierFastoutSlowin) var(--delay);

    [data-theme='light'] & {
      height: 3px;
    }

    &[data-status='idle'][data-complete='true'] {
      --progress: 0;
      --delay: 300ms;
      --opacity: 0;

      transition: transform var(--duration) var(--bezierFastoutSlowin) var(--delay),
        opacity var(--duration) var(--bezierFastoutSlowin);
    }

    &[data-status='loading'] {
      --progress: 0.6;
    }

    &[data-status='idle'][data-complete='false'] {
      --progress: 1;
    }

    &[data-visible='false'] {
      transform: scaleX(0);
      opacity: 0;
    }
  }
}
````

## File: app/components/section/index.js
````javascript
export { Section } from './section';
````

## File: app/components/section/section.jsx
````javascript
import { forwardRef } from 'react';
import { classes } from '~/utils/style';
import styles from './section.module.css';

export const Section = forwardRef(
  ({ as: Component = 'div', children, className, ...rest }, ref) => (
    <Component className={classes(styles.section, className)} ref={ref} {...rest}>
      {children}
    </Component>
  )
);
````

## File: app/components/section/section.module.css
````css
@layer components {
  .section {
    padding-right: var(--space5XL);
    padding-left: calc(var(--space4XL) * 2);

    &:focus {
      outline: none;
    }

    @media (min-width: 2080px) {
      padding-left: var(--space5XL);
    }

    @media (--mediaTablet) {
      padding-left: calc(var(--space4XL) + var(--space3XL));
    }

    @media (--mediaMobile) {
      padding-right: var(--spaceL);
      padding-left: var(--spaceL);
    }

    @media (--mediaMobile), (--mediaMobileLS) {
      padding-left: var(--spaceOuter);
      padding-right: var(--spaceOuter);
    }

    @media (max-width: 820px) and (max-height: 420px) {
      padding-left: var(--space4XL);
      padding-right: var(--space4XL);
    }
  }
}
````

## File: app/components/segmented-control/index.js
````javascript
export { SegmentedControl, SegmentedControlOption } from './segmented-control';
````

## File: app/components/segmented-control/segmented-control.jsx
````javascript
import { VisuallyHidden } from '~/components/visually-hidden';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { cssProps } from '~/utils/style';
import styles from './segmented-control.module.css';

const SegmentedControlContext = createContext({});

export const SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label,
  ...props
}) => {
  const id = useId();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = useRef([]);
  const [indicator, setIndicator] = useState();

  const handleKeyDown = event => {
    const { length } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;

    if (['ArrowLeft', 'ArrowUp'].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (['ArrowRight', 'ArrowDown'].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };

  const registerOption = useCallback(optionRef => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);

  const unRegisterOption = useCallback(optionRef => {
    optionRefs.current = optionRefs.current.filter(ref => ref !== optionRef);
  }, []);

  useEffect(() => {
    const currentOption = optionRefs.current[currentIndex]?.current;

    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption?.getBoundingClientRect();
      const left = currentOption?.offsetLeft;
      setIndicator({ width: rect?.width, left });
    });

    resizeObserver.observe(currentOption);

    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);

  return (
    <SegmentedControlContext.Provider
      value={{ optionRefs, currentIndex, onChange, registerOption, unRegisterOption }}
    >
      <div
        className={styles.container}
        role="radiogroup"
        tabIndex="0"
        aria-labelledby={labelId}
        onKeyDown={handleKeyDown}
        {...props}
      >
        <VisuallyHidden as="label" id={labelId}>
          {label}
        </VisuallyHidden>
        <div className={styles.options}>
          {!!indicator && (
            <div
              className={styles.indicator}
              data-last={currentIndex === optionRefs.current.length - 1}
              style={cssProps(indicator)}
            />
          )}
          {children}
        </div>
      </div>
    </SegmentedControlContext.Provider>
  );
};

export const SegmentedControlOption = ({ children, ...props }) => {
  const { optionRefs, currentIndex, onChange, registerOption, unRegisterOption } =
    useContext(SegmentedControlContext);
  const optionRef = useRef();
  const index = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index;

  useEffect(() => {
    registerOption(optionRef);

    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);

  return (
    <button
      className={styles.button}
      tabIndex={isSelected ? 0 : -1}
      role="radio"
      aria-checked={isSelected}
      onClick={() => onChange(index)}
      ref={optionRef}
      {...props}
    >
      {children}
    </button>
  );
};
````

## File: app/components/segmented-control/segmented-control.module.css
````css
@layer components {
  .container {
    --inset: 4px;
  }

  .options {
    position: relative;
    display: flex;
    padding: var(--inset);

    &::before {
      content: '';
      background-color: color-mix(in lab, var(--text) 5%, transparent);
      position: absolute;
      inset: 0;
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 10px),
        calc(100% - 10px) 100%,
        0 100%
      );
    }
  }

  .button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: var(--textLight);
    transition-property: color, background;
    transition-duration: var(--durationM);
    transition-timing-function: ease;
    border: 0;
    padding: 0 24px;
    height: 56px;
    font-size: inherit;
    font-family: inherit;
    font-weight: var(--fontWeightMedium);
    cursor: pointer;

    &[aria-checked='true'] {
      color: var(--textBody);
    }

    &::before {
      --inset: 12px;

      content: '';
      position: absolute;
      top: var(--inset);
      bottom: var(--inset);
      left: 0;
      width: 1px;
      background-color: color-mix(in lab, var(--text) 10%, transparent);
      transition: opacity var(--durationM) var(--bezierFastoutSlowin);
      opacity: 0;
    }

    &:not([aria-checked='true']) + &:not([aria-checked='true'])::before {
      opacity: 1;
    }
  }

  .indicator {
    position: absolute;
    top: var(--inset);
    bottom: var(--inset);
    left: 0;
    filter: drop-shadow(0 6px 12px color-mix(in lab, var(--black) 20%, transparent));
    transform: translate3d(var(--left), 0, 0);
    width: var(--width);

    @media (--mediaUseMotion) {
      transition-property: width, transform;
      transition-duration: var(--durationM);
      transition-timing-function: var(--bezierFastoutSlowin);
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: var(--backgroundLight);
      filter: brightness(2.2);
      clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 100%, 0 100%);

      @media (--mediaUseMotion) {
        transition: clip-path var(--durationM) var(--bezierFastoutSlowin);
      }
    }

    &[data-last='true']::before {
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 8px),
        calc(100% - 8px) 100%,
        0 100%
      );
    }
  }
}
````

## File: app/components/segmented-control/segmented-control.stories.jsx
````javascript
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { useState } from 'react';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'SegmentedControl',
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

function Story({ options, ...args }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <StoryContainer>
      <SegmentedControl currentIndex={currentIndex} onChange={setCurrentIndex} {...args}>
        {options?.map((option, index) => (
          <SegmentedControlOption key={`${option}-${index}`}>
            {option}
          </SegmentedControlOption>
        ))}
      </SegmentedControl>
    </StoryContainer>
  );
}

export const Default = Story.bind({});
````

## File: app/components/table/index.js
````javascript
export { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from './table';
````

## File: app/components/table/table.jsx
````javascript
import styles from './table.module.css';

export const Table = ({ children }) => <table className={styles.table}>{children}</table>;

export const TableRow = ({ children }) => <tr className={styles.row}>{children}</tr>;

export const TableHead = ({ children }) => (
  <thead className={styles.head}>{children}</thead>
);

export const TableBody = ({ children }) => (
  <tbody className={styles.body}>{children}</tbody>
);

export const TableHeadCell = ({ children }) => (
  <th className={styles.headCell}>{children}</th>
);

export const TableCell = ({ children }) => <td className={styles.cell}>{children}</td>;
````

## File: app/components/table/table.module.css
````css
@layer components {
  .table {
    border-collapse: collapse;
    width: 100%;
  }

  .row {
    --rowBorder: 1px solid color-mix(in lab, var(--text) 20%, transparent);

    border-top: var(--rowBorder);

    &:last-child {
      border-bottom: var(--rowBorder);
    }

    .head & {
      border-top: 0;
    }
  }

  .headCell {
    font-weight: var(--fontWeightMedium);
    text-align: left;
  }

  .cell,
  .headCell {
    padding-right: var(--spaceXL);
    padding-top: var(--spaceM);
    padding-bottom: var(--spaceM);

    &:last-child {
      padding-right: 0;
    }
  }
}
````

## File: app/components/table/table.stories.jsx
````javascript
import { Table, TableCell, TableRow } from '~/components/table';
import { StoryContainer } from '../../../.storybook/story-container';
import { TableBody, TableHead, TableHeadCell } from './table';

export default {
  title: 'Table',
};

export const Default = () => (
  <StoryContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>Country</TableHeadCell>
          <TableHeadCell>Capital</TableHeadCell>
          <TableHeadCell>Population</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>USA</TableCell>
          <TableCell>Washington, D.C.</TableCell>
          <TableCell>309 million</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Sweden</TableCell>
          <TableCell>Stockholm</TableCell>
          <TableCell>9 million</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </StoryContainer>
);
````

## File: app/components/text/index.js
````javascript
export { Text } from './text';
````

## File: app/components/text/text.jsx
````javascript
import { classes } from '~/utils/style';
import styles from './text.module.css';

export const Text = ({
  children,
  size = 'm',
  as: Component = 'span',
  align = 'auto',
  weight = 'auto',
  secondary,
  className,
  ...rest
}) => {
  return (
    <Component
      className={classes(styles.text, className)}
      data-align={align}
      data-size={size}
      data-weight={weight}
      data-secondary={secondary}
      {...rest}
    >
      {children}
    </Component>
  );
};
````

## File: app/components/text/text.module.css
````css
@layer components {
  .text {
    line-height: var(--lineHeightBody);
    color: var(--textBody);

    &[data-size='s'] {
      font-size: var(--fontSizeBodyS);
    }

    &[data-size='m'] {
      font-size: var(--fontSizeBodyM);
    }

    &[data-size='l'] {
      font-size: var(--fontSizeBodyL);
    }

    &[data-size='xl'] {
      font-size: var(--fontSizeBodyXL);
    }

    &[data-align='auto'] {
      text-align: inherit;
    }

    &[data-align='start'] {
      text-align: start;
    }

    &[data-align='center'] {
      text-align: center;
    }

    &[data-weight='auto'] {
      font-weight: inherit;
    }

    &[data-weight='regular'] {
      font-weight: var(--fontWeightRegular);
    }

    &[data-weight='medium'] {
      font-weight: var(--fontWeightMedium);
    }

    &[data-weight='bold'] {
      font-weight: var(--fontWeightBold);
    }

    &[data-secondary='true'] {
      color: var(--textLight);
    }
  }
}
````

## File: app/components/theme-provider/index.js
````javascript
export { ThemeProvider, themeStyles, ThemeContext, useTheme } from './theme-provider';
export { themes } from './theme';
````

## File: app/components/transition/index.js
````javascript
export { Transition } from './transition';
````

## File: app/components/transition/transition.jsx
````javascript
import { AnimatePresence, usePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/**
 * A lightweight Framer Motion `AnimatePresence` implementation of
 * `react-transition-group` to be used for simple vanilla css transitions
 */
export const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();

  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {(show || !unmount) && (
        <TransitionContent
          enterTimeout={enterTimeout}
          exitTimeout={exitTimeout}
          in={show}
          initial={initial}
          {...props}
        >
          {children}
        </TransitionContent>
      )}
    </AnimatePresence>
  );
};

const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show,
}) => {
  const [status, setStatus] = useState(initial ? 'exited' : 'entered');
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === 'object';
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;

  useEffect(() => {
    if (hasEntered || !show) return;

    const actualTimeout = splitTimeout ? timeout.enter : timeout;

    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);

    setHasEntered(true);
    setStatus('entering');
    onEnter?.();

    // Force reflow
    nodeRef.current?.offsetHeight;

    enterTimeout.current = setTimeout(() => {
      setStatus('entered');
      onEntered?.();
    }, actualTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onEnter, onEntered, timeout, status, show]);

  useEffect(() => {
    if (isPresent && show) return;

    const actualTimeout = splitTimeout ? timeout.exit : timeout;

    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);

    setStatus('exiting');
    onExit?.();

    // Force reflow
    nodeRef.current?.offsetHeight;

    exitTimeout.current = setTimeout(() => {
      setStatus('exited');
      safeToRemove?.();
      onExited?.();
    }, actualTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);

  return children({ visible, status, nodeRef });
};
````

## File: app/components/visually-hidden/index.js
````javascript
export { VisuallyHidden } from './visually-hidden';
````

## File: app/components/visually-hidden/visually-hidden.jsx
````javascript
import { forwardRef } from 'react';
import { classes } from '~/utils/style';
import styles from './visually-hidden.module.css';

export const VisuallyHidden = forwardRef(
  (
    { className, showOnFocus, as: Component = 'span', children, visible, ...rest },
    ref
  ) => {
    return (
      <Component
        className={classes(styles.hidden, className)}
        data-hidden={!visible && !showOnFocus}
        data-show-on-focus={showOnFocus}
        ref={ref}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
````

## File: app/components/visually-hidden/visually-hidden.module.css
````css
@layer components {
  .hidden {
    position: absolute;

    &[data-hidden='true'],
    &[data-show-on-focus='true']:not(:focus) {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
}
````

## File: app/hooks/index.js
````javascript
export * from './useFormInput';
export * from './useHasMounted';
export * from './useInterval';
export * from './useInViewport';
export * from './useParallax';
export * from './usePrevious';
export * from './useScrollToHash';
export * from './useWindowSize';
````

## File: app/hooks/useFormInput.js
````javascript
import { useState } from 'react';

export function useFormInput(initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);

  const handleChange = event => {
    setValue(event.target.value);
    setIsDirty(true);

    // Resolve errors as soon as input becomes valid
    if (error && event.target.checkValidity()) {
      setError(null);
    }
  };

  const handleInvalid = event => {
    // Prevent native errors appearing
    event.preventDefault();
    setError(event.target.validationMessage);
  };

  const handleBlur = event => {
    // Only validate when the user has made a change
    if (isDirty) {
      event.target.checkValidity();
    }
  };

  return {
    value,
    error,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid,
  };
}
````

## File: app/hooks/useHasMounted.js
````javascript
import { useEffect, useState } from 'react';

export function useHasMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
````

## File: app/hooks/useHydrated.js
````javascript
import { useSyncExternalStore } from 'react';

function subscribe() {
  return () => {};
}

export function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
````

## File: app/hooks/useInterval.js
````javascript
import { useEffect, useRef } from 'react';

export function useInterval(callback, delay, reset) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, reset]);
}
````

## File: app/hooks/useInViewport.js
````javascript
import { useEffect, useState } from 'react';

export function useInViewport(
  elementRef,
  unobserveOnIntersect,
  options = {},
  shouldObserve = true
) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);

  useEffect(() => {
    if (!elementRef?.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      const { isIntersecting, target } = entry;

      setIntersect(isIntersecting);

      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);

    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);

  return intersect;
}
````

## File: app/hooks/useParallax.js
````javascript
import { useReducedMotion } from 'framer-motion';
import { useEffect } from 'react';

export function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;
    let animationFrame = null;

    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (!reduceMotion) {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
````

## File: app/hooks/usePrevious.js
````javascript
import { useEffect, useRef } from 'react';

export function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
````

## File: app/hooks/useScrollToHash.js
````javascript
import { useReducedMotion } from 'framer-motion';
import { useLocation, useNavigate } from '@remix-run/react';
import { useCallback, useRef } from 'react';

export function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split('#')[1];
      const targetElement = document.getElementById(id);

      targetElement.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });

      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);

        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener('scroll', handleScroll);

          if (window.location.pathname === location.pathname) {
            onDone?.();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );

  return scrollToHash;
}
````

## File: app/hooks/useWindowSize.js
````javascript
import { useCallback, useEffect, useRef, useState } from 'react';

export function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));

  const createRuler = useCallback(() => {
    let ruler = document.createElement('div');

    ruler.style.position = 'fixed';
    ruler.style.height = '100vh';
    ruler.style.width = 0;
    ruler.style.top = 0;

    document.documentElement.appendChild(ruler);

    // Set cache conscientious of device orientation
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;

    // Clean up after ourselves
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);

  // Get the actual height on iOS Safari
  const getHeight = useCallback(() => {
    const isIOS = navigator?.userAgent.match(/iphone|ipod|ipad/i);

    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }

    return window.innerHeight;
  }, [createRuler]);

  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight(),
    };
  }, [getHeight]);

  const [windowSize, setWindowSize] = useState(dimensions.current);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize]);

  return windowSize;
}
````

## File: app/layouts/error/error-flatline.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="skull" width="60" height="80" fill="none" viewBox="0 0 60 80" stroke-width="2" stroke="currentColor">
    <path fill="currentColor" fill-opacity=".2" fill-rule="evenodd" d="m56.764 60.162-2.93 2.54a.42.42 0 0 1-.123.073l-7.944 3.056a.417.417 0 0 0-.197.158l-3.593 5.39a.417.417 0 0 0-.066.29l.549 3.844a.417.417 0 0 1-.318.466L39.5 77l-2.5.5-3.5 1-3.456.301a.415.415 0 0 1-.095.011h-.344a.415.415 0 0 1-.095-.01L26 78.5l-4-1-2.5-1-2.087-.521a.417.417 0 0 1-.319-.466l.55-3.844a.417.417 0 0 0-.066-.29l-3.593-5.39a.418.418 0 0 0-.198-.158l-7.944-3.056a.42.42 0 0 1-.123-.074l-2.93-2.54a.417.417 0 0 1-.144-.314v-6.574c0-.079.022-.155.063-.222l1.98-3.168a.417.417 0 0 0 .057-.147l.776-4.264a.83.83 0 0 0-.053-.475c-1.234-2.913-3.959-9.504-4.284-11.453-.31-1.865-.158-7.433-.06-11.015.033-1.227.06-2.222.06-2.754C1.185 17.69 7.68 1 30 1c22.322 0 28.369 16.689 28.369 18.775 0 .532.027 1.525.06 2.751v.002c.098 3.582.25 9.151-.06 11.016-.325 1.95-3.05 8.54-4.284 11.453a.831.831 0 0 0-.053.474l.776 4.266c.01.051.029.101.057.146l1.98 3.168a.417.417 0 0 1 .063.222v6.574a.417.417 0 0 1-.144.315ZM38.52 55.048l-2.523-2.018a4.172 4.172 0 0 1-1.552-2.93l-.308-3.893a4.172 4.172 0 0 1 1.588-3.614l1.796-1.405a4.172 4.172 0 0 1 2.807-.88l7.319.414a4.172 4.172 0 0 1 3.312 1.97l.814 1.315c.489.79.7 1.72.6 2.644l-.477 4.42a4.173 4.173 0 0 1-1.742 2.96l-1.064.751a4.173 4.173 0 0 1-2.095.752l-5.556.417a4.172 4.172 0 0 1-2.919-.903Zm-14.734-2.202-2.752 2.202a4.172 4.172 0 0 1-2.919.903l-5.481-.411a4.18 4.18 0 0 1-2.207-.834l-.096-.073a4.172 4.172 0 0 1-1.622-2.81l-.49-3.917a4.172 4.172 0 0 1 .228-1.967l.572-1.545a4.172 4.172 0 0 1 3.593-2.71l6.831-.525a4.173 4.173 0 0 1 2.543.63l2.025 1.275a4.172 4.172 0 0 1 1.866 4.361l-.608 2.994a4.172 4.172 0 0 1-1.483 2.427Zm18.153 7.872-.253.615a1.477 1.477 0 1 1-2.41-1.607l.472-.47a1.344 1.344 0 0 1 2.191 1.462Zm-24.16.664-.233-.682a1.374 1.374 0 0 1 2.28-1.406l.506.515a1.538 1.538 0 1 1-2.554 1.574Z"/>
    <path stroke-width="1.2" d="m39.385 76.1-.626-3.337m-1.877 4.38-.835-3.546m-2.503 4.38-.417-3.754"/>
    <path d="m54 45.5-1.88-8.784a.42.42 0 0 1-.01-.087V30.34c0-.088.028-.174.079-.245l2.633-3.645M30 78.815V67.759m0 0V56.6c0-.451.617-.581.8-.168l3.684 8.376a.417.417 0 0 1-.063.438L32.42 67.61a.417.417 0 0 1-.319.147H30Zm0-15.623V44m18.564-8.788-7.03-1.24a.415.415 0 0 1-.12-.041l-4.324-2.265m-2.92 2.504-3.547 2.711"/>
    <path stroke-width="1.2" d="m20.17 76.1.625-3.337m1.878 4.38.834-3.546m2.735 4.38.417-3.754"/>
    <path d="m5.5 45.5 1.934-8.783c.007-.03.01-.06.01-.09v-6.286a.417.417 0 0 0-.079-.245l-2.633-3.645M30 78.812V67.756m0 0V56.597c0-.451-.617-.58-.8-.168l-3.684 8.376a.417.417 0 0 0 .063.438l2.001 2.365c.08.094.196.148.319.148H30ZM10.99 36.464l6.648-.828a.412.412 0 0 1 .102 0l6.833.828M17.69 71.51l12.225 2.473a.414.414 0 0 0 .17-.001L41.68 71.51M9.97 64.627l1.213-5.052a.418.418 0 0 1 .18-.254l5.074-3.247m35.256 7.51-1.217-4.259a.418.418 0 0 0-.132-.204l-3.867-3.256m7.51-33.795v-4.59M11.014 31.04 8.719 21.027"/>
  </symbol>
</svg>
````

## File: app/layouts/error/error.jsx
````javascript
import notFoundPoster from '~/assets/notfound.jpg';
import notFoundVideo from '~/assets/notfound.mp4';
import flatlinePoster from '~/assets/flatline.png';
import flatlineVideo from '~/assets/flatline.mp4';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import styles from './error.module.css';
import { Image } from '~/components/image';
import flatlineSkull from './error-flatline.svg';

export function Error({ error }) {
  const flatlined = !error.status;

  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: 'Error: redacted',
          message:
            'This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you.',
        };
      case 405:
        return {
          summary: 'Error: method denied',
          message: error.data,
        };
      default:
        return {
          summary: 'Error: anomaly',
          message: error.statusText || error.data || error.toString(),
        };
    }
  };

  const { summary, message } = getMessage();

  return (
    <section className={styles.page}>
      {flatlined && (
        <style
          dangerouslySetInnerHTML={{
            __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `,
          }}
        />
      )}
      <Transition in>
        {({ visible }) => (
          <>
            <div className={styles.details}>
              <div className={styles.text}>
                {!flatlined && (
                  <Heading
                    className={styles.title}
                    data-visible={visible}
                    level={0}
                    weight="bold"
                  >
                    {error.status}
                  </Heading>
                )}
                {flatlined && (
                  <Heading
                    className={styles.titleFlatline}
                    data-visible={visible}
                    level={2}
                    as="h1"
                  >
                    <svg width="60" height="80" viewBox="0 0 60 80">
                      <use href={`${flatlineSkull}#skull`} />
                    </svg>
                    <DecoderText text="Flatlined" start={visible} delay={300} />
                  </Heading>
                )}
                {!flatlined && (
                  <Heading
                    aria-hidden
                    className={styles.subheading}
                    data-visible={visible}
                    as="h2"
                    level={4}
                  >
                    <DecoderText text={summary} start={visible} delay={300} />
                  </Heading>
                )}
                <Text className={styles.description} data-visible={visible} as="p">
                  {message}
                </Text>
                {flatlined ? (
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="https://www.youtube.com/watch?v=EuQzHGcsjlA"
                    icon="chevron-right"
                  >
                    Emotional support
                  </Button>
                ) : (
                  <Button
                    secondary
                    iconHoverShift
                    className={styles.button}
                    data-visible={visible}
                    href="/"
                    icon="chevron-right"
                  >
                    Back to homepage
                  </Button>
                )}
              </div>
            </div>

            <div className={styles.videoContainer} data-visible={visible}>
              <Image
                reveal
                cover
                noPauseButton
                delay={600}
                className={styles.video}
                src={flatlined ? flatlineVideo : notFoundVideo}
                placeholder={flatlined ? flatlinePoster : notFoundPoster}
              />
              {flatlined ? (
                <a
                  className={styles.credit}
                  data-visible={visible}
                  href="https://www.imdb.com/title/tt0318871/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Animation from Berserk (1997)
                </a>
              ) : (
                <a
                  className={styles.credit}
                  data-visible={visible}
                  href="https://www.imdb.com/title/tt0113568/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Animation from Ghost in the Shell (1995)
                </a>
              )}
            </div>
          </>
        )}
      </Transition>
    </section>
  );
}
````

## File: app/layouts/error/error.module.css
````css
@layer layout {
  .page {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    padding-left: 140px;

    @media (--mediaTablet) {
      padding-top: 80px;
      padding-bottom: 80px;
      padding-left: 80px;
      grid-template-columns: 100%;
      min-height: 100vh;
      height: auto;
    }

    @media (--mediaMobile) {
      padding-left: 0;
    }
  }

  .videoContainer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border: var(--space3XL) solid transparent;

    @media (--mediaLaptop) {
      border-width: var(--spaceL);
    }

    @media (--mediaTablet) {
      border-width: var(--space4XL);
    }

    @media (--mediaMobile) {
      min-height: 240px;
      grid-row: 1;
      border-width: var(--spaceOuter);
      border-top: 0;
    }
  }

  .video {
    --clip-size: 128px;

    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0;
    transition-property: opacity;
    transition-delay: 0.8s;
    transition-duration: var(--durationXL);
    clip-path: polygon(
      0 0,
      calc(100% - var(--clip-size)) 0,
      100% var(--clip-size),
      100% 100%,
      0 100%
    );

    @media (--mediaTablet) {
      --clip-size: 64px;
    }

    @media (--mediaMobile) {
      left: 0;
      clip-path: none;
    }

    &[data-visible='true'] {
      opacity: 1;
    }
  }

  .credit {
    color: color-mix(in lab, var(--white) 40%, transparent);
    background: color-mix(in lab, var(--black) 60%, transparent);
    padding: var(--spaceXS) var(--spaceS);
    font-size: var(--fontSizeBodyS);
    position: absolute;
    bottom: var(--spaceS);
    left: var(--spaceS);
    transform: none;
    text-decoration: none;
    transition: opacity var(--durationM) ease var(--durationXL),
      color var(--durationM) ease;
    opacity: 0;

    &:hover,
    &:focus {
      color: var(--white);
    }

    &[data-visible='true'] {
      opacity: 1;
    }
  }

  .details {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 var(--spaceXL);
    height: 100%;

    @media (--mediaMobile) {
      grid-row: 2;
      padding: 0 var(--spaceOuter);
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    max-width: 480px;
    width: 100%;
  }

  .title,
  .titleFlatline {
    margin-bottom: var(--spaceM);
    transition-property: opacity;
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-duration: var(--durationXL);
    transition-delay: 0.1s;
    opacity: 0;

    @media (--mediaUseMotion) {
      transition-property: transform, opacity;
      transform: translate3d(0, var(--spaceL), 0);
    }

    &[data-visible='true'] {
      transform: none;
      opacity: 1;
    }
  }

  .titleFlatline {
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: var(--spaceM);
    white-space: nowrap;

    svg {
      flex: 0 0 auto;
      color: var(--accent);
    }
  }

  .subheading {
    padding-bottom: var(--spaceL);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: color-mix(in lab, var(--text) 40%, transparent);
    transition-property: opacity;
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-duration: var(--durationXL);
    transition-delay: 0.2s;
    opacity: 0;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    flex: 0 0 auto;

    @media (--mediaMobile) {
      font-size: calc((18 / 16) * 1rem);
    }

    @media (--mediaUseMotion) {
      transition-property: transform, opacity;
      transform: translate3d(0, var(--spaceL), 0);
    }

    &[data-visible='true'] {
      transform: none;
      opacity: 1;
    }
  }

  .description {
    padding-bottom: var(--spaceL);
    transition-property: opacity;
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-duration: var(--durationXL);
    transition-delay: 0.3s;
    opacity: 0;

    @media (--mediaUseMotion) {
      transition-property: transform, opacity;
      transform: translate3d(0, var(--spaceL), 0);
    }

    &[data-visible='true'] {
      transform: none;
      opacity: 1;
    }
  }

  .button {
    transition-property: opacity;
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-duration: var(--durationXL);
    transition-delay: var(--durationM);
    opacity: 0;
    align-self: flex-start;
    padding-left: var(--spaceXXS);

    @media (--mediaUseMotion) {
      transition-property: transform, opacity;
      transform: translate3d(0, var(--spaceL), 0);
    }

    &[data-visible='true'] {
      transform: none;
      opacity: 1;
    }
  }
}
````

## File: app/layouts/error/index.js
````javascript
export { Error } from './error';
````

## File: app/layouts/navbar/index.js
````javascript
export { Navbar } from './navbar';
````

## File: app/layouts/navbar/nav-toggle.jsx
````javascript
import { Button } from '~/components/button';
import { Icon } from '~/components/icon';
import styles from './nav-toggle.module.css';

export const NavToggle = ({ menuOpen, ...rest }) => {
  return (
    <Button
      iconOnly
      className={styles.toggle}
      aria-label="Menu"
      aria-expanded={menuOpen}
      {...rest}
    >
      <div className={styles.inner}>
        <Icon className={styles.icon} data-menu={true} data-open={menuOpen} icon="menu" />
        <Icon
          className={styles.icon}
          data-close={true}
          data-open={menuOpen}
          icon="close"
        />
      </div>
    </Button>
  );
};
````

## File: app/layouts/navbar/nav-toggle.module.css
````css
@layer layout {
  .toggle {
    --offset: var(--spaceXS);
    --inset: calc(var(--spaceOuter) - var(--offset));

    position: fixed;
    top: var(--inset);
    right: var(--inset);
    z-index: var(--zIndex4);
    display: none;

    @media (--mediaMobile), (--mediaMobileLS) {
      display: flex;
    }
  }

  .inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }

  .icon {
    --iconSize: var(--spaceXL);

    position: absolute;
    transition-property: opacity, fill;
    transition-duration: var(--durationM);
    transition-timing-function: var(--bezierFastoutSlowin);
    opacity: 1;
    transform: rotate(0deg);
    fill: var(--textBody);
    width: var(--iconSize);
    height: var(--iconSize);

    @media (--mediaUseMotion) {
      transition-delay: 0.1s;
      transition-property: opacity, transform, fill;
    }

    &[data-open='true'] {
      opacity: 0;

      @media (--mediaUseMotion) {
        transition-delay: 0s;
        transform: rotate(45deg);
      }
    }

    &[data-close='true'] {
      opacity: 0;

      @media (--mediaUseMotion) {
        transition-delay: 0s;
        transform: rotate(-45deg);
      }
    }

    &[data-open='true']&[data-close='true'] {
      opacity: 1;

      @media (--mediaUseMotion) {
        transition-delay: 0.1s;
        transform: rotate(0deg);
      }
    }
  }
}
````

## File: app/layouts/navbar/navbar.module.css
````css
@layer layout {
  .navbar {
    --headerNavFontSize: calc((16 / 16) * 1rem);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    width: var(--space2XL);
    position: fixed;
    top: var(--spaceOuter);
    left: var(--spaceOuter);
    bottom: var(--spaceOuter);
    z-index: var(--zIndex4);
    isolation: isolate;

    @media (--mediaMobile) {
      --headerNavFontSize: calc((22 / 16) * 1rem);
    }

    @media (--mediaMobile), (--mediaMobileLS) {
      bottom: auto;
    }
  }

  .logo {
    display: flex;
    position: relative;
    padding: var(--spaceS) var(--spaceS) var(--spaceL);
    z-index: var(--zIndex2);

    @media (--mediaMobile) {
      padding-bottom: var(--spaceS);
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 1 auto;
    max-width: var(--space2XL);

    @media (--mediaMobile), (--mediaMobileLS) {
      display: none;
    }
  }

  .navList {
    transform: rotate(180deg);
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    writing-mode: vertical-lr;

    &[data-locale='zh'] {
      transform: none;
      flex-direction: row;
      writing-mode: vertical-rl;
      text-orientation: upright;
    }
  }

  .navLink {
    padding: var(--spaceM);
    color: color-mix(in lab, var(--text) 80%, transparent);
    font-weight: var(--fontWeightMedium);
    font-size: var(--headerNavFontSize);
    text-decoration: none;
    position: relative;
    transition: color var(--durationS) ease 0.1s;
    line-height: 1;
    display: inline-flex;
    align-items: center;

    &:hover,
    &:active,
    &[aria-current='page'] {
      color: var(--textBody);
    }

    &::after {
      content: '';
      position: absolute;
      inset-inline-start: var(--spaceS);
      inset-inline-end: var(--spaceS);
      block-size: 4px;
      background: var(--accent);
      transform: scaleY(0) translateZ(0);
      transform-origin: bottom;
    }

    @media (--mediaUseMotion) {
      &::after {
        transition: transform var(--durationM) var(--bezierFastoutSlowin);
      }
    }

    &:hover::after,
    &:active::after,
    &[aria-current='page']::after {
      transform: scaleY(1) translateZ(0);
      transform-origin: top;
    }
  }

  .navActions {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: var(--spaceL);
    padding-top: var(--spaceM);
    border-top: 1px solid color-mix(in lab, var(--text) 18%, transparent);
    writing-mode: horizontal-tb;
    transform: none;
  }

  .languageToggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: calc(var(--space2XL) - var(--spaceXS));
    min-height: calc(var(--spaceXL) - var(--spaceXS));
    padding: var(--spaceXS) var(--spaceS);
    border: 1px solid color-mix(in lab, var(--text) 24%, transparent);
    border-radius: 999px;
    color: color-mix(in lab, var(--text) 76%, transparent);
    font-size: calc((12 / 16) * 1rem);
    font-weight: var(--fontWeightMedium);
    line-height: 1;
    text-decoration: none;
    transition:
      color var(--durationS) ease,
      border-color var(--durationS) ease,
      background var(--durationS) ease;

    &:hover,
    &:active {
      color: var(--textBody);
      border-color: color-mix(in lab, var(--accent) 70%, transparent);
      background: color-mix(in lab, var(--accent) 8%, transparent);
    }
  }

  .navIcons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: var(--zIndex2);

    @media (--mediaMobile), (--mediaMobileLS) {
      flex-direction: row;
      position: absolute;
      bottom: var(--spaceXL);
      left: var(--spaceXL);
    }

    @media (max-width: 820px) and (max-height: 420px) {
      left: var(--spaceL);
      transform: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .navIconLink {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spaceS);
    width: var(--space2XL);
    height: var(--space2XL);
    color: var(--textLight);
    transition: color var(--durationM) var(--bezierFastoutSlowin);

    &:hover,
    &:active {
      color: var(--accent);
    }
  }

  .navIcon {
    fill: currentColor;
    transition: fill var(--durationM) ease;
  }

  .mobileNav {
    --backdrop: blur(24px) saturate(120%);

    position: fixed;
    inset: 0;
    background: color-mix(in lab, var(--background) 70%, transparent);
    transform: translate3d(0, -100%, 0);
    transition-property: background;
    transition-duration: var(--durationL);
    transition-timing-function: var(--bezierFastoutSlowin);
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    -webkit-backdrop-filter: var(--backdrop);
    backdrop-filter: var(--backdrop);

    @media (--mediaMobile), (--mediaMobileLS) {
      display: flex;
    }

    @media (--mediaUseMotion) {
      transition-property: transform, background;
    }

    &[data-visible='true'] {
      transform: none;
    }
  }

  .mobileNavLink {
    width: 100%;
    font-size: var(--headerNavFontSize);
    text-align: center;
    text-decoration: none;
    color: var(--textBody);
    padding: var(--spaceL);
    opacity: 0;
    transition-property: opacity;
    transition-duration: var(--durationS);
    transition-timing-function: var(--bezierFastoutSlowin);
    transition-delay: var(--transitionDelay);
    position: relative;
    top: calc(var(--spaceM) * -1);

    @media (--mediaUseMotion) {
      transition-property: transform, opacity;
      transform: translate3d(0, calc(var(--spaceXL) * -1), 0);
    }

    @media (max-width: 820px) and (max-height: 420px) {
      top: auto;
    }

    @media (--mediaMobileS), (max-height: 360px) {
      --headerNavFontSize: calc((18 / 16) * 1rem);
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: var(--space3XL);
      left: var(--space3XL);
      height: 4px;
      background: var(--accent);
      transform: scaleX(0) translateY(-1px);
      transform-origin: right;
    }

    @media (--mediaUseMotion) {
      &::after {
        transition: transform var(--durationM) var(--bezierFastoutSlowin);
      }
    }

    &:hover::after,
    &:active::after,
    &:focus::after {
      transform: scaleX(1) translateY(-1px);
      transform-origin: left;
    }

    &[data-visible='true'] {
      opacity: 1;
      transform: none;
    }
  }

  .mobileUtilityNav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spaceM);
    margin-top: var(--spaceS);
    padding-top: var(--spaceL);
    opacity: 0;
    border-top: 1px solid color-mix(in lab, var(--text) 14%, transparent);
    transition-property: opacity;
    transition-duration: var(--durationS);
    transition-timing-function: var(--bezierFastoutSlowin);

    &[data-visible='true'] {
      opacity: 1;
    }
  }

  .mobileUtilityLabel {
    color: var(--textLight);
    font-size: calc((13 / 16) * 1rem);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  .mobileLanguageToggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: var(--space3XL);
    padding: var(--spaceS) var(--spaceM);
    border: 1px solid color-mix(in lab, var(--text) 24%, transparent);
    border-radius: 999px;
    color: var(--textBody);
    font-size: calc((15 / 16) * 1rem);
    font-weight: var(--fontWeightMedium);
    line-height: 1;
    text-decoration: none;
  }
}
````

## File: app/layouts/navbar/theme-toggle.jsx
````javascript
import { useId } from 'react';
import { Button } from '~/components/button';
import { useTheme } from '~/components/theme-provider';
import styles from './theme-toggle.module.css';

export const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;

  return (
    <Button
      iconOnly
      className={styles.toggle}
      data-mobile={isMobile}
      aria-label="Toggle theme"
      onClick={() => toggleTheme()}
      {...rest}
    >
      <svg aria-hidden className={styles.svg} width="38" height="38" viewBox="0 0 38 38">
        <defs>
          <mask id={maskId}>
            <circle className={styles.circle} data-mask={true} cx="19" cy="19" r="13" />
            <circle className={styles.mask} cx="25" cy="14" r="9" />
          </mask>
        </defs>
        <path
          className={styles.path}
          d="M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
        />
        <circle
          className={styles.circle}
          mask={`url(#${maskId})`}
          cx="19"
          cy="19"
          r="12"
        />
      </svg>
    </Button>
  );
};
````

## File: app/layouts/navbar/theme-toggle.module.css
````css
@layer layout {
  .toggle {
    --offset: 6px;
    --inset: calc(var(--spaceOuter) - var(--offset));

    position: fixed;
    z-index: var(--zIndex4);
    top: var(--inset);
    right: var(--inset);
    transform: translate3d(0, 0, 0);

    @media (--mediaMobile), (--mediaMobileLS) {
      &:not([data-mobile='true']) {
        display: none;
      }
    }

    &[data-mobile='true'] {
      --offset: var(--spaceXS);
      --inset: calc(var(--spaceXL) - var(--offset));

      top: unset;
      bottom: var(--inset);
      margin-top: 0;
      margin-right: 0;
    }
  }

  .circle {
    fill: currentColor;
    transform: scale(0.6);
    transform-origin: center;

    @media (--mediaUseMotion) {
      transition-property: transform, fill;
      transition-duration: var(--durationL);
      transition-delay: 0s;
      transition-timing-function: var(--bezierFastoutSlowin);
    }

    &[data-mask='true'] {
      fill: white;
    }

    body[data-theme='dark'] & {
      transform: none;

      @media (--mediaUseMotion) {
        transition-delay: 0.3s;
      }
    }
  }

  .mask {
    fill: black;
    transform: translate3d(100%, -100%, 0);

    @media (--mediaUseMotion) {
      transition: transform var(--durationL) var(--bezierFastoutSlowin);
      transition-delay: 0s;
    }

    body[data-theme='dark'] & {
      transform: none;

      @media (--mediaUseMotion) {
        transition-delay: 0.3s;
      }
    }
  }

  .path {
    stroke: currentColor;
    fill: none;
    stroke-linecap: round;
    stroke-width: 3;
    stroke-dasharray: 7 7;
    stroke-dashoffset: 0;
    opacity: 1;

    @media (--mediaUseMotion) {
      transition-property: stroke-dashoffset, opacity;
      transition-duration: var(--durationL);
      transition-timing-function: var(--bezierFastoutSlowin);
      transition-delay: 0.3s;
    }

    body[data-theme='dark'] & {
      stroke-dashoffset: 7;
      opacity: 0;

      @media (--mediaUseMotion) {
        transition-delay: 0s;
      }
    }
  }
}
````

## File: app/layouts/project/index.js
````javascript
export {
  ProjectHeader,
  ProjectContainer,
  ProjectBackground,
  ProjectImage,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
  ProjectSectionColumns,
  ProjectSection,
} from './project';
````

## File: app/layouts/project/project.jsx
````javascript
import { Button } from '~/components/button';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useParallax } from '~/hooks';
import { forwardRef, useRef } from 'react';
import { classes, cssProps, msToNum, numToMs } from '~/utils/style';
import styles from './project.module.css';

const initDelay = 300;

export function ProjectHeader({
  title,
  description,
  linkLabel = 'Visit website',
  url,
  roles,
  className,
}) {
  return (
    <Section className={classes(styles.header, className)} as="section">
      <div
        className={styles.headerContent}
        style={cssProps({ initDelay: numToMs(initDelay) })}
      >
        <div className={styles.details}>
          <Heading className={styles.title} level={2} as="h1">
            {title}
          </Heading>
          <Text className={styles.description} size="xl" as="p">
            {description}
          </Text>
          {!!url && (
            <Button
              secondary
              iconHoverShift
              className={styles.linkButton}
              icon="chevron-right"
              href={url}
            >
              {linkLabel}
            </Button>
          )}
        </div>
        {!!roles?.length && (
          <ul className={styles.meta}>
            {roles?.map((role, index) => (
              <li
                className={styles.metaItem}
                style={cssProps({ delay: numToMs(initDelay + 300 + index * 140) })}
                key={role}
              >
                <Text secondary>{role}</Text>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Section>
  );
}

export const ProjectContainer = ({ className, ...rest }) => (
  <article className={classes(styles.project, className)} {...rest} />
);

export const ProjectSection = forwardRef(
  (
    {
      className,
      light,
      padding = 'both',
      fullHeight,
      backgroundOverlayOpacity = 0.9,
      backgroundElement,
      children,
      ...rest
    },
    ref
  ) => (
    <section
      className={classes(styles.section, className)}
      data-light={light}
      data-full-height={fullHeight}
      ref={ref}
      {...rest}
    >
      {!!backgroundElement && (
        <div
          className={styles.sectionBackground}
          style={cssProps({ opacity: backgroundOverlayOpacity })}
        >
          {backgroundElement}
        </div>
      )}
      <Section className={styles.sectionInner} data-padding={padding}>
        {children}
      </Section>
    </section>
  )
);

export const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();

  useParallax(0.6, value => {
    if (!imageRef.current) return;
    imageRef.current.style.setProperty('--offset', `${value}px`);
  });

  return (
    <Transition in timeout={msToNum(tokens.base.durationM)}>
      {({ visible, nodeRef }) => (
        <div
          className={classes(styles.backgroundImage, className)}
          data-visible={visible}
          ref={nodeRef}
        >
          <div className={styles.backgroundImageElement} ref={imageRef}>
            <Image cover alt="" role="presentation" {...rest} />
          </div>
          <div className={styles.backgroundScrim} style={cssProps({ opacity })} />
        </div>
      )}
    </Transition>
  );
};

export const ProjectImage = ({ className, alt, ...rest }) => (
  <div className={classes(styles.image, className)}>
    <Image reveal alt={alt} delay={300} {...rest} />
  </div>
);

export const ProjectSectionContent = ({ className, width = 'l', ...rest }) => (
  <div
    className={classes(styles.sectionContent, className)}
    data-width={width}
    {...rest}
  />
);

export const ProjectSectionHeading = ({ className, level = 3, as = 'h2', ...rest }) => (
  <Heading
    className={classes(styles.sectionHeading, className)}
    as={as}
    level={level}
    align="auto"
    {...rest}
  />
);

export const ProjectSectionText = ({ className, ...rest }) => (
  <Text className={classes(styles.sectionText, className)} size="l" as="p" {...rest} />
);

export const ProjectTextRow = ({
  center,
  stretch,
  justify = 'center',
  width = 'm',
  noMargin,
  className,
  centerMobile,
  ...rest
}) => (
  <div
    className={classes(styles.textRow, className)}
    data-center={center}
    data-stretch={stretch}
    data-center-mobile={centerMobile}
    data-no-margin={noMargin}
    data-width={width}
    data-justify={justify}
    {...rest}
  />
);

export const ProjectSectionColumns = ({ className, centered, ...rest }) => (
  <ProjectSectionContent
    className={classes(styles.sectionColumns, className)}
    data-centered={centered}
    {...rest}
  />
);
````

## File: app/layouts/project/project.module.css
````css
@layer layout {
  @property --background1 {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --background2 {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  @property --background3 {
    syntax: '<color>';
    inherits: true;
    initial-value: transparent;
  }

  .project {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .section {
    width: 100%;
    position: relative;
    display: grid;
    place-content: stretch;

    &[data-full-height='true'] {
      min-height: 100vh;
    }

    &[data-light='true'] {
      background: var(--backgroundLight);
    }
  }

  .sectionInner {
    --sectionPadding: calc(var(--space5XL) + var(--space3XL));

    grid-area: 1 / 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: var(--sectionPadding);
    padding-bottom: var(--sectionPadding);
    position: relative;

    &[data-padding='none'] {
      padding-top: 0;
      padding-bottom: 0;
    }

    &[data-padding='both'] {
      padding-top: var(--sectionPadding);
      padding-bottom: var(--sectionPadding);
    }

    &[data-padding='top'] {
      padding-top: var(--sectionPadding);
    }

    &[data-padding='bottom'] {
      padding-bottom: var(--sectionPadding);
    }

    @media (--mediaLaptop) {
      --sectionPadding: var(--space5XL);
    }

    @media (--mediaTablet) {
      --sectionPadding: var(--space3XL);

      height: auto;
    }

    @media (--mediaMobile) {
      --sectionPadding: var(--space2XL);
    }
  }

  .sectionBackground {
    grid-area: 1 / 1;
    display: grid;
    place-content: stretch;

    & img {
      object-fit: cover;
      justify-self: stretch;
      align-self: stretch;
    }

    &::after {
      --background1: var(--background);
      --background2: color-mix(in lab, var(--background) var(--opacity), transparent);
      --background3: color-mix(in lab, var(--background) 0%, transparent);

      content: '';
      position: absolute;
      inset: 0;
      transition: var(--durationM) ease;
      transition-property: --background1, --background2, --background3;
      background: linear-gradient(
          var(--background1) 0%,
          var(--background2) 20%,
          var(--background3) 100%
        ),
        linear-gradient(
          var(--background3) 0%,
          var(--background2) 80%,
          var(--background1) 100%
        );

      @supports (background: linear-gradient(in lab, red, red)) {
        background: linear-gradient(
            in lab,
            var(--background1) 0%,
            var(--background2) 20%,
            var(--background3) 100%
          ),
          linear-gradient(
            in lab,
            var(--background3) 0%,
            var(--background2) 80%,
            var(--background1) 100%
          );
      }
    }
  }

  .backgroundImage {
    --imageHeight: 800px;

    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: var(--imageHeight);
    overflow: hidden;
    opacity: 0;
    transition: opacity 2s ease;
    transform: translateZ(0);
    isolation: isolate;

    &[data-visible='true'] {
      opacity: 1;
    }
  }

  .backgroundImageElement {
    z-index: var(--zIndex0);
    position: absolute;
    inset: 0;
    height: var(--imageHeight);
    overflow: hidden;
    will-change: transform;
    display: grid;

    img,
    video {
      height: var(--imageHeight);
    }

    @media (--mediaUseMotion) {
      transform: translate3d(0, var(--offset), 0);
    }
  }

  .backgroundScrim {
    --background1: color-mix(in lab, var(--background) var(--opacity), transparent);
    --background2: var(--background);

    position: absolute;
    inset: 0;
    transition: var(--durationM) ease;
    transition-property: --background1, --background2;
    z-index: var(--zIndex1);
    background: linear-gradient(var(--background1), var(--background2));

    @supports (background: linear-gradient(in lab, red, red)) {
      background: linear-gradient(in lab, var(--background1), var(--background2));
    }
  }

  .header {
    padding-top: calc(var(--space5XL) + var(--space3XL));
    padding-bottom: 0;

    @media (--mediaLaptop) {
      padding-top: var(--space5XL);
      padding-bottom: var(--space2XL);
    }

    @media (--mediaTablet) {
      padding-top: var(--space4XL);
      padding-bottom: 0;
    }

    @media (--mediaMobile) {
      padding-top: var(--space5XL);
      padding-bottom: var(--spaceXL);
    }
  }

  .headerContent {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: var(--space4XL);
    max-width: var(--maxWidthL);

    @media (--mediaDesktop) {
      grid-template-columns: 1fr 400px;
    }

    @media (--mediaLaptop) {
      gap: var(--space3XL);
    }

    @media (max-width: 1200px) {
      grid-template-columns: 1fr 200px;
      gap: var(--space2XL);
    }

    @media (--mediaTablet) {
      grid-template-columns: 100%;
      gap: var(--spaceXL);
    }
  }

  @keyframes projectFadeSlide {
    0% {
      opacity: 0;
      transform: translate3d(0, var(--space3XL), 0);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .details {
    position: relative;

    &:only-child {
      grid-column: 1 / span 2;

      @media (--mediaTablet) {
        grid-column: 1;
      }
    }
  }

  .title {
    margin-bottom: 0.5em;

    @media (--mediaUseMotion) {
      opacity: 0;
      animation: projectFadeSlide 1.4s var(--bezierFastoutSlowin) var(--initDelay)
        forwards;
    }
  }

  .description {
    padding-bottom: var(--spaceL);

    @media (--mediaUseMotion) {
      opacity: 0;
      animation: projectFadeSlide 1.4s var(--bezierFastoutSlowin)
        calc(var(--initDelay) + 100ms) forwards;
    }
  }

  .linkButton {
    padding-left: var(--spaceXS);

    @media (--mediaUseMotion) {
      opacity: 0;
      animation: projectFadeSlide 1.4s var(--bezierFastoutSlowin)
        calc(var(--initDelay) + 200ms) forwards;
    }
  }

  .meta {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-top: var(--spaceM);

    @media (--mediaLaptop) {
      margin-top: 0;
    }

    @media (--mediaTablet) {
      margin-top: var(--spaceL);
    }
  }

  .metaItem {
    padding: var(--spaceL) 0;
    font-size: var(--fontSizeBodyS);
    font-weight: var(--fontWeightRegular);
    border-top: 1px solid color-mix(in lab, var(--text) 20%, transparent);

    @media (--mediaUseMotion) {
      opacity: 0;
      animation: projectFadeSlide 1.5s var(--bezierFastoutSlowin) var(--delay) forwards;
    }

    @media (--mediaMobile) {
      padding: var(--spaceM) 0;
    }

    &:last-child {
      border-bottom: 1px solid color-mix(in lab, var(--text) 20%, transparent);
    }
  }

  .image {
    position: relative;
    display: grid;
    transform: translate3d(0, 0, 0);
    max-width: 100%;
    width: 100%;
  }

  .sectionContent {
    max-width: var(--maxWidthL);
    width: 100%;
    display: grid;
    gap: var(--space4XL);

    @media (--mediaLaptop) {
      gap: var(--space3XL);
    }

    &[data-width='l'] {
      max-width: var(--maxWidthL);
    }

    &[data-width='xl'] {
      max-width: var(--maxWidthXL);
    }

    &[data-width='full'] {
      max-width: 100%;
    }
  }

  .sectionHeading {
    margin-bottom: 0.6em;
  }

  .sectionText {
    + a,
    + & {
      margin-top: var(--spaceL);
    }
  }

  .textRow {
    align-self: center;
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (--mediaMobile) {
      text-align: left;
      align-items: flex-start;
    }

    &[data-width='s'] {
      max-width: var(--maxWidthS);
    }

    &[data-width='m'] {
      max-width: var(--maxWidthM);
    }

    &[data-width='l'] {
      max-width: var(--maxWidthL);
    }

    &[data-no-margin='true'] {
      margin-bottom: 0;
    }

    &[data-stretch='true'] {
      width: 100%;
    }

    &[data-center='true'] {
      align-items: center;
      text-align: center;
    }

    &[data-justify='start'] {
      justify-self: flex-start;
    }

    &[data-justify='center'] {
      justify-self: center;
    }

    &[data-justify='end'] {
      justify-self: flex-end;

      @media (--mediaMobile) {
        align-items: center;
        text-align: center;
      }
    }
  }

  .sectionColumns {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    gap: var(--space3XL);
    margin: 0;

    & p {
      hyphens: auto;
    }

    @media (--mediaTablet) {
      grid-template-columns: 1fr;
    }
  }
}
````

## File: app/routes/contact/route.js
````javascript
export { Contact as default, meta, action } from './contact';
````

## File: app/routes/home/displacement-sphere-fragment.glsl
````glsl
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

uniform float time;
varying vec2 vUv;
varying vec3 newPosition;
varying float noise;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

  // 计算颜色，基于纹理坐标和噪声，结果为一种深色调
  vec3 color = vec3(vUv * (0.2 - 2.0 * noise), 0.0);
  // 调整颜色分量，生成最终颜色，主要是红色和橙色调
  vec3 finalColors = vec3(color.r * 2.2, color.r * 1.2, 0.0);
  // 计算漫反射颜色，使用余弦函数和噪声，结果为一种动态变化的色调
  vec4 diffuseColor = vec4(cos(finalColors * noise * 3.0), 0.0);
  // 初始化反射光，初始为黑色
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  // 设置总的自发光辐射，使用传入的自发光颜色
  vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
````

## File: app/routes/home/displacement-sphere-vertex.glsl
````glsl
#define PHONG

//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float turbulence(vec3 p) {
  float w = 100.0;
  float t = -.5;
  for (float f = 1.0 ; f <= 10.0 ; f++) {
    float power = pow(2.0, f);
    t += abs(pnoise(vec3(power * p), vec3(10.0, 10.0, 10.0)) / power);
  }
  return t;
}

// START
uniform float time;
varying vec2 vUv;
varying float noise;

varying vec3 vViewPosition;

#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

  vUv = uv;

  noise = turbulence(0.01 * position + normal + time * 0.8);
  vec3 displacement = vec3((position.x) * noise, position.y * noise, position.z * noise);
  gl_Position = projectionMatrix * modelViewMatrix * vec4((position + normal) + displacement, 1.0);
}
````

## File: app/routes/home/displacement-sphere.module.css
````css
.canvas {
  position: absolute;
  width: 100vw;
  inset: 0;
  opacity: 0;
  transition-property: opacity;
  transition-duration: 3s;
  transition-timing-function: var(--bezierFastoutSlowin);

  &[data-visible='true'] {
    opacity: 1;
  }
}
````

## File: app/routes/home/katakana.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <defs>
    <symbol id="katakana-project" viewBox="0 0 751 136">
        <path d="M464.47 31.4343C464.47 30.1565 465.207 29.4685 466.681 29.3703C468.155 29.272 470.17 29.7634 472.726 30.8445C475.085 31.8274 476.608 32.8103 477.296 33.7931C478.082 34.776 478.082 35.9063 477.296 37.184C476.51 38.3634 474.888 39.9852 472.431 42.0492C468.499 45.1943 466.534 47.0618 466.534 47.6515C466.534 48.1429 465.01 49.4206 461.963 51.4846C459.31 53.3521 457.835 54.6789 457.541 55.4652C457.246 56.2515 457.983 56.9395 459.752 57.5292C461.423 58.2172 462.504 59.0527 462.995 60.0355C463.585 61.0184 466.19 62.5418 470.809 64.6059C475.429 66.6699 482.309 70.6996 491.449 76.6951C499.41 81.7077 504.472 84.8528 506.634 86.1305C508.797 87.4082 511.303 88.4403 514.153 89.2265C517.102 90.1111 520.001 91.5363 522.852 93.502C525.702 95.3694 527.471 97.0403 528.159 98.5146C528.847 100.087 528.7 101.512 527.717 102.79C526.636 103.773 524.817 104.707 522.262 105.591C519.805 106.476 517.544 106.918 515.48 106.918C513.908 106.918 511.057 105.935 506.929 103.969C502.9 102.004 500.737 100.579 500.442 99.694C500.049 98.8094 498.378 97.3843 495.43 95.4186C492.481 93.4528 489.68 91.3397 487.026 89.0791C482.8 85.4425 478.721 82.3957 474.79 79.9385C470.858 77.3831 464.175 73.7465 454.739 69.0287C452.086 67.5544 450.66 66.1293 450.464 64.7533C450.267 63.279 449.825 62.5418 449.137 62.5418C448.252 62.5418 444.812 64.999 438.817 69.9133C432.822 74.7293 427.219 79.5945 422.01 84.5088C415.13 90.9957 410.117 95.0254 406.972 96.598C403.925 98.1706 401.419 99.5466 399.453 100.726C398.274 101.512 397.439 101.905 396.947 101.905C396.554 101.905 396.161 101.561 395.768 100.873C394.981 99.7923 395.375 98.3672 396.947 96.598C398.618 94.7306 402.795 91.094 409.479 85.6882C425.303 72.7145 438.424 61.1167 448.842 50.8949C459.261 40.5749 464.47 34.088 464.47 31.4343Z"/>
        <path d="M288.824 91.8803C292.067 90.1111 293.738 89.718 293.836 90.7008C293.836 90.9957 292.755 91.6345 290.593 92.6174C288.431 93.502 286.907 93.846 286.023 93.6494C285.826 93.6494 286.121 93.4528 286.907 93.0597C287.399 92.6665 288.038 92.2734 288.824 91.8803ZM325.386 3.71756C328.237 1.55526 330.251 0.375824 331.431 0.179255C332.709 -0.017321 334.92 0.474109 338.065 1.65355C348.189 5.38842 350.597 11.1873 345.289 19.0502C343.225 21.9988 342.193 24.4559 342.193 26.4217C342.193 29.5668 337.574 33.8423 328.335 39.248C321.75 43.0812 317.474 43.2286 315.509 39.6903L314.034 36.7417V39.3954C314.034 41.1646 313.346 44.064 311.97 48.0938C310.594 52.0252 309.906 54.2367 309.906 54.7281C309.808 56.7921 313.838 55.7601 321.995 51.6321C325.435 49.9612 328.925 47.9463 332.463 45.5875C337.082 42.6389 339.933 41.0172 341.014 40.7223C342.095 40.3292 343.373 39.4446 344.847 38.0686C346.026 37.0857 346.96 36.5943 347.648 36.5943C348.336 36.5943 350.105 37.0366 352.956 37.9211C356.297 39.1006 358.312 40.3783 359 41.7543C359.786 43.032 359.148 44.3589 357.084 45.7349C355.708 46.6195 354.233 47.7989 352.661 49.2732C351.088 50.6492 349.86 51.8778 348.975 52.9589C348.09 54.0401 347.746 54.6298 347.943 54.7281C348.434 55.3178 349.614 55.6127 351.481 55.6127C353.938 55.6127 355.658 56.0549 356.641 56.9395C357.722 57.8241 358.263 59.3967 358.263 61.6573V65.7853L362.833 65.0481C367.355 64.4584 371.925 64.9007 376.544 66.375C381.164 67.8493 383.473 69.6184 383.473 71.6825C383.473 72.3705 380.869 72.7636 375.66 72.8619C370.451 72.8619 366.175 73.4516 362.833 74.631C359.59 75.7122 357.673 77.2848 357.084 79.3488C356.396 81.2162 355.953 89.2265 355.757 103.38C355.56 121.661 354.872 131.981 353.693 134.34C352.906 135.912 351.334 136.453 348.975 135.962C346.714 135.372 345.289 133.111 344.7 129.18C344.11 125.347 344.208 119.302 344.994 111.046C345.682 105.345 346.125 98.8586 346.321 91.5854C346.518 84.3122 346.37 80.4299 345.879 79.9385C345.486 79.6436 342.783 80.6265 337.77 82.8871C334.232 84.4597 331.971 85.6882 330.989 86.5728C330.006 87.3591 329.023 88.9317 328.04 91.2905C326.566 94.7306 325.19 97.286 323.912 98.9569C322.733 100.529 321.111 103.92 319.047 109.129C316.983 114.24 315.066 117.68 313.297 119.45C312.118 120.826 310.791 121.71 309.317 122.103C307.941 122.398 306.958 122.103 306.368 121.219C305.975 120.531 307.793 116.108 311.823 107.95C315.853 99.7923 317.867 95.0254 317.867 93.6494C317.867 92.6666 317.573 92.1751 316.983 92.1751C315.607 92.1751 308.825 95.4186 296.638 101.905C293.001 103.773 290.298 104.952 288.529 105.444C286.76 105.935 284.45 106.279 281.6 106.476H274.966L274.818 103.232C274.621 100.972 274.916 99.3992 275.703 98.5146C276.686 97.2369 277.767 96.6963 278.946 96.8929C279.438 96.9911 279.487 97.3351 279.094 97.9249C278.111 99.4974 280.273 99.1043 285.58 96.7454C287.251 95.9591 289.217 95.0254 291.478 93.9443C298.063 90.6025 303.96 87.7522 309.169 85.3934C316.147 82.1499 318.408 79.7911 315.951 78.3168C314.87 77.6288 310.398 79.9385 302.535 85.2459C297.915 88.3911 295.409 89.7671 295.016 89.374C294.623 88.8825 294.918 88.342 295.9 87.7522C296.883 87.1625 299.39 85.3442 303.419 82.2974C307.449 79.2505 310.152 77.1865 311.528 76.1053C312.904 74.8276 315.558 72.5179 319.489 69.1762C322.438 66.6207 325.632 63.6721 329.072 60.3304C332.512 56.9887 334.232 55.1704 334.232 54.8755C334.232 54.6789 333.642 54.8755 332.463 55.4652C331.283 56.0549 329.318 57.0378 326.566 58.4138C323.814 59.6915 320.177 61.559 315.656 64.0161L308.874 67.7019L306.81 65.343C305.434 63.7704 304.255 61.5098 303.272 58.5612C302.289 55.6127 302.142 53.7452 302.83 52.9589C303.518 52.1726 304.353 49.6172 305.336 45.2926C306.417 40.8697 306.958 37.6754 306.958 35.7097C306.958 33.5474 305.778 31.336 303.419 29.0754C300.864 26.8148 299.734 24.9965 300.028 23.6205C300.323 22.1462 301.994 20.5245 305.041 18.7553C308.579 16.593 312.019 14.185 315.361 11.5313L325.386 3.71756ZM332.168 10.057C332.168 9.4673 331.873 9.17244 331.283 9.17244C330.399 9.17244 328.384 10.401 325.239 12.8582C322.094 15.217 319.735 17.4285 318.162 19.4925C315.705 22.2445 313.297 24.7017 310.938 26.864L307.547 30.2548L310.496 33.3508C312.363 35.3166 313.592 36.2011 314.182 36.0046C314.771 35.808 314.968 34.5303 314.771 32.1714C314.575 30.2057 314.624 28.9771 314.919 28.4857C315.214 27.896 316.049 27.3554 317.425 26.864C319.489 26.1759 321.357 25.1931 323.027 23.9154C324.403 22.6376 326.271 20.2296 328.63 16.6913C330.989 13.0547 332.168 10.8433 332.168 10.057ZM342.783 55.6127C341.997 55.6127 339.392 57.2344 334.969 60.4778C330.546 63.623 326.713 66.6207 323.47 69.471L318.457 73.7465L321.258 76.2528L324.059 78.6116L333.495 75.2207C339.982 72.8619 343.913 71.3384 345.289 70.6504C347.845 69.2744 347.992 66.4241 345.732 62.0995C344.749 60.2321 344.257 58.7087 344.257 57.5292C344.257 56.2515 343.766 55.6127 342.783 55.6127Z"/>
        <path d="M195.149 11.2365C193.674 9.27074 193.232 8.23873 193.822 8.14044C193.92 8.04215 194.313 7.99301 195.001 7.99301C196.377 7.99301 198.638 8.82844 201.783 10.4993C205.026 12.0719 207.14 13.3496 208.123 14.3325C208.909 15.5119 209.105 17.5759 208.712 20.5245C208.319 22.9817 208.467 24.6525 209.155 25.5371C209.941 26.3234 211.71 27.0114 214.462 27.6011C216.821 28.0925 218.688 28.928 220.064 30.1074C221.539 31.2868 222.276 32.6628 222.276 34.2354C222.276 36.1029 221.686 37.2823 220.507 37.7737C219.72 37.9703 218.492 38.7074 216.821 39.9852C215.248 41.2629 213.872 42.4915 212.693 43.6709C211.513 44.8503 211.022 45.5875 211.219 45.8823C211.808 46.3738 214.904 46.8161 220.507 47.2092C226.207 47.6023 230.335 48.7326 232.891 50.6001C235.544 52.3692 237.903 53.6961 239.967 54.5807C242.031 55.4652 243.063 56.6938 243.063 58.2664C243.063 62.0996 240.557 63.1807 235.544 61.5098C233.087 60.7235 229.303 60.527 224.192 60.9201C219.18 61.215 215.199 61.903 212.251 62.9841L208.417 64.6059L207.68 83.0345C206.599 109.867 205.42 124.462 204.142 126.821C203.749 127.804 203.257 128.344 202.668 128.443C202.176 128.541 201.193 128.394 199.719 128C197.557 127.312 196.082 126.919 195.296 126.821C192.937 126.231 192.79 124.855 194.854 122.693C195.837 121.612 196.426 119.794 196.623 117.238C196.82 114.683 196.918 107.065 196.918 94.3866C196.918 77.0882 196.476 68.2916 195.591 67.9967C194.51 67.5053 191.561 68.3407 186.745 70.503C181.929 72.6653 177.85 74.8768 174.509 77.1373C166.154 82.7397 160.552 86.0814 157.702 87.1625C154.95 88.2437 152.935 87.9488 151.657 86.278C150.969 85.3934 150.478 83.2802 150.183 79.9385C149.888 76.5968 150.035 74.5328 150.625 73.7465C150.92 73.0585 152.984 72.3705 156.817 71.6825C161.24 70.8962 164.975 69.5202 168.022 67.5544C171.167 65.5887 175.639 61.8047 181.438 56.2024C189.497 48.4378 192.446 44.8995 190.284 45.5875C189.497 45.7841 188.023 46.5703 185.861 47.9463C183.895 49.3224 182.568 50.0595 181.88 50.1578C181.29 50.2561 180.357 49.9612 179.079 49.2732C177.31 48.2903 175.786 45.9806 174.509 42.344C173.722 39.8869 173.28 38.0686 173.182 36.8892C173.083 35.6114 173.28 33.8423 173.771 31.5817C174.754 28.0434 175 24.7508 174.509 21.7039L173.771 17.1336L176.573 18.3131C178.735 19.0993 180.652 20.6228 182.322 22.8834C184.092 25.144 185.222 27.3554 185.713 29.5177C185.812 30.6971 186.008 31.5817 186.303 32.1714C186.696 32.7611 187.089 33.0068 187.482 32.9086C188.367 32.5154 190.185 31.9257 192.937 31.1394C195.689 30.2548 197.409 29.272 198.097 28.1908C198.785 26.8148 198.785 24.1119 198.097 20.0822C197.409 15.9542 196.426 13.0056 195.149 11.2365ZM216.526 50.3052C215.838 49.6172 214.413 49.1258 212.251 48.8309C210.776 48.6343 209.892 48.6343 209.597 48.8309C209.302 49.0275 209.155 49.7155 209.155 50.8949C209.155 52.0744 209.351 52.8115 209.744 53.1064C210.137 53.3029 211.219 53.2047 212.988 52.8115C215.838 52.3201 217.263 51.8286 217.263 51.3372C217.263 51.1406 217.017 50.7966 216.526 50.3052ZM195.591 56.9395C196.574 56.2515 197.065 55.8584 197.065 55.7601C197.065 55.6618 196.574 55.6127 195.591 55.6127C194.215 55.6127 192.839 56.055 191.463 56.9395C190.578 57.7258 190.136 58.1681 190.136 58.2664C190.136 58.3647 190.628 58.4138 191.61 58.4138C192.986 58.4138 194.313 57.9224 195.591 56.9395Z"/>
        <path d="M54.0013 36.5943C55.9671 33.6457 57.2448 32.5154 57.8345 33.2034C58.0311 33.4983 58.2276 33.8914 58.4242 34.3828C58.9157 35.5623 59.1122 39.592 59.0139 46.472C59.0139 53.2538 58.7682 56.9395 58.2768 57.5292C57.5888 58.5121 56.3602 59.2493 54.5911 59.7407C52.9202 60.2321 51.5442 60.2813 50.463 59.8881C48.2025 58.6104 46.9247 56.055 46.6299 52.2218C46.4333 48.2903 47.3179 45.1943 49.2836 42.9337C50.7579 41.2629 52.3305 39.1497 54.0013 36.5943ZM80.9809 16.249C81.0792 16.0525 81.5706 16.2982 82.4552 16.9862C83.3398 17.6742 84.2735 18.6079 85.2563 19.7874C86.2392 20.9668 87.0746 22.0479 87.7627 23.0308C88.2541 23.8171 89.1878 24.1611 90.5638 24.0628C91.9398 23.9645 95.3798 23.2765 100.884 21.9988L113.12 19.3451L118.133 21.5565C120.197 22.4411 121.622 23.2765 122.409 24.0628C123.293 24.8491 123.981 25.9302 124.473 27.3062C125.554 30.2548 125.013 33.0068 122.851 35.5623C120.787 38.1177 117.199 40.2309 112.088 41.9017C109.336 42.7863 107.322 43.6709 106.044 44.5555C104.766 45.44 103.538 45.8823 102.358 45.8823C98.525 45.8823 95.5273 48.2903 93.365 53.1064C91.7924 56.3498 90.2198 58.7578 88.6472 60.3304C87.1729 61.7064 86.4358 62.7384 86.4358 63.4264C86.4358 64.1144 87.2221 65.0481 88.7947 66.2276C90.8587 67.8984 91.6449 69.3727 91.1535 70.6504C90.7604 71.8299 89.0404 73.3042 85.9935 75.0733C81.0792 77.8253 78.3272 80.2334 77.7374 82.2974C77.5409 83.1819 77.9832 83.6242 79.0643 83.6242C80.2438 83.7225 82.1603 83.1328 84.8141 81.8551C88.1558 80.2825 91.8907 78.9556 96.0187 77.8745C100.147 76.6951 103.587 76.1053 106.339 76.1053C108.698 76.1053 111.548 76.7933 114.89 78.1693C118.231 79.5453 120.738 81.0196 122.409 82.5922C125.259 85.1477 126.881 88.4894 127.274 92.6174C127.765 96.6471 126.93 100.235 124.767 103.38C121.426 107.901 118.575 110.997 116.217 112.668C113.858 114.339 110.663 115.371 106.634 115.764C105.749 115.862 104.963 116.354 104.275 117.238C103.587 118.024 102.8 119.45 101.916 121.514C100.835 124.167 99.557 126.33 98.0827 128C96.7067 129.77 95.429 130.654 94.2495 130.654C93.6598 130.654 93.365 128.148 93.365 123.135C93.365 119.99 93.2175 117.877 92.9227 116.796C92.7261 115.616 92.1364 114.584 91.1535 113.7C89.8758 112.619 88.2049 111.046 86.1409 108.982C84.7649 107.508 83.8312 106.721 83.3398 106.623C82.9466 106.525 82.4552 106.918 81.8655 107.803C80.9809 108.982 80.2929 111.095 79.8015 114.142C79.31 117.779 77.7374 119.597 75.0837 119.597C74.494 119.597 73.6094 117.582 72.43 113.552C71.3488 109.523 70.4151 107.508 69.6288 107.508C68.8426 107.508 66.7294 108.343 63.2894 110.014C59.9477 111.587 57.3922 112.373 55.6231 112.373C53.9522 112.373 52.4779 111.587 51.2002 110.014C49.8242 108.343 48.8905 106.181 48.399 103.527C48.0059 100.873 48.2025 98.8094 48.9888 97.3352C49.775 95.8609 52.3796 93.1088 56.8025 89.0791C63.9774 82.2974 68.302 77.9236 69.7763 75.9579C71.2506 73.9922 72.3317 71.2893 73.0197 67.8493C73.806 63.5247 74.1009 60.9693 73.9043 60.183C73.806 59.3967 73.0197 59.0035 71.5454 59.0035C67.2208 59.0035 65.0585 57.3327 65.0585 53.9909C65.0585 52.0252 65.4025 51.0424 66.0905 51.0424C66.8768 51.0424 68.302 50.2069 70.366 48.5361C72.43 46.7669 73.9043 45.8823 74.7889 45.8823C75.6735 45.8823 76.4597 45.2435 77.1477 43.9657C77.934 42.688 78.3272 41.2629 78.3272 39.6903C78.3272 38.7074 78.0815 38.1177 77.59 37.9211C77.0986 37.7246 75.6243 37.8229 73.1672 38.216C70.9066 38.4126 69.3831 38.4126 68.5968 38.216C67.9088 38.0194 67.0734 37.3314 66.0905 36.152C63.9283 33.4 63.7317 31.9748 65.5008 31.8765C65.6974 31.7783 65.894 31.7291 66.0905 31.7291C67.3683 31.7291 68.2037 31.4343 68.5968 30.8445C68.99 30.2548 70.2677 29.8125 72.43 29.5177C75.3786 28.8297 77.3935 27.896 78.4746 26.7165C79.654 25.5371 80.2438 23.7679 80.2438 21.4091C80.2438 18.4605 80.4895 16.7405 80.9809 16.249ZM113.563 29.3703C113.563 29.0754 112.531 28.928 110.467 28.928C108.403 28.8297 105.896 28.8788 102.948 29.0754C99.9993 29.1737 97.4438 29.3211 95.2815 29.5177C93.6107 29.616 92.4312 29.96 91.7432 30.5497C91.0552 31.1394 90.2689 32.2206 89.3844 33.7931C87.8118 36.84 87.1238 39.1497 87.3204 40.7223C87.5169 42.1966 88.7455 43.2777 91.0061 43.9657C94.053 44.9486 97.3455 44.5555 100.884 42.7863C104.422 40.9189 107.764 37.9211 110.909 33.7931C112.678 31.2377 113.563 29.7634 113.563 29.3703ZM74.0517 87.4574C74.15 86.3762 73.7569 85.6391 72.8723 85.246C71.9877 84.8528 71.2506 85.1477 70.6608 86.1305C70.366 86.7202 68.4003 87.8997 64.7637 89.6688C59.6528 92.126 57.0974 95.1729 57.0974 98.8094C57.0974 100.579 59.7511 99.694 65.0585 96.1557C70.6608 92.5191 73.6586 89.6197 74.0517 87.4574ZM106.928 85.246C105.258 85.246 104.422 89.5214 104.422 98.0723C104.422 100.824 104.52 102.593 104.717 103.38C105.012 104.068 105.602 104.412 106.486 104.412C108.747 104.412 110.909 102.544 112.973 98.8094C115.037 94.9763 115.676 91.6345 114.89 88.7842C114.595 87.2117 113.415 86.2288 111.351 85.8357C109.287 85.4425 107.813 85.246 106.928 85.246ZM94.397 97.1877C94.397 92.1751 93.9547 89.0791 93.0701 87.8997C92.3821 86.9168 91.8907 86.4745 91.5958 86.5728C91.3009 86.5728 90.7604 87.1625 89.9741 88.342C88.8929 89.9145 88.3524 91.094 88.3524 91.8803C88.3524 92.6666 87.8118 94.0426 86.7306 96.0083C86.1409 97.4826 85.8952 98.4654 85.9935 98.9569C86.0918 99.4483 86.8781 100.382 88.3524 101.758C90.9078 104.019 92.5295 104.854 93.2175 104.264C94.0038 103.675 94.397 101.316 94.397 97.1877ZM42.9441 13.7428C44.2219 13.6445 45.991 13.9885 48.2516 14.7748C50.5122 15.561 52.1339 16.3473 53.1168 17.1336C53.9031 18.0182 54.1979 18.8536 54.0013 19.6399C53.8048 20.3279 52.7728 22.1462 50.9053 25.0948C48.1533 29.3211 44.3693 33.8914 39.5533 38.8057C35.2287 43.2286 32.6732 46.3246 31.887 48.0938C31.1007 49.8629 31.5921 51.2881 33.3612 52.3692C35.0321 53.5487 36.359 53.7452 37.3418 52.9589C38.1281 52.3692 38.5704 52.7132 38.6687 53.9909C38.6687 54.2858 38.6687 54.8755 38.6687 55.7601C38.5704 62.3453 39.3076 73.255 40.8801 88.4894C41.6664 95.9591 41.2733 100.677 39.7007 102.643C38.1281 104.608 33.8527 105.64 26.8744 105.739C23.7292 105.935 21.6652 105.935 20.6823 105.739C19.6995 105.542 19.208 105.1 19.208 104.412C19.208 103.429 17.7829 101.807 14.9326 99.5466C13.7532 98.662 12.7703 97.8266 11.984 97.0403C11.1977 96.254 10.8537 95.7626 10.952 95.566C11.2468 95.3694 12.8686 95.7626 15.8172 96.7454C18.864 97.8266 21.2229 98.3672 22.8938 98.3672C24.5646 98.2689 26.0881 97.5809 27.4641 96.3031C28.4469 95.3203 29.0858 94.2391 29.3806 93.0597C29.6755 91.8803 29.8229 89.2757 29.8229 85.246C29.8229 79.3488 29.5772 76.2036 29.0858 75.8105C28.9875 75.7122 28.6926 75.9088 28.2012 76.4002C27.8081 76.7933 27.2675 77.3831 26.5795 78.1693C25.9898 78.9556 25.4001 79.8402 24.8104 80.8231C22.2549 84.6562 19.4538 87.3591 16.4069 88.9317C13.4583 90.5043 10.8046 90.75 8.44569 89.6688C6.18511 88.4894 4.71082 86.0814 4.02281 82.4448C3.72796 80.8722 3.67881 79.9385 3.87538 79.6436C4.07195 79.3488 5.05482 79.2014 6.82397 79.2014C8.49483 79.2014 11.0503 78.0711 14.4903 75.8105C18.0286 73.4516 21.2229 70.7487 24.0732 67.7019C25.6458 65.8344 26.4812 64.5567 26.5795 63.8687C26.6778 63.1807 26.0881 62.2961 24.8104 61.215C23.4343 60.0355 22.5006 57.5292 22.0092 53.6961C21.8126 50.9441 21.7635 49.1258 21.8618 48.2412C22.0583 47.3566 22.8938 46.128 24.3681 44.5555C26.2355 42.688 29.0858 38.8057 32.919 32.9086C36.8504 26.9131 38.8161 23.5222 38.8161 22.7359C38.8161 22.1462 38.3738 21.8022 37.4893 21.7039C36.6047 21.6056 35.4744 21.7531 34.0984 22.1462C32.7224 22.4411 31.3464 22.9325 29.9704 23.6205C27.5132 24.8982 23.9749 27.4045 19.3555 31.1394C14.736 34.8743 12.0331 36.84 11.2468 37.0366C6.72568 37.6263 3.58053 37.2823 1.81138 36.0046C0.140517 34.6286 -0.350915 33.6948 0.337088 33.2034C0.631947 33.1051 1.17252 33.1543 1.95881 33.3508C4.80911 34.5303 10.5589 32.2697 19.208 26.5691C24.5155 23.2274 28.8401 20.7702 32.1818 19.1976C35.6218 17.6251 37.9807 16.3473 39.2584 15.3645C40.6344 14.2833 41.863 13.7428 42.9441 13.7428ZM75.2312 6.66614C75.2312 6.17471 75.9192 5.87985 77.2952 5.78157C78.7695 5.585 80.3912 5.585 82.1603 5.78157C84.0278 5.97814 85.4038 6.32214 86.2884 6.81358C87.8609 7.69815 88.9912 8.73015 89.6792 9.90959C90.9569 11.8753 89.9741 13.2513 86.7306 14.0376C84.2735 14.7256 81.5215 14.6765 78.4746 13.8902C77.59 13.6936 77.0003 13.3988 76.7054 13.0056C76.4106 12.6125 76.3614 11.9736 76.558 11.089C77.0494 9.41816 76.9512 8.38615 76.2632 7.99301C75.5752 7.59986 75.2312 7.15757 75.2312 6.66614Z"/>
</symbol>
    <symbol id="katakana-profile" viewBox="0 0 136 766">
        <path d="M71.0893 478.101C71.0893 476.797 71.8419 476.094 73.3471 475.994C74.8523 475.894 76.9094 476.395 79.5183 477.499C81.9266 478.503 83.482 479.506 84.1844 480.51C84.9871 481.513 84.9871 482.667 84.1844 483.971C83.3816 485.176 81.7259 486.831 79.2173 488.939C75.2035 492.15 73.1966 494.056 73.1966 494.658C73.1966 495.16 71.6413 496.464 68.5306 498.572C65.8212 500.478 64.3161 501.833 64.015 502.636C63.714 503.438 64.4666 504.141 66.2728 504.743C67.9787 505.445 69.0824 506.298 69.5842 507.302C70.1862 508.305 72.8454 509.861 77.5616 511.968C82.2778 514.075 89.302 518.189 98.6341 524.31C106.762 529.428 111.93 532.639 114.137 533.943C116.345 535.248 118.904 536.301 121.814 537.104C124.824 538.007 127.784 539.462 130.694 541.469C133.604 543.376 135.411 545.082 136.113 546.587C136.815 548.192 136.665 549.647 135.661 550.952C134.558 551.955 132.701 552.909 130.092 553.812C127.584 554.715 125.276 555.166 123.168 555.166C121.563 555.166 118.653 554.163 114.438 552.156C110.324 550.149 108.117 548.694 107.816 547.791C107.414 546.888 105.708 545.433 102.698 543.426C99.6877 541.419 96.8279 539.262 94.1185 536.954C89.8037 533.241 85.6394 530.13 81.6256 527.622C77.6118 525.013 70.7883 521.3 61.1552 516.483C58.4459 514.978 56.9909 513.523 56.7902 512.118C56.5895 510.613 56.1379 509.861 55.4355 509.861C54.5324 509.861 51.0203 512.369 44.8993 517.386C38.7782 522.303 33.0586 527.27 27.7403 532.288C20.7161 538.91 15.5985 543.025 12.3875 544.63C9.2768 546.236 6.718 547.64 4.7111 548.845C3.50696 549.647 2.65403 550.049 2.1523 550.049C1.75092 550.049 1.34954 549.697 0.948164 548.995C0.145403 547.891 0.546783 546.436 2.1523 544.63C3.85817 542.724 8.12283 539.011 14.9463 533.492C31.1019 520.246 44.4979 508.405 55.1345 497.97C65.7711 487.433 71.0893 480.811 71.0893 478.101Z"/>
        <path d="M27.2887 389.296C30.6001 387.49 32.306 387.088 32.4063 388.092C32.4063 388.393 31.3025 389.045 29.0949 390.049C26.8873 390.952 25.332 391.303 24.4289 391.102C24.2282 391.102 24.5292 390.901 25.332 390.5C25.8337 390.099 26.486 389.697 27.2887 389.296ZM64.6171 299.286C67.5271 297.079 69.5842 295.875 70.7883 295.674C72.0928 295.473 74.3506 295.975 77.5616 297.179C87.8971 300.992 90.3556 306.913 84.937 314.94C82.8297 317.951 81.7761 320.459 81.7761 322.466C81.7761 325.677 77.0599 330.042 67.6274 335.561C60.9043 339.475 56.5393 339.625 54.5324 336.013L53.0272 333.002V335.712C53.0272 337.518 52.3248 340.478 50.92 344.592C49.5152 348.606 48.8127 350.864 48.8127 351.365C48.7124 353.473 52.8265 352.419 61.1552 348.205C64.6673 346.499 68.2295 344.442 71.8419 342.033C76.5581 339.023 79.4682 337.367 80.5719 337.066C81.6757 336.665 82.9802 335.762 84.4854 334.357C85.6895 333.354 86.6428 332.852 87.3452 332.852C88.0477 332.852 89.8539 333.303 92.7639 334.206C96.1756 335.411 98.2327 336.715 98.9351 338.12C99.7379 339.424 99.0856 340.779 96.9784 342.184C95.5735 343.087 94.0684 344.291 92.4628 345.796C90.8573 347.201 89.603 348.455 88.6999 349.559C87.7968 350.663 87.4456 351.265 87.6463 351.365C88.148 351.968 89.3521 352.269 91.2587 352.269C93.7673 352.269 95.5234 352.72 96.5268 353.623C97.6306 354.526 98.1825 356.132 98.1825 358.44V362.654L102.849 361.902C107.464 361.3 112.13 361.751 116.847 363.256C121.563 364.762 123.921 366.568 123.921 368.675C123.921 369.377 121.262 369.779 115.944 369.879C110.625 369.879 106.26 370.481 102.849 371.685C99.5372 372.789 97.5804 374.395 96.9784 376.502C96.2759 378.408 95.8244 386.587 95.6237 401.036C95.423 419.7 94.7206 430.237 93.5165 432.645C92.7137 434.251 91.1082 434.802 88.6999 434.301C86.392 433.699 84.937 431.391 84.3349 427.377C83.7328 423.463 83.8332 417.292 84.6359 408.863C85.3383 403.043 85.7899 396.42 85.9906 388.995C86.1913 381.569 86.0407 377.606 85.539 377.104C85.1376 376.803 82.3782 377.806 77.2606 380.114C73.6481 381.72 71.3402 382.974 70.3368 383.877C69.3333 384.68 68.3299 386.286 67.3264 388.694C65.8212 392.206 64.4164 394.815 63.1119 396.521C61.9078 398.126 60.2521 401.588 58.1448 406.906C56.0376 412.124 54.0809 415.637 52.2746 417.443C51.0705 418.848 49.7158 419.751 48.2107 420.152C46.8058 420.453 45.8024 420.152 45.2003 419.249C44.7989 418.546 46.6553 414.031 50.7695 405.702C54.8836 397.374 56.9407 392.507 56.9407 391.102C56.9407 390.099 56.6397 389.597 56.0376 389.597C54.6328 389.597 47.7089 392.908 35.2662 399.531C31.5534 401.438 28.7939 402.642 26.9877 403.144C25.1815 403.645 22.8234 403.996 19.9134 404.197H13.1401L12.9896 400.886C12.7889 398.578 13.0899 396.972 13.8927 396.069C14.8961 394.765 15.9999 394.213 17.2041 394.414C17.7058 394.514 17.7559 394.865 17.3546 395.467C16.3511 397.073 18.5587 396.671 23.9773 394.263C25.6832 393.46 27.6901 392.507 29.998 391.403C36.7212 387.991 42.7419 385.081 48.0602 382.673C55.1847 379.362 57.4926 376.953 54.984 375.448C53.8802 374.746 49.3145 377.104 41.2869 382.523C36.5706 385.734 34.0118 387.138 33.6105 386.737C33.2091 386.235 33.5101 385.683 34.5136 385.081C35.517 384.479 38.0758 382.623 42.19 379.512C46.3041 376.402 49.0636 374.294 50.4684 373.191C51.8733 371.886 54.5826 369.528 58.5964 366.116C61.6067 363.507 64.8679 360.497 68.38 357.085C71.8921 353.673 73.6481 351.817 73.6481 351.516C73.6481 351.315 73.0461 351.516 71.8419 352.118C70.6378 352.72 68.6309 353.724 65.8212 355.128C63.0116 356.433 59.2988 358.339 54.6829 360.848L47.7591 364.611L45.6519 362.203C44.247 360.597 43.0429 358.289 42.0395 355.279C41.036 352.269 40.8855 350.362 41.5879 349.559C42.2903 348.757 43.1432 346.148 44.1467 341.732C45.2505 337.217 45.8024 333.956 45.8024 331.949C45.8024 329.741 44.5982 327.483 42.19 325.175C39.581 322.868 38.427 321.011 38.7281 319.606C39.0291 318.101 40.735 316.445 43.8457 314.639C47.4581 312.432 50.9702 309.973 54.3819 307.264L64.6171 299.286ZM71.5409 305.759C71.5409 305.157 71.2399 304.856 70.6378 304.856C69.7347 304.856 67.6776 306.11 64.4666 308.618C61.2555 311.027 58.8472 313.285 57.2417 315.392C54.7331 318.201 52.2746 320.71 49.8664 322.918L46.4045 326.38L49.4148 329.54C51.3214 331.547 52.5757 332.45 53.1778 332.25C53.7798 332.049 53.9805 330.745 53.7798 328.336C53.5791 326.329 53.6293 325.075 53.9303 324.573C54.2314 323.971 55.0843 323.419 56.4891 322.918C58.5964 322.215 60.5029 321.212 62.2088 319.907C63.6136 318.603 65.5202 316.144 67.9285 312.532C70.3367 308.819 71.5409 306.561 71.5409 305.759ZM82.3782 352.269C81.5754 352.269 78.9163 353.924 74.4007 357.236C69.8852 360.447 65.9717 363.507 62.6604 366.417L57.5428 370.782L60.4026 373.341L63.2624 375.749L72.8956 372.287C79.5183 369.879 83.5321 368.324 84.937 367.621C87.5459 366.217 87.6964 363.307 85.3885 358.891C84.3851 356.985 83.8833 355.429 83.8833 354.225C83.8833 352.921 83.3816 352.269 82.3782 352.269Z"/>
        <path d="M67.1759 156.445C65.6707 154.438 65.2191 153.385 65.8212 153.284C65.9216 153.184 66.3229 153.134 67.0254 153.134C68.4302 153.134 70.7381 153.987 73.9492 155.693C77.2605 157.298 79.418 158.603 80.4214 159.606C81.2242 160.81 81.4249 162.917 81.0235 165.928C80.6221 168.436 80.7726 170.142 81.475 171.045C82.2778 171.848 84.084 172.551 86.8937 173.153C89.302 173.654 91.2085 174.507 92.6133 175.711C94.1185 176.916 94.8711 178.32 94.8711 179.926C94.8711 181.833 94.269 183.037 93.0649 183.538C92.2621 183.739 91.0078 184.492 89.302 185.796C87.6964 187.101 86.2916 188.355 85.0875 189.559C83.8833 190.763 83.3816 191.516 83.5823 191.817C84.1844 192.319 87.3452 192.77 93.0649 193.172C98.8849 193.573 103.099 194.727 105.708 196.633C108.418 198.44 110.826 199.794 112.933 200.697C115.04 201.6 116.094 202.855 116.094 204.46C116.094 208.374 113.535 209.478 108.418 207.772C105.909 206.969 102.046 206.768 96.8278 207.17C91.7102 207.471 87.6463 208.173 84.6359 209.277L80.7225 210.933L79.9699 229.747C78.8661 257.141 77.6619 272.043 76.3574 274.451C75.9561 275.454 75.4543 276.006 74.8523 276.107C74.3505 276.207 73.3471 276.057 71.8419 275.655C69.6343 274.953 68.1292 274.551 67.3264 274.451C64.9181 273.849 64.7676 272.444 66.8748 270.236C67.8783 269.133 68.4804 267.276 68.681 264.667C68.8817 262.058 68.9821 254.282 68.9821 241.337C68.9821 223.676 68.5305 214.696 67.6274 214.394C66.5236 213.893 63.5133 214.746 58.5964 216.953C53.6795 219.161 49.5151 221.419 46.1034 223.727C37.5741 229.446 31.8544 232.858 28.9444 233.962C26.1347 235.066 24.0777 234.765 22.7732 233.059C22.0708 232.156 21.569 229.998 21.268 226.586C20.967 223.175 21.1175 221.067 21.7196 220.265C22.0206 219.562 24.1278 218.86 28.0413 218.157C32.5568 217.355 36.3699 215.95 39.4806 213.943C42.6917 211.936 47.2574 208.073 53.1777 202.353C61.406 194.426 64.4164 190.813 62.2088 191.516C61.406 191.716 59.9009 192.519 57.6933 193.924C55.6864 195.329 54.3317 196.082 53.6293 196.182C53.0272 196.282 52.0739 195.981 50.7695 195.279C48.9632 194.275 47.4079 191.917 46.1034 188.204C45.3007 185.696 44.8491 183.839 44.7488 182.635C44.6484 181.331 44.8491 179.525 45.3508 177.217C46.3543 173.604 46.6051 170.243 46.1034 167.132L45.3508 162.466L48.2107 163.67C50.4182 164.473 52.375 166.028 54.0808 168.336C55.8871 170.644 57.041 172.902 57.5427 175.109C57.6431 176.314 57.8438 177.217 58.1448 177.819C58.5462 178.421 58.9476 178.672 59.349 178.571C60.2521 178.17 62.1084 177.568 64.9181 176.765C67.7278 175.862 69.4838 174.859 70.1862 173.755C70.8886 172.35 70.8886 169.59 70.1862 165.476C69.4838 161.262 68.4804 158.251 67.1759 156.445ZM89.0009 196.332C88.2985 195.63 86.8435 195.128 84.6359 194.827C83.1307 194.627 82.2276 194.627 81.9266 194.827C81.6256 195.028 81.475 195.73 81.475 196.934C81.475 198.139 81.6757 198.891 82.0771 199.192C82.4785 199.393 83.5823 199.293 85.3885 198.891C88.2985 198.389 89.7535 197.888 89.7535 197.386C89.7535 197.185 89.5026 196.834 89.0009 196.332ZM67.6274 203.106C68.6309 202.403 69.1326 202.002 69.1326 201.902C69.1326 201.801 68.6309 201.751 67.6274 201.751C66.2226 201.751 64.8178 202.203 63.4129 203.106C62.5098 203.908 62.0583 204.36 62.0583 204.46C62.0583 204.561 62.56 204.611 63.5634 204.611C64.9683 204.611 66.3229 204.109 67.6274 203.106Z"/>
        <path d="M58.5964 31.8167C60.6033 28.8063 61.9078 27.6524 62.5098 28.3548C62.7105 28.6558 62.9112 29.0572 63.1119 29.5589C63.6136 30.7631 63.8143 34.8772 63.714 41.9014C63.714 48.8252 63.4631 52.5881 62.9614 53.1902C62.259 54.1936 61.0047 54.9462 59.1984 55.4479C57.4926 55.9497 56.0877 55.9998 54.984 55.5985C52.676 54.294 51.3715 51.685 51.0705 47.7715C50.8698 43.7577 51.7729 40.5969 53.7798 38.2889C55.285 36.5831 56.8905 34.4257 58.5964 31.8167ZM86.1411 11.0453C86.2414 10.8446 86.7432 11.0954 87.6463 11.7978C88.5494 12.5003 89.5026 13.4535 90.5061 14.6577C91.5095 15.8618 92.3625 16.9656 93.0649 17.9691C93.5666 18.7718 94.5199 19.123 95.9247 19.0227C97.3296 18.9223 100.842 18.2199 106.461 16.9154L118.954 14.2061L124.072 16.4639C126.179 17.367 127.634 18.2199 128.437 19.0227C129.34 19.8255 130.042 20.9292 130.544 22.3341C131.648 25.3444 131.096 28.1541 128.888 30.7631C126.781 33.372 123.118 35.5294 117.9 37.2353C115.091 38.1384 113.034 39.0415 111.729 39.9446C110.425 40.8477 109.17 41.2993 107.966 41.2993C104.053 41.2993 100.992 43.7577 98.7846 48.6747C97.179 51.986 95.5735 54.4445 93.968 56.05C92.4628 57.4548 91.7102 58.5085 91.7102 59.2109C91.7102 59.9133 92.513 60.8666 94.1185 62.0707C96.2258 63.7766 97.0285 65.2818 96.5268 66.5862C96.1254 67.7904 94.3694 69.2956 91.2587 71.1018C86.2414 73.9114 83.4318 76.3699 82.8297 78.4771C82.629 79.3802 83.0806 79.8318 84.1844 79.8318C85.3885 79.9321 87.3452 79.3301 90.0545 78.0256C93.4663 76.4201 97.2794 75.0654 101.494 73.9616C105.708 72.7575 109.22 72.1554 112.03 72.1554C114.438 72.1554 117.348 72.8578 120.76 74.2626C124.172 75.6675 126.731 77.1726 128.437 78.7782C131.347 81.3871 133.002 84.7989 133.404 89.0134C133.905 93.1275 133.052 96.7901 130.845 100.001C127.433 104.617 124.523 107.778 122.115 109.484C119.707 111.19 116.445 112.243 112.331 112.645C111.428 112.745 110.625 113.247 109.923 114.15C109.22 114.953 108.418 116.408 107.515 118.515C106.411 121.224 105.106 123.432 103.601 125.138C102.196 126.944 100.892 127.847 99.6877 127.847C99.0856 127.847 98.7846 125.288 98.7846 120.17C98.7846 116.959 98.634 114.802 98.333 113.698C98.1323 112.494 97.5302 111.44 96.5268 110.537C95.2223 109.434 93.5164 107.828 91.4092 105.721C90.0044 104.216 89.0511 103.413 88.5494 103.313C88.148 103.212 87.6463 103.614 87.0442 104.517C86.1411 105.721 85.4387 107.878 84.9369 110.989C84.4352 114.702 82.8297 116.558 80.1204 116.558C79.5183 116.558 78.6152 114.501 77.4111 110.387C76.3073 106.273 75.354 104.216 74.5512 104.216C73.7485 104.216 71.5911 105.069 68.079 106.774C64.6673 108.38 62.0583 109.183 60.2521 109.183C58.5462 109.183 57.041 108.38 55.7365 106.774C54.3317 105.069 53.3784 102.861 52.8767 100.152C52.4753 97.4423 52.676 95.3351 53.4788 93.8299C54.2815 92.3248 56.9407 89.5151 61.4562 85.4009C68.7814 78.4771 73.1966 74.0118 74.7017 72.0049C76.2069 69.998 77.3107 67.2385 78.0131 63.7264C78.8159 59.3112 79.1169 56.7022 78.9162 55.8995C78.8159 55.0967 78.0131 54.6954 76.508 54.6954C72.0928 54.6954 69.8852 52.9895 69.8852 49.5778C69.8852 47.5709 70.2364 46.5674 70.9388 46.5674C71.7416 46.5674 73.1966 45.7145 75.3038 44.0086C77.4111 42.2024 78.9162 41.2993 79.8193 41.2993C80.7225 41.2993 81.5252 40.647 82.2276 39.3426C83.0304 38.0381 83.4318 36.5831 83.4318 34.9776C83.4318 33.9741 83.1809 33.372 82.6792 33.1713C82.1775 32.9706 80.6723 33.071 78.1636 33.4724C75.8557 33.6731 74.3004 33.6731 73.4976 33.4724C72.7952 33.2717 71.9423 32.5693 70.9388 31.3651C68.7312 28.5555 68.5305 27.1005 70.3367 27.0001C70.5374 26.8998 70.7381 26.8496 70.9388 26.8496C72.2433 26.8496 73.0962 26.5486 73.4976 25.9465C73.899 25.3444 75.2035 24.8929 77.4111 24.5918C80.4214 23.8894 82.4785 22.9361 83.5823 21.732C84.7864 20.5279 85.3885 18.7216 85.3885 16.3134C85.3885 13.303 85.6394 11.547 86.1411 11.0453ZM119.405 24.4413C119.405 24.1403 118.352 23.9898 116.245 23.9898C114.137 23.8894 111.579 23.9396 108.568 24.1403C105.558 24.2406 102.949 24.3911 100.741 24.5918C99.0354 24.6922 97.8313 25.0434 97.1289 25.6455C96.4265 26.2475 95.6237 27.3513 94.7206 28.9568C93.1151 32.0675 92.4126 34.4257 92.6133 36.0312C92.814 37.5363 94.0683 38.6401 96.3763 39.3426C99.487 40.346 102.849 39.9446 106.461 38.1384C110.073 36.2319 113.485 33.1713 116.696 28.9568C118.502 26.3479 119.405 24.8427 119.405 24.4413ZM79.0668 83.7452C79.1671 82.6414 78.7657 81.8889 77.8626 81.4875C76.9595 81.0861 76.2069 81.3871 75.6049 82.3906C75.3038 82.9927 73.2969 84.1968 69.5842 86.003C64.3662 88.5116 61.7572 91.6223 61.7572 95.3351C61.7572 97.1413 64.4666 96.2382 69.8852 92.6258C75.6049 88.913 78.6654 85.9528 79.0668 83.7452ZM112.632 81.4875C110.926 81.4875 110.073 85.8525 110.073 94.5825C110.073 97.3922 110.174 99.1984 110.374 100.001C110.675 100.704 111.278 101.055 112.181 101.055C114.489 101.055 116.696 99.1482 118.803 95.3351C120.911 91.4216 121.563 88.0099 120.76 85.0999C120.459 83.4944 119.255 82.4909 117.148 82.0895C115.04 81.6882 113.535 81.4875 112.632 81.4875ZM99.8382 93.6794C99.8382 88.5618 99.3866 85.4009 98.4835 84.1968C97.7811 83.1933 97.2794 82.7418 96.9784 82.8421C96.6773 82.8421 96.1254 83.4442 95.3227 84.6484C94.2189 86.2539 93.667 87.458 93.667 88.2608C93.667 89.0635 93.1151 90.4684 92.0113 92.4753C91.4092 93.9804 91.1583 94.9839 91.2587 95.4856C91.359 95.9873 92.1618 96.9406 93.667 98.3454C96.2759 100.653 97.9316 101.506 98.634 100.904C99.4368 100.302 99.8382 97.8939 99.8382 93.6794ZM47.3076 8.48646C48.612 8.38612 50.4183 8.73732 52.7262 9.54008C55.0341 10.3428 56.6898 11.1456 57.6933 11.9484C58.496 12.8515 58.7971 13.7044 58.5964 14.5072C58.3957 15.2096 57.3421 17.066 55.4355 20.0763C52.6258 24.3911 48.7626 29.0572 43.8457 34.0744C39.4305 38.59 36.8215 41.7508 36.0187 43.5571C35.216 45.3633 35.7177 46.8183 37.5239 47.9221C39.2298 49.1262 40.5844 49.3269 41.5879 48.5241C42.3906 47.9221 42.8422 48.2733 42.9425 49.5778C42.9425 49.8788 42.9425 50.4809 42.9425 51.384C42.8422 58.1071 43.5948 69.2454 45.2003 84.7989C46.0031 92.4251 45.6017 97.2417 43.9962 99.2486C42.3907 101.255 38.0256 102.309 30.9011 102.409C27.6901 102.61 25.5829 102.61 24.5794 102.409C23.576 102.209 23.0742 101.757 23.0742 101.055C23.0742 100.051 21.6192 98.3956 18.7092 96.0877C17.5051 95.1846 16.5016 94.3317 15.6989 93.5289C14.8961 92.7261 14.5449 92.2244 14.6452 92.0237C14.9463 91.823 16.602 92.2244 19.6123 93.2279C22.723 94.3316 25.1313 94.8835 26.8372 94.8835C28.543 94.7832 30.0984 94.0808 31.5032 92.7763C32.5067 91.7729 33.1589 90.6691 33.4599 89.4649C33.761 88.2608 33.9115 85.6016 33.9115 81.4875C33.9115 75.4668 33.6606 72.2557 33.1589 71.8544C33.0586 71.754 32.7575 71.9547 32.2558 72.4564C31.8544 72.8578 31.3025 73.4599 30.6001 74.2626C29.998 75.0654 29.396 75.9685 28.7939 76.972C26.1849 80.8854 23.3251 83.6449 20.2144 85.2504C17.204 86.8559 14.4947 87.1068 12.0864 86.003C9.77851 84.7989 8.27333 82.3404 7.57092 78.6276C7.26988 77.0221 7.21971 76.0689 7.4204 75.7678C7.62109 75.4668 8.62454 75.3163 10.4308 75.3163C12.1366 75.3163 14.7456 74.1623 18.2577 71.8544C21.8701 69.4461 25.1313 66.6866 28.0413 63.5759C29.6468 61.6693 30.4998 60.3648 30.6001 59.6624C30.7005 58.96 30.0984 58.0569 28.7939 56.9531C27.3891 55.749 26.4358 53.1902 25.9341 49.2767C25.7334 46.4671 25.6832 44.6107 25.7835 43.7076C25.9842 42.8045 26.8372 41.5501 28.3423 39.9446C30.2489 38.0381 33.1589 34.0744 37.0724 28.0537C41.0862 21.9327 43.0931 18.4708 43.0931 17.668C43.0931 17.066 42.6415 16.7148 41.7384 16.6144C40.8353 16.5141 39.6813 16.6646 38.2765 17.066C36.8717 17.367 35.4668 17.8687 34.062 18.5711C31.5534 19.8756 27.941 22.4344 23.2247 26.2475C18.5085 30.0606 15.749 32.0675 14.9463 32.2682C10.3304 32.8703 7.11936 32.5191 5.31315 31.2146C3.60729 29.8098 3.10556 28.8565 3.80798 28.3548C4.10901 28.2544 4.66091 28.3046 5.46367 28.5053C8.37368 29.7094 14.2439 27.4015 23.0742 21.5815C28.4929 18.1698 32.908 15.6611 36.3198 14.0556C39.8319 12.4501 42.2401 11.1456 43.5446 10.1421C44.9494 9.03836 46.2038 8.48646 47.3076 8.48646ZM80.2709 1.26161C80.2709 0.759887 80.9733 0.458852 82.3781 0.358508C83.8833 0.157821 85.539 0.157821 87.3452 0.358508C89.2518 0.559196 90.6566 0.910405 91.5597 1.41214C93.1652 2.31524 94.3192 3.36886 95.0216 4.573C96.3261 6.5799 95.3227 7.98473 92.0113 8.78749C89.5026 9.48991 86.693 9.43974 83.5823 8.63698C82.6792 8.43629 82.0771 8.13525 81.7761 7.73387C81.475 7.33249 81.4249 6.68025 81.6256 5.77714C82.1273 4.07127 82.0269 3.01765 81.3245 2.61627C80.6221 2.21489 80.2709 1.76334 80.2709 1.26161Z"/>
</symbol>
  </defs>
</svg>
````

## File: app/routes/home/route.js
````javascript
export { Home as default, meta, links } from './home';
````

## File: app/routes/uses/route.js
````javascript
export { Uses as default, meta } from './uses';
````

## File: app/routes/uses/uses.module.css
````css
.uses {
  --maxWidthL: var(--maxWidthM);
}

.section {
  opacity: 0;
  padding-top: var(--space2XL);
  padding-bottom: var(--space2XL);
  margin-top: var(--space2XL);

  &:global {
    animation: fade-in 1s ease 1s forwards;
  }

  + & {
    margin-top: 0;
  }
}
````

## File: app/utils/delay.js
````javascript
export async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
````

## File: app/utils/image.js
````javascript
/**
 * Use the browser's image loading to load an image and
 * grab the `src` it chooses from a `srcSet`
 */
export async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error('No image src or srcSet provided');
      }

      let tempImage = new Image();

      if (src) {
        tempImage.src = src;
      }

      if (srcSet) {
        tempImage.srcset = srcSet;
      }

      if (sizes) {
        tempImage.sizes = sizes;
      }

      const onLoad = () => {
        tempImage.removeEventListener('load', onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };

      tempImage.addEventListener('load', onLoad);
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}

/**
 * Generates a transparent png of a given width and height
 */
export async function generateImage(width = 1, height = 1) {
  return new Promise(resolve => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = width;
    canvas.height = height;

    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    canvas.toBlob(async blob => {
      if (!blob) throw new Error('Video thumbnail failed to load');
      const image = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image);
    });
  });
}

/**
 * Use native html image `srcSet` resolution for non-html images
 */
export async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(', ').map(async srcString => {
      const [src, width] = srcString.split(' ');
      const size = Number(width.replace('w', ''));
      const image = await generateImage(size);
      return { src, image, width };
    })
  );

  const fakeSrcSet = sources.map(({ image, width }) => `${image} ${width}`).join(', ');
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });

  const output = sources.find(src => src.image === fakeSrc);
  return output.src;
}
````

## File: app/utils/session.js
````javascript
const localHostnames = new Set(['localhost', '127.0.0.1', '0.0.0.0']);

export function getSessionSecrets(request, env = {}) {
  if (env.SESSION_SECRET) {
    return [env.SESSION_SECRET];
  }

  const { hostname } = new URL(request.url);

  if (localHostnames.has(hostname)) {
    return ['dev-session-secret'];
  }

  throw new Error('SESSION_SECRET is required outside local development.');
}
````

## File: app/utils/style.js
````javascript
/**
 * Media query breakpoints
 */
export const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400,
};

/**
 * Convert a px string to a number
 */
export const pxToNum = px => Number(px.replace('px', ''));

/**
 * Convert a number to a px string
 */
export const numToPx = num => `${num}px`;

/**
 * Convert pixel values to rem for a11y
 */
export const pxToRem = px => `${px / 16}rem`;

/**
 * Convert ms token values to a raw numbers for ReactTransitionGroup
 * Transition delay props
 */
export const msToNum = msString => Number(msString.replace('ms', ''));

/**
 * Convert a number to an ms string
 */
export const numToMs = num => `${num}ms`;

/**
 * Convert an rgb theme property (e.g. rgbBlack: '0 0 0')
 * to values that can be spread into a ThreeJS Color class
 */
export const rgbToThreeColor = rgb =>
  rgb?.split(' ').map(value => Number(value) / 255) || [];

/**
 * Convert a JS object into `--` prefixed css custom properties.
 * Optionally pass a second param for normal styles
 */
export function cssProps(props, style = {}) {
  let result = {};

  const keys = Object.keys(props);

  for (const key of keys) {
    let value = props[key];

    if (typeof value === 'number' && key === 'delay') {
      value = numToMs(value);
    }

    if (typeof value === 'number' && key !== 'opacity') {
      value = numToPx(value);
    }

    if (typeof value === 'number' && key === 'opacity') {
      value = `${value * 100}%`;
    }

    result[`--${key}`] = value;
  }

  return { ...result, ...style };
}

/**
 * Concatenate classNames together
 */
export function classes(...classes) {
  return classes.filter(Boolean).join(' ');
}
````

## File: app/utils/three.js
````javascript
import { Cache, TextureLoader } from 'three';
import { DRACOLoader, GLTFLoader } from 'three-stdlib';

// Enable caching for all loaders
Cache.enabled = true;

const dracoLoader = new DRACOLoader();
const gltfLoader = new GLTFLoader();
dracoLoader.setDecoderPath('/draco/');
gltfLoader.setDRACOLoader(dracoLoader);

/**
 * GLTF model loader configured with draco decoder
 */
export const modelLoader = gltfLoader;
export const textureLoader = new TextureLoader();

/**
 * Clean up a scene's materials and geometry
 */
export const cleanScene = scene => {
  scene?.traverse(object => {
    if (!object.isMesh) return;

    object.geometry.dispose();

    if (object.material.isMaterial) {
      cleanMaterial(object.material);
    } else {
      for (const material of object.material) {
        cleanMaterial(material);
      }
    }
  });
};

/**
 * Clean up and dispose of a material
 */
export const cleanMaterial = material => {
  material.dispose();

  for (const key of Object.keys(material)) {
    const value = material[key];
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose();

      // Close GLTF bitmap textures
      value.source?.data?.close?.();
    }
  }
};

/**
 * Clean up and dispose of a renderer
 */
export const cleanRenderer = renderer => {
  renderer.dispose();
  renderer = null;
};

/**
 * Clean up lights by removing them from their parent
 */
export const removeLights = lights => {
  for (const light of lights) {
    light.parent.remove(light);
  }
};

/**
 * Get child by name
 */
export const getChild = (name, object) => {
  let node;

  object.traverse(child => {
    if (child.name === name) {
      node = child;
    }
  });

  return node;
};
````

## File: app/utils/throttle.js
````javascript
export function throttle(func, timeFrame) {
  let lastTime = 0;

  return function (...args) {
    const now = new Date();

    if (now - lastTime >= timeFrame) {
      func(...args);
      lastTime = now;
    }
  };
}
````

## File: app/reset.module.css
````css
@layer base {
  :global(:root) {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  :global(:where(html, body)) {
    min-height: 100%;
    width: 100%;
  }

  :global(:where(*, *::before, *::after)) {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
  }

  :global(:where(input, textarea, select, button)) {
    font: inherit;
    color: inherit;
    border: 0;
    padding: 0;
    background-color: transparent;
    border-radius: 0;
    appearance: none;
  }

  :global(:where(button, a)) {
    touch-action: manipulation;
  }

  :global(:where(svg, img, picture, video, iframe, canvas)) {
    display: block;
  }

  :global(:any-link) {
    text-decoration: none;
  }

  :global(ul) {
    padding: 0;
  }
}
````

## File: app/root.module.css
````css
@layer layout {
  .container {
    width: 100%;
    position: relative;
    transition: opacity 0.4s var(--bezierFastoutSlowin);

    &[data-loading='true'] {
      opacity: 0;
    }
  }

  .skip {
    isolation: isolate;
    color: var(--background);
    z-index: var(--zIndex4);

    &:focus {
      padding: var(--spaceS) var(--spaceM);
      position: fixed;
      top: var(--spaceM);
      left: var(--spaceM);
      text-decoration: none;
      font-weight: var(--fontWeightMedium);
      line-height: 1;
      box-shadow: 0 0 0 4px var(--background), 0 0 0 8px var(--text);
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-color: var(--primary);
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 8px),
        calc(100% - 8px) 100%,
        0 100%
      );
      z-index: -1;
    }
  }
}
````

## File: docs/plans/2026-04-15-modular-portfolio.md
````markdown
# Modular Portfolio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the borrowed portfolio template into Zhuo (Prince) Niu's modular personal portfolio without changing the original visual design language.

**Architecture:** Move portfolio content into a project data layer, render project detail pages through a shared renderer, and generate homepage cards, metadata, and sitemap entries from the same source. Keep the existing Remix, Three.js, Framer Motion, CSS Modules, and project layout components.

**Tech Stack:** Remix 2, Vite, React 18, CSS Modules, Cloudflare Pages, Node test runner.

### Task 1: Project Data Contract

**Files:**
- Create: `app/data/project-content.js`
- Create: `tests/project-content.test.mjs`
- Modify: `package.json`

**Steps:**
1. Write Node tests proving every project has a unique slug, required metadata, a homepage preview, and at least one content section.
2. Run `npm test` and verify the tests fail because the data module does not exist.
3. Add the minimal project content module for Porsche Digital Interface, Posture Checker, Little Lemon, and a future-ready More Work entry.
4. Add a `test` script using `node --test`.
5. Run `npm test` and verify the tests pass.

### Task 2: Asset-Bound Project Data

**Files:**
- Create: `app/data/projects.js`

**Steps:**
1. Import existing image/model assets.
2. Attach asset references to each project without changing the design assets themselves.
3. Export helpers: `projects`, `featuredProjects`, `getProjectBySlug`, `getProjectUrl`.
4. Run `npm test`.

### Task 3: Generic Project Renderer

**Files:**
- Create: `app/routes/projects/project-case.jsx`
- Create: `app/routes/projects.$slug/route.jsx`

**Steps:**
1. Build a renderer using existing `ProjectContainer`, `ProjectBackground`, `ProjectHeader`, `ProjectImage`, `ProjectSection`, `ProjectTextRow`, and `Image` components.
2. Support section types needed by current work: `hero-image`, `text`, `image`, `image-grid`, `comparison-columns`, `gallery`, and `outcome`.
3. Keep all visual styling sourced from existing layout components or narrowly scoped renderer CSS if needed.
4. Add a dynamic route that returns 404 for unknown slugs.
5. Run route manifest/build verification.

### Task 4: Homepage From Project Data

**Files:**
- Modify: `app/routes/home/home.jsx`
- Modify: `app/routes/home/profile.jsx`

**Steps:**
1. Replace hardcoded project summaries with `featuredProjects`.
2. Keep current `ProjectSummary` component and model rendering.
3. Update profile alt text and copy without changing layout.
4. Run syntax/build verification.

### Task 5: Remove Borrowed Content Surface

**Files:**
- Delete or stop routing old project route folders.
- Modify: `app/layouts/navbar/nav-data.js`
- Modify: `public/sitemap.xml`
- Modify: `public/manifest.json`
- Modify: `public/humans.txt`
- Modify: `README.md`
- Modify: `package.json`
- Modify: `.gitignore`

**Steps:**
1. Remove old Volkihar, Smart Sparrow, Slice, and article surfaces from navigation/sitemap.
2. Keep `Articles` reserved as a future work page or remove it from navigation for now.
3. Replace Hamish metadata with Prince metadata.
4. Ignore macOS junk files and remove tracked junk files from the working tree.
5. Run verification.

### Task 6: Runtime Fixes and Validation

**Files:**
- Modify: `app/root.jsx`
- Modify: `app/utils/meta.js`
- Modify: `app/routes/contact/contact.jsx`

**Steps:**
1. Fix canonical URL generation.
2. Make social metadata robust when optional handles are missing.
3. Improve contact action failure handling while preserving the existing form design.
4. Run `npm test`.
5. Run build/lint checks with a Node version compatible with the project, or document the blocker precisely.
````

## File: docs/plans/2026-05-19-knowledgeos-case-copy-v1.md
````markdown
# KnowledgeOS Case Study Copy v1

> Draft content for `/projects/knowledgeos`. This is copy-first and implementation-ready, but not yet wired into `app/data/project-content.js`.

---

## Project Metadata

**Slug:** `knowledgeos`

**Title:** `KnowledgeOS`

**Long title / internal positioning:** `KnowledgeOS — Agent-Maintained Personal Knowledge System`

**Description:**

A local-first personal knowledge operating system maintained by AI agents — turning scattered conversations, project updates, research, and decisions into structured Markdown knowledge that can be searched, reviewed, audited, and reused.

**Roles:**

- AI System Design
- Knowledge Architecture
- Agent Workflow Design
- Local-First Tools
- Automation
- Personal Infrastructure

**Summary title:** `KnowledgeOS`

**Summary description:**

An agent-maintained personal knowledge system built on Markdown, Obsidian, Hermes Agent, cron workflows, and Git backup — designed to turn daily conversations, project updates, research, and decisions into durable long-term context.

**Summary model alt:**

KnowledgeOS system architecture and Markdown knowledge vault preview.

**Quick facts:**

- Role: Designer-Builder / System Architect
- Methods: Information architecture, agent workflow design, automation, audit loops
- Stack: Markdown, Obsidian, Hermes Agent, Python, Cron, Git
- Outcome: Live personal knowledge system with automated capture, review, audit, and backup

---

## Section 1 — Hero Image

**Type:** `hero-image`

**Image:** `knowledgeosArchitecture` or `knowledgeosSystemCard`

**Alt:**

KnowledgeOS architecture diagram showing inputs, agent maintenance layer, Markdown vault, and review outputs.

---

## Section 2 — Overview

**Type:** `text`

**Heading:** `Overview`

**Body:**

KnowledgeOS is a local-first personal knowledge operating system I designed and built to solve a recurring scaling problem in my own work: important context was being created every day through AI conversations, project updates, research sessions, and product decisions, but most of it disappeared after the session ended.

Instead of treating the knowledge base as a place where I manually file notes, I designed KnowledgeOS as an agent-maintained system. The user focuses on thinking, building, and deciding; the agent handles the maintenance layer — classifying useful information, deduplicating repeated ideas, updating project memory, synthesizing weekly patterns, auditing structure health, and backing up the vault over time.

The system is intentionally simple at the storage layer. Markdown remains the source of truth, readable by Obsidian, VS Code, Git, and Hermes Agent. The sophistication lives in the rules, workflows, and review loops that keep the knowledge useful after it has been captured.

---

## Section 3 — Problem Context

**Type:** `text`

**Heading:** `The Problem: Knowledge Maintenance, Not Knowledge Storage`

**Body:**

AI tools make it easier to generate ideas, plans, code, research summaries, and decisions. But they also create a new failure mode: valuable context gets scattered across chat threads, local files, project notes, browser tabs, and memory systems that were not designed to preserve structure over time.

Traditional note-taking tools mostly solve storage. They give users a place to put information, but they still depend on the user to decide what matters, where it belongs, when it should be merged, and how old notes should update when the truth changes. That maintenance work is exactly what breaks under speed.

The design challenge was to build a system where AI does not just generate more text. It maintains the knowledge layer: deciding what deserves to persist, connecting it to the right long-term context, and periodically rewriting scattered updates into current judgment.

---

## Section 4 — Design Principles

**Type:** `text`

**Heading:** `Design Principles`

**Body:**

The first principle was agent-maintained, not user-maintained. KnowledgeOS should not ask me to manually sort every useful thought. Hermes Agent follows capture rules to decide whether something should be ignored, appended to an existing note, turned into project memory, or preserved as a longer-term pattern.

The second principle was Markdown as source of truth. I avoided databases, proprietary dashboards, and premature vector infrastructure because the system needed to stay inspectable, portable, and resilient. Every durable piece of knowledge lives in a local file that can be read by humans and edited by agents.

The third principle was save less, maintain better. KnowledgeOS does not preserve raw transcript dumps. A note has to reduce future repeated explanation, support a project, improve a decision, become career material, capture a reusable workflow, or clarify a long-term pattern. The system is designed to protect attention, not archive everything.

The final principle was current judgment over passive archive. Core pages maintain a current synthesis, an evidence timeline, and related links. The goal is not only to remember what happened, but to keep the latest useful understanding easy to retrieve.

---

## Section 5 — Process Timeline

**Type:** `timeline`

**Heading:** `From Notes to Maintained Knowledge`

**Body:**

KnowledgeOS evolved from a simple local vault into a running agent-maintained knowledge system through a sequence of architecture, rule design, automation, and operational hardening decisions.

**Items:**

1. **Knowledge Audit**
   - Identified repeated context loss across AI conversations, projects, research, career material, and product decisions.

2. **Information Architecture**
   - Designed a stable vault structure for projects, AI workflows, product ideas, UX/HFE, career, trading, learning, research, and reviews.

3. **Capture Protocol**
   - Defined rules for what should be saved, ignored, merged, anonymized, or turned into long-term project memory.

4. **Agent Automation**
   - Connected Hermes Agent to daily capture, weekly synthesis, maintenance audit, and backup workflows.

5. **Compiled Knowledge Layer**
   - Added source-backed wiki pages, entity relations, current judgments, evidence timelines, and research synthesis pages.

6. **Operational Hardening**
   - Added Git backup, cron verification, broken-link checks, audit checklists, and generated weekly HTML review artifacts.

---

## Section 6 — System Architecture

**Type:** `image`

**Image:** `knowledgeosArchitecture`

**Heading:** `System Architecture: Local Source of Truth, Agent Maintenance Layer`

**Alt:**

KnowledgeOS system architecture diagram with inputs, agent maintenance layer, Markdown vault, and derived outputs.

**Body:**

KnowledgeOS separates the system into four layers. Inputs come from real work: Hermes conversations, project updates, research sources, learning notes, career material, and product ideas. The agent maintenance layer applies capture rules, privacy filtering, classification, deduplication, synthesis, and audits.

The knowledge layer remains local and legible: a Markdown vault organized around projects, AI workflows, product ideas, research wiki pages, and review logs. Derived outputs — Obsidian views, weekly HTML artifacts, resume bullets, portfolio material, and Git backups — are generated from that source of truth rather than becoming separate knowledge silos.

---

## Section 7 — Agent Workflow Design

**Type:** `image`

**Image:** `knowledgeosVaultStructure` or `knowledgeosWorkflow`

**Heading:** `Designing the Agent Workflow`

**Alt:**

KnowledgeOS vault structure and agent workflow for evaluating, classifying, updating, and reviewing knowledge.

**Body:**

The core workflow starts before anything is written. When a conversation or task produces potentially reusable knowledge, the agent first evaluates whether it has long-term value. If it does, the agent checks privacy boundaries, searches for related existing notes, and decides whether to update a current page or create a new record.

This prevents the vault from becoming a transcript dump. New project progress updates existing project memory. Product strategy updates the relevant product idea. Stable preferences belong in lightweight agent memory, while structured long-term knowledge goes into KnowledgeOS. Weekly synthesis and maintenance audits then keep the system from drifting as the vault grows.

---

## Section 8 — Compiled Truth Layer

**Type:** `image`

**Image:** `knowledgeosCompiledTruth`

**Heading:** `From Saved Notes to Maintained Judgment`

**Alt:**

A sanitized KnowledgeOS project memory page showing current judgment, evidence timeline, and relations.

**Body:**

One of the most important shifts was moving from saved knowledge to maintained judgment. Instead of letting project pages become append-only logs, core pages use a lightweight schema: current judgment, evidence timeline, and relations. This gives the agent a stable place to rewrite the latest synthesis while preserving the evidence trail behind it.

For example, a project page can hold the current strategic read, the dated events that support it, links to related workflows or research, and the next action. That structure makes the knowledge more useful to future AI sessions because the agent can retrieve the current state quickly instead of re-reading every historical note.

---

## Section 9 — Review and Audit Loop

**Type:** `image`

**Image:** `knowledgeosWeeklyReview`

**Heading:** `Review Loops as Product Infrastructure`

**Alt:**

KnowledgeOS weekly review or maintenance audit artifact showing automated synthesis and structure checks.

**Body:**

KnowledgeOS uses review loops to keep the system alive. Daily capture turns high-value events into lightweight records. Weekly review synthesizes patterns across projects, decisions, learning, and career material. Maintenance audit checks structural health — broken links, vague placeholders, source coverage, backup status, and whether the system is drifting away from its rules.

This turned the knowledge base into operational infrastructure. The system does not only remember; it periodically checks whether its own memory is still organized, connected, and useful.

---

## Section 10 — Evidence Snapshot

**Type:** `metrics`

**Heading:** `Evidence Snapshot`

**Body:**

KnowledgeOS is a live personal system, so the clearest evidence is operational: the vault has structure, links resolve, automated workflows run, and the knowledge layer is backed up as a recoverable local asset.

**Metrics:**

- `100+` — Markdown knowledge files
- `450+` — Internal wikilinks
- `0` — Broken links at latest audit
- `4` — Scheduled maintenance workflows
- `Git-backed` — Local-first recovery layer

**Evidence:**

- **Knowledge quality:** Capture rules filter for reusable knowledge, project decisions, career material, workflows, and long-term patterns instead of preserving raw transcript dumps.
- **Operational reliability:** Daily capture, weekly review, maintenance audit, HTML artifact generation, and Git backup run through scheduled automation.
- **System evolution:** The system evolved from simple capture into source-backed compiled knowledge with current judgments, evidence timelines, relations, and retrieval benchmarks.

---

## Section 11 — Key System Decisions

**Type:** `text`

**Heading:** `Key System Decisions`

**Body:**

I chose Markdown over a database because the early risk was not query speed; it was ownership, inspectability, and maintenance. Markdown keeps the knowledge layer portable and human-readable while still being easy for agents to search, edit, and back up.

I designed rules before automation because automating an unclear system only creates structured mess. The capture protocol defines what deserves to persist, what should be ignored, what needs privacy filtering, and when new information should update an existing page instead of creating another note.

I separated Hermes memory from KnowledgeOS because they solve different problems. Agent memory stores short, stable facts that should influence every session. KnowledgeOS stores richer, structured, long-term knowledge that needs provenance, relationships, and review.

I also prioritized review loops over passive archive. The most valuable layer is not the folder tree; it is the recurring process that turns scattered updates into current judgment.

---

## Section 12 — Reflection

**Type:** `outcome`

**Image:** `knowledgeosArchitecture` or `knowledgeosSystemCard`

**Heading:** `Reflection`

**Body:**

KnowledgeOS changed the role of a personal knowledge system from a place where I store notes into an infrastructure layer that helps me maintain judgment. The hardest part of AI-native knowledge work is not generation — it is maintenance: deciding what deserves to persist, where it belongs, how it should update, and when old context should be rewritten into a clearer current understanding.

For me, this project sits at the intersection of human factors, product design, and agentic systems. It is not about adding AI to a note-taking tool. It is about redesigning the responsibility boundary between human and machine: the human thinks, builds, and decides; the agent maintains the context that makes those decisions compound.

---

## All Work Entry

Add to `all-work` selected work list:

```js
{
  title: 'KnowledgeOS',
  timeframe: 'May 2026 · Live System',
  description:
    'Agent-maintained personal knowledge system built on Markdown, Obsidian, Hermes Agent, cron workflows, and Git backup. Designed to turn daily conversations, project updates, and research into durable long-term context.',
  tags: ['AI Systems', 'Knowledge Architecture', 'Markdown', 'Automation'],
  href: '/projects/knowledgeos',
}
```

---

## Draft `portfolioProjects` Object Shape

```js
{
  slug: 'knowledgeos',
  title: 'KnowledgeOS',
  description:
    'A local-first personal knowledge operating system maintained by AI agents — turning scattered conversations, project updates, research, and decisions into structured Markdown knowledge that can be searched, reviewed, audited, and reused.',
  roles: [
    'AI System Design',
    'Knowledge Architecture',
    'Agent Workflow Design',
    'Local-First Tools',
    'Automation',
    'Personal Infrastructure',
  ],
  summary: {
    title: 'KnowledgeOS',
    description:
      'An agent-maintained personal knowledge system built on Markdown, Obsidian, Hermes Agent, cron workflows, and Git backup — designed to turn daily conversations, project updates, research, and decisions into durable long-term context.',
    modelType: 'laptop',
    modelAlt: 'KnowledgeOS system architecture and Markdown knowledge vault preview',
    quickFacts: [
      { label: 'Role', value: 'Designer-Builder / System Architect' },
      { label: 'Methods', value: 'Information architecture, agent workflow design, automation, audit loops' },
      { label: 'Stack', value: 'Markdown, Obsidian, Hermes Agent, Python, Cron, Git' },
      { label: 'Outcome', value: 'Live system with automated capture, review, audit, and backup' },
    ],
  },
  sections: [
    // Use the section copy above.
  ],
}
```

---

## Privacy Review Notes

Before creating screenshots or diagrams from live KnowledgeOS content:

- Prefer diagrams and sanitized crops over full-screen vault screenshots.
- Avoid showing personal psychology notes, trading notes, VPS details, repo/private path details, Telegram IDs, or private career material.
- Use `/Users/prince/KnowledgeOS/02-projects/knowledgeos.md` as the safest page source, but crop it to section headings and non-sensitive public claims.
- Use rounded public metrics (`100+`, `450+`) instead of exact constantly-changing numbers unless the exact audit date is shown.

---

## Current Open Decisions

1. Whether the hero image should be a clean architecture diagram or a more productized system card.
2. Whether to add KnowledgeOS to homepage featured after v1, or keep it only in All Work.
3. Whether to use real screenshots, fully synthetic mockups, or a hybrid of sanitized screenshots and diagrams.

Recommended defaults:

- Hero image: architecture diagram.
- Initial placement: All Work only.
- Visual approach: hybrid, with one architecture diagram and sanitized real crops.
````

## File: docs/plans/2026-05-19-knowledgeos-portfolio-case.md
````markdown
# KnowledgeOS Portfolio Case Study Implementation Plan

> **For Hermes:** Implement this plan in phases. Do not deploy before local content/visual QA. Keep KnowledgeOS positioned as a system/product design case study, not as a generic Obsidian vault, RAG demo, or SaaS landing page.

**Goal:** Add a polished `/projects/knowledgeos` case study to Prince's portfolio that presents KnowledgeOS as an agent-maintained, local-first personal knowledge operating system.

**Architecture:** Reuse the existing Remix portfolio project and the current generic project-case renderer. Add KnowledgeOS content through `app/data/project-content.js`, wire visual assets through `app/data/projects.js`, and integrate the project into `All Work` first. Only add it to homepage `featuredProjectSlugs` after the visual assets are strong enough.

**Tech Stack:** Remix 2, React, Vite, Cloudflare Pages, local image assets, Markdown/Obsidian/Hermes/Python/Cron/Git as the case-study subject matter.

---

## Strategic Positioning

### Recommended title

**KnowledgeOS — Agent-Maintained Personal Knowledge System**

### One-line framing

A local-first, Markdown-based personal knowledge system where AI agents classify, deduplicate, synthesize, audit, and maintain long-term project, career, learning, and decision context.

### What this case should prove

- Prince can design AI-native systems, not just UI screens.
- Prince understands information architecture, workflow design, automation, and human-AI collaboration.
- Prince can turn vague personal pain into running infrastructure.
- Prince can explain product/technical tradeoffs clearly.

### What this case should avoid

- Do not frame it as just an Obsidian vault.
- Do not frame it as a Notion replacement.
- Do not frame it as a generic RAG/vector-search demo.
- Do not over-productize it into a SaaS pitch.
- Do not expose private KnowledgeOS contents in screenshots.

---

## Source Material

Primary local sources:

- `/Users/prince/KnowledgeOS/02-projects/knowledgeos.md`
- `/Users/prince/KnowledgeOS/04-product-ideas/personal-knowledge-os.md`
- `/Users/prince/KnowledgeOS/04-product-ideas/productization-and-ip-strategy.md`
- `/Users/prince/KnowledgeOS/90-reviews/audits/`
- `~/.hermes/skills/note-taking/knowledgeos/SKILL.md`

Portfolio implementation sources:

- `/Users/prince/Desktop/portfolio/app/data/project-content.js`
- `/Users/prince/Desktop/portfolio/app/data/projects.js`
- `/Users/prince/Desktop/portfolio/app/routes/projects/project-case.jsx`
- `/Users/prince/Desktop/portfolio/app/routes/home/home.jsx`
- `/Users/prince/Desktop/portfolio/app/assets/`

Current metrics from latest audit/context:

- 100+ Markdown knowledge files; latest observed: 116 `.md` files.
- 450+ internal wikilinks; latest observed: 459 wikilinks.
- 0 broken Obsidian wikilinks at latest audit.
- 4 active scheduled workflows: daily capture, weekly review, weekly maintenance audit, Git backup.
- Local-first Git-backed backup loop.
- Source-backed compiled wiki layer.
- Daily / weekly / audit review loop.

Use rounded public-safe metrics in the page to avoid staleness:

- `100+` Markdown files
- `450+` internal links
- `0` broken links at latest audit
- `4` scheduled workflows

---

## Case Study Information Architecture

### 1. Hero

**Title:** KnowledgeOS

**Description:** A local-first personal knowledge operating system maintained by AI agents — turning scattered conversations, project updates, research, and decisions into structured Markdown knowledge that can be searched, reviewed, audited, and reused.

**Roles:**

- AI System Design
- Knowledge Architecture
- Agent Workflow Design
- Local-First Tools
- Automation
- Personal Infrastructure

**Hero image:** `knowledgeos-system-card` or `knowledgeos-architecture`.

### 2. Overview

Explain KnowledgeOS as a live system, not a prototype. Core angle: AI conversations and fast project work create valuable context, but without maintenance, that context disappears. KnowledgeOS makes the maintenance layer explicit.

### 3. Problem Context

Recommended heading: **The Problem: Knowledge Maintenance, Not Knowledge Storage**

Cover:

- Context fragmentation across AI chats, project updates, research, career material, and product decisions.
- Manual note upkeep does not scale.
- Ordinary AI memory is too small and too compressed for structured long-term knowledge.
- The real design problem is deciding what deserves to persist and how it stays useful.

### 4. Design Principles

Recommended heading: **Design Principles**

Include:

- Agent-maintained, not user-maintained.
- Markdown as source of truth.
- Save less, maintain better.
- Current judgment over raw archive.
- Automation with auditability.

### 5. Process Timeline

Use existing `timeline` section type.

Items:

1. Knowledge Audit — identified recurring context loss across projects, AI conversations, learning notes, and career material.
2. Information Architecture — designed a stable vault structure for projects, AI workflows, product ideas, UX/HFE, career, trading, learning, research, and reviews.
3. Capture Protocol — defined what should be saved, ignored, merged, anonymized, or turned into long-term project memory.
4. Agent Automation — connected Hermes Agent with daily capture, weekly synthesis, maintenance audit, and backup workflows.
5. Compiled Knowledge Layer — added source-backed wiki pages, entity relations, current judgments, and evidence timelines.
6. Operational Hardening — added Git backup, cron verification, broken-link checks, audit checklists, and HTML review generation.

### 6. System Architecture

Recommended heading: **System Architecture: Local Source of Truth, Agent Maintenance Layer**

Architecture diagram content:

```text
Inputs
- Hermes / Telegram conversations
- Project updates
- Research sources
- Learning notes
- Career material
- Product ideas

Agent Maintenance Layer
- Capture protocol
- Memory rules
- Deduplication
- Classification
- Privacy filtering
- Weekly synthesis
- Maintenance audit

Knowledge Layer
- Markdown vault
- Project memory
- AI workflows
- Product ideas
- Research wiki
- Reviews / audits

Derived Outputs
- Obsidian graph
- Weekly HTML artifacts
- Portfolio material
- Resume bullets
- Future starter vault
- Git backup
```

### 7. Agent Workflow Design

Recommended heading: **Designing the Agent Workflow**

Workflow:

```text
User says something valuable
→ Agent evaluates long-term value
→ Checks privacy and sensitivity
→ Searches existing notes
→ Updates an existing page or creates a new note
→ Adds review/log references
→ Weekly review synthesizes patterns
→ Maintenance audit checks structure health
```

### 8. Evidence / Metrics Snapshot

Use existing `metrics` section type.

Metrics:

- `100+` Markdown knowledge files
- `450+` internal wikilinks
- `0` broken links at latest audit
- `4` scheduled workflows
- `Git-backed` local recovery layer

Evidence items:

- Knowledge quality — capture protocol filters for reusable knowledge, project decisions, career material, workflows, and long-term patterns instead of saving raw transcript dumps.
- Operational reliability — daily capture, weekly review, maintenance audit, HTML artifact generation, and Git backup run through scheduled automation.
- System evolution — evolved from simple capture into source-backed compiled knowledge with current judgments, evidence timelines, relations, and retrieval benchmarks.

### 9. Visual Artifacts

Required for v1:

1. Architecture diagram — highest priority.
2. Vault structure screenshot — file tree or Obsidian view, sanitized.
3. Compiled Truth / project memory screenshot — crop of `knowledgeos.md` structure, sanitized.
4. Weekly review or audit artifact screenshot — showing review loop without private details.

Optional later:

- Homepage summary tile.
- Animated system loop graphic.
- Starter vault mockup.

### 10. Key System Decisions

Recommended heading: **Key System Decisions**

Decisions:

- Markdown over database.
- Rules before automation.
- Review loop over passive archive.
- Hermes memory and KnowledgeOS separation.

### 11. Reflection

Close on the lesson:

KnowledgeOS changed the role of a personal knowledge system from a place where notes are stored into an infrastructure layer that maintains judgment. The hard part of AI-native knowledge work is not generation; it is maintenance, boundaries, trust, and review loops.

---

## Implementation Scope

### v1 target

Add a complete project case page and All Work entry, but do not put it on homepage featured yet.

### v1 route

- `/projects/knowledgeos`

### v1 files to create/modify

Create:

- `docs/plans/2026-05-19-knowledgeos-portfolio-case.md`
- `docs/plans/2026-05-19-knowledgeos-case-copy-v1.md`
- New assets in `app/assets/`:
  - `knowledgeos-architecture.webp`
  - `knowledgeos-architecture-placeholder.jpg`
  - `knowledgeos-vault-structure.webp`
  - `knowledgeos-vault-structure-placeholder.jpg`
  - `knowledgeos-compiled-truth.webp`
  - `knowledgeos-compiled-truth-placeholder.jpg`
  - `knowledgeos-weekly-review.webp`
  - `knowledgeos-weekly-review-placeholder.jpg`

Modify later:

- `app/data/project-content.js`
- `app/data/projects.js`

Do not modify yet unless visual assets and copy are ready.

---

## Execution Phases

### Phase 0: Production domain sanity check

**Objective:** Confirm the main portfolio domain is healthy before final deploy.

Current finding:

- `https://princeniu.com` returns Cloudflare Error 1000 / 403.
- `https://personal-web-3g9.pages.dev` returns 200 and shows the portfolio.

Tasks:

1. Check DNS records for `princeniu.com` and `www.princeniu.com`.
2. Check Cloudflare Pages custom domain binding.
3. Restore apex and www to `personal-web-3g9.pages.dev`.
4. Verify homepage and project routes on `princeniu.com`.

This can run after content implementation; it does not block local case work.

### Phase 1: Content draft

**Objective:** Produce complete page copy and data-shape draft before code edits.

Files:

- Create: `docs/plans/2026-05-19-knowledgeos-case-copy-v1.md`

Steps:

1. Draft project metadata: title, description, roles, summary quick facts.
2. Draft all case sections in English to match current portfolio tone.
3. Draft All Work card copy.
4. Keep metrics public-safe and rounded.
5. Review for privacy and overclaiming.

Verification:

- File exists.
- Section order matches this implementation plan.
- Copy avoids private details and does not frame the project as a generic notes app.

### Phase 2: Visual asset production

**Objective:** Create or capture sanitized visual artifacts.

Steps:

1. Generate a dark minimal architecture diagram matching portfolio style.
2. Capture/sanitize vault structure screenshot.
3. Capture/sanitize Compiled Truth page screenshot.
4. Capture/sanitize weekly review or audit artifact screenshot.
5. Convert to `.webp` and create lightweight placeholders.
6. Verify dimensions and file sizes.

Verification:

- All expected assets exist in `app/assets/`.
- No private information visible.
- Images are readable in dark theme.

### Phase 3: Implement case page

**Objective:** Wire KnowledgeOS into the portfolio project data.

Files:

- Modify: `app/data/project-content.js`
- Modify: `app/data/projects.js`

Steps:

1. Import KnowledgeOS assets in `projects.js`.
2. Add image assets to `imageAssets`.
3. Add KnowledgeOS project object in `project-content.js`.
4. Add `/projects/knowledgeos` to All Work `Selected Work`.
5. Do not add to `featuredProjectSlugs` in v1.

Verification commands:

```bash
cd /Users/prince/Desktop/portfolio
export NVM_DIR="$HOME/.nvm"; . "$NVM_DIR/nvm.sh"; nvm use 20.19.2
npm test
npx eslint app tests --ext .js,.jsx,.mjs
npm run build
```

Expected:

- tests pass
- ESLint has 0 errors
- build succeeds or, if sandbox EAGAIN occurs, use `/tmp` build workaround from portfolio skill

### Phase 4: Local QA

**Objective:** Verify the new page visually before deployment.

Steps:

1. Start local preview.
2. Check `/projects/knowledgeos`.
3. Check `/projects/all-work`.
4. Check desktop and mobile viewport.
5. Check image loading and carousel sections if used.
6. Ask Prince for visual/content confirmation before deploy.

Do not deploy until Prince confirms local QA.

### Phase 5: Deploy

**Objective:** Deploy after approval.

Commands:

```bash
cd /Users/prince/Desktop/portfolio
npm run build
npx wrangler pages deploy build/client --project-name personal-web --branch main --commit-dirty=true
```

Verification:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://personal-web-3g9.pages.dev/projects/knowledgeos
curl -s -o /dev/null -w '%{http_code}\n' https://personal-web-3g9.pages.dev/projects/all-work
```

If domain is fixed:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://princeniu.com/projects/knowledgeos
```

---

## Privacy QA Checklist

Before using any screenshot:

- [ ] No Telegram IDs.
- [ ] No VPS hostnames or secrets.
- [ ] No GitHub tokens, env vars, API keys, or file credentials.
- [ ] No private psychological notes.
- [ ] No trading account details.
- [ ] No private repository names that should remain private.
- [ ] No personal emails beyond already-public portfolio email.
- [ ] No raw conversation transcript dumps.

---

## Content QA Checklist

- [ ] The case reads like system/product design, not a notes app showcase.
- [ ] The first 10 seconds explain the problem and why it matters.
- [ ] Metrics are accurate and public-safe.
- [ ] The case shows tradeoffs, not just features.
- [ ] The reflection strengthens Prince's designer-builder / AI-HFE positioning.
- [ ] It fits the current dark editorial portfolio style.

---

## Future Phase: Homepage Featured

Only add KnowledgeOS to homepage after v1 visual QA.

If added, modify:

```js
export const featuredProjectSlugs = [
  'trekassist',
  'etongue-sensory-platform',
  'knowledgeos',
  'porsche-digital-interface',
  'sayit',
  'posture-checker',
];
```

But this is not part of v1 unless Prince explicitly approves.
````

## File: functions/[[path]].js
````javascript
import { createPagesFunctionHandler } from '@remix-run/cloudflare-pages';

import * as build from '../build/server';

export const onRequest = createPagesFunctionHandler({ build });
````

## File: public/_headers
````
/favicon.ico
  Cache-Control: public, max-age=3600, s-maxage=3600
/favicon.svg
  Cache-Control: public, max-age=3600, s-maxage=3600
/icon-256.png
  Cache-Control: public, max-age=3600, s-maxage=3600
/icon-512.png
  Cache-Control: public, max-age=3600, s-maxage=3600
/shortcut.png
  Cache-Control: public, max-age=3600, s-maxage=3600
/*.css
  Cache-Control: public, max-age=31536000, immutable
/*.woff2
  Cache-Control: public, max-age=31536000, immutable
/*.glb
  Cache-Control: public, max-age=31536000, immutable
/*.svg
  Cache-Control: public, max-age=31536000, immutable
/*.jpg
  Cache-Control: public, max-age=31536000, immutable
/*.png
  Cache-Control: public, max-age=31536000, immutable
/*.js
  Cache-Control: public, max-age=31536000, immutable
/*.wasm
  Cache-Control: public, max-age=31536000, immutable
https://:project.pages.dev/*
  X-Robots-Tag: noindex
````

## File: scripts/dev.cjs
````javascript
const config = require('../app/config.json');

// Pop a lil' monogram in the terminal
console.info(config.ascii);
````

## File: scripts/draco.cjs
````javascript
const fs = require('fs-extra');

const src = 'node_modules/three/examples/jsm/libs/draco/gltf';
const output = 'public/draco';

// Copy draco decoder from three.js into the public directory
fs.copy(`${src}/draco_decoder.wasm`, `${output}/draco_decoder.wasm`, err => {
  if (err) return console.error(err);
});

fs.copy(`${src}/draco_wasm_wrapper.js`, `${output}/draco_wasm_wrapper.js`, err => {
  if (err) return console.error(err);
});
````

## File: scripts/generate-sitemap.cjs
````javascript
const fs = require('fs');
const path = require('path');
const config = require('../app/config.json');

const SITE_URL = config.url;
const today = new Date().toISOString().split('T')[0];

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'monthly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/uses', priority: '0.5', changefreq: 'monthly' },
];

// Slugs intentionally excluded from the public sitemap.
const SITEMAP_EXCLUDED_SLUGS = new Set(['sayit']);

function readProjectSlugs() {
  const projectsDir = path.resolve(__dirname, '../app/data/content/en/projects');
  const slugs = [];
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.js'));
  const re = /slug:\s*['"]([^'"]+)['"]/g;

  for (const file of files) {
    const content = fs.readFileSync(path.join(projectsDir, file), 'utf8');
    let match;
    while ((match = re.exec(content)) !== null) {
      slugs.push(match[1]);
    }
  }
  return slugs;
}

const localizeRoute = route => ({
  ...route,
  path: route.path === '/' ? '/zh' : `/zh${route.path}`,
});

const projectRoutes = readProjectSlugs()
  .filter(slug => !SITEMAP_EXCLUDED_SLUGS.has(slug))
  .map(slug => ({
    path: `/projects/${slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

const localizedStaticRoutes = staticRoutes.map(localizeRoute);
const localizedProjectRoutes = projectRoutes.map(localizeRoute);

const allRoutes = [
  ...staticRoutes,
  ...localizedStaticRoutes,
  ...projectRoutes,
  ...localizedProjectRoutes,
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    ({ path, priority, changefreq }) =>
      `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.xml'), xml);
console.info(`Generated sitemap with ${allRoutes.length} URLs`);
````

## File: scripts/optimize-images.cjs
````javascript
#!/usr/bin/env node
// Compress every JPG/PNG under app/assets/ in place.
// - JPG: re-encode at quality 82 with mozjpeg
// - PNG: palette compression via sharp (lossless-ish)
// - Cap "-large" variants at 1920px wide so they stay reasonable
// Idempotent enough: re-running just produces marginally smaller files.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ASSETS_DIR = path.resolve(__dirname, '../app/assets');
const MAX_LARGE_WIDTH = 1920;
const JPG_QUALITY = 82;

const files = fs.readdirSync(ASSETS_DIR).filter(f => /\.(jpe?g|png)$/i.test(f));

let totalSavedBytes = 0;
let processed = 0;

(async () => {
  for (const file of files) {
    const fullPath = path.join(ASSETS_DIR, file);
    const stat = fs.statSync(fullPath);
    if (!stat.isFile()) continue;
    const originalSize = stat.size;

    const isLarge = /-large\.(jpe?g|png)$/i.test(file);
    const isPlaceholder = /-placeholder\.(jpe?g|png)$/i.test(file);
    const isPng = /\.png$/i.test(file);

    // Placeholders are already tiny LQIPs; skip to avoid re-blurring.
    if (isPlaceholder) continue;

    try {
      const tmpPath = fullPath + '.tmp';
      const pipeline = sharp(fullPath, { failOn: 'none' });
      const meta = await pipeline.metadata();
      let pipe = pipeline;

      if (isLarge && meta.width && meta.width > MAX_LARGE_WIDTH) {
        pipe = pipe.resize({ width: MAX_LARGE_WIDTH, withoutEnlargement: true });
      }

      if (isPng) {
        pipe = pipe.png({ compressionLevel: 9, palette: true });
      } else {
        pipe = pipe.jpeg({ quality: JPG_QUALITY, mozjpeg: true });
      }

      await pipe.toFile(tmpPath);
      const newSize = fs.statSync(tmpPath).size;

      if (newSize < originalSize) {
        fs.renameSync(tmpPath, fullPath);
        const saved = originalSize - newSize;
        totalSavedBytes += saved;
        processed++;
        console.info(
          `${file}: ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB (-${(
            (saved / originalSize) *
            100
          ).toFixed(1)}%)`
        );
      } else {
        fs.unlinkSync(tmpPath);
      }
    } catch (err) {
      console.error(`failed: ${file} (${err.message})`);
    }
  }

  console.info(
    `\nDone. ${processed} files optimized, total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(2)} MB.`
  );
})();
````

## File: .dev.vars.example
````
# Rename this file from .dev.vars.example to .dev.vars and paste in your credentials

ENVIRONMENT=development

# The email address to send emails to
EMAIL=you@website.com

# The email address to send emails from (this needs to be set up in the AWS SES dashboard)
FROM_EMAIL=portfolio-site@website.com

# Credentials from your AWS account
AWS_ACCESS_KEY_ID=PASTE_YOUR_ACCESS_KEY
AWS_SECRET_ACCESS_KEY=PASTE_YOUR_SECRET_KEY

# This is a random string used for the session cookie for saving the preferred theme
SESSION_SECRET=KEEP_IT_SECRET_KEEP_IT_SAFE
````

## File: .eslintrc.cjs
````javascript
/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
  },

  // Base config
  extends: ['eslint:recommended', 'plugin:storybook/recommended'],

  rules: {
    semi: 'error',
    'no-unused-vars': 'warn',
  },

  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/display-name': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
        formComponents: ['Form'],
        linkComponents: [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' },
        ],
        'import/resolver': {
          typescript: {},
        },
      },
    },
  ],
};
````

## File: .node-version
````
20.19.2
````

## File: .npmrc
````
legacy-peer-deps=true
````

## File: .prettierrc
````
{
  "arrowParens": "avoid",
  "printWidth": 90,
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
````

## File: .unimportedrc.json
````json
{
  "entry": [
    "app/root.jsx",
    "app/routes/**/*.{js,jsx,mjs}",
    "app/components/**/*.stories.jsx",
    "scripts/*.cjs",
    "tests/*.test.mjs"
  ],
  "extensions": [".js", ".jsx", ".mjs", ".cjs"],
  "ignorePatterns": [
    "**/node_modules/**",
    "build/**",
    "public/**",
    ".storybook/**",
    "storybook-static/**"
  ],
  "ignoreUnresolved": [],
  "ignoreUnimported": [
    "app/components/**/*.stories.jsx"
  ]
}
````

## File: jsconfig.json
````json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./app/*"]
    }
  },
  "include": ["app", ".storybook/story-container.jsx"]
}
````

## File: postcss.config.cjs
````javascript
module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['app/global.module.css'],
    },
    'postcss-custom-media': {},
  },
};
````

## File: .storybook/manager.js
````javascript
import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Zhuo (Prince) Niu Components',
    brandUrl: 'https://princeniu.com',
  },
});
````

## File: app/components/carousel/carousel.module.css
````css
@layer components {
  .carousel {
    position: relative;
  }

  .content {
    position: relative;
    display: grid;
    align-items: center;
  }

  .imageWrapper {
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    cursor: grab;
    touch-action: none;

    &[data-dragging='true'] {
      cursor: grabbing;
    }
  }

  .canvasWrapper {
    position: relative;
    grid-column: 1;
    grid-row: 1;
    user-select: none;
    aspect-ratio: var(--aspectRatio);
    isolation: isolate;
  }

  .canvas {
    position: relative;
  }

  .fallbackImage {
    display: block;
    width: 100%;
  }

  .placeholder {
    grid-column: 1;
    grid-row: 1;
    width: 100%;
    transition: opacity 1s ease;
    opacity: 1;
    pointer-events: none;
    position: relative;
    z-index: var(--zIndex1);

    &[data-loaded='true'] {
      opacity: 0;
    }
  }

  .button {
    border: 0;
    margin: 0;
    background: none;
    width: 70px;
    aspect-ratio: 1 / 1;
    grid-area: 1 / 1;
    position: absolute;
    z-index: var(--zIndex3);
    cursor: pointer;
    display: grid;
    place-items: center;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: color-mix(in lab, var(--black) 48%, transparent);
      box-shadow: 0 0 0 1px color-mix(in lab, var(--white) 22%, transparent);
      transition-property: background, box-shadow;
      transition-duration: var(--durationM);
      transition-timing-function: var(--bezierFastoutSlowin);
      clip-path: polygon(
        0 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%
      );
    }

    &:hover::before {
      background: color-mix(in lab, var(--black) 66%, transparent);
      box-shadow: 0 0 0 1px color-mix(in lab, var(--white) 34%, transparent);
    }

    & svg {
      position: relative;
      left: var(--offset);
      fill: var(--white);
    }

    @media (--mediaMobile) {
      display: none;
    }

    &[data-prev='true'] {
      --offset: -2px;

      left: var(--spaceM);
    }

    &[data-next='true'] {
      --offset: 2px;

      right: var(--spaceM);
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: var(--spaceS);
  }

  .navButton {
    --navButtonSize: 10px;
    --buttonColor: color-mix(in lab, var(--text) 20%, transparent);

    background: none;
    border: 0;
    margin: 0;
    padding: var(--spaceM);
    cursor: pointer;

    &[aria-pressed='true'] {
      --buttonColor: var(--textBody);
    }

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: var(--navButtonSize);
      height: var(--navButtonSize);
      background: var(--buttonColor);
      transition-property: background, box-shadow;
      transition-duration: var(--durationL);
      transition-timing-function: var(--bezierFastoutSlowin);
    }
  }
}
````

## File: app/components/icon/icons.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <defs>
    <symbol id="send" width="24" height="24" viewBox="0 0 24 24">
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2 .01 7Z"/>
    </symbol>
    <symbol id="arrow-right" width="24" height="24" viewBox="0 0 24 24">
      <path d="m14.2 4.8 6.5 6.5.71.7-.7.7-6.5 6.5-1.42-1.4 4.8-4.8H3v-2h14.59l-4.8-4.8 1.42-1.4Z"/>
    </symbol>
    <symbol id="chevron-right" width="24" height="24" viewBox="0 0 24 24">
      <path d="m13.59 12-5.8-5.8 1.42-1.4 6.5 6.5.7.7-.7.7-6.5 6.5-1.42-1.4 5.8-5.8Z"/>
    </symbol>
    <symbol id="github" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.42 9.42 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5a10.03 10.03 0 0 0 3.9-16.57A10 10 0 0 0 12 2Z"/>
    </symbol>
    <symbol id="menu" width="24" height="24" viewBox="0 0 24 24">
      <path d="M22 6H2V4h20v2ZM2 13h16v-2H2v2Zm0 7h20v-2H2v2Z"/>
    </symbol>
    <symbol id="figma" width="24" height="24" viewBox="0 0 24 24">
      <path fill-rule="evenodd" d="M15 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-2 5.46A4 4 0 0 0 17.65 9a4.01 4.01 0 0 0 .18-5.83A4 4 0 0 0 15 2H9a4 4 0 0 0-2.65 7 4.01 4.01 0 0 0 0 6A3.98 3.98 0 0 0 5 18a4 4 0 1 0 8 0v-2.54ZM11 16H9a2 2 0 1 0 2 2v-2ZM9 8h2V4H9a2 2 0 1 0 0 4Zm0 2a2 2 0 1 0 0 4h2v-4H9Zm4-2V4h2a2 2 0 0 1 0 4h-2Z"/>
    </symbol>
    <symbol id="copy" width="24" height="24" viewBox="0 0 24 24">
      <path d="M3 2h12v4H7v10H3V2Zm6 20V8h12v11l-3 3H9Z"/>
    </symbol>
    <symbol id="error" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19.7 19H4.3L12 5.07 19.7 19ZM11.12 2.52l-9.39 17L2.61 21h18.78l.88-1.48-9.4-17h-1.75ZM11 14v-4h2v4h-2Zm0 3v-2h2v2h-2Z"/>
    </symbol>
    <symbol id="arrow-left" width="24" height="24" viewBox="0 0 24 24">
      <path d="m9.8 19.2-6.5-6.5-.71-.7.7-.7 6.5-6.5 1.42 1.4L6.4 11H21v2H6.41l4.8 4.8-1.42 1.4Z"/>
    </symbol>
    <symbol id="check" width="24" height="24" viewBox="0 0 24 24">
      <path d="m20.2 7.2-10 10-.7.71-.7-.7-5-5 1.4-1.42 4.3 4.3 9.3-9.3 1.4 1.42Z"/>
    </symbol>
    <symbol id="link" width="24" height="24" viewBox="0 0 24 24">
      <path d="M9 4 8 5v2h2V6h10v7H10v-2H8v3l1 1h12l1-1V5l-1-1H9Zm2 4H3L2 9v9l1 1h12l1-1v-2h-2v1H4v-7h10v2h2V9l-1-1h-4Z"/>
    </symbol>
    <symbol id="close" width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z"/>
    </symbol>
    <symbol id="pause" width="24" height="24" viewBox="0 0 24 24">
      <path d="M6 19h4V5H6v14Zm8-14v14h4V5h-4Z"/>
    </symbol>
    <symbol id="play" width="24" height="24" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7L8 5Z"/>
    </symbol>
    <symbol id="bluesky" width="24" height="24" viewBox="0 0 24 24">
      <path d="M6.34 3.78C8.63 5.51 11.09 9.01 12 10.9v4.96c0-.1-.04.02-.13.27-.47 1.4-2.32 6.83-6.54 2.49-2.22-2.29-1.19-4.58 2.86-5.27-2.32.4-4.92-.26-5.63-2.82C2.35 9.8 2 5.25 2 4.64c0-3.07 2.68-2.1 4.34-.86Zm11.32 0C15.37 5.51 12.91 9.01 12 10.9v4.96c0-.1.04.02.13.27.47 1.4 2.32 6.83 6.54 2.49 2.22-2.29 1.19-4.58-2.86-5.27 2.32.4 4.92-.26 5.63-2.82.21-.73.56-5.27.56-5.88 0-3.07-2.68-2.1-4.34-.86Z"/>
    </symbol>
    <symbol id="linkedin" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20.45 3H3.55A.55.55 0 0 0 3 3.55v16.9c0 .3.25.55.55.55h16.9a.55.55 0 0 0 .55-.55V3.55a.55.55 0 0 0-.55-.55ZM8.34 18.34H5.67V9.75h2.67v8.59ZM7 8.58a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.34 9.76h-2.67v-4.18c0-1 0-2.28-1.39-2.28s-1.6 1.09-1.6 2.21v4.25H10V9.75h2.56v1.17h.04a2.81 2.81 0 0 1 2.53-1.39c2.7 0 3.21 1.78 3.21 4.1v4.71Z"/>
    </symbol>
    <symbol id="resume" width="24" height="24" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm-1 7V3.5L18.5 9H13ZM8 13h8v2H8v-2Zm0 4h5v2H8v-2Z"/>
    </symbol>
  </defs>
</svg>
````

## File: app/components/icon/manifest.json
````json
{
  "send": {
    "width": 24,
    "height": 24
  },
  "arrow-right": {
    "width": 24,
    "height": 24
  },
  "chevron-right": {
    "width": 24,
    "height": 24
  },
  "github": {
    "width": 24,
    "height": 24
  },
  "menu": {
    "width": 24,
    "height": 24
  },
  "figma": {
    "width": 24,
    "height": 24
  },
  "copy": {
    "width": 24,
    "height": 24
  },
  "error": {
    "width": 24,
    "height": 24
  },
  "arrow-left": {
    "width": 24,
    "height": 24
  },
  "check": {
    "width": 24,
    "height": 24
  },
  "link": {
    "width": 24,
    "height": 24
  },
  "close": {
    "width": 24,
    "height": 24
  },
  "pause": {
    "width": 24,
    "height": 24
  },
  "play": {
    "width": 24,
    "height": 24
  },
  "bluesky": {
    "width": 24,
    "height": 24
  },
  "linkedin": {
    "width": 24,
    "height": 24
  },
  "resume": {
    "width": 24,
    "height": 24
  }
}
````

## File: app/components/model/model.stories.jsx
````javascript
import phoneTexture2Large from '~/assets/posture-tracker-large.jpg';
import phoneTexture2Placeholder from '~/assets/posture-tracker-placeholder.jpg';
import phoneTexture2 from '~/assets/posture-tracker.jpg';
import phoneTexture3Large from '~/assets/posture-progress-large.jpg';
import phoneTexture3Placeholder from '~/assets/posture-progress-placeholder.jpg';
import phoneTexture3 from '~/assets/posture-progress.jpg';
import phoneTextureLarge from '~/assets/posture-login-large.jpg';
import phoneTexturePlaceholder from '~/assets/posture-login-placeholder.jpg';
import phoneTexture from '~/assets/posture-login.jpg';
import laptopTexture from '~/assets/porsche-interface-home.jpg';
import laptopTextureLarge from '~/assets/porsche-interface-home-large.jpg';
import laptopTexturePlaceholder from '~/assets/porsche-interface-home-placeholder.jpg';
import { Model } from '~/components/model';
import { StoryContainer } from '../../../.storybook/story-container';
import { deviceModels } from './device-models';

export default {
  title: 'Model',
};

const modelStyle = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };

export const Phone = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 11.5 }}
      alt="Phone models"
      models={[
        {
          ...deviceModels.phone,
          position: { x: -0.6, y: 0.8, z: 0.1 },
          texture: {
            srcSet: `${phoneTexture} 375w, ${phoneTextureLarge} 750w`,
            placeholder: phoneTexturePlaceholder,
          },
        },
        {
          ...deviceModels.phone,
          position: { x: 0.6, y: -0.8, z: 0.4 },
          texture: {
            srcSet: `${phoneTexture2} 375w, ${phoneTexture2Large} 750w`,
            placeholder: phoneTexture2Placeholder,
          },
        },
        {
          ...deviceModels.phone,
          position: { x: 0.6, y: 0.8, z: 0.6 },
          texture: {
            srcSet: `${phoneTexture3} 375w, ${phoneTexture3Large} 750w`,
            placeholder: phoneTexture3Placeholder,
          },
        },
      ]}
    />
  </StoryContainer>
);

export const Laptop = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 8 }}
      alt="Laptop model"
      models={[
        {
          ...deviceModels.laptop,
          position: { x: 0, y: 0, z: 0 },
          texture: {
            srcSet: `${laptopTexture} 800w, ${laptopTextureLarge} 1920w`,
            placeholder: laptopTexturePlaceholder,
          },
        },
      ]}
    />
  </StoryContainer>
);
````

## File: app/components/monogram/monogram.jsx
````javascript
import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

const mainPath = 'M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z';
const accentPath = 'M55 8h7v28h-7V19L35 36h-8l28-25V8Z';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="52"
      height="32"
      viewBox="0 0 72 44"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d={mainPath} />
          <path d={accentPath} />
        </clipPath>
      </defs>
      <path className={styles.base} d={mainPath} />
      <path className={styles.accent} d={accentPath} />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
````

## File: app/components/monogram/monogram.module.css
````css
@layer components {
  .monogram {
    transition: fill var(--durationL) ease;
  }

  .base {
    fill: var(--textTitle);
    transition: fill var(--durationL) ease;
  }

  .accent {
    fill: var(--accent);
    transition: fill var(--durationL) ease;
  }

  .highlight {
    fill: var(--accent);
    opacity: 0;
    transform: scale3d(1, 0, 1);
    transform-origin: top;
    transition: opacity 0.1s ease var(--durationM);

    @media (--mediaUseMotion) {
      transition: transform var(--durationM) var(--bezierFastoutSlowin),
        opacity 0.1s ease var(--durationM);
    }

    :is(a:hover, .monogram:hover) & {
      opacity: 1;
      transform: scale3d(1, 1, 1);
      transform-origin: bottom;
      transition: opacity 0.1s ease;

      @media (--mediaUseMotion) {
        transition: transform var(--durationM) var(--bezierFastoutSlowin),
          opacity 0.1s ease;
      }
    }
  }
}
````

## File: app/components/text/text.stories.jsx
````javascript
import { Text } from '~/components/text';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Text',
};

export const Size = () => (
  <StoryContainer vertical>
    <Text size="xl">XLarge</Text>
    <Text size="l">Large</Text>
    <Text size="m">Medium</Text>
    <Text size="s">Small</Text>
  </StoryContainer>
);

export const Weight = () => (
  <StoryContainer vertical>
    <Text weight="regular">Regular</Text>
    <Text weight="medium">Medium</Text>
    <Text weight="bold">Bold</Text>
  </StoryContainer>
);

export const Align = () => (
  <StoryContainer vertical stretch>
    <Text align="start">Start</Text>
    <Text align="center">Center</Text>
  </StoryContainer>
);
````

## File: app/components/theme-provider/theme-provider.jsx
````javascript
import InterVariable from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2';
import InterVariableItalic from '@fontsource-variable/inter/files/inter-latin-wght-italic.woff2';
import IPAGothic from '~/assets/fonts/ipa-gothic.woff2';
import { createContext, useContext } from 'react';
import { classes, media } from '~/utils/style';
import { themes, tokens } from './theme';

export const ThemeContext = createContext({});

export const ThemeProvider = ({
  theme = 'dark',
  children,
  className,
  as: Component = 'div',
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme,
      }}
    >
      {isRootProvider && children}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component className={classes(className)} data-theme={theme} {...rest}>
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}

/**
 * Squeeze out spaces and newlines
 */
export function squish(styles) {
  return styles.replace(/\s\s+/g, ' ');
}

/**
 * Transform theme token objects into CSS custom property strings
 */
export function createThemeProperties(theme) {
  return squish(
    Object.keys(theme)
      .map(key => `--${key}: ${theme[key]};`)
      .join('\n\n')
  );
}

/**
 * Transform theme tokens into a React CSSProperties object
 */
export function createThemeStyleObject(theme) {
  let style = {};

  for (const key of Object.keys(theme)) {
    style[`--${key}`] = theme[key];
  }

  return style;
}

/**
 * Generate media queries for tokens
 */
export function createMediaTokenProperties() {
  return squish(
    Object.keys(media)
      .map(key => {
        return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
      })
      .join('\n')
  );
}

const layerStyles = squish(`
  @layer theme, base, components, layout;
`);

const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);

const fontStyles = squish(`
  @font-face {
    font-family: Inter;
    font-weight: 100 900;
    src: url(${InterVariable}) format('woff2-variations');
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: Inter;
    font-weight: 100 900;
    src: url(${InterVariableItalic}) format('woff2-variations');
    font-display: swap;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);

export const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
````

## File: app/components/theme-provider/theme.js
````javascript
import { pxToRem } from '~/utils/style';

// Full list of tokens
const baseTokens = {
  black: 'oklch(0% 0 0)',
  white: 'oklch(100% 0 0)',
  bezierFastoutSlowin: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  durationXS: '200ms',
  durationS: '300ms',
  durationM: '400ms',
  durationL: '600ms',
  durationXL: '800ms',
  systemFontStack:
    'system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif',
  fontStack: `Inter, var(--systemFontStack)`,
  monoFontStack:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  japaneseFontStack:
    'IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif',
  chineseFontStack:
    'PingFang SC, Microsoft YaHei, sans-serif',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: '1.1',
  lineHeightBody: '1.6',
  maxWidthS: '540px',
  maxWidthM: '720px',
  maxWidthL: '1096px',
  maxWidthXL: '1680px',
  spaceOuter: '64px',
  spaceXS: '4px',
  spaceS: '8px',
  spaceM: '16px',
  spaceL: '24px',
  spaceXL: '32px',
  space2XL: '48px',
  space3XL: '64px',
  space4XL: '96px',
  space5XL: '128px',
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64,
};

// Tokens that change based on viewport size
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80),
};

const tokensLaptop = {
  maxWidthS: '480px',
  maxWidthM: '640px',
  maxWidthL: '1000px',
  maxWidthXL: '1100px',
  spaceOuter: '48px',
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22),
};

const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20),
};

const tokensMobile = {
  spaceOuter: '24px',
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14),
};

const tokensMobileSmall = {
  spaceOuter: '16px',
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20),
};

// Theme color tokens. Opacity values tuned to meet WCAG AA contrast against
// the corresponding background tokens; do not lower without re-checking.
const dark = {
  background: 'oklch(17.76% 0 0)', // near-black background
  backgroundLight: 'oklch(21.78% 0 0)', // raised surface (cards, navbar overlays)
  primary: 'oklch(84.42% 0.19 50)', // brand yellow
  accent: 'oklch(84.42% 0.19 50)', // brand yellow accent
  error: 'oklch(65.91% 0.249 13.76)', // error red, AA against dark bg
  text: 'var(--white)',
  textTitle: 'var(--text)',
  textBody: 'color-mix(in lab, var(--text) 82%, transparent)',
  textLight: 'color-mix(in lab, var(--text) 68%, transparent)',
};

const light = {
  background: 'oklch(96.12% 0 0)', // near-white background
  backgroundLight: 'var(--white)',
  primary: 'oklch(84.42% 0.19 50)', // brand yellow
  accent: 'oklch(64% 0.16 50)', // darker accent for AA contrast on white
  error: 'oklch(54% 0.22 25)', // deeper red, AA against white
  text: 'var(--black)',
  textTitle: 'color-mix(in lab, var(--text) 92%, transparent)',
  textBody: 'color-mix(in lab, var(--text) 80%, transparent)',
  textLight: 'color-mix(in lab, var(--text) 65%, transparent)',
};

export const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall,
};

export const themes = { dark, light };
````

## File: app/layouts/navbar/nav-data.js
````javascript
import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    zhLabel: '项目',
    pathname: '/#projects',
  },
  {
    label: 'About',
    zhLabel: '关于',
    pathname: '/#details',
  },
  {
    label: 'All Work',
    zhLabel: '全部作品',
    pathname: '/projects/all-work',
  },
  {
    label: 'Contact',
    zhLabel: '联系',
    pathname: '/contact',
  },
  {
    label: 'Uses',
    zhLabel: '工具',
    pathname: '/uses',
  },
];

export const socialLinks = [
  config.linkedin && {
    label: 'LinkedIn',
    url: `https://www.linkedin.com/in/${config.linkedin}`,
    icon: 'linkedin',
  },
  config.github && {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
  config.bluesky && {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  config.figma && {
    label: 'Figma',
    url: `https://www.figma.com/${config.figma}`,
    icon: 'figma',
  },
  {
    label: 'Resume (PDF)',
    url: '/resume.pdf',
    icon: 'resume',
    download: true,
  },
].filter(Boolean);
````

## File: app/layouts/navbar/navbar.jsx
````javascript
import { Icon } from '~/components/icon';
import { Monogram } from '~/components/monogram';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useScrollToHash, useWindowSize } from '~/hooks';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import { useEffect, useRef, useState } from 'react';
import { getLocaleFromPathname, localizePath, stripLocaleFromPathname } from '~/i18n/route';
import { localeLabels, supportedLocales } from '~/i18n/locales';
import { cssProps, media, msToNum, numToMs } from '~/utils/style';
import { NavToggle } from './nav-toggle';
import { ThemeToggle } from './theme-toggle';
import { navLinks, socialLinks } from './nav-data';
import config from '~/config.json';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const isZh = locale === 'zh';
  const displayName = isZh ? '牛拙Prince' : config.name;
  const displayRole = isZh ? 'Designer-Builder' : config.role;
  const basePathname = stripLocaleFromPathname(location.pathname);
  const localizedCurrentPath = `${basePathname}${location.hash}`;
  const windowSize = useWindowSize();
  const headerRef = useRef();
  // Use width-only detection so a short desktop window (split-screen, devtools open)
  // doesn't get treated as mobile, which previously caused the theme toggle to vanish.
  const isMobile = windowSize.width <= media.mobile;
  const scrollToHash = useScrollToHash();

  useEffect(() => {
    // Prevent ssr mismatch by storing this in state
    setCurrent(localizedCurrentPath);
  }, [localizedCurrentPath]);

  // Handle smooth scroll nav items
  useEffect(() => {
    if (!target || basePathname !== '/') return;
    setCurrent(`${basePathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [basePathname, scrollToHash, target]);

  // Handle swapping the theme when intersecting with inverse themed elements
  useEffect(() => {
    const navItems = document.querySelectorAll('[data-navbar-item]');
    const inverseTheme = theme === 'dark' ? 'light' : 'dark';
    const { innerHeight } = window;

    let inverseMeasurements = [];
    let navItemMeasurements = [];

    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };

    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = '';
      }
    };

    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );

      if (!invertedElements) return;

      inverseMeasurements = Array.from(invertedElements).map(item => ({
        element: item,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight,
      }));

      const { scrollY } = window;

      resetNavTheme();

      for (const inverseMeasurement of inverseMeasurements) {
        if (
          inverseMeasurement.top - scrollY > innerHeight ||
          inverseMeasurement.bottom - scrollY < 0
        ) {
          continue;
        }

        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = '';
          }
        }
      }
    };

    // Currently only the light theme has dark full-width elements
    if (theme === 'light') {
      navItemMeasurements = Array.from(navItems).map(item => {
        const rect = item.getBoundingClientRect();

        return {
          element: item,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      document.addEventListener('scroll', handleInversion);
      handleInversion();
    }

    return () => {
      document.removeEventListener('scroll', handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);

  // Check if a nav item should be active
  const getCurrent = (url = '') => {
    const nonTrailing = current?.endsWith('/') ? current?.slice(0, -1) : current;

    if (url === nonTrailing) {
      return 'page';
    }

    return '';
  };

  // Store the current hash to scroll to
  const handleNavItemClick = event => {
    const hash = event.currentTarget.href.split('#')[1];
    setTarget(null);

    if (hash && basePathname === '/') {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };

  const handleMobileNavClick = event => {
    handleNavItemClick(event);
    if (menuOpen) setMenuOpen(false);
  };

  return (
    <header className={styles.navbar} ref={headerRef}>
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to={basePathname === '/' ? localizePath('/#intro', locale) : localizePath('/', locale)}
        data-navbar-item
        className={styles.logo}
        aria-label={`${displayName}, ${displayRole}`}
        onClick={handleMobileNavClick}
      >
        <Monogram highlight />
      </RouterLink>
      <NavToggle onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
      <nav className={styles.nav}>
        <div className={styles.navList} data-locale={locale}>
          {navLinks.map(({ label, zhLabel, pathname }) => {
            const localizedPathname = localizePath(pathname, locale);
            const navLabel = isZh ? zhLabel : label;

            return (
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={localizedPathname}
                key={label}
                data-navbar-item
                className={styles.navLink}
                aria-current={getCurrent(pathname)}
                onClick={handleNavItemClick}
              >
                {navLabel}
              </RouterLink>
            );
          })}
        </div>
        <div className={styles.navActions}>
          <LanguageToggle
            className={styles.languageToggle}
            currentLocale={locale}
            pathname={localizedCurrentPath}
          />
        </div>
        <NavbarIcons desktop />
      </nav>
      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {({ visible, nodeRef }) => (
          <nav className={styles.mobileNav} data-visible={visible} ref={nodeRef}>
            {navLinks.map(({ label, zhLabel, pathname }, index) => {
              const localizedPathname = localizePath(pathname, locale);
              const navLabel = isZh ? zhLabel : label;

              return (
                <RouterLink
                  unstable_viewTransition
                  prefetch="intent"
                  to={localizedPathname}
                  key={label}
                  className={styles.mobileNavLink}
                  data-visible={visible}
                  aria-current={getCurrent(pathname)}
                  onClick={handleMobileNavClick}
                  style={cssProps({
                    transitionDelay: numToMs(
                      Number(msToNum(tokens.base.durationS)) + index * 50
                    ),
                  })}
                >
                  {navLabel}
                </RouterLink>
              );
            })}
            <div className={styles.mobileUtilityNav} data-visible={visible}>
              <span className={styles.mobileUtilityLabel}>{isZh ? '语言' : 'Language'}</span>
              <LanguageToggle
                className={styles.mobileLanguageToggle}
                currentLocale={locale}
                pathname={localizedCurrentPath}
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <NavbarIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle data-navbar-item />}
    </header>
  );
};

const LanguageToggle = ({ className, currentLocale, pathname, onClick }) => {
  const targetLocale = supportedLocales.find(locale => locale !== currentLocale) || 'en';

  return (
    <RouterLink
      unstable_viewTransition
      prefetch="intent"
      className={className}
      to={localizePath(pathname, targetLocale)}
      aria-label={`Switch language to ${localeLabels[targetLocale]}`}
      onClick={onClick}
    >
      {currentLocale === 'zh' ? 'EN' : '中文'}
    </RouterLink>
  );
};

const NavbarIcons = ({ desktop }) => (
  <div className={styles.navIcons}>
    {socialLinks.map(({ label, url, icon, download }) => (
      <a
        key={label}
        data-navbar-item={desktop || undefined}
        className={styles.navIconLink}
        aria-label={label}
        href={url}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noopener noreferrer'}
        download={download || undefined}
      >
        <Icon className={styles.navIcon} icon={icon} />
      </a>
    ))}
  </div>
);
````

## File: app/routes/contact/contact.module.css
````css
.contact {
  --formHeight: 530px;

  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
  justify-items: center;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;

  @media (--mediaMobile) {
    padding-top: 0;
  }
}

.form {
  grid-area: 1 / 1;
  max-width: var(--maxWidthS);
  width: 100%;
  padding: var(--space2XL) 0;

  @media (--mediaMobile) {
    padding: var(--space5XL) 0 var(--space2XL);
    align-self: flex-start;
  }
}

.title {
  margin-bottom: var(--space2XL);
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--delay);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--space5XL), 0);
  }

  &[data-status='entering'],
  &[data-status='entered'] {
    transform: none;
    opacity: 1;
  }

  &[data-status='exiting'] {
    transition-duration: var(--durationM);
    transition-delay: 0s;
    opacity: 0;

    @media (--mediaUseMotion) {
      transform: translate3d(0, calc(var(--space2XL) * -1), 0);
    }
  }
}

.divider {
  margin-bottom: var(--space3XL);
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--delay);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--space5XL), 0);
  }

  &[data-status='entering'],
  &[data-status='entered'] {
    transform: none;
    opacity: 1;
  }

  &[data-hidden='true'] {
    opacity: 0;

    @media (--mediaUseMotion) {
      transform: translate3d(0, var(--space5XL), 0);
    }
  }

  &[data-status='exiting'] {
    transition-duration: var(--durationM);
    transition-delay: 0s;
    opacity: 0;

    @media (--mediaUseMotion) {
      transform: translate3d(0, calc(var(--space2XL) * -1), 0);
    }
  }
}

.input {
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--delay);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--space3XL), 0);
  }

  + & {
    margin-top: var(--spaceXL);
  }

  &[data-status='entering'],
  &[data-status='entered'] {
    transform: none;
    opacity: 1;
  }

  &[data-hidden='true'] {
    opacity: 0;

    @media (--mediaUseMotion) {
      transform: translate3d(0, var(--space3XL), 0);
      transform: none;
    }
  }

  &[data-status='exiting'] {
    transition-duration: var(--durationM);
    transition-delay: 0s;
    opacity: 0;

    @media (--mediaUseMotion) {
      transform: translate3d(0, calc(var(--space2XL) * -1), 0);
    }
  }
}

.botkiller {
  display: none;
}

.privacyNote {
  margin-top: var(--spaceL);
  font-size: var(--fontSizeBodyXS);
  color: var(--textLight);
  line-height: 1.5;
  opacity: 0;
  transition: opacity var(--durationM) ease var(--delay);

  &[data-status='entering'],
  &[data-status='entered'] {
    opacity: 1;
  }
}

.button {
  --buttonLoaderDelay: var(--durationL);

  margin-top: calc(var(--spaceXL) * 2);
  transition-delay: var(--delay);
  transition-duration: var(--durationXL);
  opacity: 0;
  justify-self: flex-start;

  &[data-status='exiting'],
  &[data-status='exited'] {
    transition-property: opacity;
    transition-timing-function: var(--bezierFastoutSlowin);

    @media (--mediaUseMotion) {
      transition-property: transform, opacity;
      transform: translate3d(0, var(--space3XL), 0);
    }
  }

  &[data-status='entered'] {
    transition-delay: 0ms;
    transition-duration: var(--durationM);
  }

  &[data-sending='true'] {
    & svg {
      transition: transform var(--bezierFastoutSlowin) var(--durationXL),
        opacity var(--durationS) ease var(--durationS);
      transform: translate3d(var(--space5XL), 0, 0);
      opacity: 0;

      @media (--mediaReduceMotion) {
        transition-property: opacity;
        transform: none;
      }
    }
  }

  &[data-status='entering'],
  &[data-status='entered'] {
    opacity: 1;
  }

  &[data-status='entering']:not(:hover),
  &[data-status='entering']:hover {
    transform: none;
  }

  &[data-status='exiting'] {
    transition-duration: var(--durationM);
    transition-delay: 0s;
    opacity: 0;

    @media (--mediaUseMotion) {
      transform: translate3d(0, calc(var(--space2XL) * -1), 0);
    }
  }
}

.complete {
  grid-area: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spaceXL) var(--spaceM);
  text-align: center;
  inset: 0;
}

.completeTitle {
  margin: 0;
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--delay);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--space3XL), 0);
  }

  &[data-status='entered'] {
    transform: none;
    opacity: 1;
  }
}

.completeText {
  margin-top: var(--spaceM);
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--delay);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--space3XL), 0);
  }

  &[data-status='entered'] {
    transform: none;
    opacity: 1;
  }
}

.completeButton {
  margin-top: var(--spaceL);
  transition-duration: var(--durationXL);
  transition-delay: var(--delay);
  opacity: 0;

  &[data-status='entering'],
  &[data-status='exited'] {
    transition-property: opacity;
    transition-timing-function: var(--bezierFastoutSlowin);

    @media (--mediaUseMotion) {
      transition-property: transform, opacity;
      transform: translate3d(0, var(--space3XL), 0);
    }
  }

  &[data-status='entered'] {
    opacity: 1;

    &:not(:hover) {
      transform: none;
    }
  }
}

.formError {
  color: var(--error);
  overflow: hidden;
  height: var(--height);

  @media (--mediaUseMotion) {
    transition-property: height;
    transition-duration: var(--durationM);
    transition-timing-function: var(--bezierFastoutSlowin);
  }
}

.formErrorContent {
  padding-top: var(--spaceXL);
}

.formErrorMessage {
  display: flex;
  padding: var(--spaceM);
  line-height: 24px;
  background-color: color-mix(in lab, var(--error) 10%, transparent);
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%);
}

.formErrorIcon {
  flex: 0 0 auto;
  margin-right: var(--spaceS);
}

.footer {
  opacity: 0;

  &:global {
    animation: fade-in var(--durationL) ease var(--durationXL) forwards;
  }
}
````

## File: app/routes/home/displacement-sphere.jsx
````javascript
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport, useWindowSize } from '~/hooks';
import { startTransition, useEffect, useRef, useState } from 'react';
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from 'three';
import { media } from '~/utils/style';
import { throttle } from '~/utils/throttle';
import { cleanRenderer, cleanScene, removeLights } from '~/utils/three';
import fragmentShader from './displacement-sphere-fragment.glsl?raw';
import vertexShader from './displacement-sphere-vertex.glsl?raw';
import styles from './displacement-sphere.module.css';

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
};

// Skip the WebGL displacement sphere on low-end devices and metered
// connections. The intro stays readable; we just don't run the shader.
function shouldSkipForDevice() {
  if (typeof navigator === 'undefined') return false;
  const memory = navigator.deviceMemory; // not on every browser
  if (typeof memory === 'number' && memory > 0 && memory < 4) return true;
  const conn = navigator.connection;
  if (conn?.saveData) return true;
  if (conn?.effectiveType && /^(slow-2g|2g)$/.test(conn.effectiveType)) return true;
  return false;
}

export const DisplacementSphere = props => {
  const { theme } = useTheme();
  const [webglReady, setWebglReady] = useState(false);
  const [webglFailed, setWebglFailed] = useState(() => shouldSkipForDevice());
  const start = useRef(Date.now());
  const canvasRef = useRef();
  const mouse = useRef();
  const renderer = useRef();
  const camera = useRef();
  const scene = useRef();
  const lights = useRef();
  const uniforms = useRef();
  const material = useRef();
  const geometry = useRef();
  const sphere = useRef();
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(canvasRef);
  const windowSize = useWindowSize();
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);

  useEffect(() => {
    if (webglFailed) return undefined;

    const { innerWidth, innerHeight } = window;
    mouse.current = new Vector2(0.8, 0.5);

    try {
      renderer.current = new WebGLRenderer({
        canvas: canvasRef.current,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: true,
      });
    } catch {
      setWebglFailed(true);
      return undefined;
    }

    renderer.current.setSize(innerWidth, innerHeight);
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = LinearSRGBColorSpace;

    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.z = 52;

    scene.current = new Scene();

    material.current = new MeshPhongMaterial();
    material.current.onBeforeCompile = shader => {
      uniforms.current = UniformsUtils.merge([
        shader.uniforms,
        { time: { type: 'f', value: 0 } },
      ]);

      shader.uniforms = uniforms.current;
      shader.vertexShader = vertexShader;
      shader.fragmentShader = fragmentShader;
    };

    startTransition(() => {
      geometry.current = new SphereGeometry(32, 128, 128);
      sphere.current = new Mesh(geometry.current, material.current);
      sphere.current.position.z = 0;
      sphere.current.modifier = Math.random();
      scene.current.add(sphere.current);
    });

    setWebglReady(true);

    return () => {
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, []);

  useEffect(() => {
    if (!webglReady) return undefined;

    const dirLight = new DirectionalLight(0xff9933, theme === 'light' ? 2.2 : 2.4);
    const ambientLight = new AmbientLight(0xff9933, theme === 'light' ? 3.0 : 0.6);

    dirLight.position.z = 200;
    dirLight.position.x = 100;
    dirLight.position.y = 100;

    lights.current = [dirLight, ambientLight];
    lights.current.forEach(light => scene.current.add(light));

    return () => {
      removeLights(lights.current);
    };
  }, [theme, webglReady]);

  useEffect(() => {
    if (!webglReady || !sphere.current) return;

    const { width, height } = windowSize;

    const adjustedHeight = height + height * 0.3;
    renderer.current.setSize(width, adjustedHeight);
    camera.current.aspect = width / adjustedHeight;
    camera.current.updateProjectionMatrix();

    // Render a single frame on resize when not animating
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current);
    }

    if (width <= media.mobile) {
      sphere.current.position.x = 14;
      sphere.current.position.y = 10;
    } else if (width <= media.tablet) {
      sphere.current.position.x = 18;
      sphere.current.position.y = 14;
    } else {
      sphere.current.position.x = 22;
      sphere.current.position.y = 16;
    }
  }, [reduceMotion, webglReady, windowSize]);

  useEffect(() => {
    if (!webglReady) return undefined;

    const onMouseMove = throttle(event => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    }, 100);

    if (!reduceMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY, webglReady]);

  useEffect(() => {
    if (!webglReady || !sphere.current) return undefined;

    let animation;

    const animate = () => {
      animation = requestAnimationFrame(animate);

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
      }

      sphere.current.rotation.z += 0.001;
      sphere.current.rotation.x = rotationX.get();
      sphere.current.rotation.y = rotationY.get();

      renderer.current.render(scene.current, camera.current);
    };

    if (!reduceMotion && isInViewport) {
      animate();
    } else {
      renderer.current.render(scene.current, camera.current);
    }

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY, webglReady]);

  if (webglFailed) return null;

  return (
    <Transition in timeout={3000} nodeRef={canvasRef}>
      {({ visible, nodeRef }) => (
        <canvas
          aria-hidden
          className={styles.canvas}
          data-visible={visible}
          ref={nodeRef}
          {...props}
        />
      )}
    </Transition>
  );
};
````

## File: app/routes/home/profile.module.css
````css
.profile {
  width: 100vw;
  min-height: 100vh;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;

  @media (--mediaTablet) {
    padding-top: 50px;
    padding-right: 80px;
    padding-left: 160px;
    height: auto;
    margin-top: 40px;
    margin-bottom: 20px;
  }

  @media (--mediaMobile) {
    margin-top: 0;
    padding-top: var(--space4XL);
    overflow-x: hidden;
  }

  @media (--mediaMobile), (--mediaMobileLS) {
    padding-right: var(--spaceOuter);
    padding-left: var(--spaceOuter);
  }

  @media (max-width: 820px) and (max-height: 420px) {
    padding-right: var(--space4XL);
    padding-left: var(--space4XL);
  }
}

.content {
  display: grid;
  grid-template-columns: 1fr 50%;
  grid-column-gap: var(--space2XL);
  max-width: var(--maxWidthL);
  width: 100%;

  @media (--mediaTablet) {
    max-width: 600px;
    grid-template-columns: 100%;
  }
}

.column {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 40px;
  transform: translate3d(0, 0, 0);
}

.title {
  white-space: nowrap;
  margin-bottom: var(--spaceL);
  opacity: 0;
  transition: opacity var(--durationXL) ease var(--durationM);

  &[data-visible='true'] {
    opacity: 1;
  }

  @media (--mediaTablet) {
    white-space: normal;
  }
}

.description {
  margin-bottom: var(--spaceXL);
  opacity: 0;
  transition: opacity var(--durationXL) ease var(--durationL);

  &[data-visible='true'] {
    opacity: 1;
  }
}

.tag {
  margin-top: 220px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: var(--space4XL) 1fr;
  gap: 12px;
  align-items: center;

  @media (--mediaTablet) {
    margin-top: 30px;
  }
}

.tagText {
  font-size: var(--fontSizeBodyS);
  font-weight: var(--fontWeightMedium);
  color: var(--primary);
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationM);
  transition-delay: 1.3s;

  @media (--mediaUseMotion) {
    transition-property: opacity, transform;
    transform: translate3d(calc(var(--spaceM) * -1), 0, 0);
  }

  &[data-visible='true'] {
    transform: none;
    opacity: 1;
  }
}

.image {
  position: relative;
  width: 100%;
}

.svg {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate3d(50%, -20%, 0);
  height: 100%;
  z-index: var(--zIndex3);
  opacity: 0;
  transition: opacity var(--durationM) ease var(--durationL);
  fill: var(--textTitle);

  &[data-visible='true'] {
    opacity: 1;
  }
}

.button {
  opacity: 0;
  transition: opacity var(--durationXL) ease var(--durationL);

  &[data-visible='true'] {
    transform: none;
    opacity: 1;
  }
}
````

## File: app/routes/uses/uses.jsx
````javascript
import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { usesContent as enUses } from '~/data/site-content';
import { usesContent as zhUses } from '~/data/content/zh/site-content';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname } from '~/i18n/route';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: enUses.metaDescription,
    path: '/uses',
  });
};

export const Uses = () => {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const content = locale === 'zh' ? zhUses : enUses;
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={content.heroTitle}
          description={content.heroDescription}
        />
        {content.sections.map(section => (
          <ProjectSection key={section.heading} padding="none" className={styles.section}>
            <ProjectSectionContent>
              <ProjectTextRow width="m">
                <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
                <ProjectSectionText as="div">
                  <List>
                    {section.items.map(item => (
                      <ListItem key={item.label}>
                        <Link href={item.url}>{item.label}</Link> {item.description}
                      </ListItem>
                    ))}
                  </List>
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
          </ProjectSection>
        ))}
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  {content.system.map(item => (
                    <TableRow key={item.label}>
                      <TableHeadCell>{item.label}</TableHeadCell>
                      <TableCell>{item.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
````

## File: app/routes/$.jsx
````javascript
import { useRouteError } from '@remix-run/react';
import { Error } from '~/layouts/error';
import { baseMeta } from '~/utils/meta';

export async function loader() {
  throw new Response(null, { status: 404, statusText: 'Not found' });
}

export const meta = () => {
  return baseMeta({
    title: 'Page not found',
    description: 'The page you are looking for could not be found.',
  });
};

export function ErrorBoundary() {
  const error = useRouteError();

  return <Error error={error} />;
}
````

## File: app/routes/api.set-theme.js
````javascript
import { json, createCookieSessionStorage } from '@remix-run/cloudflare';
import { getSessionSecrets } from '~/utils/session';

export async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get('theme');

  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: getSessionSecrets(request, context.cloudflare.env),
      secure: true,
    },
  });

  const session = await getSession(request.headers.get('Cookie'));
  session.set('theme', theme);

  return json(
    { status: 'success' },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
}
````

## File: app/global.module.css
````css
@custom-media --mediaDesktop (max-width: 2080px);
@custom-media --mediaLaptop (max-width: 1680px);
@custom-media --mediaTablet (max-width: 1040px);
@custom-media --mediaMobile (max-width: 696px);
@custom-media --mediaMobileLS (max-height: 696px);
@custom-media --mediaMobileS (max-width: 400px);
@custom-media --mediaUseMotion (prefers-reduced-motion: no-preference);
@custom-media --mediaReduceMotion (prefers-reduced-motion: reduce);
@custom-media --mediaTouch (pointer: coarse);
@custom-media --mediaNoTouch (pointer: fine);

@layer base {
  :global(:root) {
    --mobileNavOffset: calc(var(--spaceOuter) * 2 + var(--space2XL));
  }

  :global(html, body) {
    font-family: var(--fontStack);
    font-weight: var(--fontWeightRegular);
    background-color: var(--background);
    transition: var(--durationM) ease;
    transition-property: background, opacity;
    color: var(--textBody);
    width: 100vw;
    overflow-x: hidden;
    opacity: 1;

    &:focus {
      outline: none;
    }
  }

  :global(:where(code, pre)) {
    font-family: var(--monoFontStack);
  }

  :global(::selection) {
    background: var(--accent);
    color: var(--black);
  }

  :global(:focus) {
    outline: none;
  }

  :global(:focus-visible) {
    outline: 2px solid var(--accent);
    outline-offset: 3px;
    border-radius: 2px;
  }

  @keyframes :global(fade-in) {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes :global(reveal) {
    0% {
      transform: scale3d(0, 1, 1);
      transform-origin: left;
    }

    50% {
      transform: scale3d(1, 1, 1);
      transform-origin: left;
    }

    51% {
      transform: scale3d(1, 1, 1);
      transform-origin: right;
    }

    100% {
      transform: scale3d(0, 1, 1);
      transform-origin: right;
    }
  }
}
````

## File: public/favicon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 44" fill="none">
  <path d="M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z" fill="#f7f7f7"/>
  <path d="M55 8h7v28h-7V19L35 36h-8l28-25V8Z" fill="#e8a838"/>
</svg>
````

## File: public/humans.txt
````
__  __  __
\ \ \ \ \/
 \ \/\ \
  \/  \/

The humans.txt file explains the team, technology,
and graphic assets behind this site humanstxt.org.

_______________________________________________________________________________

DESIGNER & DEVELOPER

Zhuo (Prince) Niu
Product design, mobile development, and frontend engineering

Design tools:
Figma
Xmind
Miro

github.com/princeniu

_______________________________________________________________________________

TECHNOLOGY

React
Remix
Three.js
Framer Motion

_______________________________________________________________________________

FONTS

Inter (variable, Latin subset) — rsms.me/inter
IPA Gothic Regular
Hiragino Kaku Gothic W8
````

## File: public/icon.svg
````xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 44" fill="none">
  <path d="M10 9h39v6H28L11 29v7h40v-6H29l23-21h-8L19 31V9h-9Z" fill="#f7f7f7"/>
  <path d="M55 8h7v28h-7V19L35 36h-8l28-25V8Z" fill="#e8a838"/>
</svg>
````

## File: public/robots.txt
````
User-agent: *
Allow: /

Sitemap: https://princeniu.com/sitemap.xml
````

## File: .gitignore
````
node_modules
.DS_Store
Icon?

/.cache
/build
.env

.wrangler
.dev.vars

public/draco
storybook-static

# AI tooling
.claude
.hermes

# Misc
public/Thumbnail.png
````

## File: LICENSE
````
MIT License

Copyright (c) 2020 Hamish Williams
Copyright (c) 2025-2026 Zhuo (Prince) Niu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````

## File: vite.config.js
````javascript
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],
  build: {
    assetsInlineLimit: 1024,
    rollupOptions: {
      output: {
        // Suppress warning for Three.js chunk (lazy-loaded in task #2)
        chunkSizeWarningLimit: 600,
      },
      onLog(level, log, handler) {
        if (log.message?.includes('api.set-theme')) return;
        handler(level, log);
      },
    },
  },
  server: {
    port: 7777,
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),
    remixCloudflareDevProxy(),
    remix({
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
          route('/zh', 'routes/zh-home.js');
          route('/zh/contact', 'routes/zh-contact.js');
          route('/zh/uses', 'routes/zh-uses.js');
          route('/zh/projects/:slug', 'routes/zh-projects-$slug.jsx');
        });
      },
    }),
    jsconfigPaths(),
  ],
});
````

## File: app/routes/home/home.module.css
````css
.home {
  overflow-x: hidden;
}

.allWorkCta {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spaceM);
  width: min(520px, calc(100% - var(--spaceOuter) * 2));
  margin: calc(var(--space2XL) * -0.5) auto var(--space3XL);
  padding: var(--spaceXL) var(--spaceL);
  border: 1px solid color-mix(in srgb, var(--primary) 32%, transparent);
  border-radius: 28px;
  background:
    radial-gradient(circle at 50% 0%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 64%),
    color-mix(in srgb, var(--background) 88%, transparent);
  box-shadow:
    0 24px 80px color-mix(in srgb, #000 28%, transparent),
    inset 0 1px 0 color-mix(in srgb, #fff 8%, transparent);
}

.allWorkCta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 96px;
  height: 1px;
  background: var(--primary);
  transform: translateX(-50%);
  opacity: 0.8;
}

.allWorkEyebrow {
  color: var(--textLight);
  font-size: var(--fontSizeBodyS);
  font-weight: var(--fontWeightMedium);
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.allWorkButton {
  min-width: 190px;
  box-shadow: 0 16px 40px color-mix(in srgb, var(--primary) 18%, transparent);
}

@media (--mediaTablet) {
  .allWorkCta {
    margin: calc(var(--spaceXL) * -1) auto var(--space3XL);
  }
}

@media (--mediaMobile) {
  .allWorkCta {
    width: calc(100% - var(--spaceOuter) * 2);
    margin: var(--spaceL) auto var(--space3XL);
    padding: var(--spaceL) var(--spaceM);
  }
}
````

## File: app/routes/home/intro.jsx
````javascript
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { useTheme } from '~/components/theme-provider';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Link as RouterLink } from '@remix-run/react';
import { useInterval, usePrevious, useScrollToHash } from '~/hooks';
import { Suspense, lazy, useEffect, useState } from 'react';
import { cssProps } from '~/utils/style';
import config from '~/config.json';
import { useHydrated } from '~/hooks/useHydrated';
import styles from './intro.module.css';

const DisplacementSphere = lazy(() =>
  import('./displacement-sphere').then(module => ({ default: module.DisplacementSphere }))
);

export function Intro({
  id,
  sectionRef,
  scrollIndicatorHidden,
  name = config.name,
  role = config.role,
  disciplines = config.disciplines,
  scrollTo = '/#projects',
  scrollLabel = 'Scroll to projects',
  listSeparator = ', ',
  finalJoin = ', and ',
  pauseLabel = 'Pause rotating disciplines',
  resumeLabel = 'Resume rotating disciplines',
  pauseTitle = 'Pause',
  resumeTitle = 'Resume',
  ...rest
}) {
  const { theme } = useTheme();
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prevTheme = usePrevious(theme);
  const introLabel =
    disciplines.length > 1
      ? [disciplines.slice(0, -1).join(listSeparator), disciplines.slice(-1)[0]].join(
          finalJoin
        )
      : disciplines[0];
  const currentDiscipline = disciplines.find((item, index) => index === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();

  useInterval(
    () => {
      const index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    paused ? null : 5000,
    theme
  );

  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);

  const handleScrollClick = event => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };

  return (
    <Section
      className={styles.intro}
      as="section"
      ref={sectionRef}
      id={id}
      aria-labelledby={titleId}
      tabIndex={-1}
      {...rest}
    >
      <Transition in key={theme} timeout={3000}>
        {({ visible, status }) => (
          <>
            {isHydrated && (
              <Suspense>
                <DisplacementSphere />
              </Suspense>
            )}
            <header className={styles.text}>
              <h1 className={styles.name} data-visible={visible} id={titleId}>
                <DecoderText text={name} delay={500} />
              </h1>
              <Heading level={0} as="h2" className={styles.title}>
                <VisuallyHidden className={styles.label}>
                  {`${role} + ${introLabel}`}
                </VisuallyHidden>
                <span aria-hidden className={styles.row}>
                  <span
                    className={styles.word}
                    data-status={status}
                    style={cssProps({ delay: tokens.base.durationXS })}
                  >
                    {role}
                  </span>
                  <span className={styles.line} data-status={status} />
                </span>
                <div className={styles.row}>
                  {disciplines.map(item => (
                    <Transition
                      unmount
                      in={item === currentDiscipline}
                      timeout={{ enter: 3000, exit: 2000 }}
                      key={item}
                    >
                      {({ status, nodeRef }) => (
                        <span
                          aria-hidden
                          ref={nodeRef}
                          className={styles.word}
                          data-plus={true}
                          data-status={status}
                          style={cssProps({ delay: tokens.base.durationL })}
                        >
                          {item}
                        </span>
                      )}
                    </Transition>
                  ))}
                  <button
                    type="button"
                    className={styles.disciplineToggle}
                    onClick={() => setPaused(p => !p)}
                    aria-pressed={paused}
                    aria-label={paused ? resumeLabel : pauseLabel}
                    title={paused ? resumeTitle : pauseTitle}
                  >
                    {paused ? (
                      <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    ) : (
                      <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
                      </svg>
                    )}
                  </button>
                </div>
              </Heading>
            </header>
            <RouterLink
              to={scrollTo}
              className={styles.scrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>{scrollLabel}</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="28"
                height="10"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
            <RouterLink
              to={scrollTo}
              className={styles.mobileScrollIndicator}
              data-status={status}
              data-hidden={scrollIndicatorHidden}
              onClick={handleScrollClick}
            >
              <VisuallyHidden>{scrollLabel}</VisuallyHidden>
              <svg
                aria-hidden
                stroke="currentColor"
                width="43"
                height="15"
                viewBox="0 0 43 15"
              >
                <path d="M1 1l20.5 12L42 1" strokeWidth="2" fill="none" />
              </svg>
            </RouterLink>
          </>
        )}
      </Transition>
    </Section>
  );
}
````

## File: app/routes/home/intro.module.css
````css
.intro {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.text {
  max-width: 1024px;
  width: 100%;
  position: relative;
  top: calc(var(--spaceL) * -1);

  @media (--mediaDesktop) {
    max-width: 920px;
  }

  @media (--mediaLaptop) {
    max-width: 780px;
  }

  @media (--mediaMobile) {
    top: calc(var(--space3XL) * -1);
  }

  @media (--mediaMobileS) {
    top: calc(var(--spaceXL) * -1);
  }

  @media (max-width: 820px) and (max-height: 420px) {
    top: calc(var(--spaceM) * -1);
  }
}

.name {
  text-transform: uppercase;
  font-size: calc((24 / 16) * 1rem);
  letter-spacing: 0.3em;
  color: var(--textLight);
  margin-bottom: var(--space2XL);
  margin-top: 0;
  font-weight: var(--fontWeightMedium);
  line-height: 1;
  opacity: 0;
  transition: opacity var(--durationL) var(--bezierFastoutSlowin) 0.2s;

  @media (--mediaLaptop) {
    font-size: calc((22 / 16) * 1rem);
    margin-bottom: var(--spaceXL);
  }

  @media (--mediaTablet) {
    font-size: calc((18 / 16) * 1rem);
  }

  @media (--mediaMobile) {
    margin-bottom: var(--spaceL);
    letter-spacing: 0.2em;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (max-width: 820px) and (max-height: 420px) {
    margin-bottom: var(--spaceL);
    margin-bottom: var(--spaceXL);
  }

  &[data-visible='true'] {
    opacity: 1;
  }
}

.title {
  letter-spacing: -0.03em;

  /* Mobile token sets fontSizeH0 to 56px, but mobileS (≤400px) drops it to
     42px. Phones in the 393–440 CSS-px range still get 56px so words like
     Designer-Builder / Design Engineering overflow. Scale fluidly so the
     longest discipline (Design Engineering) plus the "+ " prefix and pause
     button still fit on a single line at iPhone widths (375–440 px). */
  @media (--mediaMobile) {
    font-size: clamp(1.875rem, 8.5vw, 3.5rem);
  }
}

.row {
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;

  &[data-hidden='true'] {
    opacity: 0;
  }
}

@keyframes introTextReveal {
  0% {
    color: color-mix(in lab, var(--text) 0%, transparent);
  }

  50% {
    color: color-mix(in lab, var(--text) 0%, transparent);
  }

  60% {
    color: var(--textTitle);
  }

  100% {
    color: var(--textTitle);
  }
}

.word {
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  line-height: 1;
  animation-duration: 1.5s;
  animation-delay: var(--delay);
  animation-fill-mode: forwards;
  animation-timing-function: var(--bezierFastoutSlowin);
  color: color-mix(in lab, var(--text) 0%, transparent);
  transition: opacity 0.5s ease var(--durationM);
  isolation: isolate;

  &::after {
    content: '';
    background: var(--accent);
    animation-duration: 1.5s;
    animation-delay: var(--delay);
    animation-fill-mode: forwards;
    animation-timing-function: var(--bezierFastoutSlowin);
    transform-origin: left;
    transform: scale3d(0, 1, 1);
    position: absolute;
    inset: 0 -0.02em 0 0;
    z-index: var(--zIndex1);
    will-change: transform;
  }

  &[data-plus='true']::before {
    content: '+';
    margin-right: 10px;
    opacity: 0.4;
  }

  &[data-status='entering'] {
    animation-name: introTextReveal;

    @media (--mediaUseMotion) {
      &::after:global {
        animation-name: reveal;
      }
    }
  }

  &[data-status='entered'] {
    color: var(--textTitle);

    &::after {
      opacity: 1;
      transform: scale3d(0, 0, 1);
      transform-origin: right;
    }
  }

  &[data-status='exiting'] {
    color: var(--textTitle);
    opacity: 0;
    position: absolute;
    top: 0;
    z-index: var(--zIndex0);
  }
}

@keyframes introLine {
  0% {
    transform: scaleX(0);
    opacity: 1;
  }

  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}

/* Pause/play control for the auto-rotating discipline word. Sits inline at
   the end of the row, fades in when the row is hovered or the button is
   focused so it stays out of the way during normal viewing. */
.disciplineToggle {
  margin-left: var(--spaceM);
  align-self: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  border: 1px solid color-mix(in lab, var(--text) 24%, transparent);
  background: transparent;
  color: color-mix(in lab, var(--text) 60%, transparent);
  cursor: pointer;
  opacity: 0;
  transition: opacity var(--durationS) ease, color var(--durationS) ease,
    border-color var(--durationS) ease;

  &:hover,
  &:focus-visible {
    color: var(--accent);
    border-color: var(--accent);
    opacity: 1;
  }
}

.row:hover .disciplineToggle,
.disciplineToggle:focus-visible {
  opacity: 1;
}

@media (--mediaTouch) {
  .disciplineToggle {
    opacity: 1;
  }
}

.line {
  content: '';
  height: 2px;
  background: color-mix(in lab, var(--text) 30%, transparent);
  width: 120%;
  display: flex;
  margin-left: 20px;
  animation-duration: 0.8s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: var(--bezierFastoutSlowin);
  transform-origin: left;
  opacity: 0;
  position: relative;
  top: 0.05em;

  &[data-status='entering'] {
    &:global {
      animation-name: fade-in;
    }

    @media (--mediaUseMotion) {
      animation-name: introLine;
    }
  }

  &[data-status='entered'] {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes introScrollIndicator {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(6px);
  }

  100% {
    transform: translateY(0);
  }
}

.scrollIndicator {
  position: fixed;
  bottom: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  color: color-mix(in lab, var(--text) 50%, transparent);
  transition-property: opacity, color;
  transition-duration: var(--durationM);
  transition-timing-function: ease;
  opacity: 0;

  & svg {
    stroke: currentColor;
  }

  @media (--mediaUseMotion) {
    transition-property: opacity, transform, color;
    & svg {
      animation: introScrollIndicator 2s ease infinite;
    }
  }

  &:hover,
  &:focus-visible {
    color: var(--accent);
    opacity: 1;
  }

  &[data-status='entered'] {
    opacity: 1;
  }

  &[data-hidden='true'] {
    opacity: 0;

    @media (--mediaUseMotion) {
      transform: translate3d(0, 20px, 0);
    }
  }

  @media (--mediaTouch) {
    display: none;
  }
}

@keyframes introMobileScrollIndicator {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

.mobileScrollIndicator {
  position: fixed;
  bottom: 0;
  opacity: 0;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.8, 0.1, 0.27, 1);
  transition-duration: var(--durationM);
  padding: 20px;

  @media (--mediaUseMotion) {
    animation-name: introMobileScrollIndicator;
    transition-property: opacity, transform;
    transform: translate3d(0, 20px, 0);
  }

  &[data-status='entered'] {
    opacity: 1;
  }

  &[data-hidden='true'] {
    opacity: 0;
    transform: none;
  }

  @media (--mediaNoTouch) {
    display: none;
  }

  & svg {
    stroke: color-mix(in lab, var(--text) 50%, transparent);
  }

  &:focus-visible {
    opacity: 1;
  }
}
````

## File: app/routes/home/profile.jsx
````javascript
import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { profileContent as enProfile } from '~/data/site-content';
import { profileContent as zhProfile } from '~/data/content/zh/site-content';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname, localizePath } from '~/i18n/route';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId, heading, description }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text={heading} start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      {description}
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const content = locale === 'zh' ? zhProfile : enProfile;
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText
                visible={visible}
                titleId={titleId}
                heading={content.heading}
                description={content.description}
              />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href={localizePath('/contact', locale)}
                icon="send"
              >
                {content.ctaLabel}
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  {content.eyebrow}
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt={locale === 'zh' ? '牛拙Prince 肖像' : 'Portrait of Zhuo (Prince) Niu'}
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
````

## File: app/routes/home/project-summary.jsx
````javascript
import { Button } from '~/components/button';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { deviceModels } from '~/components/model/device-models';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { Loader } from '~/components/loader';
import { useWindowSize } from '~/hooks';
import { Suspense, lazy, useState } from 'react';
import { cssProps, media } from '~/utils/style';
import { useHydrated } from '~/hooks/useHydrated';
import katakana from './katakana.svg';
import styles from './project-summary.module.css';

const Model = lazy(() =>
  import('~/components/model').then(module => ({ default: module.Model }))
);

export function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title,
  description,
  model,
  buttonText,
  buttonLink,
  alternate,
  quickFacts,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === 'light' ? 0.7 : 1;
  const indexText = index < 10 ? `0${index}` : index;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  const phonePositions = [
    { x: 0.3, y: 1.1, z: 0 },
    { x: 1.4, y: -0.5, z: 0.3 },
    { x: -1.4, y: 0.3, z: 0.6 },
  ];

  function handleModelLoad() {
    setModelLoaded(true);
  }

  function renderKatakana(device, visible) {
    return (
      <svg
        type="project"
        data-visible={visible && modelLoaded}
        data-light={theme === 'light'}
        style={cssProps({ opacity: svgOpacity })}
        className={styles.svg}
        data-device={device}
        viewBox="0 0 751 136"
      >
        <use href={`${katakana}#katakana-project`} />
      </svg>
    );
  }

  function renderDetails(visible) {
    return (
      <div className={styles.details}>
        <div aria-hidden className={styles.index}>
          <Divider
            notchWidth="64px"
            notchHeight="8px"
            collapsed={!visible}
            collapseDelay={1000}
          />
          <span className={styles.indexNumber} data-visible={visible}>
            {indexText}
          </span>
        </div>
        <Heading
          level={3}
          as="h2"
          className={styles.title}
          data-visible={visible}
          id={titleId}
        >
          {title}
        </Heading>
        <Text className={styles.description} data-visible={visible} as="p">
          {description}
        </Text>
        {quickFacts?.length > 0 && (
          <dl className={styles.quickFacts} data-visible={visible}>
            {quickFacts.map(fact => (
              <div className={styles.quickFactRow} key={fact.label}>
                <dt className={styles.quickFactLabel}>{fact.label}</dt>
                <dd className={styles.quickFactValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrow-right">
            {buttonText}
          </Button>
        </div>
      </div>
    );
  }

  function renderMacOSUtilityPreview(visible) {
    const idleTexture = model.textures?.[0];
    const recordingTexture = model.textures?.[1] || idleTexture;

    return (
      <div
        className={styles.sayitPreview}
        data-visible={true}
        role="img"
        aria-label={model.alt}
      >
        <div className={styles.sayitGlow} aria-hidden />
        <div className={styles.sayitWindow}>
          <div className={styles.sayitMenuBar} aria-hidden>
            <div className={styles.sayitTrafficLights}>
              <span />
              <span />
              <span />
            </div>
            <div className={styles.sayitMenuItems}>
              <span>SayIt</span>
              <span>Edit</span>
              <span>Engine</span>
            </div>
            <div className={styles.sayitStatus}>
              <span className={styles.sayitStatusDot} />
              Listening
            </div>
          </div>
          <div className={styles.sayitCanvas}>
            <div className={styles.sayitHotkey} aria-hidden>
              <span>⌥</span>
              <span>Space</span>
              <small>Global hotkey</small>
            </div>
            <img
              className={styles.sayitPopover}
              src={idleTexture?.src || idleTexture?.placeholder}
              srcSet={idleTexture?.srcSet}
              sizes="(max-width: 696px) 76vw, 28vw"
              alt=""
              aria-hidden="true"
            />
            <div className={styles.sayitRecordingCard} aria-hidden>
              <div className={styles.sayitWaveform}>
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <img
                src={recordingTexture?.src || recordingTexture?.placeholder}
                srcSet={recordingTexture?.srcSet}
                sizes="160px"
                alt=""
              />
            </div>
            <div className={styles.sayitTranscript} aria-hidden>
              <span>“Turn spoken thoughts into clean text.”</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderPreview(visible) {
    return (
      <div className={styles.preview}>
        {model.type === 'macosUtility' && renderMacOSUtilityPreview(visible)}
        {model.type === 'laptop' && (
          <>
            {renderKatakana('laptop', visible)}
            <div className={styles.model} data-device="laptop">
              {!modelLoaded && (
                <Loader center className={styles.loader} data-visible={visible} />
              )}
              {isHydrated && visible && (
                <Suspense>
                  <Model
                    alt={model.alt}
                    cameraPosition={{ x: 0, y: 0, z: 8 }}
                    showDelay={700}
                    onLoad={handleModelLoad}
                    show={visible}
                    models={[
                      {
                        ...deviceModels.laptop,
                        texture: {
                          ...model.textures[0],
                          sizes: laptopSizes,
                        },
                      },
                    ]}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
        {model.type === 'phone' && (
          <>
            {renderKatakana('phone', visible)}
            <div className={styles.model} data-device="phone">
              {!modelLoaded && (
                <Loader center className={styles.loader} data-visible={visible} />
              )}
              {isHydrated && visible && (
                <Suspense>
                  <Model
                    alt={model.alt}
                    cameraPosition={{ x: 0, y: 0, z: 11.5 }}
                    showDelay={300}
                    onLoad={handleModelLoad}
                    show={visible}
                    models={model.textures.map((texture, index) => ({
                      ...deviceModels.phone,
                      position: phonePositions[index],
                      texture: {
                        ...texture,
                        sizes: phoneSizes,
                      },
                    }))}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <Section
      className={styles.summary}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.content}>
        <Transition in={sectionVisible || focused}>
          {({ visible }) => (
            <>
              {!alternate && !isMobile && (
                <>
                  {renderDetails(visible)}
                  {renderPreview(visible)}
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
}
````

## File: app/routes/projects.$slug/route.jsx
````javascript
import { json, redirect } from '@remix-run/cloudflare';
import { useLoaderData } from '@remix-run/react';
import { getProjectBySlug } from '~/data/projects';
import { legacyProjectSlugRedirects, resolveProjectSlug } from '~/data/project-content';
import { baseMeta } from '~/utils/meta';
import { ProjectCase } from '../projects/project-case';

export const loader = async ({ params }) => {
  // Permanent redirect for legacy slugs so old links keep working in search results.
  if (legacyProjectSlugRedirects[params.slug]) {
    return redirect(`/projects/${legacyProjectSlugRedirects[params.slug]}`, 301);
  }

  const resolvedSlug = resolveProjectSlug(params.slug);
  const project = getProjectBySlug(resolvedSlug);

  if (!project) {
    throw new Response(null, { status: 404, statusText: 'Project not found' });
  }

  return json({ slug: project.slug });
};

export const meta = ({ params }) => {
  const project = getProjectBySlug(resolveProjectSlug(params.slug));

  if (!project) {
    return baseMeta({
      title: 'Project not found',
      description: 'The requested project could not be found.',
      path: `/projects/${params.slug}`,
    });
  }

  return baseMeta({
    title: project.title,
    description: project.description,
    prefix: 'Projects',
    path: `/projects/${params.slug}`,
  });
};

export default function ProjectRoute() {
  const { slug } = useLoaderData();
  const project = getProjectBySlug(slug);

  return <ProjectCase project={project} />;
}
````

## File: app/root.jsx
````javascript
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useNavigation,
  useRouteError,
} from '@remix-run/react';
import { createCookieSessionStorage, json } from '@remix-run/cloudflare';
import { ThemeProvider, themeStyles } from '~/components/theme-provider';
import InterVariable from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2';
import { useEffect } from 'react';
import { Error } from '~/layouts/error';
import { VisuallyHidden } from '~/components/visually-hidden';
import { Navbar } from '~/layouts/navbar';
import { Progress } from '~/components/progress';
import { getAlternateLinks } from '~/i18n/links';
import { localeMeta } from '~/i18n/locales';
import { getLocaleFromPathname, getPathnameWithoutTrailingSlash } from '~/i18n/route';
import { getSessionSecrets } from '~/utils/session';
import { personSchema, websiteSchema } from '~/utils/meta';
import config from '~/config.json';
import styles from './root.module.css';
import './reset.module.css';
import './global.module.css';

export const links = () => [
  {
    rel: 'preload',
    href: InterVariable,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
  { rel: 'apple-touch-icon', href: '/icon-256.png', sizes: '256x256' },
  { rel: 'author', href: '/humans.txt', type: 'text/plain' },
];

export const loader = async ({ request, context }) => {
  const { url } = request;
  const { pathname } = new URL(url);
  const locale = getLocaleFromPathname(pathname);
  const pathnameSliced = getPathnameWithoutTrailingSlash(pathname);
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const alternateLinks = getAlternateLinks(pathnameSliced);

  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 604_800,
      path: '/',
      sameSite: 'lax',
      secrets: getSessionSecrets(request, context.cloudflare.env),
      secure: true,
    },
  });

  const session = await getSession(request.headers.get('Cookie'));
  const theme = session.get('theme') || 'dark';

  return json(
    { canonicalUrl, locale, alternateLinks, theme },
    {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    }
  );
};

export default function App() {
  let { canonicalUrl, locale, alternateLinks, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  const htmlLang = localeMeta[locale]?.htmlLang || localeMeta.en.htmlLang;

  if (fetcher.formData?.has('theme')) {
    theme = fetcher.formData.get('theme');
  }

  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === 'dark' ? 'light' : 'dark' },
      { action: '/api/set-theme', method: 'post' }
    );
  }

  useEffect(() => {
    console.info(
      `${config.ascii}\n`,
      `Taking a peek huh? Check out the source code: ${config.repo}\n\n`
    );
  }, []);

  return (
    <html lang={htmlLang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Theme color doesn't support oklch so I'm hard coding these hexes for now */}
        <meta name="theme-color" content={theme === 'dark' ? '#111' : '#F2F2F2'} />
        <meta
          name="color-scheme"
          content={theme === 'light' ? 'light dark' : 'dark light'}
        />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
        <link rel="canonical" href={canonicalUrl} />
        {alternateLinks.map(link => (
          <link
            key={link.hrefLang}
            rel={link.rel}
            hrefLang={link.hrefLang}
            href={link.href}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema(locale)) }}
        />
      </head>
      <body data-theme={theme}>
        <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
          <Progress />
          <VisuallyHidden showOnFocus as="a" className={styles.skip} href="#main-content">
            Skip to main content
          </VisuallyHidden>
          <Navbar />
          <main
            id="main-content"
            className={styles.container}
            tabIndex={-1}
            data-loading={state === 'loading'}
          >
            <Outlet />
          </main>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111" />
        <meta name="color-scheme" content="dark light" />
        <style dangerouslySetInnerHTML={{ __html: themeStyles }} />
        <Meta />
        <Links />
      </head>
      <body data-theme="dark">
        <Error error={error} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
````

## File: public/manifest.json
````json
{
  "short_name": "Prince Niu",
  "name": "Portfolio of Zhuo (Prince) Niu",
  "description": "Portfolio of Zhuo (Prince) Niu — UI/UX designer and AI product developer working at the intersection of Human Factors, Product Design, and AI.",
  "lang": "en",
  "id": "/",
  "scope": "/",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait-primary",
  "theme_color": "#111111",
  "background_color": "#111111",
  "icons": [
    {
      "src": "shortcut.png",
      "sizes": "64x64",
      "type": "image/png"
    },
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icon-256.png",
      "sizes": "256x256",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
````

## File: wrangler.toml
````toml
compatibility_date = "2024-01-29"

# KV bindings:
# - MY_KV: legacy session-cookie binding kept for backwards compatibility
# - CONTACT_RATE_LIMIT: per-IP rate limit on contact-form submissions
#   (action falls through gracefully if the binding is missing in dev)
kv_namespaces = [
  { id = "MY_KV", binding = "MY_KV" },
  { id = "2f5cf6da199b4ef9abb81d45acb80761", binding = "CONTACT_RATE_LIMIT" }
]
````

## File: app/routes/contact/contact.jsx
````javascript
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { contactContent as enContact } from '~/data/site-content';
import { contactContent as zhContact } from '~/data/content/zh/site-content';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { useRef } from 'react';
import { cssProps, msToNum, numToMs } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname, localizePath } from '~/i18n/route';
import { json } from '@remix-run/cloudflare';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import styles from './contact.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description: enContact.metaDescription,
    path: '/contact',
  });
};

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Per-IP rate limit on contact form submissions. Cloudflare KV TTL acts as
// the cooldown window; if the KV binding is missing (local dev without the
// namespace bound) we skip the check rather than hard-failing.
const RATE_LIMIT_WINDOW_SECONDS = 60;

async function isRateLimited(env, request) {
  const kv = env.CONTACT_RATE_LIMIT;
  if (!kv) return false;
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const key = `contact:${ip}`;
  const recent = await kv.get(key);
  if (recent) return true;
  await kv.put(key, '1', { expirationTtl: RATE_LIMIT_WINDOW_SECONDS });
  return false;
}

function getContentForRequest(request) {
  const referer = request.headers.get('referer') || '';
  const locale = getLocaleFromPathname(
    referer ? new URL(referer).pathname : '/'
  );
  return locale === 'zh' ? zhContact : enContact;
}

export async function action({ context, request }) {
  const env = context.cloudflare?.env || {};
  const formData = await request.formData();
  const isBot = String(formData.get('name'));
  const email = String(formData.get('email'));
  const message = String(formData.get('message'));
  const errors = {};

  // Return without sending if a bot trips the honeypot
  if (isBot) return json({ success: true });

  // Throttle real submissions before doing any expensive work
  const content = getContentForRequest(request);
  if (await isRateLimited(env, request)) {
    return json(
      { errors: { form: content.rateLimitedMessage } },
      { status: 429 }
    );
  }

  // Handle input validation on the server
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!message) {
    errors.message = 'Please enter a message.';
  }

  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  const requiredEnvVars = [
    env.AWS_ACCESS_KEY_ID,
    env.AWS_SECRET_ACCESS_KEY,
    env.EMAIL,
    env.FROM_EMAIL,
  ];

  if (requiredEnvVars.some(value => !value)) {
    return json(
      {
        errors: {
          form: content.unconfiguredMessage,
        },
      },
      { status: 500 }
    );
  }

  const ses = new SESClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: env.AWS_ACCESS_KEY_ID,
      secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    },
  });

  try {
    await ses.send(
      new SendEmailCommand({
        Destination: {
          ToAddresses: [env.EMAIL],
        },
        Message: {
          Body: {
            Text: {
              Data: `From: ${email}\n\n${message}`,
            },
          },
          Subject: {
            Data: `Portfolio message from ${email}`,
          },
        },
        Source: `Portfolio <${env.FROM_EMAIL}>`,
        ReplyToAddresses: [email],
      })
    );
  } catch {
    return json(
      {
        errors: {
          form: content.failedMessage,
        },
      },
      { status: 500 }
    );
  }

  return json({ success: true });
}

export const Contact = () => {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const content = locale === 'zh' ? zhContact : enContact;
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === 'submitting';

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!actionData?.success} timeout={1600}>
        {({ status, nodeRef }) => (
          <Form
            unstable_viewTransition
            className={styles.form}
            method="post"
            ref={nodeRef}
          >
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
              style={getDelay(tokens.base.durationXS, initDelay, 0.3)}
            >
              <DecoderText
                text={content.title}
                start={status !== 'exited'}
                delay={300}
              />
            </Heading>
            <Divider
              className={styles.divider}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay, 0.4)}
            />
            {/* Hidden honeypot field to identify bots */}
            <Input
              className={styles.botkiller}
              label="Name"
              name="name"
              maxLength={MAX_EMAIL_LENGTH}
            />
            <Input
              required
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationXS, initDelay)}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              style={getDelay(tokens.base.durationS, initDelay)}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />
            <Transition
              unmount
              in={!sending && actionData?.errors}
              timeout={msToNum(tokens.base.durationM)}
            >
              {({ status: errorStatus, nodeRef }) => (
                <div
                  className={styles.formError}
                  ref={nodeRef}
                  data-status={errorStatus}
                  role="alert"
                  aria-live="polite"
                  style={cssProps({
                    height: errorStatus ? errorRef.current?.offsetHeight : 0,
                  })}
                >
                  <div className={styles.formErrorContent} ref={errorRef}>
                    <div className={styles.formErrorMessage}>
                      <Icon className={styles.formErrorIcon} icon="error" />
                      {[
                        actionData?.errors?.form,
                        actionData?.errors?.email,
                        actionData?.errors?.message,
                      ]
                        .filter(Boolean)
                        .join(' · ')}
                    </div>
                  </div>
                </div>
              )}
            </Transition>
            <Button
              className={styles.button}
              data-status={status}
              data-sending={sending}
              style={getDelay(tokens.base.durationM, initDelay)}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
            <p
              className={styles.privacyNote}
              data-status={status}
              style={getDelay(tokens.base.durationL, initDelay)}
            >
              {content.privacyNote}
            </p>
          </Form>
        )}
      </Transition>
      <Transition unmount in={actionData?.success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading
              level={3}
              as="h3"
              className={styles.completeTitle}
              data-status={status}
            >
              {content.successTitle}
            </Heading>
            <Text
              size="l"
              as="p"
              className={styles.completeText}
              data-status={status}
              style={getDelay(tokens.base.durationXS)}
            >
              {content.successBody}
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              style={getDelay(tokens.base.durationM)}
              href={localizePath('/', locale)}
              icon="chevron-right"
            >
              {content.backLabel}
            </Button>
          </div>
        )}
      </Transition>
      <Footer className={styles.footer} />
    </Section>
  );
};

function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
````

## File: app/routes/home/project-summary.module.css
````css
.summary {
  min-height: 80vh;
  width: 100%;
  max-height: 1080px;
  padding-bottom: var(--spaceL);
  margin: 96px 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-margin-top: var(--spaceXL);

  @media (--mediaDesktop) {
    margin: var(--space2XL) 0;
  }

  @media (--mediaTablet) {
    height: auto;
    margin: var(--space3XL) 0;
  }

  @media (--mediaMobile) {
    padding-bottom: var(--space4XL);
    margin-bottom: 0;
  }

  &[data-first='true'] {
    margin-top: 0;

    @media (--mediaTablet) {
      margin-top: 0;
    }
  }
}

.content {
  --textColumnWidth: 36%;

  width: 100%;
  max-width: var(--maxWidthL);
  align-items: center;
  justify-content: center;
  display: grid;
  grid-template-columns: var(--textColumnWidth) 1fr;
  grid-column-gap: var(--space2XL);

  .summary[data-alternate='true'] & {
    grid-template-columns: 1fr var(--textColumnWidth);
  }

  @media (--mediaLaptop) {
    --textColumnWidth: 40%;
  }

  @media (--mediaTablet) {
    .summary[data-alternate='true'] & {
      grid-template-columns: 100%;
    }

    grid-template-columns: 100%;
    flex-direction: column-reverse;
    height: auto;
  }
}

.details {
  z-index: var(--zIndex1);
  position: relative;

  @media (--mediaTablet) {
    flex: 0 0 auto;
    max-width: 410px;
    grid-row: 2;
    grid-column: 1;
    justify-self: center;
  }
}

.preview {
  position: relative;
  display: flex;
  align-items: center;
  justify-self: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.model {
  --width: 180%;
  --aspectRatio: 12 / 10;

  min-width: var(--width);
  aspect-ratio: var(--aspectRatio);
  display: grid;
  position: relative;

  &[data-device='laptop'] {
    top: 6%;
    left: 14%;

    @media (--mediaDesktop) {
      --width: 180%;
    }

    @media (--mediaTablet) {
      --width: 140%;

      top: 10%;
      left: 0;
    }
  }

  &[data-device='phone'] {
    --width: 116%;
    --aspectRatio: 7 / 10;

    top: 5%;
    left: -10%;

    @media (--mediaDesktop) {
      --width: 108%;

      left: 0;
    }

    @media (--mediaTablet) {
      --width: 108%;

      left: 0;
      max-height: 60vh;
    }

    @media (--mediaMobile) {
      --width: 108%;

      left: 0;
      max-height: none;
    }
  }
}

.loader {
  opacity: 0;
  transition: opacity 400ms ease 1000ms;

  &[data-visible='true'] {
    opacity: 1;
  }
}

.svg {
  opacity: 0;
  transition: opacity 1200ms ease 1400ms;
  fill: var(--textTitle);

  &[data-visible='true'] {
    opacity: var(--opacity);
  }

  &[data-device='laptop'] {
    position: absolute;
    width: 100%;
    right: -36%;
    bottom: 24%;
    transform: translateY(50%);

    @media (--mediaTablet) {
      width: 80%;
      right: -10%;
      bottom: 18%;
    }

    @media (--mediaMobile) {
      right: 0;
    }
  }

  &[data-device='phone'] {
    position: absolute;
    bottom: 23%;
    transform: translateY(50%);
    width: 100%;
    transition-delay: 800ms;

    @media (--mediaTablet) {
      width: 80%;
      bottom: 23%;
    }
  }
}

.sayitPreview {
  --previewDelay: 500ms;

  position: relative;
  width: min(720px, 112%);
  aspect-ratio: 1.24 / 1;
  display: grid;
  place-items: center;
  opacity: 0;
  transform: translate3d(0, var(--spaceL), 0) scale(0.96);
  transition-property: opacity, transform;
  transition-duration: var(--durationXL);
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-delay: var(--previewDelay);

  &[data-visible='true'] {
    opacity: 1;
    transform: none;
  }

  @media (--mediaTablet) {
    width: min(680px, 100%);
    margin-bottom: var(--spaceXL);
  }

  @media (--mediaMobile) {
    width: 108%;
  }
}

.sayitGlow {
  position: absolute;
  inset: 6% 4% 0;
  background:
    radial-gradient(circle at 64% 42%, color-mix(in srgb, var(--primary) 46%, transparent), transparent 38%),
    radial-gradient(circle at 28% 72%, color-mix(in srgb, var(--primary) 26%, transparent), transparent 34%);
  filter: blur(48px);
  opacity: 0.62;
  transform: translateZ(0);
}

.sayitWindow {
  position: relative;
  width: 86%;
  min-height: 64%;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--textTitle) 15%, transparent);
  border-radius: 28px;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--background) 72%, #202431), color-mix(in srgb, var(--background) 88%, #090b10)),
    color-mix(in srgb, var(--background) 92%, #111827);
  box-shadow:
    0 32px 80px color-mix(in srgb, #000 42%, transparent),
    inset 0 1px 0 color-mix(in srgb, #fff 14%, transparent);
  isolation: isolate;
}

.sayitWindow::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, color-mix(in srgb, #fff 10%, transparent), transparent 42%),
    radial-gradient(circle at 78% 18%, color-mix(in srgb, var(--primary) 18%, transparent), transparent 30%);
  pointer-events: none;
  z-index: -1;
}

.sayitMenuBar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spaceM);
  align-items: center;
  min-height: 44px;
  padding: 0 var(--spaceM);
  border-bottom: 1px solid color-mix(in srgb, var(--textTitle) 10%, transparent);
  background: color-mix(in srgb, var(--background) 84%, transparent);
  color: var(--textLight);
  font-size: var(--fontSizeBodyS);
  backdrop-filter: blur(18px);
}

.sayitTrafficLights,
.sayitMenuItems,
.sayitStatus,
.sayitWaveform {
  display: flex;
  align-items: center;
}

.sayitTrafficLights {
  gap: 7px;
}

.sayitTrafficLights span {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--textLight) 34%, transparent);
}

.sayitTrafficLights span:nth-child(1) {
  background: #ff6159;
}

.sayitTrafficLights span:nth-child(2) {
  background: #ffbd2e;
}

.sayitTrafficLights span:nth-child(3) {
  background: #28c840;
}

.sayitMenuItems {
  gap: var(--spaceM);
  opacity: 0.76;
}

.sayitStatus {
  gap: 8px;
  color: var(--primary);
  font-weight: var(--fontWeightMedium);
}

.sayitStatusDot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: var(--primary);
  box-shadow: 0 0 18px var(--primary);
}

.sayitCanvas {
  position: relative;
  min-height: 360px;
  padding: var(--spaceXL);

  @media (--mediaMobile) {
    min-height: 300px;
    padding: var(--spaceL);
  }
}

.sayitHotkey,
.sayitTranscript,
.sayitRecordingCard {
  position: absolute;
  border: 1px solid color-mix(in srgb, var(--textTitle) 12%, transparent);
  background: color-mix(in srgb, var(--background) 72%, transparent);
  box-shadow: 0 18px 50px color-mix(in srgb, #000 32%, transparent);
  backdrop-filter: blur(18px);
}

.sayitHotkey {
  top: var(--spaceXL);
  right: var(--spaceXL);
  display: grid;
  grid-template-columns: auto auto;
  gap: 4px 8px;
  align-items: center;
  padding: 10px 14px;
  border-radius: 16px;
  color: var(--textTitle);
  font-size: var(--fontSizeBodyS);
  font-weight: var(--fontWeightMedium);
}

.sayitHotkey small {
  grid-column: 1 / -1;
  color: var(--textLight);
  font-size: 0.68rem;
  font-weight: var(--fontWeightRegular);
}

.sayitPopover {
  position: absolute;
  left: 10%;
  top: 17%;
  width: 48%;
  max-width: 320px;
  border-radius: 22px;
  box-shadow: 0 28px 70px color-mix(in srgb, #000 48%, transparent);
}

.sayitRecordingCard {
  right: 10%;
  bottom: 23%;
  width: 30%;
  min-width: 150px;
  padding: 10px;
  border-radius: 20px;
}

.sayitRecordingCard img {
  width: 100%;
  display: block;
  border-radius: 14px;
  opacity: 0.82;
}

.sayitWaveform {
  height: 22px;
  gap: 5px;
  justify-content: center;
  margin-bottom: 8px;
}

.sayitWaveform span {
  width: 4px;
  border-radius: 999px;
  background: var(--primary);
  box-shadow: 0 0 12px color-mix(in srgb, var(--primary) 72%, transparent);
}

.sayitWaveform span:nth-child(1) { height: 9px; }
.sayitWaveform span:nth-child(2) { height: 16px; }
.sayitWaveform span:nth-child(3) { height: 22px; }
.sayitWaveform span:nth-child(4) { height: 14px; }
.sayitWaveform span:nth-child(5) { height: 18px; }

.sayitTranscript {
  left: 18%;
  right: 12%;
  bottom: var(--spaceXL);
  padding: 14px 18px;
  border-radius: 18px;
  color: var(--textTitle);
  font-size: var(--fontSizeBodyS);
  line-height: var(--lineHeightBody);
}

@media (--mediaMobile) {
  .sayitMenuItems span:nth-child(n + 2) {
    display: none;
  }

  .sayitPopover {
    left: 6%;
    top: 22%;
    width: 58%;
  }

  .sayitHotkey {
    top: var(--spaceM);
    right: var(--spaceM);
  }

  .sayitRecordingCard {
    right: 7%;
    bottom: 26%;
    width: 34%;
  }

  .sayitTranscript {
    left: var(--spaceM);
    right: var(--spaceM);
    bottom: var(--spaceM);
  }
}

.index {
  position: relative;
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: var(--spaceM);
  align-items: center;
  margin-bottom: var(--spaceXL);
}

.indexNumber {
  font-size: var(--fontSizeBodyS);
  font-weight: var(--fontWeightMedium);
  color: var(--primary);
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationM);
  transition-delay: 1.3s;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translateX(calc(var(--spaceM) * -1));
  }

  &[data-visible='true'] {
    transform: translateX(0);
    opacity: 1;
  }
}

.title {
  margin-bottom: var(--spaceL);
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--durationM);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--spaceL), 0);
  }

  &[data-visible='true'] {
    transform: none;
    opacity: 1;
  }
}

.description {
  margin-bottom: var(--spaceXL);
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--durationL);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--spaceL), 0);
  }

  &[data-visible='true'] {
    transform: none;
    opacity: 1;
  }
}

.quickFacts {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spaceS);
  margin: 0 0 var(--spaceXL) 0;
  padding: var(--spaceM) 0 0 0;
  border-top: 1px solid color-mix(in srgb, var(--textBody) 18%, transparent);
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--durationL);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--spaceL), 0);
  }

  &[data-visible='true'] {
    transform: none;
    opacity: 1;
  }
}

.quickFactRow {
  display: grid;
  grid-template-columns: 92px 1fr;
  align-items: baseline;
  gap: var(--spaceM);

  @media (--mediaMobile) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
}

.quickFactLabel {
  font-size: var(--fontSizeBodyS);
  font-weight: var(--fontWeightMedium);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--primary);
  margin: 0;
}

.quickFactValue {
  font-size: var(--fontSizeBodyS);
  line-height: var(--lineHeightBody);
  color: var(--textLight);
  margin: 0;
}

.button {
  transition-property: opacity;
  transition-timing-function: var(--bezierFastoutSlowin);
  transition-duration: var(--durationXL);
  transition-delay: var(--durationXL);
  transform: translate3d(0, var(--spaceL), 0);
  opacity: 0;

  @media (--mediaUseMotion) {
    transition-property: transform, opacity;
    transform: translate3d(0, var(--spaceL), 0);
  }

  &[data-visible='true'] {
    transform: none;
    opacity: 1;
  }
}
````

## File: app/utils/meta.js
````javascript
import config from '~/config.json';
import { localeMeta } from '~/i18n/locales';

const { name, url, twitter, linkedin, github } = config;
const defaultOgImage = `${url}/social-image.png`;

export function baseMeta({
  title,
  description,
  prefix = name,
  ogImage = defaultOgImage,
  url: pageUrl = url,
  path,
  type = 'website',
  locale = 'en',
}) {
  const titleText = [prefix, title].filter(Boolean).join(' | ');
  const resolvedUrl = path ? `${url}${path}` : pageUrl;
  const resolvedLocale = localeMeta[locale] || localeMeta.en;

  const meta = [
    { title: titleText },
    { name: 'description', content: description },
    { name: 'author', content: name },
    {
      name: 'keywords',
      content:
        'product design, ui ux, human factors, ai products, prototyping, design engineering, react native, swiftui, portfolio',
    },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:alt', content: `Portfolio of ${name}` },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '675' },
    { property: 'og:title', content: titleText },
    { property: 'og:site_name', content: name },
    { property: 'og:type', content: type },
    { property: 'og:url', content: resolvedUrl },
    { property: 'og:locale', content: resolvedLocale.ogLocale },
    { property: 'og:description', content: description },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:description', content: description },
    { property: 'twitter:title', content: titleText },
    { property: 'twitter:site', content: url },
    { property: 'twitter:image', content: ogImage },
  ];

  if (twitter) {
    meta.push({ property: 'twitter:creator', content: twitter });
  }

  return meta;
}

export function personSchema() {
  const sameAs = [];
  if (github) sameAs.push(`https://github.com/${github}`);
  if (linkedin) sameAs.push(`https://www.linkedin.com/in/${linkedin}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    image: `${url}/social-image.png`,
    jobTitle: 'UI/UX Designer & AI Product Developer',
    description:
      'Designer-builder working at the intersection of Human Factors, Product Design, and AI.',
    alumniOf: [
      { '@type': 'EducationalOrganization', name: 'Tufts University' },
      { '@type': 'EducationalOrganization', name: 'Purdue University' },
    ],
    knowsAbout: [
      'Human Factors Engineering',
      'Product Design',
      'UX Research',
      'AI Products',
      'Prototyping',
      'Design Engineering',
      'React Native',
      'SwiftUI',
    ],
    sameAs,
  };
}

export function websiteSchema(locale = 'en') {
  const resolvedLocale = localeMeta[locale] || localeMeta.en;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    inLanguage: resolvedLocale.schemaLanguage,
  };
}
````

## File: app/config.json
````json
{
  "name": "Zhuo (Prince) Niu",
  "role": "Designer-Builder",
  "disciplines": [
    "Human Factors",
    "AI Products",
    "Prototyping",
    "UX Research",
    "Design Engineering"
  ],
  "url": "https://princeniu.com",
  "email": "Zhuo.Niu@tufts.edu",
  "location": "Medford, MA",
  "bluesky": "",
  "figma": "",
  "github": "princeniu",
  "linkedin": "zhuoniu110",
  "repo": "https://github.com/princeniu/Personal-Web",
  "ascii": "__  __  __\n\\ \\ \\ \\ \\∕\n \\ \\∕\\ \\\n  \\∕  \\∕\n"
}
````

## File: app/routes/projects/project-case.jsx
````javascript
import { lazy, Suspense } from 'react';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { ThemeProvider } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { media } from '~/utils/style';
import styles from './project-case.module.css';

const Carousel = lazy(() =>
  import('~/components/carousel').then(module => ({ default: module.Carousel }))
);

const imageSizes = `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`;

const renderBody = body =>
  body?.map(paragraph => (
    <ProjectSectionText key={paragraph}>{paragraph}</ProjectSectionText>
  ));

const renderImage = ({ image, alt, className, sizes = imageSizes, ...rest }) => (
  <Image
    className={className}
    src={image.src}
    srcSet={image.srcSet}
    width={image.width}
    height={image.height}
    placeholder={image.placeholder}
    alt={alt}
    sizes={sizes}
    {...rest}
  />
);

const renderTextRow = section => (
  <ProjectTextRow width={section.width}>
    <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
    {renderBody(section.body)}
  </ProjectTextRow>
);

const ProjectGallery = ({ section }) => {
  const [firstImage] = section.images;
  // Treat clearly portrait imagery (e.g. phone screenshots) as a constrained
  // device frame so a 428×1000 asset doesn't stretch the carousel into a
  // 2x-tall column on desktop.
  const isPortrait =
    section.portrait ?? firstImage.height > firstImage.width * 1.4;
  const portraitSizes = `(max-width: ${media.mobile}px) 70vw, 360px`;

  return (
    <ProjectSection light={section.light}>
      <ProjectSectionContent>
        <div className={isPortrait ? styles.portraitGallery : undefined}>
          <Suspense>
            <Carousel
              placeholder={firstImage.placeholder}
              images={section.images.map(image => ({
                srcSet: image.srcSet,
                sizes: isPortrait ? portraitSizes : imageSizes,
                alt: image.alt || section.alt || section.heading,
              }))}
              width={firstImage.width}
              height={firstImage.height}
            />
          </Suspense>
        </div>
        {renderTextRow(section)}
      </ProjectSectionContent>
    </ProjectSection>
  );
};

const ProjectImageSection = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionContent>
      {section.heading && renderTextRow(section)}
      {renderImage({
        image: section.image,
        alt: section.alt,
        sizes: imageSizes,
      })}
    </ProjectSectionContent>
  </ProjectSection>
);

const ProjectImageTextSection = ({ section }) => (
  <ProjectSection padding="top" light={section.light}>
    <ProjectSectionContent className={styles.grid}>
      <div className={styles.gridImage}>
        <div className={styles.gridBackground}>
          {renderImage({
            image: section.image,
            alt: section.alt,
            sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`,
          })}
        </div>
      </div>
      <div className={styles.gridText}>
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </div>
    </ProjectSectionContent>
  </ProjectSection>
);

const ProjectComparisonColumns = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionColumns centered className={styles.columns}>
      <div>
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </div>
      <div className={styles.sidebarImages}>
        {renderImage({
          image: section.image,
          alt: section.alt,
          className: styles.sidebarImage,
          sizes: `(max-width: ${media.mobile}px) 200px, 343px`,
        })}
      </div>
    </ProjectSectionColumns>
  </ProjectSection>
);

const ProjectTimeline = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionContent>
      <ProjectTextRow width="m">
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </ProjectTextRow>
      <ol
        className={styles.timeline}
        style={{ '--cols-desktop': Math.min(7, section.items.length) }}
        aria-label={section.heading}
      >
        {section.items.map((item, index) => (
          <li className={styles.timelineItem} key={item.title}>
            <span className={styles.timelineIndex}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.timelineTitle}>{item.title}</h3>
            <p className={styles.timelineDescription}>{item.description}</p>
          </li>
        ))}
      </ol>
    </ProjectSectionContent>
  </ProjectSection>
);

const ProjectGrid = ({ section }) => {
  const tagsLabel = section.tagsLabel || 'Tools and methods';
  const ctaLabel = section.ctaLabel || 'View case study';

  return (
    <ProjectSection light={section.light}>
      <ProjectSectionContent>
        <ProjectTextRow width="m">
          <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
          {renderBody(section.body)}
        </ProjectTextRow>
        <ul className={styles.projectGrid} aria-label={section.heading}>
          {section.items.map(item => {
            const inner = (
              <>
                {item.timeframe && (
                  <span className={styles.projectGridTimeframe}>{item.timeframe}</span>
                )}
                <h3 className={styles.projectGridTitle}>{item.title}</h3>
                <p className={styles.projectGridDescription}>{item.description}</p>
                {!!item.tags?.length && (
                  <ul className={styles.projectGridTags} aria-label={tagsLabel}>
                    {item.tags.map(tag => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
                {item.href && (
                  <span className={styles.projectGridCta} aria-hidden>
                    {ctaLabel} →
                  </span>
                )}
              </>
            );

          return (
            <li
              key={item.title}
              className={styles.projectGridItem}
              data-linked={!!item.href}
            >
              {item.href ? (
                <a className={styles.projectGridLink} href={item.href}>
                  {inner}
                </a>
              ) : (
                <div className={styles.projectGridStatic}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </ProjectSectionContent>
  </ProjectSection>
  );
};

const ProjectMetrics = ({ section }) => (
  <ProjectSection light={section.light}>
    <ProjectSectionContent>
      <ProjectTextRow width="m">
        <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
        {renderBody(section.body)}
      </ProjectTextRow>
      <div
        className={styles.metricsGrid}
        style={{
          '--cols-desktop': Math.min(5, section.metrics.length),
          '--cols-laptop': Math.min(3, section.metrics.length),
        }}
      >
        {section.metrics.map(metric => (
          <div className={styles.metricCard} key={metric.label}>
            <strong className={styles.metricValue}>{metric.value}</strong>
            <span className={styles.metricLabel}>{metric.label}</span>
          </div>
        ))}
      </div>
      <dl className={styles.evidenceList}>
        {section.evidence.map(item => (
          <div className={styles.evidenceItem} key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </ProjectSectionContent>
  </ProjectSection>
);

const ProjectOutcome = ({ section }) => {
  if (!section.image) {
    return (
      <ProjectSection>
        <ProjectSectionContent>{renderTextRow(section)}</ProjectSectionContent>
      </ProjectSection>
    );
  }

  return (
    <ThemeProvider theme="dark" data-invert>
      <ProjectSection
        backgroundOverlayOpacity={section.backgroundOverlayOpacity ?? 0.5}
        backgroundElement={renderImage({
          image: section.image,
          alt: '',
          role: 'presentation',
          sizes: '100vw',
        })}
      >
        <ProjectSectionColumns width="full">
          <ProjectSectionContent width="full">
            <ProjectTextRow width="s">
              <ProjectSectionHeading>{section.heading}</ProjectSectionHeading>
              {renderBody(section.body)}
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSectionColumns>
      </ProjectSection>
    </ThemeProvider>
  );
};

const ProjectSectionRenderer = ({ section }) => {
  switch (section.type) {
    case 'gallery':
      return <ProjectGallery section={section} />;
    case 'hero-image': {
      const isPortrait =
        section.portrait ?? section.image.height > section.image.width * 1.4;
      const portraitSizes = `(max-width: ${media.mobile}px) 70vw, 360px`;
      return (
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <div className={isPortrait ? styles.portraitHero : undefined}>
              <ProjectImage
                raised
                src={section.image.src}
                srcSet={section.image.srcSet}
                width={section.image.width}
                height={section.image.height}
                placeholder={section.image.placeholder}
                alt={section.alt}
                sizes={isPortrait ? portraitSizes : imageSizes}
              />
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      );
    }
    case 'image':
      return <ProjectImageSection section={section} />;
    case 'image-text':
      return <ProjectImageTextSection section={section} />;
    case 'comparison-columns':
      return <ProjectComparisonColumns section={section} />;
    case 'timeline':
      return <ProjectTimeline section={section} />;
    case 'metrics':
      return <ProjectMetrics section={section} />;
    case 'project-grid':
      return <ProjectGrid section={section} />;
    case 'outcome':
      return <ProjectOutcome section={section} />;
    default:
      return (
        <ProjectSection>
          <ProjectSectionContent>{renderTextRow(section)}</ProjectSectionContent>
        </ProjectSection>
      );
  }
};

export const ProjectCase = ({ project }) => (
  <>
    <ProjectContainer>
      {project.background && (
        <ProjectBackground
          src={project.background.src}
          srcSet={project.background.srcSet}
          width={project.background.width}
          height={project.background.height}
          placeholder={project.background.placeholder}
          opacity={project.background.opacity}
        />
      )}
      <ProjectHeader
        title={project.title}
        description={project.description}
        roles={project.roles}
        url={project.url}
        linkLabel={project.linkLabel}
      />
      {project.sections.map(section => (
        <ProjectSectionRenderer
          key={`${project.slug}-${section.heading || section.type}`}
          section={section}
        />
      ))}
    </ProjectContainer>
    <Footer />
  </>
);
````

## File: app/routes/projects/project-case.module.css
````css
.columns {
  margin: 20px 0 60px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 70px;
  margin: 40px 0;

  @media (--mediaTablet) {
    grid-template-columns: 1fr;
  }
}

.gridImage {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 100%;
  grid-column: 1;
  grid-row: 1;

  @media (--mediaLaptop) {
    grid-template-rows: 1fr;
  }
}

.gridBackground {
  grid-column: 1;
  grid-row: 1 / span 2;
  margin-top: 60px;

  @media (--mediaTablet) {
    padding: 0 120px;
  }

  @media (--mediaMobile) {
    padding: 0 60px;
  }
}

.gridText {
  padding-top: 80px;

  @media (--mediaDesktop) {
    padding-top: 40px;
  }

  @media (--mediaTablet) {
    padding-top: 0;
  }
}

.sidebarImages {
  display: grid;
  grid-template-columns: repeat(6, [col] 1fr);
  align-items: center;

  @media (--mediaTablet) {
    padding: 0 80px;
    margin-top: 60px;
  }

  @media (--mediaMobile) {
    padding: 0 20px;
    margin-top: 40px;
  }
}

.sidebarImage {
  grid-column: col 2 / span 4;
  grid-row: 1;
  position: relative;
  transform: scale(1.35);
}

.timeline {
  --line: color-mix(in lab, var(--text) 20%, transparent);

  display: grid;
  grid-template-columns: repeat(var(--cols-desktop, 7), 1fr);
  gap: var(--spaceM);
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 28px;
    left: 7%;
    right: 7%;
    height: 1px;
    background: var(--line);
  }

  @media (--mediaLaptop) {
    grid-template-columns: 1fr;
    gap: var(--spaceL);

    &::before {
      top: 0;
      bottom: 0;
      left: 22px;
      right: auto;
      width: 1px;
      height: auto;
    }
  }
}

.timelineItem {
  position: relative;
  display: grid;
  align-content: start;
  gap: var(--spaceS);
  padding-top: var(--spaceL);
  min-width: 0;

  @media (--mediaLaptop) {
    grid-template-columns: 44px 1fr;
    padding-top: 0;
    column-gap: var(--spaceM);
  }
}

.timelineIndex {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--background);
  color: var(--accent);
  font-size: var(--fontSizeBodyS);
  font-weight: var(--fontWeightMedium);
  z-index: 1;

  @media (--mediaLaptop) {
    grid-row: 1 / span 2;
    width: 44px;
    height: 44px;
  }
}

.timelineTitle {
  margin: 0;
  font-size: var(--fontSizeBodyM);
  overflow-wrap: anywhere;
}

.timelineDescription {
  margin: 0;
  color: var(--textLight);
  font-size: var(--fontSizeBodyM);
  line-height: 1.6;
  overflow-wrap: anywhere;
  hyphens: auto;
}

.metricsGrid {
  display: grid;
  grid-template-columns: repeat(var(--cols-desktop, 5), 1fr);
  gap: var(--spaceM);

  @media (--mediaLaptop) {
    grid-template-columns: repeat(var(--cols-laptop, 3), 1fr);
  }

  @media (--mediaTablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (--mediaMobile) {
    grid-template-columns: 1fr;
  }
}

.metricCard {
  border: 1px solid color-mix(in lab, var(--text) 16%, transparent);
  border-radius: 16px;
  padding: var(--spaceL);
  background: color-mix(in lab, var(--backgroundLight) 70%, transparent);
}

.metricValue {
  display: block;
  color: var(--accent);
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1;
  margin-bottom: var(--spaceS);
}

.metricLabel {
  color: var(--textLight);
  font-size: var(--fontSizeBodyS);
  line-height: 1.5;
}

.evidenceList {
  margin: 0;
  border-top: 1px solid color-mix(in lab, var(--text) 16%, transparent);
}

.evidenceItem {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: var(--spaceL);
  padding: var(--spaceL) 0;
  border-bottom: 1px solid color-mix(in lab, var(--text) 16%, transparent);

  & dt {
    font-weight: var(--fontWeightMedium);
  }

  & dd {
    margin: 0;
    color: var(--text);
  }

  @media (--mediaMobile) {
    grid-template-columns: 1fr;
    gap: var(--spaceS);
  }
}

/* Constrain phone-screenshot galleries and heroes (portrait aspect ratio)
   so they render at a reasonable size on desktop instead of stretching to
   full width. */
.portraitGallery,
.portraitHero {
  max-width: 360px;
  margin: 0 auto;

  @media (--mediaMobile) {
    max-width: 280px;
  }
}

.projectGrid {
  list-style: none;
  margin: var(--space2XL) 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spaceL);

  @media (--mediaTablet) {
    grid-template-columns: 1fr;
  }
}

.projectGridItem {
  display: flex;
}

.projectGridLink,
.projectGridStatic {
  display: flex;
  flex-direction: column;
  gap: var(--spaceS);
  width: 100%;
  padding: var(--spaceL);
  border: 1px solid color-mix(in lab, var(--text) 16%, transparent);
  border-radius: 16px;
  background: color-mix(in lab, var(--backgroundLight) 50%, transparent);
  text-decoration: none;
  color: inherit;
  transition: border-color var(--durationS) ease, transform var(--durationS) ease,
    background var(--durationS) ease;
}

.projectGridLink:hover,
.projectGridLink:focus-visible {
  border-color: var(--accent);
  background: color-mix(in lab, var(--accent) 8%, var(--backgroundLight));
  transform: translateY(-2px);
}

.projectGridTimeframe {
  font-size: var(--fontSizeBodyXS);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: var(--fontWeightMedium);
}

.projectGridTitle {
  margin: 0;
  font-size: var(--fontSizeH5);
  line-height: 1.2;
  color: var(--textTitle);
}

.projectGridDescription {
  margin: 0;
  color: var(--textBody);
  font-size: var(--fontSizeBodyM);
  line-height: 1.55;
}

.projectGridTags {
  list-style: none;
  margin: var(--spaceS) 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spaceXS) var(--spaceS);

  & li {
    font-size: var(--fontSizeBodyXS);
    color: var(--textLight);
    padding: 2px 8px;
    border-radius: 999px;
    background: color-mix(in lab, var(--text) 8%, transparent);
  }
}

.projectGridCta {
  margin-top: auto;
  padding-top: var(--spaceS);
  font-size: var(--fontSizeBodyS);
  color: var(--accent);
  font-weight: var(--fontWeightMedium);
}
````

## File: tests/project-content.test.mjs
````javascript
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import {
  featuredProjectSlugs,
  getProjectPath,
  legacyProjectSlugRedirects,
  portfolioProjects,
  resolveProjectSlug,
} from '../app/data/project-content.js';

test('portfolio projects have unique slugs and required fields', () => {
  const slugs = new Set();

  for (const project of portfolioProjects) {
    assert.equal(typeof project.slug, 'string');
    assert.ok(project.slug.length > 0);
    assert.equal(slugs.has(project.slug), false, `duplicate slug: ${project.slug}`);
    slugs.add(project.slug);

    assert.equal(typeof project.title, 'string');
    assert.ok(project.title.length > 0);
    assert.equal(typeof project.description, 'string');
    assert.ok(project.description.length > 0);
    assert.ok(Array.isArray(project.roles));
    assert.ok(project.roles.length > 0);
    assert.ok(project.summary);
    assert.equal(typeof project.summary.title, 'string');
    assert.equal(typeof project.summary.description, 'string');
    assert.equal(typeof project.summary.modelType, 'string');
    assert.ok(Array.isArray(project.sections));
    assert.ok(project.sections.length > 0);
  }
});

test('featured project slugs point at real projects in display order', () => {
  const availableSlugs = new Set(portfolioProjects.map(project => project.slug));

  assert.deepEqual(featuredProjectSlugs, [
    'trekassist',
    'etongue-sensory-platform',
    'porsche-digital-interface',
    'sayit',
    'posture-checker',
  ]);

  for (const slug of featuredProjectSlugs) {
    assert.ok(availableSlugs.has(slug), `missing featured project: ${slug}`);
  }
});

test('project paths use stable portfolio URLs', () => {
  assert.equal(
    getProjectPath('porsche-digital-interface'),
    '/projects/porsche-digital-interface'
  );
  assert.equal(getProjectPath('posture-checker'), '/projects/posture-checker');
  assert.equal(getProjectPath('all-work'), '/projects/all-work');
});

test('all-work is a first-class project route, with legacy more-work redirect', () => {
  assert.equal(resolveProjectSlug('all-work'), 'all-work');
  assert.equal(resolveProjectSlug('more-work'), 'all-work');
  assert.deepEqual(legacyProjectSlugRedirects, { 'more-work': 'all-work' });
});

test('repository metadata points to the active GitHub repo', () => {
  const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
  const configJson = JSON.parse(readFileSync('app/config.json', 'utf8'));

  assert.equal(packageJson.repository, 'https://github.com/princeniu/Personal-Web.git');
  assert.equal(configJson.repo, 'https://github.com/princeniu/Personal-Web');
});

test('sitemap only publishes intended public project routes', () => {
  const sitemap = readFileSync('public/sitemap.xml', 'utf8');

  assert.match(sitemap, /https:\/\/princeniu\.com\/projects\/all-work/);
  assert.match(sitemap, /https:\/\/princeniu\.com\/zh\/projects\/all-work/);
  assert.match(sitemap, /https:\/\/princeniu\.com\/zh\/contact/);
  assert.match(sitemap, /https:\/\/princeniu\.com\/zh\/uses/);
  assert.doesNotMatch(sitemap, /https:\/\/princeniu\.com\/projects\/more-work/);
  assert.doesNotMatch(sitemap, /https:\/\/princeniu\.com\/zh\/projects\/more-work/);
  assert.doesNotMatch(sitemap, /https:\/\/princeniu\.com\/projects\/sayit/);
  assert.doesNotMatch(sitemap, /https:\/\/princeniu\.com\/zh\/projects\/sayit/);

  for (const slug of [
    'porsche-digital-interface',
    'posture-checker',
    'trekassist',
    'etongue-sensory-platform',
    'little-lemon',
  ]) {
    assert.match(sitemap, new RegExp(`https://princeniu\\.com/projects/${slug}`));
    assert.match(sitemap, new RegExp(`https://princeniu\\.com/zh/projects/${slug}`));
  }
});
````

## File: app/data/site-content.js
````javascript
export const profileContent = {
  eyebrow: 'About me',
  heading: 'Designing the seam between people and complex systems.',
  description:
    'I’m Zhuo (Prince) Niu, a designer-builder working across UI/UX, AI products, and human factors. I’m currently studying Human Factors Engineering at Tufts, with a Computer Engineering background from Purdue.\n\nI like building products at the point where a vague idea has to become real. That usually means asking what problem is worth solving, designing the first usable flow, testing the rough version, and then building enough of it for people to actually use.\n\nMy work sits between human factors, product design, and engineering. I care about the small moments that make a product feel clear instead of confusing: the prompt, the feedback, the recovery path, the first click that makes sense. Recently, I shipped UI work for the Porsche Communication Management system at Porsche Asia Pacific (contributing to a 30% reduction in load time), built a BLE-paired posture-tracking app, and released SayIt — a macOS voice-to-text utility distributed through GitHub Releases.\n\nI’m currently looking for product design, UX, and human factors roles focused on thoughtful products, refined UI/UX, and complex multimodal experiences.',
  ctaLabel: 'Send me a message',
};

export const contactContent = {
  title: 'Say hello',
  metaDescription:
    'Get in touch about product design, frontend development, mobile projects, or collaboration opportunities.',
  privacyNote:
    'Your email is only used to reply to this message and is never shared.',
  rateLimitedMessage:
    'You just sent a message. Please wait a minute before sending another one.',
  successTitle: 'Message Sent',
  successBody: 'I’ll reply as soon as I can, usually within the week. Thanks for reaching out.',
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
````

## File: package.json
````json
{
  "name": "portfolio",
  "homepage": "https://princeniu.com",
  "description": "Portfolio site for Zhuo (Prince) Niu",
  "repository": "https://github.com/princeniu/Personal-Web.git",
  "author": "Zhuo (Prince) Niu",
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "build": "node ./scripts/generate-sitemap.cjs && remix vite:build",
    "dev": "node ./scripts/dev.cjs && remix vite:dev",
    "sitemap": "node ./scripts/generate-sitemap.cjs",
    "test": "node --test tests/*.test.mjs",
    "start": "wrangler pages dev ./build/client",
    "postinstall": "node ./scripts/draco.cjs",
    "deploy": "npm run build && wrangler pages deploy ./build/client --project-name personal-web --branch main",
    "dev:storybook": "storybook dev -p 6006",
    "build:storybook": "storybook build",
    "deploy:storybook": "wrangler pages deploy ./storybook-static --project-name portfolio-storybook --branch main"
  },
  "dependencies": {
    "@aws-sdk/client-ses": "^3.515.0",
    "@fontsource-variable/inter": "^5.2.8",
    "@mdx-js/react": "^3.0.1",
    "@remix-run/cloudflare": "^2.7.1",
    "@remix-run/cloudflare-pages": "^2.7.1",
    "@remix-run/react": "^2.7.1",
    "framer-motion": "^12.38.0",
    "isbot": "^4.1.0",
    "miniflare": "^3.20231030.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "rehype-img-size": "^1.0.1",
    "rehype-slug": "^6.0.0",
    "three": "^0.161.0",
    "three-stdlib": "^2.29.4"
  },
  "devDependencies": {
    "@csstools/postcss-global-data": "^2.1.1",
    "@mapbox/rehype-prism": "^0.9.0",
    "@mdx-js/rollup": "^3.0.1",
    "@remix-run/dev": "^2.7.1",
    "@storybook/addon-a11y": "^7.6.17",
    "@storybook/addon-essentials": "^7.6.17",
    "@storybook/addon-interactions": "^7.6.17",
    "@storybook/addon-links": "^7.6.17",
    "@storybook/blocks": "^7.6.17",
    "@storybook/react": "^7.6.17",
    "@storybook/react-vite": "^7.6.17",
    "@storybook/test": "^7.6.17",
    "eslint": "^8.56.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-import": "^2.29.1",
    "eslint-plugin-jsx-a11y": "^6.8.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-storybook": "^0.8.0",
    "node-fetch": "^3.3.2",
    "postcss": "^8.4.33",
    "postcss-custom-media": "^10.0.2",
    "prop-types": "^15.8.1",
    "remark-frontmatter": "^5.0.0",
    "remark-mdx-frontmatter": "^4.0.0",
    "sharp": "^0.34.5",
    "storybook": "^7.6.17",
    "vite": "^5.1.0",
    "vite-jsconfig-paths": "^2.0.1",
    "wrangler": "^4.86.0"
  },
  "engines": {
    "node": ">=20.19.2"
  }
}
````

## File: app/routes/home/home.jsx
````javascript
import { Footer } from '~/components/footer';
import { Button } from '~/components/button';
import { featuredProjects, zhFeaturedProjects } from '~/data/projects';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { createRef, useEffect, useRef, useState } from 'react';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname, localizePath } from '~/i18n/route';
import config from '~/config.json';
import profileImg from '~/assets/profile.webp';
import styles from './home.module.css';

// Prefetch draco decoder wasm + preload the About-section profile photo so
// it's ready by the time the user scrolls past the intro hero.
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
    {
      rel: 'preload',
      href: profileImg,
      as: 'image',
      fetchPriority: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Product Design · Human Factors · AI Products',
    description: `Portfolio of Zhuo (Prince) Niu — a designer-builder working at the intersection of Human Factors, Product Design, and AI. Shipped UI/UX for complex systems including in-car interfaces, safety-critical outdoor devices, and native macOS AI tools.`,
    path: '/',
  });
};

export const Home = () => {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const isZh = locale === 'zh';
  const projects = isZh ? zhFeaturedProjects : featuredProjects;
  const homeLabels = isZh
    ? {
        name: '牛拙Prince',
        role: 'Designer-Builder',
        disciplines: ['人因工程', 'AI 产品', '原型设计', 'UX 研究', '设计工程'],
        viewProject: '查看项目',
        explorePortfolio: '查看完整作品集',
        viewAllWork: '查看全部作品',
        scrollToProjects: '滚动到项目',
        listSeparator: '、',
        finalJoin: '和',
        pauseLabel: '暂停轮播领域标签',
        resumeLabel: '继续轮播领域标签',
        pauseTitle: '暂停',
        resumeTitle: '继续',
      }
    : {
        name: config.name,
        role: config.role,
        disciplines: config.disciplines,
        viewProject: 'View project',
        explorePortfolio: 'Explore the full portfolio',
        viewAllWork: 'View all work',
        scrollToProjects: 'Scroll to projects',
        listSeparator: ', ',
        finalJoin: ', and ',
        pauseLabel: 'Pause rotating disciplines',
        resumeLabel: 'Resume rotating disciplines',
        pauseTitle: 'Pause',
        resumeTitle: 'Resume',
      };
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectRefs = useRef([]);
  const details = useRef();

  projectRefs.current = projects.map(
    (_, index) => projectRefs.current[index] || createRef()
  );

  useEffect(() => {
    const sections = [intro, ...projectRefs.current, details].filter(
      section => section?.current
    );

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            setVisibleSections(prevSections =>
              prevSections.includes(section) ? prevSections : [...prevSections, section]
            );
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        name={homeLabels.name}
        role={homeLabels.role}
        disciplines={homeLabels.disciplines}
        sectionRef={intro}
        scrollTo={localizePath('/#projects', locale)}
        scrollLabel={homeLabels.scrollToProjects}
        listSeparator={homeLabels.listSeparator}
        finalJoin={homeLabels.finalJoin}
        pauseLabel={homeLabels.pauseLabel}
        resumeLabel={homeLabels.resumeLabel}
        pauseTitle={homeLabels.pauseTitle}
        resumeTitle={homeLabels.resumeTitle}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <div id="projects" />
      {projects.map((project, index) => (
        <ProjectSummary
          alternate={index % 2 === 1}
          buttonLink={localizePath(project.path, locale)}
          buttonText={homeLabels.viewProject}
          description={project.summary.description}
          id={`project-${index + 1}`}
          index={index + 1}
          key={project.slug}
          model={{
            alt: project.summary.modelAlt,
            textures: project.summary.textures,
            type: project.summary.modelType,
          }}
          quickFacts={project.summary.quickFacts}
          sectionRef={projectRefs.current[index]}
          title={project.summary.title}
          visible={visibleSections.includes(projectRefs.current[index]?.current)}
        />
      ))}
      <div className={styles.allWorkCta}>
        <span className={styles.allWorkEyebrow}>{homeLabels.explorePortfolio}</span>
        <Button
          className={styles.allWorkButton}
          iconHoverShift
          href={localizePath('/projects/all-work', locale)}
          iconEnd="arrow-right"
        >
          {homeLabels.viewAllWork}
        </Button>
      </div>
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
````

## File: public/sitemap.xml
````xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://princeniu.com/</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://princeniu.com/contact</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://princeniu.com/uses</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/contact</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/uses</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://princeniu.com/projects/all-work</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/projects/etongue-sensory-platform</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/projects/knowledgeos</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/projects/little-lemon</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/projects/porsche-digital-interface</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/projects/posture-checker</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/projects/trekassist</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/projects/all-work</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/projects/etongue-sensory-platform</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/projects/knowledgeos</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/projects/little-lemon</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/projects/porsche-digital-interface</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/projects/posture-checker</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://princeniu.com/zh/projects/trekassist</loc>
    <lastmod>2026-05-20</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
````

## File: README.md
````markdown
<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Zhuo (Prince) Niu Portfolio</h1>

<p align="center">
  <img src="/public/social-image.png" alt="Site preview" width="600" />
</p>

Personal portfolio for product design, mobile development, and frontend engineering work. Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/). Typeset in [Inter](https://rsms.me/inter/) (variable, Latin subset).

## Project Structure

Portfolio content is data-driven:

- `app/data/project-content.js` — project copy, slugs, roles, summaries, and section structure. Also defines `legacyProjectSlugRedirects` for permanent slug renames.
- `app/data/projects.js` — binds project content to imported assets (`app/assets/`).
- `app/routes/projects.$slug/route.jsx` — single dynamic route that handles every project, including 301 redirects for legacy slugs.
- `app/routes/projects/project-case.jsx` — maps each section `type` (`hero-image`, `gallery`, `image`, `image-text`, `comparison-columns`, `timeline`, `metrics`, `project-grid`, `outcome`, default text) to the right layout component.

### Asset naming convention

Assets are prefixed by project slug (`porsche-…`, `posture-…`, `trekassist-…`, `little-lemon-…`, `sayit-…`). Each visual ships in three variants — base (`name.jpg`), `name-large.jpg` for retina/desktop, and `name-placeholder.jpg` for the LQIP fade-in. New assets should follow the same convention.

### Adding a new project

1. Add assets to `app/assets/` using the `<slug>-<purpose>` naming convention.
2. Add the project entry to `portfolioProjects` in `app/data/project-content.js`.
3. Bind its images and homepage preview textures in `app/data/projects.js`.
4. Add the slug to `featuredProjectSlugs` only if it should appear on the homepage.
5. If the project should be excluded from the public sitemap, add the slug to `SITEMAP_EXCLUDED_SLUGS` in `scripts/generate-sitemap.cjs`.
6. Run `npm test` and `npm run build` (build also regenerates `public/sitemap.xml`).

## Install & Run

Use the Node version declared in `.node-version`, then install dependencies:

```bash
nvm use
npm install
```

Start the local development server:

```bash
npm run dev
```

Run the data contract tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

## Deployment

The project is configured for Cloudflare Pages:

```bash
npm run deploy
```

The contact form uses AWS SES through Cloudflare environment variables. Copy `.dev.vars.example` to `.dev.vars` for local development and configure the same variables in Cloudflare Pages for production.
````

## File: app/data/project-content.js
````javascript
import {
  etongueProject,
  porscheProject,
  postureProject,
  trekassistProject,
  littleLemonProject,
  knowledgeosProject,
  allWorkProject,
  sayitProject,
} from './content/en/index.js';

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
  etongueProject,
  porscheProject,
  postureProject,
  trekassistProject,
  littleLemonProject,
  knowledgeosProject,
  allWorkProject,
  sayitProject,
];

export const resolveProjectSlug = slug => legacyProjectSlugRedirects[slug] ?? slug;

export const getProjectPath = slug => `/projects/${slug}`;
````

## File: app/data/projects.js
````javascript
import {
  featuredProjectSlugs,
  getProjectPath,
  portfolioProjects,
} from './project-content';
import { portfolioProjects as zhPortfolioProjects } from './content/zh/index.js';

import porscheBackgroundLarge from '~/assets/porsche-background-tile-large.jpg';
import porscheBackgroundPlaceholder from '~/assets/porsche-background-tile-placeholder.jpg';
import porscheBackground from '~/assets/porsche-background-tile.webp';
import porscheFlowchartLarge from '~/assets/porsche-flowchart-large.jpg';
import porscheFlowchartPlaceholder from '~/assets/porsche-flowchart-placeholder.jpg';
import porscheFlowchart from '~/assets/porsche-flowchart.webp';
import porscheHomeLarge from '~/assets/porsche-interface-home-large.jpg';
import porscheHomePlaceholder from '~/assets/porsche-interface-home-placeholder.jpg';
import porscheHome from '~/assets/porsche-interface-home.jpg';
import porscheOutcomeLarge from '~/assets/porsche-background-large.jpg';
import porscheOutcomePlaceholder from '~/assets/porsche-background-placeholder.jpg';
import porscheOutcome from '~/assets/porsche-background.webp';
import porschePrototypeLarge from '~/assets/porsche-prototype-large.jpg';
import porschePrototypePlaceholder from '~/assets/porsche-prototype-placeholder.jpg';
import porschePrototype from '~/assets/porsche-prototype.jpg';
import porscheWireframeMainLarge from '~/assets/porsche-wireframe-main-large.jpg';
import porscheWireframeMainPlaceholder from '~/assets/porsche-wireframe-main-placeholder.jpg';
import porscheWireframeMain from '~/assets/porsche-wireframe-main.jpg';
import porscheWireframeNavigationLarge from '~/assets/porsche-wireframe-nav-large.jpg';
import porscheWireframeNavigationPlaceholder from '~/assets/porsche-wireframe-nav-placeholder.jpg';
import porscheWireframeNavigation from '~/assets/porsche-wireframe-nav.jpg';

import postureActivityLarge from '~/assets/posture-activity-large.jpg';
import postureActivityPlaceholder from '~/assets/posture-activity-placeholder.jpg';
import postureActivity from '~/assets/posture-activity.jpg';
import postureAppLarge from '~/assets/posture-checker-app-large.webp';
import postureAppPlaceholder from '~/assets/posture-checker-app-placeholder.png';
import postureApp from '~/assets/posture-checker-app.webp';
import postureArchitectureLarge from '~/assets/posture-architecture-large.jpg';
import postureArchitecturePlaceholder from '~/assets/posture-architecture-placeholder.jpg';
import postureArchitecture from '~/assets/posture-architecture.jpg';
import postureBackgroundLarge from '~/assets/posture-background-tile-large.jpg';
import postureBackgroundPlaceholder from '~/assets/posture-background-tile-placeholder.jpg';
import postureBackground from '~/assets/posture-background-tile.webp';
import postureFinalAppLarge from '~/assets/posture-final-app-large.webp';
import postureFinalAppPlaceholder from '~/assets/posture-final-app-placeholder.png';
import postureFinalApp from '~/assets/posture-final-app.webp';
import postureListLarge from '~/assets/posture-tracker-large.jpg';
import postureListPlaceholder from '~/assets/posture-tracker-placeholder.jpg';
import postureList from '~/assets/posture-tracker.jpg';
import postureLoginLarge from '~/assets/posture-login-large.jpg';
import postureLoginPlaceholder from '~/assets/posture-login-placeholder.jpg';
import postureLogin from '~/assets/posture-login.jpg';
import postureProgressLarge from '~/assets/posture-progress-large.jpg';
import postureProgressPlaceholder from '~/assets/posture-progress-placeholder.jpg';
import postureProgress from '~/assets/posture-progress.jpg';
import posturePrototypeLarge from '~/assets/posture-prototype-large.jpg';
import posturePrototypePlaceholder from '~/assets/posture-prototype-placeholder.jpg';
import posturePrototype from '~/assets/posture-prototype.jpg';
import postureTeamPlaceholder from '~/assets/posture-team-placeholder.jpg';
import postureTeam from '~/assets/posture-team.webp';
import postureWireframeLarge from '~/assets/posture-wireframe-large.jpg';
import postureWireframePlaceholder from '~/assets/posture-wireframe-placeholder.jpg';
import postureWireframe from '~/assets/posture-wireframe.jpg';

import littleLemonHeroLarge from '~/assets/little-lemon-1-large.jpg';
import littleLemonHeroPlaceholder from '~/assets/little-lemon-1-placeholder.jpg';
import littleLemonHero from '~/assets/little-lemon-1.jpg';
import littleLemonMenuLarge from '~/assets/little-lemon-2-large.jpg';
import littleLemonMenuPlaceholder from '~/assets/little-lemon-2-placeholder.jpg';
import littleLemonMenu from '~/assets/little-lemon-2.jpg';

import sayitBrand from '~/assets/sayit-brand.webp';
import sayitPopoverIdle from '~/assets/sayit-popover-idle.png';
import sayitPopoverRecording from '~/assets/sayit-popover-recording.png';
import sayitIphoneMic from '~/assets/sayit-iphone-mic.jpg';

import knowledgeosArchitecture from '~/assets/knowledgeos-architecture.webp';
import knowledgeosArchitecturePlaceholder from '~/assets/knowledgeos-architecture-placeholder.jpg';
import knowledgeosVaultStructure from '~/assets/knowledgeos-vault-structure.webp';
import knowledgeosVaultStructurePlaceholder from '~/assets/knowledgeos-vault-structure-placeholder.jpg';
import knowledgeosCompiledTruth from '~/assets/knowledgeos-compiled-truth.webp';
import knowledgeosCompiledTruthPlaceholder from '~/assets/knowledgeos-compiled-truth-placeholder.jpg';
import knowledgeosWeeklyReview from '~/assets/knowledgeos-weekly-review.webp';
import knowledgeosWeeklyReviewPlaceholder from '~/assets/knowledgeos-weekly-review-placeholder.jpg';

import etongueDeviceContext from '~/assets/etongue-device-context.webp';
import etongueDeviceContextPlaceholder from '~/assets/etongue-device-context-placeholder.jpg';
import etongueEarlyPrototype from '~/assets/etongue-early-prototype.mp4';
import etongueEarlyPrototypePlaceholder from '~/assets/etongue-early-prototype-placeholder.jpg';
import etongueEarlyPrototypePoster from '~/assets/etongue-early-prototype-poster.webp';
import etongueSensorCloseup from '~/assets/etongue-sensor-closeup.webp';
import etongueSensorCloseupPlaceholder from '~/assets/etongue-sensor-closeup-placeholder.jpg';
import etongueIssfDashboard from '~/assets/etongue-issf-dashboard.webp';
import etongueTasteProfile from '~/assets/etongue-taste-profile.webp';
import etongueIssfScore from '~/assets/etongue-issf-score.webp';
import etonguePrototypeMachineTesting from '~/assets/etongue-prototype-machine-testing.webp';
import etonguePrototypeAnalyzeResults from '~/assets/etongue-prototype-analyze-results.webp';
import etonguePrototypeFinalDecision from '~/assets/etongue-prototype-final-decision.webp';
import etonguePrototypeConfigureProducts from '~/assets/etongue-prototype-configure-products.webp';

import trekassistAlertModalLarge from '~/assets/trekassist-alert-modal-large.jpg';
import trekassistAlertModalPlaceholder from '~/assets/trekassist-alert-modal-placeholder.jpg';
import trekassistAlertModal from '~/assets/trekassist-alert-modal.jpg';
import trekassistDiscoveryFlowLarge from '~/assets/trekassist-discovery-flow-large.jpg';
import trekassistDiscoveryFlowPlaceholder from '~/assets/trekassist-discovery-flow-placeholder.jpg';
import trekassistDiscoveryFlow from '~/assets/trekassist-discovery-flow.jpg';
import trekassistEmergencyConfirmationLarge from '~/assets/trekassist-emergency-confirmation-large.jpg';
import trekassistEmergencyConfirmationPlaceholder from '~/assets/trekassist-emergency-confirmation-placeholder.jpg';
import trekassistEmergencyConfirmation from '~/assets/trekassist-emergency-confirmation.jpg';
import trekassistGuidedTourMammothLarge from '~/assets/trekassist-guided-tour-mammoth-large.jpg';
import trekassistGuidedTourMammothPlaceholder from '~/assets/trekassist-guided-tour-mammoth-placeholder.jpg';
import trekassistGuidedTourMammoth from '~/assets/trekassist-guided-tour-mammoth.jpg';
import trekassistGuidedToursLarge from '~/assets/trekassist-guided-tours-large.jpg';
import trekassistGuidedToursPlaceholder from '~/assets/trekassist-guided-tours-placeholder.jpg';
import trekassistGuidedTours from '~/assets/trekassist-guided-tours.jpg';
import trekassistHomeAlertLarge from '~/assets/trekassist-home-alert-large.jpg';
import trekassistHomeAlertPlaceholder from '~/assets/trekassist-home-alert-placeholder.jpg';
import trekassistHomeAlert from '~/assets/trekassist-home-alert.jpg';
import trekassistMapMammothLarge from '~/assets/trekassist-map-mammoth-large.jpg';
import trekassistMapMammothPlaceholder from '~/assets/trekassist-map-mammoth-placeholder.jpg';
import trekassistMapMammoth from '~/assets/trekassist-map-mammoth.jpg';
import trekassistPostTestConceptLarge from '~/assets/trekassist-post-test-concept-large.jpg';
import trekassistPostTestConceptPlaceholder from '~/assets/trekassist-post-test-concept-placeholder.jpg';
import trekassistPostTestConcept from '~/assets/trekassist-post-test-concept.jpg';
import trekassistSafetyFlowLarge from '~/assets/trekassist-safety-flow-large.jpg';
import trekassistSafetyFlowPlaceholder from '~/assets/trekassist-safety-flow-placeholder.jpg';
import trekassistSafetyFlow from '~/assets/trekassist-safety-flow.jpg';
import trekassistSafetyScreenLarge from '~/assets/trekassist-safety-screen-large.jpg';
import trekassistSafetyScreenPlaceholder from '~/assets/trekassist-safety-screen-placeholder.jpg';
import trekassistSafetyScreen from '~/assets/trekassist-safety-screen.jpg';
import trekassistSettingsLarge from '~/assets/trekassist-settings-large.jpg';
import trekassistSettingsPlaceholder from '~/assets/trekassist-settings-placeholder.jpg';
import trekassistSettings from '~/assets/trekassist-settings.jpg';
import trekassistGrandPrismaticBgLarge from '~/assets/trekassist-grand-prismatic-bg-large.webp';
import trekassistGrandPrismaticBgPlaceholder from '~/assets/trekassist-grand-prismatic-bg-placeholder.jpg';
import trekassistGrandPrismaticBg from '~/assets/trekassist-grand-prismatic-bg.jpg';
import trekassistYellowstoneSignBgLarge from '~/assets/trekassist-yellowstone-sign-bg-large.jpg';
import trekassistYellowstoneSignBgPlaceholder from '~/assets/trekassist-yellowstone-sign-bg-placeholder.jpg';
import trekassistYellowstoneSignBg from '~/assets/trekassist-yellowstone-sign-bg.jpg';

const imageAssets = {
  knowledgeosArchitecture: {
    src: knowledgeosArchitecture,
    srcSet: `${knowledgeosArchitecture} 1600w`,
    placeholder: knowledgeosArchitecturePlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosVaultStructure: {
    src: knowledgeosVaultStructure,
    srcSet: `${knowledgeosVaultStructure} 1600w`,
    placeholder: knowledgeosVaultStructurePlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosCompiledTruth: {
    src: knowledgeosCompiledTruth,
    srcSet: `${knowledgeosCompiledTruth} 1600w`,
    placeholder: knowledgeosCompiledTruthPlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosWeeklyReview: {
    src: knowledgeosWeeklyReview,
    srcSet: `${knowledgeosWeeklyReview} 1600w`,
    placeholder: knowledgeosWeeklyReviewPlaceholder,
    width: 1600,
    height: 1000,
  },
  etongueDeviceContext: {
    src: etongueDeviceContext,
    placeholder: etongueDeviceContextPlaceholder,
    width: 1284,
    height: 856,
  },
  etongueEarlyPrototype: {
    src: etongueEarlyPrototype,
    placeholder: etongueEarlyPrototypePlaceholder,
    width: 1626,
    height: 1080,
  },
  etongueEarlyPrototypePoster: {
    src: etongueEarlyPrototypePoster,
    placeholder: etongueEarlyPrototypePlaceholder,
    width: 1200,
    height: 798,
  },
  etongueSensorCloseup: {
    src: etongueSensorCloseup,
    placeholder: etongueSensorCloseupPlaceholder,
    width: 947,
    height: 631,
  },
  etongueIssfDashboard: {
    src: etongueIssfDashboard,
    srcSet: `${etongueIssfDashboard} 2048w`,
    width: 2048,
    height: 1103,
  },
  etongueTasteProfile: {
    src: etongueTasteProfile,
    srcSet: `${etongueTasteProfile} 2048w`,
    width: 2048,
    height: 1103,
  },
  etongueIssfScore: {
    src: etongueIssfScore,
    srcSet: `${etongueIssfScore} 2048w`,
    width: 2048,
    height: 1103,
  },
  etonguePrototypeMachineTesting: {
    src: etonguePrototypeMachineTesting,
    srcSet: `${etonguePrototypeMachineTesting} 1265w`,
    width: 1265,
    height: 1856,
  },
  etonguePrototypeAnalyzeResults: {
    src: etonguePrototypeAnalyzeResults,
    srcSet: `${etonguePrototypeAnalyzeResults} 1265w`,
    width: 1265,
    height: 1653,
  },
  etonguePrototypeFinalDecision: {
    src: etonguePrototypeFinalDecision,
    srcSet: `${etonguePrototypeFinalDecision} 1265w`,
    width: 1265,
    height: 2253,
  },
  etonguePrototypeConfigureProducts: {
    src: etonguePrototypeConfigureProducts,
    srcSet: `${etonguePrototypeConfigureProducts} 1265w`,
    width: 1265,
    height: 1624,
  },
  // Little Lemon assets are 428×1000 portrait phone screenshots (and 856×2000
  // for the @2x variant). These dimensions drive the rendered aspect ratio,
  // so they must match the underlying file or the image gets squashed.
  littleLemonHero: {
    src: littleLemonHero,
    srcSet: `${littleLemonHero} 428w, ${littleLemonHeroLarge} 856w`,
    placeholder: littleLemonHeroPlaceholder,
    width: 428,
    height: 1000,
  },
  littleLemonMenu: {
    src: littleLemonMenu,
    srcSet: `${littleLemonMenu} 428w, ${littleLemonMenuLarge} 856w`,
    placeholder: littleLemonMenuPlaceholder,
    width: 428,
    height: 1000,
  },
  littleLemonReservation: {
    src: littleLemonHero,
    srcSet: `${littleLemonHero} 428w, ${littleLemonHeroLarge} 856w`,
    placeholder: littleLemonHeroPlaceholder,
    width: 428,
    height: 1000,
  },
  porscheFlowchart: {
    src: porscheFlowchart,
    srcSet: `${porscheFlowchart} 1024w, ${porscheFlowchartLarge} 2048w`,
    placeholder: porscheFlowchartPlaceholder,
    width: 1024,
    height: 800,
  },
  porscheHome: {
    src: porscheHome,
    srcSet: `${porscheHome} 1280w, ${porscheHomeLarge} 2560w`,
    placeholder: porscheHomePlaceholder,
    width: 1280,
    height: 800,
  },
  porscheOutcome: {
    src: porscheOutcome,
    srcSet: `${porscheOutcome} 1280w, ${porscheOutcomeLarge} 2560w`,
    placeholder: porscheOutcomePlaceholder,
    width: 1280,
    height: 900,
  },
  porschePrototype: {
    src: porschePrototype,
    srcSet: `${porschePrototype} 1280w, ${porschePrototypeLarge} 2560w`,
    placeholder: porschePrototypePlaceholder,
    width: 1280,
    height: 800,
  },
  porscheWireframeMain: {
    src: porscheWireframeMain,
    srcSet: `${porscheWireframeMain} 1280w, ${porscheWireframeMainLarge} 2560w`,
    placeholder: porscheWireframeMainPlaceholder,
    width: 1280,
    height: 800,
  },
  porscheWireframeNavigation: {
    src: porscheWireframeNavigation,
    srcSet: `${porscheWireframeNavigation} 1280w, ${porscheWireframeNavigationLarge} 2560w`,
    placeholder: porscheWireframeNavigationPlaceholder,
    width: 1280,
    height: 800,
  },
  postureActivity: {
    src: postureActivity,
    srcSet: `${postureActivity} 440w, ${postureActivityLarge} 880w`,
    placeholder: postureActivityPlaceholder,
    width: 440,
    height: 790,
  },
  postureApp: {
    src: postureApp,
    srcSet: `${postureApp} 800w, ${postureAppLarge} 1920w`,
    placeholder: postureAppPlaceholder,
    width: 800,
    height: 500,
  },
  postureArchitecture: {
    src: postureArchitecture,
    srcSet: `${postureArchitecture} 440w, ${postureArchitectureLarge} 880w`,
    placeholder: postureArchitecturePlaceholder,
    width: 440,
    height: 790,
  },
  postureFinalApp: {
    src: postureFinalApp,
    srcSet: `${postureFinalApp} 350w, ${postureFinalAppLarge} 700w`,
    placeholder: postureFinalAppPlaceholder,
    width: 350,
    height: 750,
  },
  posturePrototype: {
    src: posturePrototype,
    srcSet: `${posturePrototype} 800w, ${posturePrototypeLarge} 1920w`,
    placeholder: posturePrototypePlaceholder,
    width: 800,
    height: 500,
  },
  postureTeam: {
    src: postureTeam,
    placeholder: postureTeamPlaceholder,
    width: 940,
    height: 500,
  },
  postureWireframe: {
    src: postureWireframe,
    srcSet: `${postureWireframe} 800w, ${postureWireframeLarge} 1920w`,
    placeholder: postureWireframePlaceholder,
    width: 800,
    height: 500,
  },
  sayitBrand: {
    src: sayitBrand,
    width: 1600,
    height: 900,
  },
  sayitPopoverIdle: {
    src: sayitPopoverIdle,
    width: 1124,
    height: 916,
  },
  sayitPopoverRecording: {
    src: sayitPopoverRecording,
    width: 1128,
    height: 914,
  },
  sayitIphoneMic: {
    src: sayitIphoneMic,
    width: 1179,
    height: 2556,
  },
  trekassistAlertModal: {
    src: trekassistAlertModal,
    srcSet: `${trekassistAlertModal} 800w, ${trekassistAlertModalLarge} 1600w`,
    placeholder: trekassistAlertModalPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistDiscoveryFlow: {
    src: trekassistDiscoveryFlow,
    srcSet: `${trekassistDiscoveryFlow} 1000w, ${trekassistDiscoveryFlowLarge} 1800w`,
    placeholder: trekassistDiscoveryFlowPlaceholder,
    width: 1000,
    height: 607,
  },
  trekassistEmergencyConfirmation: {
    src: trekassistEmergencyConfirmation,
    srcSet: `${trekassistEmergencyConfirmation} 800w, ${trekassistEmergencyConfirmationLarge} 1600w`,
    placeholder: trekassistEmergencyConfirmationPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistGuidedTourMammoth: {
    src: trekassistGuidedTourMammoth,
    srcSet: `${trekassistGuidedTourMammoth} 800w, ${trekassistGuidedTourMammothLarge} 1600w`,
    placeholder: trekassistGuidedTourMammothPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistGuidedTours: {
    src: trekassistGuidedTours,
    srcSet: `${trekassistGuidedTours} 800w, ${trekassistGuidedToursLarge} 1600w`,
    placeholder: trekassistGuidedToursPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistHomeAlert: {
    src: trekassistHomeAlert,
    srcSet: `${trekassistHomeAlert} 800w, ${trekassistHomeAlertLarge} 1600w`,
    placeholder: trekassistHomeAlertPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistMapMammoth: {
    src: trekassistMapMammoth,
    srcSet: `${trekassistMapMammoth} 800w, ${trekassistMapMammothLarge} 1600w`,
    placeholder: trekassistMapMammothPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistPostTestConcept: {
    src: trekassistPostTestConcept,
    srcSet: `${trekassistPostTestConcept} 1000w, ${trekassistPostTestConceptLarge} 1800w`,
    placeholder: trekassistPostTestConceptPlaceholder,
    width: 1000,
    height: 601,
  },
  trekassistSafetyFlow: {
    src: trekassistSafetyFlow,
    srcSet: `${trekassistSafetyFlow} 1000w, ${trekassistSafetyFlowLarge} 1800w`,
    placeholder: trekassistSafetyFlowPlaceholder,
    width: 1000,
    height: 427,
  },
  trekassistSafetyScreen: {
    src: trekassistSafetyScreen,
    srcSet: `${trekassistSafetyScreen} 800w, ${trekassistSafetyScreenLarge} 1600w`,
    placeholder: trekassistSafetyScreenPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistSettings: {
    src: trekassistSettings,
    srcSet: `${trekassistSettings} 800w, ${trekassistSettingsLarge} 1600w`,
    placeholder: trekassistSettingsPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistGrandPrismaticBg: {
    src: trekassistGrandPrismaticBg,
    srcSet: `${trekassistGrandPrismaticBg} 960w, ${trekassistGrandPrismaticBgLarge} 1920w`,
    placeholder: trekassistGrandPrismaticBgPlaceholder,
    width: 960,
    height: 540,
  },
  trekassistYellowstoneSignBg: {
    src: trekassistYellowstoneSignBg,
    srcSet: `${trekassistYellowstoneSignBg} 960w, ${trekassistYellowstoneSignBgLarge} 1920w`,
    placeholder: trekassistYellowstoneSignBgPlaceholder,
    width: 960,
    height: 540,
  },
};

const backgrounds = {
  'etongue-sensory-platform': {
    src: etongueDeviceContext,
    placeholder: etongueDeviceContextPlaceholder,
    width: 1284,
    height: 856,
    opacity: 0.18,
  },
  'little-lemon': {
    src: littleLemonHero,
    srcSet: `${littleLemonHero} 800w, ${littleLemonHeroLarge} 1600w`,
    placeholder: littleLemonHeroPlaceholder,
    width: 800,
    height: 500,
    opacity: 0.76,
  },
  sayit: {
    src: sayitBrand,
    width: 1600,
    height: 900,
    opacity: 0.35,
  },
  trekassist: {
    src: trekassistYellowstoneSignBg,
    srcSet: `${trekassistYellowstoneSignBg} 960w, ${trekassistYellowstoneSignBgLarge} 1920w`,
    placeholder: trekassistYellowstoneSignBgPlaceholder,
    width: 960,
    height: 540,
    opacity: 0.55,
  },
  'porsche-digital-interface': {
    src: porscheBackground,
    srcSet: `${porscheBackground} 1080w, ${porscheBackgroundLarge} 2160w`,
    placeholder: porscheBackgroundPlaceholder,
    opacity: 0.5,
  },
  'posture-checker': {
    src: postureBackground,
    srcSet: `${postureBackground} 1280w, ${postureBackgroundLarge} 2560w`,
    placeholder: postureBackgroundPlaceholder,
    width: 1280,
    height: 800,
    opacity: 0.8,
  },
};

const summaryTextures = {
  'etongue-sensory-platform': [
    {
      src: etongueEarlyPrototypePoster,
      srcSet: `${etongueEarlyPrototypePoster} 1200w`,
      placeholder: etongueEarlyPrototypePlaceholder,
    },
  ],
  'little-lemon': [
    {
      srcSet: `${littleLemonMenu} 375w, ${littleLemonMenuLarge} 750w`,
      placeholder: littleLemonMenuPlaceholder,
    },
    {
      srcSet: `${littleLemonHero} 375w, ${littleLemonHeroLarge} 750w`,
      placeholder: littleLemonHeroPlaceholder,
    },
  ],
  'porsche-digital-interface': [
    {
      srcSet: `${porscheHome} 1280w, ${porscheHomeLarge} 2560w`,
      placeholder: porscheHomePlaceholder,
    },
  ],
  'posture-checker': [
    {
      srcSet: `${postureLogin} 375w, ${postureLoginLarge} 750w`,
      placeholder: postureLoginPlaceholder,
    },
    {
      srcSet: `${postureList} 375w, ${postureListLarge} 750w`,
      placeholder: postureListPlaceholder,
    },
    {
      srcSet: `${postureProgress} 375w, ${postureProgressLarge} 750w`,
      placeholder: postureProgressPlaceholder,
    },
  ],
  sayit: [
    {
      src: sayitPopoverIdle,
      srcSet: `${sayitPopoverIdle} 1124w`,
      placeholder: sayitPopoverIdle,
    },
    {
      src: sayitPopoverRecording,
      srcSet: `${sayitPopoverRecording} 1128w`,
      placeholder: sayitPopoverRecording,
    },
  ],
  trekassist: [
    {
      srcSet: `${trekassistHomeAlert} 375w, ${trekassistHomeAlert} 800w`,
      placeholder: trekassistHomeAlertPlaceholder,
    },
    {
      srcSet: `${trekassistMapMammoth} 375w, ${trekassistMapMammoth} 800w`,
      placeholder: trekassistMapMammothPlaceholder,
    },
  ],
};

const withAssets = project => ({
  ...project,
  background: backgrounds[project.slug],
  path: getProjectPath(project.slug),
  summary: {
    ...project.summary,
    textures: summaryTextures[project.slug] || [],
  },
  sections: project.sections.map(section => ({
    ...section,
    image: typeof section.image === 'string' ? imageAssets[section.image] : section.image,
    images: section.images?.map(image => imageAssets[image]),
  })),
});

export const projects = portfolioProjects.map(withAssets);

export const zhProjects = zhPortfolioProjects.map(withAssets);

export const featuredProjects = featuredProjectSlugs.map(slug =>
  projects.find(project => project.slug === slug)
);

export const zhFeaturedProjects = featuredProjectSlugs.map(slug =>
  zhProjects.find(project => project.slug === slug)
);

export const getProjectBySlug = slug => projects.find(project => project.slug === slug);

export { getProjectPath };
export { withAssets };
````
