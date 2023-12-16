import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import '.';
import type Input from '.';
import {UIStoryArgs} from '../storybook-types';

type StoryArgsProps = {};

const Template: UIStoryArgs<Input, StoryArgsProps> = (args) => {
  return html`
    <stylospectrum-input
      @change="${(e: InputEvent) => console.log('change:', e.detail)}"
      @enter=${(e: InputEvent) => console.log('enter:', e.detail)}
      .value=${ifDefined(args.value)}
      .placeholder=${ifDefined(args.placeholder)}
      type=${ifDefined(args.type)}
      value-state-message=${ifDefined(args.valueStateMessage)}
      value-state=${ifDefined(args.valueState)}
      ?allow-clear=${args.allowClear}
      ?disabled=${args.disabled}
    >
    </stylospectrum-input>
  `;
};

export default {
  title: 'Input',
  component: 'stylospectrum-input',
  tags: ['autodocs'],
  argTypes: {
    valueState: {
      control: 'select',
      options: ['None', 'Error'],
    },
    type: {
      control: 'select',
      options: ['Text', 'Email', 'Number', 'Password', 'URL'],
    },
  },
} as Meta<Input>;

export const Basic = Template.bind({});
Basic.args = {};
