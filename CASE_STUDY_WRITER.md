# Portfolio Case Study Writer

This file is the complete reference for writing portfolio case study MDX files for this site. It combines the base writing instructions with the narrative, visual, and structural techniques refined during the Everplast case study session. Use this file any time you are writing or revising a project case study.

## Who This Is For

The portfolio belongs to Ayden Springer, a developer and content creator. The reader is a hiring manager, collaborator, or peer developer who wants to understand what Ayden built, how he built it, and what he learned. The writing should make the reader want to keep scrolling because they are interested in the person behind the work, not just the technical output.

## Core Writing Goals

Every case study should answer:

1. What the project was.
2. What problem it solved or what motivated it.
3. What role I played and what I was personally responsible for.
4. What decisions mattered and why I made them.
5. What constraints shaped the work.
6. What changed because of the work.
7. What I learned or would improve.

Prioritize clarity over cleverness. A reader should understand the project quickly without being oversold.

---

## Writing Style

### Voice

Write in first person. Use "I built," "I designed," "I learned." Use "we" only when describing work done by a real team. Do not use "we" to soften individual contributions.

The tone should be direct, reflective, specific, practical, and confident without exaggeration. It should sound like a thoughtful person explaining their work to someone they respect.

### Sentence Construction

Write complete sentences. Never use sentence fragments. Ayden does not speak in fragments and the writing should not read that way either. Every sentence should have a subject and a verb.

Vary sentence length naturally. Mix short declarative sentences with longer ones that carry more detail. Keep paragraphs focused on a single purpose.

### What to Avoid

Do not use em dashes. Use commas, periods, parentheses, or colons instead.

Do not use any of the following words or phrases unless they appear in the raw context and are necessary: deep dive, valuable insights, leverage, showcasing, crucial, let's explore, buckle up, journey, game-changer, delve into, tapestry, landscape, intricate, nuanced, interplay, elevate, resonate, furthermore, moreover, in conclusion, it is important to note, as a result, unlock, unleash, reimagine, foster, embark, a testament to, crucial role, at its core, it should be noted, worth mentioning, certainly.

Do not use rhetorical filler. Do not open sections with broad claims about the modern world, technology, creativity, or innovation.

Do not write sentences that follow these patterns:
- "It's not about A, it's about B."
- "This wasn't just A, it was B."
- "In a world where..."
- "At its core..."
- "This project taught me that..." unless followed by a specific, non-obvious lesson.

Do not say "seamless," "user-friendly," "robust," or "scalable" without explaining what specifically earned those words.

Do not inflate claims. Do not call a project "transformative," "revolutionary," or "game-changing" unless the provided context proves it with concrete evidence.

### Preferred Vocabulary

Use plain, concrete words: built, designed, wrote, tested, shipped, simplified, reduced, replaced, clarified, mapped, compared, implemented, debugged, documented, organized, coordinated, prototyped, validated, revised, presented.

Use technical words when they are accurate and relevant. Do not flatten technical work into generic business language.

---

## Narrative Techniques

These techniques make case studies engaging without compromising credibility. They are adapted from video storytelling principles and refined for written portfolio context.

### Weave Features Into Story

Do not list features in isolation. Describe them as part of the experience of building them or as design decisions with reasoning. Explain why something is interesting, what tension it creates, or what problem it solved.

Bad:
> Five equippable guns. Modular enemy AI. Rank-based progression.

Good:
> I built five equippable guns, each consuming a different ammo type. The ice gun is the interesting one because it draws from the adrenaline pool instead of regular ammo, which creates a tension between using your resource for combat power or saving it for movement abilities.

### Personal Journey as Spine

The writer is the protagonist experiencing events, not a presenter summarizing outcomes. Use "I thought... but then..." structures to put the reader in the moment of discovery.

Bad:
> The settings menu had too many responsibilities.

Good:
> I did not realize how bad it was until I went back to add a feature and had to trace through the entire file to understand the control flow.

### Emotional Honesty

