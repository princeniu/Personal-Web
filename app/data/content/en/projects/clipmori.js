export const clipmoriProject = {
  slug: "clipmori",
  "title": "Clipmori",
  "description": "A native macOS clipboard history app built around an everyday need: find something copied earlier, preview it, and paste it again.",
  "roles": [
    "Interaction Design",
    "macOS Development",
    "SwiftUI / AppKit"
  ],
  "url": "https://github.com/princeniu/LocalPaste/releases/latest",
  "linkLabel": "Download for macOS",
  caseFacts: [
    { label: 'Period', value: 'September 2026' },
    { label: 'Status', value: 'Early macOS release · Signed and notarized installer' },
  ],
  caseBrief: {
    label: 'Case study at a glance',
    items: [
      { label: 'Problem', value: 'Find something copied earlier, inspect it, and paste it again.' },
      { label: 'Design decision', value: 'Combine horizontal history cards with search, full-content preview, and a choice of paste formatting.' },
      { label: 'Result and scope', value: 'An early native macOS release. History stays local but is not encrypted; automatic updates are not available.' },
    ],
  },
  "summary": {
    "title": "Clipmori",
    "description": "A native macOS clipboard history app built around an everyday need: find something copied earlier, preview it, and paste it again.",
    "modelType": "macosUtility",
    "modelAlt": "Clipmori"
  },
  "sections": [
    {
      "type": "hero-image",
      "image": {
        "src": "/projects/clipmori/cover-en.webp",
        "srcSet": "/projects/clipmori/cover-en-640.webp 640w, /projects/clipmori/cover-en-1120.webp 1120w, /projects/clipmori/cover-en.webp 1672w",
        "width": 1672,
        "height": 941
      },
      "alt": "Clipmori project cover showing horizontal history cards and search"
    },
    {
      "type": "text",
      "heading": "An everyday starting point",
      "body": [
        "Clipmori began with a simple personal need: finding something copied earlier. Its scope centers on copy, find, and paste again—bringing that familiar sequence into a working macOS tool."
      ]
    },
    {
      "type": "video",
      "heading": "A closer look",
      "body": [],
      "src": "/projects/clipmori/demo-en.mp4",
      "poster": "/projects/clipmori/cover-en.webp",
      "caption": "A 20-second silent walkthrough assembled from actual interface states with sample data: browsing, search, preview, and favorites. The app interface is currently primarily in Simplified Chinese."
    },
    {
      "type": "timeline",
      "heading": "Three design decisions",
      "body": [],
      "items": [
        {
          "title": "Browse and search",
          "description": "Horizontal cards provide an overview; search locates a clip and Space reveals its full content."
        },
        {
          "title": "A formatting choice",
          "description": "Text, images, rich text, and file references, with original-format or plain-text paste."
        },
        {
          "title": "Preview before importing",
          "description": "History stays on the Mac. Backup imports show a preview and preserve existing local records."
        }
      ]
    },
    {
      "type": "text",
      "heading": "From implementation to delivery",
      "body": [
        "Built with SwiftUI, AppKit, and SwiftData, with isolated regression tests, documented on-device checks, and a signed, notarized installer.",
        "This is an early release without automatic updates. History and backup files are not encrypted; file entries retain references rather than the files themselves.",
        "View source: https://github.com/princeniu/LocalPaste"
      ]
    }
  ]
};
