import {LitElement, html, css, unsafeCSS} from 'lit';
import {customElement} from 'lit/decorators.js';
import {ContextProvider} from '@lit/context';
import styles from './style/index.scss';
import {listContext} from './context';
import {EventEmitter, event} from '../utils';

@customElement('stylospectrum-list')
class List extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @event
   * @public
   */
  @event({name: 'select'})
  selectEvent!: EventEmitter<string>;

  private _provider = new ContextProvider(this, {context: listContext});

  private _handleChangeId = (id: string) => {
    this.selectEvent.emit(id);
    this._provider.setValue({
      selectedId: id,
      onChangeId: this._handleChangeId,
    });
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this._provider.setValue({
      selectedId: '',
      onChangeId: this._handleChangeId,
    });
  }

  override render() {
    return html`<div class="stylospectrum-list"><slot></slot></div>`;
  }
}

export default List;