Include how things actually felt. Exhaustion, excitement, nostalgia, pride, frustration. These are what make readers connect with the person, not just the project. Do not manufacture emotion, but do not strip it out either.

Good examples:
- "I remember that feeling clearly."
- "For a while the momentum was incredible, and I was genuinely excited about what this game was becoming."
- "I was exhausted."
- "That changed how I saw myself as a developer."

### Escalating Stakes

When describing challenges, present them so problems get bigger, not smaller. If the actual difficulty was random, reorder for dramatic effect. Save the worst for later in the piece.

### Subverted Expectations

At section transitions, use moments where what seemed simple turned out to be hard, or where confidence turned into a new problem.

Good:
> The UI was a project within the project and I did not expect it to take as long as it did.

### Compress Non-Conflict

Parts of the process without tension should fly by. Do not give equal word count to equal effort. Give word count to equal drama.

A two-week setup phase = one sentence. The bug that took three days = a full paragraph.

### Callout Quotes

Use the CalloutQuote component to pull direct quotes from dev vlogs, conversations, or internal monologue. These break up the prose visually and add a raw, personal voice that polished writing cannot replicate.

---

## Visual Strategy

Images and videos are as important as the text. Readers want to see the work, not just read about it.

### Image Density

Every section should have at least one image. Most sections should have two or more. Use ImageGrid for side-by-side comparisons. Use full-width ProjectImage for hero moments or detailed screenshots.

### Image Types to Include

- **Gameplay screenshots**: the game or product in action.
- **Editor/IDE views**: the Godot editor, VS Code, the scene tree, the file structure. These show the reader what the development environment looked like.
- **Code screenshots**: specific files or functions that illustrate a point. Particularly effective for the Challenges section.
- **UI screenshots**: menus, settings, inventory, shop, HUD. These are features that took real effort and deserve to be shown.
- **Planning tools**: Trello boards, Figma files, architecture diagrams, notes. These show process.
- **Before/after**: the original project vs the rebuilt version, or broken vs working.
- **Store pages / public listings**: Steam, App Store, live URLs. These prove the thing shipped.

### Video Placeholders

Use the ProjectVideo component with placeholder src values to mark where video content should go. Videos are strongest for:

- Gameplay montages across the full project.
- Movement systems or animations that lose meaning as stills.
- Boss fights or combat encounters with phase transitions.
- Code scrolling (showing a massive file or a call chain).
- Dev vlog clips that add personal context.

Do not place a video placeholder next to a still image of the same content. If a video covers it, the still is redundant.

### Image Preparation

macOS screenshots add transparent shadow padding. Run the trim script (`./scripts/trim-screenshots.sh <path>`) on all screenshots before committing them. Use `unoptimized` on Image components for pixel art or content where Next.js compression would degrade quality.

---

## MDX Structure

### Frontmatter

```yaml
---
title: "Project Name"
subtitle: "One-line hook or question"
slug: "project-slug"
color: "#hexcolor"
thumbnail: "/projects/slug/hero-image.png"
thumbnailSecondary: "/projects/slug/second-image.png"  # optional, enables split hero
role: "Solo Developer"
timeline: "2021 – 2022"
team:
  - "Ayden Springer"
tools:
  - "Language"
  - "Framework"
  - "Platform"
order: 10
featured: false
category: "web-development"  # or "game-development" or "featured"
---
```

The subtitle should be a question or a concise hook, not a feature summary. "What happens when you ship a game at 16 years old?" is better than "A 2D platformer with four worlds."

### Section Structure

Use this structure as a starting point. Remove sections that the context does not support. Do not force every section.

```
## Overview
## How It Started (or Problem / Context)
## The Work (or The Game / The Product / What I Built)
### Subsections as needed
## Scope and Shipping (or Launch / Outcome)
## Challenges
### Specific challenge subsections
## What I Learned
```

Use `---` horizontal rules between major sections.

### Available Components

