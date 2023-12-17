import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './style/index.scss';
import '../icon';
import '../icon/data/sys-enter-2';

enum IconMapping {
  Success = 'sys-enter-2',
}

@customElement('stylospectrum-message-strip')
class MessageStrip extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  get icon() {
    return IconMapping['Success'];
  }

  override render() {
    return html`
      <div
        class="stylospectrum-message-strip stylospectrum-message-strip-success"
      >
        <div class="stylospectrum-message-strip-icon-wrapper">
          <stylospectrum-icon
            class="stylospectrum-message-strip-icon"
            name="${this.icon}"
          >
          </stylospectrum-icon>
        </div>
        <span class="stylospectrum-message-strip-text"><slot></slot></span>
      </div>
    `;
  }
}

export default MessageStrip;
