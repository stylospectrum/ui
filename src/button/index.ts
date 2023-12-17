import {LitElement, html, css, unsafeCSS, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import {ButtonDesign, ButtonType} from '../enums';
import styles from './style/index.scss';
import '../icon';

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
   * @defaultValue false
   * @public
   */
  @property({type: Boolean, reflect: true})
  disabled!: boolean;

  /**
   * Defines the icon, displayed as graphical element within the component.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property()
  icon!: string;

  /**
   * @type {ButtonDesign}
   * @defaultValue "Primary"
   * @public
   */
  @property({type: String, reflect: true})
  type = ButtonDesign.Primary;

  /**
   * Defines whether the button has special form-related functionality.
   *
   * @type {ButtonType}
   * @defaultValue "Button"
   * @public
   */
  @property({type: String, attribute: 'html-type', reflect: true})
  htmlType = ButtonType.Button;

  /**
   * Indicates if the elements is on focus
   * @private
   */
  @property({type: Boolean, reflect: true})
  focused!: boolean;

  handleFocusIn() {
    this.focused = true;
  }

  handleFocusOut() {
    this.focused = false;
  }

  override render() {
    const iconNode = this.icon
      ? html`<stylospectrum-icon
          class="stylospectrum-button-icon"
          name=${this.icon}
        >
        </stylospectrum-icon>`
      : nothing;

    const textNode = this.icon
      ? nothing
      : html`<span class="stylospectrum-button-text">
          <slot></slot>
        </span>`;

    const classes = {
      'stylospectrum-button': true,
      'stylospectrum-button-has-icon': !!this.icon,
    };

    return html`
      <button
        ?disabled=${this.disabled}
        type=${this.htmlType.toLowerCase()}
        part="button"
        class=${classMap(classes)}
        @focusout=${this.handleFocusOut}
        @focusin=${this.handleFocusIn}
      >
        ${iconNode} ${textNode}
      </button>
    `;
  }
}

export default Button;
