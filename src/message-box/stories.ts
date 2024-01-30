import {Meta} from '@storybook/web-components';
import {createRef, ref} from 'lit/directives/ref.js';
import {html} from 'lit';
import type MessageBox from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<MessageBox, StoryArgsProps> = () => {
  const messageBoxRef = createRef<MessageBox>();

  return html`
    <stylospectrum-button @click=${() => messageBoxRef.value?.show()}>
      Open Popover
    </stylospectrum-button>

    <stylospectrum-message-box header-text="Delete block" ${ref(messageBoxRef)}>
      Are you sure you want to delete selected entity?

      <stylospectrum-button
        slot="ok-button"
        @click=${() => messageBoxRef.value?.hide()}
      >
        Confirm
      </stylospectrum-button>
      <stylospectrum-button
        slot="cancel-button"
        type="Tertiary"
        @click=${() => messageBoxRef.value?.hide()}
      >
        Cancel
      </stylospectrum-button>
    </stylospectrum-message-box>
  `;
};

export default {
  title: 'MessageBox',
  component: 'stylospectrum-message-box',
  tags: ['autodocs'],
} as Meta<MessageBox>;

export const Basic = Template.bind({});
Basic.args = {};
