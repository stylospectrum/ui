import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {createRef, ref} from 'lit/directives/ref.js';
import type MenuButton from '.';
import {UIStoryArgs} from '../storybook-types';
import {IMenu} from '../types';
import '.';
import '../menu';
import '../menu/menu-item';
import '../icon/data/shield';
import '../icon/data/sales-order';
import '../icon/data/addresses';
import '../icon/data/credit-card';
import '../icon/data/customer';

type StoryArgsProps = {};

const Template: UIStoryArgs<MenuButton, StoryArgsProps> = () => {
  const menuRef = createRef<IMenu>();

  return html` <stylospectrum-menu-button
      @button-click=${() => console.log('button click')}
      @arrow-click=${(e: CustomEvent) => menuRef.value?.showAt(e.detail)}
    >
      default
    </stylospectrum-menu-button>
    <stylospectrum-menu ${ref(menuRef)}>
      <stylospectrum-menu-item
        icon="shield"
        @click=${() => console.log('Login & security click')}
      >
        Login & security
      </stylospectrum-menu-item>
      <stylospectrum-menu-item icon="sales-order">
        Your Orders
      </stylospectrum-menu-item>
      <stylospectrum-menu-item icon="addresses">
        Your Addresses
      </stylospectrum-menu-item>
      <stylospectrum-menu-item icon="credit-card">
        Your Payments
      </stylospectrum-menu-item>
      <stylospectrum-menu-item icon="customer">
        Your Profiles
      </stylospectrum-menu-item>
    </stylospectrum-menu>`;
};

export default {
  title: 'MenuButton',
  component: 'stylospectrum-menu-button',
  tags: ['autodocs'],
} as Meta<MenuButton>;

export const Basic = Template.bind({});
Basic.args = {};
