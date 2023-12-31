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
import type Input from '../input';
import styles from './style/form-item.scss';
import {ValueState} from '../types';

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
  name!: string;

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
  value!: string | boolean;

  /**
   * @type {Array<Rule>}
   * @defaultValue []
   * @public
   */
  @property({type: Array, reflect: false})
  rules: Array<Rule> = [];

  @queryAssignedElements({flatten: true})
  slotEls!: Array<FormItem>;

  private _handleChange(e: CustomEvent) {
    this.value = e.detail;
    this.validateRules();
  }

  private _handleSlotChange(): void {
    const formControl = this.slotEls?.[0];

    if (formControl) {
      formControl.id = this.name;
    }
  }

  private async _validateRule(rule: Rule) {
    const validator = new AsyncValidator({
      [this.name]: [rule],
    });

    let result = [];

    try {
      await Promise.resolve(validator.validate({[this.name]: this.value}));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (errObj: any) {
      if (errObj.errors) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        >
        </slot>
      </div>
    `;
  }
}

export default FormItem;
