"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[315],{"./src/icon/data/decline.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("decline",{pathData:"M292 256l117 116q7 7 7 18 0 12-7.5 19t-18.5 7q-10 0-18-8L256 292 140 408q-8 8-18 8-11 0-18.5-7.5T96 390q0-10 8-18l116-116-116-116q-8-8-8-18 0-11 7.5-18.5T122 96t18 7l116 117 116-117q7-7 18-7t18.5 7.5T416 122t-7 18z"});const __WEBPACK_DEFAULT_EXPORT__="decline"},"./src/icon/data/error.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("error",{pathData:"M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm45 256l74-73q9-11 9-23 0-13-9.5-22.5T352 128q-12 0-23 9l-73 74-73-74q-10-9-23-9t-22.5 9.5T128 160q0 12 9 23l74 73-74 73q-9 10-9 23t9.5 22.5T160 384t23-9l73-74 73 74q11 9 23 9 13 0 22.5-9.5T384 352t-9-23z"});const __WEBPACK_DEFAULT_EXPORT__="error"},"./src/icon/data/search.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("search",{pathData:"M473 436q7 7 7 18t-7.5 18.5T454 480q-10 0-18-8l-95-95q-51 39-117 39-40 0-75-15t-61-41-41-61-15-75 15-75 41-61 61-41 75-15 75 15 61 41 41 61 15 75q0 64-39 117zM83 224q0 30 11 55.5t30 44.5 44.5 30 55.5 11 55.5-11 44.5-30 30-44.5 11-55.5-11-55.5-30-44.5-44.5-30T224 83t-55.5 11-44.5 30-30 44.5T83 224z"});const __WEBPACK_DEFAULT_EXPORT__="search"},"./src/icon/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var util=__webpack_require__("./src/icon/util.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Icon=class Icon extends lit.oi{static{this.styles=lit.iv`
    ${(0,lit.$m)(":host{position:relative;display:inline-block;color:inherit;font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-0.125em;text-rendering:optimizelegibility;-webkit-font-smoothing:antialiased}")}
  `}render(){const iconData=(0,util.W)(this.name);return iconData?lit.dy`
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
        >
          <g role="presentation">
            <path d="${iconData.pathData}" />
          </g>
        </svg>
      </i>
    `:lit.dy``}};__decorate([(0,decorators.Cb)({type:String})],Icon.prototype,"name",void 0),Icon=__decorate([(0,decorators.Mo)("stylospectrum-icon")],Icon)},"./src/icon/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getIconData,q:()=>registerIcon});const registry=new Map,registerIcon=(name,data)=>{registry.set(name,data)},getIconData=name=>registry.get(name)},"./src/input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>input});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),types=__webpack_require__("./src/types/index.ts"),decorators_event=__webpack_require__("./src/utils/decorators/event.ts"),Keys=__webpack_require__("./src/utils/Keys.ts");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/icon/data/decline.ts"),__webpack_require__("./src/icon/data/error.ts"),__webpack_require__("./src/icon/data/search.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Input=class Input extends lit.oi{constructor(){super(...arguments),this.placeholder="",this.valueState=types.$Y.None,this.type=types.n$.Text,this._innerValue=""}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{display:inline-block;box-sizing:border-box;width:13.125rem;min-width:4rem;height:1.625rem;margin:.1875rem 0;color:#fff;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;font-style:normal;text-align:start;background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #a9b4be, #a9b4be) border-box;background-color:#161c22;border:none;border-radius:.25rem;box-shadow:inset 0 0 0 .0625rem rgba(169,180,190,.25);transition:none}:host([disabled]){background-color:#161c22;border-color:#a9b4be;cursor:default;opacity:.4;pointer-events:none}:host([focused]) .stylospectrum-input-wrapper::after{position:absolute;inset:0;z-index:2;border:.125rem solid rgba(0,0,0,0);border-radius:.25rem;content:"";pointer-events:none}:host([value-state=None]:not([focused]):hover){background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #4db1ff, #4db1ff) border-box;background-color:#1d232a;border-color:#4db1ff;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}:host([value-state=None][focused]){background-color:#1d232a;border-color:#4db1ff}:host([value-state=None][focused]) .stylospectrum-input-wrapper::after{border-color:#4db1ff}:host([value-state=Error]:not([disabled])){background:0 100%/100% .125rem no-repeat linear-gradient(0deg, #fa6161, #fa6161) border-box;background-color:#350000;border:.125rem none #fa6161;box-shadow:inset 0 0 0 .0625rem rgba(248,38,38,.3)}:host([value-state=Error]:not([focused]):hover){background-color:#1d232a;box-shadow:inset 0 0 0 .0625rem rgba(248,38,38,.3)}:host([value-state=Error][focused]){background-color:#1d232a;border-color:#fa6161}:host([value-state=Error][focused]) .stylospectrum-input-wrapper::after{border-color:#fa6161}.stylospectrum-input{flex:1 1 0%;box-sizing:border-box;width:100%;min-width:2rem;padding:0 .5rem;color:inherit;font-size:inherit;font-family:inherit;font-style:inherit;line-height:inherit;letter-spacing:inherit;text-align:inherit;text-overflow:ellipsis;word-spacing:inherit;background:rgba(0,0,0,0);border:none;outline:none;appearance:none}.stylospectrum-input-wrapper{position:relative;display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box;height:100%;color:inherit;background:rgba(0,0,0,0);border-radius:.25rem;outline:none}.stylospectrum-input-icon{padding:0;color:inherit}.stylospectrum-input-icon-wrapper{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:2rem;min-width:2rem;height:calc(100% - 1px);min-height:1rem;padding:0;color:#eaecee;border-radius:.25rem;outline:none;cursor:pointer;border-inline-start:none}.stylospectrum-input-icon-wrapper:hover{background-color:#1d232a;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}.stylospectrum-input-icon-wrapper:active{color:#4db1ff;background-color:#213131;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}.stylospectrum-input-value-state-message{display:inline-block;color:#eaecee;font-weight:400;font-size:.75rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;line-height:normal}.stylospectrum-input-value-state-message-icon{display:inline-block;color:#fa6161;font-weight:400;font-size:1rem}.stylospectrum-input-value-state-message-wrapper{position:absolute;top:100%;left:0;z-index:1000;display:flex;gap:.375rem;align-items:center;box-sizing:border-box;width:100%;padding:.5rem;background:#350000;border-radius:.5rem;box-shadow:0 2px 8px 0 rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.35)}')}
  `}_handleClear(){this._innerValue="",this._showClearIcon=!1,this.changeEvent.emit(this._innerValue),this.input?.focus()}_handleSearchIconClick(){this.focused=!0,this.input.focus()}_handleInput(e){const value=e.target.value;this.value||(this._innerValue=value),this._showClearIcon=this.allowClear&&!!value&&!this.disabled,this.changeEvent.emit(value)}_handleFocus(){this.focused=!0}_handleBlur(){this.focused=!1}_handleKeyDown(e){(0,Keys.tH)(e)&&this.enterEvent.emit(this._innerValue)}getFocusDomRef(){return this.input}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("value")&&(this._innerValue=this.value||""),(_changedProperties.has("allowClear")||_changedProperties.has("value")||_changedProperties.has("disabled"))&&(this._showClearIcon=this.allowClear&&!!this._innerValue&&!this.disabled)}render(){const clearIconNode=this._showClearIcon?lit.dy`<span
          class="stylospectrum-input-icon-wrapper"
          @click=${this._handleClear}
        >
          <stylospectrum-icon class="stylospectrum-input-icon" name="decline">
          </stylospectrum-icon>
        </span>`:lit.Ld,searchIconNode=this.showSearch?lit.dy`<span class="stylospectrum-input-icon-wrapper">
          <stylospectrum-icon
            class="stylospectrum-input-icon"
            name="search"
            @click=${this._handleSearchIconClick}
          >
          </stylospectrum-icon>
        </span>`:lit.Ld,valueStateMessageNode=this.valueStateMessage&&this.valueState===types.$Y.Error&&this.focused?lit.dy` <div class="stylospectrum-input-value-state-message-wrapper">
            <stylospectrum-icon
              class="stylospectrum-input-value-state-message-icon"
              name="error"
            >
            </stylospectrum-icon>
            <span class="stylospectrum-input-value-state-message">
              ${this.valueStateMessage}
            </span>
          </div>`:lit.Ld;return lit.dy`
      <span class="stylospectrum-input-wrapper">
        <input
          .value=${this._innerValue}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
          type=${this.type.toLowerCase()}
          .placeholder=${this.placeholder}
          class="stylospectrum-input"
          ?disabled=${this.disabled}
        />
        ${clearIconNode} ${valueStateMessageNode} ${searchIconNode}
      </span>
    `}};__decorate([(0,decorators.Cb)({type:Boolean})],Input.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:String})],Input.prototype,"placeholder",void 0),__decorate([(0,decorators.Cb)({type:String})],Input.prototype,"value",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"value-state",reflect:!0})],Input.prototype,"valueState",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"value-state-message"})],Input.prototype,"valueStateMessage",void 0),__decorate([(0,decorators.Cb)({type:Boolean,attribute:"allow-clear"})],Input.prototype,"allowClear",void 0),__decorate([(0,decorators.Cb)({type:Boolean,attribute:"show-search"})],Input.prototype,"showSearch",void 0),__decorate([(0,decorators.Cb)({type:String})],Input.prototype,"type",void 0),__decorate([(0,decorators.SB)()],Input.prototype,"_showClearIcon",void 0),__decorate([(0,decorators.SB)()],Input.prototype,"_innerValue",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Input.prototype,"focused",void 0),__decorate([(0,decorators_event.B)({name:"change"})],Input.prototype,"changeEvent",void 0),__decorate([(0,decorators_event.B)({name:"enter"})],Input.prototype,"enterEvent",void 0),__decorate([(0,decorators.IO)("input")],Input.prototype,"input",void 0),Input=__decorate([(0,decorators.Mo)("stylospectrum-input")],Input);const input=Input},"./src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ButtonDesign;__webpack_require__.d(__webpack_exports__,{Y7:()=>types_ButtonDesign,L$:()=>types_ButtonType,n$:()=>types_InputType,q_:()=>types_PopoverHorizontalAlign,$Y:()=>types_ValueState}),function(ButtonDesign){ButtonDesign.Primary="Primary",ButtonDesign.Secondary="Secondary",ButtonDesign.Tertiary="Tertiary"}(ButtonDesign||(ButtonDesign={}));const types_ButtonDesign=ButtonDesign;var ButtonType;!function(ButtonType){ButtonType.Button="Button",ButtonType.Submit="Submit",ButtonType.Reset="Reset"}(ButtonType||(ButtonType={}));const types_ButtonType=ButtonType;var InputType;!function(InputType){InputType.Text="Text",InputType.Email="Email",InputType.Number="Number",InputType.Password="Password",InputType.Tel="Tel",InputType.URL="URL"}(InputType||(InputType={}));const types_InputType=InputType;var ValueState;!function(ValueState){ValueState.None="None",ValueState.Success="Success",ValueState.Warning="Warning",ValueState.Error="Error",ValueState.Information="Information"}(ValueState||(ValueState={}));const types_ValueState=ValueState;var PopoverHorizontalAlign;!function(PopoverHorizontalAlign){PopoverHorizontalAlign.Center="Center",PopoverHorizontalAlign.Right="Right"}(PopoverHorizontalAlign||(PopoverHorizontalAlign={}));const types_PopoverHorizontalAlign=PopoverHorizontalAlign},"./src/utils/Keys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wd:()=>isSpace,tH:()=>isEnter});const KeyCodes_ENTER=13,KeyCodes_SPACE=32,hasModifierKeys=event=>event.shiftKey||event.altKey||(event=>!(!event.metaKey&&!event.ctrlKey))(event),isEnter=event=>(event.key?"Enter"===event.key:event.keyCode===KeyCodes_ENTER)&&!hasModifierKeys(event),isSpace=event=>(event.key?"Spacebar"===event.key||" "===event.key:event.keyCode===KeyCodes_SPACE)&&!hasModifierKeys(event)},"./src/utils/decorators/event.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>event_event});const decorateProperty=({finisher,descriptor})=>(protoOrDescriptor,name)=>{if(void 0===name){const key=protoOrDescriptor.originalKey??protoOrDescriptor.key,info=null!=descriptor?{kind:"method",placement:"prototype",key,descriptor:descriptor(protoOrDescriptor.key)}:{...protoOrDescriptor,key};return null!=finisher&&(info.finisher=function(ctor){finisher(ctor,key)}),info}{const ctor=protoOrDescriptor.constructor;void 0!==descriptor&&Object.defineProperty(protoOrDescriptor,name,descriptor(name)),finisher?.(ctor,name)}};class EventEmitter{constructor(target,eventName,options){this.target=target,this.eventName=eventName,this.options=options}emit(value,options){let event;return value instanceof Event?event=value:(options={bubbles:!0,composed:!0,...this.options,...options},event=new CustomEvent(this.eventName,{detail:value,...options})),this.target.dispatchEvent(event)}}function event_event(options){return decorateProperty({descriptor:key=>{const eventName=options?.name??`ss-${key.toString()}`;return{get(){return new EventEmitter(this,eventName,options)},enumerable:!0,configurable:!0}}})}}}]);
//# sourceMappingURL=315.c2713e49.iframe.bundle.js.map