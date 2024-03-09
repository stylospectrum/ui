import {createContext} from '@lit/context';

export interface ListContext {
  defaultSelectedId?: string;
  selectedId?: string;
  onChangeId?: (id: string) => void;
}

export const listContext = createContext<ListContext>('list');
