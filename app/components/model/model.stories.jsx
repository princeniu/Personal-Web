import phoneTexture2Large from '~/assets/posture-tracker-large.jpg';
import phoneTexture2Placeholder from '~/assets/posture-tracker-placeholder.jpg';
import phoneTexture2 from '~/assets/posture-tracker.jpg';
import phoneTexture3Large from '~/assets/posture-progress-large.jpg';
import phoneTexture3Placeholder from '~/assets/posture-progress-placeholder.jpg';
import phoneTexture3 from '~/assets/posture-progress.jpg';
import phoneTextureLarge from '~/assets/posture-login-large.jpg';
import phoneTexturePlaceholder from '~/assets/posture-login-placeholder.jpg';
import phoneTexture from '~/assets/posture-login.jpg';
import laptopTexture from '~/assets/porsche-interface-home.jpg';
import laptopTextureLarge from '~/assets/porsche-interface-home-large.jpg';
import laptopTexturePlaceholder from '~/assets/porsche-interface-home-placeholder.jpg';
import { Model } from '~/components/model';
import { StoryContainer } from '../../../.storybook/story-container';
import { deviceModels } from './device-models';

export default {
  title: 'Model',
};

const modelStyle = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };

export const Phone = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 11.5 }}
      alt="Phone models"
      models={[
        {
          ...deviceModels.phone,
          position: { x: -0.6, y: 0.8, z: 0.1 },
          texture: {
            srcSet: `${phoneTexture} 375w, ${phoneTextureLarge} 750w`,
            placeholder: phoneTexturePlaceholder,
          },
        },
        {
          ...deviceModels.phone,
          position: { x: 0.6, y: -0.8, z: 0.4 },
          texture: {
            srcSet: `${phoneTexture2} 375w, ${phoneTexture2Large} 750w`,
            placeholder: phoneTexture2Placeholder,
          },
        },
        {
          ...deviceModels.phone,
          position: { x: 0.6, y: 0.8, z: 0.6 },
          texture: {
            srcSet: `${phoneTexture3} 375w, ${phoneTexture3Large} 750w`,
            placeholder: phoneTexture3Placeholder,
          },
        },
      ]}
    />
  </StoryContainer>
);

export const Laptop = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 8 }}
      alt="Laptop model"
      models={[
        {
          ...deviceModels.laptop,
          position: { x: 0, y: 0, z: 0 },
          texture: {
            srcSet: `${laptopTexture} 800w, ${laptopTextureLarge} 1920w`,
            placeholder: laptopTexturePlaceholder,
          },
        },
      ]}
    />
  </StoryContainer>
);
