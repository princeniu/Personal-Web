import {
  featuredProjectSlugs,
  getProjectPath,
  portfolioProjects,
} from './project-content';
import { portfolioProjects as zhPortfolioProjects } from './content/zh/index.js';

import porscheBackgroundLarge from '~/assets/porsche-background-tile-large.jpg';
import porscheBackgroundPlaceholder from '~/assets/porsche-background-tile-placeholder.jpg';
import porscheBackground from '~/assets/porsche-background-tile.webp';
import porscheFlowchartLarge from '~/assets/porsche-flowchart-large.jpg';
import porscheFlowchartPlaceholder from '~/assets/porsche-flowchart-placeholder.jpg';
import porscheFlowchart from '~/assets/porsche-flowchart.webp';
import porscheHomeLarge from '~/assets/porsche-interface-home-large.jpg';
import porscheHomePlaceholder from '~/assets/porsche-interface-home-placeholder.jpg';
import porscheHome from '~/assets/porsche-interface-home.jpg';
import porscheOutcomeLarge from '~/assets/porsche-background-large.jpg';
import porscheOutcomePlaceholder from '~/assets/porsche-background-placeholder.jpg';
import porscheOutcome from '~/assets/porsche-background.webp';
import porschePrototypeLarge from '~/assets/porsche-prototype-large.jpg';
import porschePrototypePlaceholder from '~/assets/porsche-prototype-placeholder.jpg';
import porschePrototype from '~/assets/porsche-prototype.jpg';
import porscheWireframeMainLarge from '~/assets/porsche-wireframe-main-large.jpg';
import porscheWireframeMainPlaceholder from '~/assets/porsche-wireframe-main-placeholder.jpg';
import porscheWireframeMain from '~/assets/porsche-wireframe-main.jpg';
import porscheWireframeNavigationLarge from '~/assets/porsche-wireframe-nav-large.jpg';
import porscheWireframeNavigationPlaceholder from '~/assets/porsche-wireframe-nav-placeholder.jpg';
import porscheWireframeNavigation from '~/assets/porsche-wireframe-nav.jpg';

import postureActivityLarge from '~/assets/posture-activity-large.jpg';
import postureActivityPlaceholder from '~/assets/posture-activity-placeholder.jpg';
import postureActivity from '~/assets/posture-activity.jpg';
import postureAppLarge from '~/assets/posture-checker-app-large.webp';
import postureAppPlaceholder from '~/assets/posture-checker-app-placeholder.png';
import postureApp from '~/assets/posture-checker-app.webp';
import postureArchitectureLarge from '~/assets/posture-architecture-large.jpg';
import postureArchitecturePlaceholder from '~/assets/posture-architecture-placeholder.jpg';
import postureArchitecture from '~/assets/posture-architecture.jpg';
import postureBackgroundLarge from '~/assets/posture-background-tile-large.jpg';
import postureBackgroundPlaceholder from '~/assets/posture-background-tile-placeholder.jpg';
import postureBackground from '~/assets/posture-background-tile.webp';
import postureFinalAppLarge from '~/assets/posture-final-app-large.webp';
import postureFinalAppPlaceholder from '~/assets/posture-final-app-placeholder.png';
import postureFinalApp from '~/assets/posture-final-app.webp';
import postureListLarge from '~/assets/posture-tracker-large.jpg';
import postureListPlaceholder from '~/assets/posture-tracker-placeholder.jpg';
import postureList from '~/assets/posture-tracker.jpg';
import postureLoginLarge from '~/assets/posture-login-large.jpg';
import postureLoginPlaceholder from '~/assets/posture-login-placeholder.jpg';
import postureLogin from '~/assets/posture-login.jpg';
import postureProgressLarge from '~/assets/posture-progress-large.jpg';
import postureProgressPlaceholder from '~/assets/posture-progress-placeholder.jpg';
import postureProgress from '~/assets/posture-progress.jpg';
import posturePrototypeLarge from '~/assets/posture-prototype-large.jpg';
import posturePrototypePlaceholder from '~/assets/posture-prototype-placeholder.jpg';
import posturePrototype from '~/assets/posture-prototype.jpg';
import postureTeamPlaceholder from '~/assets/posture-team-placeholder.jpg';
import postureTeam from '~/assets/posture-team.webp';
import postureWireframeLarge from '~/assets/posture-wireframe-large.jpg';
import postureWireframePlaceholder from '~/assets/posture-wireframe-placeholder.jpg';
import postureWireframe from '~/assets/posture-wireframe.jpg';

