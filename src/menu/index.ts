import {LitElement, html} from 'lit';
import {customElement, queryAll} from 'lit/decorators.js';
import {ContextProvider} from '@lit/context';
import {IPopover} from '../types';
import {menuContext} from './context';
import '../popover';

@customElement('stylospectrum-menu')
class Menu extends LitElement {
  @queryAll('stylospectrum-popover')
  popovers!: NodeListOf<IPopover>;

  private _provider = new ContextProvider(this, {context: menuContext});

  public showAt(opener: HTMLElement) {
    const popover = this.popovers[0];
    popover.showAt(opener);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._provider.setValue({
      hidePopover: () => {
        const popover = this.popovers[0];
        popover.hide();
      },
    });
  }

  override render() {
    return html`
      <stylospectrum-popover hide-footer hide-arrow horizontal-align="Left">
        <slot></slot>
      </stylospectrum-popover>
    `;
  }
}

export default Menu;
