import {LitElement, html} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import {ContextProvider} from '@lit/context';
import {IPopover} from '../types';
import {menuContext} from './context';
import {EventEmitter, event} from '../utils';
import '../popover';

@customElement('stylospectrum-menu')
class Menu extends LitElement {
  @query('stylospectrum-popover')
  private _popoverNode!: IPopover;

  /**
   * @event
   * @public
   */
  @event({name: 'close'})
  closeEvent!: EventEmitter<void>;

  /**
   * @event
   * @public
   */
  @event({name: 'open'})
  openEvent!: EventEmitter<void>;

  private _provider = new ContextProvider(this, {context: menuContext});

  public showAt(opener: HTMLElement, width?: number) {
    this._popoverNode.showAt(opener, width);
  }

  public hide() {
    this._popoverNode.hide();
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._provider.setValue({
      hidePopover: () => {
        this._popoverNode.hide();
      },
    });
  }

  override render() {
    return html`
      <stylospectrum-popover
        @close=${() => this.closeEvent.emit()}
        @open=${() => this.openEvent.emit()}
        hide-footer
        hide-arrow
        horizontal-align="Left"
      >
        <slot></slot>
      </stylospectrum-popover>
    `;
  }
}

export default Menu;
