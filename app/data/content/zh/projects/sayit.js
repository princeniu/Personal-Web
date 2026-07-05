export const sayitProject = {
  slug: 'sayit',
  title: 'SayIt',
  description:
    '一款原生 macOS 菜单栏语音转文字工具。按下全局快捷键就能说话转文字，支持本地 Whisper 转录，整个过程不需要离开当前窗口。',
  roles: ['产品设计', 'SwiftUI', 'macOS 开发', '交互设计', 'AI 集成'],
  summary: {
      title: 'SayIt',
      description:
        '我独立设计、开发、签名并发布的 macOS 语音转文字工具。它用全局快捷键启动，支持本地 Whisper，并用一个轻量 HUD 给出状态反馈。',
      modelType: 'macosUtility',
      modelAlt: 'SayIt macOS 菜单栏工具预览，展示悬浮面板与快捷键工作流',
      quickFacts: [
        { label: '角色', value: 'Designer-Builder（独立产品 + 工程）' },
        { label: '方法', value: '产品设计、原生开发、端侧 AI' },
        { label: '工具', value: 'SwiftUI、Whisper、Xcode' },
        { label: '成果', value: '已发布 macOS 应用，支持 GitHub Releases 下载' },
      ],
    },
    sections: [
      {
        type: 'hero-image',
        image: 'sayitBrand',
        alt: 'SayIt 品牌标识与应用图标',
      },
      {
        type: 'text',
        heading: '产品机会',
        body: [
          'SayIt 的起点是一个简单的效率缺口。系统自带的听写功能会弹出一个打断写作流的模态窗口。云端转录工具虽然能用，但每个词都要经过别人的服务器往返一次，网络一断就失效。',
          '我想做的是一个更接近系统快捷键的工具：从任意位置触发，本地转录，粘贴结果，然后继续在原来的窗口里写。',
        ],
      },
      {
        type: 'text',
        heading: '为什么做成菜单栏工具',
        body: [
          '做成全窗口应用会直接削弱产品的核心价值。语音转文字只有在使用间隙中消失，才更像一个效率原语：需要时可见，不需要时安静。菜单栏给了应用一个常驻位置，但不占据工作空间。',
          '选择用原生 macOS 应用（而非 Electron 套壳）是一个刻意的决定。这个产品是被拿来和系统工具比较的，不是和其他应用比较；它必须像 Spotlight 一样轻，而不是像一个浏览器标签页。',
        ],
      },
      {
        type: 'timeline',
        heading: '从想法到 v1.0.5',
        body: [
          'SayIt 由我独立设计、开发、签名、公证，并通过 GitHub Releases 公开发布。下面记录的是它从 SwiftUI 草图到公开 macOS 二进制文件的路径。',
        ],
        items: [
          { title: '产品概念', description: '将产品定义为一个菜单栏语音转文字工具：全局快捷键、单一主操作、无全窗口 UI，并默认端侧处理。' },
          { title: 'SwiftUI 原型', description: '搭建了 popover 表面、麦克风选择器与引擎设置，验证整个交互能否容纳在一个小型悬浮面板中。' },
          { title: 'whisper.cpp 集成', description: '接入端侧 Whisper 实现完全本地转录，包括模型选择以及模型缺失或下载中时的降级行为。' },
          { title: '快捷键与权限', description: '实现了全局快捷键捕获、麦克风访问提示以及辅助功能权限流程，使应用可以从任意活跃窗口触发。' },
          { title: '公证与分发', description: '搭建了签名、公证和 GitHub Releases 分发管线，使应用在 macOS 上干净安装，不会触发 Gatekeeper 警告。' },
          { title: '公开发布 (v1.0.5)', description: '经历了五个公开版本迭代，基于我日常使用中的体验，持续优化麦克风的稳定性、HUD 反馈和首次引导流程。' },
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverIdle',
        heading: '产品界面与核心控制',
        alt: 'SayIt popover 展示麦克风、引擎和开始录音控件',
        body: [
          '产品以紧凑的 popover 为中心：一个主操作按钮、一个麦克风选择器、一个转录引擎选项，以及轻量级状态消息。界面在不被需要时保持安静，这更符合「工具」而不是「传统全窗口应用」的预期。',
          '这个界面的设计决策是抵抗功能膨胀。每增加一个控件，都会让应用离「按快捷键、说话、粘贴」的核心体验更远一步。',
        ],
      },
      {
        type: 'image',
        image: 'sayitPopoverRecording',
        heading: '一键式录音流程',
        alt: 'SayIt popover 在录音和转录过程中的状态',
        body: [
          '交互被压缩成一个可靠的切换操作：开始录音，停止并转录，然后自动复制结果。录音时长、实时音量、慢速转录提示和菜单栏 HUD 反馈让应用保持可理解，但不过度占用视觉注意力。',
          'HUD 承担了大部分工作。一旦快捷键形成肌肉记忆，用户根本不需要看 popover；菜单栏图标和一个短暂的浮层就足以确认系统正在正确运行。',
        ],
      },
      {
        type: 'text',
        heading: '始终端侧',
        body: [
          '选择 whisper.cpp 而非云端 API，首先是产品决策，其次才是技术决策。本地转录意味着应用离线也能工作，没有按请求计费，也给用户一个容易理解的隐私保证：语音数据留在本机。',
          '代价是模型体积与冷启动成本。应用暴露了引擎和模型选择功能，让轻量机型的用户可以选更小的模型，而更关注准确率的用户可以选更大的模型。',
        ],
      },
      {
        type: 'text',
        heading: '权限与快捷键的门槛',
        body: [
          '发布一个 macOS 工具最难的部分不是功能本身，而是操作系统要求的信任梯度。SayIt 需要麦克风权限来捕获音频，需要辅助功能权限来向其他应用粘贴文本。每一次权限弹窗都是用户可能流失的节点，而且弹窗由 macOS 渲染，不受应用控制。',
          '解决方案是把首次引导设计成围绕这些弹窗展开，而非围绕应用自己的 UI：在 macOS 弹出请求之前先解释为什么需要该权限，并在用户拒绝后提供一条可恢复的路径回到系统设置。快捷键本身使用标准的全局快捷键 API，配置面板允许用户在不重启应用的情况下重新绑定按键。',
        ],
      },
      {
        type: 'image-text',
        image: 'sayitIphoneMic',
        heading: '设备韧性与生态适配',
        alt: 'iPhone 连续互通麦克风连接到 macOS 上的 SayIt',
        body: [
          '麦克风的可靠性最终成为产品中最脆弱的部分。蓝牙耳机、外置声卡、连续互通麦克风、合盖状态都会让输入设备出现或消失。一个在句中丢失输入信号的转录工具，比一个从未启动的工具更糟糕。',
          '应用显式处理设备变更：它监控输入路由的变化，当所选麦克风消失时自动回退到一个合理默认值，并支持连续互通麦克风切换。这样在合盖和外接显示器环境下，iPhone 作为麦克风可以即插即用。',
        ],
      },
      {
        type: 'text',
        heading: '发布一个经过公证的 macOS 应用',
        body: [
          '要让除了我自己以外的人也能安装，代码库必须通过三道关卡：使用有效 Developer ID 证书进行代码签名、通过 Apple 公证以满足 Gatekeeper 要求，以及通过 GitHub Releases 分发的干净的发布产物。',
          '每一步单独来看都不大，组合起来却很折磨人。entitlements、hardened runtime、notary submission、stapling 和下载链接路径必须全部对齐，才能让一个陌生人双击应用就直接打开。把这条发布管线做可靠，是 v1.0.5 不需要每次手动处理的关键。',
          '成品是公开的，今天就能安装。在 GitHub Releases 下载经过签名与公证的 SayIt v1.0.5 安装包：https://github.com/princeniu/SayIt/releases',
        ],
      },
      {
        type: 'metrics',
        heading: '构建概览',
        body: [
          'SayIt 的表面面积很小，但深度不浅。音频采集、转录、权限和分发每一层都必须达到生产级标准，用户双击下载的二进制文件时体验才会干净。',
        ],
        metrics: [
          { value: 'v1.0.5', label: 'GitHub Releases 公开发布' },
          { value: '5', label: '迭代次数（麦克风、HUD、引导流程）' },
          { value: '100%', label: '通过 whisper.cpp 端侧转录' },
          { value: '2', label: '处理的系统权限（麦克风 · 辅助功能）' },
        ],
        evidence: [
          { label: '独立产品交付', value: '独立设计并开发，覆盖产品界面、音频管线、转录引擎、权限体验以及签名、公证和分发。' },
          { label: '默认隐私优先', value: '音频从不离开设备。whisper.cpp 本地运行，模型选择暴露给用户，让不同硬件可以自己权衡准确率和速度。' },
          { label: '适配真实生态', value: '处理输入设备变更，支持连续互通麦克风切换，在权限缺失或模型缺失时可预期地降级。' },
        ],
      },
      {
        type: 'outcome',
        image: 'knowledgeosReflectionBg',
        backgroundOverlayOpacity: 0.72,
        heading: '反思',
        body: [
          'SayIt 是我从「为幻灯片做设计」转向「为二进制文件做设计」的项目。popover 密度、HUD 时机、模型选择、权限文案都要回答同一个问题：这仍然像一个系统工具，还是开始像一个 App？',
          '在这个作品集中，SayIt 是我把一个聚焦产品想法做成真实软件的最清楚例子：定义问题，塑造交互模型，选择合适的技术路径，最后交付一个经过签名和公证、今天就能下载的 macOS 产品。',
        ],
      },
    ],
};
