import {LitElement, html, css, unsafeCSS, nothing, PropertyValues} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';
import {customElement, property, state} from 'lit/decorators.js';
import styles from './style/index.scss';

@customElement('stylospectrum-toast')
class Toast extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Indicates whether the component is open (visible).
   * @type {boolean}
   * @private
   */
  @property({type: Boolean, reflect: true, attribute: 'open'})
  private _open!: boolean;

  /**
   * Indicates whether the component DOM is rendered.
   * @type {boolean}
   * @private
   */
  @state()
  private _domRendered!: boolean;

  /**
   * Indicates whether the component is hovered.
   * @type {boolean}
   * @private
   */
  @state()
  private _hover!: boolean;

  /**
   * @type {boolean}
   * @private
   */
  @state()
  private _reopen = false;

  /**
   * @type {number}
   * @private
   */
  @state()
  private _opacity: number | undefined = 1;

  /**
   * Shows the component.
   * @public
   */
  public show() {
    if (this._open) {
      this._open = false;
      this._reopen = true;
    } else {
      this._initiateOpening();
    }
  }

  private _initiateOpening() {
    this._domRendered = true;
    requestAnimationFrame(() => {
      this._open = true;
    });
  }

  private _handleTransitionEnd() {
    if (this._hover) {
      return;
    }

    this._domRendered = false;
    this._open = false;
    this._opacity = 1;
  }

  private _handleMouseOver() {
    this._hover = true;
  }

  private _handleMouseLeave() {
    this._hover = false;
  }

  protected override willUpdate(
    _changedProperties: PropertyValues<this>
  ): void {
    super.willUpdate(_changedProperties);

    if (this._reopen) {
      this._reopen = false;
      this._initiateOpening();
    }
  }

  get styles() {
    const MAX_DURATION = 1000;
    const duration = 3000;
    const transitionDuration = Math.min(duration / 3, MAX_DURATION);

    setTimeout(() => {
      this._opacity = this._open && !this._hover ? 0 : undefined;
    }, 0);

    return {
      transitionDuration: this._open ? `${transitionDuration}ms` : undefined,
      transitionDelay: this._open
        ? `${duration - transitionDuration}ms`
        : undefined,
      opacity: this._opacity,
      zIndex: 1000,
    };
  }

  override render() {
    if (this._domRendered) {
      return html`<div
        class="stylospectrum-toast"
        role="alert"
        style=${styleMap(this.styles)}
        @transitionend="${this._handleTransitionEnd}"
        @mouseover="${this._handleMouseOver}"
        @mouseleave="${this._handleMouseLeave}"
      >
        <slot></slot>
      </div>`;
    }

    return nothing;
  }
}

export default Toast;
