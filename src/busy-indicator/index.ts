import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './style/index.scss';
import {BusyIndicatorSize} from '../types';

@customElement('stylospectrum-busy-indicator')
class BusyIndicator extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @type {boolean}
   * @defaultValue true
   * @public
   */
  @property({type: Boolean, reflect: true})
  global!: boolean;

  /**
   * Defines the size of the component.
   * @default "Medium"
   * @public
   */
  @property({type: String, reflect: true})
  size = BusyIndicatorSize.Medium;

  override render() {
    const child = html`<div
      class="stylospectrum-busy-indicator"
      style=${this.style.cssText}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>`;

    if (this.global) {
      return html`
        <div class="stylospectrum-busy-indicator-wrap">${child}</div>
      `;
    }

    return child;
  }
}

export default BusyIndicator;
