import { themes } from '@storybook/theming'

import '../src/styles/global.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    },
    parameters: {
      theme: themes.dark
    }
  },
};

export default preview;
