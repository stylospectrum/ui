import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {UIStoryArgs} from '../storybook-types';
import type MessageStrip from '.';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<MessageStrip, StoryArgsProps> = () => {
  return html`<stylospectrum-message-strip>
    MessageStrip
  </stylospectrum-message-strip>`;
};

export default {
  title: 'MessageStrip',
  component: 'stylospectrum-message-strip',
  tags: ['autodocs'],
} as Meta<MessageStrip>;

export const Basic = Template.bind({});
Basic.args = {};
