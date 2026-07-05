# KnowledgeOS Hero Banner — Redesign Brief

## Goal
Redesign the hero banner SVG for the KnowledgeOS project page on my portfolio site (https://github.com/princeniu/Personal-Web). This is a hero-image displayed prominently at the top of the project detail page.

## Deliverable
A single `knowledgeos-hero-banner.svg` at `/Users/prince/Desktop/portfolio/app/assets/knowledgeos-hero-banner.svg`
- 1600×1000 viewBox
- Self-contained (no external fonts beyond system Inter fallback)
- Dark theme matching the portfolio site

## Portfolio Design Context
- **Background**: dark (#060609 → #0f0d08 gradient)
- **Accent**: #e8a838 (gold/amber)
- **Typography**: Inter (system sans-serif fallback)
- **Surface cards**: #131316 or #14120d with subtle borders (#2a2a30 or gold-tinted)
- **Style**: Minimal, editorial, dark, sophisticated
- **Vibe**: Not a SaaS landing page. Not a tech diagram. Clean, confident, understated.

## What KnowledgeOS Is
A personal knowledge operating system: AI agent takes fragmented inputs (conversations, project updates, research, career notes) and maintains them as structured Markdown knowledge with review loops and backup.

## What We've Tried (and what failed)
1. "Three-column card grid" — looked like a box diagram, not a banner
2. "Constellation nodes + connections" — too abstract, felt empty
3. "Editorial typography + small cards on sides" — unbalanced, center felt weak
4. Common complaints: visually unbalanced, center too small, content looks like a diagram not a hero

## Design Direction
Create a **hero banner** (not a diagram) that communicates the transformation:
**Fragmented Sources → Agent-Maintained Hub → Structured Knowledge**

Key principles:
- Typography should lead, not cards
- Center should feel like the gravitational anchor
- Left and right should feel balanced but not rigidly symmetric
- Editorial / magazine-spread feel, not dashboard
- Confident use of negative space
- The word "KnowledgeOS" or "KOS" should be prominent
- Gold accent (#e8a838) used sparingly — highlights, not everywhere
- Dark background with subtle atmospheric glow

## What to Avoid
- Rigid box-grid layouts
- Icon-heavy card arrays
- Fake metrics or dashboards
- Gradient slop / glassmorphism
- Overused SaaS patterns (left-border accent cards, testimonial placeholders)
- Tiny unreadable content (remember this is 1600×1000 — text should be bold and legible)

## Technical Notes
- The SVG will be imported as a webp asset via the Remix build system (sharp converts SVG→webp automatically)
- Use standard SVG elements only (rect, circle, line, path, text, defs, gradients, filters)
- Font: `font-family="Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"`
- Use `<style>` block for CSS classes to keep markup clean
- Gold: `#e8a838`, dark surfaces: `#131316`, `#14120d`, subtle borders: `#2a2a30`

## Reference
Look at the existing portfolio assets in `/Users/prince/Desktop/portfolio/app/assets/` for style consistency (especially other `knowledgeos-*.svg` files), but make this distinctly different — it's a hero banner, not a technical diagram.
