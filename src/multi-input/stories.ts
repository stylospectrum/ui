import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import type MultiInput from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<MultiInput, StoryArgsProps> = () => {
  return html`
    <stylospectrum-multi-input
      @enter=${(e: CustomEvent) => console.log(e.detail)}
    >
    </stylospectrum-multi-input>
  `;
};

export default {
  title: 'MultiInput',
  component: 'stylospectrum-multi-input',
  tags: ['autodocs'],
} as Meta<MultiInput>;

export const Basic = Template.bind({});
Basic.args = {};
