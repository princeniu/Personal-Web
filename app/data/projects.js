import {
  featuredProjectSlugs,
  getProjectPath,
  portfolioProjects,
} from './project-content';

import porscheBackgroundLarge from '~/assets/spr-background-large.jpg';
import porscheBackgroundPlaceholder from '~/assets/spr-background-placeholder.jpg';
import porscheBackground from '~/assets/spr-background.jpg';
import porscheFlowchartLarge from '~/assets/flowchart-large.jpg';
import porscheFlowchartPlaceholder from '~/assets/flowchart-placeholder.jpg';
import porscheFlowchart from '~/assets/flowchart.jpg';
import porscheHomeLarge from '~/assets/interface-home-large.jpg';
import porscheHomePlaceholder from '~/assets/interface-home-placeholder.jpg';
import porscheHome from '~/assets/interface-home.jpg';
import porscheOutcomeLarge from '~/assets/porsche-background-large.jpg';
import porscheOutcomePlaceholder from '~/assets/porsche-background-placeholder.jpg';
import porscheOutcome from '~/assets/porsche-background.jpg';
import porschePrototypeLarge from '~/assets/interface-prototype2-large.jpg';
import porschePrototypePlaceholder from '~/assets/interface-prototype2-placeholder.jpg';
import porschePrototype from '~/assets/interface-prototype2.jpg';
import porscheWireframeMainLarge from '~/assets/interface-wireframe-large.jpg';
import porscheWireframeMainPlaceholder from '~/assets/interface-wireframe-placeholder.jpg';
import porscheWireframeMain from '~/assets/interface-wireframe.jpg';
import porscheWireframeNavigationLarge from '~/assets/interface-wireframe2-large.jpg';
import porscheWireframeNavigationPlaceholder from '~/assets/interface-wireframe2-placeholder.jpg';
import porscheWireframeNavigation from '~/assets/interface-wireframe2.jpg';

import postureActivityLarge from '~/assets/activity-diagram-large.jpg';
import postureActivityPlaceholder from '~/assets/activity-diagram-placeholder.jpg';
import postureActivity from '~/assets/activity-diagram.jpg';
import postureAppLarge from '~/assets/posture-checker-app-large.png';
import postureAppPlaceholder from '~/assets/posture-checker-app-placeholder.png';
import postureApp from '~/assets/posture-checker-app.png';
import postureArchitectureLarge from '~/assets/block-diagram-large.jpg';
import postureArchitecturePlaceholder from '~/assets/block-diagram-placeholder.jpg';
import postureArchitecture from '~/assets/block-diagram.jpg';
import postureBackgroundLarge from '~/assets/background-large.jpg';
import postureBackgroundPlaceholder from '~/assets/background-placeholder.jpg';
import postureBackground from '~/assets/background.jpg';
import postureFinalAppLarge from '~/assets/final-app-large.png';
import postureFinalAppPlaceholder from '~/assets/final-app-placeholder.png';
import postureFinalApp from '~/assets/final-app.png';
import postureListLarge from '~/assets/gamestack-list-large.jpg';
import postureListPlaceholder from '~/assets/gamestack-list-placeholder.jpg';
import postureList from '~/assets/gamestack-list.jpg';
import postureLoginLarge from '~/assets/gamestack-login-large.jpg';
import postureLoginPlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import postureLogin from '~/assets/gamestack-login.jpg';
import postureProgressLarge from '~/assets/gamestack-list3-large.jpg';
import postureProgressPlaceholder from '~/assets/gamestack-list3-placeholder.jpg';
import postureProgress from '~/assets/gamestack-list3.jpg';
import posturePrototypeLarge from '~/assets/prototype-large.jpg';
import posturePrototypePlaceholder from '~/assets/prototype-placeholder.jpg';
import posturePrototype from '~/assets/prototype.jpg';
import postureTeamPlaceholder from '~/assets/team-placeholder.jpg';
import postureTeam from '~/assets/team.jpg';
import postureWireframeLarge from '~/assets/wireframe-large.jpg';
import postureWireframePlaceholder from '~/assets/wireframe-placeholder.jpg';
import postureWireframe from '~/assets/wireframe.jpg';

import littleLemonHeroLarge from '~/assets/little-lemon-1-large.jpg';
import littleLemonHeroPlaceholder from '~/assets/little-lemon-1-placeholder.jpg';
import littleLemonHero from '~/assets/little-lemon-1.jpg';
import littleLemonMenuLarge from '~/assets/little-lemon-2-large.jpg';
import littleLemonMenuPlaceholder from '~/assets/little-lemon-2-placeholder.jpg';
import littleLemonMenu from '~/assets/little-lemon-2.jpg';

import sayitBrand from '~/assets/sayit-brand.png';
import sayitPopoverIdle from '~/assets/sayit-popover-idle.png';
import sayitPopoverRecording from '~/assets/sayit-popover-recording.png';
import sayitIphoneMic from '~/assets/sayit-iphone-mic.jpg';

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
import trekassistGrandPrismaticBgLarge from '~/assets/trekassist-grand-prismatic-bg-large.jpg';
import trekassistGrandPrismaticBgPlaceholder from '~/assets/trekassist-grand-prismatic-bg-placeholder.jpg';
import trekassistGrandPrismaticBg from '~/assets/trekassist-grand-prismatic-bg.jpg';
import trekassistYellowstoneSignBgLarge from '~/assets/trekassist-yellowstone-sign-bg-large.jpg';
import trekassistYellowstoneSignBgPlaceholder from '~/assets/trekassist-yellowstone-sign-bg-placeholder.jpg';
import trekassistYellowstoneSignBg from '~/assets/trekassist-yellowstone-sign-bg.jpg';

const imageAssets = {
  littleLemonHero: {
    src: littleLemonHero,
    srcSet: `${littleLemonHero} 800w, ${littleLemonHeroLarge} 1600w`,
    placeholder: littleLemonHeroPlaceholder,
    width: 800,
    height: 500,
  },
  littleLemonMenu: {
    src: littleLemonMenu,
    srcSet: `${littleLemonMenu} 800w, ${littleLemonMenuLarge} 1600w`,
    placeholder: littleLemonMenuPlaceholder,
    width: 800,
    height: 500,
  },
  littleLemonReservation: {
    src: littleLemonHero,
    srcSet: `${littleLemonHero} 800w, ${littleLemonHeroLarge} 1600w`,
    placeholder: littleLemonHeroPlaceholder,
    width: 800,
    height: 500,
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
  'little-lemon': {
    src: littleLemonHero,
    srcSet: `${littleLemonHero} 800w, ${littleLemonHeroLarge} 1600w`,
    placeholder: littleLemonHeroPlaceholder,
    width: 800,
    height: 500,
    opacity: 0.76,
  },
  sayit: {
    src: sayitBrand,
    width: 1600,
    height: 900,
    opacity: 0.35,
  },
  trekassist: {
    src: trekassistYellowstoneSignBg,
    srcSet: `${trekassistYellowstoneSignBg} 960w, ${trekassistYellowstoneSignBgLarge} 1920w`,
    placeholder: trekassistYellowstoneSignBgPlaceholder,
    width: 960,
    height: 540,
    opacity: 0.55,
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
      srcSet: `${sayitPopoverIdle} 375w, ${sayitPopoverIdle} 1124w`,
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

export const featuredProjects = featuredProjectSlugs.map(slug =>
  projects.find(project => project.slug === slug)
);

export const getProjectBySlug = slug => projects.find(project => project.slug === slug);

export { getProjectPath };
