"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[683],{"./src/icon/data/slim-arrow-down.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").p)("slim-arrow-down",{pathData:"M96 186q0-11 7.5-18.5T122 160q10 0 18 8l116 121 116-121q8-8 18-8 11 0 18.5 7.5T416 186q0 10-7 17L275 344q-8 8-19 8-12 0-18-8L103 203q-7-7-7-17z"});const __WEBPACK_DEFAULT_EXPORT__="slim-arrow-down"},"./src/icon/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),style_map=__webpack_require__("./node_modules/lit/directives/style-map.js");var util=__webpack_require__("./src/icon/util.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Icon=class Icon extends lit.WF{constructor(){super(...arguments),this.rotate=0}static{this.styles=lit.AH`
    ${(0,lit.iz)(":host{position:relative;display:inline-block;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-0.125em;text-rendering:optimizelegibility;-webkit-font-smoothing:antialiased}")}
  `}render(){const iconData=(0,util.y)(this.name);return iconData?lit.qy`
      <i>
        <svg
          viewBox="0 0 512 512"
          width="1em"
          height="1em"
          role="presentation"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
          part="root"
          aria-hidden="true"
          style=${(0,style_map.W)({transform:`rotate(${this.rotate}deg)`})}
        >
          <g role="presentation">
            <path d="${iconData.pathData}" />
          </g>
        </svg>
      </i>
    `:lit.qy``}};__decorate([(0,decorators.MZ)({type:String})],Icon.prototype,"name",void 0),__decorate([(0,decorators.MZ)({type:Number})],Icon.prototype,"rotate",void 0),Icon=__decorate([(0,decorators.EM)("stylospectrum-icon")],Icon)},"./src/icon/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>registerIcon,y:()=>getIconData});const registry=new Map,registerIcon=(name,data)=>{registry.set(name,data)},getIconData=name=>registry.get(name)},"./src/menu/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>menuContext});const menuContext=(0,__webpack_require__("./node_modules/@lit/context/index.js").q6)("menu")},"./src/menu/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/decorators.js"),_lit_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@lit/context/index.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/menu/context.ts"),_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/utils/decorators/event.ts"),__decorate=(__webpack_require__("./src/popover/index.ts"),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let Menu=class Menu extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{constructor(){super(...arguments),this._provider=new _lit_context__WEBPACK_IMPORTED_MODULE_2__.DT(this,{context:_context__WEBPACK_IMPORTED_MODULE_3__.H})}showAt(opener,width){this._popoverNode.showAt(opener,width)}hide(){this._popoverNode.hide()}connectedCallback(){super.connectedCallback(),this._provider.setValue({hidePopover:()=>{this._popoverNode.hide()}})}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <stylospectrum-popover
        @close=${()=>this.closeEvent.emit()}
        @open=${()=>this.openEvent.emit()}
        hide-footer
        hide-arrow
        horizontal-align="Left"
      >
        <slot></slot>
      </stylospectrum-popover>
    `}};__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.P)("stylospectrum-popover")],Menu.prototype,"_popoverNode",void 0),__decorate([(0,_utils__WEBPACK_IMPORTED_MODULE_5__.f)({name:"close"})],Menu.prototype,"closeEvent",void 0),__decorate([(0,_utils__WEBPACK_IMPORTED_MODULE_5__.f)({name:"open"})],Menu.prototype,"openEvent",void 0),Menu=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("stylospectrum-menu")],Menu)},"./src/menu/menu-item.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/decorators.js"),_lit_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@lit/context/index.js"),_context__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/menu/context.ts"),__decorate=(__webpack_require__("./src/list/list-item.ts"),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let MenuItem=class MenuItem extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{constructor(){super(...arguments),this.focused=!1}handleMouseEnter(){this.focused=!0}handleMouseLeave(){this.focused=!1}handleClick(e){e.stopPropagation(),this.click(),this._consumer?.hidePopover?.()}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.qy`
      <stylospectrum-list-item
        .id=${this.id}
        ?focused=${this.focused&&!this.disableFocused}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
        @click=${this.handleClick}
        icon=${this.icon}
      >
        <slot></slot>
      </stylospectrum-list-item>
    `}};__decorate([(0,_lit_context__WEBPACK_IMPORTED_MODULE_2__.Fg)({context:_context__WEBPACK_IMPORTED_MODULE_3__.H,subscribe:!0})],MenuItem.prototype,"_consumer",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:String})],MenuItem.prototype,"icon",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({type:Boolean,attribute:"disable-focused"})],MenuItem.prototype,"disableFocused",void 0),__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.wk)()],MenuItem.prototype,"focused",void 0),MenuItem=__decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.EM)("stylospectrum-menu-item")],MenuItem)},"./src/select/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>stories});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),lit=__webpack_require__("./node_modules/lit/index.js"),repeat=__webpack_require__("./node_modules/lit/directives/repeat.js"),context=__webpack_require__("./node_modules/@lit/context/index.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),list_context=__webpack_require__("./src/list/context.ts"),decorators_event=__webpack_require__("./src/utils/decorators/event.ts");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/menu/index.ts"),__webpack_require__("./src/menu/menu-item.ts"),__webpack_require__("./src/icon/data/slim-arrow-down.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Select=class Select extends lit.WF{constructor(){super(...arguments),this.focused=!1,this.opened=!1,this._innerValue="",this._provider=new context.DT(this,{context:list_context.Y}),this._menuRef=(0,ref._)()}static{this.styles=lit.AH`
    ${(0,lit.iz)(':host{display:inline-block;box-sizing:border-box;width:13.125rem;min-width:4rem;height:1.625rem;margin:.1875rem 0;color:#fff;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;font-style:normal;text-align:start;background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #a9b4be, #a9b4be) border-box;background-color:#161c22;border:none;border-radius:.25rem;box-shadow:inset 0 0 0 .0625rem rgba(169,180,190,.25);cursor:pointer}:host([focused]:not([opened])){background-color:#1d232a;border-color:#4db1ff}:host([focused]:not([opened])) .stylospectrum-select::after{position:absolute;inset:0;z-index:2;border:.125rem solid #4db1ff;border-radius:#4db1ff;content:"";pointer-events:none}:host([opened]) .stylospectrum-select-icon{color:#4db1ff;background:#002643;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3);border-inline-start:none}.stylospectrum-select{position:relative;display:flex;width:100%;min-width:4rem;height:100%;overflow:hidden;border-radius:.25rem;outline:none;cursor:pointer}.stylospectrum-select:hover{background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #4db1ff, #4db1ff) border-box;background-color:#1d232a;border:none;border-color:#4db1ff;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}.stylospectrum-select-label{display:inline-flex;flex-grow:1;flex-shrink:1;align-items:center;align-self:center;min-width:1rem;height:100%;overflow:hidden;color:#fff;font-weight:400;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;white-space:nowrap;text-overflow:ellipsis;outline:none;cursor:pointer;padding-inline-start:.5rem}.stylospectrum-select-icon{width:1rem;height:1rem;padding:.3125rem .5rem .25rem;color:#eaecee;font-size:1rem;border-radius:.25rem;outline:none;cursor:pointer;border-inline-start:none}.stylospectrum-select-icon:not(:active):hover{background:#1d232a;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}.stylospectrum-select-icon:active{color:#4db1ff;background-color:#213131;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}.stylospectrum-select-option{padding-right:.25rem;padding-left:1rem}')}
  `}_handleClick(){this.opened?this._menuRef.value?.hide():this._menuRef.value?.showAt(this,this.offsetWidth)}_handleFocusIn(){this.opened||(this.focused=!0)}_handleFocusOut(){this.focused=!1}_handleSelect(value){this._innerValue=value,this.changeEvent.emit(value),this._provider.setValue({selectedId:value})}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("value")&&(this._innerValue=this.value||this.defaultValue||"",this._provider.setValue({defaultSelectedId:this._innerValue}))}get label(){return this.options.find((option=>option.id===this._innerValue))?.name||""}render(){return lit.qy`
      <div class="stylospectrum-select" @click=${this._handleClick}>
        <div
          class="stylospectrum-select-label"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded=${this.opened}
          tabindex=${this.opened?"-1":"0"}
          @focusin=${this._handleFocusIn}
          @focusout=${this._handleFocusOut}
        >
          ${this.label}
        </div>
        <stylospectrum-icon
          name="slim-arrow-down"
          class="stylospectrum-select-icon"
        >
        </stylospectrum-icon>
      </div>

      <stylospectrum-menu
        @close=${()=>this.opened=!1}
        @open=${()=>{this.opened=!0,this.focused=!1}}
        @select=${e=>this._handleSelect(e.detail)}
        ${(0,ref.K)(this._menuRef)}
      >
        ${(0,repeat.u)(this.options,(option=>option.id),(option=>lit.qy`
            <stylospectrum-menu-item
              ?disable-focused=${!0}
              .id=${option.id}
              @click=${()=>this._handleSelect(option.id)}
            >
              <div class="stylospectrum-select-option">${option.name}</div>
            </stylospectrum-menu-item>
          `))}
      </stylospectrum-menu>
    `}};__decorate([(0,decorators.MZ)({type:Array})],Select.prototype,"options",void 0),__decorate([(0,decorators.MZ)({type:String})],Select.prototype,"value",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"default-value"})],Select.prototype,"defaultValue",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],Select.prototype,"focused",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],Select.prototype,"opened",void 0),__decorate([(0,decorators_event.f)({name:"change"})],Select.prototype,"changeEvent",void 0),__decorate([(0,decorators.wk)()],Select.prototype,"_innerValue",void 0),Select=__decorate([(0,decorators.EM)("stylospectrum-select")],Select);const stories={title:"Select",component:"stylospectrum-select",tags:["autodocs"]},Basic=(()=>lit.qy`
    <stylospectrum-select
      .options=${[{id:v4.A(),name:"Color"},{id:v4.A(),name:"Type"},{id:v4.A(),name:"Size"}]}
    >
    </stylospectrum-select>
  `).bind({});Basic.args={}},"./src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ButtonDesign;__webpack_require__.d(__webpack_exports__,{bW:()=>types_ButtonDesign,VQ:()=>types_ButtonType,NZ:()=>types_InputType,W:()=>types_Placement,x1:()=>types_PopoverHorizontalAlign,H6:()=>types_ValueState}),function(ButtonDesign){ButtonDesign.Primary="Primary",ButtonDesign.Secondary="Secondary",ButtonDesign.Tertiary="Tertiary"}(ButtonDesign||(ButtonDesign={}));const types_ButtonDesign=ButtonDesign;var ButtonType;!function(ButtonType){ButtonType.Button="Button",ButtonType.Submit="Submit",ButtonType.Reset="Reset"}(ButtonType||(ButtonType={}));const types_ButtonType=ButtonType;var InputType;!function(InputType){InputType.Text="Text",InputType.Email="Email",InputType.Number="Number",InputType.Password="Password",InputType.Tel="Tel",InputType.URL="URL"}(InputType||(InputType={}));const types_InputType=InputType;var ValueState;!function(ValueState){ValueState.None="None",ValueState.Success="Success",ValueState.Warning="Warning",ValueState.Error="Error",ValueState.Information="Information"}(ValueState||(ValueState={}));const types_ValueState=ValueState;var PopoverHorizontalAlign;!function(PopoverHorizontalAlign){PopoverHorizontalAlign.Left="Left",PopoverHorizontalAlign.Center="Center",PopoverHorizontalAlign.Right="Right"}(PopoverHorizontalAlign||(PopoverHorizontalAlign={}));const types_PopoverHorizontalAlign=PopoverHorizontalAlign;var Placement;!function(Placement){Placement.Left="Left",Placement.Right="Right",Placement.Top="Top",Placement.Bottom="Bottom"}(Placement||(Placement={}));const types_Placement=Placement},"./src/utils/decorators/event.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>event_event});const decorateProperty=({finisher,descriptor})=>(protoOrDescriptor,name)=>{if(void 0===name){const key=protoOrDescriptor.originalKey??protoOrDescriptor.key,info=null!=descriptor?{kind:"method",placement:"prototype",key,descriptor:descriptor(protoOrDescriptor.key)}:{...protoOrDescriptor,key};return null!=finisher&&(info.finisher=function(ctor){finisher(ctor,key)}),info}{const ctor=protoOrDescriptor.constructor;void 0!==descriptor&&Object.defineProperty(protoOrDescriptor,name,descriptor(name)),finisher?.(ctor,name)}};class EventEmitter{constructor(target,eventName,options){this.target=target,this.eventName=eventName,this.options=options}emit(value,options){let event;return value instanceof Event?event=value:(options={bubbles:!0,composed:!0,...this.options,...options},event=new CustomEvent(this.eventName,{detail:value,...options})),this.target.dispatchEvent(event)}}function event_event(options){return decorateProperty({descriptor:key=>{const eventName=options?.name??`ss-${key.toString()}`;return{get(){return new EventEmitter(this,eventName,options)},enumerable:!0,configurable:!0}}})}}}]);
//# sourceMappingURL=select-stories.ed53b2e2.iframe.bundle.js.map