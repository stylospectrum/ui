import {LitElement, html, css, unsafeCSS, render, nothing} from 'lit';
import {
  customElement,
  property,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import styles from './style/index.scss';
import './BlockLayer';
import '../icon';
import {EventEmitter, event} from '../utils';

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

  blockLayerTemplate(hidden = false) {
    return html`<stylospectrum-dialog-block-layer
      @click=${() => {
        this.maskClickEvent.emit();
        this.hide();
      }}
      ?hidden=${hidden}
    >
    </stylospectrum-dialog-block-layer>`;
  }

  public show() {
    render(this.blockLayerTemplate(), document.body);
    this.opened = true;
    this.style.display = 'flex';

    this.okButtonNodes?.[0]?.shadowRoot?.querySelector('button')?.focus();
  }

  public hide() {
    if (!this.opened) {
      return;
    }
    render(this.blockLayerTemplate(true), document.body);
    this.opened = false;
    this.style.display = 'none';
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
      <slot name="second-dialog"></slot>

      <section class="stylospectrum-dialog" role="dialog" aria-modal="true">
        <header class="stylospectrum-dialog-header" part="header">
          <div class="stylospectrum-dialog-header-text-wrapper">
            ${headerIconNode}
            <h1 class="stylospectrum-dialog-header-text">${this.headerText}</h1>
          </div>
          <slot name="sub-header"></slot>
        </header>

        <div class="stylospectrum-dialog-content" part="content">
          <slot></slot>
        </div>

        ${footerNode}
      </section>
    `;
  }
}

export default Dialog;
