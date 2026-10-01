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
    "modelAlt": "Shengjian"
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
      "heading": "From listening to review",
      "body": [
        "Shengjian began with a personal bilingual learning need: follow a live conversation and return to a difficult passage later. I designed and built the recording, bilingual reading, replay, and review flow.",
        "It is a deployed personal product for two users, with pre-created accounts and invite-only access. It has no public signup; I have not measured commercial adoption or learning outcomes."
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
      "type": "timeline",
      "heading": "Three design decisions",
      "body": [],
      "items": [
        {
          "title": "Meaning beside sound",
          "description": "Pair each original passage with its translation, then connect the paragraph timestamp to audio replay."
        },
        {
          "title": "Reading at your own pace",
          "description": "Font sizing, focus reading, and playback following support both live reading and later review."
        },
        {
          "title": "Separate completion states",
          "description": "Report audio saving, transcript completion, and cloud archiving separately so saving is not confused with backup."
        }
      ]
    },
    {
      "type": "image",
      "heading": "Live: keep attention on the conversation",
      "body": [
        "Choose a language direction and start recording. The workspace keeps the original, translation, and save progress together, with pause and finish controls in view."
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
        "Paragraph timestamps return to the corresponding audio. Reading size and playback following are adjustable; entering the text with the keyboard pauses automatic following to avoid interrupting reading."
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
        "Notes organize an overview, topics, examples, and explicit tasks, with a reminder to verify important information. The notes shown here are manually prepared demonstration content, not an evaluation of model quality."
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
        "The interface was built around personal use on Mac and iPad, with a narrow-screen reading layout. This image uses a simulated 390-pixel browser viewport to show responsive behavior."
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
      "type": "text",
      "heading": "Visible feedback, backed by a save pipeline",
      "body": [
        "The browser captures 16 kHz mono PCM through AudioWorklet and saves WAV segments. The server checks sequence numbers, sample offsets, and SHA-256 before persistent writes. Cloud archiving uses a separate queue, retries, and read-back verification.",
        "External AI services provide live transcription, translation, and note generation. My work covers the product flow, integration, state feedback, and recovery mechanisms."
      ]
    },
    {
      "type": "text",
      "heading": "Validation and tradeoffs",
      "body": [
        "Project records document a 51-minute, 56-second real recording, two-account isolation, and user-confirmed iPad VoiceOver acceptance. Isolated recovery drills check audio, transcript, and summary integrity; a single real Supabase recovery was also verified on Mac.",
        "Recording requires the page to stay in the foreground with the screen awake. Continuous background recording, a two-hour run, and full-machine or DNS failover have not been validated. These checks are not a full WCAG audit or a formal usability study."
      ]
    },
    {
      "type": "outcome",
      "heading": "A complete flow for a personal need",
      "body": [
        "Shengjian connects live audio, bilingual reading, and recoverable storage into a product I can use day to day. The case shows how design and engineering support listening and review, rather than treating demonstration media as evidence of model performance."
      ]
    }
  ]
};
