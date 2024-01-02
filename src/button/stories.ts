import {Meta} from '@storybook/web-components';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {html} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import '.';
import type Button from '.';
import {UIStoryArgs} from '../storybook-types';

const handleClick = () => {
  console.log('clicked!!');
};

type StoryArgsProps = {
  slot: string;
};

const Template: UIStoryArgs<Button, StoryArgsProps> = (args) => {
  let iconName = '';

  if (args.icon) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      iconName = require(`../icon/data/${args.icon}`).default;
    } catch (err) {
      console.log(err);
    }
  }

  return html`
    <stylospectrum-button
      ?disabled=${args.disabled}
      type=${ifDefined(args.type)}
      icon=${ifDefined(iconName)}
      html-type=${ifDefined(args.htmlType)}
      @click=${handleClick}
    >
      ${unsafeHTML(args.slot)}
    </stylospectrum-button>
  `;
};

export default {
  title: 'Button',
  component: 'stylospectrum-button',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['Primary', 'Secondary', 'Tertiary'],
    },
    htmlType: {
      control: 'select',
      options: ['Button', 'Submit', 'Reset'],
    },
  },
} as Meta<Button>;

export const Basic = Template.bind({});
Basic.args = {
  slot: 'Button',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: 'decline',
};

export const IconSvg = () => {
  return html`<stylospectrum-button
    type="Secondary"
    style="width: auto; height: 40px"
    focused
    disable-internal-focus
  >
    <span style="margin-right:.5rem">Chat with Luna</span>
    <svg width="24" height="24" viewBox="0 0 24 24" slot="icon" fill="#4DB1FF">
      <path
        d="M12,1 C17.0350586,1 21.2799931,4.38292334 22.5858962,8.9998627 L23,9 C23.5522847,9 24,9.44771525 24,10 L24,14 C24,14.5522847 23.5522847,15 23,15 L22.5856141,15.0011345 C21.4795303,18.9102077 18.2664974,21.9344751 14.2509632,22.7694889 L14.0004156,22.8185474 L13.7686128,22.8585687 L13.3891283,22.9131245 L13.0250841,22.9528672 L12.7416636,22.9753919 L12.2884075,22.9962926 L12,23 C11.5209462,23 11.0490449,22.9693767 10.5861468,22.909981 C10.2402198,22.7529831 10,22.4045447 10,22 C10,21.4477153 10.4477153,21 11,21 L13,21 C13.4849074,21 13.8892034,21.3451385 13.9806325,21.8031601 C18.5544301,20.8852186 22,16.8449873 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 L2,14 C2,14.5522847 1.55228475,15 1,15 C0.487164161,15 0.0644928393,14.6139598 0.00672773133,14.1166211 L0,14 L0,10 C0,9.48716416 0.38604019,9.06449284 0.883378875,9.00672773 L1,9 L1.41410381,8.9998627 C2.72000691,4.38292334 6.96494141,1 12,1 Z M12,4 C16.418278,4 20,7.581722 20,12 C20,16.418278 16.418278,20 12,20 C7.581722,20 4,16.418278 4,12 C4,7.581722 7.581722,4 12,4 Z M12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 Z"
      ></path>
    </svg>
  </stylospectrum-button>`;
};
