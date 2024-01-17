import {LitElement, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {consume} from '@lit/context';
import {MenuContext, menuContext} from './context';
import '../list/list-item';

@customElement('stylospectrum-menu-item')
class MenuItem extends LitElement {
  @consume({context: menuContext, subscribe: true})
  _consumer!: MenuContext;

  /**
   * @default ""
   * @public
   */
  @property({type: String})
  icon!: string;

  @state()
  focused = false;

  handleMouseEnter() {
    this.focused = true;
  }

  handleMouseLeave() {
    this.focused = false;
  }

  handleClick(e: MouseEvent) {
    e.stopPropagation();
    this.click();
    this._consumer?.hidePopover?.();
  }

  override render() {
    return html`
      <stylospectrum-list-item
        ?focused=${this.focused}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @click=${this.handleClick}
        icon=${this.icon}
      >
        <slot></slot>
      </stylospectrum-list-item>
    `;
  }
}

export default MenuItem;
