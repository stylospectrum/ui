import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import '.';
import type Label from '.';
import {UIStoryArgs} from '../storybook-types';

type StoryArgsProps = {};

const Template: UIStoryArgs<Label, StoryArgsProps> = (args) => {
  return html`
    <stylospectrum-label
      ?show-colon="${args.showColon}"
      ?required="${args.required}"
    >
      Label
    </stylospectrum-label>
  `;
};

export default {
  title: 'Label',
  component: 'stylospectrum-label',
  tags: ['autodocs'],
} as Meta<Label>;

export const Basic = Template.bind({});
Basic.args = {};
