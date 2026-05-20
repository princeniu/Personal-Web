export const littleLemonProject = {
  slug: 'little-lemon',
  title: 'Little Lemon Restaurant',
  description:
    '一个餐厅预订与点餐体验，关注直觉导航、可访问性，以及清晰的端到端预约流程。',
  roles: ['用户研究', 'UX 设计', '界面设计', '响应式设计'],
  summary: {
    title: 'Little Lemon',
    description:
      'Google UX Design Certificate 的 capstone 项目，围绕响应式餐厅浏览、预约和点餐流程，通过用户研究和可用性测试进行迭代。',
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
        'Little Lemon 是 Google UX Design Certificate 的 capstone 项目——一个以地中海社区餐厅为背景的设计 brief，用来完整走过 UX 流程。交付内容覆盖研究、问题定义、低保真和高保真原型、可用性测试与迭代。',
        '我没有只把它当作课程作业，而是把它作为一个受约束的产品练习：真实餐厅最难的 UX 问题和科技产品很像——快速找到想要的内容、顺畅完成交易，并建立足够信任让用户愿意再次回来。',
      ],
    },
    {
      type: 'text',
      heading: '设计挑战',
      body: [
        '用餐者通常带着三种意图之一进入：浏览菜单、预约座位，或下单。每个入口都需要在几秒内可达，优先适配手机，并且不强迫用户绕完整个网站。',
        '设计还需要跨响应式断点稳定工作并保持可访问性——可读字体、足够对比度、清晰焦点状态——同时不丢失社区餐厅本身的温暖感。',
      ],
    },
    {
      type: 'timeline',
      heading: 'UX 流程',
      body: [
        '项目遵循证书课程中的五阶段 UX 流程——共情、定义、构思、原型和测试——并在测试暴露新问题后循环回到前面的阶段继续迭代。',
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
            '将发现综合为 personas、user journeys 和问题陈述，聚焦第一次访问者与回访用餐者。',
        },
        {
          title: '构思',
          description:
            '梳理信息架构，为菜单、预约和点餐绘制不同布局，并选择值得原型化的方向。',
        },
        {
          title: '原型',
          description:
            '在 Figma 中构建低保真线框图和高保真 mockup，覆盖菜单浏览、预约、点餐和确认流程。',
        },
        {
          title: '测试与迭代',
          description:
            '围绕关键任务进行可用性测试，识别菜单导航和预约步骤中的摩擦点，并据此优化高保真流程。',
        },
      ],
    },
    {
      type: 'text',
      heading: '研究与用户需求',
      body: [
        '在早期访谈和竞品分析中，三个需求反复出现：用户落地几秒内需要知道“这是什么样的餐厅”；菜单必须能在手机上快速浏览且不需要横向滚动；预约流程不能把日期、时间和人数隐藏在额外页面之后。',
        '这三个需求成为后续设计必须回应的约束。任何会把注意力从它们身上移开的东西——促销 banner、过大的 hero 图、次要 CTA——都必须证明自己有必要，否则就被删掉。',
      ],
    },
    {
      type: 'gallery',
      heading: '界面探索',
      images: ['littleLemonMenu', 'littleLemonReservation'],
      body: [
        '高保真页面聚焦用户真正来完成的两个流程：浏览菜单和预约座位。两者都能从首页一键到达，在移动端无需缩放即可阅读；视觉系统依靠温暖中性色和清晰字体层级，而不是装饰。',
      ],
    },
    {
      type: 'text',
      heading: '可用性测试',
      body: [
        '可用性测试围绕核心流程展开：找到菜单项、完成预约、查看订单。我观察参与者在哪些地方犹豫、是否意外按返回、以及任何他们停下来问“等等，哪里有……”的时刻。',
        '反复出现的问题不大但真实：预约流程需要更清楚的步骤指示，菜单在移动端需要更强的分类 affordance，确认状态需要让人明确感到流程已经结束，而不是像一个过渡页。这些都直接进入下一轮迭代。',
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
      image: 'littleLemonHero',
      heading: '反思',
      body: [
        'Little Lemon 是让我理解“UX 流程”不是一套要表演的步骤，而是一个反馈循环的项目：每一阶段都会继续压缩问题，直到设计的复杂度真的有理由存在。真正有影响的改变大多来自删减，而不是增加。',
        '它也重塑了我对产品视觉识别的理解。社区餐厅的温暖感不是来自装饰，而是来自清晰层级、克制的图像使用，以及相信内容本身能承载品牌。这成为我之后每个产品项目都会带入的习惯。',
      ],
    },
  ],
};
