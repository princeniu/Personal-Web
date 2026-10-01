export const shengjianProject = {
  slug: 'shengjian',
  "title": "声间",
  "description": "一个私人双语听课与复习工具：实时中英字幕、带时间戳的原音回听，以及结构化学习笔记。",
  "roles": [
    "产品与交互设计",
    "全栈开发",
    "AI 集成"
  ],
  "url": "https://shengjian.princeniu.com",
  "linkLabel": "应用入口 · 邀请制",
  "summary": {
    "title": "声间",
    "description": "一个私人双语听课与复习工具：实时中英字幕、带时间戳的原音回听，以及结构化学习笔记。",
    "modelType": "laptop",
    "modelAlt": "声间"
  },
  "sections": [
    {
      "type": "hero-image",
      "image": {
        "src": "/projects/shengjian/cover-zh.webp",
        "width": 1600,
        "height": 1000
      },
      "alt": "声间：原文、译文与回听放在同一个界面"
    },
    {
      "type": "text",
      "heading": "从听懂到留下来",
      "body": [
        "声间从个人双语学习需求出发：现场既要听清内容，又要在之后找回难懂的那一句。我独立设计并开发了录音、双语阅读、回听和复习的完整流程。",
        "这是一个部署运行的私人双用户产品，采用预创建账号与邀请制访问。它没有公开注册，也没有商业用户规模或学习效果研究。"
      ]
    },
    {
      "type": "video",
      "heading": "40 秒界面演示",
      "body": [],
      "src": "/projects/shengjian/promo-with-sound.mp4",
      "poster": "/projects/shengjian/poster.webp",
      "caption": "实际界面的截图剪辑，带背景音乐和转场音效，无旁白。演示环境使用合成音频、人工脚本字幕与笔记；此视频不用于证明识别准确率或实时延迟。"
    },
    {
      "type": "timeline",
      "heading": "三个设计决定",
      "body": [],
      "items": [
        {
          "title": "原文与译文相邻",
          "description": "减少来回对照；时间戳让每段文字可以回到原音。"
        },
        {
          "title": "阅读由自己掌控",
          "description": "字号、专注阅读和跟随播放支持现场阅读与事后回顾。"
        },
        {
          "title": "区分完成状态",
          "description": "音频保存、转录结束与云端归档分别反馈，避免把保存误当成备份。"
        }
      ]
    },
    {
      "type": "image",
      "heading": "现场：把注意力留给内容",
      "body": [
        "先选语言方向，再开始录音。原文、译文和保存进度放在同一个工作区，暂停与结束保持可见。"
      ],
      "image": {
        "src": "/projects/shengjian/live.webp",
        "width": 1440,
        "height": 1000
      },
      "alt": "声间的现场双语工作区，字幕内容为脚本演示"
    },
    {
      "type": "image",
      "heading": "回听：回到难懂的那一句",
      "body": [
        "段落时间戳连接到对应原音。字号和跟随播放可以调节；键盘阅读进入正文时暂停自动跟随，减少滚动打断。"
      ],
      "image": {
        "src": "/projects/shengjian/playback.webp",
        "width": 1440,
        "height": 1000
      },
      "alt": "带段落时间戳的双语阅读与音频控制界面"
    },
    {
      "type": "image",
      "heading": "复习：笔记与原音相互核对",
      "body": [
        "笔记整理内容概览、主题、例子与明确待办，并提示重要信息需要核实。这里展示的是人工编写的演示笔记，不是模型效果评估。"
      ],
      "image": {
        "src": "/projects/shengjian/notes.webp",
        "width": 1440,
        "height": 1000
      },
      "alt": "声间学习笔记界面，内容为人工编写的演示样例"
    },
    {
      "type": "image-text",
      "heading": "适应不同宽度的阅读",
      "body": [
        "界面围绕 Mac 与 iPad 的个人使用场景构建，并支持窄屏阅读。此图为 390 像素浏览器视口模拟，展示响应式布局。"
      ],
      "image": {
        "src": "/projects/shengjian/phone.webp",
        "width": 390,
        "height": 844
      },
      "portrait": true,
      "alt": "390 像素模拟视口下的双语阅读界面"
    },
    {
      "type": "text",
      "heading": "看得见的反馈，背后的保存链路",
      "body": [
        "前端通过 AudioWorklet 采集 16 kHz 单声道 PCM，分段保存为 WAV。后端校验序号、采样偏移和 SHA-256，再把音频写入持久存储；云端归档有独立队列、重试和回读校验。",
        "实时转录翻译与笔记整理使用外部 AI 服务。我负责产品流程、集成、状态反馈与恢复机制；外部模型能力不作为自研模型成果。"
      ]
    },
    {
      "type": "text",
      "heading": "验证范围与取舍",
      "body": [
        "项目记录支持一次 51 分 56 秒的真实录音、双账号互不可见，以及用户确认的 iPad VoiceOver 验收。隔离恢复演练验证音频、文字和摘要完整性；Mac 上也完成了真实 Supabase 单条恢复。",
        "录音需要保持页面前台和亮屏；后台持续录音、两小时长录音、整机与 DNS 切换恢复没有通过证明。上述验收也不等于完整 WCAG 审计或正式可用性研究。"
      ]
    },
    {
      "type": "outcome",
      "heading": "把流程做完整",
      "body": [
        "声间让我把实时音频、双语阅读与可恢复的数据链路连接成一个可日常使用的产品。它的作品集价值在于设计与工程如何共同支撑听课和复习，而不是演示素材里的模型表现。"
      ]
    }
  ]
};
