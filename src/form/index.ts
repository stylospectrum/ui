import {LitElement, TemplateResult, html} from 'lit';
import {customElement, queryAssignedElements} from 'lit/decorators.js';
import {ValueState} from '../types';
import Input from '../input';
import FormItem from './form-item';

@customElement('stylospectrum-form')
class Form extends LitElement {
  @queryAssignedElements({flatten: true})
  slotEls!: Array<HTMLElement>;

  getFormItems() {
    return this.slotEls.filter((el) => el instanceof FormItem) as FormItem[];
  }

  getFieldsValue() {
    const values = this.getFormItems().map((el) => [el.name, el.value]);
    return Object.fromEntries(values);
  }

  setFieldsValue(values: {[k: string]: string | undefined}) {
    const formItems = Object.fromEntries(
      this.getFormItems().map((el) => [el.name, el])
    );

    Object.keys(values).forEach((key) => {
      formItems[key].value = values[key]!;
    });
  }

  resetFields() {
    const formItems = this.getFormItems();
    const values = Object.fromEntries(
      this.getFormItems().map((el) => [el.name, undefined])
    );
    this.setFieldsValue(values);

    formItems.forEach((item) => {
      const slot = item.shadowRoot?.querySelector('slot');
      const node = slot?.assignedElements({flatten: true})?.[0];

      if (node instanceof Input) {
        node.valueState = ValueState.None;
        node.valueStateMessage = '';
      }
    });
  }

  async validateFields() {
    let hasError = false;

    try {
      await Promise.all(this.getFormItems().map((el) => el.validateRules()));
    } catch (e) {
      hasError = true;
    }

    if (!hasError) {
      return this.getFieldsValue();
    }

    return null;
  }

  override render(): TemplateResult {
    return html`
      <form class="stylospectrum-form">
        <slot></slot>
      </form>
    `;
  }
}

export default Form;
