import {Meta} from '@storybook/web-components';
import {html} from 'lit';
import type Link from '.';
import {UIStoryArgs} from '../storybook-types';
import '.';

type StoryArgsProps = {};

const Template: UIStoryArgs<Link, StoryArgsProps> = (args) => {
  return html`
    <stylospectrum-link
      href=${args.href}
      target=${args.target}
      ?disabled=${args.disabled}
      @click=${() => console.log('clicked')}
    >
      Link
    </stylospectrum-link>
  `;
};

export default {
  title: 'Link',
  component: 'stylospectrum-link',
  tags: ['autodocs'],
} as Meta<Link>;

export const Basic = Template.bind({});
Basic.args = {};
