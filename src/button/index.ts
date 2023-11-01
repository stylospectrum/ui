import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './style/index.scss';

@customElement('stylospectrum-button')
class Button extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * Defines whether the component is disabled.
   * A disabled component can't be pressed or
   * focused, and it is not in the tab chain.
   *
   * @type {boolean}
   * @defaultvalue false
   * @public
   */
  @property({type: Boolean})
  disabled!: boolean;

  override render() {
    return html`
      <button
        ?disabled=${this.disabled}
        @click=${this.onclick}
        type="button"
        part="button"
      >
        <slot></slot>
      </button>
    `;
  }
}

export default Button;
declare global {
  interface HTMLElementTagNameMap {
    'stylospectrum-button': Button;
  }
}
