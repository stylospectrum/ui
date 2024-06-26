import {LitElement, html, css, unsafeCSS, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import styles from './style/index.scss';
import {Placement, PopoverHorizontalAlign} from '../types';
import clamp from '../utils/clamp';
import getParentElement from '../utils/getParentElement';
import isElementContainingBlock from '../utils/isElementContainingBlock';
import {getFocusedElement, isClickInRect} from '../utils/popup';
import {getFirstFocusableElement} from '../utils/focusableElements';
import {EventEmitter, event} from '../utils';

type PopoverSize = {
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
   * @default false
   * @public
   */
  @property({type: Boolean, attribute: 'hide-footer'})
  hideFooter!: boolean;

  /**
   * Determines on which side the component is placed at.
   *
   * @default "Bottom"
   * @public
   */
  @property({type: String, reflect: true})
  placement = Placement.Bottom;

  /**
   * Determines whether the component arrow is hidden.
   *
   * @default false
   * @public
   */
  @property({type: Boolean, attribute: 'hide-arrow'})
  hideArrow!: boolean;

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

  /**
   * @type {number}
   * @defaultValue 0
   * @private
   */
  @property({type: Number, attribute: 'offset-y'})
  offsetY = 0;

  @state()
  arrowTranslateX = 0;

  @state()
  arrowTranslateY = 0;

  @state()
  opened = false;

  _opener?: HTMLElement;
  _top?: number;
  _left?: number;
  _focusedElementBeforeOpen?: HTMLElement | null;
  _scaleElement?: HTMLElement | null;

  /**
   * @event
   * @public
   */
  @event({name: 'close'})
  closeEvent!: EventEmitter<void>;

  /**
   * @event
   * @public
   */
  @event({name: 'open'})
  openEvent!: EventEmitter<void>;

  private _isOpenerClicked(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target === this._opener) {
      return true;
    }

    return e.composedPath().indexOf(this._opener as EventTarget) > -1;
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

      if (isClickInRect(event, popup!.getBoundingClientRect())) {
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

  private _getContainingBlockClient() {
    let parentElement = getParentElement(this);

    while (parentElement) {
      if (isElementContainingBlock(parentElement)) {
        return parentElement;
      }

      parentElement = getParentElement(parentElement);
    }

    return null;
  }

  private _getPopupSize(): PopoverSize {
    const rect = this!.getBoundingClientRect(),
      width = rect.width,
      height = rect.height;

    return {width, height};
  }

  private _getVerticalLeft(
    targetRect: DOMRect,
    popoverSize: PopoverSize
  ): number {
    let left = 0;

    switch (this.horizontalAlign) {
      case PopoverHorizontalAlign.Left:
        left = targetRect.left;
        break;
      case PopoverHorizontalAlign.Center:
        left = targetRect.left - (popoverSize.width - targetRect.width) / 2;
        break;
      case PopoverHorizontalAlign.Right:
        left = targetRect.right - popoverSize.width + this.offsetX;
        break;
    }

    return left;
  }

  private _getHorizontalTop(
    targetRect: DOMRect,
    popoverSize: PopoverSize
  ): number {
    return targetRect.top - (popoverSize.height - targetRect.height) / 2;
  }

  private _getArrowPosition(
    targetRect: DOMRect,
    popoverSize: PopoverSize,
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

  /**
   * Fallbacks to new placement, prioritizing <code>Left</code> and <code>Right</code> placements.
   * @private
   */
  private _fallbackPlacement(
    clientWidth: number,
    clientHeight: number,
    targetRect: DOMRect,
    popoverSize: PopoverSize
  ): Placement | undefined {
    if (targetRect.left > popoverSize.width) {
      return Placement.Left;
    }

    if (clientWidth - targetRect.right > targetRect.left) {
      return Placement.Right;
    }

    if (clientHeight - targetRect.bottom > popoverSize.height) {
      return Placement.Bottom;
    }

    if (clientHeight - targetRect.bottom < targetRect.top) {
      return Placement.Top;
    }

    return undefined;
  }

  private _getScale() {
    if (!this._scaleElement) {
      this._scaleElement = this._getContainingBlockClient();
    }

    if (this._scaleElement) {
      const {transform} = window.getComputedStyle(this._scaleElement);

      if (transform && transform !== 'none') {
        const matrix = transform.match(/^matrix\((.+)\)$/);

        if (matrix) {
          const matrixValues = matrix[1].split(', ');
          const scaleX = parseFloat(matrixValues[0]);
          const scaleY = parseFloat(matrixValues[3]);
          return {scaleX, scaleY};
        }
      }
      return {scaleX: 1, scaleY: 1};
    }

    return {scaleX: 1, scaleY: 1};
  }

  private _getActualPlacement(
    targetRect: DOMRect,
    popoverSize: PopoverSize
  ): Placement {
    let actualPlacement = this.placement;

    const scale = this._getScale();
    const clientWidth = document.documentElement.clientWidth / scale.scaleX;
    const clientHeight = document.documentElement.clientHeight / scale.scaleY;

    switch (this.placement) {
      case Placement.Bottom:
        if (
          clientHeight - targetRect.bottom < popoverSize.height &&
          clientHeight - targetRect.bottom < targetRect.top
        ) {
          actualPlacement = Placement.Top;
        }
        break;
      case Placement.Left:
        if (targetRect.left < popoverSize.width) {
          actualPlacement =
            this._fallbackPlacement(
              clientWidth,
              clientHeight,
              targetRect,
              popoverSize
            ) || this.placement;
        }
        break;
      case Placement.Top:
        if (
          targetRect.top < popoverSize.height &&
          targetRect.top < clientHeight - targetRect.bottom
        ) {
          actualPlacement = Placement.Bottom;
        }
        break;
      case Placement.Right:
        if (clientWidth - targetRect.right < popoverSize.width) {
          actualPlacement =
            this._fallbackPlacement(
              clientWidth,
              clientHeight,
              targetRect,
              popoverSize
            ) || this.placement;
        }
        break;
    }

    return actualPlacement;
  }

  private _calcPlacement(
    targetRect: DOMRect,
    popoverSize: PopoverSize
  ): CalculatedPlacement {
    let left = 0;
    let top = 0;
    const scale = this._getScale();

    targetRect = {
      ...targetRect,
      width: targetRect.width / scale.scaleX,
      height: targetRect.height / scale.scaleY,
      left: targetRect.left / scale.scaleX,
      right: targetRect.right / scale.scaleX,
      top: targetRect.top / scale.scaleY,
      bottom: targetRect.bottom / scale.scaleY,
    };

    popoverSize = {
      width: popoverSize.width / scale.scaleX,
      height: popoverSize.height / scale.scaleY,
    };

    const clientWidth = document.documentElement.clientWidth / scale.scaleX;
    const clientHeight = document.documentElement.clientHeight / scale.scaleY;
    const isVertical = this.placement === Placement.Bottom;
    const arrowOffset = this.hideArrow ? 0 : ARROW_SIZE;
    const placement = this._getActualPlacement(targetRect, popoverSize);

    switch (placement) {
      case Placement.Bottom:
        left = this._getVerticalLeft(targetRect, popoverSize);
        top = targetRect.bottom + arrowOffset + this.offsetY;

        break;
      case Placement.Left:
        left = Math.max(targetRect.left - popoverSize.width - arrowOffset, 0);
        top = this._getHorizontalTop(targetRect, popoverSize);
        break;
      case Placement.Right:
        left = targetRect.left + targetRect.width + arrowOffset + this.offsetX;
        top = this._getHorizontalTop(targetRect, popoverSize);
        break;
      case Placement.Top:
        left = this._getVerticalLeft(targetRect, popoverSize);
        top = Math.max(targetRect.top - popoverSize.height - arrowOffset, 0);
        break;
    }

    if (isVertical) {
      if (popoverSize.width > clientWidth || left < 0) {
        left = 0;
      } else if (left + popoverSize.width > clientWidth) {
        left -= left + popoverSize.width - clientWidth;
      }
    } else {
      if (popoverSize.height > clientHeight || top < 0) {
        top = 0;
      } else if (top + popoverSize.height > clientHeight) {
        top -= top + popoverSize.height - clientHeight;
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

  private _resetFocus() {
    if (!this._focusedElementBeforeOpen) {
      return;
    }

    this._focusedElementBeforeOpen.focus();
    this._focusedElementBeforeOpen = null;
  }

  public showAt(opener: HTMLElement, width?: number) {
    this._opener = opener;
    this.show(width);
  }

  private show(width?: number) {
    if (this.opened) {
      return;
    }

    if (width) {
      this.style.width = `${width}px`;
    }

    this.style.display = 'block';
    this.openEvent.emit();

    const popupSize = this._getPopupSize();
    const openerRect = this._opener!.getBoundingClientRect();

    if (popupSize.width === 0 || popupSize.height === 0) {
      return;
    }

    const placement = this._calcPlacement(openerRect!, popupSize);
    const scale = this._getScale();
    const doc = document.documentElement;
    const maxWidth =
      (doc.clientWidth - popupSize.width - Popover.VIEWPORT_MARGIN) /
      scale.scaleX;
    const maxHeight =
      (doc.clientHeight - popupSize.height - Popover.VIEWPORT_MARGIN) /
      scale.scaleY;

    let left = clamp(this._left!, Popover.VIEWPORT_MARGIN, maxWidth);
    let top = clamp(this._top!, Popover.VIEWPORT_MARGIN, maxHeight);

    top = Math.max(top, this._top!);

    this.arrowTranslateX = placement.arrow.x;
    this.arrowTranslateY = placement.arrow.y;

    const containingBlockClient = this._getContainingBlockClient();
    const containingBlockClientLocation =
      containingBlockClient?.getBoundingClientRect();

    if (containingBlockClientLocation) {
      left -= containingBlockClientLocation.left / scale.scaleX;
      top -= containingBlockClientLocation.top / scale.scaleY;
    }

    this._addOpenedPopover(this);
    this.opened = true;
    this._focusedElementBeforeOpen = getFocusedElement();

    const ele = getFirstFocusableElement(this);
    ele?.focus();

    Object.assign(this!.style, {
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
    this._resetFocus();

    this.style.display = 'none';
    Object.assign(this!.style, {
      top: '-10000px',
      left: '-10000px',
    });

    this.closeEvent.emit();
  }

  override render() {
    const headerNode = this.headerText
      ? html`<header class="stylospectrum-popover-header" part="header">
          <h1 class="stylospectrum-popover-header-text">${this.headerText}</h1>
          <slot name="sub-header"></slot>
        </header>`
      : nothing;

    const footerNode = this.hideFooter
      ? nothing
      : html`<footer part="footer" class="stylospectrum-popover-footer">
          <div class="stylospectrum-popover-footer-space"></div>
          <slot name="ok-button"></slot>
          <slot name="cancel-button"></slot>
        </footer>`;

    const arrowNode = this.hideArrow
      ? nothing
      : html`<span
          class="stylospectrum-popover-arrow"
          style="transform:translate(${this.arrowTranslateX}px, ${this
            .arrowTranslateY}px)"
        >
        </span>`;

    return html`
      <section class="stylospectrum-popover">
        ${arrowNode} ${headerNode}

        <div part="content" class="stylospectrum-popover-content">
          <slot></slot>
        </div>

        ${footerNode}
      </section>
    `;
  }
}

export default Popover;
