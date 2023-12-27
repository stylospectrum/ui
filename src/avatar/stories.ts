import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import type Avatar from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<Avatar, StoryArgsProps> = (args) => {
  return html`
    <stylospectrum-avatar
      initials=${args.initials}
      ?interactive=${args.interactive}
    >
    </stylospectrum-avatar>
  `;
};

export default {
  title: 'Avatar',
  component: 'stylospectrum-avatar',
  tags: ['autodocs'],
} as Meta<Avatar>;

export const Basic = Template.bind({});
Basic.args = {};
