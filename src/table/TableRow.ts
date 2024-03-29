import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import {classMap} from 'lit/directives/class-map.js';
import {styleMap} from 'lit/directives/style-map.js';
import type {AnyObject, TableColumnInfo} from './interface';
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
   * @type {boolean}
   * @defaultValue {}
   * @public
   */
  @property({type: Boolean})
  lastRow!: boolean;

  override render() {
    return html`
      <tr
        class=${classMap({
          ['stylospectrum-table-row']: true,
          ['stylospectrum-table-row-selected']: this.selected,
        })}
        style=${styleMap({
          'border-bottom-color':
            this.lastRow && this.selected ? '#4db1ff' : '#2e3742',
        })}
      >
        <td></td>

        ${repeat(
          this.columnDefs,
          (column) => column.field,
          (column) => {
            return html`<td>
              <span>
                ${column.cellRenderer?.({
                  value: this.record[column.field],
                  data: this.record,
                }) || this.record[column.field]}
              </span>
            </td>`;
          }
        )}
      </tr>
    `;
  }
}

export default TableRow;
