import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import {classMap} from 'lit/directives/class-map.js';
import type {AnyObject, TableColumnInfo} from './interface';
import {EventEmitter, event} from '../utils';
import styles from './style/table-row.scss';
import '../checkbox';

@customElement('stylospectrum-table-row')
class TableRow extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @type {AnyObject}
   * @defaultValue {}
   * @public
   */
  @property()
  record!: AnyObject;

  /**
   * @type {TableColumnInfo[]}
   * @defaultValue []
   * @public
   */
  @property()
  columnDefs!: TableColumnInfo[];

  /**
   * @type {boolean}
   * @defaultValue {}
   * @public
   */
  @property({type: Boolean})
  selected!: boolean;

  /**
   * @event
   * @public
   */
  @event({name: 'select', composed: false})
  selectedEvent!: EventEmitter<{selected: boolean; data: AnyObject}>;

  private _handleSelect() {
    this.selected = !this.selected;
    this.selectedEvent.emit({
      selected: this.selected,
      data: this.record,
    });
  }

  override render() {
    return html`
      <tr
        class=${classMap({
          ['stylospectrum-table-row']: true,
          ['stylospectrum-table-row-selected']: this.selected,
        })}
      >
        <td
          class="table-multi-select-cell"
          aria-hidden="true"
          role="presentation"
        >
          <stylospectrum-checkbox
            ?checked=${this.selected}
            @change=${this._handleSelect}
            class="stylospectrum-table-multi-select-checkbox"
          >
          </stylospectrum-checkbox>
        </td>

        ${repeat(
          this.columnDefs,
          (column) => column.field,
          (column) => {
            return html`<td>
              <span
                >${column.cellRenderer?.({
                  value: this.record[column.field],
                  data: this.record,
                }) || this.record[column.field]}</span
              >
            </td>`;
          }
        )}
      </tr>
    `;
  }
}

export default TableRow;
