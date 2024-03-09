import * as uuid from 'uuid';
import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import {UIStoryArgs} from '../storybook-types';
import type Select from '.';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<Select, StoryArgsProps> = () => {
  return html`
    <stylospectrum-select
      .options=${[
        {id: uuid.v4(), name: 'Color'},
        {id: uuid.v4(), name: 'Type'},
        {id: uuid.v4(), name: 'Size'},
      ]}
    >
    </stylospectrum-select>
  `;
};

export default {
  title: 'Select',
  component: 'stylospectrum-select',
  tags: ['autodocs'],
} as Meta<Select>;

export const Basic = Template.bind({});
Basic.args = {};
