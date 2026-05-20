export const etongueProject = {
  slug: 'etongue-sensory-platform',
  title: 'E-Tongue Sensory Decision Support Platform',
  description:
    '一个以人为中心的决策支持平台，将 E-Tongue 机器味觉数据与半训练感官评审反馈结合，帮助食品开发团队比较原型并做出 Go / Tweak / Stop 决策。',
  roles: [
    'UX Researcher + UI Designer',
    'Human Factor Product Design',
    '决策支持 UX',
    '原型设计',
    '可用性测试',
  ],
  summary: {
    title: 'E-Tongue Sensory Platform',
    description:
      '一个 Human Factor Product Design 案例，探索食品开发者如何结合机器味觉测量与评审感知数据，做出更清晰的早期产品决策。',
    modelType: 'laptop',
    modelAlt: '笔记本电脑上展示的 E-Tongue 感官决策支持原型',
    quickFacts: [
      { label: '角色', value: 'UX Researcher + UI Designer' },
      { label: '课程', value: 'Human Factor Product Design' },
      { label: '方法', value: '利益相关者研究、任务分析、原型设计、可用性测试' },
      { label: '结果', value: '用于混合感官评估和 Go / Tweak / Stop 决策支持的早期原型' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'etongueEarlyPrototype',
      alt: 'E-Tongue 感官决策支持平台早期原型演示',
    },
    {
      type: 'text',
      heading: '项目背景',
      body: [
        '在 Human Factor Product Design 课程中，我们团队探索食品开发者如何通过结合两类非常不同的证据来评估产品样本：E-Tongue 机器味觉测量，以及半训练感官评审员的反馈。',
        '设计挑战不只是展示更多数据。我们需要帮助团队比较样本、理解机器读数与人类感知之间的不一致，并从原始感官证据推进到更清晰的产品决策。',
      ],
    },
    {
      type: 'image-text',
      image: 'etongueDeviceContext',
      heading: '理解感测系统',
      alt: '作为领域参考的商用 E-Tongue 味觉感测仪器',
      body: [
        '项目从一个物理感测系统开始，而不只是一个屏幕。E-Tongue 工作流涉及样本准备、机器测量，以及解释对食品科学团队有意义但对更广泛产品利益相关者不一定透明的输出。',
        '课程研究中的设备语境帮助我们围绕真实交接点设计平台：把技术测量转化为开发团队能够讨论、信任并采取行动的决策依据。',
      ],
    },
    {
      type: 'text',
      heading: 'UX 问题',
      body: [
        '机器味觉数据可以精确且可重复，但脱离领域语境后很难解释。人类评审反馈更丰富，也更接近真实感知，但它可能主观、缓慢，并且在参与者之间不一致。',
        '我们将核心 UX 问题定义为决策支持：平台如何帮助食品开发者理解样本之间发生了什么变化、为什么重要，以及下一步应该 Go、Tweak 还是 Stop？',
      ],
    },
    {
      type: 'image',
      image: 'etongueIssfDashboard',
      heading: '平台概念：ISSF Dashboard',
      alt: 'ISSF Dashboard 展示 E-Tongue + 半训练评审混合方法，并达到 94% 准确率',
      body: [
        'ISSF Dashboard 将混合方法愿景转化为一个可操作界面。状态栏说明核心方法——Semi-trained panel + E-Tongue + GC-O——并展示准确率（94%）、相关性（r=0.91）和样本量（n=127），让食品开发者在比较原型之前就能看到清晰的证据可信度。',
        '每个样本卡片在第一眼呈现 hedonic score，而 CATA attributes、intensity ratings 和 emotional profiles 面板则让开发者深入查看每个数字背后的具体证据。',
      ],
    },
    {
      type: 'timeline',
      heading: '流程时间线',
      body: [
        '项目从领域发现推进到任务分析、概念选择、基于角色的工作流、早期原型和形成性可用性测试。',
      ],
      items: [
        {
          title: '客户与领域发现',
          description:
            '梳理感官评估流程、E-Tongue 数据输出，以及食品开发者在比较产品原型时需要做出的决策。',
        },
        {
          title: '任务分析',
          description:
            '映射不同用户如何配置样本、收集评审反馈、解释机器测试结果，并跨产品比较证据。',
        },
        {
          title: '概念方向',
          description:
            '比较 dashboard、comparison tool 和 decision-support 方向后，优先选择能把证据转化为可行动建议的工作流。',
        },
        {
          title: '基于角色的原型',
          description:
            '将体验拆分为评审员问卷和食品开发者分析视图，让每个角色聚焦在合适的信息粒度。',
        },
        {
          title: '形成性测试',
          description:
            '通过 think-aloud 可用性测试观察问卷清晰度、术语理解、导航行为和评分量表中的困惑。',
        },
      ],
    },
    {
      type: 'image',
      image: 'etongueEarlyPrototype',
      heading: '早期原型演示',
      alt: '早期 E-Tongue 感官平台原型的视频演示',
      body: [
        '这段早期原型演示呈现了团队第一版端到端产品方向：基于角色的入口、样本工作流、感官问卷交互，以及用于解释结果的决策支持层雏形。',
        '我们有意把它作为流程证据，而不是最终打磨完成的产品。这个原型的价值在于，它让工作流具体到可以被批评、测试和迭代。',
      ],
    },
    {
      type: 'text',
      heading: '为混合感官证据设计',
      body: [
        '平台概念连接了评审员任务（如 CATA 选择、强度评分、喜好评分和情绪反应）与开发者任务（如配置样本、查看机器测试、分析一致性和做出最终产品判断）。',
        '我们没有让用户手动调和每张图表和每条反馈，而是强调解释层：信心、理由、一致性模式、异味检测，以及清晰的 Go / Tweak / Stop 建议。',
      ],
    },
    {
      type: 'gallery',
      heading: '混合证据的实际呈现',
      images: ['etongueTasteProfile', 'etongueIssfScore'],
      body: [
        '这是同一套混合证据工作流的两个视角。Taste Profile 雷达图展示来自 Insent TS-5000Z 的 9 轴 E-Tongue 输出——从酸味到浓郁度——并保留具体测量条件（2:5 稀释、40°C、7000rpm）。ISSF Score 视图则把机器数据和评审反馈合并为一个可行动建议：Go、Tweak 或 Stop，并附带信心、风险等级和预计节省成本。',
        '这两类界面让开发者能在原始感官信号和产品层决策之间切换，同时不丢失回溯证据的路径。',
      ],
    },
    {
      type: 'gallery',
      heading: '最终原型：ISSF Platform',
      images: [
        'etonguePrototypeMachineTesting',
        'etonguePrototypeAnalyzeResults',
        'etonguePrototypeFinalDecision',
        'etonguePrototypeConfigureProducts',
      ],
      body: [
        '最终原型通过四个核心视图呈现 ISS-F 平台。Machine Testing 支持团队比较最多 12 个产品样本和 2 个乳制品对照，覆盖 E-Tongue、GC-O aroma 和化学成分数据。Analyze Results 将 CATA attributes、intensity ratings、hedonic scores 和 semi-trained panelists 的 emotional profiles 与机器读数放在一起。',
        'Final Decision 将混合证据转化为 Go / Tweak / Stop 建议，每条建议都由 ISSF confidence scores、sensory profiles、trained-panel validation deltas 和预计节省成本支撑。Configure Products 支持管理员创建评估会话、管理评审员名单，并追踪产品从 Active 到 Complete 的状态。',
      ],
    },
    {
      type: 'image-text',
      image: 'etongueSensorCloseup',
      heading: '从传感器读数到决策线索',
      alt: 'E-Tongue 传感器探针特写，用作感测工作流设计语境',
      body: [
        '感测硬件让工作流背后的隐藏复杂度变得可见：多个探针、重复测量、校准预期和样本级比较，都服务于一个看似简单的问题——食品原型是否准备好继续推进。',
        '这种复杂度塑造了我们的界面优先级：平台需要保留技术可信度，同时给用户一条从传感器证据到产品层解释的可读路径。',
      ],
    },
    {
      type: 'metrics',
      heading: '测试快照',
      body: [
        '我们的可用性测试是形成性的：目标是在系统进一步打磨前，识别术语、量表设计和工作流预期可能失效的地方。',
      ],
      metrics: [
        { value: '3', label: '参与测试的评审员' },
        { value: '19–60', label: '参与者年龄范围' },
        { value: '3', label: '观察的核心问卷任务' },
      ],
      evidence: [
        {
          label: '术语支持',
          value:
            '参与者认为流程内定义很有帮助，尤其是在感官术语陌生或技术性较强时。',
        },
        {
          label: '量表清晰度',
          value:
            '不一致的评分格式和不清晰的情绪反应标签造成困惑，并成为迭代重点。',
        },
        {
          label: '工作流预期',
          value:
            '测试暴露了若干用户期待更清晰起始状态、更强进度提示和更一致交互模式的时刻。',
        },
      ],
    },
    {
      type: 'outcome',
      image: 'etongueSensorCloseup',
      heading: '反思',
      body: [
        '这个项目说明，复杂数据产品不会因为增加 dashboard 就自然变得可用。当人们需要在不确定性下做决策时，界面必须组织证据、呈现权衡，并解释为什么会产生某个建议。',
        '对我们团队来说，最重要的转变是从数据可视化走向决策支持 UX：在机器测量、人类感知和下一步产品开发行动之间设计一个共享解释层。',
      ],
    },
  ],
};
