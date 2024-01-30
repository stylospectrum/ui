/*! For license information please see message-box-stories.e3d2c397.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[568],{"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XM:()=>e,Xe:()=>i,pX:()=>t});var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mo:()=>t,Cb:()=>n,IO:()=>e,NH:()=>query_assigned_elements_o,SB:()=>state_r});const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var reactive_element=__webpack_require__("./node_modules/@lit/reactive-element/reactive-element.js");const o={attribute:!0,type:String,converter:reactive_element.Ts,reflect:!1,hasChanged:reactive_element.Qu},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function state_r(r){return n({...r,state:!0,attribute:!1})}const base_e=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);function e(e,r){return(n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return base_e(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return base_e(n,s,{get(){return o(this)}})}}function query_assigned_elements_o(o){return(e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return base_e(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}},"./node_modules/lit/directives/ref.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>e,i:()=>ref_n});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive_helpers=__webpack_require__("./node_modules/lit-html/directive-helpers.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),s=(i,t)=>{var e=i._$AN;if(void 0===e)return!1;for(var _i of e){var _i$_$AO;null!==(_i$_$AO=_i._$AO)&&void 0!==_i$_$AO&&_i$_$AO.call(_i,t,!1),s(_i,t)}return!0},o=i=>{var t,e;do{var _e;if(void 0===(t=i._$AM))break;(e=t._$AN).delete(i),i=t}while(0===(null===(_e=e)||void 0===_e?void 0:_e.size))},r=i=>{for(var _t;_t=i._$AM;i=_t){var _e2=_t._$AN;if(void 0===_e2)_t._$AN=_e2=new Set;else if(_e2.has(i))break;_e2.add(i),c(_t)}};function h(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i}function n(i){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(var _i2=e;_i2<r.length;_i2++)s(r[_i2],!1),o(r[_i2]);else null!=r&&(s(r,!1),o(r));else s(this,i)}var c=i=>{var _i$_$AP,_i$_$AQ;i.type==directive.pX.CHILD&&(null!==(_i$_$AP=i._$AP)&&void 0!==_i$_$AP||(i._$AP=n),null!==(_i$_$AQ=i._$AQ)&&void 0!==_i$_$AQ||(i._$AQ=h))};class f extends directive.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU}_$AO(i){var _this$reconnected,_this$disconnected,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i!==this.isConnected&&(this.isConnected=i,i?null===(_this$reconnected=this.reconnected)||void 0===_this$reconnected||_this$reconnected.call(this):null===(_this$disconnected=this.disconnected)||void 0===_this$disconnected||_this$disconnected.call(this)),t&&(s(this,i),o(this))}setValue(t){if((0,directive_helpers.OR)(this._$Ct))this._$Ct._$AI(t,this);else{var _i3=[...this._$Ct._$AH];_i3[this._$Ci]=t,this._$Ct._$AI(_i3,this,0)}}disconnected(){}reconnected(){}}var e=()=>new ref_h;class ref_h{}var ref_o=new WeakMap,ref_n=(0,directive.XM)(class extends f{render(i){return lit_html.Ld}update(i,_ref){var _i$options,[s]=_ref,e=s!==this.G;return e&&void 0!==this.G&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=s,this.ct=null===(_i$options=i.options)||void 0===_i$options?void 0:_i$options.host,this.ot(this.lt=i.element)),lit_html.Ld}ot(t){if("function"==typeof this.G){var _this$ct,_i=null!==(_this$ct=this.ct)&&void 0!==_this$ct?_this$ct:globalThis,_s=ref_o.get(_i);void 0===_s&&(_s=new WeakMap,ref_o.set(_i,_s)),void 0!==_s.get(this.G)&&this.G.call(this.ct,void 0),_s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var _o$get,_this$ct2,_this$G;return"function"==typeof this.G?null===(_o$get=ref_o.get(null!==(_this$ct2=this.ct)&&void 0!==_this$ct2?_this$ct2:globalThis))||void 0===_o$get?void 0:_o$get.get(this.G):null===(_this$G=this.G)||void 0===_this$G?void 0:_this$G.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},"./node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),n="important",i=" !"+n,o=(0,directive.XM)(class extends directive.Xe{constructor(t){var _t$strings;if(super(t),t.type!==directive.pX.ATTRIBUTE||"style"!==t.name||(null===(_t$strings=t.strings)||void 0===_t$strings?void 0:_t$strings.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{var s=t[r];return null==s?e:e+"".concat(r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(s,";")}),"")}update(e,_ref){var[r]=_ref,{style:s}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(r)),this.render(r);for(var _t of this.ut)null==r[_t]&&(this.ut.delete(_t),_t.includes("-")?s.removeProperty(_t):s[_t]=null);for(var _t2 in r){var _e=r[_t2];if(null!=_e){this.ut.add(_t2);var _r="string"==typeof _e&&_e.endsWith(i);_t2.includes("-")||_r?s.setProperty(_t2,_r?_e.slice(0,-11):_e,_r?n:""):s[_t2]=_e}}return lit_html.Jb}})},"./src/dialog/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let DialogBlockLayer=class DialogBlockLayer extends lit.oi{static{this.styles=lit.iv`
    ${(0,lit.$m)(".stylospectrum-dialog-block-layer{position:fixed;z-index:1200;display:inline-block;background-color:#000;outline:none;opacity:.6;pointer-events:all;inset:-500px}")}
  `}_preventBlockLayerFocus(e){e.preventDefault()}render(){return lit.dy`<div
      class="stylospectrum-dialog-block-layer"
      ?hidden=${this.hidden}
      tabindex="0"
      @keydown=${this._preventBlockLayerFocus}
      @mousedown=${this._preventBlockLayerFocus}
    ></div>`}};DialogBlockLayer=__decorate([(0,decorators.Mo)("stylospectrum-dialog-block-layer")],DialogBlockLayer);__webpack_require__("./src/icon/index.ts");var dialog_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Dialog=class Dialog extends lit.oi{constructor(){super(...arguments),this.opened=!1}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{position:fixed;z-index:1250;display:none;flex-direction:column;box-sizing:border-box;min-width:20rem;max-width:90%;min-height:6rem;max-height:94%;background:#1d232a;border-radius:.75rem;box-shadow:0 0 0 .0625rem rgba(255,255,255,.35),0 1.25rem 5rem 0 rgba(0,0,0,.6)}.stylospectrum-dialog{display:flex;flex-direction:column;box-sizing:border-box;width:100%;max-width:100vw;height:100%;background:inherit;border-radius:inherit;outline:none}.stylospectrum-dialog-header{position:relative;display:flex;flex-direction:column;justify-content:flex-start;margin:0;padding:0 1rem;color:#eaecee;font-size:1rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background:#1d232a;border-radius:.75rem .75rem 0 0;outline:none;box-shadow:0 .125rem .125rem 0 rgba(0,0,0,.2),inset 0 -0.0625rem 0 0 #2e3742}.stylospectrum-dialog-header::before{position:absolute;height:.0625rem;background:#2e3742;content:"";inset-block:auto 0;inset-inline:0}.stylospectrum-dialog-header-text{display:inline-block;max-width:100%;margin:0;overflow:hidden;color:inherit;font-size:inherit;white-space:nowrap;text-overflow:ellipsis}.stylospectrum-dialog-header-text-wrapper{display:flex;align-items:center;max-width:100%;min-height:2.5rem;max-height:2.5rem;line-height:2.5rem}.stylospectrum-dialog-header-icon{display:flex;align-items:center;box-sizing:border-box;height:2.25rem;padding:.3125rem .5rem;color:#a9b4be;font-size:1rem;background:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);border-radius:.5rem}.stylospectrum-dialog-content{box-sizing:border-box;color:#eaecee;font-family:"72override","72","72full",Arial,Helvetica,sans-serif}.stylospectrum-dialog-footer{display:flex;align-items:center;justify-content:center;height:2.5rem;margin:0;padding:0 1rem;color:#eaecee;font-size:1rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background-color:#1d232a;border-top:1px solid #2e3742;border-radius:0 0 .75rem .75rem}.stylospectrum-dialog-footer-space{flex:1}::slotted([slot=cancel-button]){margin-left:.5rem}')}
  `}blockLayerTemplate(hidden=!1){return lit.dy`<stylospectrum-dialog-block-layer
      @click=${()=>this.hide()}
      ?hidden=${hidden}
    >
    </stylospectrum-dialog-block-layer>`}show(){(0,lit.sY)(this.blockLayerTemplate(),document.body),this.opened=!0,this.style.display="flex",this.okButtonNodes?.[0].shadowRoot?.querySelector("button")?.focus()}hide(){this.opened&&((0,lit.sY)(this.blockLayerTemplate(!0),document.body),this.opened=!1,this.style.display="none")}render(){const footerNode=this.hideFooter?lit.Ld:lit.dy`<footer part="footer" class="stylospectrum-dialog-footer">
          <div class="stylospectrum-dialog-footer-space"></div>
          <slot name="ok-button"></slot>
          <slot name="cancel-button"></slot>
        </footer>`,headerIconNode=this.headerIcon?lit.dy`<stylospectrum-icon
          class="stylospectrum-dialog-header-icon"
          name=${this.headerIcon}
        >
        </stylospectrum-icon>`:lit.Ld;return lit.dy`
      <slot name="second-dialog"></slot>

      <section class="stylospectrum-dialog" role="dialog" aria-modal="true">
        <header class="stylospectrum-dialog-header" part="header">
          <div class="stylospectrum-dialog-header-text-wrapper">
            ${headerIconNode}
            <h1 class="stylospectrum-dialog-header-text">${this.headerText}</h1>
          </div>
          <slot name="sub-header"></slot>
        </header>

        <div class="stylospectrum-dialog-content" part="content">
          <slot></slot>
        </div>

        ${footerNode}
      </section>
    `}};dialog_decorate([(0,decorators.Cb)({type:String,attribute:"header-text"})],Dialog.prototype,"headerText",void 0),dialog_decorate([(0,decorators.Cb)({type:Boolean,attribute:"hide-footer"})],Dialog.prototype,"hideFooter",void 0),dialog_decorate([(0,decorators.Cb)({type:String,attribute:"header-icon"})],Dialog.prototype,"headerIcon",void 0),dialog_decorate([(0,decorators.SB)()],Dialog.prototype,"opened",void 0),dialog_decorate([(0,decorators.NH)({slot:"ok-button"})],Dialog.prototype,"okButtonNodes",void 0),Dialog=dialog_decorate([(0,decorators.Mo)("stylospectrum-dialog")],Dialog)},"./src/icon/data/incident.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("incident",{pathData:"M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm32 289q31-10 50.5-36.5T358 192q0-43-29.5-72.5T256 90q-21 0-39.5 8T184 118.5 162 148t-8 35q0 20 9 30.5t23 10.5q13 0 22.5-9t9.5-23q0-16 11-27t27-11 27 11 11 27-11 27-27 11q-14 0-23 9.5t-9 22.5v26q0 14 9 23t23 9q13 0 22-9t10-22zm-32 127q14 0 23-9t9-23-9-23-23-9-23 9-9 23 9 23 23 9z"});const __WEBPACK_DEFAULT_EXPORT__="incident"},"./src/icon/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),style_map=__webpack_require__("./node_modules/lit/directives/style-map.js");var util=__webpack_require__("./src/icon/util.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Icon=class Icon extends lit.oi{static{this.styles=lit.iv`
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
          style=${(0,style_map.V)({transform:`rotate(${this.rotate}deg)`})}
        >
          <g role="presentation">
            <path d="${iconData.pathData}" />
          </g>
        </svg>
      </i>
    `:lit.dy``}};__decorate([(0,decorators.Cb)({type:String})],Icon.prototype,"name",void 0),__decorate([(0,decorators.Cb)({type:Number})],Icon.prototype,"rotate",void 0),Icon=__decorate([(0,decorators.Mo)("stylospectrum-icon")],Icon)},"./src/icon/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getIconData,q:()=>registerIcon});const registry=new Map,registerIcon=(name,data)=>{registry.set(name,data)},getIconData=name=>registry.get(name)},"./src/message-box/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>stories});var ref=__webpack_require__("./node_modules/lit/directives/ref.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");__webpack_require__("./src/dialog/index.ts"),__webpack_require__("./src/icon/data/incident.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let MessageBox=class MessageBox extends lit.oi{static{this.styles=lit.iv`
    ${(0,lit.$m)(":host{position:fixed;top:50%;left:50%;z-index:1250;transform:translate(-50%, -50%)}.stylospectrum-message-box{position:relative}.stylospectrum-message-box-content{padding:1rem}")}
  `}show(){this.dialogNode.show(),this.okButtonNodes?.[0].shadowRoot?.querySelector("button")?.focus()}hide(){this.dialogNode.hide()}render(){return lit.dy`
      <stylospectrum-dialog
        header-text=${this.headerText}
        header-icon="incident"
        class="stylospectrum-message-box"
      >
        <div class="stylospectrum-message-box-content">
          <slot></slot>
        </div>
        <slot name="ok-button" slot="ok-button"></slot>
        <slot name="cancel-button" slot="cancel-button"></slot>
      </stylospectrum-dialog>
    `}};__decorate([(0,decorators.Cb)({type:String,attribute:"header-text"})],MessageBox.prototype,"headerText",void 0),__decorate([(0,decorators.IO)("stylospectrum-dialog")],MessageBox.prototype,"dialogNode",void 0),__decorate([(0,decorators.NH)({slot:"ok-button"})],MessageBox.prototype,"okButtonNodes",void 0),MessageBox=__decorate([(0,decorators.Mo)("stylospectrum-message-box")],MessageBox);const stories={title:"MessageBox",component:"stylospectrum-message-box",tags:["autodocs"]},Basic=(()=>{const messageBoxRef=(0,ref.V)();return lit.dy`
    <stylospectrum-button @click=${()=>messageBoxRef.value?.show()}>
      Open Popover
    </stylospectrum-button>

    <stylospectrum-message-box header-text="Delete block" ${(0,ref.i)(messageBoxRef)}>
      Are you sure you want to delete selected entity?

      <stylospectrum-button
        slot="ok-button"
        @click=${()=>messageBoxRef.value?.hide()}
      >
        Confirm
      </stylospectrum-button>
      <stylospectrum-button
        slot="cancel-button"
        type="Tertiary"
        @click=${()=>messageBoxRef.value?.hide()}
      >
        Cancel
      </stylospectrum-button>
    </stylospectrum-message-box>
  `}).bind({});Basic.args={}}}]);
//# sourceMappingURL=message-box-stories.e3d2c397.iframe.bundle.js.map