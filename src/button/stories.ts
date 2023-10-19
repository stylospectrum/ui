import {html} from 'lit';
import '.';

const handleClick = () => {
  console.log('123');
};

const ButtonStory = () => html`
  <stylospectrum-button @click=${handleClick}> Hello </stylospectrum-button>
`;

export default {
  title: 'Button',
  component: 'Button',
  tags: ['autodocs'],
};

export const Basic = {
  render: () => ButtonStory(),
};
