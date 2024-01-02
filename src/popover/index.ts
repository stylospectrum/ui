import {LitElement, html, css, unsafeCSS, nothing} from 'lit';
import {
  customElement,
  property,
  query,
  queryAssignedElements,
  state,
} from 'lit/decorators.js';
import styles from './style/index.scss';
import {PopoverHorizontalAlign} from '../types';
import clamp from '../utils/clamp';
import getParentElement from '../utils/getParentElement';
import isElementContainingBlock from '../utils/isElementContainingBlock';
import {getFocusedElement, isClickInRect} from '../utils/popup';
import {getFirstFocusableElement} from '../utils/focusableElements';

type PopupSize = {
  width: number;
  height: number;
};

type ArrowPosition = {
  x: number;
  y: number;
};

type CalculatedPlacement = {
  arrow: ArrowPosition;
  top: number;
  left: number;
};

type RegisteredPopover = {
  instance: Popover;
  parentPopovers: Array<Popover>;
};

const ARROW_SIZE = 8;
const openedRegistry: Array<RegisteredPopover> = [];

@customElement('stylospectrum-popover')
class Popover extends LitElement {
  static override styles = css`
    ${unsafeCSS(styles)}
  `;

  static get VIEWPORT_MARGIN() {
    return 10; // px
  }

  /**
   * Defines the header text.
   *
   * @type {string}
   * @defaultValue ""
   * @public
   */
  @property({type: String, attribute: 'header-text'})
  headerText!: string;

  /**
   * Determines the horizontal alignment of the component.
   *
   * @type {PopoverHorizontalAlign}
   * @defaultValue "Center"
   * @public
   */
  @property({type: String, attribute: 'horizontal-align'})
  horizontalAlign = PopoverHorizontalAlign.Center;

  /**
   * @type {number}
   * @defaultValue 0
   * @private
   */
  @property({type: Number, attribute: 'offset-x'})
  offsetX = 0;

  @state()
  arrowTranslateX = 0;

  @state()
  arrowTranslateY = 0;

  @state()
  opened = false;

  @queryAssignedElements({slot: 'opener'})
  opener?: HTMLElement[];

  @query('.stylospectrum-popover-wrapper')
  popup?: HTMLElement;

  _top?: number;
  _left?: number;
  _focusedElementBeforeOpen?: HTMLElement | null;

  private _isOpenerClicked(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target === this.opener?.[0]) {
      return true;
    }

