import {createRef, ref} from 'lit/directives/ref.js';
import {html} from 'lit';
import {Meta} from '@storybook/web-components';
import type Dialog from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import '../input';

type StoryArgsProps = {};

const Template: UIStoryArgs<Dialog, StoryArgsProps> = (args) => {
  const dialogRef = createRef<Dialog>();

  return html`
    <stylospectrum-button @click=${() => dialogRef.value?.show()}>
      Open Popover
    </stylospectrum-button>

    <stylospectrum-dialog
      header-text=${args.headerText}
      ${ref(dialogRef)}
      style="top:0.375rem;right:1rem"
    >
      Content

      <stylospectrum-dialog
        header-text="Header"
        hide-footer
        slot="second-dialog"
        style="display:flex;right: 22rem"
      >
        Content
      </stylospectrum-dialog>

      <stylospectrum-input
        slot="sub-header"
        style="width:100%"
      ></stylospectrum-input>

      <stylospectrum-button
        slot="ok-button"
        type="Tertiary"
        @click=${() => dialogRef.value?.hide()}
      >
        Save
      </stylospectrum-button>
      <stylospectrum-button
        slot="cancel-button"
        @click=${() => dialogRef.value?.hide()}
      >
        Close
      </stylospectrum-button>
    </stylospectrum-dialog>
  `;
};

export default {
  title: 'Dialog',
  component: 'stylospectrum-dialog',
  tags: ['autodocs'],
} as Meta<Dialog>;

export const Basic = Template.bind({});
Basic.args = {};
