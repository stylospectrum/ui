import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './style/index.scss';

@customElement('stylospectrum-busy-indicator')
class BusyIndicator extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  override render() {
    return html`
      <div class="stylospectrum-busy-indicator-wrap">
        <div class="stylospectrum-busy-indicator">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    `;
  }
}

export default BusyIndicator;
