# 五项主页精选更新 — 2026-10-14

已按用户授权完成本地修改、验证及 Cloudflare Pages 生产发布。

- 中英主页顺序：Helmline → TrekAssist → Porsche Digital Interface → 声间 / Shengjian → E-Tongue。
- 当前生产部署：`6bf54993-08b8-4b9d-a5d2-85b9e24738f5`，API 回读 canonical/latest 均为该成功版本。
- 上一生产版本：`e816741b-cd67-4566-ad5c-b5c4b5c9ee96`，保留作回滚依据。

## 改动

共享精选数组改为指定五项，并更新既有顺序测试。声间首页沿用 laptop 组件，分别使用现有中英文 V2 封面作为屏幕纹理；封面为 16:10，匹配模型屏幕，无新增媒体。

本地视觉检查发现左侧 laptop 沿用向右 14% 偏移，会进入右侧文字列。交错排列现改为左侧 -14%、右侧 +14%，平板与手机继续使用 0 偏移。

本轮仅修改三个应用源文件及一个既有测试文件。25 个中英文内容文件逐一 SHA-256 比较保持不变；全部项目仍各含 10 项，SayIt 和 KnowledgeOS 的案例入口保留。

## 验证

- 6 项相关项目测试、生产构建、`git diff --check` 通过。
- 本地中英 × 1280×800、940×984、390×844，覆盖 30 组项目布局；无内容、按钮或横向溢出。声间模型完成加载，手机与桌面截图已检查，中文首页实际点击进入声间案例。
- 本地 16 项 HTTP 检查通过，覆盖主页、精选案例、全部作品和双语封面。
- 线上中英文五项顺序、案例链接与声间模型展示已在浏览器确认。
- 线上选定案例、全部作品、SayIt/KnowledgeOS 路由均正常；12 项首页纹理与 30 项首页 CSS/JS 的完整 SHA-256 匹配本地构建，缓存及 Pages.dev noindex 保留。
- Cloudflare API 回读配置与发布前一致，SESSION_SECRET 类型及 CONTACT_RATE_LIMITER 绑定保持原样；未发 POST 或真实邮件，未更改云配置。

本次使用工作区生产构建 Direct Upload，没有 Git 提交或推送。浏览器验证使用模拟视口，不代表真实平板或手机验收。

[详细验收记录](/Users/prince/.codex/visualizations/2026/10/14/01a13bc5-fa3c-7b40-97f2-89659ee2838a/portfolio-featured-five-20261014/online-readback-receipt.json)

![正式中文主页第 4 项：声间](/Users/prince/.codex/visualizations/2026/10/14/01a13bc5-fa3c-7b40-97f2-89659ee2838a/portfolio-featured-five-20261014/production-shengjian-desktop-zh.jpg)
