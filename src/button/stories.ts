import {Meta} from '@storybook/web-components';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {html} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import '.';
import type Button from '.';
import {UIStoryArgs} from '../storybook-types';

const handleClick = () => {
  console.log('123');
};

type StoryArgsProps = {
  slot: string;
};

const Template: UIStoryArgs<Button, StoryArgsProps> = (args) => html`
  <stylospectrum-button
    ?disabled=${ifDefined(args.disabled)}
    @click=${handleClick}
  >
    ${unsafeHTML(args.slot)}
  </stylospectrum-button>
`;

export default {
  title: 'Button',
  component: 'stylospectrum-button',
  tags: ['autodocs'],
} as Meta<Button>;

export const Basic = Template.bind({});
Basic.args = {
  slot: 'Button Text',
};
