import {LitElement} from 'lit';
import isElementClickable from './isElementClickable';
import isElementHidden from './isElementHidden';

type FocusableElementPromise = HTMLElement | null;

const isFocusTrap = (el: HTMLElement) => {
  return el.hasAttribute('data-focus-trap');
};

const getFirstFocusableElement = (
  container: HTMLElement,
  startFromContainer?: boolean
): FocusableElementPromise => {
  if (!container) {
    return null;
  }

  return findFocusableElement(container, true, startFromContainer);
};

const getLastFocusableElement = (
  container: HTMLElement,
  startFromContainer?: boolean
): FocusableElementPromise => {
  if (!container) {
    return null;
  }

  return findFocusableElement(container, false, startFromContainer);
};

const isElemFocusable = (el: HTMLElement) => {
  return el.hasAttribute('data-focus-redirect') || !isElementHidden(el);
};

const findFocusableElement = (
  container: HTMLElement,
  forward: boolean,
  startFromContainer?: boolean
): FocusableElementPromise => {
  let child: HTMLElement | undefined;
  let assignedElements;
  let currentIndex = -1;

  if (container.shadowRoot) {
    child = forward
      ? (container.shadowRoot.firstChild as HTMLElement)
      : (container.shadowRoot.lastChild as HTMLElement);
  } else if (
    container instanceof HTMLSlotElement &&
    container.assignedNodes()
  ) {
    assignedElements = container.assignedNodes();
    currentIndex = forward ? 0 : assignedElements.length - 1;
    child = assignedElements[currentIndex] as HTMLElement;
  } else if (startFromContainer) {
    child = container;
  } else {
    child = forward
      ? (container.firstElementChild as HTMLElement)
      : (container.lastElementChild as HTMLElement);
  }

  let focusableDescendant;

  /* eslint-disable no-await-in-loop */

  while (child) {
    const originalChild: HTMLElement | undefined = child;

    if (child instanceof LitElement) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      child = (child as any)?.getFocusDomRef?.();
    }

    if (!child) {
      return null;
    }

    if (child.nodeType === 1 && isElemFocusable(child) && !isFocusTrap(child)) {
      if (isElementClickable(child)) {
        return child && typeof child.focus === 'function' ? child : null;
      }

      focusableDescendant = findFocusableElement(child, forward);
      if (focusableDescendant) {
        return focusableDescendant &&
          typeof focusableDescendant.focus === 'function'
          ? focusableDescendant
          : null;
      }
    }

    child = forward
      ? (originalChild.nextSibling as HTMLElement)
      : (originalChild.previousSibling as HTMLElement);

    if (assignedElements && !assignedElements[currentIndex].contains(child)) {
      currentIndex = forward ? currentIndex + 1 : currentIndex - 1;

      child = assignedElements[currentIndex] as HTMLElement;
    }
  }

  /* eslint-enable no-await-in-loop */

  return null;
};

export {getFirstFocusableElement, getLastFocusableElement};
