import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './style/index.scss';
import {EventEmitter, event} from '../utils';
import '../button';
import '../icon/data/navigation-down-arrow';

@customElement('stylospectrum-menu-button')
class MenuButton extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @event
   * @public
   */
  @event({name: 'arrow-click'})
  arrowClickEvent!: EventEmitter<HTMLElement>;

  /**
   * @event
   * @public
   */
  @event({name: 'button-click'})
  buttonClickEvent!: EventEmitter<void>;

  override render() {
    return html`
      <div class="stylospectrum-menu-button">
        <stylospectrum-button
          type="Secondary"
          class="stylospectrum-menu-button-text"
          @click=${() => this.buttonClickEvent.emit()}
        >
          <slot></slot>
        </stylospectrum-button>
        <div class="stylospectrum-menu-button-arrow-wrapper">
          <stylospectrum-button
            type="Secondary"
            class="stylospectrum-menu-button-arrow"
            icon="navigation-down-arrow"
            @click=${() => this.arrowClickEvent.emit(this)}
          >
          </stylospectrum-button>
        </div>
      </div>
    `;
  }
}

export default MenuButton;
