import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './style/list-item.scss';
import '../icon';

@customElement('stylospectrum-popover-list-item')
class PopoverListItem extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  @property({type: String})
  icon!: string;

  override render() {
    return html`<div class="stylospectrum-popover-list-item">
      <span class="stylospectrum-popover-list-item-icon-wrapper">
        <stylospectrum-icon
          class="stylospectrum-popover-list-item-icon"
          name="${this.icon}"
        >
        </stylospectrum-icon>
      </span>

      <span class="stylospectrum-popover-list-item-text"><slot></slot></span>
    </div>`;
  }
}

export default PopoverListItem;