import littleLemonHeroLarge from '~/assets/little-lemon-1-large.jpg';
import littleLemonHeroPlaceholder from '~/assets/little-lemon-1-placeholder.jpg';
import littleLemonHero from '~/assets/little-lemon-1.jpg';
import littleLemonMenuLarge from '~/assets/little-lemon-2-large.jpg';
import littleLemonMenuPlaceholder from '~/assets/little-lemon-2-placeholder.jpg';
import littleLemonMenu from '~/assets/little-lemon-2.jpg';

import sayitBrand from '~/assets/sayit-brand.webp';
import sayitPopoverIdle from '~/assets/sayit-popover-idle.png';
import sayitPopoverRecording from '~/assets/sayit-popover-recording.png';
import sayitIphoneMic from '~/assets/sayit-iphone-mic.jpg';

import knowledgeosArchitecture from '~/assets/knowledgeos-architecture.webp';
import knowledgeosArchitecturePlaceholder from '~/assets/knowledgeos-architecture-placeholder.jpg';
import knowledgeosArchitectureZh from '~/assets/knowledgeos-architecture-zh.webp';
import knowledgeosArchitectureZhPlaceholder from '~/assets/knowledgeos-architecture-zh-placeholder.jpg';
import knowledgeosVaultStructure from '~/assets/knowledgeos-vault-structure.webp';
import knowledgeosVaultStructurePlaceholder from '~/assets/knowledgeos-vault-structure-placeholder.jpg';
import knowledgeosVaultStructureZh from '~/assets/knowledgeos-vault-structure-zh.webp';
import knowledgeosVaultStructureZhPlaceholder from '~/assets/knowledgeos-vault-structure-zh-placeholder.jpg';
import knowledgeosCompiledTruth from '~/assets/knowledgeos-compiled-truth.webp';
import knowledgeosCompiledTruthPlaceholder from '~/assets/knowledgeos-compiled-truth-placeholder.jpg';
import knowledgeosCompiledTruthZh from '~/assets/knowledgeos-compiled-truth-zh.webp';
import knowledgeosCompiledTruthZhPlaceholder from '~/assets/knowledgeos-compiled-truth-zh-placeholder.jpg';
import knowledgeosWeeklyReview from '~/assets/knowledgeos-weekly-review.webp';
import knowledgeosWeeklyReviewPlaceholder from '~/assets/knowledgeos-weekly-review-placeholder.jpg';
import knowledgeosWeeklyReviewZh from '~/assets/knowledgeos-weekly-review-zh.webp';
import knowledgeosWeeklyReviewZhPlaceholder from '~/assets/knowledgeos-weekly-review-zh-placeholder.jpg';
import knowledgeosHeroBg from '~/assets/knowledgeos-hero-bg.webp';
import knowledgeosReflectionBg from '~/assets/knowledgeos-reflection-bg.webp';
import knowledgeosHeroBannerZh from '~/assets/knowledgeos-hero-banner-zh.webp';
import knowledgeosHeroBannerEn from '~/assets/knowledgeos-hero-banner-en.webp';

import etongueDeviceContext from '~/assets/etongue-device-context.webp';
import etongueDeviceContextPlaceholder from '~/assets/etongue-device-context-placeholder.jpg';
import etongueEarlyPrototype from '~/assets/etongue-early-prototype.mp4';
import etongueEarlyPrototypePlaceholder from '~/assets/etongue-early-prototype-placeholder.jpg';
import etongueEarlyPrototypePoster from '~/assets/etongue-early-prototype-poster.webp';
import etongueSensorCloseup from '~/assets/etongue-sensor-closeup.webp';
import etongueSensorCloseupPlaceholder from '~/assets/etongue-sensor-closeup-placeholder.jpg';
import etongueIssfDashboard from '~/assets/etongue-issf-dashboard.webp';
import etongueTasteProfile from '~/assets/etongue-taste-profile.webp';
import etongueIssfScore from '~/assets/etongue-issf-score.webp';
import etonguePrototypeMachineTesting from '~/assets/etongue-prototype-machine-testing.webp';
import etonguePrototypeAnalyzeResults from '~/assets/etongue-prototype-analyze-results.webp';
import etonguePrototypeFinalDecision from '~/assets/etongue-prototype-final-decision.webp';
import etonguePrototypeConfigureProducts from '~/assets/etongue-prototype-configure-products.webp';

