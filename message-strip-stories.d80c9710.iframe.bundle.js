/*! For license information please see message-strip-stories.d80c9710.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[667],{"./node_modules/lit/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mo:()=>t,Cb:()=>n,IO:()=>e,NH:()=>query_assigned_elements_o,SB:()=>state_r});const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var reactive_element=__webpack_require__("./node_modules/@lit/reactive-element/reactive-element.js");const o={attribute:!0,type:String,converter:reactive_element.Ts,reflect:!1,hasChanged:reactive_element.Qu},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function state_r(r){return n({...r,state:!0,attribute:!1})}const base_e=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);function e(e,r){return(n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return base_e(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return base_e(n,s,{get(){return o(this)}})}}function query_assigned_elements_o(o){return(e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return base_e(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}},"./src/icon/data/sys-enter-2.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("sys-enter-2",{pathData:"M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm150 183q10-9 10-23 0-13-9.5-22.5T384 128t-22 9L186 308l-68-63q-9-9-22-9t-22.5 9.5T64 268q0 15 10 24l91 83q9 9 21 9 13 0 23-9z"});const __WEBPACK_DEFAULT_EXPORT__="sys-enter-2"},"./src/icon/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var util=__webpack_require__("./src/icon/util.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Icon=class Icon extends lit.oi{static{this.styles=lit.iv`
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
    `:lit.dy``}};__decorate([(0,decorators.Cb)({type:String})],Icon.prototype,"name",void 0),Icon=__decorate([(0,decorators.Mo)("stylospectrum-icon")],Icon)},"./src/icon/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getIconData,q:()=>registerIcon});const registry=new Map,registerIcon=(name,data)=>{registry.set(name,data)},getIconData=name=>registry.get(name)},"./src/message-strip/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>stories});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/icon/data/sys-enter-2.ts");var IconMapping,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};!function(IconMapping){IconMapping.Success="sys-enter-2"}(IconMapping||(IconMapping={}));let MessageStrip=class MessageStrip extends lit.oi{static{this.styles=lit.iv`
    ${(0,lit.$m)(':host(:not([hidden])){display:inline-block;width:100%}.stylospectrum-message-strip{position:relative;display:flex;box-sizing:border-box;width:100%;height:100%;padding:.4375rem 2.5rem;border-style:solid;border-width:1px;border-radius:.5rem}.stylospectrum-message-strip-success{background-color:#11331a;border-color:#246c37}.stylospectrum-message-strip-success .stylospectrum-message-strip-icon{color:#6dad1f}.stylospectrum-message-strip-icon-wrapper{position:absolute;top:.4375rem;box-sizing:border-box;inset-inline-start:.75rem}.stylospectrum-message-strip-text{width:100%;color:#eaecee;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;line-height:1.2}')}
  `}get icon(){return IconMapping.Success}render(){return lit.dy`
      <div
        class="stylospectrum-message-strip stylospectrum-message-strip-success"
      >
        <div class="stylospectrum-message-strip-icon-wrapper">
          <stylospectrum-icon
            class="stylospectrum-message-strip-icon"
            name="${this.icon}"
          >
          </stylospectrum-icon>
        </div>
        <span class="stylospectrum-message-strip-text"><slot></slot></span>
      </div>
    `}};MessageStrip=__decorate([(0,decorators.Mo)("stylospectrum-message-strip")],MessageStrip);const stories={title:"MessageStrip",component:"stylospectrum-message-strip",tags:["autodocs"]},Basic=(()=>lit.dy`<stylospectrum-message-strip>
    MessageStrip
  </stylospectrum-message-strip>`).bind({});Basic.args={}}}]);
//# sourceMappingURL=message-strip-stories.d80c9710.iframe.bundle.js.map