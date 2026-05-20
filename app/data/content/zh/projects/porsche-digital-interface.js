export const porscheProject = {
  slug: 'porsche-digital-interface',
  title: 'Porsche Digital Interface',
  description:
    '为 Porsche Taycan 重新设计车载数字体验，聚焦导航、语音交互和更安全的多模态操控。',
  roles: ['UX Research', 'UX Design', 'UI Design', 'Product Design', 'Prototyping'],
  summary: {
    title: 'Porsche Digital Interface',
    description:
      'Porsche Taycan 车载 HMI 重设计：基于用户研究的交互流程与高保真原型，覆盖导航、语音控制与 AI 辅助，聚焦更安全的多模态交互。',
    modelType: 'laptop',
    modelAlt: 'Porsche Digital Interface 原型在笔记本上展示',
    quickFacts: [
      { label: '角色', value: 'UX / UI Designer（Porsche Asia Pacific 实习）' },
      { label: '方法', value: 'UX 研究、多模态流程设计、原型制作' },
      { label: '工具', value: 'Figma' },
      { label: '成果', value: 'UI 优化迭代后界面加载时间降低 30%' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'porscheHome',
      alt: 'Porsche Digital Interface 主屏幕',
    },
    {
      type: 'text',
      heading: '实习背景',
      body: [
        '我以 UX/UI 设计实习生的身份加入 Porsche Asia Pacific，嵌入负责 Porsche Communication Management 演化迭代的团队。PCM 是驾驶员和乘客在导航、媒体、空调、语音和辅助功能中接触的车载信息娱乐界面。',
        '我的工作范围围绕 Taycan 级别的数字座舱展开：优化导航、语音控制和 AI 辅助等核心流程在实际驾驶场景下的体验，然后将设计决策沉淀为组件级规范，让工程团队可以直接落地。',
      ],
    },
    {
      type: 'text',
      heading: '问题定义',
      body: [
        '车载软件能力越强，混乱流程的代价就越高。一个正准备驶入高速的驾驶员不应该去思考某个控件在哪、语音是否在听、系统操作是否已确认。',
        '设计挑战在于：降低流程复杂度、提升界面响应性，并让触控、语音和 AI 辅助三者能够承载同一任务——这样驾驶员在任一时刻都可以选择最安全的交互方式，而不是被屏幕当前显示的内容锁死。',
      ],
    },
    {
      type: 'timeline',
      heading: '项目流程',
      body: [
        '工作经历了六个阶段——调研、映射、低保真探索、高保真设计、工程交接和交接后优化——设计意图与平台渲染能力之间持续往返迭代。',
      ],
      items: [
        {
          title: '调研与审计',
          description:
            '审查现有 PCM 流程、竞品车载 HMI 和驾驶员分心指南，确定优先重设计的界面范围。',
        },
        {
          title: '流程映射',
          description:
            '端到端梳理语音、导航、巡航、车道保持和泊车辅助流程——包括失败、重试和重新进入路径。',
        },
        {
          title: '线框图',
          description:
            '低保真测试网格菜单、快捷控件栏和语音指令界面，比较信息密度、触达范围和扫视效率。',
        },
        {
          title: '高保真设计',
          description:
            '优化布局、字号体系、动效和色彩方案，确保在不同环境光线条件下的车内可读性。',
        },
        {
          title: '工程交接',
          description:
            '编写组件级 UI 规范、动效行为和边缘状态文档，让工程团队对每个界面有唯一权威源。',
        },
        {
          title: '性能优化',
          description:
            '与工程团队迭代微交互和资源权重，最终使界面加载时间降低 30%。',
        },
      ],
    },
    {
      type: 'image',
      image: 'porscheFlowchart',
      light: true,
      heading: '语音流程映射',
      alt: 'Porsche Digital Interface 语音指令交互流程图',
      body: [
        '在画任何界面之前，语音流程必须端到端清晰可读。流程图梳理了导航、巡航控制、车道保持和泊车辅助的监听、确认、执行和错误恢复路径——包括系统不理解时如何回应驾驶员，以及驾驶员如何在不盯着屏幕的情况下回到安全默认状态。',
        '这份产物既是设计工具，也是与工程的契约：它定义了哪些提示可以在哪些位置出现、驾驶员始终会收到什么反馈、以及在哪些情况下 AI 建议可以出现而不需要强制确认步骤。',
      ],
    },
    {
      type: 'text',
      heading: '多模态设计原则',
      body: [
        '驾驶员的注意力是有限且安全关键的。同一项任务——设定目的地、调节空调、接受巡航建议——应该可以通过当前时刻最安全的交互方式完成，而非只能通过屏幕上恰好展示的那一种。',
        '我围绕三个原则展开工作：每个主要操作都应通过触控和语音均可触达；AI 建议应该是可扫视且可忽略的，绝不应成为强制弹窗；反馈始终应确认系统状态，尤其是语音指令之后，这样驾驶员不需要低头去确认刚才发生了什么。',
      ],
    },
    {
      type: 'gallery',
      heading: '线框图',
      images: ['porscheWireframeMain', 'porscheWireframeNavigation'],
      body: [
        '线框图探索了基于网格的应用菜单、持久快捷控件、语音指令栏和实时系统状态反馈。核心目标是让主视图在一个扫视的瞬间就能被理解，同时确保任何主要任务不超过两次交互即可触达。',
      ],
    },
    {
      type: 'gallery',
      heading: '高保真原型',
      images: ['porscheHome', 'porschePrototype'],
      body: [
        '高保真原型将触控、视觉层级和语音辅助整合在一起。色彩和动效针对车内可读性进行了调校，布局复用了共享的基础组件，让相同的组件行为在导航、媒体和辅助界面之间保持一致。',
      ],
    },
    {
      type: 'text',
      heading: '加载时间优化',
      body: [
        '30% 的加载时间降低来自于交接期间和之后与工程团队的紧密迭代。组件规范被重写以复用共享原语，动画时长和资源权重根据平台渲染预算进行了调优，多个冗余的过渡状态合并为单一的规范路径。',
        '我带走的一个重要启示是：性能不是下游的"工程问题"。层级、过渡复杂度和资源选择等设计决策，都会直接反映在界面实际加载时的体感上——因此把交接视为设计的延续而非设计的终点，是那个可量化成果之所以成立的关键。',
      ],
    },
    {
      type: 'metrics',
      heading: '成果概览',
      body: [
        '微交互和组件级 UI 规范的迭代，在工程交接阶段直接转化为可量化的性能和清晰度提升。',
      ],
      metrics: [
        { value: '30%', label: '界面加载时间降低' },
        { value: '4', label: '多模态流程交付（触控 · 语音 · AI · GUI）' },
        { value: '12+', label: '高保真组件规范交付' },
      ],
      evidence: [
        {
          label: '性能',
          value:
            '微交互和资源权重的迭代调优使导航、语音和辅助界面的加载时间降低 30%。',
        },
        {
          label: '跨职能对齐',
          value:
            '设计理念和交互流程的讲解帮助设计与工程团队在可用性目标、视觉一致性和技术可行性上对齐，并在开发启动之前达成共识。',
        },
        {
          label: '多模态覆盖',
          value:
            '交互流程覆盖触控、语音指令和 AI 驱动辅助——使驾驶员能够在任一时刻通过最安全的方式完成同一任务。',
        },
      ],
    },
    {
      type: 'outcome',
      image: 'porscheOutcome',
      heading: '反思',
      body: [
        '为车载 HMI 做设计，强化了我对注意力预算、错误恢复和每一张额外屏幕成本的思考方式。交付给驾驶员使用的界面必须吸收用户没有时间去给予的上下文——天气、交通、交互偏好、疲劳状态——而不需要他们把系统的状态再翻译回安全。',
        '我带走的最宝贵习惯是把工程交接视为设计本身的一部分。30% 加载时间降低这样的可衡量成果，是设计与实现共同迭代的产物，而不是某一方把"已完成的工作"抛过墙来的结果。',
      ],
    },
  ],
};
