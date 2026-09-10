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
      heading: 'App Store 展示：完整六张商店图',
      images: [
        'helmlineStoreZh01', 'helmlineStoreZh02', 'helmlineStoreZh03',
        'helmlineStoreZh04', 'helmlineStoreZh05', 'helmlineStoreZh06',
      ],
      alt: 'Helmline 六张商店图：会话、实时执行、审批、快速记录、多个 Gateway 与系统状态',
      body: [
        '通过箭头、滑动或底部分页圆点查看全部六张商店图，依次展示会话、实时执行、审批、快速记录、多个 Gateway 和系统状态。画面采用实际 App 界面与虚构演示内容；其中的会话和访谈笔记不代表本项目开展过用户研究，也不是私人会话。',
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
      type: 'image-text',
      portrait: true,
      image: 'helmlineScreenZh02',
      heading: '执行交互：让结果不被过程淹没',
      alt: 'Helmline 在完整回复上方显示执行摘要，画面使用虚构演示内容',
      body: [
        '智能体对话里同时存在两类信息：用户需要的答案，以及产生答案的执行过程。如果每一次工具调用都占据同样的视觉空间，一次短暂查看就会变成阅读长日志。',
        '我把执行活动与最终回复分开：紧凑摘要负责说明进度，需要追溯时再展开推理、工具和子任务步骤。历史执行也沿用同样的摘要与详情结构，不让用户重新学习另一种阅读方式。',
        '这里有明确取舍：查看完整细节多了一步，但默认界面不再让过程与答案争夺注意力。已发布版本的聊天时间线和执行视图落实了这一设计；我没有把它包装成未经测量的效率提升。',
      ],
    },
    {
      type: 'image-text',
      portrait: true,
      image: 'helmlineScreenZh03',
      heading: '审批交互：明确这次究竟授予什么权限',
      alt: 'Helmline 审批请求中的允许一次、本会话允许与拒绝选项',
      body: [
        '手机上的一次审批，可能授权主机执行能力更强的操作。因此我明确区分允许一次、本会话允许和拒绝。这些选项代表不同范围的授权，而不是几种关闭提示框的方法。',
        '允许操作会经过统一的设备身份验证入口，使用 Face ID 或设备密码；拒绝则不要求身份验证。对于危险操作的会话级授权，还会增加一次确认，避免不经意授予更宽的权限。',
        '这把必要的操作阻力放在了授予权限的时刻。聊天和收件箱中的审批共用同一授权边界，不会因为用户换了入口就绕过确认。',
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
      type: 'image-text',
      portrait: true,
      image: 'helmlineScreenZh01',
      alt: 'Helmline 正式版会话列表与所属主机，画面使用虚构演示内容',
      heading: '工程实现：让主机身份贯穿每个入口',
      body: [
        '支持多个 Gateway，不只是增加一个服务器选择器。切换连接或页面之后，会话、凭据、正在运行的任务、通知和待发送内容，都必须继续指向原本所属的主机。',
        '每个 Gateway 配置都有稳定身份。Keychain 凭据按该身份存储，运行记录和查询按实例与会话隔离。切换活跃实例时，客户端会清理瞬时状态，而不是把上一台主机的界面状态带入新连接。',
        '这条边界也延伸到系统分享：发件箱条目保留目标实例，存在多配置歧义时不会盲目重放。设计上放弃把所有主机混成一个列表，换取更明确的工作归属与操作对象。',
        '流式连接负责即时反馈，但断开连接不等于任务结束。客户端需要重新回到 Gateway 持有的状态，不能用手机上一个已经断线的视图判断主机任务的最终结果。',
      ],
    },
    {
      type: 'text',
      heading: '原生集成：先保留输入，再交给正确的主机',
      body: [
        '移动端输入不一定从对话页面开始。Share Extension 接收文字、链接、图片和音频；非音频内容在联网发送之前先进入 App Group 发件箱，音频进入可持久保存的收件箱。录音则先完成文件收尾，再交给上传或转录流程。',
        '这明确区分了本地采集和远程执行。录音保存成功，不代表转录已经完成；分享内容仍在本地，也不代表智能体已经收到。转录和智能体任务依然由用户选择的 Gateway 承担。',
        'Widget 和 Live Activity 把运行、会话与实例身份带入系统状态和深链接。我把它们定位为轻量的状态查看入口，把有后果的决定留在需要身份确认的 App 流程中。让这些边界跨越 App 与扩展进程保持一致，比多做一个界面更重要。',
      ],
    },
    {
      type: 'timeline',
      heading: '从个人使用场景到正式发布',
      body: [
        '我把工作从移动端职责定义推进到原生实现和分发。以下呈现实际交付阶段，不把开发过程包装成正式用户研究或有实验数据支撑的里程碑。',
      ],
      items: [
        { title: '明确产品边界', description: '智能体保留在用户主机上，iPhone 负责输入、检查、状态查看和明确的控制操作，不复刻桌面执行环境。' },
        { title: '完成核心产品', description: '将会话、执行详情、身份验证审批、隔离的 Gateway 配置、采集与系统状态组织成一致的交互。' },
        { title: '验证与分发准备', description: '完成 iPhone 真机验证、App 与扩展签名、中英文展示、隐私文档及 App Store 提交。' },
        { title: '公开发布', description: '通过 Apple 审核后手动发布 1.0，让访客能够从公开商店、使用条件和支持及隐私页面验证交付结果。' },
      ],
    },
    {
      type: 'metrics',
      heading: '交付结果：已正式上架 App Store',
      metrics: [
        { value: '1.0', label: 'App Store 公开版本' },
        { value: '5', label: '已发布构建编号' },
        { value: '2', label: '支持语言：英文与简体中文' },
      ],
      evidence: [
        { label: '公开验证', value: 'App Store 页面可核实 Helmline 的名称、版本、平台要求、价格和公开功能说明。' },
        { label: '实现证据', value: '冻结的 Build 5 源码包含本案例描述的原生 App、Share Extension、Widget 与 Live Activity、身份验证边界和按实例隔离的存储。' },
        { label: '验证边界', value: '真机验证与 Apple 审核属于交付证据，不等于可用性研究或用户采用情况，不能据此推导市场或性能指标。' },
      ],
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
      heading: '设计过程：产品背后的界面与说明图',
      body: [
        '下面保留了开发阶段的设计板与独立界面，当时项目名为 Hermes iOS Companion。图片使用模拟演示内容，用于说明 Helmline 的设计过程，不代表当前商店版本的外观，也不用于增加已发布功能的声明。',
        '正式版界面见前文。这里保留了能解释早期方案的原始标签；模拟器中的状态和审批画面，不等于真实推送送达或身份验证成功的证据。部分历史材料只有英文原图，下方配有中文说明。',
      ],
    },
    {
      type: 'gallery',
      heading: '设计说明图：产品流程、授权、系统入口与架构',
      images: ['helmlineHistoryCoreZh', 'helmlineHistorySecurity', 'helmlineHistorySystem', 'helmlineHistoryArchitecture'],
      imageAlts: [
        '历史设计板第 1 张：会话导航、收件箱、主机切换与分享',
        '历史设计板第 2 张：审批请求、授权边界与执行轨迹',
        '历史设计板第 3 张：模拟器中的 Widget、Live Activity、分享与文字选择',
        '历史设计板第 4 张：iPhone、私有网络、用户主机上的 Gateway 与桌面工具',
      ],
      body: [
        '1 · 产品流程。把导航、待处理事项、主机选择和分享放在同一张图里，可以看出它们是返回同一份主机任务的不同入口，而不是互不相关的移动功能。',
        '2 · 授权与执行。请求、身份确认边界和执行轨迹并排呈现，重点是让用户在授予权限前看懂将发生什么。图中的身份验证面板是开发演示状态，不是面向用户的正式诊断页面。',
        '3 · iOS 系统入口。Widget、Live Activity、分享和文字选择展示了对话之外的使用场景。这些是模拟器演示，不能据此声称已证明真机上的后台送达能力。',
        '4 · 架构。早期图示解释了手机到主机的职责分界，也保留了开发时使用的私有网络传输方案。它是历史实现视图，不代表每个 Helmline 用户都必须使用完全相同的网络配置。',
      ],
    },
    {
      type: 'gallery',
      portrait: true,
      heading: '界面档案：单独查看原始细节',
      images: ['helmlineHistoryChat', 'helmlineHistoryInbox', 'helmlineHistoryTrace', 'helmlineHistoryApproval'],
      imageAlts: [
        '历史界面第 1 张：对话与执行活动',
        '历史界面第 2 张：待处理事项收件箱',
        '历史界面第 3 张：执行轨迹详情',
        '历史界面第 4 张：审批请求与权限范围',
      ],
      body: [
        '从拼图中拆出原始分辨率界面，便于查看细节。以下均为带演示内容的开发阶段截图，不是 1.0 正式版截图。',
        '1 · 对话：答案和执行活动如何共用阅读区域。2 · 收件箱：让待处理工作拥有独立入口，不必回到对话里反复寻找。',
        '3 · 执行详情：摘要背后的检查层。4 · 审批：决策时需要看到的请求内容与权限范围。最终发布时的执行与审批呈现，可与前文正式版界面对照查看。',
      ],
    },
    {
      type: 'outcome',
      image: 'knowledgeosReflectionBg',
      backgroundOverlayOpacity: 0.72,
      heading: '复盘：把控制边界贯穿到交付',
      body: [
        '移动端智能体产品不只是对话界面。用户需要清楚知道任务正在做什么、由哪台主机执行，以及何时必须亲自确认。完成 Helmline 的过程，就是把这些边界从交互设计落实到原生实现，再延伸到正式发布。',
      ],
    },
  ],
};