    return e.composedPath().indexOf(this.opener?.[0] as EventTarget) > -1;
  }

  private _clickHandler = (event: MouseEvent) => {
    const openedPopups = [...openedRegistry];

    if (openedPopups.length === 0) {
      return;
    }

    const isTopPopupPopover =
      openedPopups[openedPopups.length - 1].instance instanceof Popover;

    if (!isTopPopupPopover) {
      return;
    }

    for (let i = openedPopups.length - 1; i !== -1; i--) {
      const popup = openedPopups[i].instance;

      if (popup._isOpenerClicked(event)) {
        return;
      }

      if (isClickInRect(event, popup.popup!.getBoundingClientRect())) {
        break;
      }

      popup.hide();
    }
  };

  private _attachGlobalClickHandler = () => {
    document.addEventListener('mousedown', this._clickHandler);
  };

  private _detachGlobalClickHandler = () => {
    document.removeEventListener('mousedown', this._clickHandler);
  };

  private _getParentPopoversIfNested = (instance: Popover) => {
    let currentElement = instance.parentNode;
    const parentPopovers: Array<Popover> = [];

    while (currentElement && currentElement.parentNode) {
      for (let i = 0; i < openedRegistry.length; i++) {
        if (currentElement === openedRegistry[i].instance) {
          parentPopovers.push(currentElement as Popover);
        }
      }

      currentElement = currentElement.parentNode;
    }

    return parentPopovers;
  };

  private _addOpenedPopover = (instance: Popover) => {
    const parentPopovers = this._getParentPopoversIfNested(instance);

    openedRegistry.push({
      instance,
      parentPopovers,
    });

    if (openedRegistry.length === 1) {
      this._attachGlobalClickHandler();
    }
  };

  private _removeOpenedPopover = (instance: Popover) => {
    const popoversToClose = [instance];

    for (let i = 0; i < openedRegistry.length; i++) {
      const indexOfCurrentInstance =
        openedRegistry[i].parentPopovers.indexOf(instance);
      if (
        openedRegistry[i].parentPopovers.length > 0 &&
        indexOfCurrentInstance > -1
      ) {
        popoversToClose.push(openedRegistry[i].instance);
      }
    }

    for (let i = popoversToClose.length - 1; i >= 0; i--) {
      for (let j = 0; j < openedRegistry.length; j++) {
        let indexOfItemToRemove = -1;
        if (popoversToClose[i] === openedRegistry[j].instance) {
          indexOfItemToRemove = j;
        }

        if (indexOfItemToRemove >= 0) {
          const itemToClose = openedRegistry.splice(indexOfItemToRemove, 1);
          itemToClose[0].instance.hide();
        }
      }
    }

    if (!openedRegistry.length) {
      this._detachGlobalClickHandler();
    }
  };

  private _getContainingBlockClientLocation() {
    let parentElement = getParentElement(this);

    while (parentElement) {
      if (isElementContainingBlock(parentElement)) {
        return parentElement.getBoundingClientRect();
      }

      parentElement = getParentElement(parentElement);
    }

    return {left: 0, top: 0};
  }

  private _getPopupSize(): PopupSize {
    const rect = this.popup!.getBoundingClientRect(),
      width = rect.width,
      height = rect.height;

    return {width, height};
  }

  private _getVerticalLeft(
    targetRect: DOMRect,
    popoverSize: PopupSize
  ): number {
    let left = 0;

    switch (this.horizontalAlign) {
      case PopoverHorizontalAlign.Center:
        left = targetRect.left - (popoverSize.width - targetRect.width) / 2;
        break;
      case PopoverHorizontalAlign.Right:
        left = targetRect.right - popoverSize.width + this.offsetX;
        break;
    }

    return left;
  }

  private _getArrowPosition(
    targetRect: DOMRect,
    popoverSize: PopupSize,
    left: number,
    isVertical: boolean,
    borderRadius: number
  ): ArrowPosition {
    let arrowXCentered = this.horizontalAlign === PopoverHorizontalAlign.Center;

    if (
      this.horizontalAlign === PopoverHorizontalAlign.Right &&
      left <= targetRect.left
    ) {
      arrowXCentered = true;
    }

    let arrowTranslateX = 0;
    if (isVertical && arrowXCentered) {
      arrowTranslateX =
        targetRect.left + targetRect.width / 2 - left - popoverSize.width / 2;
    }

    let arrowTranslateY = 0;

    const safeRangeForArrowY =
      popoverSize.height / 2 - borderRadius - ARROW_SIZE / 2;
    arrowTranslateY = clamp(
      arrowTranslateY,
      -safeRangeForArrowY,
      safeRangeForArrowY
    );

    const safeRangeForArrowX =
      popoverSize.width / 2 - borderRadius - ARROW_SIZE / 2;
    arrowTranslateX = clamp(
      arrowTranslateX,
      -safeRangeForArrowX,
      safeRangeForArrowX
    );

    return {
      x: Math.round(arrowTranslateX),
      y: Math.round(arrowTranslateY),
    };
  }

  private _calcPlacement(
    targetRect: DOMRect,
    popoverSize: PopupSize
  ): CalculatedPlacement {
    const clientWidth = document.documentElement.clientWidth;
    const isVertical = true;
    const arrowOffset = ARROW_SIZE;

    let left = this._getVerticalLeft(targetRect, popoverSize);
    const top = targetRect.bottom + arrowOffset;

    if (isVertical) {
      if (popoverSize.width > clientWidth || left < 0) {
        left = 0;
      } else if (left + popoverSize.width > clientWidth) {
        left -= left + popoverSize.width - clientWidth;
      }
    }

    if (this._left === undefined || Math.abs(this._left - left) > 1.5) {
      this._left = Math.round(left);
    }

    if (this._top === undefined || Math.abs(this._top - top) > 1.5) {
      this._top = Math.round(top);
    }

    const borderRadius = Number.parseInt(
      window.getComputedStyle(this).getPropertyValue('border-radius')
    );
    const arrowPos = this._getArrowPosition(
      targetRect,
      popoverSize,
      left,
      isVertical,
      borderRadius
    );

    return {
      arrow: arrowPos,
      top: this._top,
      left: this._left,
    };
  }

  resetFocus() {
    if (!this._focusedElementBeforeOpen) {
      return;
    }

    this._focusedElementBeforeOpen.focus();
    this._focusedElementBeforeOpen = null;
  }

  public show() {
    if (this.opened) {
      return;
    }

    const popupSize = this._getPopupSize();
    const openerRect = this.opener?.[0].getBoundingClientRect();

    if (popupSize.width === 0 || popupSize.height === 0) {
      return;
    }

    const placement = this._calcPlacement(openerRect!, popupSize);

    let left = clamp(
      this._left!,
      Popover.VIEWPORT_MARGIN,
      document.documentElement.clientWidth -
        popupSize.width -
        Popover.VIEWPORT_MARGIN
    );

    let top = clamp(
      this._top!,
      Popover.VIEWPORT_MARGIN,
      document.documentElement.clientHeight -
        popupSize.height -
        Popover.VIEWPORT_MARGIN
    );
    top = Math.max(top, this._top!);

    this.arrowTranslateX = placement.arrow.x;
    this.arrowTranslateY = placement.arrow.y;

    const containingBlockClientLocation =
      this._getContainingBlockClientLocation();
    left -= containingBlockClientLocation.left;
    top -= containingBlockClientLocation.top;

    this._addOpenedPopover(this);
    this.opened = true;
    this._focusedElementBeforeOpen = getFocusedElement();

    const ele = getFirstFocusableElement(this);
    ele?.focus();

    Object.assign(this.popup!.style, {
      top: `${top}px`,
      left: `${left}px`,
    });
  }

  public hide() {
    if (!this.opened) {
      return;
    }

    this._removeOpenedPopover(this);
    this.opened = false;
    this.resetFocus();

    Object.assign(this.popup!.style, {
      top: '-10000px',
      left: '-10000px',
    });
  }

  override render() {
    const headerNode = this.headerText
      ? html`<header class="stylospectrum-popover-header" part="header">
          <h1 class="stylospectrum-popover-header-text">${this.headerText}</h1>
          <slot name="sub-header"></slot>
        </header>`
      : nothing;

    return html`
      <slot name="opener"></slot>

      <div class="stylospectrum-popover-wrapper">
        <section class="stylospectrum-popover">
          <span
            class="stylospectrum-popover-arrow"
            style="transform:translate(${this.arrowTranslateX}px, ${this
              .arrowTranslateY}px)"
          >
          </span>

          ${headerNode}

          <div part="content" class="stylospectrum-popover-content">
            <slot></slot>
          </div>

          <footer part="footer" class="stylospectrum-popover-footer">
            <slot name="footer"></slot>
          </footer>
        </section>
      </div>
    `;
  }
}

export default Popover;
