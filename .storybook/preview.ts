import customElements from './custom-elements.json';
import {
  setCustomElementsManifest,
  type Preview,
} from '@storybook/web-components';
import '../src/style/index.scss';

if (customElements?.modules) {
  setCustomElementsManifest(customElements);
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