import trekassistAlertModalLarge from '~/assets/trekassist-alert-modal-large.jpg';
import trekassistAlertModalPlaceholder from '~/assets/trekassist-alert-modal-placeholder.jpg';
import trekassistAlertModal from '~/assets/trekassist-alert-modal.jpg';
import trekassistDiscoveryFlowLarge from '~/assets/trekassist-discovery-flow-large.jpg';
import trekassistDiscoveryFlowPlaceholder from '~/assets/trekassist-discovery-flow-placeholder.jpg';
import trekassistDiscoveryFlow from '~/assets/trekassist-discovery-flow.jpg';
import trekassistEmergencyConfirmationLarge from '~/assets/trekassist-emergency-confirmation-large.jpg';
import trekassistEmergencyConfirmationPlaceholder from '~/assets/trekassist-emergency-confirmation-placeholder.jpg';
import trekassistEmergencyConfirmation from '~/assets/trekassist-emergency-confirmation.jpg';
import trekassistGuidedTourMammothLarge from '~/assets/trekassist-guided-tour-mammoth-large.jpg';
import trekassistGuidedTourMammothPlaceholder from '~/assets/trekassist-guided-tour-mammoth-placeholder.jpg';
import trekassistGuidedTourMammoth from '~/assets/trekassist-guided-tour-mammoth.jpg';
import trekassistGuidedToursLarge from '~/assets/trekassist-guided-tours-large.jpg';
import trekassistGuidedToursPlaceholder from '~/assets/trekassist-guided-tours-placeholder.jpg';
import trekassistGuidedTours from '~/assets/trekassist-guided-tours.jpg';
import trekassistHomeAlertLarge from '~/assets/trekassist-home-alert-large.jpg';
import trekassistHomeAlertPlaceholder from '~/assets/trekassist-home-alert-placeholder.jpg';
import trekassistHomeAlert from '~/assets/trekassist-home-alert.jpg';
import trekassistMapMammothLarge from '~/assets/trekassist-map-mammoth-large.jpg';
import trekassistMapMammothPlaceholder from '~/assets/trekassist-map-mammoth-placeholder.jpg';
import trekassistMapMammoth from '~/assets/trekassist-map-mammoth.jpg';
import trekassistPostTestConceptLarge from '~/assets/trekassist-post-test-concept-large.jpg';
import trekassistPostTestConceptPlaceholder from '~/assets/trekassist-post-test-concept-placeholder.jpg';
import trekassistPostTestConcept from '~/assets/trekassist-post-test-concept.jpg';
import trekassistSafetyFlowLarge from '~/assets/trekassist-safety-flow-large.jpg';
import trekassistSafetyFlowPlaceholder from '~/assets/trekassist-safety-flow-placeholder.jpg';
import trekassistSafetyFlow from '~/assets/trekassist-safety-flow.jpg';
import trekassistSafetyScreenLarge from '~/assets/trekassist-safety-screen-large.jpg';
import trekassistSafetyScreenPlaceholder from '~/assets/trekassist-safety-screen-placeholder.jpg';
import trekassistSafetyScreen from '~/assets/trekassist-safety-screen.jpg';
import trekassistSettingsLarge from '~/assets/trekassist-settings-large.jpg';
import trekassistSettingsPlaceholder from '~/assets/trekassist-settings-placeholder.jpg';
import trekassistSettings from '~/assets/trekassist-settings.jpg';
import trekassistGrandPrismaticBgLarge from '~/assets/trekassist-grand-prismatic-bg-large.webp';
import trekassistGrandPrismaticBgPlaceholder from '~/assets/trekassist-grand-prismatic-bg-placeholder.jpg';
import trekassistGrandPrismaticBg from '~/assets/trekassist-grand-prismatic-bg.jpg';
import trekassistYellowstoneSignBgLarge from '~/assets/trekassist-yellowstone-sign-bg-large.jpg';
import trekassistYellowstoneSignBgPlaceholder from '~/assets/trekassist-yellowstone-sign-bg-placeholder.jpg';
import trekassistYellowstoneSignBg from '~/assets/trekassist-yellowstone-sign-bg.jpg';

