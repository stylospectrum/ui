import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import type MenuButton from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<MenuButton, StoryArgsProps> = () => {
  return html` <stylospectrum-menu-button
    @button-click=${() => console.log('button click')}
    @arrow-click=${() => console.log('arrow click')}
  >
    default
  </stylospectrum-menu-button>`;
};

export default {
  title: 'MenuButton',
  component: 'stylospectrum-menu-button',
  tags: ['autodocs'],
} as Meta<MenuButton>;

export const Basic = Template.bind({});
Basic.args = {};
