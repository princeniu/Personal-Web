export const helmlineProject = {
  slug: 'helmline',
  title: 'Helmline',
  description:
    '离开电脑，也能跟进自托管 AI 智能体。我独立完成了这款原生 iPhone 客户端的设计、开发与发布。1.0 已在 App Store 上架，使用时需连接自己的兼容 Hermes Gateway。',
  url: 'https://apps.apple.com/app/id6787791371',
  linkLabel: '前往 App Store 下载',
  roles: ['独立产品设计', '人因与交互设计', 'SwiftUI 开发', 'App Store 发布'],
  summary: {
    title: 'Helmline',
    description:
      '在 iPhone 上跟进智能体任务、确认敏感操作，执行仍留在自己的主机。我独立完成设计、开发与 App Store 发布。使用时需自备兼容 Gateway。',
    modelType: 'phone',
    modelAlt: 'Helmline 会话与审批界面，使用虚构演示内容',
    ctaLabel: '查看完整产品案例',
    quickFacts: [
      { label: '角色', value: '独立产品设计与开发' },
      { label: '平台', value: '原生 iPhone App · SwiftUI' },
      { label: '状态', value: '已在 App Store 上架' },
      { label: '版本', value: '1.0 · 免费 · iOS 17+' },
    ],
  },
  sections: [
    {
      type: 'text',
      heading: '问题：离开电脑后，任务还在继续',
      body: [
        'Helmline 面向已经在 Mac 或 VPS 上运行自托管 AI 智能体的人。离开电脑后，他们仍需要知道任务进展、检查结果，或决定是否允许某个操作。仅仅把聊天窗口缩小到手机上，并不能让这些工作变得清楚、可控。',
        '我独立负责产品范围、交互设计、原生 iOS 开发、兼容 Hermes Gateway 的集成、真机验证和 App Store 交付。项目起点是我自己的使用场景，并非正式用户研究。',
      ],
    },
    {
      type: 'gallery',
      heading: '找到任务，查看进度，再决定是否继续',
      images: ['helmlineScreenZh01', 'helmlineScreenZh02', 'helmlineScreenZh03'],
      alt: 'Helmline 会话列表、执行摘要与审批界面',
      body: [
        '这些是为 1.0 商店素材采集的实际 App 界面，使用虚构演示内容。画面中的会话和访谈笔记都是展示数据，不代表本项目开展过用户研究，也不是私人会话。可切换查看三个界面。',
      ],
    },
    {
      type: 'timeline',
      heading: '三个关键交互决策',
      items: [
        {
          title: '先看进度，再展开细节',
          description: '用紧凑的执行摘要承接工具活动，避免过程信息淹没对话。需要理解结果如何产生时，再进入完整步骤查看。',
        },
        {
          title: '查看状态，不等于授权操作',
          description: 'Widget 和 Live Activity 让用户无需重新打开 App 就能跟进任务。敏感审批仍需 Face ID 或设备密码确认，避免把一次查看变成未经确认的授权。',
        },
        {
          title: '不同主机，保留各自上下文',
          description: 'Mac 与 VPS 连接彼此独立。会话与页面跳转携带 Gateway 身份，切换主机时不混用正在查看或控制的工作。',
        },
      ],
    },
    {
      type: 'image',
      image: 'helmlineArchitectureZh',
      heading: '手机是客户端，不是第二套智能体运行环境',
      alt: 'iPhone 客户端连接用户控制的 Hermes Gateway，智能体执行、桌面工具、文件和模型留在主机',
      body: [
        '我选择让用户连接自己的 Gateway，而不是提供托管 AI 服务。iPhone 负责查看、输入和控制；智能体执行、桌面工具与长任务留在用户控制的主机上。这样，任务状态只有一个权威来源；代价是用户需要自行部署和维护兼容 Gateway。',
      ],
    },
    {
      type: 'text',
      heading: '工程难点：跨连接、页面与扩展保持连续性',
      body: [
        '难点不是单独做出几个页面，而是协调流式连接、App 导航和原生扩展之间的状态。客户端需要及时显示进展，但不能把连接中断当成任务结束。Gateway 保留最终状态，本地数据则按连接隔离，避免混入另一台主机的上下文。',
        '我把系统分享入口、供 Gateway 转录的音频采集、自动化控制、Widget 与 Live Activity 接入同一产品，并用 iOS Keychain 保存 Gateway 凭据。这些都是访问主机任务的原生入口，不是在 iPhone 本地执行桌面工具。',
      ],
    },
    {
      type: 'text',
      heading: '交付结果：已正式上架 App Store',
      body: [
        '我完成了 iPhone 真机验证、分发签名、中英文商店素材、Apple 审核和手动发布。当前公开版本为 1.0，对应构建 1.0.0 (5)。访客可以直接通过公开商店页面核实发布结果：https://apps.apple.com/app/id6787791371',
        '这证明了从产品设计到正式发布的完整交付，不代表已获得市场验证。本案例不声称下载增长、留存、收入或产品市场匹配。截图用于说明界面，不能替代真机验证。',
      ],
    },
    {
      type: 'text',
      heading: '使用条件与当前边界',
      body: [
        'Helmline 免费，无需注册 Helmline 账号，无广告和 App 内购买。需要 iOS 17 或更新版本，以及用户自行部署、管理的兼容 Hermes Gateway。模型和相关服务费用由所选供应商决定，具体可执行操作取决于连接的 Gateway 能力。',
        '它不是开箱即用的托管 AI 服务。主机安全、网络可达性，以及 Gateway 和供应商的数据处理方式仍需用户自行负责。商店隐私声明为开发者不收集数据，不代表内容永远不会离开手机。',
        'Helmline 为独立开发产品，可兼容开源 Hermes Agent，但不是 Nous Research 官方产品，也未获得其背书。',
      ],
    },
    {
      type: 'text',
      heading: '复盘：把控制边界贯穿到交付',
      body: [
        '移动端智能体产品不只是对话界面。用户需要清楚知道任务正在做什么、由哪台主机执行，以及何时必须亲自确认。完成 Helmline 的过程，就是把这些边界从交互设计落实到原生实现，再延伸到正式发布。',
      ],
    },
  ],
};
