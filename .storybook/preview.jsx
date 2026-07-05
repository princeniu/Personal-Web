import { useEffect } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, themeStyles } from '../app/components/theme-provider';
import '../app/reset.module.css';
import '../app/global.module.css';
import './preview.css';

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme;

    useEffect(() => {
      document.body.dataset.theme = theme;
    }, [theme]);

    return (
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <style>{themeStyles}</style>
          <div id="story-root" className="storyRoot">
            <Story />
          </div>
        </ThemeProvider>
      </MemoryRouter>
    );
  },
];

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'paintbrush',
      items: ['light', 'dark'],
    },
  },
};

export const parameters = {
  layout: 'fullscreen',
  controls: { hideNoControlsWarning: true },
};
