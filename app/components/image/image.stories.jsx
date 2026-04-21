import { Image } from '~/components/image';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Image',
};

const imageData = {
  alt: 'Portfolio site preview',
  src: '/site-preview.png',
  width: 960,
  height: 540,
  placeholder: '/site-preview.png',
};

const Story = args => (
  <StoryContainer>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0px, 960px)' }}>
      <Image alt="Portfolio site preview" {...imageData} {...args} />
    </div>
  </StoryContainer>
);

export const Default = Story.bind({});

Default.args = {
  ...imageData,
};

export const Reveal = Story.bind({});

Reveal.args = {
  ...imageData,
  reveal: true,
};
