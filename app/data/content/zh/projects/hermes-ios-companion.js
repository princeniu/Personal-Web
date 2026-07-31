export const hermesIosCompanionProject = {
  slug: 'hermes-ios-companion',
  title: 'Hermes iOS Companion',
  description:
    '我独立设计和开发的自托管 iOS 移动控制端。它连接 Mac 与 VPS 上的 Hermes Agent，让用户在 iPhone 上继续会话、查看工具执行、确认高风险操作、使用语音输入，并接收系统级任务状态。',
  roles: ['产品设计', 'SwiftUI', 'iOS 系统集成', 'AI Agent UX', '安全', '可靠性'],
  summary: {
    title: 'Hermes iOS Companion',
    description:
      '我独立设计和开发的自托管 iOS 移动控制端，用于继续 AI Agent 会话、查看工具执行、处理安全审批，并跟踪 Mac 与 VPS 私有实例中的任务状态。',
    modelType: 'phone',
    modelAlt: 'Hermes iOS Companion 使用脱敏模拟器 fixture 展示审批与执行过程界面',
    quickFacts: [
      { label: '角色', value: '独立产品设计与 iOS 开发' },
      { label: '技术', value: 'SwiftUI、SSE、APNs、ActivityKit、Tailscale' },
      { label: '部署', value: '真实 iPhone、Mac 与 VPS private beta' },
      { label: '验证', value: '595 个单元测试，加专项 UI 与真机验收' },
    ],
  },
  sections: [
    {
      type: 'hero-image',
      image: 'hermesIosHeroZh',
      alt: 'Hermes iOS Companion，自托管 AI Agent 的移动控制端',
    },
    {
      type: 'text',
      heading: '项目概览',
      body: [
        'Hermes iOS Companion 是我为开源 Hermes Agent 独立设计和开发的移动控制端。离开运行 Agent 的电脑后，我仍可以继续会话、查看工具执行、处理安全审批、使用语音输入，并跟踪长时间任务。',
        '它是已经部署在个人系统中的 private beta，不是普通聊天 App。我负责 iOS 客户端、交互模型、Gateway 协议集成、安全边界和 Apple 系统能力。它不是 Nous Research 官方产品。',
      ],
    },
    {
      type: 'image',
      image: 'hermesIosCoreProductZh',
      heading: '移动控制端，而不是聊天框的缩小版',
      alt: '当前 main 的脱敏 Hermes iOS Companion 界面，展示项目分组会话、聊天执行过程和安全审批',
      body: [
        '主要流程围绕 Agent 连续性组织，而不是围绕消息数量组织。会话按项目与实例分组，工具执行可检查但不会占据整个对话，审批请求则在用户决定前明确展示命令和授权范围。',
        '这些界面来自当前 main 的 Simulator build，使用 fixture 会话、示例命令和隔离的实例名称，不包含生产 endpoint、凭证或私人会话。',
      ],
    },
    {
      type: 'text',
      heading: '问题：离开电脑后，桌面 Agent 失去了交互入口',
      body: [
        '桌面 AI Agent 可以读取文件、调用工具并执行长任务，但用户一旦离开电脑，原本的界面就不存在了。仅仅把聊天框搬到手机上并不能解决问题。移动端还需要表达执行状态、维持会话连续性、接住系统事件，并让高风险操作足够明确。',
        '因此，产品目标不是缩小桌面端，而是识别手机上真正重要的责任：轻量输入、状态感知、处理中断，以及可信确认。',
      ],
    },
    {
      type: 'text',
      heading: '产品判断：iPhone 不运行 Agent Runtime',
      body: [
        'Hermes Runtime 继续运行在 Mac 或 VPS 上，因为那里拥有文件、工具、算力和长时间进程上下文。iPhone 只作为安全控制端发送输入，并渲染 Gateway 提供的状态。',
        '这个边界同时降低了产品和安全复杂度。Gateway 始终是事实源。移动端即使重连、补偿状态，或错过一次瞬时事件，也不会成为任务状态的第二个权威。',
      ],
    },
    {
      type: 'image',
      image: 'hermesIosArchitecture',
      heading: '架构：一个事实源，多条反馈路径',
      alt: 'iPhone 通过 Tailscale HTTPS 连接 Mac 与 VPS 独立 Hermes Gateway 实例的架构图',
      body: [
        'iPhone 通过 Tailscale HTTPS 访问每个 Hermes Gateway。Mac 与 VPS profile 分别保存 endpoint 身份、凭证、会话和通知路由，避免跨实例混用。请求发送到当前选择的 Gateway，SSE 提供前台进度，APNs、Widget、Live Activity 和 Dynamic Island 提供系统级状态。',
        'SSE 与推送都是反馈层，不是互相竞争的数据库。中断或重连后，客户端以 Gateway 状态进行 reconcile，而不是假设每一个瞬时事件都已收到。',
      ],
    },
    {
      type: 'image',
      image: 'hermesIosSystemSurfaces',
      heading: '任务离开 App 后仍然可见',
      alt: '脱敏 Simulator 素材，展示 Hermes Share Extension、Widget、Dynamic Island 和原生文字选择',
      body: [
        'Share Extension 可以把 URL、文字或图片转成 Agent 输入，无法立即发送时先进入 outbox。WidgetKit 展示实例级状态，ActivityKit 与 Dynamic Island 把实时任务状态带到系统界面，原生文字选择则让长篇 Agent 输出可以继续作为工作材料使用。',
        '这些 Simulator 素材证明系统界面能够真实渲染。真机验收另外覆盖 APNs、Face ID 或密码 App 锁、Share outbox 交付，以及 Simulator 截图无法证明的生命周期行为。',
      ],
    },
    {
      type: 'timeline',
      heading: '核心难点',
      body: [
        '真正困难的工作不是渲染聊天气泡，而是在网络、进程、设备和 iOS 生命周期边界之间维持信任与连续性。',
      ],
      items: [
        {
          title: '不可重放 SSE 与断线恢复',
          description:
            '把流式反馈与 Gateway 持久状态分开，再通过重连与 reconcile，避免一次中断让客户端持有错误的任务结论。',
        },
        {
          title: 'Mac 与 VPS 身份隔离',
          description:
            '将会话、凭证、草稿、通知和深链接绑定到明确实例，切换环境时不会把上下文带入另一个系统。',
        },
        {
          title: '敏感控制的分层确认',
          description:
            '先明确授权范围，危险的会话级授权还需要二次确认。Face ID 或设备密码用于保护 App 重新进入与破坏性 Gateway 重启，通知点击本身不会成为授权。',
        },
        {
          title: '离线 Share outbox',
          description:
            '当 App 或 Gateway 不可用时持久保存 Share Extension 输入，恢复连接后再送往原本指定的实例与会话。',
        },
        {
          title: 'Push、Widget 与 Live Activity 路由',
          description:
            '把后台事件映射到正确 profile 与任务，同时仍以 Gateway 的最终状态为准。',
        },
        {
          title: '语音草稿与长会话交互',
          description:
            '处理中断后的转写草稿恢复，并把滚动、自动折叠和精确文字选择当作生产力核心交互。',
        },
        {
          title: '中英文与辅助功能',
          description:
            '在主要流程中实现中英文、Dynamic Type、VoiceOver 结构和最小触控区域，而不是在功能完成后补做。',
        },
      ],
    },
    {
      type: 'text',
      heading: '远程执行必须保持可理解和可控制',
      body: [
        '远程执行首先是人因问题。用户需要足够上下文做判断，但不应该被迫在手机上阅读桌面尺寸的执行轨迹。审批流程先呈现意图与授权范围，危险的会话级授权还需要额外确认。Face ID 或设备密码则分别保护 App 重新进入与破坏性 Gateway 重启。',
        '执行期间，推理与工具调用被折叠为紧凑状态面板。细节仍可检查，但最终答案保持在执行轨迹之外，避免状态、诊断信息和结果互相争夺注意力。本案例公开的界面都来自当前 main 的安全模拟器 fixture。',
      ],
    },
    {
      type: 'metrics',
      heading: '验证证据',
      body: [
        '最有价值的证据是完整系统真实运行在一台 iPhone 和两个自托管环境中。自动化测试负责确定性行为，真机验收负责验证 mock 无法证明的 Apple 服务与网络条件。',
      ],
      metrics: [
        { value: '595', label: '最近一次记录的验收运行中的单元测试' },
        { value: '2', label: '精确文字选择专项 UI 测试' },
        { value: '2', label: '相互隔离的 Mac 与 VPS Hermes 实例' },
        { value: '1', label: '用于多轮端到端验收的真实 iPhone' },
      ],
      evidence: [
        {
          label: 'iOS 系统能力',
          value:
            '在真机验证 APNs、Face ID 或密码 App 锁、Gateway 重启认证、Share Extension、Widget、Live Activity、Dynamic Island、语音输入和中英文行为。',
        },
        {
          label: '中断后的连续性',
          value:
            '覆盖 SSE 恢复、前后台切换、草稿恢复、离线 outbox 和实例级路由。',
        },
        {
          label: '面向真实部署的边界',
          value:
            '使用 Tailscale 私有连接、Keychain 凭证、fail-closed 审批和 Gateway reconcile，不把 Agent Runtime 直接暴露到公网。',
        },
      ],
    },
    {
      type: 'text',
      heading: '已知限制与发布边界',
      body: [
        'Hermes iOS Companion 是 private beta 和已经部署的个人系统。它没有上架 App Store，也不是公开下载产品，更不是官方 Hermes App。当前配置仍假设用户拥有自托管 Hermes Gateway 与 Tailscale 网络，这适合目前的使用范围，但不是面向大众的 onboarding。',
        '公开截图只使用 example data 与脱敏 fixture。真实 Gateway URL、API key、配对 payload、Tailscale 域名、设备 token、APNs 凭证和私人会话内容都不会出现在公开材料中。',
      ],
    },
    {
      type: 'outcome',
      image: 'hermesIosHeroZh',
      backgroundOverlayOpacity: 0.82,
      heading: '这个项目证明了什么',
      body: [
        'Hermes iOS Companion 是我目前最完整的端到端案例。它把 AI 系统、UX 判断、原生 iOS 开发、后端协议、安全和真实部署组合成一个完整产品。',
        '最重要的产品结论是：AI Companion 不应该模仿 Runtime，而应该把 Runtime 翻译成最少的一组移动交互，同时保留连续性、状态感知和信任。',
        'Built independently by Prince Niu，作为开源 Hermes Agent 的 companion 设计与开发。Not an official Nous Research product。',
      ],
    },
  ],
};
