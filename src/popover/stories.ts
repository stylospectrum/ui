import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {createRef, ref} from 'lit/directives/ref.js';
import type Popover from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import '../button';
import '../input';

type StoryArgsProps = {};

const Template: UIStoryArgs<Popover, StoryArgsProps> = () => {
  const popoverRef = createRef<Popover>();
  const popoverRef_1 = createRef<Popover>();

  return html`
    <stylospectrum-popover ${ref(popoverRef)} header-text="Header">
      <stylospectrum-button
        @click=${() => popoverRef.value?.show()}
        slot="opener"
      >
        Open Popover
      </stylospectrum-button>

      <stylospectrum-input slot="sub-header" show-search> </stylospectrum-input>

      <div style="padding:1rem">
        <stylospectrum-popover ${ref(popoverRef_1)} header-text="Header">
          <stylospectrum-button
            @click=${() => popoverRef_1.value?.show()}
            slot="opener"
          >
            Open Popover 1
          </stylospectrum-button>
          <div style="padding:1rem">Content</div>
        </stylospectrum-popover>

        <stylospectrum-button @click=${() => popoverRef.value?.hide()}>
          Close
        </stylospectrum-button>
      </div>
    </stylospectrum-popover>
  `;
};

export default {
  title: 'Popover',
  component: 'stylospectrum-popover',
  tags: ['autodocs'],
  argTypes: {
    horizontalAlign: {
      control: 'select',
      options: ['Center', 'Right'],
    },
  },
} as Meta<Popover>;

export const Basic = Template.bind({});
Basic.args = {};
