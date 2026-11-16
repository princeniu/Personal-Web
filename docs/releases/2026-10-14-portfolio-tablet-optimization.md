# 作品集优化与平板重叠修复上线 — 2026-10-14

状态：已按用户授权发布至 https://princeniu.com，并完成线上布局复核。

- Pages production：`e816741b-cd67-4566-ad5c-b5c4b5c9ee96`，部署状态 success，已回读为 canonical/latest production。
- 前一生产版本：`f2447471-f7c3-4123-bf0c-f56e61a956b2`，保留作回滚依据。
- 本次使用工作区生产构建 Direct Upload；没有提交或推送 Git。构建输入与文件哈希另有发布快照。

## 重叠修复

940px 平板单列下，TrekAssist、Porsche 与 E-Tongue 内容超出了原 1080px 高度上限。E-Tongue 内容约 1272px，外层仅 1080px；总入口的负上边距进一步压缩空间。

移除共享项目容器的 max-height，保留 80vh 最小高度；总入口改为正间距，手机原有正间距保留。未通过裁切内容或修改 z-index 掩盖问题。

本地与正式域名均检查中英六个精选项目，覆盖 768×1024、820×1180、940×984、1024×768、1040×900、1041×900、1280×800。每轮共 84 组项目布局，未发现内容或按钮溢出及横向溢出。940px 下完成显示后的项目按钮与总入口间距为 88px，点击总入口正确进入全部作品页。模拟视口不等于真实平板验收。

## 保留既有发布内容

发布前核对发现本地仍为旧声间视频，而线上已有 V2。已将 origin/main@d439f842 的中英正文及 17 项 V2 媒体合入，保留本轮新增的案例概览、目录与技术折叠。旧媒体不删除；简历与最新获批 Git blob 一致。Porsche 30% 口径和团队个人归因继续按用户要求保持原样。

本次一并发布此前完成的本地优化，详见[本地阶段报告](../audits/2026-10-14-portfolio-optimization.md)。Sitemap 生成兼容带引号的 slug，保留 30 个唯一 URL。

## 发布依赖与验证边界

- 私有限流 Worker `portfolio-contact-limiter` 已发布，版本 `d3fedcf4-e05d-4f26-8540-413f7e748c01`；无公开 URL、无 routes。
- 生产仅新增 CONTACT_RATE_LIMITER 绑定。API 深比较确认 SESSION_SECRET、preview、兼容日期、其他配置与其他 Durable Object 均保留。
- 本地 workerd + SQLite Durable Object 的 20 个并发请求为 1 个接受、19 个限流；25 项测试、生产构建、Pages Function 预编译与 git diff --check 通过。
- Pagesdev 生产版本 URL 返回 noindex,nofollow；正式域名实际页面已复核。
- 上线后 30 个路由均返回 200，4 个旧链接正确 301；17 项 V2 媒体可访问，6 项关键媒体与 46 项 CSS/JS 的线上哈希匹配本地产物。无效联系请求返回 400；验收共 0 项失败。
- 既有 AWS 邮件配置为空，本次没有补写凭据或测试真实发送；不可用时保留草稿并显示公开邮箱与 LinkedIn。
- 依赖大版本迁移告警仍按[维护记录](../audits/2026-10-14-dependency-maintenance.md)跟踪，没有将聚合告警数表述为可利用漏洞数。

详细路由、资源哈希、布局数据、截图和安全配置差异见[线上验收记录](/Users/prince/.codex/visualizations/2026/10/14/01a13bc5-fa3c-7b40-97f2-89659ee2838a/portfolio-release-20261014/online-acceptance-receipt.json)。

![正式站点 940px 平板视口：项目按钮与全部作品入口已分开](/Users/prince/.codex/visualizations/2026/10/14/01a13bc5-fa3c-7b40-97f2-89659ee2838a/portfolio-release-20261014/production-tablet-zh-940.jpg)
