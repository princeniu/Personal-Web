export const littleLemonProject = {
  slug: 'little-lemon',
  title: 'Little Lemon Restaurant',
  description:
    '一个餐厅预订与点餐体验，重点是更清楚的导航、移动端可访问性，以及不打扰用户的预约流程。',
  roles: ['用户研究', 'UX 设计', '界面设计', '响应式设计'],
  summary: {
    title: 'Little Lemon',
    description:
      'Google UX Design Certificate 的 capstone 项目，围绕餐厅浏览、预约和点餐体验，通过用户研究和可用性测试继续打磨。',
    modelType: 'phone',
    modelAlt: '手机上展示的 Little Lemon 餐厅 App 页面',
    quickFacts: [
      { label: '角色', value: 'UX Designer' },
      { label: '方法', value: '用户研究、可用性测试、响应式设计' },
      { label: '工具', value: 'Figma' },
      { label: '结果', value: 'Google UX Design Certificate capstone case study' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'littleLemonHero',
      alt: 'Little Lemon 餐厅移动端界面',
    },
    {
      type: 'text',
      heading: 'Capstone 背景',
      body: [
        'Little Lemon 是我在 Google UX Design Certificate 中的 capstone 项目，brief 是一个地中海社区餐厅。项目覆盖完整 UX 流程：研究、问题定义、低保真与高保真原型、可用性测试和迭代。',
        '我没有把它只当成课程作业，而是把它当作一个小型产品练习。餐厅网站和很多数字产品一样，用户带着任务进入，需要快速建立信心；如果路径比预期更费劲，他们就会离开。',
      ],
    },
    {
      type: 'text',
      heading: '设计挑战',
      body: [
        '用餐者通常带着三种意图之一进入：浏览菜单、预约座位，或下单。每条路径都需要在手机上几秒内可达，不能强迫用户绕完整个网站。',
        '设计还需要跨响应式断点稳定工作，并通过可读字体、足够对比度、清晰焦点状态和足够大的点击目标保持可访问性。更难的是，在保持清楚的同时，不把社区餐厅做成没有性格的模板。',
      ],
    },
    {
      type: 'timeline',
      heading: 'UX 流程',
      body: [
        '项目遵循证书课程中的五阶段 UX 流程：共情、定义、构思、原型和测试。测试结果再把前面的设计决定带回修改。',
      ],
      items: [
        {
          title: '共情',
          description:
            '通过用户访谈和餐厅预约体验竞品扫描，理解用餐者在预约前、中、后真正需要什么。',
        },
        {
          title: '定义',
          description:
            '将发现整理为 personas、user journeys 和面向第一次访问者与回访用餐者的问题陈述。',
        },
        {
          title: '构思',
          description:
            '梳理信息架构，为菜单、预约和点餐绘制不同布局，并选择值得原型化的方向。',
        },
        {
          title: '原型',
          description:
            '在 Figma 中构建低保真线框图和更完整的界面 mockup，覆盖菜单浏览、预约、点餐和确认流程。',
        },
        {
          title: '测试与迭代',
          description:
            '围绕关键任务进行可用性测试，发现菜单导航和预约步骤中的摩擦，并修改最终流程。',
        },
      ],
    },
    {
      type: 'text',
      heading: '研究与用户需求',
      body: [
        '在早期访谈和竞品分析中，有三个需求反复出现：用户打开页面后几秒内要知道这是什么样的餐厅；菜单必须能在手机上快速浏览，不能横向滚动；预约流程不能把日期、时间和人数藏在额外页面后面。',
        '这三个需求成为后续设计的边界。促销 banner、过大的 hero 图、次要 CTA 都必须证明自己有必要，否则就应该被删掉。',
      ],
    },
    {
      type: 'gallery',
      heading: '界面探索',
      images: ['littleLemonMenu', 'littleLemonReservation'],
      body: [
        '最终页面聚焦用户最常来的两个流程：浏览菜单和预约座位。两者都能从首页一键到达，在移动端无需缩放即可阅读；视觉系统依靠温暖中性色和清晰字体层级，而不是装饰。',
      ],
    },
    {
      type: 'text',
      heading: '可用性测试',
      body: [
        '可用性测试围绕三个核心任务展开：找到菜单项、完成预约、查看订单。我观察参与者在哪里犹豫、是否意外按返回，以及他们在哪些地方停下来，因为不知道下一步该去哪里。',
        '问题不大，但很有用：预约流程需要更清楚的进度提示，菜单分类在移动端需要更强的 affordance，确认状态需要让人明确感到流程已经结束，而不是像一个等待页。这些发现直接进入下一轮迭代。',
      ],
    },
    {
      type: 'text',
      heading: '可访问性与响应式设计',
      body: [
        '可访问性被当作视觉系统的一部分，而不是最后才检查的清单。字体比例、色彩对比、焦点状态和点击目标尺寸都与品牌色板一起定义，让每个页面默认继承这些基础。',
        '响应式行为保持同一套主要动作在任何断点都容易触达。移动端中，菜单和预约入口保持在首屏附近；大屏中，布局获得更多呼吸空间，但底层层级不被打乱。',
      ],
    },
    {
      type: 'outcome',
      image: 'knowledgeosReflectionBg',
      backgroundOverlayOpacity: 0.72,
      heading: '反思',
      body: [
        'Little Lemon 让我意识到，UX 流程不是为了案例展示而表演的一套步骤。它更像一种持续压缩问题的方法，直到界面里只剩下有理由存在的东西。',
        '它也改变了我对产品视觉识别的理解。社区餐厅的温暖感不是靠装饰堆出来的，而是来自清晰层级、克制的图像使用，以及让内容本身承载品牌。这种克制也延续到我后来的产品项目里。',
      ],
    },
  ],
};
