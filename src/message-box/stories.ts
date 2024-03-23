import {Meta} from '@storybook/web-components';
import {html, render} from 'lit';
import type MessageBox from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<MessageBox, StoryArgsProps> = () => {
  return html`
    <stylospectrum-button
      @click=${() =>
        render(
          html` <stylospectrum-message-box header-text="Delete block">
            Are you sure you want to delete selected entity?

            <stylospectrum-button slot="ok-button">
              Confirm
            </stylospectrum-button>
            <stylospectrum-button slot="cancel-button" type="Tertiary">
              Cancel
            </stylospectrum-button>
          </stylospectrum-message-box>`,
          document.body
        )}
    >
      Open message box
    </stylospectrum-button>
  `;
};

export default {
  title: 'MessageBox',
  component: 'stylospectrum-message-box',
  tags: ['autodocs'],
} as Meta<MessageBox>;

export const Basic = Template.bind({});
Basic.args = {};
