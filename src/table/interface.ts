export type AnyObject = Record<PropertyKey, any>;

export interface CellRendererParams {
  value: any;
  data: AnyObject;
}

export interface TableColumnInfo {
  headerName: string;
  field: string;
  cellRenderer?: (params: CellRendererParams) => string;
  rowGroup?: boolean;
}
