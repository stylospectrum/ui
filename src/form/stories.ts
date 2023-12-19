import {html} from 'lit';
import {createRef, ref} from 'lit/directives/ref.js';
import type Form from '.';
import '.';
import './form-item';
import '../input';
import '../checkbox';
import '../button';

const Template = () => {
  const formRef = createRef<Form>();

  return html`
    <stylospectrum-form ${ref(formRef)}>
      <stylospectrum-form-item
        label="Email"
        name="email"
        .rules="${[
          {required: true, message: 'Enter your email'},
          {
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message:
              'Wrong or Invalid email address. Please correct and try again',
          },
        ]}"
      >
        <stylospectrum-input></stylospectrum-input>
      </stylospectrum-form-item>

      <stylospectrum-form-item
        label="Password"
        name="password"
        .rules="${[{required: true, message: 'Enter your password'}]}"
      >
        <stylospectrum-input type="Password"></stylospectrum-input>
      </stylospectrum-form-item>

      <stylospectrum-form-item name="keep-me-signed-in">
        <stylospectrum-checkbox text="Keep me signed in">
        </stylospectrum-checkbox>
      </stylospectrum-form-item>

      <stylospectrum-button
        @click=${async () => console.log(await formRef.value?.validateFields())}
      >
        Submit
      </stylospectrum-button>
    </stylospectrum-form>
  `;
};

export default {
  title: 'Form',
  component: 'stylospectrum-form',
  tags: ['autodocs'],
};

export const Basic = Template.bind({});
