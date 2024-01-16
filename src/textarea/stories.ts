import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import type Textarea from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<Textarea, StoryArgsProps> = (args) => {
  return html`
    <stylospectrum-textarea
      @change="${(e: InputEvent) => console.log('change:', e.detail)}"
      .value=${args.value || ''}
      .placeholder=${args.placeholder || ''}
      value-state-message=${ifDefined(args.valueStateMessage)}
      value-state=${ifDefined(args.valueState)}
      ?disabled=${args.disabled}
      ?growing=${args.growing}
    >
    </stylospectrum-textarea>
  `;
};

export default {
  title: 'Textarea',
  component: 'stylospectrum-textarea',
  tags: ['autodocs'],
  argTypes: {
    valueState: {
      control: 'select',
      options: ['None', 'Error'],
    },
  },
} as Meta<Textarea>;

export const Basic = Template.bind({});
Basic.args = {};
