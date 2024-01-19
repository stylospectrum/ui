import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {createRef, ref} from 'lit/directives/ref.js';
import type Popover from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import '../list/list-item';
import '../button';
import '../input';
import '../icon/data/account';

type StoryArgsProps = {};

const Template: UIStoryArgs<Popover, StoryArgsProps> = () => {
  const popoverRef = createRef<Popover>();
  const popoverRef_1 = createRef<Popover>();

  return html`
    <div
      style="display:flex;justify-content: center;align-items: center;height:500px"
    >
      <stylospectrum-popover
        ${ref(popoverRef)}
        header-text="Header"
        placement="Left"
        hide-footer
      >
        <stylospectrum-button
          @click=${() => popoverRef.value?.show()}
          slot="opener"
        >
          Open Popover
        </stylospectrum-button>

        <stylospectrum-input slot="sub-header" show-search>
        </stylospectrum-input>

        <div>
          <stylospectrum-popover ${ref(popoverRef_1)}>
            <stylospectrum-list-item
              slot="opener"
              icon="account"
              @click=${() => popoverRef_1.value?.show()}
            >
              Open Popover
            </stylospectrum-list-item>
            <div style="padding:1rem;width:20rem">Content</div>

            <stylospectrum-button slot="ok-button">OK</stylospectrum-button>
            <stylospectrum-button
              slot="cancel-button"
              type="Tertiary"
              @click=${() => popoverRef_1.value?.hide()}
            >
              Cancel
            </stylospectrum-button>
          </stylospectrum-popover>

          <stylospectrum-list-item
            icon="account"
            @click=${() => popoverRef.value?.hide()}
          >
            Close Popover
          </stylospectrum-list-item>
        </div>
      </stylospectrum-popover>
    </div>
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
