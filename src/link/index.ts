import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';
import styles from './style/index.scss';

@customElement('stylospectrum-link')
class Link extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines whether the component is disabled.
   * <br><br>
   * <b>Note:</b> When disabled, the click event cannot be triggered by the user.
   *
   * @type {boolean}
   * @defaultValue false
   * @public
   */
  @property({type: Boolean})
  disabled!: boolean;

  /**
   * Defines the component href.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  href!: string;

  /**
   * Defines the component target.
   * <br><br>
   * <b>Notes:</b>
   * <b>This property must only be used when the <code>href</code> property is set.</b>
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  target!: string;

  /**
   * Indicates if the element is on focus.
   * @private
   */
  @property({type: Boolean, reflect: true})
  focused!: boolean;

  @state()
  _rel!: string | undefined;

  _dummyAnchor: HTMLAnchorElement;

  constructor() {
    super();
    this._dummyAnchor = document.createElement('a');
  }

  _isCrossOrigin() {
    const loc = window.location;

    this._dummyAnchor.href = this.href;

    return !(
      this._dummyAnchor.hostname === loc.hostname &&
      this._dummyAnchor.port === loc.port &&
      this._dummyAnchor.protocol === loc.protocol
    );
  }

  override willUpdate() {
    const needsNoReferrer =
      this.target !== '_self' && this.href && this._isCrossOrigin();

    this._rel = needsNoReferrer ? 'noreferrer noopener' : undefined;
  }

  private _handleFocusIn() {
    this.focused = true;
  }

  private _handleFocusOut() {
    this.focused = false;
  }

  private _handleClick(e: KeyboardEvent | MouseEvent) {
    if (!this.href) {
      e.preventDefault();
    }
  }

  override render() {
    return html`
      <a
        class="stylospectrum-link"
        href=${this.href || '#'}
        target=${ifDefined(this.target)}
        rel=${ifDefined(this._rel)}
        tabindex=${this.disabled ? '-1' : '0'}
        title="${ifDefined(this.title || undefined)}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @focusin=${this._handleFocusIn}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </a>
    `;
  }
}

export default Link;
