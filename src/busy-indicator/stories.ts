import {Meta} from '@storybook/web-components';
import {html, render} from 'lit';
import type BusyIndicator from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import '../button';

type StoryArgsProps = {};

const Template: UIStoryArgs<BusyIndicator, StoryArgsProps> = (args) => {
  if (args.global) {
    return html`
      <stylospectrum-button
        @click=${() =>
          render(
            html`<stylospectrum-busy-indicator ?global=${true}>
            </stylospectrum-busy-indicator>`,
            document.body
          )}
      >
        Show
      </stylospectrum-button>
    `;
  }

  return html`<stylospectrum-busy-indicator
    .size=${args.size}
  ></stylospectrum-busy-indicator>`;
};

export default {
  title: 'BusyIndicator',
  component: 'stylospectrum-busy-indicator',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['Small', 'Medium'],
    },
  },
} as Meta<BusyIndicator>;

export const Basic = Template.bind({});
Basic.args = {};

export const Global = Template.bind({});
Global.args = {
  global: true,
};
