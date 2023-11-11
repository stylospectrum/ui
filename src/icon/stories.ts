import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import '.';
import type Icon from '.';
import {UIStoryArgs} from '../storybook-types';
import {ifDefined} from 'lit/directives/if-defined.js';

const Template: UIStoryArgs<Icon, {}> = (args) => {
  let iconName = '';

  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    iconName = require(`./data/${args.name}`).default;
  } catch (err) {
    console.log(err);
  }

  return html`
    <stylospectrum-icon
      name="${ifDefined(iconName)}"
      style="color: white"
    ></stylospectrum-icon>
  `;
};

export default {
  title: 'Icon',
  component: 'stylospectrum-icon',
  tags: ['autodocs'],
} as Meta<Icon>;

export const Basic = Template.bind({});
Basic.args = {
  name: 'decline',
};
