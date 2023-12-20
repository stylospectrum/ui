import {html} from 'lit';
import {createRef, ref} from 'lit/directives/ref.js';
import type Form from '.';
import type Input from '../input';
import type Link from '../link';
import '.';
import './form-item';
import '../input';
import '../checkbox';
import '../button';
import '../link';

const Template = () => {
  const formRef = createRef<Form>();
  const passwordRef = createRef<Input>();
  const forgotPassRef = createRef<Link>();
  const createAnAccRef = createRef<Link>();

  return html`
    <stylospectrum-form ${ref(formRef)} style="width: 27.75rem; display:block">
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
        <stylospectrum-input
          style="width: 100%"
          @keydown="${() => {
            requestAnimationFrame(() => {
              passwordRef.value?.shadowRoot?.querySelector('input')?.focus();
            });
          }}"
        ></stylospectrum-input>
      </stylospectrum-form-item>

      <stylospectrum-form-item
        label="Password"
        name="password"
        .rules="${[{required: true, message: 'Enter your password'}]}"
      >
        <stylospectrum-link
          ${ref(forgotPassRef)}
          slot="suffix-label"
          @keydown="${() => {
            requestAnimationFrame(() => {
              createAnAccRef.value?.shadowRoot?.querySelector('a')?.focus();
            });
          }}"
        >
          Forgot your password?
        </stylospectrum-link>
        <stylospectrum-input
          style="width: 100%"
          ${ref(passwordRef)}
          type="Password"
        >
        </stylospectrum-input>
      </stylospectrum-form-item>

      <stylospectrum-form-item name="keep-me-signed-in">
        <stylospectrum-checkbox text="Keep me signed in">
        </stylospectrum-checkbox>
      </stylospectrum-form-item>
    </stylospectrum-form>

    <stylospectrum-button
      @click=${async () => console.log(await formRef.value?.validateFields())}
      @keydown="${() => {
        requestAnimationFrame(() => {
          forgotPassRef.value?.shadowRoot?.querySelector('a')?.focus();
        });
      }}"
    >
      Submit
    </stylospectrum-button>
    <br />
    <stylospectrum-link ${ref(createAnAccRef)}>
      Create an account!
    </stylospectrum-link>
  `;
};

export default {
  title: 'Form',
  component: 'stylospectrum-form',
  tags: ['autodocs'],
};

export const Basic = Template.bind({});
