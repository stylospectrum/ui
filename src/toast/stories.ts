import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {ref, createRef} from 'lit/directives/ref.js';
import type Toast from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import '../button';

type StoryArgsProps = {};

const Template: UIStoryArgs<Toast, StoryArgsProps> = () => {
  const toastRef = createRef<Toast>();

  return html`
    <stylospectrum-button @click="${() => toastRef.value?.show()}">
      Show Toast
    </stylospectrum-button>
    <stylospectrum-toast ${ref(toastRef)}> Basic Toast </stylospectrum-toast>
  `;
};

export default {
  title: 'Toast',
  component: 'stylospectrum-toast',
  tags: ['autodocs'],
} as Meta<Toast>;

export const Basic = Template.bind({});
Basic.args = {};
