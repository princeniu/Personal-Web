import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Zhuo (Prince) Niu Components',
    brandUrl: 'https://princeniu.com',
  },
});
