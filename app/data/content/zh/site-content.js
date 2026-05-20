export const profileContent = {
  eyebrow: '关于我',
  heading: '在人因与复杂系统的接缝处做设计。',
  description:
    '我是牛拙Prince，关注 UI/UX、AI 产品与人因工程交叉方向的 designer-builder。目前在 Tufts 攻读 Human Factors Engineering 硕士，本科毕业于 Purdue 计算机工程。\n\n我习惯从真实问题出发，把模糊想法推进到可测试、可使用的产品形态。过程通常是：先判断什么值得解决，设计第一个可用流程，测试粗糙版本，然后把它真正做成能用的东西。\n\n我的工作重叠在人因、产品设计和工程之间。我特别关注那些让产品「变清楚而不是变混乱」的小瞬间：提示的时机、反馈的方式、出错的恢复路径、第一个让人感到对的点击。我最近交付了 Porsche Asia Pacific 的 PCM 车载界面 UI 工作（帮助将加载时间降低了约 30%），做过一个 BLE 配对的姿势追踪 App，并通过 GitHub Releases 发布了 SayIt——一个运行在 macOS 上的语音转文字工具。\n\n我正在寻找产品设计、UX 和人因方向的角色，关注打磨到位的产品、细致的 UI/UX 和复杂的多模态体验。',
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
  successBody: '我会尽快回复，通常在一周内。感谢联系。',
  backLabel: '回到首页',
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
    '一份不太完整的清单，涵盖我日常在 Web、移动端和 macOS 上设计和交付产品时依赖的工具、应用、框架和硬件。',
  sections: [
    {
      heading: '设计',
      items: [
        {
          label: 'Figma',
          url: 'https://www.figma.com',
          description:
            '我的主要 UI 设计环境——高保真原型、组件规格和大部分视觉产出都在这里。',
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
            '我带到每个项目里的视角：从用户的语境出发，而不是从功能列表出发。',
        },
        {
          label: 'User Research',
          description:
            '在打开画布之前，通过访谈和情境调研理解我到底在为谁设计。',
        },
        {
          label: 'Usability Testing',
          description:
            '用结构化任务场景和指标（成功率、完成时间、错误数、易用性评分）驱动迭代。',
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
            '一切浏览器相关的基础胶水——仍然是大部分 Web 工作的起点。',
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
            '我的主力 Web UI 库——组件模型和我的设计师思维很合拍。',
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
            '新 Web 项目的默认样式层——utility-first 让我保持快速推进。',
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
            '代码、Release 和 CI 都在这——包括签名和公证后的 macOS 分发流程。',
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
            'React Native 工具链——构建、开发客户端和 OTA 更新都靠它。',
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
            '可视化工作流自动化——连接 API、触发器和 AI 步骤。',
        },
        {
          label: 'Make (Integromat)',
          url: 'https://www.make.com/',
          description:
            '跨应用自动化场景和集成编排。',
        },
        {
          label: 'Hermes Agent',
          description:
            '个人 AI agent 系统——自动化、工作流和多 agent 编排。',
        },
        {
          label: 'RAG 系统',
          description:
            '当产品不能仅依赖模型预训练知识时，用私有或领域数据落地 LLM 回答。',
        },
        {
          label: 'AI Agent 工作流',
          description:
            '设计多个 agent 和工具如何协作完成端到端任务。',
        },
        {
          label: 'Human-AI Interaction',
          description:
            '我带到 AI 产品里的设计视角——让模型行为可理解、可恢复、值得信赖。',
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
