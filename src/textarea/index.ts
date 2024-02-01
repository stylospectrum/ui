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
import {ValueState} from '../types';
import {EventEmitter, event} from '../utils';
import styles from './style/index.scss';
import '../icon';
import '../icon/data/error';

type TokenizedText = Array<string>;
type IndexedTokenizedText = Array<{
  text: string;
  last: boolean;
}>;

@customElement('stylospectrum-textarea')
class Textarea extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Indicates whether the user can interact with the component or not.
   *
   * @default false
   * @public
   */
  @property({type: Boolean})
  disabled!: boolean;

  /**
   * Defines a short hint intended to aid the user with data entry when the component has no value.
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
   * Enables the component to automatically grow and shrink dynamically with its content.
   *
   * @default false
   * @public
   */
  @property({type: Boolean, reflect: true})
  growing!: boolean;

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
   * @private
   */
  @state()
  _mirrorText!: IndexedTokenizedText;

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

  @query('textarea')
  textarea!: HTMLTextAreaElement;

  private _handleInput(e: InputEvent) {
    const value = (e.target as HTMLTextAreaElement).value;
    if (!this.value) {
      this._innerValue = value;
    }
    this._mirrorText = this.tokenizeText(value);
    this.changeEvent.emit(value);
  }

  private _handleFocus() {
    this.focused = true;
  }

  private _handleBlur() {
    this.focused = false;
  }

  public getFocusDomRef() {
    return this.textarea;
  }

  private tokenizeText(value: string) {
    const tokenizedText = value
      .replace(/&/gm, '&amp;')
      .replace(/"/gm, '&quot;')
      .replace(/'/gm, '&apos;')
      .replace(/</gm, '&lt;')
      .replace(/>/gm, '&gt;')
      .split('\n');

    return this.mapTokenizedTextToObject(tokenizedText);
  }

  private mapTokenizedTextToObject(tokenizedText: TokenizedText) {
    return tokenizedText.map((token, index) => {
      return {
        text: token,
        last: index === tokenizedText.length - 1,
      };
    });
  }

  override willUpdate(_changedProperties: PropertyValues<this>): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has('value')) {
      this._innerValue = this.value || '';
    }
  }

  override render(): TemplateResult {
    const valueStateMessageNode =
      this.valueStateMessage &&
      this.valueState === ValueState.Error &&
      this.focused
        ? html` <div class="stylospectrum-textarea-value-state-message-wrapper">
            <stylospectrum-icon
              class="stylospectrum-textarea-value-state-message-icon"
              name="error"
            >
            </stylospectrum-icon>
            <span class="stylospectrum-textarea-value-state-message">
              ${this.valueStateMessage}
            </span>
          </div>`
        : nothing;

    const growingNode = this.growing
      ? html`<div class="stylospectrum-textarea-mirror">
          ${(this._mirrorText || []).map((token) => html`${token.text} <br />`)}
        </div>`
      : nothing;

    return html`
      <span class="stylospectrum-textarea-wrapper">
        ${growingNode}
        <textarea
          .value=${this._innerValue || this.defaultValue || ''}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
          .placeholder=${this.placeholder}
          class="stylospectrum-textarea"
          ?disabled=${this.disabled}
        ></textarea>
        ${valueStateMessageNode}
      </span>
    `;
  }
}

export default Textarea;
