import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import '.';
import type Checkbox from '.';
import {UIStoryArgs} from '../storybook-types';

type StoryArgsProps = {};

const Template: UIStoryArgs<Checkbox, StoryArgsProps> = (args) => {
  return html`
    <stylospectrum-checkbox
      @change="${(e: InputEvent) => console.log('change:', e.detail)}"
      text=${ifDefined(args.text || undefined)}
      ?checked=${args.checked}
      ?indeterminate=${args.indeterminate}
      ?disabled=${args.disabled}
    >
    </stylospectrum-checkbox>
  `;
};

export default {
  title: 'Checkbox',
  component: 'stylospectrum-checkbox',
  tags: ['autodocs'],
} as Meta<Checkbox>;

export const Basic = Template.bind({});
Basic.args = {};
