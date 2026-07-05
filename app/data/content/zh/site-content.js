export const profileContent = {
  eyebrow: '关于我',
  heading: '设计，在人与系统相遇的地方',
  description:
    '我是牛拙Prince，做 UI/UX、AI 产品和人因工程交叉方向的 designer-builder。目前在 Tufts 读 Human Factors Engineering 硕士，本科是 Purdue 计算机工程。\n\n我喜欢产品从抽象想法变成真实东西的那个阶段：判断问题值不值得做，画出第一个能走通的流程，拿粗糙版本去测试，然后把它继续做成别人真的能用的东西。\n\n我的工作介于人因、产品设计和工程之间。我关注那些决定产品清不清楚的细节：提示出现的时机、反馈的方式、出错后的恢复路径，还有用户第一次点击时能不能马上理解。我交付过 Porsche Asia Pacific 的 PCM 车载界面工作，做过一个 BLE 姿势追踪 App，发布了 macOS 语音转文字工具 SayIt。我也设计并可用性测试了 TrekAssist，一款户外 e-ink 安全设备，也构建了 KnowledgeOS，一个让 agent 维护持久项目上下文的个人 AI 系统。\n\n我正在寻找产品设计、UX 和人因方向的机会，尤其关注打磨到位的产品、细致的 UI/UX 和复杂的多模态体验。',
  ctaLabel: '联系我',
};

export const contactContent = {
  title: '打个招呼',
  metaDescription:
    '关于产品设计、前端开发、移动项目或合作机会，欢迎联系。',
  privacyNote:
    '你的邮箱仅用于回复本条消息，不会被分享。',
  rateLimitedMessage:
    '你刚刚发了一条消息，请稍等一分钟再发。',
  successTitle: '消息已发送',
  successBody: '我会尽快回复，通常在 2–3 天内。感谢联系。',
  backLabel: '回到首页',
  emailLabel: '你的邮箱',
  messageLabel: '留言内容',
  sendLabel: '发送消息',
  sendingLabel: '发送中…',
  errorEmailInvalid: '请输入有效的邮箱地址。',
  errorMessageRequired: '请输入留言内容。',
  errorEmailTooLong: '邮箱地址需短于 {max} 个字符。',
  errorMessageTooLong: '留言内容需短于 {max} 个字符。',
  unconfiguredMessage:
    '联系表单尚未配置。暂时请通过 GitHub 联系。',
  failedMessage:
    '消息发送失败。请稍后重试，或通过 GitHub 联系。',
};

