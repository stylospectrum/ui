import {
  LitElement,
  html,
  css,
  unsafeCSS,
  nothing,
  PropertyValues,
  TemplateResult,
} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {InputType, ValueState} from '../types';
import {EventEmitter, event} from '../utils';
import {isEnter, isEscape} from '../utils/Keys';
import styles from './style/index.scss';
import '../icon';
import '../icon/data/decline';
import '../icon/data/error';
import '../icon/data/search';

@customElement('stylospectrum-input')
class Input extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines whether the component is in disabled state.
   *
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean})
  disabled!: boolean;

  /**
   * Defines a short hint intended to aid the user with data entry when the
   * component has no value.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property({type: String})
  placeholder: string = '';

  /**
   * Defines the value of the component.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property({type: String})
  value!: string;

  /**
   * Defines the default value of the component.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property({type: String, attribute: 'default-value'})
  defaultValue!: string;

  /**
   * Defines the value state of the component.
   *
   * @type {ValueState}
   * @defaultValue "None"
   * @public
   */
  @property({type: String, attribute: 'value-state', reflect: true})
  valueState = ValueState.None;

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property({type: String, attribute: 'value-state-message'})
  valueStateMessage!: string;

  /**
   * If allow to remove input content with clear icon.
   *
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean, attribute: 'allow-clear'})
  allowClear!: boolean;

  /**
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean, attribute: 'show-search'})
  showSearch!: boolean;

  /**
   * Defines the HTML type of the component.
   *
   * @type {InputType}
   * @defaultValue "Text"
   * @public
   */
  @property({type: String})
  type = InputType.Text;

  /**
   * Defines whether the clear icon is visible.
   *
   * @type {boolean}
   * @defaultValue false
   * @private
   */
  @state()
  private _showClearIcon!: boolean;

  /**
   * Defines the inner stored value of the component.
   *
   * @type {string}
   * @defaultValue ""
   * @private
   */
  @state()
  private _innerValue: string = '';

  /**
   * @type {boolean}
   * @defaultValue false
   * @private
   */
  @property({type: Boolean, reflect: true})
  private focused!: boolean;

  /**
   * Fired when the value of the component changes at each keystroke.
   *
   * @event
   * @public
   */
  @event({name: 'change'})
  changeEvent!: EventEmitter<string>;

  /**
   * @event
   * @public
   */
  @event({name: 'enter'})
  enterEvent!: EventEmitter<string>;

  /**
   * @event
   * @public
   */
  @event({name: 'escape'})
  escapeEvent!: EventEmitter<void>;

  @query('input')
  input!: HTMLInputElement;

  private _handleClear() {
    this._innerValue = '';
    this._showClearIcon = false;
    this.changeEvent.emit(this._innerValue);
    this.input?.focus();
  }

  private _handleSearchIconClick() {
    this.focused = true;
    this.input.focus();
  }

  private _handleInput(e: InputEvent) {
    const value = (e.target as HTMLInputElement).value;
    if (!this.value) {
      this._innerValue = value;
    }
    this._showClearIcon = this.allowClear && !!value && !this.disabled;
    this.changeEvent.emit(value);
  }

  private _handleFocus() {
    this.focused = true;
  }

  private _handleBlur() {
    this.focused = false;
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (isEnter(e)) {
      this.enterEvent.emit(this._innerValue);
    }

    if (isEscape(e)) {
      this.escapeEvent.emit();
    }
  }

  public getFocusDomRef() {
    return this.input;
  }

  override willUpdate(_changedProperties: PropertyValues<this>): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has('value')) {
      this._innerValue = this.value || '';
    }

    if (
      _changedProperties.has('allowClear') ||
      _changedProperties.has('value') ||
      _changedProperties.has('disabled')
    ) {
      this._showClearIcon =
        this.allowClear && !!this._innerValue && !this.disabled;
    }
  }

  override render(): TemplateResult {
    const clearIconNode = this._showClearIcon
      ? html`<span
          class="stylospectrum-input-icon-wrapper"
          @click=${this._handleClear}
        >
          <stylospectrum-icon class="stylospectrum-input-icon" name="decline">
          </stylospectrum-icon>
        </span>`
      : nothing;

    const searchIconNode = this.showSearch
      ? html`<span class="stylospectrum-input-icon-wrapper">
          <stylospectrum-icon
            class="stylospectrum-input-icon"
            name="search"
            @click=${this._handleSearchIconClick}
          >
          </stylospectrum-icon>
        </span>`
      : nothing;

    const valueStateMessageNode =
      this.valueStateMessage &&
      this.valueState === ValueState.Error &&
      this.focused
        ? html` <div class="stylospectrum-input-value-state-message-wrapper">
            <stylospectrum-icon
              class="stylospectrum-input-value-state-message-icon"
              name="error"
            >
            </stylospectrum-icon>
            <span class="stylospectrum-input-value-state-message">
              ${this.valueStateMessage}
            </span>
          </div>`
        : nothing;

    return html`
      <span class="stylospectrum-input-wrapper">
        <input
          .value=${this._innerValue || this.defaultValue || ''}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
          type=${this.type.toLowerCase()}
          .placeholder=${this.placeholder}
          class="stylospectrum-input"
          ?disabled=${this.disabled}
        />
        ${clearIconNode} ${valueStateMessageNode} ${searchIconNode}
      </span>
    `;
  }
}

export default Input;
