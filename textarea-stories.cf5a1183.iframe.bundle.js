/*! For license information please see textarea-stories.cf5a1183.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[409],{"./node_modules/lit/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mo:()=>t,Cb:()=>n,IO:()=>e,NH:()=>query_assigned_elements_o,SB:()=>state_r});const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var reactive_element=__webpack_require__("./node_modules/@lit/reactive-element/reactive-element.js");const o={attribute:!0,type:String,converter:reactive_element.Ts,reflect:!1,hasChanged:reactive_element.Qu},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function state_r(r){return n({...r,state:!0,attribute:!1})}const base_e=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);function e(e,r){return(n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return base_e(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return base_e(n,s,{get(){return o(this)}})}}function query_assigned_elements_o(o){return(e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return base_e(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),o=o=>null!=o?o:lit_html.Ld},"./src/icon/data/error.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("error",{pathData:"M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm45 256l74-73q9-11 9-23 0-13-9.5-22.5T352 128q-12 0-23 9l-73 74-73-74q-10-9-23-9t-22.5 9.5T128 160q0 12 9 23l74 73-74 73q-9 10-9 23t9.5 22.5T160 384t23-9l73-74 73 74q11 9 23 9 13 0 22.5-9.5T384 352t-9-23z"});const __WEBPACK_DEFAULT_EXPORT__="error"},"./src/icon/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var util=__webpack_require__("./src/icon/util.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Icon=class Icon extends lit.oi{static{this.styles=lit.iv`
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
    `:lit.dy``}};__decorate([(0,decorators.Cb)({type:String})],Icon.prototype,"name",void 0),Icon=__decorate([(0,decorators.Mo)("stylospectrum-icon")],Icon)},"./src/icon/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getIconData,q:()=>registerIcon});const registry=new Map,registerIcon=(name,data)=>{registry.set(name,data)},getIconData=name=>registry.get(name)},"./src/textarea/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>stories});var lit=__webpack_require__("./node_modules/lit/index.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),types=__webpack_require__("./src/types/index.ts"),decorators_event=__webpack_require__("./src/utils/decorators/event.ts");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/icon/data/error.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Textarea=class Textarea extends lit.oi{constructor(){super(...arguments),this.placeholder="",this.valueState=types.$Y.None,this._innerValue=""}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{display:inline-block;box-sizing:border-box;width:100%;min-width:6rem;min-height:1.625rem;margin:.1875rem 0;color:#fff;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;font-style:normal;line-height:1.5;text-align:start;background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #a9b4be, #a9b4be) border-box;background-color:#161c22;border:none;border-radius:.25rem;box-shadow:inset 0 0 0 .0625rem rgba(169,180,190,.25);transition:none}:host([disabled]){background-color:#161c22;border-color:#a9b4be;cursor:default;opacity:.4;pointer-events:none}:host([focused]) .stylospectrum-textarea-wrapper::after{position:absolute;inset:0;z-index:2;border:.125rem solid rgba(0,0,0,0);border-radius:.25rem;content:"";pointer-events:none}:host([value-state=None]:not([focused]):hover){background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #4db1ff, #4db1ff) border-box;background-color:#1d232a;border-color:#4db1ff;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}:host([value-state=None][focused]){background-color:#1d232a;border-color:#4db1ff}:host([value-state=None][focused]) .stylospectrum-textarea-wrapper::after{border-color:#4db1ff}:host([value-state=Error]:not([disabled])){background:0 100%/100% .125rem no-repeat linear-gradient(0deg, #fa6161, #fa6161) border-box;background-color:#350000;border:.125rem none #fa6161;box-shadow:inset 0 0 0 .0625rem rgba(248,38,38,.3)}:host([value-state=Error]:not([focused]):hover){background-color:#1d232a;box-shadow:inset 0 0 0 .0625rem rgba(248,38,38,.3)}:host([value-state=Error][focused]){background-color:#1d232a;border-color:#fa6161}:host([value-state=Error][focused]) .stylospectrum-textarea-wrapper::after{border-color:#fa6161}:host([growing]) .stylospectrum-textarea{position:absolute;top:0;left:0;box-sizing:border-box;height:100%}.stylospectrum-textarea{flex:1 1 0%;box-sizing:border-box;width:100%;min-height:2.9375rem;padding:.1875rem .5rem .125rem;color:inherit;font-size:inherit;font-family:inherit;font-style:inherit;line-height:inherit;letter-spacing:inherit;text-align:inherit;text-overflow:ellipsis;word-spacing:inherit;background:rgba(0,0,0,0);border:none;outline:none;appearance:none;resize:none}.stylospectrum-textarea::-webkit-scrollbar:horizontal{height:.75rem}.stylospectrum-textarea::-webkit-scrollbar:vertical{width:.75rem}.stylospectrum-textarea::-webkit-scrollbar{background-color:#1d232a}.stylospectrum-textarea::-webkit-scrollbar-thumb{background-color:#647891;border:.125rem solid #1d232a;border-radius:.75rem}.stylospectrum-textarea::-webkit-scrollbar-thumb:hover{background-color:#8697ac}.stylospectrum-textarea::-webkit-scrollbar-corner{background-color:#1d232a}.stylospectrum-textarea::-webkit-placeholder{color:#8396a8;font-weight:normal;font-style:italic}.stylospectrum-textarea-wrapper{position:relative;display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box;min-height:2.9375rem;padding:.0625rem;color:inherit;background:rgba(0,0,0,0);border-radius:.25rem;outline:none}.stylospectrum-textarea-value-state-message{display:inline-block;color:#eaecee;font-weight:400;font-size:.75rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;line-height:normal}.stylospectrum-textarea-value-state-message-icon{display:inline-block;color:#fa6161;font-weight:400;font-size:1rem}.stylospectrum-textarea-value-state-message-wrapper{position:absolute;top:100%;left:0;z-index:1000;display:flex;gap:.375rem;align-items:center;box-sizing:border-box;width:100%;padding:.5rem;background:#350000;border-radius:.5rem;box-shadow:0 2px 8px 0 rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.35)}.stylospectrum-textarea-mirror{box-sizing:border-box;width:100%;min-height:2.9375rem;max-height:94vh;padding-top:.1875rem;padding-bottom:.125rem;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;line-height:1.5;word-break:break-all;visibility:hidden}')}
  `}_handleInput(e){const value=e.target.value;this.value||(this._innerValue=value),this._mirrorText=this.tokenizeText(value),this.changeEvent.emit(value)}_handleFocus(){this.focused=!0}_handleBlur(){this.focused=!1}getFocusDomRef(){return this.textarea}tokenizeText(value){const tokenizedText=value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&apos;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n");return this.mapTokenizedTextToObject(tokenizedText)}mapTokenizedTextToObject(tokenizedText){return tokenizedText.map(((token,index)=>({text:token,last:index===tokenizedText.length-1})))}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("value")&&(this._innerValue=this.value||"")}render(){const valueStateMessageNode=this.valueStateMessage&&this.valueState===types.$Y.Error&&this.focused?lit.dy` <div class="stylospectrum-textarea-value-state-message-wrapper">
            <stylospectrum-icon
              class="stylospectrum-textarea-value-state-message-icon"
              name="error"
            >
            </stylospectrum-icon>
            <span class="stylospectrum-textarea-value-state-message">
              ${this.valueStateMessage}
            </span>
          </div>`:lit.Ld,growingNode=this.growing?lit.dy`<div class="stylospectrum-textarea-mirror">
          ${(this._mirrorText||[]).map((token=>lit.dy`${token.text} <br />`))}
        </div>`:lit.Ld;return lit.dy`
      <span class="stylospectrum-textarea-wrapper">
        ${growingNode}
        <textarea
          .value=${this._innerValue}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
          .placeholder=${this.placeholder}
          class="stylospectrum-textarea"
          ?disabled=${this.disabled}
        ></textarea>
        ${valueStateMessageNode}
      </span>
    `}};__decorate([(0,decorators.Cb)({type:Boolean})],Textarea.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:String})],Textarea.prototype,"placeholder",void 0),__decorate([(0,decorators.Cb)({type:String})],Textarea.prototype,"value",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"value-state",reflect:!0})],Textarea.prototype,"valueState",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"value-state-message"})],Textarea.prototype,"valueStateMessage",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Textarea.prototype,"growing",void 0),__decorate([(0,decorators.SB)()],Textarea.prototype,"_innerValue",void 0),__decorate([(0,decorators.SB)()],Textarea.prototype,"_mirrorText",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Textarea.prototype,"focused",void 0),__decorate([(0,decorators_event.B)({name:"change"})],Textarea.prototype,"changeEvent",void 0),__decorate([(0,decorators.IO)("textarea")],Textarea.prototype,"textarea",void 0),Textarea=__decorate([(0,decorators.Mo)("stylospectrum-textarea")],Textarea);const stories={title:"Textarea",component:"stylospectrum-textarea",tags:["autodocs"],argTypes:{valueState:{control:"select",options:["None","Error"]}}},Basic=(args=>lit.dy`
    <stylospectrum-textarea
      @change="${e=>console.log("change:",e.detail)}"
      .value=${args.value||""}
      .placeholder=${args.placeholder||""}
      value-state-message=${(0,if_defined.o)(args.valueStateMessage)}
      value-state=${(0,if_defined.o)(args.valueState)}
      ?disabled=${args.disabled}
      ?growing=${args.growing}
    >
    </stylospectrum-textarea>
  `).bind({});Basic.args={}},"./src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ButtonDesign;__webpack_require__.d(__webpack_exports__,{Y7:()=>types_ButtonDesign,L$:()=>types_ButtonType,n$:()=>types_InputType,q_:()=>types_PopoverHorizontalAlign,$Y:()=>types_ValueState}),function(ButtonDesign){ButtonDesign.Primary="Primary",ButtonDesign.Secondary="Secondary",ButtonDesign.Tertiary="Tertiary"}(ButtonDesign||(ButtonDesign={}));const types_ButtonDesign=ButtonDesign;var ButtonType;!function(ButtonType){ButtonType.Button="Button",ButtonType.Submit="Submit",ButtonType.Reset="Reset"}(ButtonType||(ButtonType={}));const types_ButtonType=ButtonType;var InputType;!function(InputType){InputType.Text="Text",InputType.Email="Email",InputType.Number="Number",InputType.Password="Password",InputType.Tel="Tel",InputType.URL="URL"}(InputType||(InputType={}));const types_InputType=InputType;var ValueState;!function(ValueState){ValueState.None="None",ValueState.Success="Success",ValueState.Warning="Warning",ValueState.Error="Error",ValueState.Information="Information"}(ValueState||(ValueState={}));const types_ValueState=ValueState;var PopoverHorizontalAlign;!function(PopoverHorizontalAlign){PopoverHorizontalAlign.Center="Center",PopoverHorizontalAlign.Right="Right"}(PopoverHorizontalAlign||(PopoverHorizontalAlign={}));const types_PopoverHorizontalAlign=PopoverHorizontalAlign},"./src/utils/decorators/event.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>event_event});const decorateProperty=({finisher,descriptor})=>(protoOrDescriptor,name)=>{if(void 0===name){const key=protoOrDescriptor.originalKey??protoOrDescriptor.key,info=null!=descriptor?{kind:"method",placement:"prototype",key,descriptor:descriptor(protoOrDescriptor.key)}:{...protoOrDescriptor,key};return null!=finisher&&(info.finisher=function(ctor){finisher(ctor,key)}),info}{const ctor=protoOrDescriptor.constructor;void 0!==descriptor&&Object.defineProperty(protoOrDescriptor,name,descriptor(name)),finisher?.(ctor,name)}};class EventEmitter{constructor(target,eventName,options){this.target=target,this.eventName=eventName,this.options=options}emit(value,options){let event;return value instanceof Event?event=value:(options={bubbles:!0,composed:!0,...this.options,...options},event=new CustomEvent(this.eventName,{detail:value,...options})),this.target.dispatchEvent(event)}}function event_event(options){return decorateProperty({descriptor:key=>{const eventName=options?.name??`ss-${key.toString()}`;return{get(){return new EventEmitter(this,eventName,options)},enumerable:!0,configurable:!0}}})}}}]);
//# sourceMappingURL=textarea-stories.cf5a1183.iframe.bundle.js.map