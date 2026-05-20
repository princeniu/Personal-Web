export const trekassistProject = {
  slug: 'trekassist',
  title: 'TrekAssist',
  description:
    '一款面向 Yellowstone 游客的太阳能电子墨水屏导览设备，通过以人为中心的设计流程支持户外导航、紧急响应、安全提醒和低功耗交互。',
  roles: [
    '人因工程',
    '安全关键 UX',
    '可用性测试',
    '电子墨水屏界面',
    '户外导航',
  ],
  summary: {
    title: 'TrekAssist',
    description:
      '一个团队 UX/HFE 案例：为太阳能户外电子墨水屏设备设计体验，并通过 9 位参与者、6 个场景任务验证导航、紧急支持与低功耗交互。',
    modelType: 'laptop',
    modelAlt: '笔记本电脑上展示的 TrekAssist 电子墨水屏国家公园导览界面',
    quickFacts: [
      { label: '角色', value: 'UX / 人因设计师（团队项目）' },
      { label: '方法', value: 'UI 设计、可用性测试（n=9）、场景任务、流程映射' },
      { label: '工具', value: 'Figma、电子墨水屏原型' },
      { label: '结果', value: '验证安全关键流程，并发现低电量模式可发现性问题' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'trekassistHomeAlert',
      alt: 'TrekAssist 首页，包含天气警报和导航选项',
    },
    {
      type: 'text',
      heading: '项目概览',
      body: [
        'TrekAssist 是一个面向 Yellowstone National Park 游客的太阳能电子墨水屏导览概念。作为团队 UX/HFE 项目，我们关注如何帮助游客在不熟悉的户外环境中导航、响应天气与安全提醒、获取紧急支持，并在严格的显示与电量限制下管理设备续航。',
        '它不是普通的手机旅行 App，而是为专用户外设备设计：800×600 横向电子墨水屏、有限色彩、最高 1Hz 刷新率。这些限制推动我们采用更静态的布局、更大的控件、持续可见的安全信息，以及只在关键交互中选择性使用颜色。',
      ],
    },
    {
      type: 'text',
      heading: '问题背景',
      body: [
        '国家公园游客经常需要在陌生且高度变化的环境中做判断。天气可能快速变化，路线可能不清晰，野生动物接触会带来安全风险，手机电量和信号也不总是可靠。',
        '设计挑战是：创造一个界面，帮助游客理解自己在哪里、注意重要提醒、快速访问紧急支持、浏览导览路线和目的地、为徒步做准备，并在长时间户外活动中节省电量。',
      ],
    },
    {
      type: 'timeline',
      heading: '流程时间线',
      body: [
        '这条流程把 TrekAssist 定位为一个受约束的人本设计过程，而不是一个静态界面概念。',
      ],
      items: [
        {
          title: '概念探索',
          description: '定义国家公园游客的问题空间与户外使用约束。',
        },
        {
          title: '流程映射',
          description: '梳理探索、安全、紧急响应和低功耗相关的用户流程。',
        },
        {
          title: '原型设计',
          description: '设计适合电子墨水屏的静态布局与大尺寸控件。',
        },
        {
          title: '可用性测试',
          description: '用 6 个场景任务测试 9 位参与者。',
        },
        {
          title: '发现综合',
          description: '确认紧急/导航流程表现较强，同时发现低电量模式可发现性不足。',
        },
        {
          title: '迭代优化',
          description: '优化提醒可见性、电量入口、地图可读性和安全 affordance。',
        },
        {
          title: '最终原型',
          description: '平衡探索、安全和低功耗户外交互。',
        },
      ],
    },
    {
      type: 'image',
      image: 'trekassistDiscoveryFlow',
      light: true,
      heading: '早期探索与信息架构',
      alt: 'TrekAssist 探索流程的用户界面流程图',
      body: [
        '团队在早期同时探索了安全优先和探索导向两种方向，随后将它们整合为一个关注安全、导航清晰度和电量感知交互的公园导览设备。流程映射帮助我们判断哪些内容应该放在界面顶层，哪些信息必须跨页面持续可见。',
      ],
    },
    {
      type: 'image',
      image: 'trekassistSafetyFlow',
      light: true,
      heading: '安全关键流程规划',
      alt: 'TrekAssist 安全流程的用户界面流程图',
      body: [
        '安全关键元素没有被藏在单独页面里。界面采用持续存在的全局元素：顶部警报栏显示当前提醒，全局 Emergency 按钮支持紧急访问，同时保留容易找到的设置和电量指示。这种结构既支持日常探索，也支持紧急安全场景。',
      ],
    },
    {
      type: 'gallery',
      heading: '关键界面决策',
      images: [
        'trekassistAlertModal',
        'trekassistEmergencyConfirmation',
        'trekassistMapMammoth',
      ],
      body: [
        '天气提醒通过顶部固定提醒条保持可见，当警报需要注意时可以展开为聚焦的弹窗。紧急联系保持全局可用，但通过确认步骤降低误触风险，同时不牺牲快速求助。',
        '地图将路线指引、当前警报、目的地信息、电量入口和紧急支持放在同一个静态布局中，适合低刷新率电子墨水屏设备。',
      ],
    },
    {
      type: 'text',
      heading: '可用性测试',
      body: [
        '为了评估原型，团队邀请 9 位参与者完成 6 个场景任务：查看天气警报、通过 Emergency 联系 ranger、开始 Mammoth Hot Springs 导览、查找 Yellowstone Lake 信息、查看长途徒步安全建议，以及开启 Low Power Mode。',
        '我们记录任务完成情况、完成时间、错误次数、尝试次数、易用性评分和定性反馈。目标不只是确认用户能不能完成任务，也要找出界面在哪些地方造成犹豫、困惑或额外负担。',
      ],
    },
    {
      type: 'metrics',
      heading: '测试快照',
      body: [
        '测试结合任务表现指标和定性评论，帮助我们判断界面在哪些地方支持了安全关键行为，在哪些地方制造了不必要的努力。',
      ],
      metrics: [
        { value: '9', label: '参与者' },
        { value: '6', label: '场景任务' },
        { value: '7/9', label: '低电量模式任务中出错' },
        { value: '22.8s', label: '低电量任务平均时间' },
        { value: '5.3/7', label: '低电量任务易用性评分' },
      ],
      evidence: [
        {
          label: '表现较强的任务区域',
          value:
            '紧急联系、天气警报、目的地信息和导览任务整体完成情况较好。',
        },
        {
          label: '关键问题',
          value:
            'Low Power Mode 虽然存在，但参与者并不总能发现在哪里开启。',
        },
        {
          label: '设计启发',
          value:
            '电量入口和省电提示需要更明显、更情境化，并与电池状态建立直接联系。',
        },
      ],
    },
    {
      type: 'image',
      image: 'trekassistPostTestConcept',
      light: true,
      heading: '发现与迭代',
      alt: 'TrekAssist 可用性测试后的原型概念页面',
      body: [
        '核心的紧急、天气、目的地和导览任务整体表现较好，说明大按钮结构和持续可见的安全元素有助于用户识别任务入口。',
        '测试前，Low Power Mode 在功能上可用，但位置依赖用户找到设置路径。测试后，电池图标与设置入口之间的关系成为重点重设计区域，后续方向指向更情境化的低电量提示和更可见的省电控制。',
        '测试也显示，纯灰阶界面会降低视觉吸引力，并让部分信息更难区分。因此最终方向选择性使用颜色，用于安全区分、视觉定位、层级和情绪吸引力。',
      ],
    },
    {
      type: 'image',
      image: 'trekassistSettings',
      light: true,
      heading: '低电量模式的可发现性',
      alt: 'TrekAssist 设置页面，包含电池和低电量选项',
      body: [
        '因为 Low Power Mode 存在但不容易被发现，设置与电池状态之间的关系成为关键迭代点。对于太阳能户外设备，省电控制不能被当作次级偏好，而应该在用户需要时立即可见。',
      ],
    },
    {
      type: 'gallery',
      heading: '最终原型流程',
      images: [
        'trekassistGuidedTours',
        'trekassistGuidedTourMammoth',
        'trekassistSafetyScreen',
      ],
      body: [
        '最终原型通过易扫读的导览卡片、目的地详情页和预防性安全内容，在探索与安全之间取得平衡。TrekAssist 不只是对紧急情况做反应，而是在用户做路线决策之前、之中和之后提供支持。',
      ],
    },
    {
      type: 'outcome',
      image: 'trekassistGrandPrismaticBg',
      backgroundOverlayOpacity: 0.68,
      heading: '反思',
      body: [
        'TrekAssist 让我看到，当产品从标准移动 App 转向受约束的户外设备时，界面设计会发生什么变化。安全关键和电量相关功能不只是“存在”就够了；它们必须在压力场景下立刻可发现、视觉上可区分、语义上可理解。',
        '电子墨水屏、有限刷新率和太阳能电池迫使团队简化布局、减少不必要的动效，并认真判断颜色在什么时候真正必要。最终结果是一个以流程为核心的 UX/HFE 案例，平衡游客安全、户外可读性、电量节省和公园探索。',
      ],
    },
  ],
};
