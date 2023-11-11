import {LitElement, html, css, unsafeCSS, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import '../icon';
import styles from './style/index.scss';

enum ButtonType {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Tertiary = 'Tertiary',
}

@customElement('stylospectrum-button')
class Button extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @type {boolean}
   * @defaultvalue false
   * @public
   */
  @property({type: Boolean, reflect: true})
  disabled!: boolean;

  /**
   * @type {string}
   * @defaultvalue ""
   * @public
   */
  @property()
  icon!: string;

  /**
   * @type {ButtonType}
   * @defaultvalue Primary
   * @public
   */
  @property({type: ButtonType, reflect: true})
  type = ButtonType.Primary;

  override render() {
    const iconNode = this.icon
      ? html`<stylospectrum-icon
          class="stylospectrum-btn-icon"
          name=${this.icon}
        ></stylospectrum-icon>`
      : nothing;

    const textNode = this.icon
      ? nothing
      : html`<span class="stylospectrum-btn-text">
          <slot></slot>
        </span>`;

    const classes = {
      'stylospectrum-btn': true,
      'stylospectrum-btn-has-icon': !!this.icon,
    };

    return html`
      <button
        ?disabled=${this.disabled}
        type="button"
        part="button"
        class=${classMap(classes)}
      >
        ${iconNode} ${textNode}
      </button>
    `;
  }
}

export default Button;
