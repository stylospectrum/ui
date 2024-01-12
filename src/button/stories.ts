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
