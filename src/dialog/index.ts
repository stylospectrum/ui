import {LitElement, html, css, unsafeCSS, render, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import styles from './style/index.scss';
import './BlockLayer';

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

  @state()
  opened = false;

  blockLayerTemplate(hidden = false) {
    return html`<stylospectrum-dialog-block-layer
      ?hidden=${hidden}
    ></stylospectrum-dialog-block-layer>`;
  }

  public show() {
    render(this.blockLayerTemplate(), document.body);
    this.opened = true;
    this.style.display = 'flex';
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

    return html`
      <slot name="second-dialog"></slot>

      <section class="stylospectrum-dialog" role="dialog" aria-modal="true">
        <header class="stylospectrum-dialog-header" part="header">
          <h1 class="stylospectrum-dialog-header-text">${this.headerText}</h1>
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
