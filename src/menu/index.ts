import {LitElement, html} from 'lit';
import {customElement, query} from 'lit/decorators.js';
import {ContextProvider} from '@lit/context';
import {IPopover} from '../types';
import {menuContext} from './context';
import '../popover';

@customElement('stylospectrum-menu')
class Menu extends LitElement {
  @query('stylospectrum-popover')
  popoverNode!: IPopover;

  private _provider = new ContextProvider(this, {context: menuContext});

  public showAt(opener: HTMLElement) {
    this.popoverNode.showAt(opener);
  }

  public setScaleElement(element: HTMLElement) {
    this.popoverNode.setScaleElement(element);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this._provider.setValue({
      hidePopover: () => {
        this.popoverNode.hide();
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
