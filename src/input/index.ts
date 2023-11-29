import {LitElement, html, css, unsafeCSS, nothing, PropertyValues} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {InputType, ValueState} from '../enums';
import styles from './style/index.scss';
import '../icon';
import '../icon/data/decline';
import {EventEmitter, event} from '../utils';

@customElement('stylospectrum-input')
class Input extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines whether the component is in disabled state.
   *
   * @type {boolean}
   * @defaultvalue false
   * @public
   */
  @property({type: Boolean})
  disabled!: boolean;

  /**
   * Defines a short hint intended to aid the user with data entry when the
   * component has no value.
   *
   * @type {string}
   * @defaultvalue ""
   * @public
   */
  @property()
  placeholder: string = '';

  /**
   * Defines the value of the component.
   *
   * @type {string}
   * @defaultvalue ""
   * @public
   */
  @property({type: String})
  value!: string;

  /**
   * Defines the value state of the component.
   *
   * @type {ValueState}
   * @defaultvalue "None"
   * @public
   */
  @property({type: String, attribute: 'value-state', reflect: true})
  valueState = ValueState.None;

  /**
   * Defines the value state message that will be displayed as pop up under the component.
   *
   * @type {string}
   * @defaultvalue ""
   * @public
   */
  @property({type: String, attribute: 'value-state-message'})
  valueStateMessage!: string;

  /**
   * If allow to remove input content with clear icon.
   *
   * @type {boolean}
   * @defaultvalue false
   * @public
   */
  @property({type: Boolean, attribute: 'allow-clear'})
  allowClear!: boolean;

  /**
   * Defines the HTML type of the component.
   *
   * @type {InputType}
   * @defaultvalue "Text"
   * @public
   */
  @property({type: String})
  type = InputType.Text;

  /**
   * Defines whether the clear icon is visible.
   *
   * @type {boolean}
   * @defaultvalue false
   * @private
   */
  @state()
  private _showClearIcon!: boolean;

  /**
   * Defines the inner stored value of the component.
   *
   * @type {string}
   * @defaultvalue ""
   * @private
   */
  @state()
  private _innerValue: string = '';

  /**
   * @type {boolean}
   * @defaultvalue false
   * @private
   */
  @property({type: Boolean, reflect: true})
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private focused!: boolean;

  /**
   * Fired when the value of the component changes at each keystroke,
   * and when a suggestion item has been selected.
   *
   * @event
   * @public
   */
  @event({name: 'input'})
  inputEvent!: EventEmitter<string>;

  /**
   * @event
   * @public
   */
  @event({name: 'enter'})
  enterEvent!: EventEmitter<void>;

  @query('input')
  input!: HTMLInputElement;

  private _handleClear() {
    this._innerValue = '';
    this._showClearIcon = false;
    this.inputEvent.emit(this._innerValue);
    this.input?.focus();
  }

  private _handleInput(e: InputEvent) {
    this._innerValue = (e.target as HTMLInputElement).value;
    this._showClearIcon =
      this.allowClear && !!this._innerValue && !this.disabled;

    this.inputEvent.emit(this._innerValue);
  }

  private _handleFocus() {
    this.focused = true;
  }

  private _handleBlur() {
    this.focused = false;
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.enterEvent.emit();
    }
  }

  override willUpdate(_changedProperties: PropertyValues<this>): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has('value')) {
      this._innerValue = this.value;
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

  override render() {
    const clearIconNode = this._showClearIcon
      ? html`<span
          class="stylospectrum-input-clear-icon-wrapper"
          @click=${this._handleClear}
        >
          <stylospectrum-icon
            class="stylospectrum-input-clear-icon"
            name="decline"
          >
          </stylospectrum-icon>
        </span>`
      : nothing;

    return html`
      <span class="stylospectrum-input-wrapper">
        <input
          .value=${this._innerValue}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
          type=${this.type.toLowerCase()}
          placeholder=${this.placeholder}
          class="stylospectrum-input"
          ?disabled=${this.disabled}
        />
        ${clearIconNode}
      </span>
    `;
  }
}

export default Input;
