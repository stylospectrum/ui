import {LitElement, html, css, unsafeCSS, PropertyValues, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {EventEmitter, event} from '../utils';
import {ifDefined} from 'lit/directives/if-defined.js';
import styles from './style/index.scss';
import '../icon';
import '../label';
import '../icon/data/accept';
import {isEnter, isSpace} from '../utils/Keys';

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
   * <br><br>
   * <b>Note:</b> The indeterminate state can be set only programmatically and can’t be achieved by user
   * interaction and the resulting visual state depends on the values of the <code>indeterminate</code>
   * and <code>checked</code> properties:
   * <ul>
   * <li> If the component is checked and indeterminate, it will be displayed as partially checked </li>
   * <li> If the component is checked and it is not indeterminate, it will be displayed as checked </li>
   * <li> If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute</li>
   * </ul>
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

  get effectiveTabIndex() {
    const tabindex = this.getAttribute('tabindex');
    return this.disabled ? undefined : tabindex || '0';
  }

  private _handleClick() {
    this.toggle();
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (isSpace(e)) {
      e.preventDefault();
    }

    if (isEnter(e)) {
      this.toggle();
    }
  }

  private _handleKeyUp(e: KeyboardEvent) {
    if (isSpace(e)) {
      this.toggle();
    }
  }

  private toggle() {
    if (!this.disabled && !this.checked && !this.indeterminate) {
      this._innerChecked = !this._innerChecked;
      this.changeEvent.emit(this._innerChecked);
    }
  }

  override willUpdate(_changedProperties: PropertyValues<this>): void {
    super.willUpdate(_changedProperties);

    if (_changedProperties.has('checked') && !this.indeterminate) {
      this._innerChecked = this.checked;
      this.changeEvent.emit(this.checked);
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
      <span
        class="stylospectrum-checkbox-wrapper"
        role="checkbox"
        part="root"
        tabindex="${ifDefined(this.effectiveTabIndex)}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeyDown}"
        @keyup="${this._handleKeyUp}"
      >
        <span class="stylospectrum-checkbox-inner">
          ${checkNode}
          <input
            type="checkbox"
            ?checked="${this.checked}"
            ?disabled="${this.disabled}"
            tabindex="-1"
            aria-hidden="true"
          />
        </span>

        ${textNode}
      </span>
    `;
  }
}

export default Checkbox;
