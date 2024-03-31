"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[712],{"./src/list/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>listContext});const listContext=(0,__webpack_require__("./node_modules/@lit/context/index.js").q6)("list")},"./src/list/list-item.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),context=__webpack_require__("./node_modules/@lit/context/index.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),style_map=__webpack_require__("./node_modules/lit/directives/style-map.js"),list_context=__webpack_require__("./src/list/context.ts");__webpack_require__("./src/icon/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let ListItem=class ListItem extends lit.WF{static{this.styles=lit.AH`
    ${(0,lit.iz)('.stylospectrum-list-item{position:relative;display:flex;align-items:center;box-sizing:border-box;height:2rem;padding-right:.75rem;background-color:#1d232a;border-bottom:1px solid rgba(0,0,0,0);cursor:pointer}.stylospectrum-list-item-focused{background-color:#222b35}.stylospectrum-list-item-focused::after{position:absolute;border:.125rem solid #9ad3ff;border-radius:0;content:"";pointer-events:none;inset:.125rem}.stylospectrum-list-item-selected{background:#1d2d3e;border-bottom-color:#4db1ff}.stylospectrum-list-item-icon{color:#a9b4be;font-size:1rem}.stylospectrum-list-item-icon-wrapper{display:flex;align-items:center;justify-content:center;width:2rem;height:2rem}.stylospectrum-list-item-text{display:block;overflow:hidden;color:#eaecee;font-weight:400;font-size:.875rem;font-family:72;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;text-overflow:ellipsis}.stylospectrum-list-item:hover{background-color:#222b35}.stylospectrum-list-item:active{background-color:#020303}')}
  `}render(){const selected=(this._consumer?.selectedId||this._consumer?.defaultSelectedId)===this.id;return lit.qy`<li
      class=${(0,class_map.H)({"stylospectrum-list-item":!0,"stylospectrum-list-item-selected":selected,"stylospectrum-list-item-focused":this.focused})}
      style=${(0,style_map.W)({"padding-left":this.icon?"0":"0.75rem"})}
      @click=${()=>{this._consumer?.onChangeId?.(this.id)}}
    >
      ${this.icon?lit.qy` <span class="stylospectrum-list-item-icon-wrapper">
            <stylospectrum-icon
              class="stylospectrum-list-item-icon"
              name="${this.icon}"
            >
            </stylospectrum-icon>
          </span>`:lit.s6}

      <span class="stylospectrum-list-item-text"><slot></slot></span>
    </li>`}};__decorate([(0,decorators.MZ)({type:String})],ListItem.prototype,"icon",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],ListItem.prototype,"focused",void 0),__decorate([(0,context.Fg)({context:list_context.Y,subscribe:!0})],ListItem.prototype,"_consumer",void 0),ListItem=__decorate([(0,decorators.EM)("stylospectrum-list-item")],ListItem)},"./src/popover/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var types=__webpack_require__("./src/types/index.ts");const utils_clamp=(val,min,max)=>Math.min(Math.max(val,min),max),utils_getParentElement=el=>el.parentElement?el.parentNode:el.parentNode.host,utils_isElementContainingBlock=el=>{const computedStyle=getComputedStyle(el);return["size","inline-size"].indexOf(computedStyle.containerType)>-1||["transform","perspective"].indexOf(computedStyle.willChange)>-1||["layout","paint","strict","content"].indexOf(computedStyle.contain)>-1||computedStyle.transform&&"none"!==computedStyle.transform||computedStyle.perspective&&"none"!==computedStyle.perspective||computedStyle.backdropFilter&&"none"!==computedStyle.backdropFilter},isClickInRect=(e,rect)=>{let x,y;if(e instanceof MouseEvent)x=e.clientX,y=e.clientY;else{const touch=e.touches[0];x=touch.clientX,y=touch.clientY}return((x,y,rect)=>x>=rect.left&&x<=rect.right&&y>=rect.top&&y<=rect.bottom)(x,y,rect)},getFocusedElement=()=>{const element=(()=>{let element=document.activeElement;for(;element&&element.shadowRoot&&element.shadowRoot.activeElement;)element=element.shadowRoot.activeElement;return element})();return element&&"function"==typeof element.focus?element:null},rClickable=/^(?:a|area)$/i,rFocusable=/^(?:input|select|textarea|button)$/i,utils_isElementClickable=el=>{if(el.disabled)return!1;const tabIndex=el.getAttribute("tabindex");return null!=tabIndex?parseInt(tabIndex)>=0:rFocusable.test(el.nodeName)||rClickable.test(el.nodeName)&&!!el.href},utils_isElementHidden=el=>"SLOT"!==el.nodeName&&(el.offsetWidth<=0&&el.offsetHeight<=0||el.style&&"hidden"===el.style.visibility),isFocusTrap=el=>el.hasAttribute("data-focus-trap"),findFocusableElement=(container,forward,startFromContainer)=>{let child,assignedElements,focusableDescendant,currentIndex=-1;for(container.shadowRoot?child=forward?container.shadowRoot.firstChild:container.shadowRoot.lastChild:container instanceof HTMLSlotElement&&container.assignedNodes()?(assignedElements=container.assignedNodes(),currentIndex=forward?0:assignedElements.length-1,child=assignedElements[currentIndex]):child=startFromContainer?container:forward?container.firstElementChild:container.lastElementChild;child;){const originalChild=child;if(child instanceof lit.WF&&(child=child?.getFocusDomRef?.()),!child)return null;if(1===child.nodeType&&((el=child).hasAttribute("data-focus-redirect")||!utils_isElementHidden(el))&&!isFocusTrap(child)){if(utils_isElementClickable(child))return child&&"function"==typeof child.focus?child:null;if(focusableDescendant=findFocusableElement(child,forward),focusableDescendant)return focusableDescendant&&"function"==typeof focusableDescendant.focus?focusableDescendant:null}child=forward?originalChild.nextSibling:originalChild.previousSibling,assignedElements&&!assignedElements[currentIndex].contains(child)&&(currentIndex=forward?currentIndex+1:currentIndex-1,child=assignedElements[currentIndex])}var el;return null};var Popover_1,decorators_event=__webpack_require__("./src/utils/decorators/event.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};const openedRegistry=[];let Popover=class Popover extends lit.WF{constructor(){super(...arguments),this.placement=types.W.Bottom,this.horizontalAlign=types.x1.Center,this.offsetX=0,this.offsetY=0,this.arrowTranslateX=0,this.arrowTranslateY=0,this.opened=!1,this._clickHandler=event=>{const openedPopups=[...openedRegistry];if(0===openedPopups.length)return;if(openedPopups[openedPopups.length-1].instance instanceof Popover_1)for(let i=openedPopups.length-1;-1!==i;i--){const popup=openedPopups[i].instance;if(popup._isOpenerClicked(event))return;if(isClickInRect(event,popup.getBoundingClientRect()))break;popup.hide()}},this._attachGlobalClickHandler=()=>{document.addEventListener("mousedown",this._clickHandler)},this._detachGlobalClickHandler=()=>{document.removeEventListener("mousedown",this._clickHandler)},this._getParentPopoversIfNested=instance=>{let currentElement=instance.parentNode;const parentPopovers=[];for(;currentElement&&currentElement.parentNode;){for(let i=0;i<openedRegistry.length;i++)currentElement===openedRegistry[i].instance&&parentPopovers.push(currentElement);currentElement=currentElement.parentNode}return parentPopovers},this._addOpenedPopover=instance=>{const parentPopovers=this._getParentPopoversIfNested(instance);openedRegistry.push({instance,parentPopovers}),1===openedRegistry.length&&this._attachGlobalClickHandler()},this._removeOpenedPopover=instance=>{const popoversToClose=[instance];for(let i=0;i<openedRegistry.length;i++){const indexOfCurrentInstance=openedRegistry[i].parentPopovers.indexOf(instance);openedRegistry[i].parentPopovers.length>0&&indexOfCurrentInstance>-1&&popoversToClose.push(openedRegistry[i].instance)}for(let i=popoversToClose.length-1;i>=0;i--)for(let j=0;j<openedRegistry.length;j++){let indexOfItemToRemove=-1;if(popoversToClose[i]===openedRegistry[j].instance&&(indexOfItemToRemove=j),indexOfItemToRemove>=0){openedRegistry.splice(indexOfItemToRemove,1)[0].instance.hide()}}openedRegistry.length||this._detachGlobalClickHandler()}}static{Popover_1=this}static{this.styles=lit.AH`
    ${(0,lit.iz)(':host{position:fixed;top:-10000px;left:-10000px;z-index:1000;box-sizing:border-box;min-width:6.25rem;max-width:calc(100% - 20px);min-height:2rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background-color:#1d232a;border-radius:.5rem;box-shadow:0 0 0 .0625rem rgba(255,255,255,.35),0 .625rem 1.875rem 0 rgba(0,0,0,.6)}:host([placement=Bottom]) .stylospectrum-popover-arrow{top:-0.5rem;left:calc(50% - .5625rem);height:.5625rem}:host([placement=Bottom]) .stylospectrum-popover-arrow::after{margin:.1875rem 0 0 .1875rem}:host([placement=Left]) .stylospectrum-popover-arrow{top:calc(50% - .5625rem);right:-0.5625rem;width:.5625rem}:host([placement=Left]) .stylospectrum-popover-arrow::after{margin:.1875rem 0 0 -0.375rem}:host([placement=Right]) .stylospectrum-popover-arrow{top:calc(50% - .5625rem);left:-0.5625rem;width:.5625rem}:host([placement=Right]) .stylospectrum-popover-arrow::after{margin:.125rem 0 0 .25rem}.stylospectrum-popover{display:flex;flex-direction:column;box-sizing:border-box;width:100%;height:100%;overflow:hidden;background:inherit;border-radius:inherit;outline:none}.stylospectrum-popover-arrow{position:absolute;display:block;width:1rem;overflow:hidden;pointer-events:none}.stylospectrum-popover-arrow::after{display:block;width:.7rem;height:.7rem;background-color:#1d232a;box-shadow:0 0 0 .0625rem rgba(255,255,255,.35),0 .625rem 1.875rem 0 rgba(0,0,0,.6);transform:rotate(-45deg);content:""}.stylospectrum-popover-header{display:flex;flex-direction:column;justify-content:center;margin:0;padding:0 1rem;color:#eaecee;font-size:1rem;background-color:#1d232a;box-shadow:0 .125rem .125rem 0 rgba(0,0,0,.2),inset 0 -0.0625rem 0 0 #2e3742}.stylospectrum-popover-header-text{display:inline-block;max-width:100%;min-height:2.5rem;max-height:2.5rem;margin:0;overflow:hidden;font-weight:400;font-size:1rem;line-height:2.5rem;white-space:nowrap;text-overflow:ellipsis}.stylospectrum-popover-content{box-sizing:border-box;overflow:auto;color:#eaecee}.stylospectrum-popover-content::-webkit-scrollbar:horizontal{height:.75rem}.stylospectrum-popover-content::-webkit-scrollbar:vertical{width:.75rem}.stylospectrum-popover-content::-webkit-scrollbar{background-color:#1d232a}.stylospectrum-popover-content::-webkit-scrollbar-thumb{background-color:#647891;border:.125rem solid #1d232a;border-radius:.75rem}.stylospectrum-popover-content::-webkit-scrollbar-thumb:hover{background-color:#8697ac}.stylospectrum-popover-content::-webkit-scrollbar-corner{background-color:#1d232a}.stylospectrum-popover-footer{display:flex;align-items:center;justify-content:center;height:2.5rem;margin:0;padding:0 1rem;color:#eaecee;font-size:1rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background-color:#1d232a;border-top:1px solid #2e3742}.stylospectrum-popover-footer-space{flex:1}::slotted([slot=cancel-button]){margin-left:.5rem}')}
  `}static get VIEWPORT_MARGIN(){return 10}_isOpenerClicked(e){return e.target===this._opener||e.composedPath().indexOf(this._opener)>-1}_getContainingBlockClient(){let parentElement=utils_getParentElement(this);for(;parentElement;){if(utils_isElementContainingBlock(parentElement))return parentElement;parentElement=utils_getParentElement(parentElement)}return null}_getPopupSize(){const rect=this.getBoundingClientRect();return{width:rect.width,height:rect.height}}_getVerticalLeft(targetRect,popoverSize){let left=0;switch(this.horizontalAlign){case types.x1.Left:left=targetRect.left;break;case types.x1.Center:left=targetRect.left-(popoverSize.width-targetRect.width)/2;break;case types.x1.Right:left=targetRect.right-popoverSize.width+this.offsetX}return left}_getHorizontalTop(targetRect,popoverSize){return targetRect.top-(popoverSize.height-targetRect.height)/2}_getArrowPosition(targetRect,popoverSize,left,isVertical,borderRadius){let arrowXCentered=this.horizontalAlign===types.x1.Center;this.horizontalAlign===types.x1.Right&&left<=targetRect.left&&(arrowXCentered=!0);let arrowTranslateX=0;isVertical&&arrowXCentered&&(arrowTranslateX=targetRect.left+targetRect.width/2-left-popoverSize.width/2);let arrowTranslateY=0;const safeRangeForArrowY=popoverSize.height/2-borderRadius-4;arrowTranslateY=utils_clamp(arrowTranslateY,-safeRangeForArrowY,safeRangeForArrowY);const safeRangeForArrowX=popoverSize.width/2-borderRadius-4;return arrowTranslateX=utils_clamp(arrowTranslateX,-safeRangeForArrowX,safeRangeForArrowX),{x:Math.round(arrowTranslateX),y:Math.round(arrowTranslateY)}}_fallbackPlacement(clientWidth,clientHeight,targetRect,popoverSize){return targetRect.left>popoverSize.width?types.W.Left:clientWidth-targetRect.right>targetRect.left?types.W.Right:clientHeight-targetRect.bottom>popoverSize.height?types.W.Bottom:clientHeight-targetRect.bottom<targetRect.top?types.W.Top:void 0}_getScale(){if(this._scaleElement||(this._scaleElement=this._getContainingBlockClient()),this._scaleElement){const{transform}=window.getComputedStyle(this._scaleElement);if(transform&&"none"!==transform){const matrix=transform.match(/^matrix\((.+)\)$/);if(matrix){const matrixValues=matrix[1].split(", ");return{scaleX:parseFloat(matrixValues[0]),scaleY:parseFloat(matrixValues[3])}}}return{scaleX:1,scaleY:1}}return{scaleX:1,scaleY:1}}_getActualPlacement(targetRect,popoverSize){let actualPlacement=this.placement;const scale=this._getScale(),clientWidth=document.documentElement.clientWidth/scale.scaleX,clientHeight=document.documentElement.clientHeight/scale.scaleY;switch(this.placement){case types.W.Bottom:clientHeight-targetRect.bottom<popoverSize.height&&clientHeight-targetRect.bottom<targetRect.top&&(actualPlacement=types.W.Top);break;case types.W.Left:targetRect.left<popoverSize.width&&(actualPlacement=this._fallbackPlacement(clientWidth,clientHeight,targetRect,popoverSize)||this.placement);break;case types.W.Top:targetRect.top<popoverSize.height&&targetRect.top<clientHeight-targetRect.bottom&&(actualPlacement=types.W.Bottom);break;case types.W.Right:clientWidth-targetRect.right<popoverSize.width&&(actualPlacement=this._fallbackPlacement(clientWidth,clientHeight,targetRect,popoverSize)||this.placement)}return actualPlacement}_calcPlacement(targetRect,popoverSize){let left=0,top=0;const scale=this._getScale();targetRect={...targetRect,width:targetRect.width/scale.scaleX,height:targetRect.height/scale.scaleY,left:targetRect.left/scale.scaleX,right:targetRect.right/scale.scaleX,top:targetRect.top/scale.scaleY,bottom:targetRect.bottom/scale.scaleY},popoverSize={width:popoverSize.width/scale.scaleX,height:popoverSize.height/scale.scaleY};const clientWidth=document.documentElement.clientWidth/scale.scaleX,clientHeight=document.documentElement.clientHeight/scale.scaleY,isVertical=this.placement===types.W.Bottom,arrowOffset=this.hideArrow?0:8;switch(this._getActualPlacement(targetRect,popoverSize)){case types.W.Bottom:left=this._getVerticalLeft(targetRect,popoverSize),top=targetRect.bottom+arrowOffset+this.offsetY;break;case types.W.Left:left=Math.max(targetRect.left-popoverSize.width-arrowOffset,0),top=this._getHorizontalTop(targetRect,popoverSize);break;case types.W.Right:left=targetRect.left+targetRect.width+arrowOffset+this.offsetX,top=this._getHorizontalTop(targetRect,popoverSize);break;case types.W.Top:left=this._getVerticalLeft(targetRect,popoverSize),top=Math.max(targetRect.top-popoverSize.height-arrowOffset,0)}isVertical?popoverSize.width>clientWidth||left<0?left=0:left+popoverSize.width>clientWidth&&(left-=left+popoverSize.width-clientWidth):popoverSize.height>clientHeight||top<0?top=0:top+popoverSize.height>clientHeight&&(top-=top+popoverSize.height-clientHeight),(void 0===this._left||Math.abs(this._left-left)>1.5)&&(this._left=Math.round(left)),(void 0===this._top||Math.abs(this._top-top)>1.5)&&(this._top=Math.round(top));const borderRadius=Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));return{arrow:this._getArrowPosition(targetRect,popoverSize,left,isVertical,borderRadius),top:this._top,left:this._left}}_resetFocus(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null)}showAt(opener,width){this._opener=opener,this.show(width)}show(width){if(this.opened)return;width&&(this.style.width=`${width}px`),this.style.display="block",this.openEvent.emit();const popupSize=this._getPopupSize(),openerRect=this._opener.getBoundingClientRect();if(0===popupSize.width||0===popupSize.height)return;const placement=this._calcPlacement(openerRect,popupSize),scale=this._getScale(),doc=document.documentElement,maxWidth=(doc.clientWidth-popupSize.width-Popover_1.VIEWPORT_MARGIN)/scale.scaleX,maxHeight=(doc.clientHeight-popupSize.height-Popover_1.VIEWPORT_MARGIN)/scale.scaleY;let left=utils_clamp(this._left,Popover_1.VIEWPORT_MARGIN,maxWidth),top=utils_clamp(this._top,Popover_1.VIEWPORT_MARGIN,maxHeight);top=Math.max(top,this._top),this.arrowTranslateX=placement.arrow.x,this.arrowTranslateY=placement.arrow.y;const containingBlockClient=this._getContainingBlockClient(),containingBlockClientLocation=containingBlockClient?.getBoundingClientRect();containingBlockClientLocation&&(left-=containingBlockClientLocation.left/scale.scaleX,top-=containingBlockClientLocation.top/scale.scaleY),this._addOpenedPopover(this),this.opened=!0,this._focusedElementBeforeOpen=getFocusedElement();const ele=(container=this)?findFocusableElement(container,!0,startFromContainer):null;var container,startFromContainer;ele?.focus(),Object.assign(this.style,{top:`${top}px`,left:`${left}px`})}hide(){this.opened&&(this._removeOpenedPopover(this),this.opened=!1,this._resetFocus(),this.style.display="none",Object.assign(this.style,{top:"-10000px",left:"-10000px"}),this.closeEvent.emit())}render(){const headerNode=this.headerText?lit.qy`<header class="stylospectrum-popover-header" part="header">
          <h1 class="stylospectrum-popover-header-text">${this.headerText}</h1>
          <slot name="sub-header"></slot>
        </header>`:lit.s6,footerNode=this.hideFooter?lit.s6:lit.qy`<footer part="footer" class="stylospectrum-popover-footer">
          <div class="stylospectrum-popover-footer-space"></div>
          <slot name="ok-button"></slot>
          <slot name="cancel-button"></slot>
        </footer>`,arrowNode=this.hideArrow?lit.s6:lit.qy`<span
          class="stylospectrum-popover-arrow"
          style="transform:translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)"
        >
        </span>`;return lit.qy`
      <section class="stylospectrum-popover">
        ${arrowNode} ${headerNode}

        <div part="content" class="stylospectrum-popover-content">
          <slot></slot>
        </div>

        ${footerNode}
      </section>
    `}};__decorate([(0,decorators.MZ)({type:Boolean,attribute:"hide-footer"})],Popover.prototype,"hideFooter",void 0),__decorate([(0,decorators.MZ)({type:String,reflect:!0})],Popover.prototype,"placement",void 0),__decorate([(0,decorators.MZ)({type:Boolean,attribute:"hide-arrow"})],Popover.prototype,"hideArrow",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"header-text"})],Popover.prototype,"headerText",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"horizontal-align"})],Popover.prototype,"horizontalAlign",void 0),__decorate([(0,decorators.MZ)({type:Number,attribute:"offset-x"})],Popover.prototype,"offsetX",void 0),__decorate([(0,decorators.MZ)({type:Number,attribute:"offset-y"})],Popover.prototype,"offsetY",void 0),__decorate([(0,decorators.wk)()],Popover.prototype,"arrowTranslateX",void 0),__decorate([(0,decorators.wk)()],Popover.prototype,"arrowTranslateY",void 0),__decorate([(0,decorators.wk)()],Popover.prototype,"opened",void 0),__decorate([(0,decorators_event.f)({name:"close"})],Popover.prototype,"closeEvent",void 0),__decorate([(0,decorators_event.f)({name:"open"})],Popover.prototype,"openEvent",void 0),Popover=Popover_1=__decorate([(0,decorators.EM)("stylospectrum-popover")],Popover)}}]);
//# sourceMappingURL=712.f03e5215.iframe.bundle.js.map