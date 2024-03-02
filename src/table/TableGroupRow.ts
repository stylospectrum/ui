import {LitElement, css, html, nothing, unsafeCSS} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {customElement, property, queryAll, state} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
import type {AnyObject, TableColumnInfo} from './interface';
import type TableRow from './TableRow';
import {EventEmitter, event} from '../utils';
import styles from './style/table-group.scss';
import '../checkbox';
import '../icon/data/slim-arrow-down';
import '../icon/data/slim-arrow-right';
import './TableRow';

@customElement('stylospectrum-table-group-row')
class TableGroupRow extends LitElement {
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

  @state()
  private _expanded = true;

  @state()
  private _selectedRows: AnyObject[] = [];

  @queryAll('stylospectrum-table-row')
  private _rows!: NodeListOf<TableRow>;

  /**
   * @event
   * @public
   */
  @event({name: 'select', composed: false})
  selectedEvent!: EventEmitter<AnyObject>;

  private _handleExpand() {
    this._expanded = !this._expanded;

    if (this._expanded) {
      requestAnimationFrame(() => {
        this._rows.forEach((row) => {
          row.selected = this.selected;
        });
      });
    }
  }

  private _handleSelect() {
    this.selected = !this.selected;
    this._rows.forEach((row) => {
      row.selected = this.selected;
    });

    if (this.selected) {
      this._selectedRows = this.record.children;
    } else {
      this._selectedRows = [];
    }

    this.selectedEvent.emit({
      ...this.record,
      children: this._selectedRows,
    });
  }

  private _handleSelectRow(e: CustomEvent) {
    if (e.detail.selected) {
      this._selectedRows.push(e.detail.data);
    } else {
      this._selectedRows = this._selectedRows.filter(
        (row) => row.id !== e.detail.data.id
      );
    }
    this.selected = this._selectedRows.length === this.record.children.length;
    this.selectedEvent.emit({
      ...this.record,
      children: this._selectedRows,
    });
  }

  public updateSelected(selected: boolean) {
    this.selected = selected;
    this._selectedRows = selected ? this.record.children : [];
    this._rows.forEach((row) => {
      row.selected = selected;
    });
  }

  override render() {
    return html`
      <tr
        class=${classMap({
          ['stylospectrum-table-group-row']: true,
          ['stylospectrum-table-group-row-selected']: this.selected,
        })}
        part="group-row"
      >
        <td
          class="stylospectrum-table-multi-select-cell"
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
        <td>
          <stylospectrum-icon
            class="stylospectrum-table-expand-icon"
            name=${this._expanded ? 'slim-arrow-down' : 'slim-arrow-right'}
            @click=${this._handleExpand}
          >
          </stylospectrum-icon>
          <span>${this.record.name}</span>
        </td>

        ${repeat(
          this.columnDefs.slice(1),
          (column) => column.field,
          () => {
            return html`<td></td>`;
          }
        )}
      </tr>

      ${this._expanded
        ? repeat(
            this.record.children,
            (child: AnyObject) => child.id,
            (child) =>
              html`<stylospectrum-table-row
                @select=${this._handleSelectRow}
                .record=${child}
                .columnDefs=${this.columnDefs}
              >
              </stylospectrum-table-row>`
          )
        : nothing}
    `;
  }
}

export default TableGroupRow;
