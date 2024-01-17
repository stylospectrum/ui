import {createContext} from '@lit/context';

export interface MenuContext {
  hidePopover: () => void;
}

export const menuContext = createContext<MenuContext>('menu');
