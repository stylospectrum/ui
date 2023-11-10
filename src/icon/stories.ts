import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import '.';
import type Icon from '.';
import './data/accelerated';
import {UIStoryArgs} from '../storybook-types';
import {ifDefined} from 'lit/directives/if-defined.js';

type StoryArgsProps = {
  name: string;
};

const Template: UIStoryArgs<Icon, StoryArgsProps> = (args) => html`
  <stylospectrum-icon
    name="${ifDefined(args.name)}"
    style="font-size: 10px"
  ></stylospectrum-icon>
`;

export default {
  title: 'Icon',
  component: 'stylospectrum-icon',
  tags: ['autodocs'],
} as Meta<Icon>;

export const Basic = Template.bind({});
Basic.args = {
  name: 'accelerated',
};
