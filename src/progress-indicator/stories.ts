import {ifDefined} from 'lit/directives/if-defined.js';
import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import type ProgressIndicator from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<ProgressIndicator, StoryArgsProps> = (args) => {
  return html`
    <stylospectrum-progress-indicator
      value=${ifDefined(args.value)}
    ></stylospectrum-progress-indicator>
  `;
};

export default {
  title: 'ProgressIndicator',
  component: 'stylospectrum-progress-indicator',
  tags: ['autodocs'],
} as Meta<ProgressIndicator>;

export const Basic = Template.bind({});
Basic.args = {};
