import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {consume} from '@lit/context';
import {classMap} from 'lit/directives/class-map.js';
import {ListContext, listContext} from './context';
import styles from './style/list-item.scss';
import '../icon';

@customElement('stylospectrum-list-item')
class ListItem extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  @property({type: String})
  icon!: string;

  @consume({context: listContext, subscribe: true})
  _consumer!: ListContext;

  override render() {
    const selected = this._consumer?.selectedId === this.id;

    return html`<div
      class=${classMap({
        'stylospectrum-list-item': true,
        'stylospectrum-list-item-selected': selected,
      })}
      @click=${() => {
        this._consumer?.onChangeId?.(this.id);
      }}
    >
      <span class="stylospectrum-list-item-icon-wrapper">
        <stylospectrum-icon
          class="stylospectrum-list-item-icon"
          name="${this.icon}"
        >
        </stylospectrum-icon>
      </span>

      <span class="stylospectrum-list-item-text"><slot></slot></span>
    </div>`;
  }
}

export default ListItem;
