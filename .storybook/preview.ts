import customElements from './custom-elements.json';
import {
  setCustomElementsManifest,
  type Preview,
} from '@storybook/web-components';

if (customElements?.modules) {
  setCustomElementsManifest(customElements);
}

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
