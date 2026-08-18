import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { useLocation } from '@remix-run/react';
import { getLocaleFromPathname } from '~/i18n/route';
import styles from './privacy.module.css';

const policies = {
  en: {
    title: 'Hermes iOS Companion Privacy Policy',
    effective: 'Effective August 17, 2026',
    intro:
      'Hermes iOS Companion is an independently developed, unofficial iPhone client for Hermes Agent. It is not developed, sponsored, or endorsed by Nous Research.',
    sections: [
      {
        heading: 'Summary',
        paragraphs: [
          'Hermes iOS Companion does not provide a developer-hosted account, analytics service, advertising system, or tracking service. You connect the app to a Hermes Gateway that you select and control. Apart from Apple platform services such as push notifications, the app sends content only to that Gateway as needed to perform actions you request.',
        ],
      },
      {
        heading: 'Information stored on your device',
        paragraphs: [
          'Depending on the features you use, the app may store the following information in its app container, the shared App Group container used by the app and its extensions, or the iOS Keychain:',
        ],
        items: [
          'Gateway profile names, addresses, preferences, language, and connection state.',
          'Gateway credentials in the iOS Keychain.',
          'Message drafts, selected session state, run and activity state, approval state, and notification routing state.',
          'Attachments and preview caches.',
          'Recordings, audio-inbox items, transcripts, analysis records, and related processing state.',
          'Share Extension outbox items waiting to be sent.',
          'Local diagnostics and operational logs.',
        ],
        after: [
          'The app does not use this local information for advertising or cross-app tracking.',
        ],
      },
      {
        heading: 'Information sent to your Gateway',
        paragraphs: [
          'When you use connected features, the app may send the following information to the Gateway you selected:',
        ],
        items: [
          'Messages, prompts, session and project actions, approval decisions, and tool-related requests.',
          'Attachments, shared text, links, images, audio, and recording uploads.',
          'Transcription and audio-processing requests.',
          'A push-notification device token, device name, and app language when you enable notifications.',
          'Technical request information needed for authentication, reliability, and delivery.',
        ],
        after: [
          'The Gateway, its operator, and any AI or storage providers configured behind it determine how remotely processed information is retained and used. Review the policies and configuration of your Gateway and its providers. The developer of this app does not control user-selected Gateways.',
        ],
      },
      {
        heading: 'Apple services and permissions',
        items: [
          'Apple Push Notification service transports notifications. The app registers a device token with your selected Gateway so that Gateway can request notification delivery.',
          'Microphone access is used only when you start a recording or voice-input feature.',
          'Camera access is used when you choose to scan a connection QR code.',
          'Face ID or device authentication may protect app access and sensitive actions.',
          'Background audio is used only while an explicit recording is active or being finalized as allowed by iOS.',
        ],
        after: ['Apple processes information under Apple’s own terms and privacy policies.'],
      },
      {
        heading: 'Developer access',
        paragraphs: [
          'The developer does not operate a general-purpose Gateway, message relay, analytics backend, or content storage service for ordinary users of the app. The developer cannot access content stored on your device or on a Gateway you select merely because you use the app.',
          'If you voluntarily contact support, the developer may receive the information you choose to submit, such as your contact details, device or app information, diagnostics you attach, and your message. That information is used only to respond to the request and maintain the app.',
          'A temporary, isolated environment may be supplied to Apple solely for App Review. It is not available to ordinary users and is removed after the review process.',
        ],
      },
      {
        heading: 'Analytics, tracking, advertising, and sale',
        paragraphs: [
          'The app contains no third-party analytics or advertising SDK, does not track you across apps or websites, and does not sell personal data. If these practices change, this policy and the App Store privacy information will be updated before the changed behavior is released.',
        ],
      },
      {
        heading: 'Retention and deletion',
        paragraphs: [
          'Local information remains until you delete the relevant item, remove a Gateway profile, clear data through an available app control, or remove the app. Removing a Gateway profile deletes its stored connection credential. Individual recordings, audio items, drafts, and other local records may have their own delete controls.',
          'Removing the app normally removes its app-container and App Group data. iOS may retain Keychain items according to platform behavior, so remove Gateway profiles before uninstalling if you want the app to request deletion of their credentials.',
          'Information stored or processed by your Gateway remains subject to that Gateway’s configuration and retention rules. Use the Gateway’s own controls to delete remote sessions, uploads, transcripts, or other remote resources.',
        ],
      },
      {
        heading: 'Accounts',
        paragraphs: [
          'The app does not create or host a developer-controlled user account. A Gateway profile is a local connection configuration, not an account with the app developer.',
        ],
      },
      {
        heading: 'Children and sensitive content',
        paragraphs: [
          'The app is not designed for children. It can display and submit content from a user-controlled Gateway and its configured AI providers. Users are responsible for meeting the age and content requirements of their Gateway, AI providers, organization, and local law.',
        ],
      },
      {
        heading: 'Security',
        paragraphs: [
          'Gateway credentials are stored in the iOS Keychain. Network requests use the address you configure; use HTTPS or a trusted private network such as Tailscale. No method of storage or transmission is completely secure, and you are responsible for securing the Gateway you connect.',
        ],
      },
      {
        heading: 'Changes',
        paragraphs: [
          'Material changes will be reflected in this policy and, where required, in the App Store privacy information. The effective date above identifies the current version.',
        ],
      },
      {
        heading: 'Contact',
        paragraphs: ['For privacy or support questions, use the contact page.'],
        link: { href: '/contact', label: 'Contact support' },
      },
    ],
  },
  zh: {
    title: 'Hermes iOS Companion 隐私政策',
    effective: '生效日期：2026 年 8 月 17 日',
    intro:
      'Hermes iOS Companion 是由独立开发者制作的非官方 Hermes Agent iPhone 客户端，并非由 Nous Research 开发、赞助或背书。',
    sections: [
      {
        heading: '概要',
        paragraphs: [
          'Hermes iOS Companion 不提供由开发者托管的账号、分析服务、广告系统或追踪服务。你需要连接自己选择并控制的 Hermes Gateway。除 Apple 推送通知等系统服务外，App 只会在执行你发起的操作时，将所需内容发送到你选择的 Gateway。',
        ],
      },
      {
        heading: '存储在设备上的信息',
        paragraphs: ['根据你使用的功能，App 可能会将以下信息保存在 App 容器、供 App 与扩展共用的 App Group 容器或 iOS 钥匙串中：'],
        items: [
          'Gateway 配置名称、地址、偏好、语言和连接状态。',
          '保存在 iOS 钥匙串中的 Gateway 凭据。',
          '消息草稿、所选会话状态、运行和活动状态、审批状态及通知路由状态。',
          '附件和预览缓存。',
          '录音、音频收件箱条目、转录文本、分析记录及相关处理状态。',
          'Share Extension 中等待发送的发件箱条目。',
          '本地诊断信息和运行日志。',
        ],
        after: ['App 不会将这些本地信息用于广告或跨 App 追踪。'],
      },
      {
        heading: '发送到你所选 Gateway 的信息',
        paragraphs: ['使用联网功能时，App 可能会向你选择的 Gateway 发送：'],
        items: [
          '消息、提示词、会话和项目操作、审批决定及工具相关请求。',
          '附件、共享文本、链接、图片、音频和录音上传。',
          '转录和音频处理请求。',
          '在你启用通知后发送的推送设备令牌、设备名称和 App 语言。',
          '完成身份验证、可靠传输和消息送达所需的技术请求信息。',
        ],
        after: [
          '远程信息的处理和保留方式由 Gateway 的运营者，以及该 Gateway 后面配置的 AI 或存储服务商决定。请查看你的 Gateway 及其服务商的政策与配置。本 App 的开发者无法控制用户自行选择的 Gateway。',
        ],
      },
      {
        heading: 'Apple 服务与系统权限',
        items: [
          'Apple 推送通知服务负责通知传输。App 会把设备令牌注册到你选择的 Gateway，以便该 Gateway 请求发送通知。',
          '麦克风权限只会在你主动开始录音或语音输入时使用。',
          '相机权限只会在你选择扫描连接二维码时使用。',
          'Face ID 或设备身份验证可用于保护 App 访问和敏感操作。',
          '后台音频只会在明确开始的录音仍在进行或按 iOS 规则完成收尾时使用。',
        ],
        after: ['Apple 会依照其自身条款和隐私政策处理相关信息。'],
      },
      {
        heading: '开发者是否能够访问数据',
        paragraphs: [
          '对于普通用户，开发者不运营通用 Gateway、消息中转服务、分析后端或内容存储服务。仅仅使用本 App，并不会让开发者能够访问你设备上的内容或你自行选择的 Gateway 中的内容。',
          '如果你主动联系支持，开发者可能会收到你自愿提交的信息，例如联系方式、设备或 App 信息、你主动附加的诊断材料和消息内容。这些信息只用于回复请求和维护 App。',
          '为了完成 Apple App Review，开发者可能会临时提供一个隔离的审核环境。该环境不向普通用户开放，并会在审核流程结束后删除。',
        ],
      },
      {
        heading: '分析、追踪、广告和数据出售',
        paragraphs: [
          'App 不包含第三方分析或广告 SDK，不会跨 App 或网站追踪你，也不会出售个人数据。如果这些做法发生变化，开发者会在发布相关版本前同步更新本政策和 App Store 隐私信息。',
        ],
      },
      {
        heading: '保留与删除',
        paragraphs: [
          '本地信息会保留到你删除对应条目、移除 Gateway 配置、通过 App 中可用的控制清除数据，或删除 App 为止。移除 Gateway 配置时，App 会请求删除对应的连接凭据。录音、音频条目、草稿和其他本地记录可能有各自的删除入口。',
          '删除 App 通常会移除其 App 容器和 App Group 数据。iOS 可能会按照系统机制保留钥匙串项目；如果你希望 App 主动请求删除 Gateway 凭据，请在卸载前先移除相应 Gateway 配置。',
          '由 Gateway 存储或处理的信息受该 Gateway 自身配置和保留规则约束。请使用 Gateway 提供的控制删除远程会话、上传内容、转录文本或其他远程资源。',
        ],
      },
      {
        heading: '账号',
        paragraphs: ['App 不会创建或托管由开发者控制的用户账号。Gateway 配置只是保存在本地的连接信息，并不是你在 App 开发者处注册的账号。'],
      },
      {
        heading: '儿童与敏感内容',
        paragraphs: [
          'App 并非面向儿童设计。它可以显示和提交来自用户所控制 Gateway 及其 AI 服务商的内容。用户需要自行遵守 Gateway、AI 服务商、所在组织和当地法律规定的年龄与内容要求。',
        ],
      },
      {
        heading: '安全',
        paragraphs: [
          'Gateway 凭据保存在 iOS 钥匙串中。网络请求会发送到你配置的地址；请使用 HTTPS 或 Tailscale 等可信私有网络。任何存储或传输方式都无法保证绝对安全，你需要自行保护所连接的 Gateway。',
        ],
      },
      {
        heading: '政策变更',
        paragraphs: ['如有重大变化，开发者会更新本政策，并在需要时同步更新 App Store 隐私信息。以上生效日期代表当前版本。'],
      },
      {
        heading: '联系方式',
        paragraphs: ['如有隐私或支持问题，请使用联系页面。'],
        link: { href: '/zh/contact', label: '联系支持' },
      },
    ],
  },
};

export function PrivacyPolicy() {
  const location = useLocation();
  const locale = getLocaleFromPathname(location.pathname);
  const policy = policies[locale === 'zh' ? 'zh' : 'en'];

  return (
    <>
      <Section as="main" className={styles.page}>
        <article className={styles.article}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>Hermes iOS Companion</p>
            <Heading as="h1" level={2} className={styles.title}>
              {policy.title}
            </Heading>
            <p className={styles.effective}>{policy.effective}</p>
            <p className={styles.intro}>{policy.intro}</p>
          </header>
          <div className={styles.content}>
            {policy.sections.map(section => (
              <section key={section.heading} className={styles.section}>
                <Heading as="h2" level={4} className={styles.sectionTitle}>
                  {section.heading}
                </Heading>
                {section.paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                {section.items && (
                  <ul>
                    {section.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {section.after?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                {section.link && <a href={section.link.href}>{section.link.label}</a>}
              </section>
            ))}
          </div>
        </article>
      </Section>
      <Footer />
    </>
  );
}
