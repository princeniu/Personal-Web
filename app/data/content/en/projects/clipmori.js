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
        "src": "/projects/clipmori/cover-en.png",
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
      "poster": "/projects/clipmori/cover-en.png",
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
