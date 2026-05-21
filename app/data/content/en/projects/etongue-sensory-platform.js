export const etongueProject = {
  slug: 'etongue-sensory-platform',
  title: 'E-Tongue Sensory Decision Support Platform',
  description:
    'A decision-support platform that combines E-Tongue taste measurements with semi-trained panel feedback, helping food developers compare prototypes and decide whether to Go, Tweak, or Stop.',
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
      'A Human Factor Product Design case study on turning machine taste data and human sensory feedback into clearer early product decisions.',
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
        'In Human Factor Product Design, our team looked at a specific decision problem in food development: how to compare product samples when the evidence comes from both E-Tongue machine readings and semi-trained sensory panelists.',
        'The hard part was not adding another dashboard. Food teams already have data. They need to see what changed between samples, where machine readings and human perception disagree, and whether the evidence is strong enough to move a prototype forward.',
      ],
    },
    {
      type: 'image-text',
      image: 'etongueDeviceContext',
      heading: 'Understanding the Sensing System',
      alt: 'Commercial E-Tongue taste sensing instrument used as domain reference',
      body: [
        'The project started with a physical sensing workflow, not a blank screen. E-Tongue evaluation involves sample preparation, repeated measurements, and outputs that make sense to food science teams but can be hard for product stakeholders to read.',
        'That device context shaped the platform around the real handoff point: taking technical measurements and making them discussable, traceable, and useful for a development decision.',
      ],
    },
    {
      type: 'text',
      heading: 'The UX Problem',
      body: [
        'Machine taste data can be precise and repeatable, but it does not explain itself. Panel feedback is closer to human perception, but it can be slower, more subjective, and less consistent across participants.',
        'We framed the UX problem as decision support: how might a platform help food developers understand what changed, why it matters, and whether the next step should be Go, Tweak, or Stop?',
      ],
    },
    {
      type: 'image',
      image: 'etongueIssfDashboard',
      heading: 'Platform Concept: ISSF Dashboard',
      alt: 'ISSF Dashboard showing mixed panel method with E-Tongue + semi-trained data achieving 94% accuracy',
      body: [
        'The ISSF Dashboard gives the mixed-method approach a working surface. The status line shows the evidence model, Semi-trained panel + E-Tongue + GC-O, along with accuracy (94%), correlation (r=0.91), and sample size (n=127), so developers can judge confidence before comparing prototypes.',
        'Each sample card shows a hedonic score first. CATA attributes, intensity ratings, and emotional profiles then let the team inspect the evidence behind the score instead of treating the number as a black box.',
      ],
    },
    {
      type: 'timeline',
      heading: 'Process Timeline',
      body: [
        'The project moved through domain discovery, task analysis, concept selection, role-based workflows, early prototyping, and formative usability testing.',
      ],
      items: [
        {
          title: 'Client & Domain Discovery',
          description:
            'We reviewed the sensory-evaluation workflow, E-Tongue outputs, and the decisions food developers face when comparing prototypes.',
        },
        {
          title: 'Task Analysis',
          description:
            'We mapped how users configure samples, collect panelist responses, interpret machine tests, and compare evidence across products.',
        },
        {
          title: 'Concept Direction',
          description:
            'We compared dashboard, comparison-tool, and decision-support directions, then chose the workflow that best connected evidence to product calls.',
        },
        {
          title: 'Role-Based Prototype',
          description:
            'We separated panelist questionnaires from food-developer analysis views so each role saw the right level of detail.',
        },
        {
          title: 'Formative Testing',
          description:
            'We ran think-aloud sessions to observe questionnaire clarity, terminology comprehension, navigation behavior, and confusion around rating scales.',
        },
      ],
    },
    {
      type: 'image',
      image: 'etongueEarlyPrototype',
      heading: 'Early Prototype Walkthrough',
      alt: 'Video walkthrough of the early E-Tongue sensory platform prototype',
      body: [
        'This early prototype walkthrough shows the first full product direction: role-based entry, sample workflows, sensory questionnaire interactions, and an early decision-support layer for interpreting results.',
        'We treated it as process evidence rather than a polished final product. Its value was making the workflow concrete enough to critique, test, and revise.',
      ],
    },
    {
      type: 'text',
      heading: 'Designing for Hybrid Sensory Evidence',
      body: [
        'The platform connected panelist tasks such as CATA selection, intensity ratings, hedonic ratings, and emotional response with developer tasks such as configuring samples, reviewing machine tests, analyzing agreement, and making product calls.',
        'Instead of asking users to reconcile every chart and response manually, the experience centered on interpretation: confidence, rationale, agreement patterns, off-note detection, and Go / Tweak / Stop recommendations.',
      ],
    },
    {
      type: 'gallery',
      heading: 'Hybrid Evidence in Practice',
      images: ['etongueTasteProfile', 'etongueIssfScore'],
      body: [
        'These two views show the same evidence from different distances. The Taste Profile radar visualizes 9-axis E-Tongue output, from sourness through richness, from the Insent TS-5000Z with measurement conditions preserved (2:5 dilution, 40°C, 7000rpm). The ISSF Score view combines machine data and panel feedback into a Go, Tweak, or Stop recommendation with confidence, risk level, and estimated savings.',
        'The point was to let developers move between raw sensory signal and product-level judgment without losing the trail back to the evidence.',
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
        'The final prototype organized the ISS-F platform across four core views. Machine Testing lets teams compare up to 12 product samples and 2 dairy controls across E-Tongue, GC-O aroma, and chemical composition data. Analyze Results places CATA attributes, intensity ratings, hedonic scores, and emotional profiles from semi-trained panelists next to machine readings.',
        'Final Decision turns the hybrid evidence into Go / Tweak / Stop recommendations backed by ISSF confidence scores, sensory profiles, trained-panel validation deltas, and estimated cost savings. Configure Products supports administrator work: creating evaluation sessions, managing panelist rosters, and tracking product status from Active to Complete.',
      ],
    },
    {
      type: 'image-text',
      image: 'etongueSensorCloseup',
      heading: 'From Sensor Readings to Decision Cues',
      alt: 'Close-up of E-Tongue sensor probes used as context for sensing workflow design',
      body: [
        'The sensing hardware made the hidden work visible: multiple probes, calibration expectations, repeated measurements, and sample-level comparisons all sit behind one practical question, whether a food prototype is ready to move forward.',
        'That shaped the interface priorities. The platform had to preserve technical credibility while still giving users a readable path from sensor evidence to product interpretation.',
      ],
    },
    {
      type: 'metrics',
      heading: 'Testing Snapshot',
      body: [
        'Our usability testing was formative. We wanted to find where terminology, scale design, and workflow expectations could break down before the system became more polished.',
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
            'Testing showed where users expected clearer start states, stronger progress cues, and more consistent interaction patterns.',
        },
      ],
    },
    {
      type: 'outcome',
      image: 'etongueSensorCloseup',
      heading: 'Reflection',
      body: [
        'This project made one thing clear: complex data products do not become usable just because the charts are accurate. When people make decisions under uncertainty, the interface has to organize evidence, show tradeoffs, and explain why a recommendation deserves attention.',
        'For our team, the important shift was from data visualization to decision-support UX. The work became less about showing every signal and more about designing the interpretation layer between machine measurement, human perception, and the next product action.',
      ],
    },
  ],
};
