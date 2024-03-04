import {html} from 'lit';
import {createRef, ref} from 'lit/directives/ref.js';
import {isTabNext} from '../utils/Keys';
import type Form from '.';
import type Input from '../input';
import type Link from '../link';
import '.';
import './form-item';
import './form-list';
import '../input';
import '../checkbox';
import '../button';
import '../link';
import '../multi-input';
import '../textarea';
import '../icon/data/less';

export default {
  title: 'Form',
  component: 'stylospectrum-form',
  tags: ['autodocs'],
};

export const LoginForm = () => {
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
          @keydown="${(e: KeyboardEvent) => {
            if (isTabNext(e)) {
              requestAnimationFrame(() => {
                passwordRef.value?.shadowRoot?.querySelector('input')?.focus();
              });
            }
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

export const BotEntityForm = () => {
  const formRef = createRef<Form>();

  return html`
    <stylospectrum-form
      ${ref(formRef)}
      .initialValues=${{
        name: 'size',
        options: [
          {
            id: '1',
            name: 'XL',
            synonyms: [{id: '2', name: 'extra large'}],
          },
          {
            id: '2',
            name: 'L',
            synonyms: [{id: '2', name: 'large'}],
          },
        ],
      }}
      style="width: 27.75rem; display:block"
    >
      <stylospectrum-form-item
        label="Name"
        name="name"
        .rules="${[{required: true, message: 'Enter your name'}]}"
      >
        <stylospectrum-input></stylospectrum-input>
      </stylospectrum-form-item>

      <div style="display:flex;gap:.5rem">
        <div
          style="color: #FFF;font-size: 0.875rem;text-align:center;width: 13.75rem;"
        >
          Option
        </div>

        <div
          style="color: #FFF;font-size: 0.875rem;text-align:center;width: 18.75rem;"
        >
          Synonyms
        </div>
      </div>

      <stylospectrum-form-list
        name="options"
        .renderChild=${(name: number, value: Record<string, any>) => {
          return html`<div style="display:flex;gap:.5rem">
            <stylospectrum-form-item .name=${[name, 'name']}>
              <stylospectrum-input></stylospectrum-input>
            </stylospectrum-form-item>

            <stylospectrum-form-item .name=${[name, 'synonyms']}>
              <stylospectrum-multi-input></stylospectrum-multi-input>
            </stylospectrum-form-item>

            <stylospectrum-button
              icon="less"
              @click=${() => {
                formRef.value?.list.options.delete(name);
                console.log(value);
              }}
            ></stylospectrum-button>
          </div> `;
        }}
      >
      </stylospectrum-form-list>
    </stylospectrum-form>

    <stylospectrum-button @click=${() => formRef.value?.list.options.add()}>
      Add
    </stylospectrum-button>

    <stylospectrum-button
      @click=${async () => console.log(await formRef.value?.validateFields())}
    >
      Submit
    </stylospectrum-button>

    <stylospectrum-button
      @click=${() =>
        formRef.value?.setFieldsValue({
          name: 'color',
          options: [
            {
              id: '1',
              name: 'blue',
              synonyms: [],
            },
          ],
        })}
    >
      set field values
    </stylospectrum-button>

    <stylospectrum-button
      @click=${() => console.log(formRef.value?.resetFields())}
    >
      Reset field
    </stylospectrum-button>
  `;
};
