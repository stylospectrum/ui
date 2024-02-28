import {
  LitElement,
  html,
  css,
  unsafeCSS,
  TemplateResult,
  CSSResultGroup,
  nothing,
} from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
} from 'lit/decorators.js';
import AsyncValidator from 'async-validator';
import Checkbox from '../checkbox';
import MultiInput, {type MultiInputOption} from '../multi-input';
import type Input from '../input';
import styles from './style/form-item.scss';
import {ValueState} from '../types';
import {
  FormContext,
  FormListContext,
  formContext,
  formListContext,
} from './context';
import {consume} from '@lit/context';
import '../label';
import {getValue} from './utils';
import {type StoreValue} from './interface';

interface Rule {
  /** validate from a regular expression */
  pattern?: RegExp | string;
  /** indicates whether field is required */
  required?: boolean;
  /** validation error message */
  message?: string;
}

@customElement('stylospectrum-form-item')
class FormItem extends LitElement {
  static override styles: CSSResultGroup = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  name!: string | string[];

  /**
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  label!: string;

  /**
   * @type {string}
   * @defaultValue ""
   * @private
   */
  @property()
  value!: StoreValue;

  /**
   * @type {Array<Rule>}
   * @defaultValue []
   * @public
   */
  @property({type: Array, reflect: false})
  rules: Array<Rule> = [];

  @queryAssignedElements({flatten: true})
  slotEls!: Array<FormItem>;

  @consume({context: formContext, subscribe: true})
  _formConsumer!: FormContext;

  @consume({context: formListContext, subscribe: true})
  _formListConsumer!: FormListContext;

  cancelRegisterFunc: Function | null = null;

  override connectedCallback(): void {
    super.connectedCallback();

    this.value = getValue(
      this.getNamePath(),
      this._formConsumer.getStore()
    ) as StoreValue;

    requestAnimationFrame(() => {
      if (!(this.slotEls[0] instanceof Checkbox) && this.value) {
        this.slotEls[0].value = this.value;
      }
    });

    if (this._formConsumer) {
      this.cancelRegisterFunc = this._formConsumer.registerField(this);
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.cancelRegisterFunc?.();
  }

  public getNamePath() {
    const namePath = Array.isArray(this.name) ? this.name : [this.name];
    return this._formListConsumer
      ? [this._formListConsumer.listName, ...namePath]
      : namePath;
  }

  public getFieldId() {
    return this.getNamePath().join('_');
  }

  private _handleChange(e: CustomEvent) {
    if (!(e.target instanceof MultiInput)) {
      this.value = e.detail;
      this._formConsumer.setStore(this.getNamePath(), this.value);
      this.validateRules();
    }
  }

  private _handleEnter(e: CustomEvent) {
    if (e.target instanceof MultiInput) {
      this.value = [...((this.value as MultiInputOption[]) || []), e.detail];
      this._formConsumer.setStore(this.getNamePath(), this.value);
      this.validateRules();
    }
  }

  private _handleTokenDelete(e: CustomEvent) {
    this.value = (this.value as MultiInputOption[]).filter(
      (item) => item.id !== e.detail
    );
    this._formConsumer.setStore(this.getNamePath(), this.value);
  }

  private _handleSlotChange(): void {
    const formControl = this.slotEls?.[0];

    if (formControl) {
      formControl.id = this.getFieldId();
    }
  }

  private async _validateRule(rule: Rule) {
    const validator = new AsyncValidator({
      [this.getFieldId()]: [rule],
    });

    let result = [];

    try {
      await Promise.resolve(
        validator.validate({[this.getFieldId()]: this.value})
      );
    } catch (errObj: any) {
      if (errObj.errors) {
        result = errObj.errors.map(({message}: any) => {
          return message;
        });
      }
    }

    return result;
  }

  public validateRules() {
    // eslint-disable-next-line no-async-promise-executor
    const promise = new Promise(async (resolve, reject) => {
      for (let i = 0; i < this.rules.length; i++) {
        const errors = await this._validateRule(this.rules[i]);
        if (errors.length) {
          reject(errors);
          break;
        }
      }
      resolve([]);
    });

    promise
      .catch((e) => e)
      .then((ruleErrors) => {
        if (!(this.slotEls[0] instanceof Checkbox)) {
          const input = this.slotEls[0] as unknown as Input;

          if ((ruleErrors as string[]).length > 0) {
            input.valueState = ValueState.Error;
            input.valueStateMessage = (ruleErrors as string[])[0];
          } else {
            input.valueState = ValueState.None;
          }
        }
      });

    return promise;
  }

  override updated(changedProperties: Map<string, unknown>): void {
    if (changedProperties.has('value')) {
      if (this.slotEls[0] instanceof Checkbox) {
        this.slotEls[0].checked = this.value as boolean;
      } else {
        this.slotEls[0].value = this.value;
      }
    }
  }

  override render(): TemplateResult {
    const labelNode = this.label
      ? html`<div class="stylospectrum-form-item-label-wrapper">
          <stylospectrum-label show-colon for="${this.name}">
            ${this.label}
          </stylospectrum-label>
          <slot name="suffix-label"></slot>
        </div>`
      : nothing;

    return html`
      <div class="stylospectrum-form-item">
        ${labelNode}
        <slot
          @slotchange=${this._handleSlotChange}
          @change="${this._handleChange}"
          @enter=${this._handleEnter}
          @token-delete=${this._handleTokenDelete}
        >
        </slot>
      </div>
    `;
  }
}

export default FormItem;
