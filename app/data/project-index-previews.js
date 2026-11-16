import helmlineEn01 from '~/assets/helmline-screen-en-01.webp';
import helmlineEn03 from '~/assets/helmline-screen-en-03.webp';
import helmlineZh01 from '~/assets/helmline-screen-zh-01.webp';
import helmlineZh03 from '~/assets/helmline-screen-zh-03.webp';
import trekHome from '~/assets/trekassist-home-alert.jpg';
import trekMap from '~/assets/trekassist-map-mammoth.jpg';
import porscheNavigation from '~/assets/porsche-prototype.jpg';
import porscheHome from '~/assets/porsche-interface-home.jpg';
import sayitRecording from '~/assets/sayit-popover-recording.png';
import knowledgeEn from '~/assets/knowledgeos-vault-structure.webp';
import knowledgeZh from '~/assets/knowledgeos-vault-structure-zh.webp';
import postureProgress from '~/assets/posture-progress.jpg';
import postureTracker from '~/assets/posture-tracker.jpg';
import etongueDecision from '~/assets/etongue-issf-score.webp';
import lemonBrowse from '~/assets/little-lemon-1.jpg';
import lemonReserve from '~/assets/little-lemon-2.jpg';

const image = (src, width, height, alt, srcSet) => ({ src, width, height, alt, srcSet });
const single = (src, width, height, alt, note) => ({
  layout: 'single', images: [image(src, width, height, alt)], note,
});
const detail = (src, width, height, alt, crop) => ({ ...image(src, width, height, alt), crop });
const pair = (images, note) => ({ layout: 'pair', images, note });
const focus = (src, width, height, alt, crop, note) => ({
  layout: 'single', images: [detail(src, width, height, alt, crop)], note,
});

const helmlineSessionCrop = { x: 48, y: 350, width: 1224, height: 970 };
const helmlineApprovalCrop = { x: 48, y: 350, width: 1224, height: 1060 };
const trekCrop = { x: 0, y: 68, width: 800, height: 532 };
const porscheNavigationCrop = { x: 125, y: 60, width: 875, height: 640 };
const porscheHomeCrop = { x: 0, y: 60, width: 1000, height: 640 };
const sayitRecordingCrop = { x: 24, y: 446, width: 578, height: 304 };
const knowledgeLayersCrop = { x: 590, y: 230, width: 892, height: 620 };
const knowledgeDirectoryCrop = { x: 118, y: 230, width: 412, height: 620 };
const postureProgressCrop = { x: 16, y: 213, width: 329, height: 494 };
const postureTrackerCrop = { x: 14, y: 24, width: 348, height: 655 };
const etongueDecisionCrop = { x: 538, y: 108, width: 1493, height: 995 };
const lemonReservationCrop = { x: 0, y: 422, width: 428, height: 440 };
const lemonBrowseCrop = { x: 24, y: 143, width: 380, height: 663 };

