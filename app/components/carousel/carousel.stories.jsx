import { Carousel } from '~/components/carousel';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Carousel',
};

export const Images = () => (
  <StoryContainer>
    <Carousel
      style={{ maxWidth: 800, width: '100%' }}
      placeholder="/site-preview.png"
      images={[
        {
          src: '/site-preview.png',
          alt: 'Portfolio site preview',
        },
        {
          src: '/social-image.png',
          alt: 'Portfolio social preview',
        },
      ]}
      width={1920}
      height={1080}
    />
  </StoryContainer>
);
