import {LitElement, PropertyValueMap} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {customElement, property, queryAll, state} from 'lit/decorators.js';
import {ContextProvider, consume} from '@lit/context';
import {FormContext, formContext, formListContext} from './context';
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
  name!: string;

  /**
   * @type {Function}
   * @defaultValue () => void
   * @public
   */
  @property({type: Function})
  renderChild!: Function;

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

  @consume({context: formContext, subscribe: true})
  _formConsumer!: FormContext;

  @queryAll('stylospectrum-form-item')
  _formItems!: NodeListOf<FormItem>;

  private _provider = new ContextProvider(this, {context: formListContext});

  protected override willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has('values') && this._formItems.length > 0) {
      requestAnimationFrame(() => {
        const formItemArr = [...this._formItems];
        const formItems = Object.fromEntries(
          formItemArr.map((el) => [el.getFieldId(), el])
        );

        this.values.forEach((value, index) => {
          if (value && typeof value === 'object') {
            Object.keys(value).map((key) => {
              if (formItems[`${this.name}_${index}_${key}`]) {
                formItems[`${this.name}_${index}_${key}`].value = value[key];
              }
            });
          }
        });
      });
    }
  }

  private getValues() {
    const values: StoreValue[] = getValue(
      [this.name],
      this._formConsumer.getStore()
    );
    return values || [];
  }

  public add() {
    this.values = [...this.getValues(), null];
    this._formConsumer.setStore([this.name], this.values);
    this.keyManager = {
      keys: [...this.keyManager.keys, this.keyManager.id],
      id: this.keyManager.id + 1,
    };
  }

  public delete(index: number) {
    this.values = this.getValues().filter((_, i) => i !== index);
    this._formConsumer.setStore([this.name], this.values);
    this.keyManager = {
      keys: this.keyManager.keys.filter((_, i) => i !== index),
      id: this.keyManager.id,
    };
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this._provider.setValue({
      listName: this.name,
    });
    this._formConsumer.registerList(this.name, this);
    this.values = this.getValues();
    this.values.forEach(() => {
      this.keyManager = {
        keys: [...this.keyManager.keys, this.keyManager.id],
        id: this.keyManager.id + 1,
      };
    });
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
      (_, index) => this.renderChild(index)
    );
  }
}

export default FormList;
