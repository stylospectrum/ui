import {LitElement, PropertyValueMap} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {customElement, property, state} from 'lit/decorators.js';
import {ContextProvider, consume} from '@lit/context';
import {
  FormContext,
  FormListContext,
  formContext,
  formListContext,
} from './context';
import {getValue} from './utils';
import type {StoreValue} from './interface';
import type FormItem from './form-item';

@customElement('stylospectrum-form-list')
class FormList extends LitElement {
  /**
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  name!: string | string[];

  /**
   * @type {Function}
   * @defaultValue () => void
   * @public
   */
  @property({type: Function})
  renderChild!: Function;

  /**
   * @type {StoreValue[]}
   * @defaultValue []
   * @public
   */
  @property({type: Array})
  defaultValues: StoreValue[] = [];

  @state()
  values: StoreValue[] = [];

  @state()
  keyManager: {
    keys: number[];
    id: number;
  } = {
    keys: [],
    id: 0,
  };

  @consume({context: formListContext, subscribe: true})
  _formListConsumer!: FormListContext;

  @consume({context: formContext, subscribe: true})
  _formConsumer!: FormContext;

  cancelRegisterFunc: Function | null = null;

  private _provider = new ContextProvider(this, {context: formListContext});

  protected override willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has('name')) {
      this.cancelRegisterFunc?.();
      this.cancelRegisterFunc = this._formConsumer.registerList(
        this.getFieldId(),
        this
      );
      this._provider.setValue({
        listNamePath: this.getNamePath(),
      });
    }

    if (_changedProperties.has('values')) {
      requestAnimationFrame(() => {
        const formItemArr: FormItem[] = [];

        this._formConsumer.getFormItems().forEach((el) => {
          if (el.listName === this.getFieldId()) {
            formItemArr.push(el);
          }
        });

        if (formItemArr.length > 0) {
          const formItems = Object.fromEntries(
            formItemArr.map((el) => [el.getFieldId(), el])
          );

          this.values.forEach((value, index) => {
            if (value && typeof value === 'object') {
              Object.keys(value).map((key) => {
                if (formItems[`${this.getFieldId()}_${index}_${key}`]) {
                  formItems[`${this.getFieldId()}_${index}_${key}`].value =
                    value[key];
                }
              });
            }
          });
        }
      });
    }
  }

  private getNamePath() {
    const namePath = Array.isArray(this.name) ? this.name : [this.name];

    return this._formListConsumer
      ? [...this._formListConsumer.listNamePath, ...namePath]
      : namePath;
  }

  private getFieldId() {
    return this.getNamePath().join('_');
  }

  private getValues() {
    const values: StoreValue[] = getValue(
      this.getNamePath(),
      this._formConsumer.getStore()
    );
    return values || this.defaultValues;
  }

  public add(value: Record<string, any> | null = null) {
    this.values = [...this.getValues(), value];
    this._formConsumer.setStore(this.getNamePath(), this.values);
    this.keyManager = {
      keys: [...this.keyManager.keys, this.keyManager.id],
      id: this.keyManager.id + 1,
    };
  }

  public delete(index: number) {
    this.values = this.getValues().filter((_, i) => i !== index);
    this._formConsumer.setStore(this.getNamePath(), this.values);
    this.keyManager = {
      keys: this.keyManager.keys.filter((_, i) => i !== index),
      id: this.keyManager.id,
    };
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this._provider.setValue({
      listNamePath: this.getNamePath(),
    });

    this.cancelRegisterFunc = this._formConsumer.registerList(
      this.getFieldId(),
      this
    );

    this.values = this.getValues();

    this.values.forEach(() => {
      this.keyManager = {
        keys: [...this.keyManager.keys, this.keyManager.id],
        id: this.keyManager.id + 1,
      };
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.cancelRegisterFunc?.();
  }

  override render() {
    return repeat(
      this.values,
      (_, index) => {
        let key = this.keyManager.keys[index];
        if (key === undefined) {
          this.keyManager.keys[index] = this.keyManager.id;
          key = this.keyManager.keys[index];
          this.keyManager.id += 1;
        }
        return key;
      },
      (value, index) => this.renderChild(index, value)
    );
  }
}

export default FormList;
