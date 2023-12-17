import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './style/index.scss';

@customElement('stylospectrum-label')
class Label extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  _colonSymbol = ':';

  /**
   * Defines the labeled input by providing its ID.
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  for!: string;

  /**
   * Defines whether colon is added to the component text.
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean, attribute: 'show-colon'})
  showColon!: boolean;

  /**
   * Defines whether an asterisk character is added to the component text.
   * <br><br>
   * <b>Note:</b> Usually indicates that user input (bound with the <code>for</code> property) is required.
   * In that case the <code>required</> property of
   * the corresponding input should also be set.
   *
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean})
  required!: boolean;

  private _handleClick() {
    if (!this.for) {
      return;
    }

    const elementToFocus = (this.getRootNode() as HTMLElement).querySelector(
      `[id="${this.for}"]`
    ) as HTMLElement;
    if (elementToFocus) {
      elementToFocus.focus();
    }
  }

  override render() {
    return html`
      <label class="stylospectrum-label-wrapper" @click="${this._handleClick}">
        <span class="stylospectrum-label-text">
          <slot></slot>
        </span>
        <span
          aria-hidden="true"
          class="stylospectrum-label-required-colon"
          data-colon="${this._colonSymbol}"
        >
        </span>
      </label>
    `;
  }
}

export default Label;
