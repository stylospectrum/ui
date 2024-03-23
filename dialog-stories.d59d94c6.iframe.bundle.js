/*! For license information please see dialog-stories.d59d94c6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[223],{"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OA:()=>t,WL:()=>i,u$:()=>e});const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{EM:()=>t,MZ:()=>n,P:()=>e,YG:()=>query_all_r,KN:()=>query_assigned_elements_o,wk:()=>state_r});const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var reactive_element=__webpack_require__("./node_modules/@lit/reactive-element/reactive-element.js");const o={attribute:!0,type:String,converter:reactive_element.W3,reflect:!1,hasChanged:reactive_element.Ec},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function state_r(r){return n({...r,state:!0,attribute:!1})}const base_e=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);function e(e,r){return(n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return base_e(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return base_e(n,s,{get(){return o(this)}})}}let query_all_e;function query_all_r(r){return(n,o)=>base_e(n,o,{get(){return(this.renderRoot??(query_all_e??=document.createDocumentFragment())).querySelectorAll(r)}})}function query_assigned_elements_o(o){return(e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return base_e(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}},"./node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");const n="important",i=" !"+n,o=(0,directive.u$)(class extends directive.WL{constructor(t){if(super(t),t.type!==directive.OA.ATTRIBUTE||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{const s=t[r];return null==s?e:e+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[r]){const{style:s}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(r)),this.render(r);for(const t of this.ft)null==r[t]&&(this.ft.delete(t),t.includes("-")?s.removeProperty(t):s[t]=null);for(const t in r){const e=r[t];if(null!=e){this.ft.add(t);const r="string"==typeof e&&e.endsWith(i);t.includes("-")||r?s.setProperty(t,r?e.slice(0,-11):e,r?n:""):s[t]=e}}return lit_html.c0}})},"./src/dialog/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),decorators_event=__webpack_require__("./src/utils/decorators/event.ts");__webpack_require__("./src/icon/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Dialog=class Dialog extends lit.WF{constructor(){super(...arguments),this.opened=!1}static{this.styles=lit.AH`
    ${(0,lit.iz)('.stylospectrum-dialog{display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:100vw;height:100%;background:inherit;border-radius:inherit;outline:none}.stylospectrum-dialog-wrap{position:fixed;z-index:1250;display:flex;flex-direction:column;box-sizing:border-box;min-width:20rem;max-width:90%;min-height:6rem;max-height:94%;background:#1d232a;border-radius:.75rem;box-shadow:0 0 0 .0625rem rgba(255,255,255,.35),0 1.25rem 5rem 0 rgba(0,0,0,.6)}.stylospectrum-dialog-header{position:relative;display:flex;flex-direction:column;justify-content:flex-start;margin:0;padding:0 1rem;color:#eaecee;font-size:1rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background:#1d232a;border-radius:.75rem .75rem 0 0;outline:none;box-shadow:0 .125rem .125rem 0 rgba(0,0,0,.2),inset 0 -0.0625rem 0 0 #2e3742}.stylospectrum-dialog-header::before{position:absolute;height:.0625rem;background:#2e3742;content:"";inset-block:auto 0;inset-inline:0}.stylospectrum-dialog-header-text{display:inline-block;max-width:100%;margin:0;overflow:hidden;color:inherit;font-size:inherit;white-space:nowrap;text-overflow:ellipsis}.stylospectrum-dialog-header-text-wrapper{display:flex;align-items:center;max-width:100%;min-height:2.5rem;max-height:2.5rem;line-height:2.5rem}.stylospectrum-dialog-header-icon{display:flex;align-items:center;box-sizing:border-box;height:2.25rem;padding:.3125rem .5rem;color:#a9b4be;font-size:1rem;background:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);border-radius:.5rem}.stylospectrum-dialog-content{box-sizing:border-box;color:#eaecee;font-family:"72override","72","72full",Arial,Helvetica,sans-serif}.stylospectrum-dialog-footer{display:flex;align-items:center;justify-content:center;height:2.5rem;margin:0;padding:0 1rem;color:#eaecee;font-size:1rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background-color:#1d232a;border-top:1px solid #2e3742;border-radius:0 0 .75rem .75rem}.stylospectrum-dialog-footer-space{flex:1}.stylospectrum-dialog-block-layer{position:fixed;z-index:1200;display:inline-block;background-color:#000;outline:none;opacity:.6;pointer-events:all;inset:-500px}::slotted([slot=cancel-button]){margin-left:.5rem}')}
  `}_handleMaskClick(e){e.preventDefault(),this.maskClickEvent.emit()}render(){const footerNode=this.hideFooter?lit.s6:lit.qy`<footer part="footer" class="stylospectrum-dialog-footer">
          <div class="stylospectrum-dialog-footer-space"></div>
          <slot name="ok-button"></slot>
          <slot name="cancel-button"></slot>
        </footer>`,headerIconNode=this.headerIcon?lit.qy`<stylospectrum-icon
          class="stylospectrum-dialog-header-icon"
          name=${this.headerIcon}
        >
        </stylospectrum-icon>`:lit.s6;return lit.qy`
      ${this.hideMask?lit.s6:lit.qy`<div
            class="stylospectrum-dialog-block-layer"
            tabindex="0"
            @keydown=${this._handleMaskClick}
            @mousedown=${this._handleMaskClick}
          ></div>`}

      <div part="wrap" class="stylospectrum-dialog-wrap">
        <slot name="second-dialog"></slot>

        <section
          style=${this.style.cssText}
          class="stylospectrum-dialog"
          role="dialog"
          aria-modal="true"
        >
          <header class="stylospectrum-dialog-header" part="header">
            <div class="stylospectrum-dialog-header-text-wrapper">
              ${headerIconNode}
              <h1 class="stylospectrum-dialog-header-text">
                ${this.headerText}
              </h1>
            </div>
            <slot name="sub-header"></slot>
          </header>

          <div class="stylospectrum-dialog-content" part="content">
            <slot></slot>
          </div>

          ${footerNode}
        </section>
      </div>
    `}};__decorate([(0,decorators.MZ)({type:String,attribute:"header-text"})],Dialog.prototype,"headerText",void 0),__decorate([(0,decorators.MZ)({type:Boolean,attribute:"hide-footer"})],Dialog.prototype,"hideFooter",void 0),__decorate([(0,decorators.MZ)({type:Boolean,attribute:"hide-mask"})],Dialog.prototype,"hideMask",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"header-icon"})],Dialog.prototype,"headerIcon",void 0),__decorate([(0,decorators_event.f)({name:"mask-click"})],Dialog.prototype,"maskClickEvent",void 0),__decorate([(0,decorators.wk)()],Dialog.prototype,"opened",void 0),__decorate([(0,decorators.KN)({slot:"ok-button"})],Dialog.prototype,"okButtonNodes",void 0),Dialog=__decorate([(0,decorators.EM)("stylospectrum-dialog")],Dialog)},"./src/dialog/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js");__webpack_require__("./src/dialog/index.ts"),__webpack_require__("./src/input/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Dialog",component:"stylospectrum-dialog",tags:["autodocs"]},Basic=(()=>lit__WEBPACK_IMPORTED_MODULE_0__.qy`
    <style>
      .first-dialog::part(wrap) {
        top: 0.375rem;
        right: 1rem;
      }

      .second-dialog::part(wrap) {
        right: 22rem;
      }
    </style>
    <stylospectrum-button
      @click=${()=>(0,lit__WEBPACK_IMPORTED_MODULE_0__.XX)(lit__WEBPACK_IMPORTED_MODULE_0__.qy`<stylospectrum-dialog header-text="Header" class="first-dialog">
            Content

            <stylospectrum-dialog
              header-text="Header"
              hide-footer
              slot="second-dialog"
              class="second-dialog"
              hide-mask
            >
              Content
            </stylospectrum-dialog>

            <stylospectrum-input
              slot="sub-header"
              style="width:100%"
            ></stylospectrum-input>

            <stylospectrum-button slot="ok-button"> Save </stylospectrum-button>
            <stylospectrum-button slot="cancel-button" type="Tertiary">
              Close
            </stylospectrum-button>
          </stylospectrum-dialog>`,document.body)}
    >
      Open Dialog
    </stylospectrum-button>
  `).bind({});Basic.args={}}}]);
//# sourceMappingURL=dialog-stories.d59d94c6.iframe.bundle.js.map