const imageAssets = {
  knowledgeosArchitecture: {
    src: knowledgeosArchitecture,
    srcSet: `${knowledgeosArchitecture} 1600w`,
    placeholder: knowledgeosArchitecturePlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosArchitectureZh: {
    src: knowledgeosArchitectureZh,
    srcSet: `${knowledgeosArchitectureZh} 1600w`,
    placeholder: knowledgeosArchitectureZhPlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosVaultStructure: {
    src: knowledgeosVaultStructure,
    srcSet: `${knowledgeosVaultStructure} 1600w`,
    placeholder: knowledgeosVaultStructurePlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosVaultStructureZh: {
    src: knowledgeosVaultStructureZh,
    srcSet: `${knowledgeosVaultStructureZh} 1600w`,
    placeholder: knowledgeosVaultStructureZhPlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosCompiledTruth: {
    src: knowledgeosCompiledTruth,
    srcSet: `${knowledgeosCompiledTruth} 1600w`,
    placeholder: knowledgeosCompiledTruthPlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosCompiledTruthZh: {
    src: knowledgeosCompiledTruthZh,
    srcSet: `${knowledgeosCompiledTruthZh} 1600w`,
    placeholder: knowledgeosCompiledTruthZhPlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosWeeklyReview: {
    src: knowledgeosWeeklyReview,
    srcSet: `${knowledgeosWeeklyReview} 1600w`,
    placeholder: knowledgeosWeeklyReviewPlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosWeeklyReviewZh: {
    src: knowledgeosWeeklyReviewZh,
    srcSet: `${knowledgeosWeeklyReviewZh} 1600w`,
    placeholder: knowledgeosWeeklyReviewZhPlaceholder,
    width: 1600,
    height: 1000,
  },
  knowledgeosHeroBg: {
    src: knowledgeosHeroBg,
    srcSet: `${knowledgeosHeroBg} 1600w`,
    width: 1600,
    height: 1000,
  },
  knowledgeosReflectionBg: {
    src: knowledgeosReflectionBg,
    srcSet: `${knowledgeosReflectionBg} 1600w`,
    width: 1600,
    height: 1000,
  },
  knowledgeosHeroBannerZh: {
    src: knowledgeosHeroBannerZh,
    srcSet: `${knowledgeosHeroBannerZh} 1600w`,
    width: 1600,
    height: 1000,
  },
  knowledgeosHeroBannerEn: {
    src: knowledgeosHeroBannerEn,
    srcSet: `${knowledgeosHeroBannerEn} 1600w`,
    width: 1600,
    height: 1000,
  },
  etongueDeviceContext: {
    src: etongueDeviceContext,
    placeholder: etongueDeviceContextPlaceholder,
    width: 1284,
    height: 856,
  },
  etongueEarlyPrototype: {
    src: etongueEarlyPrototype,
    placeholder: etongueEarlyPrototypePlaceholder,
    poster: etongueEarlyPrototypePoster,
    width: 1626,
    height: 1080,
  },
  etongueEarlyPrototypePoster: {
    src: etongueEarlyPrototypePoster,
    placeholder: etongueEarlyPrototypePlaceholder,
    width: 1200,
    height: 798,
  },
  etongueSensorCloseup: {
    src: etongueSensorCloseup,
    placeholder: etongueSensorCloseupPlaceholder,
    width: 947,
    height: 631,
  },
  etongueIssfDashboard: {
    src: etongueIssfDashboard,
    srcSet: `${etongueIssfDashboard} 2048w`,
    width: 2048,
    height: 1103,
  },
  etongueTasteProfile: {
    src: etongueTasteProfile,
    srcSet: `${etongueTasteProfile} 2048w`,
    width: 2048,
    height: 1103,
  },
  etongueIssfScore: {
    src: etongueIssfScore,
    srcSet: `${etongueIssfScore} 2048w`,
    width: 2048,
    height: 1103,
  },
  etonguePrototypeMachineTesting: {
    src: etonguePrototypeMachineTesting,
    srcSet: `${etonguePrototypeMachineTesting} 1265w`,
    width: 1265,
    height: 1856,
  },
  etonguePrototypeAnalyzeResults: {
    src: etonguePrototypeAnalyzeResults,
    srcSet: `${etonguePrototypeAnalyzeResults} 1265w`,
    width: 1265,
    height: 1653,
  },
  etonguePrototypeFinalDecision: {
    src: etonguePrototypeFinalDecision,
    srcSet: `${etonguePrototypeFinalDecision} 1265w`,
    width: 1265,
    height: 2253,
  },
  etonguePrototypeConfigureProducts: {
    src: etonguePrototypeConfigureProducts,
    srcSet: `${etonguePrototypeConfigureProducts} 1265w`,
    width: 1265,
    height: 1624,
  },
  // Little Lemon assets are 428×1000 portrait phone screenshots (and 856×2000
  // for the @2x variant). These dimensions drive the rendered aspect ratio,
  // so they must match the underlying file or the image gets squashed.
  littleLemonHero: {
    src: littleLemonHero,
    srcSet: `${littleLemonHero} 428w, ${littleLemonHeroLarge} 856w`,
    placeholder: littleLemonHeroPlaceholder,
    width: 428,
    height: 1000,
  },
  littleLemonMenu: {
    src: littleLemonMenu,
    srcSet: `${littleLemonMenu} 428w, ${littleLemonMenuLarge} 856w`,
    placeholder: littleLemonMenuPlaceholder,
    width: 428,
    height: 1000,
  },
  littleLemonReservation: {
    src: littleLemonHero,
    srcSet: `${littleLemonHero} 428w, ${littleLemonHeroLarge} 856w`,
    placeholder: littleLemonHeroPlaceholder,
    width: 428,
    height: 1000,
  },
  porscheFlowchart: {
    src: porscheFlowchart,
    srcSet: `${porscheFlowchart} 1024w, ${porscheFlowchartLarge} 2048w`,
    placeholder: porscheFlowchartPlaceholder,
    width: 1024,
    height: 800,
  },
  porscheHome: {
    src: porscheHome,
    srcSet: `${porscheHome} 1280w, ${porscheHomeLarge} 2560w`,
    placeholder: porscheHomePlaceholder,
    width: 1280,
    height: 800,
  },
  porscheOutcome: {
    src: porscheOutcome,
    srcSet: `${porscheOutcome} 1280w, ${porscheOutcomeLarge} 2560w`,
    placeholder: porscheOutcomePlaceholder,
    width: 1280,
    height: 900,
  },
  porschePrototype: {
    src: porschePrototype,
    srcSet: `${porschePrototype} 1280w, ${porschePrototypeLarge} 2560w`,
    placeholder: porschePrototypePlaceholder,
    width: 1280,
    height: 800,
  },
  porscheWireframeMain: {
    src: porscheWireframeMain,
    srcSet: `${porscheWireframeMain} 1280w, ${porscheWireframeMainLarge} 2560w`,
    placeholder: porscheWireframeMainPlaceholder,
    width: 1280,
    height: 800,
  },
  porscheWireframeNavigation: {
    src: porscheWireframeNavigation,
    srcSet: `${porscheWireframeNavigation} 1280w, ${porscheWireframeNavigationLarge} 2560w`,
    placeholder: porscheWireframeNavigationPlaceholder,
    width: 1280,
    height: 800,
  },
  postureActivity: {
    src: postureActivity,
    srcSet: `${postureActivity} 440w, ${postureActivityLarge} 880w`,
    placeholder: postureActivityPlaceholder,
    width: 440,
    height: 790,
  },
  postureApp: {
    src: postureApp,
    srcSet: `${postureApp} 800w, ${postureAppLarge} 1920w`,
    placeholder: postureAppPlaceholder,
    width: 800,
    height: 500,
  },
  postureArchitecture: {
    src: postureArchitecture,
    srcSet: `${postureArchitecture} 440w, ${postureArchitectureLarge} 880w`,
    placeholder: postureArchitecturePlaceholder,
    width: 440,
    height: 790,
  },
  postureFinalApp: {
    src: postureFinalApp,
    srcSet: `${postureFinalApp} 350w, ${postureFinalAppLarge} 700w`,
    placeholder: postureFinalAppPlaceholder,
    width: 350,
    height: 750,
  },
  posturePrototype: {
    src: posturePrototype,
    srcSet: `${posturePrototype} 800w, ${posturePrototypeLarge} 1920w`,
    placeholder: posturePrototypePlaceholder,
    width: 800,
    height: 500,
  },
  postureTeam: {
    src: postureTeam,
    placeholder: postureTeamPlaceholder,
    width: 940,
    height: 500,
  },
  postureWireframe: {
    src: postureWireframe,
    srcSet: `${postureWireframe} 800w, ${postureWireframeLarge} 1920w`,
    placeholder: postureWireframePlaceholder,
    width: 800,
    height: 500,
  },
  sayitBrand: {
    src: sayitBrand,
    width: 1600,
    height: 900,
  },
  sayitPopoverIdle: {
    src: sayitPopoverIdle,
    width: 1124,
    height: 916,
  },
  sayitPopoverRecording: {
    src: sayitPopoverRecording,
    width: 1128,
    height: 914,
  },
  sayitIphoneMic: {
    src: sayitIphoneMic,
    width: 1179,
    height: 2556,
  },
  trekassistAlertModal: {
    src: trekassistAlertModal,
    srcSet: `${trekassistAlertModal} 800w, ${trekassistAlertModalLarge} 1600w`,
    placeholder: trekassistAlertModalPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistDiscoveryFlow: {
    src: trekassistDiscoveryFlow,
    srcSet: `${trekassistDiscoveryFlow} 1000w, ${trekassistDiscoveryFlowLarge} 1800w`,
    placeholder: trekassistDiscoveryFlowPlaceholder,
    width: 1000,
    height: 607,
  },
  trekassistEmergencyConfirmation: {
    src: trekassistEmergencyConfirmation,
    srcSet: `${trekassistEmergencyConfirmation} 800w, ${trekassistEmergencyConfirmationLarge} 1600w`,
    placeholder: trekassistEmergencyConfirmationPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistGuidedTourMammoth: {
    src: trekassistGuidedTourMammoth,
    srcSet: `${trekassistGuidedTourMammoth} 800w, ${trekassistGuidedTourMammothLarge} 1600w`,
    placeholder: trekassistGuidedTourMammothPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistGuidedTours: {
    src: trekassistGuidedTours,
    srcSet: `${trekassistGuidedTours} 800w, ${trekassistGuidedToursLarge} 1600w`,
    placeholder: trekassistGuidedToursPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistHomeAlert: {
    src: trekassistHomeAlert,
    srcSet: `${trekassistHomeAlert} 800w, ${trekassistHomeAlertLarge} 1600w`,
    placeholder: trekassistHomeAlertPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistMapMammoth: {
    src: trekassistMapMammoth,
    srcSet: `${trekassistMapMammoth} 800w, ${trekassistMapMammothLarge} 1600w`,
    placeholder: trekassistMapMammothPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistPostTestConcept: {
    src: trekassistPostTestConcept,
    srcSet: `${trekassistPostTestConcept} 1000w, ${trekassistPostTestConceptLarge} 1800w`,
    placeholder: trekassistPostTestConceptPlaceholder,
    width: 1000,
    height: 601,
  },
  trekassistSafetyFlow: {
    src: trekassistSafetyFlow,
    srcSet: `${trekassistSafetyFlow} 1000w, ${trekassistSafetyFlowLarge} 1800w`,
    placeholder: trekassistSafetyFlowPlaceholder,
    width: 1000,
    height: 427,
  },
  trekassistSafetyScreen: {
    src: trekassistSafetyScreen,
    srcSet: `${trekassistSafetyScreen} 800w, ${trekassistSafetyScreenLarge} 1600w`,
    placeholder: trekassistSafetyScreenPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistSettings: {
    src: trekassistSettings,
    srcSet: `${trekassistSettings} 800w, ${trekassistSettingsLarge} 1600w`,
    placeholder: trekassistSettingsPlaceholder,
    width: 800,
    height: 600,
  },
  trekassistGrandPrismaticBg: {
    src: trekassistGrandPrismaticBg,
    srcSet: `${trekassistGrandPrismaticBg} 960w, ${trekassistGrandPrismaticBgLarge} 1920w`,
    placeholder: trekassistGrandPrismaticBgPlaceholder,
    width: 960,
    height: 540,
  },
  trekassistYellowstoneSignBg: {
    src: trekassistYellowstoneSignBg,
    srcSet: `${trekassistYellowstoneSignBg} 960w, ${trekassistYellowstoneSignBgLarge} 1920w`,
    placeholder: trekassistYellowstoneSignBgPlaceholder,
    width: 960,
    height: 540,
  },
};

const backgrounds = {
  'etongue-sensory-platform': {
    src: etongueDeviceContext,
    placeholder: etongueDeviceContextPlaceholder,
    width: 1284,
    height: 856,
    opacity: 0.18,
  },
  'little-lemon': {
    src: knowledgeosHeroBg,
    srcSet: `${knowledgeosHeroBg} 1600w`,
    width: 1600,
    height: 1000,
    opacity: 0.45,
  },
  sayit: {
    src: knowledgeosHeroBg,
    srcSet: `${knowledgeosHeroBg} 1600w`,
    width: 1600,
    height: 1000,
    opacity: 0.45,
  },
  trekassist: {
    src: trekassistYellowstoneSignBg,
    srcSet: `${trekassistYellowstoneSignBg} 960w, ${trekassistYellowstoneSignBgLarge} 1920w`,
    placeholder: trekassistYellowstoneSignBgPlaceholder,
    width: 960,
    height: 540,
    opacity: 0.55,
  },
  knowledgeos: {
    src: knowledgeosHeroBg,
    srcSet: `${knowledgeosHeroBg} 1600w`,
    width: 1600,
    height: 1000,
    opacity: 0.45,
  },
  'porsche-digital-interface': {
    src: porscheBackground,
    srcSet: `${porscheBackground} 1080w, ${porscheBackgroundLarge} 2160w`,
    placeholder: porscheBackgroundPlaceholder,
    opacity: 0.5,
  },
  'posture-checker': {
    src: postureBackground,
    srcSet: `${postureBackground} 1280w, ${postureBackgroundLarge} 2560w`,
    placeholder: postureBackgroundPlaceholder,
    width: 1280,
    height: 800,
    opacity: 0.8,
  },
};

const summaryTextures = {
  'etongue-sensory-platform': [
    {
      src: etongueEarlyPrototypePoster,
      srcSet: `${etongueEarlyPrototypePoster} 1200w`,
      placeholder: etongueEarlyPrototypePlaceholder,
    },
  ],
  'little-lemon': [
    {
      srcSet: `${littleLemonMenu} 375w, ${littleLemonMenuLarge} 750w`,
      placeholder: littleLemonMenuPlaceholder,
    },
    {
      srcSet: `${littleLemonHero} 375w, ${littleLemonHeroLarge} 750w`,
      placeholder: littleLemonHeroPlaceholder,
    },
  ],
  'porsche-digital-interface': [
    {
      srcSet: `${porscheHome} 1280w, ${porscheHomeLarge} 2560w`,
      placeholder: porscheHomePlaceholder,
    },
  ],
  'posture-checker': [
    {
      srcSet: `${postureLogin} 375w, ${postureLoginLarge} 750w`,
      placeholder: postureLoginPlaceholder,
    },
    {
      srcSet: `${postureList} 375w, ${postureListLarge} 750w`,
      placeholder: postureListPlaceholder,
    },
    {
      srcSet: `${postureProgress} 375w, ${postureProgressLarge} 750w`,
      placeholder: postureProgressPlaceholder,
    },
  ],
  sayit: [
    {
      src: sayitPopoverIdle,
      srcSet: `${sayitPopoverIdle} 1124w`,
      placeholder: sayitPopoverIdle,
    },
    {
      src: sayitPopoverRecording,
      srcSet: `${sayitPopoverRecording} 1128w`,
      placeholder: sayitPopoverRecording,
    },
  ],
  trekassist: [
    {
      srcSet: `${trekassistHomeAlert} 375w, ${trekassistHomeAlert} 800w`,
      placeholder: trekassistHomeAlertPlaceholder,
    },
    {
      srcSet: `${trekassistMapMammoth} 375w, ${trekassistMapMammoth} 800w`,
      placeholder: trekassistMapMammothPlaceholder,
    },
  ],
};

const withAssets = project => ({
  ...project,
  background: backgrounds[project.slug],
  path: getProjectPath(project.slug),
  summary: {
    ...project.summary,
    textures: summaryTextures[project.slug] || [],
  },
  sections: project.sections.map(section => ({
    ...section,
    image: typeof section.image === 'string' ? imageAssets[section.image] : section.image,
    images: section.images?.map(image => imageAssets[image]),
  })),
});

export const projects = portfolioProjects.map(withAssets);

export const zhProjects = zhPortfolioProjects.map(withAssets);

export const featuredProjects = featuredProjectSlugs.map(slug =>
  projects.find(project => project.slug === slug)
);

export const zhFeaturedProjects = featuredProjectSlugs.map(slug =>
  zhProjects.find(project => project.slug === slug)
);

export const getProjectBySlug = slug => projects.find(project => project.slug === slug);

export { getProjectPath };
export { withAssets };
