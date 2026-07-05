export const etongueProject = {
  slug: 'etongue-sensory-platform',
  title: 'E-Tongue Sensory Decision Support Platform',
  description:
    '一个决策支持平台，将 E-Tongue 机器味觉数据与半训练感官评审反馈结合，帮助食品开发团队比较原型，并判断下一步应该 Go、Tweak 还是 Stop。',
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
      '一个 Human Factor Product Design 案例，研究如何把机器味觉数据和人工感官反馈用于更清晰的早期产品判断。',
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
        '在 Human Factor Product Design 课程中，我们团队关注食品开发中的一个具体判断问题：当证据同时来自 E-Tongue 机器读数和半训练感官评审员时，团队该如何比较不同产品样本。',
        '难点不是再加一个 dashboard。食品团队已经有数据，真正需要的是看清样本之间发生了什么变化、机器读数和人类感知在哪里不一致，以及这些证据是否足够支持原型继续推进。',
      ],
    },
    {
      type: 'image-text',
      image: 'etongueDeviceContext',
      heading: '理解感测系统',
      alt: '作为领域参考的商用 E-Tongue 味觉感测仪器',
      body: [
        '项目从物理感测流程开始，而不是从一张空白界面开始。E-Tongue 评估涉及样本准备、重复测量，以及对食品科学团队有意义但不一定容易被产品相关方读懂的输出。',
        '这个设备语境决定了平台的重点：把技术测量变成开发团队可以讨论、可以追溯、也可以用于决策的依据。',
      ],
    },
    {
      type: 'text',
      heading: 'UX 问题',
      body: [
        '机器味觉数据可以精确且可重复，但它不会自己解释自己。评审反馈更接近人的真实感知，却也更慢、更主观，并且在参与者之间更容易出现差异。',
        '我们把核心 UX 问题定义为决策支持：平台如何帮助食品开发者理解发生了什么变化、为什么重要，以及下一步应该 Go、Tweak 还是 Stop？',
      ],
    },
    {
      type: 'image',
      image: 'etongueIssfDashboard',
      heading: '平台概念：ISSF Dashboard',
      alt: 'ISSF Dashboard 概念界面，展示 E-Tongue + 半训练评审混合方法与示意性的置信度状态栏',
      body: [
        'ISSF Dashboard 给混合方法一个可工作的界面。状态栏展示这个概念所假设的证据模型 Semi-trained panel + E-Tongue + GC-O，并列出准确率、相关性和样本量。这些数字是用来推演「置信度应该如何呈现」的示意值，不是经过验证的结果——真正的设计问题是这些证据应该放在哪里，让食品开发者在比较原型前先判断可信度。',
        '每个样本卡片先呈现 hedonic score。CATA attributes、intensity ratings 和 emotional profiles 面板随后让团队检查分数背后的具体证据，而不是把数字当成黑箱结论。',
      ],
    },
    {
      type: 'timeline',
      heading: '流程时间线',
      body: [
        '项目依次经过领域发现、任务分析、概念选择、基于角色的工作流、早期原型和形成性可用性测试。',
      ],
      items: [
        {
          title: '客户与领域发现',
          description:
            '梳理感官评估流程、E-Tongue 数据输出，以及食品开发者在比较产品原型时需要做出的判断。',
        },
        {
          title: '任务分析',
          description:
            '映射不同用户如何配置样本、收集评审反馈、解释机器测试结果，并跨产品比较证据。',
        },
        {
          title: '概念方向',
          description:
            '比较 dashboard、comparison tool 和 decision-support 方向后，选择最能把证据连接到产品判断的工作流。',
        },
        {
          title: '基于角色的原型',
          description:
            '将体验拆分为评审员问卷和食品开发者分析视图，让每个角色看到合适的信息粒度。',
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
        '这段早期原型演示呈现了团队第一版完整产品方向：基于角色的入口、样本工作流、感官问卷交互，以及用于解释结果的决策支持层雏形。',
        '我们把它作为流程证据，而不是最终打磨完成的产品。这个原型的价值在于，它让工作流具体到可以被批评、测试和继续修改。',
      ],
    },
    {
      type: 'text',
      heading: '为混合感官证据设计',
      body: [
        '平台把评审员任务（CATA 选择、强度评分、喜好评分和情绪反应）与开发者任务（配置样本、查看机器测试、分析一致性和做产品判断）连接在一起。',
        '我们没有让用户手动调和每张图表和每条反馈，而是把体验重心放在解释层：信心、理由、一致性模式、异味检测，以及 Go / Tweak / Stop 建议。',
      ],
    },
    {
      type: 'gallery',
      heading: '混合证据的实际呈现',
      images: ['etongueTasteProfile', 'etongueIssfScore'],
      body: [
        '这两个视图从不同距离展示同一套证据。Taste Profile 雷达图展示来自 Insent TS-5000Z 的 9 轴 E-Tongue 输出，覆盖从酸味到浓郁度的变化，并保留测量条件（2:5 稀释、40°C、7000rpm）。ISSF Score 视图则把机器数据和评审反馈合并成 Go、Tweak 或 Stop 建议，并附带信心、风险等级和预计节省成本。',
        '这样设计的目的，是让开发者能在原始感官信号和产品层判断之间切换，同时保留回溯证据的路径。',
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
        '最终原型把 ISS-F 平台组织成四个核心视图。Machine Testing 支持团队比较最多 12 个产品样本和 2 个乳制品对照，覆盖 E-Tongue、GC-O aroma 和化学成分数据。Analyze Results 将 CATA attributes、intensity ratings、hedonic scores 和 semi-trained panelists 的 emotional profiles 与机器读数放在一起。',
        'Final Decision 根据混合证据给出 Go / Tweak / Stop 建议，并用 ISSF confidence scores、sensory profiles、trained-panel validation deltas 和预计节省成本支撑判断。Configure Products 支持管理员创建评估会话、管理评审员名单，并追踪产品从 Active 到 Complete 的状态。',
      ],
    },
    {
      type: 'image-text',
      image: 'etongueSensorCloseup',
      heading: '从传感器读数到决策线索',
      alt: 'E-Tongue 传感器探针特写，用作感测工作流设计语境',
      body: [
        '感测硬件让背后的工作变得可见：多个探针、校准预期、重复测量和样本级比较，都指向一个很实际的问题，食品原型是否已经准备好继续推进。',
        '这直接影响了界面优先级。平台需要保留技术可信度，同时给用户一条从传感器证据走向产品解释的可读路径。',
      ],
    },
    {
      type: 'metrics',
      heading: '测试快照',
      body: [
        '我们的可用性测试是形成性的。目标是在系统进一步打磨前，找出术语、量表设计和工作流预期可能失效的地方。',
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
            '测试暴露出用户期待更清晰起始状态、更强进度提示和更一致交互模式的地方。',
        },
      ],
    },
    {
      type: 'outcome',
      image: 'etongueSensorCloseup',
      heading: '反思',
      body: [
        '这个项目让我更明确地看到：复杂数据产品不会因为图表准确就自然变得可用。当人们需要在不确定性下做决策时，界面必须组织证据、呈现权衡，并解释为什么某个建议值得被采纳。',
        '对我们团队来说，关键转变是从数据可视化走向决策支持 UX。重点不再是展示每个信号，而是在机器测量、人类感知和下一步产品行动之间设计一个解释层。',
      ],
    },
  ],
};
