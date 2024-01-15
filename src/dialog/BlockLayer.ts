import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './style/block-layer.scss';

@customElement('stylospectrum-dialog-block-layer')
class DialogBlockLayer extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  _preventBlockLayerFocus(e: KeyboardEvent | MouseEvent) {
    e.preventDefault();
  }

  override render() {
    return html`<div
      class="stylospectrum-dialog-block-layer"
      ?hidden=${this.hidden}
      tabindex="0"
      @keydown=${this._preventBlockLayerFocus}
      @mousedown=${this._preventBlockLayerFocus}
    ></div>`;
  }
}

export default DialogBlockLayer;
