import {LitElement, html, css, unsafeCSS, nothing} from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import {EventEmitter, event} from '../utils';
import styles from './style/index.scss';
import '../icon';

@customElement('stylospectrum-dialog')
class Dialog extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines the header text.
   *
   * @default ""
   * @public
   */
  @property({type: String, attribute: 'header-text'})
  headerText!: string;

  /**
   * @default false
   * @public
   */
  @property({type: Boolean, attribute: 'hide-footer'})
  hideFooter!: boolean;

  /**
   * @default false
   * @public
   */
  @property({type: Boolean, attribute: 'hide-mask'})
  hideMask!: boolean;

  /**
   * @default ""
   * @public
   */
  @property({type: String, attribute: 'header-icon'})
  headerIcon!: string;

  /**
   * @event
   * @public
   */
  @event({name: 'mask-click'})
  maskClickEvent!: EventEmitter<void>;

  @state()
  opened = false;

  @queryAssignedElements({slot: 'ok-button'})
  okButtonNodes!: HTMLElement[];

  private _handleMaskClick(e: KeyboardEvent | MouseEvent) {
    e.preventDefault();
    this.maskClickEvent.emit();
  }

  override render() {
    const footerNode = this.hideFooter
      ? nothing
      : html`<footer part="footer" class="stylospectrum-dialog-footer">
          <div class="stylospectrum-dialog-footer-space"></div>
          <slot name="ok-button"></slot>
          <slot name="cancel-button"></slot>
        </footer>`;

    const headerIconNode = this.headerIcon
      ? html`<stylospectrum-icon
          class="stylospectrum-dialog-header-icon"
          name=${this.headerIcon}
        >
        </stylospectrum-icon>`
      : nothing;

    return html`
      ${this.hideMask
        ? nothing
        : html`<div
            class="stylospectrum-dialog-block-layer"
            tabindex="0"
            @keydown=${this._handleMaskClick}
            @mousedown=${this._handleMaskClick}
          ></div>`}

      <div part="wrap" class="stylospectrum-dialog-wrap">
        <slot name="second-dialog"></slot>

        <section
          style=${this.style.cssText}
          class="stylospectrum-dialog"
          role="dialog"
          aria-modal="true"
        >
          <header class="stylospectrum-dialog-header" part="header">
            <div class="stylospectrum-dialog-header-text-wrapper">
              ${headerIconNode}
              <h1 class="stylospectrum-dialog-header-text">
                ${this.headerText}
              </h1>
            </div>
            <slot name="sub-header"></slot>
          </header>

          <div class="stylospectrum-dialog-content" part="content">
            <slot></slot>
          </div>

          ${footerNode}
        </section>
      </div>
    `;
  }
}

export default Dialog;