const previews = {
  helmline: {
    en: pair([
      detail(helmlineEn03, 1320, 2868, 'Helmline released action approval controls with fictional demo content', helmlineApprovalCrop),
      detail(helmlineEn01, 1320, 2868, 'Helmline released session list with fictional demo content', helmlineSessionCrop),
    ]),
    zh: pair([
      detail(helmlineZh03, 1320, 2868, 'Helmline 正式版操作审批控件，使用虚构演示内容', helmlineApprovalCrop),
      detail(helmlineZh01, 1320, 2868, 'Helmline 正式版会话列表，使用虚构演示内容', helmlineSessionCrop),
    ]),
  },
  shengjian: {
    en: single('/projects/shengjian/cover-v2-en.webp', 1600, 1000, 'Shengjian classroom review product cover with fictional lesson content'),
    zh: single('/projects/shengjian/cover-v2-zh.webp', 1600, 1000, '声间课堂复习产品封面，使用虚构课堂内容'),
  },
  clipmori: Object.fromEntries(['en', 'zh'].map(locale => [locale, {
    layout: 'single', images: [image(`/projects/clipmori/cover-${locale}.webp`, 1672, 941,
      locale === 'zh' ? '拾贴剪贴板历史界面，使用示例内容' : 'Clipmori clipboard history interface with example content',
      `/projects/clipmori/cover-${locale}-640.webp 640w, /projects/clipmori/cover-${locale}-1120.webp 1120w, /projects/clipmori/cover-${locale}.webp 1672w`)],
  }])),
  trekassist: {
    en: pair([
      detail(trekHome, 800, 600, 'TrekAssist prototype showing a weather warning and map, tour, and safety task entries', trekCrop),
      detail(trekMap, 800, 600, 'TrekAssist map prototype with weather warning and emergency controls', trekCrop),
    ]),
    zh: pair([
      detail(trekHome, 800, 600, 'TrekAssist 原型中的天气提醒，以及地图、导览与安全任务入口', trekCrop),
      detail(trekMap, 800, 600, 'TrekAssist 地图原型中的天气提醒与紧急求助控件', trekCrop),
    ]),
  },
  'porsche-digital-interface': {
    en: pair([
      detail(porscheNavigation, 1000, 700, 'Porsche in-car HMI navigation prototype showing destination confirmation and map controls', porscheNavigationCrop),
      detail(porscheHome, 1000, 700, 'Porsche in-car HMI prototype showing fixed task shortcuts, app grid, and voice entry', porscheHomeCrop),
    ]),
    zh: pair([
      detail(porscheNavigation, 1000, 700, 'Porsche 车载 HMI 导航原型中的目的地确认与地图控件', porscheNavigationCrop),
      detail(porscheHome, 1000, 700, 'Porsche 车载 HMI 原型中的固定快捷入口、应用网格与语音入口', porscheHomeCrop),
    ]),
  },
  sayit: {
    en: focus(sayitRecording, 626, 878, 'SayIt development-stage recording interface showing stop-and-transcribe action, timer, audio level, and recording status, version 1.0.2', sayitRecordingCrop, 'Development interface'),
    zh: focus(sayitRecording, 626, 878, 'SayIt v1.0.2 开发阶段录音界面的停止转写按钮、计时、音量与录制状态', sayitRecordingCrop, '开发阶段界面'),
  },
  knowledgeos: {
    en: pair([
      detail(knowledgeEn, 1600, 1000, 'Sanitized KnowledgeOS diagram showing agent-maintained knowledge layers and review loop', knowledgeLayersCrop),
      detail(knowledgeEn, 1600, 1000, 'Sanitized KnowledgeOS diagram showing its Markdown directory structure', knowledgeDirectoryCrop),
    ], 'Structure diagram'),
    zh: pair([
      detail(knowledgeZh, 1600, 1000, 'KnowledgeOS 脱敏结构示意中的 Agent 维护知识层与审查循环', knowledgeLayersCrop),
      detail(knowledgeZh, 1600, 1000, 'KnowledgeOS 脱敏结构示意中的 Markdown 目录结构', knowledgeDirectoryCrop),
    ], '结构示意'),
  },
  'posture-checker': {
    en: pair([
      detail(postureProgress, 358, 812, 'Posture Checker interface prototype showing connection, posture, and immediate feedback', postureProgressCrop),
      detail(postureTracker, 375, 812, 'Posture Checker interface prototype showing a reminder and daily posture trends', postureTrackerCrop),
    ]),
    zh: pair([
      detail(postureProgress, 358, 812, 'Posture Checker 界面原型中的连接状态、坐姿与即时反馈', postureProgressCrop),
      detail(postureTracker, 375, 812, 'Posture Checker 界面原型中的提醒与每日坐姿趋势', postureTrackerCrop),
    ]),
  },
  'etongue-sensory-platform': {
    en: focus(etongueDecision, 2048, 1103, 'E-Tongue decision-support prototype showing a Tweak recommendation, evidence, and machine and panelist sensory profiles with illustrative data', etongueDecisionCrop, 'Prototype · illustrative data'),
    zh: focus(etongueDecision, 2048, 1103, 'E-Tongue 决策支持原型中的 Tweak 建议、证据，以及机器与评审员感官数据；数字为示意值', etongueDecisionCrop, '原型 · 示意数据'),
  },
  'little-lemon': {
    en: pair([
      detail(lemonReserve, 428, 1000, 'Little Lemon reservation prototype showing party size, date, time, and availability controls', lemonReservationCrop),
      detail(lemonBrowse, 428, 1000, 'Little Lemon restaurant browsing prototype showing filters and restaurant cards', lemonBrowseCrop),
    ]),
    zh: pair([
      detail(lemonReserve, 428, 1000, 'Little Lemon 预约原型中的人数、日期、时间与可订时段入口', lemonReservationCrop),
      detail(lemonBrowse, 428, 1000, 'Little Lemon 餐厅浏览原型中的筛选与餐厅卡片', lemonBrowseCrop),
    ]),
  },
};

export const getProjectIndexPreview = (slug, locale = 'en') => previews[slug]?.[locale];
