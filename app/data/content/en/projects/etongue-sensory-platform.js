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
