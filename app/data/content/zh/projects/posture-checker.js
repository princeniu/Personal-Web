export const postureProject = {
  slug: 'posture-checker',
  title: 'Posture Checker',
  description:
    '一款跨平台坐姿监测 App，使用 React Native 和 Bluetooth Low Energy 追踪实时坐姿数据、可视化进度并发送纠正提醒。',
  roles: [
    'User Research',
    'UX Design',
    'UI Design',
    'React Native',
    'Mobile Development',
    'Product Design',
  ],
  summary: {
    title: 'Posture Checker',
    description:
      '一款 React Native 移动应用，搭配 BLE 可穿戴传感器，提供实时纠正反馈、本地存储坐姿数据，并可视化背部健康进展。',
    modelType: 'phone',
    modelAlt: 'Posture Checker 应用界面在手机上展示',
    quickFacts: [
      { label: '角色', value: 'Product Designer + Mobile Developer（独立完成）' },
      { label: '方法', value: '用户研究、BLE 原型、系统架构、推送反馈闭环' },
      { label: '工具', value: 'React Native, Expo, BLE, Arduino, Firebase, Figma' },
      { label: '成果', value: '跨平台 iOS + Android App，搭配定制 BLE 坐姿传感器' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'postureApp',
      alt: 'Posture Checker 应用界面',
    },
    {
      type: 'text',
      heading: '为什么做坐姿，为什么连硬件也做',
      body: [
        '我每天大部分时间都在桌前度过，而市面上大多数坐姿 App 要么依赖手机陀螺仪（只有把手机绑在身上才有效），要么依赖摄像头检测（要求固定坐姿、侵入感强）。两者都无法在正常工作日中存活。',
        '我想验证一个假设：用一颗小型专用传感器——通过 Bluetooth Low Energy 与用户随身携带的手机配对——能否弥补这个缺口：持续、低摩擦、尊重隐私的反馈，同时保持在一个用户熟悉的移动界面中。',
      ],
    },
    {
      type: 'text',
      heading: '问题发现',
      body: [
        '对现有坐姿 App 的扫描揭示了一个反复出现的模式：实时反馈要么过于侵入（每次弯腰都震动一下），要么完全缺失（只有一天结束后的总结）。长期行为改变需要的是中间地带——当坐姿确实持续差到值得关注时才触发反馈，同时提供用户可以回顾的趋势数据，不需要额外努力。',
        '这个判断给了项目两个不可妥协的约束：（1）一个能持续捕获坐姿数据的传感器，不依赖手机摆放位置；（2）一个尊重用户注意力、但仍能在日常中发挥作用的反馈闭环。',
      ],
    },
    {
      type: 'timeline',
      heading: '项目流程',
      body: [
        '作为独立 designer-builder，我把项目视为一个连续的循环：设计约束引导硬件决策，硬件行为重塑 UI，而 UI 又暴露了数据层的新问题。',
      ],
      items: [
        {
          title: '调研',
          description:
            '审计坐姿 App 和可穿戴设备；定义目标用户（久坐的知识工作者和学生）及核心反馈缺口。',
        },
        {
          title: '硬件原型',
          description:
            '用 Arduino 搭建基于 BLE 广播的坐姿传感器，验证小型低功耗设备能够持续传输坐姿数据。',
        },
        {
          title: '系统架构',
          description:
            '定义传感器到 React Native App 再到本地存储和 Firebase 的数据流，包括重连和离线行为。',
        },
        {
          title: 'UX 设计',
          description:
            '围绕实时状态、每日目标、趋势和快捷设置，线框化一个单仪表板的移动端体验。',
        },
        {
          title: 'BLE 集成',
          description:
            '实现配对流程、实时数据流和重连处理——这是整个系统在真实环境中最可能静默失效的部分。',
        },
        {
          title: '反馈闭环调优',
          description:
            '引入基于持续时长的推送通知，只在姿势持续不佳时才报警而非每次瞬间弯腰都提示；随后根据用户实际关心的内容优化趋势和历史界面。',
        },
      ],
    },
    {
      type: 'image-text',
      image: 'postureArchitecture',
      light: true,
      heading: '系统架构',
      alt: 'Posture Checker 系统架构图',
      body: [
        '架构横跨 BLE 坐姿传感器、React Native 客户端（iOS + Android）、用于离线韧性的本地存储、用于同步和认证的 Firebase、趋势图表，以及形成纠正反馈闭环的推送通知。作为一个人从端到端设计这一体系，每一层都必须刻意保持简单。',
      ],
    },
    {
      type: 'image-text',
      image: 'postureActivity',
      heading: '用户活动流程',
      alt: 'Posture Checker 用户活动流程',
      body: [
        '用户流程覆盖 App 启动、蓝牙配对、设备检测、实时坐姿分析、纠正通知和进度可视化。配对被视为一流的产品时刻——而非隐藏在设置中的步骤——因为整个产品的价值取决于它第一次就能成功。',
      ],
    },
    {
      type: 'text',
      heading: '硬件与连接决策',
      body: [
        '选择 BLE 而非 USB 或 Wi-Fi 有三点原因：它保留了小型可穿戴设备的全天电池续航；它能与用户随身携带的手机干净配对；其连接模型（广播 → 连接 → 流式传输）能映射到一个可以从断连中优雅恢复的移动端 UX。',
        '采样率设为 1 Hz。更高的采样率增加了电池消耗和噪声，但没有改变行为信号——持续数秒的坐姿才是重要的，而非毫秒级的抖动。本地存储持有原始流，确保即便网络不可用，趋势和历史仍然可用。',
      ],
    },
    {
      type: 'image',
      image: 'postureWireframe',
      light: true,
      heading: '线框图',
      alt: 'Posture Checker 线框图',
      body: [
        '线框图将坐姿状态、每日目标、设置、统计和核心导航组织为单一仪表板结构。核心假设是：每天几次、每次几秒钟的快速查看，比一个用户必须"进入并探索"的重度 App 更有价值。',
      ],
    },
    {
      type: 'image',
      image: 'posturePrototype',
      dark: true,
      heading: '高保真原型',
      alt: 'Posture Checker 高保真原型界面',
      body: [
        '高保真原型将追踪、目标进度、分析和设置浓缩为一个适合每日重复使用的平易近人界面。信息密度刻意控制在很低的水平：主视图在回答任何其他问题之前，先回答"我现在坐得怎么样？"',
      ],
    },
    {
      type: 'comparison-columns',
      image: 'postureFinalApp',
      light: true,
      heading: '设计反馈闭环',
      alt: 'Posture Checker 最终应用界面',
      body: [
        '产品中最冒险的 UX 决策是何时打断用户。每次弯腰都通知，会训练用户忽略 App；只在一天结束时汇总，又错过了纠正行为的关键时刻。',
        '我采用了一个基于持续时长的模型：反馈仅在姿势持续不佳超过可配置时长后才触发。结合趋势可视化，它将 App 从"唠叨"转变为习惯建立的载体——用户看到的是"今天 vs 昨天"，而不只是"你又驼背了"。',
      ],
    },
    {
      type: 'metrics',
      heading: '构建概览',
      body: [
        '构建覆盖了完整的产品面：一个硬件配对移动 App、端到端的交互模型，以及一个旨在让坐姿习惯变得可见的反馈闭环。',
      ],
      metrics: [
        { value: '2', label: '交付平台（iOS + Android，基于 React Native）' },
        { value: '1', label: '集成定制 BLE 坐姿传感器' },
        { value: '5+', label: '核心界面（状态、目标、趋势、历史、设置）' },
        { value: '1 Hz', label: '实时坐姿采样频率' },
      ],
      evidence: [
        {
          label: '软硬件集成',
          value:
            '设计并实现 BLE 配对流程，将 React Native App 连接到定制坐姿传感器，包括重连处理和实时数据流。',
        },
        {
          label: '反馈闭环',
          value:
            '推送通知仅在持续坐姿不佳超过阈值后触发，支持行为改变而不因瞬间弯腰打扰用户。',
        },
        {
          label: '信息呈现',
          value:
            '实时状态、每日目标、历史趋势和良好/驼背可视化统一整合为单一移动端仪表板，用于日常快速查看。',
        },
      ],
    },
    {
      type: 'outcome',
      image: 'postureTeam',
      heading: '反思',
      body: [
        'Posture Checker 是我不再把"设计"和"工程"视为独立阶段的那个项目。硬件约束（电池、采样频率、BLE 重连）重塑了 UI；UI 揭示了系统实际需要保留哪些数据；而反馈闭环只有在设计意图和数据管线同时调优后才真正生效。',
        '最终交付的构建证明了一个独立的 designer-builder 可以将一个硬件集成移动产品从概念推进到一个完整的多屏可体验状态。如果继续迭代，我会优先做端侧趋势建模——在不依赖云端往返的情况下闭合更多反馈闭环。',
      ],
    },
  ],
};
