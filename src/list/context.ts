import {createContext} from '@lit/context';

export interface ListContext {
  selectedId: string;
  onChangeId?: (id: string) => void;
}

export const listContext = createContext<ListContext>('list');
