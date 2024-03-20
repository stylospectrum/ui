import {Meta} from '@storybook/web-components';
import {html, render} from 'lit';
import type BusyIndicator from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import '../button';

type StoryArgsProps = {};

const Template: UIStoryArgs<BusyIndicator, StoryArgsProps> = () => {
  return html`
    <stylospectrum-button
      @click=${() =>
        render(
          html`<stylospectrum-busy-indicator></stylospectrum-busy-indicator>`,
          document.body
        )}
    >
      Show
    </stylospectrum-button>
  `;
};

export default {
  title: 'BusyIndicator',
  component: 'stylospectrum-busy-indicator',
  tags: ['autodocs'],
} as Meta<BusyIndicator>;

export const Basic = Template.bind({});
Basic.args = {};
