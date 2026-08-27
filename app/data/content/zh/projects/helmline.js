export const helmlineProject = {
  slug: 'helmline',
  title: 'Helmline',
  description:
    '面向自托管 AI 智能体的原生 iPhone 控制端。Version 1.0 已提交 Apple App Review，目前正在等待审核。',
  roles: ['产品设计', '人因工程', 'SwiftUI 开发', 'AI Agent UX', '安全', 'App Store 交付'],
  summary: {
    title: 'Helmline',
    description:
      '面向自托管 AI 智能体的原生 iPhone 控制端，让用户离开主机后仍能清楚跟进会话、执行、审批、采集和长任务。Version 1.0 正在等待 App Review。',
    modelType: 'phone',
    modelAlt: 'Helmline 会话与审批界面，使用通过隐私检查的 App Store 模拟内容',
    ctaLabel: '查看完整产品案例',
    quickFacts: [
      { label: '角色', value: '独立产品设计与开发' },
      { label: '平台', value: '原生 iPhone App · SwiftUI' },
      { label: '状态', value: 'App Store 审核中' },
      { label: '版本', value: 'Version 1.0 · Build 5 · 审核后手动发布' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'helmlineFocusZh01',
      alt: 'Helmline 会话界面，展示使用模拟内容的发布准备项目',
    },
    {
      type: 'text',
      heading: '背景：用户离开电脑后，Agent 仍在继续工作',
      body: [
        '自托管 AI Agent 可以在 Mac 或 VPS 上读取文件、调用工具并持续执行长任务，但用户离开电脑后，原有交互入口也随之消失。把聊天框缩小到手机尺寸并不能解决真正的移动问题。用户需要知道任务进行到哪里、何时需要介入，以及如何在不把生产运行时搬到手机上的前提下回到正确上下文。',
        'Helmline 因此被设计成原生 iPhone 控制端。它把会话、流式执行、审批、采集、自动化控制和系统级状态集中到手机，同时让计算、文件、模型、凭据和长任务继续留在用户控制的基础设施上。',
      ],
    },
    {
      type: 'text',
      heading: '产品决策：采用 BYOS，而不是托管用户运行时',
      body: [
        '我选择 BYOS，而不是为用户托管账号、模型或 Agent 数据。用户把 Helmline 连接到自己运行在 Mac 或 VPS 上的兼容 Hermes Gateway。Gateway 始终是事实源，手机只负责输入、查看与确认。',
        '这个边界让控制权更容易理解。Helmline 不需要账号，开发者也不会成为用户运行时的保管方。iPhone 端不会形成第二套执行权威。流式连接中断后，客户端重新连接并以 Gateway 状态完成校准，而不是在本地推断任务结果。',
      ],
    },
    {
      type: 'image',
      image: 'helmlineArchitectureZh',
      heading: '系统架构：每一层承担清晰责任',
      alt: 'iPhone 通过身份认证 HTTPS 连接用户自有 Hermes Gateway，Gateway 运行在 Mac 或 VPS 上，工具、文件、模型、凭据和自动化留在主机',
      body: [
        'iPhone 通过经过身份认证的 HTTPS 连接 Gateway，也支持 Tailscale 等私有网络部署。每个 Gateway profile 分别保存 endpoint、Keychain 凭据、会话、草稿和通知路由，因此多个 Mac 与 VPS 环境可以同时存在，不会混用操作上下文。',
        '真正的执行发生在主机。Helmline 只呈现用户跟进和控制所需的信息。流式事件负责即时反馈，Gateway 的持久状态负责处理中断与重连。',
      ],
    },
    {
      type: 'gallery',
      heading: '核心工作流：手机承担六项关键责任',
      alt: 'Helmline App Store 工作流截图，全部使用模拟内容',
      images: [
        'helmlineFocusZh01',
        'helmlineFocusZh02',
        'helmlineFocusZh03',
        'helmlineFocusZh04',
        'helmlineFocusZh05',
        'helmlineFocusZh06',
      ],
      body: [
        '产品叙事按照移动控制发挥价值的顺序展开：找到正确会话，跟进实时执行，处理审批，快速采集新输入，切换多个 Gateway，最后在 App 外继续查看系统状态。',
        '这些图片与 App Store 使用的 Focus 资产一致，内容均为发布准备相关的模拟数据，不包含生产 Gateway 地址、密钥、真实账号、设备标识或私人会话。',
      ],
    },
    {
      type: 'timeline',
      heading: '人因设计：降低每次查看任务的认知成本',
      body: [
        '手机使用往往短促且容易被打断。设计目标不是一次展示所有运行时细节，而是保留状态感知、控制能力，以及进入完整信息的可靠路径。',
      ],
      items: [
        {
          title: '连续性优先于时间排序',
          description:
            '会话保留项目和 Gateway 上下文。从通知或另一台设备返回时，用户不需要重新判断当前工作属于哪里。',
        },
        {
          title: '先看进度，再看轨迹',
          description:
            '执行过程先收敛为一个易读的进度面板。推理和工具细节仍可检查，但不会与最终结果争夺注意力。',
        },
        {
          title: '先理解范围，再做审批',
          description:
            '审批界面先说明请求的操作和授权范围。敏感控制路径再使用 Face ID 或设备密码完成二次确认。',
        },
        {
          title: '不打开 App 也能跟进',
          description:
            'Widget 与 Live Activity 保持长任务可见，同时明确区分状态查看和操作授权。',
        },
      ],
    },
    {
      type: 'text',
      heading: '安全与隐私：把控制权留给用户',
      body: [
        'Gateway 凭据保存在 iOS Keychain 中，并绑定到明确的连接 profile。Helmline 不要求把生产运行时公开暴露到互联网，切换 Gateway 也不会合并凭据或会话。敏感审批和受保护的控制路径会通过 Face ID 或设备密码再次确认。',
        'Helmline 免费使用，无需 Helmline 账号，不含广告，也没有 App 内购买。已发布的 App Privacy 信息为开发者不收集数据。用户内容只会发送到用户选择的 Gateway；该 Gateway 及其配置的服务如何处理数据，仍由用户自行负责。',
      ],
    },
    {
      type: 'text',
      heading: '原生 iOS 集成：让任务状态走出主界面',
      body: [
        'Share Extension 可以把文字、链接、图片和音频转成 Agent 输入。无法立即交付时，share outbox 会先保存内容，之后再路由到原定实例。语音采集同时支持短输入和长录音，后台音频与传输路径让它不只是一个前台演示。',
        'Widget 与 Live Activity 把任务状态带到系统界面。深链接负责返回相关 App 上下文，原生文字选择则让长篇 Agent 输出可以继续作为工作材料使用，而不是只能阅读的封闭记录。',
      ],
    },
    {
      type: 'text',
      heading: '工程深度：跨进程边界协调有状态控制',
      body: [
        '核心工程难点不在单个界面，而在状态协调。SwiftUI 界面需要同时处理流式执行、持久会话状态、本地草稿、审批记录、后台事件和多个连接身份。重连机制把瞬时流当作反馈，把 Gateway 视为最终状态权威。',
        '本地持久化覆盖 profile 元数据、share outbox、录音、草稿和 Activity 状态，Keychain 凭据则与普通偏好分开。多实例路由把 Gateway 身份贯穿会话、通知、深链接、Widget 和后台交付，避免一个主机的上下文被另一个主机继承。',
      ],
    },
    {
      type: 'text',
      heading: '产品化：从私人控制工具到可交付的 iOS 产品',
      body: [
        '产品化不只是稳定主要流程。项目需要独立名称与视觉身份、中英双语本地化、六张连续的商店叙事截图、隐私政策、支持与营销元数据、内容权利说明、年龄分级与加密声明，以及供 Apple 审核使用的隔离环境。',
        '交付链还包括 App Store bundle 与 extension 配置、Privacy Manifest、归档验证、签名分发导出、App Store Connect validation，以及 Version 1.0 Build 5 的正式提交。审核通过后仍由我手动执行发布。',
      ],
    },
    {
      type: 'metrics',
      heading: '验证：让每一项公开陈述对应正确证据',
      body: [
        '验证按证据真正能够证明的内容拆分。源码与归档检查覆盖产品 target、版本、Privacy Manifest、签名边界、extension、本地化与发布配置；商店素材审计覆盖图片尺寸与模拟内容安全；App Store 审核状态则与技术验证严格分开。',
      ],
      metrics: [
        { value: '1.0', label: '已提交 Apple App Review 的版本' },
        { value: '5', label: '本次提交的 Build 编号' },
        { value: '2', label: '商店语言：英文与简体中文' },
        { value: '6', label: 'App Store 叙事中的核心工作流' },
      ],
      evidence: [
        {
          label: '发布配置',
          value:
            '冻结的 Build 5 源码记录了 Version 1.0.0、build 5、iPhone App target、Widget、Share Extension、App Groups、共享 Keychain 与所需平台能力。',
        },
        {
          label: '归档与商店素材门槛',
          value:
            '发布文档记录了归档、签名、Privacy Manifest、entitlement、本地化与 Apple validation。选定的 Focus 截图通过尺寸和 OCR 安全审计。',
        },
        {
          label: '证据边界',
          value:
            '本案例不声称用户数量、下载量、收入、性能提升比例、审核结果或公开可下载状态。',
        },
      ],
    },
    {
      type: 'text',
      heading: '当前状态：App Store 审核中',
      body: [
        'Helmline Version 1.0，Build 1.0.0 (5)，已经提交 Apple App Review，目前正在等待审核。它尚未通过审核，也没有在 App Store 公开上线或提供下载。Apple 审核通过后，正式发布仍是一个独立的手动操作。',
        '只有在公开 App Store 页面或 App Store Connect 提供最新证据后，网站才会把状态改为可下载。',
      ],
    },
    {
      type: 'outcome',
      image: 'helmlineFocusZh06',
      backgroundOverlayOpacity: 0.86,
      heading: '复盘：产品工作一直延伸到交付边界',
      body: [
        'Helmline 最初只是我离开电脑后继续跟进自托管 Agent 的方式。把它做成完整产品，需要在每一层明确责任：手机应该承担什么，哪些内容必须留在主机，哪些操作需要再次确认，Apple 审核需要什么，以及公开案例能够安全陈述到哪里。',
        '最终结果不是远程聊天 App，而是围绕移动注意力、中断、安全和跨设备连续性设计的原生低摩擦控制端。',
        'Helmline 由我独立设计和开发，可兼容开源 Hermes Agent 项目，但不是 Nous Research 的官方产品，也未获得 Nous Research 背书。',
      ],
    },
  ],
};
