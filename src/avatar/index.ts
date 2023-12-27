import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './style/index.scss';

@customElement('stylospectrum-avatar')
class Avatar extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines if the avatar is interactive (focusable).
   *
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean, reflect: true})
  interactive!: boolean;

  /**
   * Defines the displayed initials.
   * <br>
   * Up to three Latin letters can be displayed as initials.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  initials!: string;

  /**
   * Indicates if the elements is on focus
   * @private
   */
  @property({type: Boolean, reflect: true})
  focused!: boolean;

  get validInitials() {
    const validInitials = /^[a-zA-Zà-üÀ-Ü]{1,3}$/,
      areInitialsValid = this.initials && validInitials.test(this.initials);

    if (areInitialsValid) {
      return this.initials;
    }

    return null;
  }

  get _role() {
    return this.interactive ? 'button' : 'img';
  }

  get tabindex() {
    return this.interactive ? '0' : '-1';
  }

  private _handleFocusOut() {
    this.focused = false;
  }

  private _handleFocusIn() {
    if (this.interactive) {
      this.focused = true;
    }
  }

  override render() {
    return html`<div
      class="stylospectrum-avatar"
      role=${this._role}
      tabindex=${this.tabindex}
      @focusin=${this._handleFocusIn}
      @focusout=${this._handleFocusOut}
    >
      <span class="stylospectrum-avatar-initials">${this.validInitials}</span>
    </div>`;
  }
}

export default Avatar;
