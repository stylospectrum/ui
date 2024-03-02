import {LitElement, html, css, unsafeCSS, PropertyValues} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import * as uuid from 'uuid';

import styles from './style/index.scss';
import {EventEmitter, event} from '../utils';
import type Input from '../input';
import '../input';
import '../icon/data/decline';

export interface MultiInputOption {
  name: string;
  id: string | null;
}

@customElement('stylospectrum-multi-input')
class MultiInput extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines the value of the component.
   *
   * @type {MultiInputOption[]}
   * @defaultValue []
   * @public
   */
  @property({type: Array})
  value: MultiInputOption[] = [];

  /**
   * @type {MultiInputOption[]}
   * @defaultValue []
   * @public
   */
  @property({type: Array})
  defaultValue: MultiInputOption[] = [];

  /**
   * Defines the inner stored value of the component.
   *
   * @type {string}
   * @defaultValue ""
   * @private
   */
  @state()
  private _innerValue: MultiInputOption[] = [];

  /**
   * @event
   * @public
   */
  @event({name: 'token-delete'})
  tokenDeleteEvent!: EventEmitter<string | null>;

  /**
   * @event
   * @public
   */
  @event({name: 'enter'})
  enterEvent!: EventEmitter<{name: string; id: string}>;

  @query('stylospectrum-input')
  private _input!: Input;

  override willUpdate(_changedProperties: PropertyValues<this>): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has('value')) {
      this._innerValue =
        this.value?.length > 0 ? this.value : this.defaultValue;
    }
  }

  handleInputEnter(event: CustomEvent) {
    if (event.detail) {
      const newValue = {name: event.detail, id: 'client-' + uuid.v4()};
      this.enterEvent.emit(newValue);
      this._input.clear();
      this._innerValue = [...this._innerValue, newValue];
    }
  }

  handleTokenDelete(id: string | null) {
    this.tokenDeleteEvent.emit(id);
    this._innerValue = this._innerValue.filter((option) => option.id !== id);
  }

  override render() {
    return html`
      <stylospectrum-input
        style=${this.style.cssText}
        class="stylospectrum-multi-input"
        ?tokenizer-available=${this._innerValue.length > 0}
        @enter=${this.handleInputEnter}
      >
        <div class="stylospectrum-tokenizer" slot="tokenizer" role="listbox">
          ${this._innerValue.map((option) => {
            return html`
              <div class="stylospectrum-token">
                <span class="stylospectrum-token-label">${option.name}</span>
                <stylospectrum-icon
                  class="stylospectrum-token-icon"
                  name="decline"
                  @click=${() => this.handleTokenDelete(option.id)}
                ></stylospectrum-icon>
              </div>
            `;
          })}
        </div>
      </stylospectrum-input>
    `;
  }
}

export default MultiInput;
