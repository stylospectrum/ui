import {decorateProperty} from './base';

export interface EventOptions {
  /** Indicate if event bubbles up through the DOM or not */
  bubbles?: boolean;
  /** Indicate if event is cancelable */
  cancelable?: boolean;
  /** Indicate if event can bubble across the boundary between the shadow DOM and the light DOM */
  composed?: boolean;
  /** Custom event name */
  name?: string;
}

export class EventEmitter<T> {
  constructor(
    private target: HTMLElement,
    private eventName: string,
    private options?: EventOptions
  ) {}

  emit(value: T, options?: EventOptions): boolean {
    let event: Event;

    if (value instanceof Event) {
      event = value;
    } else {
      options = {bubbles: true, composed: true, ...this.options, ...options};

      event = new CustomEvent<T>(this.eventName, {detail: value, ...options});
    }

    return this.target.dispatchEvent(event);
  }
}

export function event(options?: EventOptions): any {
  return decorateProperty({
    descriptor: (key: PropertyKey) => {
      const eventName = options?.name ?? `ss-${key.toString()}`;

      return {
        get(this: HTMLElement) {
          return new EventEmitter(this, eventName, options);
        },
        enumerable: true,
        configurable: true,
      };
    },
  });
}
