export const shengjianProject = {
  slug: 'shengjian',
  "title": "Shengjian",
  "description": "A private listening and review tool that pairs live bilingual captions with timestamped audio replay and structured study notes.",
  "roles": [
    "Product & Interaction Design",
    "Full-stack Development",
    "AI Integration"
  ],
  "url": "https://shengjian.princeniu.com",
  "linkLabel": "Invite-only app",
  "summary": {
    "title": "Shengjian",
    "description": "A private listening and review tool that pairs live bilingual captions with timestamped audio replay and structured study notes.",
    "modelType": "laptop",
    "modelAlt": "Shengjian",
    "quickFacts": [
      {
        "label": "Role",
        "value": "Independent designer and developer"
      },
      {
        "label": "Context",
        "value": "Personal bilingual learning"
      },
      {
        "label": "Platform",
        "value": "Web · Mac and iPad"
      },
      {
        "label": "Status",
        "value": "Deployed · invite-only"
      }
    ]
  },
  "sections": [
    {
      "type": "hero-image",
      "image": {
        "src": "/projects/shengjian/cover-en.webp",
        "width": 1600,
        "height": 1000
      },
      "alt": "Shengjian cover showing bilingual paragraphs and audio replay"
    },
    {
      "type": "text",
      "heading": "The problem: understanding now, finding it later",
      "body": [
        "In a bilingual lesson, listening, comparing languages, and deciding what to write compete for attention. A transcript helps with immediate understanding, but reviewing a difficult idea later also requires finding the original passage and hearing how it was said. I treated that transition from live listening to later review as the core product problem.",
        "The starting point was my own learning workflow and a second pre-created account, rather than interviews with a wider learner population. I owned product scoping, interaction design, browser audio capture, AI-service integration, storage and recovery, and deployment."
      ]
    },
    {
      "type": "timeline",
      "heading": "Design around the learning task",
      "body": [
        "I used four connected tasks to organize the product. They describe the implemented workflow, not findings from a formal task study."
      ],
      "items": [
        {
          "title": "Follow",
          "description": "Choose a fixed language direction, start recording, and read paired original and translated text."
        },
        {
          "title": "Keep",
          "description": "See which audio is saved while caption finalization and cloud archiving progress separately."
        },
        {
          "title": "Return",
          "description": "Find a recording, choose a timestamped paragraph, and replay the original passage."
        },
        {
          "title": "Review",
          "description": "Read structured notes, check important details against the transcript and audio, and export material when needed."
        }
      ]
    },
    {
      "type": "video",
      "heading": "A 40-second interface walkthrough",
      "body": [],
      "src": "/projects/shengjian/promo-with-sound.mp4",
      "poster": "/projects/shengjian/poster.webp",
      "caption": "An edited walkthrough of actual interface states, with background music and transition cues, without narration. The demonstration uses synthetic audio and scripted captions and notes; it does not measure recognition accuracy or live latency."
    },
    {
      "type": "text",
      "heading": "Scope: a working Web product for a small, known audience",
      "body": [
        "I chose a browser-based product for personal Mac and iPad use instead of starting with separate native apps. The scope includes recording-only and live bilingual modes, fixed English-to-Chinese or Chinese-to-English directions, a recording library, paragraph replay, and manually requested notes.",
        "That choice carries an operational constraint: capture needs a foreground page and an awake screen. The product warns about that condition and reacts to an interrupted microphone instead of promising continuous background capture. Public signup, payment, and native-app distribution were deferred while the small invited workflow was made usable."
      ]
    },
    {
      "type": "image",
      "heading": "Live: keep attention on the conversation",
      "body": [
        "A live session should not make the learner keep rechecking the setup controls. Once recording begins, inactive language and mode settings collapse into a compact summary while pause and finish remain available. This reserves more of the screen for the material being heard.",
        "Original and translated text are paired in the same passage instead of requiring a switch between separate views. Focus mode and font controls change presentation without changing the recording state. I also distinguish elapsed session time from acknowledged audio duration, because a pause contributes to the former but not the latter."
      ],
      "image": {
        "src": "/projects/shengjian/live.webp",
        "width": 1440,
        "height": 1000
      },
      "alt": "Live bilingual workspace with scripted demonstration captions"
    },
    {
      "type": "image",
      "heading": "Replay: return to the difficult passage",
      "body": [
        "The replay interface connects a paragraph timestamp to its corresponding audio. It supports a learner who knows which sentence was confusing, rather than asking them to scrub through a long recording with no textual anchor. Playback speed and short skips remain available for repeated listening.",
        "Automatic following helps during playback but can interrupt someone who has started reading elsewhere. Keyboard focus entering the text pauses following; a return-to-current-paragraph action restores it. I removed a click overlay so text can be selected while an unselected paragraph remains available for replay. The tradeoff is to let deliberate reading take priority over automatic movement."
      ],
      "image": {
        "src": "/projects/shengjian/playback.webp",
        "width": 1440,
        "height": 1000
      },
      "alt": "Bilingual paragraphs with timestamps and audio controls"
    },
    {
      "type": "image",
      "heading": "Review: check notes against the source",
      "body": [
        "I moved the note format beyond a short recap: overview, themes with explanations and details, original examples, explicit tasks, and points needing confirmation. Empty tasks or uncertainties are omitted. The prompt asks the service to stay within the source rather than add outside knowledge or invent requirements.",
        "Generation is a deliberate action, not an automatic paid request after every recording. Results are cached; replacement requires an explicit regeneration request. If a request fails or the response is incomplete, the previous note is retained. The current notes view favors continuous reading and copying, while timestamped listening remains in the bilingual transcript view.",
        "The screenshot contains manually prepared sample notes. Model output still requires source checking; a structured response alone does not establish semantic accuracy."
      ],
      "image": {
        "src": "/projects/shengjian/notes.webp",
        "width": 1440,
        "height": 1000
      },
      "alt": "Study notes interface with manually prepared demonstration content"
    },
    {
      "type": "image-text",
      "heading": "Reading across screen sizes",
      "body": [
        "Narrow layouts keep the reading and playback controls reachable, but responsive width alone does not solve the interaction. The September interface review also checked short-screen behavior, large reading text, long titles, keyboard access, and the cost of expanding secondary controls.",
        "Export details were moved into a separate popover so expansion does not reduce the reading area. Shared font preferences propagate across live captions, replay, and notes. The image uses a simulated 390-pixel viewport; physical iPad VoiceOver acceptance is a separate user-confirmed check."
      ],
      "image": {
        "src": "/projects/shengjian/phone.webp",
        "width": 390,
        "height": 844
      },
      "portrait": true,
      "alt": "Bilingual reading at a simulated 390-pixel viewport"
    },
    {
      "type": "timeline",
      "heading": "Documented iteration: issue, change, check",
      "body": [
        "These examples come from the September 29 interface review and isolated browser checks. They are concrete implementation revisions, not before-and-after participant performance measures."
      ],
      "items": [
        {
          "title": "A crowded live workspace",
          "description": "Inactive settings consumed reading space. They now collapse during capture; the simulated landscape iPad layout retained about 476 px for live text."
        },
        {
          "title": "Secondary controls displaced the text",
          "description": "Export details moved into a popover. The browser check confirmed that opening export information did not change reading-area height."
        },
        {
          "title": "Reading context was lost",
          "description": "The notes instance is retained after first visit. A 32 px-font check preserved a 374.5 px scroll position after switching away and back."
        },
        {
          "title": "Search depended on the current title",
          "description": "Language aliases and direction codes now participate in search. Renaming a synthetic recording did not remove it from an English-language query."
        }
      ]
    },
    {
      "type": "image",
      "heading": "A completion message must say what actually completed",
      "body": [
        "Ending microphone capture, finishing the transcript, and verifying the cloud archive are independent events. A single success label would hide a pending or failed stage. I give each stage its own feedback and keep audio capture separate from transcription failures.",
        "This distinction also defines failure behavior. If the save queue exceeds 30 seconds, capture stops to protect saved content. If translation disconnects, the application reports that gap; it does not silently claim the missing interval was translated. A pending archive means the server copy exists but cloud backup is not yet confirmed."
      ],
      "image": {
        "src": "/projects/shengjian/states-en.svg",
        "width": 1600,
        "height": 1000
      },
      "alt": "Schematic of independent audio saving, transcript completion, and cloud archive states with failure boundaries"
    },
    {
      "type": "image",
      "heading": "Architecture: separate the live path from the durable path",
      "body": [
        "The browser sends PCM to the live transcription provider while packaging WAV segments for the server. Sequence numbers, sample offsets, and SHA-256 make segment validation explicit; durable audio and metadata writes are acknowledged before the UI increases saved duration. Cloud transfer is outside that acknowledgement path.",
        "The archive is a separately queued job with bounded concurrency, incremental updates, retries, and per-file read-back verification. Audio, transcript, and notes travel together in the recording archive. That adds state-management work, but prevents slower cloud upload from becoming a dependency of live segment saving."
      ],
      "image": {
        "src": "/projects/shengjian/architecture-en.svg",
        "width": 1600,
        "height": 1000
      },
      "alt": "Implementation map showing browser audio, Soniox captions, Node persistence, OpenAI notes, and private Supabase archives"
    },
    {
      "type": "text",
      "heading": "Recovery: check the recording, not just the download",
      "body": [
        "Recovery must restore a usable recording with its ownership and supporting material. The isolated drill removes the synthetic local source, starts a separate recovery process, and checks audio hashes, transcript, version-two notes, title, and owner. Corrupt cloud objects, the wrong account, and requests to overwrite an existing recording are rejected.",
        "A second check interrupts a restore and verifies that its persisted task can resume after restart. The readiness record also documents one real Supabase recording restored on Mac with matching audio, transcript, and note hashes. These checks cover recording recovery; replacing the entire production machine and changing DNS remain outside that result."
      ]
    },
    {
      "type": "text",
      "heading": "Private access and deliberate resource use",
      "body": [
        "Pre-created accounts and server-side recording ownership define the access boundary. A recording URL is not sufficient permission to read or mutate another account’s material. Audio goes to the transcription provider and is stored with text on the server and in private cloud storage; this is not end-to-end encryption or local-only processing.",
        "Notes have per-account and service-wide concurrency limits, cached results, and explicit regeneration. The app also presents estimated AI usage and budget reminders, separating an estimate from a supplier bill. Private-beta request quotas reject new requests at the limit while preserving access to existing recordings."
      ]
    },
    {
      "type": "metrics",
      "heading": "Evidence: what was checked, and how",
      "body": [
        "Real use, user-reported acceptance, and isolated failure drills answer different questions. I keep those evidence types separate rather than combining them into a single reliability or learning-effectiveness claim."
      ],
      "metrics": [
        {
          "value": "51:56",
          "label": "Recorded real-session duration"
        },
        {
          "value": "2",
          "label": "Accounts in the isolation check"
        },
        {
          "value": "16",
          "label": "Items in the interface review"
        }
      ],
      "evidence": [
        {
          "label": "Real recording",
          "value": "A 3,116.456-second recording and completed cloud archive are documented; the user accepted the roughly one-hour run. A two-hour test was explicitly cancelled."
        },
        {
          "label": "Account and accessibility checks",
          "value": "The user confirmed that two accounts could not see each other’s recordings and completed iPad VoiceOver acceptance. This is not a full WCAG audit."
        },
        {
          "label": "Isolated UI checks",
          "value": "September 29 checks used actual components with synthetic data at short, narrow, and tablet viewports. They checked focus, text size, search, scroll retention, and layout."
        },
        {
          "label": "Failure and recovery checks",
          "value": "Independent-process synthetic drills check integrity and rejection paths; a separate single-recording real-cloud recovery is documented. Full host and DNS failover remain untested."
        }
      ]
    },
    {
      "type": "outcome",
      "heading": "What I learned: make each promise explicit",
      "body": [
        "The hardest design work was deciding what each status promises to the learner. A readable translation is not proof that audio is saved; saved audio is not proof that a recoverable cloud copy exists. Carrying those distinctions through the interface, task queues, and recovery checks made the product more honest about its own state.",
        "The next useful evaluation is a task-based study with new invited users: start a bilingual session, find and replay a difficult sentence, explain save versus archive status, and return to notes. Completion, errors, and qualitative feedback would test the workflow directly. That is proposed work, not a study already conducted."
      ]
    }
  ]
};
