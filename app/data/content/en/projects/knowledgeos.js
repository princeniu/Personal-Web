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
        image: 'knowledgeosHeroBannerEn',
        alt: 'KnowledgeOS concept — fragmented sources transformed by agent into structured knowledge outputs',
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
        image: 'knowledgeosReflectionBg',
        backgroundOverlayOpacity: 0.72,
        heading: 'Reflection',
        body: [
          'KnowledgeOS changed the role of a personal knowledge system from a place where I store notes into an infrastructure layer that helps me maintain judgment. The hardest part of AI-native knowledge work is not generation — it is maintenance: deciding what deserves to persist, where it belongs, how it should update, and when old context should be rewritten into a clearer current understanding.',
          'For me, this project sits at the intersection of human factors, product design, and agentic systems. It is not about adding AI to a note-taking tool. It is about redesigning the responsibility boundary between human and machine: the human thinks, builds, and decides; the agent maintains the context that makes those decisions compound.',
        ],
      },
    ],
  };
