import {ContextProvider} from '@lit/context';
import {LitElement, TemplateResult, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ValueState} from '../types';
import Input from '../input';
import type FormItem from './form-item';
import type FormList from './form-list';
import {formContext} from './context';
import {cloneByNamePathList, setValue} from './utils';
import {type Store} from './interface';

@customElement('stylospectrum-form')
class Form extends LitElement {
  private _provider = new ContextProvider(this, {context: formContext});
  private _formItems: FormItem[] = [];
  public list: {[name: string]: FormList} = {};

  /**
   * @type {Store}
   * @defaultValue {}
   * @public
   */
  @property({attribute: 'initial-values', type: Object, reflect: false})
  initialValues!: Store;

  @state()
  store: Store = {};

  getFieldsValue() {
    return cloneByNamePathList(
      this.store,
      this._formItems.map((el) => el.getNamePath())
    );
  }

  setFieldsValue(store: Store) {
    const formItems = Object.fromEntries(
      this._formItems.map((el) => [el.getFieldId(), el])
    );
    const formList = Object.fromEntries(
      Object.values(this.list).map((el) => [el.name, el])
    );

    Object.keys(store).forEach((key) => {
      if (formItems?.[key]) {
        formItems[key].value = store[key]!;
        this.store = setValue(
          this.store,
          formItems[key].getNamePath(),
          store[key]
        );
      }

      if (formList[key]) {
        formList[key].values = store[key]!;
        this.store = setValue(this.store, [formList[key].name], store[key]);
      }
    });
  }

  resetFields() {
    this.setFieldsValue(this.initialValues);

    this._formItems.forEach((item) => {
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
      await Promise.all(this._formItems.map((el) => el.validateRules()));
    } catch (e) {
      hasError = true;
    }

    if (!hasError) {
      return this.getFieldsValue();
    }

    return null;
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this.store = this.initialValues;
    this._provider.setValue({
      getFormItems: () => this._formItems,
      getStore: () => this.store,
      setStore: (namePath, value) => {
        this.store = setValue(this.store, namePath, value);
      },
      registerField: (formItem) => {
        this._formItems.push(formItem);

        return () => {
          this._formItems = this._formItems.filter((el) => el !== formItem);

          if (!formItem._formListConsumer) {
            setValue(this.store, formItem.getNamePath(), undefined, true);
          }
        };
      },
      registerList: (name, entity) => {
        this.list[name] = entity;

        return () => {
          delete this.list[name];
        };
      },
    });
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