- `<Highlight>text</Highlight>` for inline emphasis on key phrases.
- `<ProjectImage src="..." alt="..." caption="..." />` for images. Use `placeholder:description` for images not yet captured.
- `<ProjectVideo src="..." alt="..." caption="..." />` for videos. Supports `loop`, `poster`, and `aspectRatio` props.
- `<ImageGrid columns={2}>` or `columns={3}` to wrap multiple ProjectImage components side by side.
- `<CalloutQuote>"Direct quote text"</CalloutQuote>` for pull quotes.

### Image Paths

Store images in `public/projects/<slug>/`. Reference them with absolute paths starting from `/projects/<slug>/`.

---

## Handling Raw Context

The user may provide messy notes, video transcripts, screenshots, technical explanations, bullet points, or a combination.

### Extraction Process

1. Identify the project and what it is.
2. Identify the audience or user.
3. Identify the problem or motivation.
4. Identify the solution or what was built.
5. Identify the role and personal responsibility.
6. Identify concrete actions taken.
7. Identify constraints and tradeoffs.
8. Identify results, metrics, or outcomes.
9. Identify lessons learned.
10. Identify emotional beats: frustration, excitement, nostalgia, pride, exhaustion, turning points.
11. Identify direct quotes that could work as CalloutQuotes.
12. Identify what images and videos would strengthen the piece, and suggest them with placeholder components.

Do not include every detail just because it was provided. Select the details that help the reader understand the work and connect with the person who did it.

### Video Transcripts

When video transcripts are provided, extract:
- Direct quotes for CalloutQuotes (preserve the original phrasing).
- Emotional moments and turning points for narrative structure.
- Technical details that add credibility.
- The creator's own framing of problems and decisions.

Do not reproduce transcript content verbatim in the prose. Transform it into the written voice while preserving the feeling.

---

## Accuracy Rules

Do not invent metrics, outcomes, team members, dates, tools, clients, or technical details.

If a detail is unclear, either omit it or write around it honestly.

Only use numbers when they are explicitly provided in the source context.

If the context says a project is ongoing, unreleased, confidential, or partially implemented, say that plainly. Do not pretend a prototype is a launched product.

---

## Revision Checklist

After drafting, revise using this checklist:

1. Remove all em dashes. Replace with commas, periods, parentheses, or colons.
2. Remove all sentence fragments. Every sentence must have a subject and a verb.
3. Remove generic AI-sounding phrases and any words from the banned list.
4. Replace vague claims with specific actions and concrete details.
5. Check that every metric is supported by the input context.
6. Check that "I" and "we" are used accurately.
7. Remove sections that feel padded or repetitive.
8. Make sure the opening paragraph explains the project clearly.
9. Make sure the outcome does not exaggerate.
10. Make sure the reflection says something specific and non-obvious.
11. Verify that every section has at least one image or video component.
12. Verify that features are woven into narrative rather than listed.
13. Verify that emotional beats are present but not manufactured.
14. Verify that no video placeholder duplicates a still image of the same content.
15. Check that all image paths point to files in `public/projects/<slug>/`.

---

## Example: Section Before and After

### Before (dry feature list)

> A rank system (Silver, Gold, Diamond, Glitch) gates ability unlocks. Silver grants double jump, wall slide, and wall jump. Gold adds the air dash and adrenaline. Ranks are earned by defeating story bosses.

### After (features woven into story)

> One of the systems I am most proud of is the rank system. Players progress through four ranks (Silver, Gold, Diamond, Glitch), and each one gates real ability unlocks. Silver gives you double jump, wall slide, and wall jump. Gold unlocks the air dash and introduces adrenaline, a resource that regenerates over time and fuels the ice gun. You earn ranks by defeating three story bosses: Fernand, Ostrich, and Cora. I wrote each boss with its own state machine and distinct attack patterns.

The second version does three things the first does not: it expresses pride in the work, it explains why the design is interesting (adrenaline as a shared resource), and it names the bosses as concrete evidence of scope.

---

## Final Output Rules

Return only the MDX content. Do not include notes like "Here is a polished version." Do not mention these instructions. Do not ask for missing information unless the case study cannot be written at all. If information is missing, write the strongest accurate version using the context provided and omit unsupported claims.
