import {LitElement, html, css, unsafeCSS, nothing} from 'lit';
import {customElement, property, queryAll, state} from 'lit/decorators.js';
import {repeat} from 'lit/directives/repeat.js';
import styles from './style/index.scss';
import type {AnyObject, TableColumnInfo} from './interface';
import {EventEmitter, event} from '../utils';
import type TableGroupRow from './TableGroupRow';
import '../checkbox';
import './TableGroupRow';

@customElement('stylospectrum-table')
class Table extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  /**
   * @type {TableColumnInfo[]}
   * @defaultValue []
   * @public
   */
  @property()
  columnDefs!: TableColumnInfo[];

  /**
   * @type {AnyObject[]}
   * @defaultValue []
   * @public
   */
  @property()
  rowData!: AnyObject[];

  @state()
  private _selectedRowGroups: AnyObject[] = [];

  @state()
  private _selected = false;

  @queryAll('stylospectrum-table-group-row')
  private _rowGroups!: NodeListOf<TableGroupRow>;

  /**
   * @event
   * @public
   */
  @event({name: 'select', composed: false})
  selectedEvent!: EventEmitter<AnyObject[]>;

  private _handleSelect() {
    this._selected = !this._selected;
    this._rowGroups.forEach((row) => {
      row.updateSelected(this._selected);
    });

    if (this._selected) {
      this._selectedRowGroups = this.rowData;
    } else {
      this._selectedRowGroups = [];
    }
    this.selectedEvent.emit(this._selectedRowGroups);
  }

  private _handleSelectGroupRow(e: CustomEvent) {
    this._selectedRowGroups = this._selectedRowGroups.filter(
      (row) => row.id !== e.detail.id
    );

    if (e.detail.children.length > 0) {
      this._selectedRowGroups.push(e.detail);
    }

    this._selected = this._selectedRowGroups.length === this.rowData.length;
    this.selectedEvent.emit(this._selectedRowGroups);
  }

  private _renderTbodyChildren() {
    if (this.rowData.length === 0) {
      return html`<tr class="stylospectrum-table-no-data-row-wrap">
        <td colspan=${this.columnDefs.length} role="cell" style="width: 100%">
          <div class="stylospectrum-table-no-data-row">
            <span>No data</span>
          </div>
        </td>
      </tr>`;
    }

    return repeat(
      this.rowData,
      (record) => record.id,
      (record) =>
        html`<stylospectrum-table-group-row
          @select=${this._handleSelectGroupRow}
          .record=${record}
          .columnDefs=${this.columnDefs}
        >
        </stylospectrum-table-group-row>`
    );
  }

  override render() {
    return html`
      <div class="stylospectrum-table-container">
        <table border="0" cellspacing="0" cellpadding="0" role="table">
          <thead>
            <tr class="stylospectrum-table-header-row">
              ${this.rowData.length > 0
                ? html`<th class="stylospectrum-table-select-all-column">
                    <stylospectrum-checkbox
                      ?checked=${this._selected}
                      @change=${this._handleSelect}
                      class="stylospectrum-table-select-all-checkbox"
                    >
                    </stylospectrum-checkbox>
                  </th>`
                : nothing}
              ${repeat(
                this.columnDefs,
                (column) => column.field,
                (column) => {
                  return html`<th><span>${column.headerName}</span></th>`;
                }
              )}
            </tr>
          </thead>

          <tbody>
            ${this._renderTbodyChildren()}
          </tbody>
        </table>
      </div>
    `;
  }
}

export default Table;
