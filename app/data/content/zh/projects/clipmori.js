export const clipmoriProject = {
  slug: "clipmori",
  "title": "拾贴 · Clipmori",
  "description": "从个人日常需求出发制作的原生 macOS 剪贴板历史工具。搜索、预览，再把需要的内容贴回应用。",
  "roles": [
    "交互设计",
    "macOS 开发",
    "SwiftUI / AppKit"
  ],
  "url": "https://github.com/princeniu/LocalPaste/releases/latest",
  "linkLabel": "下载 macOS 版本",
  "summary": {
    "title": "拾贴 · Clipmori",
    "description": "从个人日常需求出发制作的原生 macOS 剪贴板历史工具。搜索、预览，再把需要的内容贴回应用。",
    "modelType": "macosUtility",
    "modelAlt": "拾贴 · Clipmori"
  },
  "sections": [
    {
      "type": "hero-image",
      "image": {
        "src": "/projects/clipmori/cover-zh.png",
        "width": 1672,
        "height": 941
      },
      "alt": "拾贴项目封面：横向历史卡片与搜索界面"
    },
    {
      "type": "text",
      "heading": "一个日常需求",
      "body": [
        "拾贴起源于一个简单需求：找回之前复制过的内容。项目围绕“复制—找回—再次粘贴”展开，把这一日常操作做成可以实际使用的 macOS 工具。"
      ]
    },
    {
      "type": "video",
      "heading": "看看它怎么用",
      "body": [],
      "src": "/projects/clipmori/demo-zh.mp4",
      "poster": "/projects/clipmori/cover-zh.png",
      "caption": "20 秒无声功能导览，使用真实界面和示例数据剪辑，展示浏览、搜索、预览与收藏。应用当前界面以简体中文为主。"
    },
    {
      "type": "timeline",
      "heading": "三个设计取舍",
      "body": [],
      "items": [
        {
          "title": "浏览与查找",
          "description": "横向卡片提供内容概览，搜索定位具体条目，空格预览完整内容。"
        },
        {
          "title": "保留选择",
          "description": "支持文字、图片、富文本和文件引用，可选择原格式或纯文本粘贴。"
        },
        {
          "title": "看清再导入",
          "description": "历史保存在本机；备份恢复先展示预览，合并时保留本机已有记录。"
        }
      ]
    },
    {
      "type": "text",
      "heading": "从实现到交付",
      "body": [
        "使用 SwiftUI、AppKit 和 SwiftData 实现，配有隔离回归测试、实机验证记录，以及签名和公证的安装包。",
        "目前是早期版本，暂不提供自动更新。历史与备份未加密，文件记录只保存引用。",
        "查看源码：https://github.com/princeniu/LocalPaste"
      ]
    }
  ]
};
