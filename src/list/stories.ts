import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import type List from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';
import './list-item';
import '../icon/data/shield';
import '../icon/data/sales-order';
import '../icon/data/addresses';
import '../icon/data/credit-card';
import '../icon/data/customer';

type StoryArgsProps = {};

const Template: UIStoryArgs<List, StoryArgsProps> = () => {
  return html`
    <stylospectrum-list
      style="width: 200px;"
      @select=${(e: CustomEvent) => console.log('id:', e.detail)}
    >
      <stylospectrum-list-item icon="shield" id="shield">
        Login & security
      </stylospectrum-list-item>
      <stylospectrum-list-item icon="sales-order" id="sales-order">
        Your Orders
      </stylospectrum-list-item>
      <stylospectrum-list-item icon="addresses" id="addresses">
        Your Addresses
      </stylospectrum-list-item>
      <stylospectrum-list-item icon="credit-card" id="credit-card">
        Your Payments
      </stylospectrum-list-item>
      <stylospectrum-list-item icon="customer" id="customer">
        Your Profiles
      </stylospectrum-list-item>
    </stylospectrum-list>
  `;
};

export default {
  title: 'List',
  component: 'stylospectrum-list',
  tags: ['autodocs'],
} as Meta<List>;

export const Basic = Template.bind({});
Basic.args = {};
