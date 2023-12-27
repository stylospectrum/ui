import {LitElement, html, css, unsafeCSS, PropertyValues, nothing} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import styles from './style/index.scss';
import {EventEmitter, event} from '../utils';
import {isEnter, isSpace} from '../utils/Keys';
import '../icon';
import '../label';
import '../icon/data/accept';

@customElement('stylospectrum-checkbox')
class Checkbox extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines whether the component is disabled.
   *
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean})
  disabled!: boolean;

  /**
   * Defines whether the component is displayed as partially checked.
   *
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean})
  indeterminate!: boolean;

  /**
   * Defines if the component is checked.
   * <br><br>
   * <b>Note:</b> The property can be changed with user interaction,
   * either by cliking/tapping on the component, or by
   * pressing the Enter or Space key.
   *
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean})
  checked!: boolean;

  /**
   * Defines the text of the component.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  text!: string;

  /**
   * Defines the inner stored value of the component.
   *
   * @type {string}
   * @defaultValue ""
   * @private
   */
  @state()
  private _innerChecked = false;

  /**
   * Fired when the component checked state changes.
   *
   * @event
   * @public
   */
  @event({name: 'change'})
  changeEvent!: EventEmitter<boolean>;

  @query('input')
  inputEle!: HTMLInputElement;

  get effectiveTabIndex() {
    const tabindex = this.getAttribute('tabindex');
    return this.disabled ? undefined : tabindex || '0';
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (isSpace(e)) {
      e.preventDefault();
    }

    if (isEnter(e)) {
      this.toggle(true);
    }
  }

  private _handleKeyUp(e: KeyboardEvent) {
    if (isSpace(e)) {
      this.toggle(true);
    }
  }

  private toggle(_key = false) {
    if (_key) {
      this.inputEle.checked = !this.inputEle.checked;
    }

    const checked = this.inputEle.checked;

    if (this.disabled || this.indeterminate) {
      return;
    }

    if (!this.checked) {
      this._innerChecked = checked;
    }

    this.changeEvent.emit(checked);
  }

  override willUpdate(_changedProperties: PropertyValues<this>): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has('checked') && !this.indeterminate) {
      this._innerChecked = this.checked;
    }
  }

  override render() {
    const checkNode =
      this._innerChecked && !this.indeterminate
        ? html`<stylospectrum-icon
            class="stylospectrum-checkbox-icon"
            name="accept"
          >
          </stylospectrum-icon>`
        : nothing;

    const textNode = this.text
      ? html`<stylospectrum-label class="stylospectrum-checkbox-label">
          ${this.text}
        </stylospectrum-label>`
      : nothing;

    return html`
      <label
        class="stylospectrum-checkbox-wrapper"
        role="checkbox"
        part="root"
        tabindex="${ifDefined(this.effectiveTabIndex)}"
        @keydown="${this._handleKeyDown}"
        @keyup="${this._handleKeyUp}"
      >
        <span class="stylospectrum-checkbox-inner">
          ${checkNode}
          <input
            @input=${() => this.toggle()}
            type="checkbox"
            ?checked="${this._innerChecked}"
            ?disabled="${this.disabled}"
            tabindex="-1"
            aria-hidden="true"
          />
        </span>

        ${textNode}
      </label>
    `;
  }
}

export default Checkbox;
