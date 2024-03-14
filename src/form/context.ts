import {createContext} from '@lit/context';
import type FormItem from './form-item';
import type FormList from './form-list';
import {type StoreValue} from './interface';

export interface FormContext {
  registerField: (entity: FormItem) => Function;
  registerList: (name: string, entity: FormList) => Function;
  getStore: () => Record<string, unknown>;
  setStore: (namePath: string[], value: StoreValue) => void;
  getFormItems: () => FormItem[];
}

export const formContext = createContext<FormContext>('form');

export interface FormListContext {
  listNamePath: string[];
}

export const formListContext = createContext<FormListContext>('form-list');
