import {LitElement, html, css, unsafeCSS, nothing} from 'lit';
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

  /**
   * @default ""
   * @public
   */
  @property({type: String})
  icon!: string;

  /**
   * @default false
   * @private
   */
  @property({type: Boolean})
  focused!: boolean;

  @consume({context: listContext, subscribe: true})
  _consumer!: ListContext;

  override render() {
    const selected =
      (this._consumer?.selectedId || this._consumer?.defaultSelectedId) ===
      this.id;

    return html`<li
      class=${classMap({
        'stylospectrum-list-item': true,
        'stylospectrum-list-item-selected': selected,
        'stylospectrum-list-item-focused': this.focused,
      })}
      @click=${() => {
        this._consumer?.onChangeId?.(this.id);
      }}
    >
      ${this.icon
        ? html` <span class="stylospectrum-list-item-icon-wrapper">
            <stylospectrum-icon
              class="stylospectrum-list-item-icon"
              name="${this.icon}"
            >
            </stylospectrum-icon>
          </span>`
        : nothing}

      <span class="stylospectrum-list-item-text"><slot></slot></span>
    </li>`;
  }
}

export default ListItem;
