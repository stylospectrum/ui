import type {ReactiveElement} from 'lit';

type Constructor<T = Record<string, unknown>> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T;
  prototype: T;
};

// From the TC39 Decorators proposal
export interface ClassDescriptor {
  kind: 'class';
  elements: ClassElement[];
  finisher?: <T>(clazz: Constructor<T>) => void | Constructor<T>;
}

// From the TC39 Decorators proposal
export interface ClassElement {
  kind: 'field' | 'method';
  key: PropertyKey;
  placement: 'static' | 'prototype' | 'own';
  // eslint-disable-next-line @typescript-eslint/ban-types
  initializer?: Function;
  extras?: ClassElement[];
  finisher?: <T>(clazz: Constructor<T>) => void | Constructor<T>;
  descriptor?: PropertyDescriptor;
}

export const decorateProperty =
  ({
    finisher,
    descriptor,
  }: {
    finisher?:
      | ((ctor: typeof ReactiveElement, property: PropertyKey) => void)
      | null;
    descriptor?: (property: PropertyKey) => PropertyDescriptor;
  }) =>
  (
    protoOrDescriptor: ReactiveElement | ClassElement,
    name?: PropertyKey
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): void | any => {
    if (name !== undefined) {
      const ctor = (protoOrDescriptor as ReactiveElement).constructor;
      if (descriptor !== undefined) {
        Object.defineProperty(protoOrDescriptor, name, descriptor(name));
      }
      finisher?.(ctor as typeof ReactiveElement, name);
    } else {
      const key: PropertyKey =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
        ((protoOrDescriptor as unknown as any).originalKey as PropertyKey) ??
        (protoOrDescriptor as ClassElement).key;
      const info: ClassElement =
        descriptor != undefined
          ? {
              kind: 'method',
              placement: 'prototype',
              key,
              descriptor: descriptor((protoOrDescriptor as ClassElement).key),
            }
          : {...(protoOrDescriptor as ClassElement), key};
      if (finisher != undefined) {
        info.finisher = function <ReactiveElement>(
          ctor: Constructor<ReactiveElement>
        ) {
          finisher(ctor as unknown as typeof ReactiveElement, key);
        };
      }
      return info;
    }
  };
