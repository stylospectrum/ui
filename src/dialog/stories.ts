import {html, render} from 'lit';
import {Meta} from '@storybook/web-components';
import type Dialog from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import '../input';

type StoryArgsProps = {};

const Template: UIStoryArgs<Dialog, StoryArgsProps> = () => {
  return html`
    <style>
      .first-dialog::part(wrap) {
        top: 0.375rem;
        right: 1rem;
      }

      .second-dialog::part(wrap) {
        right: 22rem;
      }
    </style>
    <stylospectrum-button
      @click=${() =>
        render(
          html`<stylospectrum-dialog header-text="Header" class="first-dialog">
            Content

            <stylospectrum-dialog
              header-text="Header"
              hide-footer
              slot="second-dialog"
              class="second-dialog"
              hide-mask
            >
              Content
            </stylospectrum-dialog>

            <stylospectrum-input
              slot="sub-header"
              style="width:100%"
            ></stylospectrum-input>

            <stylospectrum-button slot="ok-button"> Save </stylospectrum-button>
            <stylospectrum-button slot="cancel-button" type="Tertiary">
              Close
            </stylospectrum-button>
          </stylospectrum-dialog>`,
          document.body
        )}
    >
      Open Dialog
    </stylospectrum-button>
  `;
};

export default {
  title: 'Dialog',
  component: 'stylospectrum-dialog',
  tags: ['autodocs'],
} as Meta<Dialog>;

export const Basic = Template.bind({});
Basic.args = {};