export const usesContent = {
  metaDescription:
    '我在 Web、移动端和 macOS 上设计和交付产品时所使用的工具、框架、AI 工作流和硬件。',
  heroTitle: '常用工具',
  heroDescription:
    '我日常做设计、Web、移动端、macOS 和 AI workflow 时会用到的工具、应用、框架和硬件。',
  sections: [
    {
      heading: '设计',
      items: [
        {
          label: 'Figma',
          url: 'https://www.figma.com',
          description:
            '我的主要 UI 设计环境，高保真原型、组件规格和大部分视觉产出都在这里完成。',
        },
        {
          label: 'Design Systems',
          description:
            '我在跨屏幕、跨平台和跨工程师协作时保持视觉和行为一致性的方法。',
        },
        {
          label: 'UI Components',
          description:
            '我习惯用可复用的构建块来思考界面：可组合、有文档、能应对设计变更。',
        },
        {
          label: 'Material Design',
          url: 'https://m3.material.io/',
          description:
            '设计 Android 或 Material 风格 Web 产品时的参考语言。',
        },
        {
          label: 'Human Interface Guidelines',
          url: 'https://developer.apple.com/design/human-interface-guidelines/',
          description:
            '设计 iOS、iPadOS 或 macOS 产品时的对应参考。',
        },
        {
          label: 'Human-Centered Design',
          description:
            '我带到每个项目里的视角：先看用户所处的语境，再谈功能列表。',
        },
        {
          label: 'User Research',
          description:
            '在打开画布之前，通过访谈和情境调研理解我到底在为谁设计。',
        },
        {
          label: 'Usability Testing',
          description:
            '用结构化任务和指标（成功率、完成时间、错误数、易用性评分）指导迭代。',
        },
        {
          label: 'Typography',
          description:
            '选择和搭配字体是让界面立刻显得有意图的最快方式。',
        },
        {
          label: 'Color Theory',
          description:
            '色板、层级和关注无障碍对比度的用色。',
        },
      ],
    },
    {
      heading: '开发',
      items: [
        {
          label: 'Python',
          url: 'https://www.python.org/',
          description:
            '我后端服务、数据处理和快速脚本的主力语言。',
        },
        {
          label: 'Swift + SwiftUI',
          url: 'https://developer.apple.com/swift/',
          description:
            '做原生 macOS 或 iOS App 时的首选。',
        },
        {
          label: 'JavaScript',
          url: 'https://developer.mozilla.org/docs/Web/JavaScript',
          description:
            '浏览器相关工作的基础胶水。大部分 Web 项目还是从这里开始。',
        },
        {
          label: 'TypeScript',
          url: 'https://www.typescriptlang.org/',
          description:
            '当 JS 项目超过一个页面、我希望编译器帮我抓错误的时候会切换过来。',
        },
        {
          label: 'React',
          url: 'https://react.dev/',
          description:
            '我的主力 Web UI 库。组件模型和我的设计师思维很合拍。',
        },
        {
          label: 'React Native',
          url: 'https://reactnative.dev/',
          description:
            '做跨平台移动端时用的一套代码覆盖 iOS 和 Android。',
        },
        {
          label: 'HTML & CSS',
          description:
            '基本功；仍然是被低估的前端技能。',
        },
        {
          label: 'Tailwind CSS',
          url: 'https://tailwindcss.com/',
          description:
            '新 Web 项目的默认样式层。utility-first 的写法让我能快速迭代。',
        },
        {
          label: 'C / C++',
          description:
            '需要贴近硬件的时候会降到这里。',
        },
      ],
    },
    {
      heading: '工具、API 与数据',
      items: [
        {
          label: 'Git',
          url: 'https://git-scm.com/',
          description: '我碰到的每个项目都用版本控制。',
        },
        {
          label: 'GitHub',
          url: 'https://github.com/',
          description:
            '代码、Release 和 CI 都在这里，包括签名和公证后的 macOS 分发流程。',
        },
        {
          label: 'Firebase',
          url: 'https://firebase.google.com/',
          description:
            '做快速移动端构建时，认证和实时数据的首选。',
        },
        {
          label: 'Expo',
          url: 'https://expo.dev/',
          description:
            'React Native 工具链，构建、开发客户端和 OTA 更新都靠它。',
        },
        {
          label: 'Xcode',
          url: 'https://developer.apple.com/xcode/',
          description:
            '所有 Swift、SwiftUI 和 Apple 平台调试的 IDE。',
        },
        {
          label: 'RESTful APIs',
          description: '服务间通信的默认方式。',
        },
        {
          label: 'GraphQL',
          url: 'https://graphql.org/',
          description:
            '当每个页面的数据形状差异大、我只想拉需要的数据时会更倾向用这个。',
        },
        {
          label: 'SQL',
          description: '日常查询关系型数据的语言。',
        },
        {
          label: 'PostgreSQL',
          url: 'https://www.postgresql.org/',
          description:
            '超出原型阶段后的默认关系型存储。',
        },
        {
          label: 'FastAPI',
          url: 'https://fastapi.tiangolo.com/',
          description:
            '做 API 和快速后端原型时用的 Python 框架。',
        },
      ],
    },
    {
      heading: 'AI 与 Agent 工具',
      items: [
        {
          label: 'Prompt Engineering',
          description:
            '设计和迭代 prompt，从 LLM 中获取可靠、结构化的输出。',
        },
        {
          label: 'AI 辅助编程',
          description:
            '全天和模型结对编程，从重构到脚手架到探索陌生代码库。',
        },
        {
          label: 'OpenAI Codex',
          url: 'https://openai.com/codex/',
          description:
            '代码生成和快速实验时用的工具。',
        },
        {
          label: 'Claude Code',
          url: 'https://www.anthropic.com/claude-code',
          description:
            '终端里 AI 辅助编程的日常主力。',
        },
        {
          label: 'n8n',
          url: 'https://n8n.io/',
          description:
            '可视化工作流自动化，用来连接 API、触发器和 AI 步骤。',
        },
        {
          label: 'Make (Integromat)',
          url: 'https://www.make.com/',
          description:
            '跨应用自动化和集成编排。',
        },
        {
          label: 'Hermes Agent',
          description:
            '个人 AI agent 系统，用来处理自动化、工作流和多 agent 编排。',
        },
        {
          label: 'RAG 系统',
          description:
            '当产品不能只依赖模型预训练知识时，用私有或领域数据支撑 LLM 回答。',
        },
        {
          label: 'AI Agent 工作流',
          description:
            '设计多个 agent 和工具如何协作完成完整任务。',
        },
        {
          label: 'Human-AI Interaction',
          description:
            '我带到 AI 产品里的设计视角：让模型行为可理解、可恢复，也更值得信任。',
        },
        {
          label: 'Whisper / 语音转文字',
          url: 'https://openai.com/research/whisper',
          description:
            '当产品需要语音转文字时，我用 Whisper（以及 whisper.cpp 做完全本地、保护隐私的转录）。',
        },
      ],
    },
  ],
  systemHeading: '系统配置',
  system: [
    { label: '操作系统', value: 'macOS' },
    { label: '浏览器', value: 'Arc' },
    { label: '显示器', value: 'LG 27UN850-W 4K' },
    { label: '键盘', value: 'Keychron K2' },
    { label: '鼠标', value: 'Logitech G305' },
    { label: '笔记本', value: 'MacBook Air M3' },
    { label: '耳机', value: 'Apple AirPods' },
  ],
};
