export const allWorkProject = {
  slug: 'all-work',
  title: '全部项目',
  description:
    '一个作品索引，覆盖已发布产品、实习项目、原型和探索性构建，横跨产品设计、移动开发与 AI 工具。',
  roles: ['产品设计', 'UX 研究', '移动开发', 'AI 集成', '原型设计'],
  summary: {
    title: '全部项目',
    description:
      '主页精选案例之外的项目索引，包括已发布产品、实习工作、原型和小型构建。',
    modelType: 'laptop',
    modelAlt: '额外作品集项目概览',
  },
  sections: [
    {
      type: 'text',
      heading: '其他项目',
      body: [
        '主页上的精选案例是我最想展开讲过程的项目。这个页面收纳其余内容：已发布产品、真实实习项目、课程项目，以及一些影响我设计与工程思考的小型构建。',
        '这些项目大多围绕同一个方向：把交互模型讲清楚，做出能验证的原型，并尽量把想法推进到可以测试或发布的状态。',
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
              '基于 Markdown、Obsidian、Hermes Agent、cron 工作流和 Git 备份的个人知识系统，用来避免有用的项目上下文散落在聊天记录里。',
          tags: ['AI Systems', 'Knowledge Architecture', 'Markdown', 'Automation'],
          href: '/zh/projects/knowledgeos',
        },
        {
          title: 'TrekAssist',
          timeframe: '2025 年 9 月 – 12 月 · Tufts',
          description:
            '太阳能电子墨水屏国家公园导览设备。通过 9 位参与者、6 个户外任务进行可用性测试，并发现和处理 Low Power 可发现性问题。',
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
        '如果这个页面里的某个项目与你正在招聘的角色相关，欢迎联系我。我很乐意讲解那些不适合放进公开案例页的流程、决策和权衡。',
      ],
    },
  ],
};
