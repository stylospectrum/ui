import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './style/index.scss?inline';

@customElement('stylospectrum-button')
export class StylospectrumButton extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  override render() {
    return html`
      <button @click=${this.onclick} part="button">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stylospectrum-button': StylospectrumButton;
  }
}
