/*! For license information please see 159.766d5353.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[159],{"./node_modules/@lit/context/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HQ:()=>i,F_:()=>c,kr:()=>n});class context_request_event_s extends Event{constructor(s,t,e){super("context-request",{bubbles:!0,composed:!0}),this.context=s,this.callback=t,this.subscribe=e??!1}}function n(n){return n}class s{constructor(t,s,i,h){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(t,s)=>{this.unsubscribe&&(this.unsubscribe!==s&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=t,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(t,s)),this.unsubscribe=s},this.host=t,void 0!==s.context){const t=s;this.context=t.context,this.callback=t.callback,this.subscribe=t.subscribe??!1}else this.context=s,this.callback=i,this.subscribe=h??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new context_request_event_s(this.context,this.t,this.subscribe))}}class value_notifier_s{get value(){return this.o}set value(s){this.setValue(s)}setValue(s,t=!1){const i=t||!Object.is(s,this.o);this.o=s,i&&this.updateObservers()}constructor(s){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:t}]of this.subscriptions)s(this.o,t)},void 0!==s&&(this.value=s)}addCallback(s,t,i){if(!i)return void s(this.value);this.subscriptions.has(s)||this.subscriptions.set(s,{disposer:()=>{this.subscriptions.delete(s)},consumerHost:t});const{disposer:h}=this.subscriptions.get(s);s(this.value,h)}clearCallbacks(){this.subscriptions.clear()}}class context_provider_e extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class i extends value_notifier_s{constructor(s,e,i){super(void 0!==e.context?e.initialValue:i),this.onContextRequest=t=>{const s=t.composedPath()[0];t.context===this.context&&s!==this.host&&(t.stopPropagation(),this.addCallback(t.callback,s,t.subscribe))},this.onProviderRequest=s=>{const e=s.composedPath()[0];if(s.context!==this.context||e===this.host)return;const i=new Set;for(const[s,{consumerHost:e}]of this.subscriptions)i.has(s)||(i.add(s),e.dispatchEvent(new context_request_event_s(this.context,s,!0)));s.stopPropagation()},this.host=s,void 0!==e.context?this.context=e.context:this.context=e,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new context_provider_e(this.context))}}function c({context:c,subscribe:e}){return(o,n)=>{"object"==typeof n?n.addInitializer((function(){new s(this,{context:c,callback:t=>{this[n.name]=t},subscribe:e})})):o.constructor.addInitializer((o=>{new s(o,{context:c,callback:t=>{o[n]=t},subscribe:e})}))}}},"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XM:()=>e,Xe:()=>i,pX:()=>t});var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/decorators.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Mo:()=>t,Cb:()=>n,IO:()=>e,Kt:()=>query_all_r,NH:()=>query_assigned_elements_o,SB:()=>state_r});const t=t=>(e,o)=>{void 0!==o?o.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)};var reactive_element=__webpack_require__("./node_modules/@lit/reactive-element/reactive-element.js");const o={attribute:!0,type:String,converter:reactive_element.Ts,reflect:!1,hasChanged:reactive_element.Qu},r=(t=o,e,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(void 0===s&&globalThis.litPropertyMetadata.set(i,s=new Map),s.set(r.name,t),"accessor"===n){const{name:o}=r;return{set(r){const n=e.get.call(this);e.set.call(this,r),this.requestUpdate(o,n,t)},init(e){return void 0!==e&&this.C(o,void 0,t),e}}}if("setter"===n){const{name:o}=r;return function(r){const n=this[o];e.call(this,r),this.requestUpdate(o,n,t)}}throw Error("Unsupported decorator location: "+n)};function n(t){return(e,o)=>"object"==typeof o?r(t,e,o):((t,e,o)=>{const r=e.hasOwnProperty(o);return e.constructor.createProperty(o,r?{...t,wrapped:!0}:t),r?Object.getOwnPropertyDescriptor(e,o):void 0})(t,e,o)}function state_r(r){return n({...r,state:!0,attribute:!1})}const base_e=(e,t,c)=>(c.configurable=!0,c.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,c),c);function e(e,r){return(n,s,i)=>{const o=t=>t.renderRoot?.querySelector(e)??null;if(r){const{get:e,set:r}="object"==typeof s?n:i??(()=>{const t=Symbol();return{get(){return this[t]},set(e){this[t]=e}}})();return base_e(n,s,{get(){let t=e.call(this);return void 0===t&&(t=o(this),(null!==t||this.hasUpdated)&&r.call(this,t)),t}})}return base_e(n,s,{get(){return o(this)}})}}let query_all_e;function query_all_r(r){return(n,o)=>base_e(n,o,{get(){return(this.renderRoot??(query_all_e??=document.createDocumentFragment())).querySelectorAll(r)}})}function query_assigned_elements_o(o){return(e,n)=>{const{slot:r,selector:s}=o??{},c="slot"+(r?`[name=${r}]`:":not([name])");return base_e(e,n,{get(){const t=this.renderRoot?.querySelector(c),e=t?.assignedElements(o)??[];return void 0===s?e:e.filter((t=>t.matches(s)))}})}}},"./node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>e});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),e=(0,directive.XM)(class extends directive.Xe{constructor(t){var _t$strings;if(super(t),t.type!==directive.pX.ATTRIBUTE||"class"!==t.name||(null===(_t$strings=t.strings)||void 0===_t$strings?void 0:_t$strings.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,_ref){var[i]=_ref;if(void 0===this.it){for(var _t in this.it=new Set,void 0!==s.strings&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t)))),i){var _this$st;i[_t]&&(null===(_this$st=this.st)||void 0===_this$st||!_this$st.has(_t))&&this.it.add(_t)}return this.render(i)}var r=s.element.classList;for(var _t2 of this.it)_t2 in i||(r.remove(_t2),this.it.delete(_t2));for(var _t3 in i){var _this$st2,_s=!!i[_t3];_s===this.it.has(_t3)||(null===(_this$st2=this.st)||void 0===_this$st2?void 0:_this$st2.has(_t3))||(_s?(r.add(_t3),this.it.add(_t3)):(r.remove(_t3),this.it.delete(_t3)))}return lit_html.Jb}})},"./node_modules/lit/directives/ref.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>e,i:()=>ref_n});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive_helpers=__webpack_require__("./node_modules/lit-html/directive-helpers.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),s=(i,t)=>{var e=i._$AN;if(void 0===e)return!1;for(var _i of e){var _i$_$AO;null!==(_i$_$AO=_i._$AO)&&void 0!==_i$_$AO&&_i$_$AO.call(_i,t,!1),s(_i,t)}return!0},o=i=>{var t,e;do{var _e;if(void 0===(t=i._$AM))break;(e=t._$AN).delete(i),i=t}while(0===(null===(_e=e)||void 0===_e?void 0:_e.size))},r=i=>{for(var _t;_t=i._$AM;i=_t){var _e2=_t._$AN;if(void 0===_e2)_t._$AN=_e2=new Set;else if(_e2.has(i))break;_e2.add(i),c(_t)}};function h(i){void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i}function n(i){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(var _i2=e;_i2<r.length;_i2++)s(r[_i2],!1),o(r[_i2]);else null!=r&&(s(r,!1),o(r));else s(this,i)}var c=i=>{var _i$_$AP,_i$_$AQ;i.type==directive.pX.CHILD&&(null!==(_i$_$AP=i._$AP)&&void 0!==_i$_$AP||(i._$AP=n),null!==(_i$_$AQ=i._$AQ)&&void 0!==_i$_$AQ||(i._$AQ=h))};class f extends directive.Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU}_$AO(i){var _this$reconnected,_this$disconnected,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];i!==this.isConnected&&(this.isConnected=i,i?null===(_this$reconnected=this.reconnected)||void 0===_this$reconnected||_this$reconnected.call(this):null===(_this$disconnected=this.disconnected)||void 0===_this$disconnected||_this$disconnected.call(this)),t&&(s(this,i),o(this))}setValue(t){if((0,directive_helpers.OR)(this._$Ct))this._$Ct._$AI(t,this);else{var _i3=[...this._$Ct._$AH];_i3[this._$Ci]=t,this._$Ct._$AI(_i3,this,0)}}disconnected(){}reconnected(){}}var e=()=>new ref_h;class ref_h{}var ref_o=new WeakMap,ref_n=(0,directive.XM)(class extends f{render(i){return lit_html.Ld}update(i,_ref){var _i$options,[s]=_ref,e=s!==this.G;return e&&void 0!==this.G&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=s,this.ct=null===(_i$options=i.options)||void 0===_i$options?void 0:_i$options.host,this.ot(this.lt=i.element)),lit_html.Ld}ot(t){if("function"==typeof this.G){var _this$ct,_i=null!==(_this$ct=this.ct)&&void 0!==_this$ct?_this$ct:globalThis,_s=ref_o.get(_i);void 0===_s&&(_s=new WeakMap,ref_o.set(_i,_s)),void 0!==_s.get(this.G)&&this.G.call(this.ct,void 0),_s.set(this.G,t),void 0!==t&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var _o$get,_this$ct2,_this$G;return"function"==typeof this.G?null===(_o$get=ref_o.get(null!==(_this$ct2=this.ct)&&void 0!==_this$ct2?_this$ct2:globalThis))||void 0===_o$get?void 0:_o$get.get(this.G):null===(_this$G=this.G)||void 0===_this$G?void 0:_this$G.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}})},"./node_modules/lit/directives/style-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>o});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),n="important",i=" !"+n,o=(0,directive.XM)(class extends directive.Xe{constructor(t){var _t$strings;if(super(t),t.type!==directive.pX.ATTRIBUTE||"style"!==t.name||(null===(_t$strings=t.strings)||void 0===_t$strings?void 0:_t$strings.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,r)=>{var s=t[r];return null==s?e:e+"".concat(r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),":").concat(s,";")}),"")}update(e,_ref){var[r]=_ref,{style:s}=e.element;if(void 0===this.ut)return this.ut=new Set(Object.keys(r)),this.render(r);for(var _t of this.ut)null==r[_t]&&(this.ut.delete(_t),_t.includes("-")?s.removeProperty(_t):s[_t]=null);for(var _t2 in r){var _e=r[_t2];if(null!=_e){this.ut.add(_t2);var _r="string"==typeof _e&&_e.endsWith(i);_t2.includes("-")||_r?s.setProperty(_t2,_r?_e.slice(0,-11):_e,_r?n:""):s[_t2]=_e}}return lit_html.Jb}})},"./src/button/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),types=__webpack_require__("./src/types/index.ts");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/tooltip/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Button=class Button extends lit.oi{constructor(){super(...arguments),this.type=types.Y7.Primary,this.htmlType=types.L$.Button}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{display:inline-block;box-sizing:border-box;min-width:2rem;height:1.625rem;overflow:hidden;font-weight:700;font-size:.875rem;font-family:"72","72full",arial,helvetica,sans-serif;line-height:normal;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle;background-color:rgba(0,0,0,0);border:.0625rem solid rgba(0,0,0,0);border-radius:.5rem;cursor:pointer}:host([disabled]){cursor:not-allowed;opacity:.4}:host([type=Primary]){color:#eaecee;background:#0070f2;border-color:#0070f2}:host([type=Primary]:not([disabled]):hover){color:#eaecee;background-color:#0064d8;border-color:#0064d8}:host([type=Primary]:not([disabled]):active){color:#4db1ff;background-color:#202932;border-color:#4db1ff}:host([type=Secondary]){color:#4db1ff;background:#1c242c;border:.0625rem solid #3a4a5a}:host([type=Secondary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Secondary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([type=Tertiary]){color:#4db1ff;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}:host([type=Tertiary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Tertiary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([focused]:not(:active):not([tab-selected])) .stylospectrum-button::after{position:absolute;inset:.0625rem;box-sizing:border-box;border:.125rem solid #9ad3ff;border-radius:.375rem;content:""}:host([circle][focused]:not(:active)) .stylospectrum-button::after{border-radius:50%}:host([type=Primary][focused]) .stylospectrum-button::after{border-color:#000}:host([circle]){height:2rem;border-radius:50%}:host([tab-selected]){border:none !important}:host([tab-selected]) .stylospectrum-button::after{position:absolute;inset:0 !important;box-sizing:border-box;border:.125rem solid #9ad3ff;border-radius:50%;content:""}.stylospectrum-button{position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;min-width:inherit;height:100%;padding:0 .5rem;overflow:inherit;color:inherit;font:inherit;line-height:inherit;letter-spacing:inherit;white-space:inherit;text-overflow:inherit;text-shadow:inherit;word-spacing:inherit;background:inherit;border:none;outline:none;cursor:inherit;user-select:none}.stylospectrum-button-icon{font-weight:400;font-size:1rem;font-style:normal}.stylospectrum-button-has-icon{min-width:auto;padding:0}')}
  `}tooltipTemplate(hovered=!1){return hovered?lit.dy`<stylospectrum-tooltip
      openerRect=${JSON.stringify(this.getBoundingClientRect())}
      placement=${this.tooltipPlacement}
    >
      ${this.tooltip}
    </stylospectrum-tooltip>`:lit.Ld}handleFocusIn(){this.focused=!0}handleFocusOut(){this.focused=!1}handleMouseEnter(){this.tooltip&&(0,lit.sY)(this.tooltipTemplate(!0),document.body)}handleMouseLeave(){this.tooltip&&(0,lit.sY)(this.tooltipTemplate(),document.body)}render(){const iconNode=this.icon?lit.dy`<stylospectrum-icon
          class="stylospectrum-button-icon"
          name=${this.icon}
          rotate=${this.iconRotate}
        >
        </stylospectrum-icon>`:lit.dy`<slot name="icon"></slot>`,textNode=this.icon?lit.Ld:lit.dy`<span class="stylospectrum-button-text">
          <slot></slot>
        </span>`,classes={"stylospectrum-button":!0,"stylospectrum-button-has-icon":!!this.icon};return lit.dy`
      <button
        ?disabled=${this.disabled}
        type=${this.htmlType.toLowerCase()}
        part="button"
        class=${(0,class_map.$)(classes)}
        @focusout=${this.handleFocusOut}
        @focusin=${this.handleFocusIn}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        ${textNode} ${iconNode}
      </button>
    `}};__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Button.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)()],Button.prototype,"icon",void 0),__decorate([(0,decorators.Cb)()],Button.prototype,"iconRotate",void 0),__decorate([(0,decorators.Cb)()],Button.prototype,"tooltip",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"tooltip-placement"})],Button.prototype,"tooltipPlacement",void 0),__decorate([(0,decorators.Cb)({type:String,reflect:!0})],Button.prototype,"type",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"html-type",reflect:!0})],Button.prototype,"htmlType",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Button.prototype,"focused",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Button.prototype,"circle",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0,attribute:"tab-selected"})],Button.prototype,"tabSelected",void 0),Button=__decorate([(0,decorators.Mo)("stylospectrum-button")],Button)},"./src/list/context.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>listContext});const listContext=(0,__webpack_require__("./node_modules/@lit/context/index.js").kr)("list")},"./src/list/list-item.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),context=__webpack_require__("./node_modules/@lit/context/index.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),list_context=__webpack_require__("./src/list/context.ts");__webpack_require__("./src/icon/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let ListItem=class ListItem extends lit.oi{static{this.styles=lit.iv`
    ${(0,lit.$m)('.stylospectrum-list-item{position:relative;display:flex;align-items:center;box-sizing:border-box;height:2rem;padding-right:.75rem;background-color:#1d232a;border-bottom:1px solid rgba(0,0,0,0);cursor:pointer}.stylospectrum-list-item-focused{background-color:#222b35}.stylospectrum-list-item-focused::after{position:absolute;border:.125rem solid #9ad3ff;border-radius:0;content:"";pointer-events:none;inset:.125rem}.stylospectrum-list-item-selected{background:#1d2d3e;border-bottom-color:#4db1ff}.stylospectrum-list-item-icon{color:#a9b4be;font-size:1rem}.stylospectrum-list-item-icon-wrapper{display:flex;align-items:center;justify-content:center;width:2.75rem;height:2rem}.stylospectrum-list-item-text{display:block;overflow:hidden;color:#eaecee;font-weight:400;font-size:.875rem;font-family:72;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;text-overflow:ellipsis}.stylospectrum-list-item:hover{background-color:#222b35}.stylospectrum-list-item:active{background-color:#020303}')}
  `}render(){const selected=this._consumer?.selectedId===this.id;return lit.dy`<li
      class=${(0,class_map.$)({"stylospectrum-list-item":!0,"stylospectrum-list-item-selected":selected,"stylospectrum-list-item-focused":this.focused})}
      @click=${()=>{this._consumer?.onChangeId?.(this.id)}}
    >
      <span class="stylospectrum-list-item-icon-wrapper">
        <stylospectrum-icon
          class="stylospectrum-list-item-icon"
          name="${this.icon}"
        >
        </stylospectrum-icon>
      </span>

      <span class="stylospectrum-list-item-text"><slot></slot></span>
    </li>`}};__decorate([(0,decorators.Cb)({type:String})],ListItem.prototype,"icon",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],ListItem.prototype,"focused",void 0),__decorate([(0,context.F_)({context:list_context.n,subscribe:!0})],ListItem.prototype,"_consumer",void 0),ListItem=__decorate([(0,decorators.Mo)("stylospectrum-list-item")],ListItem)},"./src/popover/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var types=__webpack_require__("./src/types/index.ts");const utils_clamp=(val,min,max)=>Math.min(Math.max(val,min),max),utils_getParentElement=el=>el.parentElement?el.parentNode:el.parentNode.host,utils_isElementContainingBlock=el=>{const computedStyle=getComputedStyle(el);return["size","inline-size"].indexOf(computedStyle.containerType)>-1||["transform","perspective"].indexOf(computedStyle.willChange)>-1||["layout","paint","strict","content"].indexOf(computedStyle.contain)>-1||computedStyle.transform&&"none"!==computedStyle.transform||computedStyle.perspective&&"none"!==computedStyle.perspective||computedStyle.backdropFilter&&"none"!==computedStyle.backdropFilter},isClickInRect=(e,rect)=>{let x,y;if(e instanceof MouseEvent)x=e.clientX,y=e.clientY;else{const touch=e.touches[0];x=touch.clientX,y=touch.clientY}return((x,y,rect)=>x>=rect.left&&x<=rect.right&&y>=rect.top&&y<=rect.bottom)(x,y,rect)},getFocusedElement=()=>{const element=(()=>{let element=document.activeElement;for(;element&&element.shadowRoot&&element.shadowRoot.activeElement;)element=element.shadowRoot.activeElement;return element})();return element&&"function"==typeof element.focus?element:null},rClickable=/^(?:a|area)$/i,rFocusable=/^(?:input|select|textarea|button)$/i,utils_isElementClickable=el=>{if(el.disabled)return!1;const tabIndex=el.getAttribute("tabindex");return null!=tabIndex?parseInt(tabIndex)>=0:rFocusable.test(el.nodeName)||rClickable.test(el.nodeName)&&!!el.href},utils_isElementHidden=el=>"SLOT"!==el.nodeName&&(el.offsetWidth<=0&&el.offsetHeight<=0||el.style&&"hidden"===el.style.visibility),isFocusTrap=el=>el.hasAttribute("data-focus-trap"),findFocusableElement=(container,forward,startFromContainer)=>{let child,assignedElements,focusableDescendant,currentIndex=-1;for(container.shadowRoot?child=forward?container.shadowRoot.firstChild:container.shadowRoot.lastChild:container instanceof HTMLSlotElement&&container.assignedNodes()?(assignedElements=container.assignedNodes(),currentIndex=forward?0:assignedElements.length-1,child=assignedElements[currentIndex]):child=startFromContainer?container:forward?container.firstElementChild:container.lastElementChild;child;){const originalChild=child;if(child instanceof lit.oi&&(child=child?.getFocusDomRef?.()),!child)return null;if(1===child.nodeType&&((el=child).hasAttribute("data-focus-redirect")||!utils_isElementHidden(el))&&!isFocusTrap(child)){if(utils_isElementClickable(child))return child&&"function"==typeof child.focus?child:null;if(focusableDescendant=findFocusableElement(child,forward),focusableDescendant)return focusableDescendant&&"function"==typeof focusableDescendant.focus?focusableDescendant:null}child=forward?originalChild.nextSibling:originalChild.previousSibling,assignedElements&&!assignedElements[currentIndex].contains(child)&&(currentIndex=forward?currentIndex+1:currentIndex-1,child=assignedElements[currentIndex])}var el;return null};var Popover_1,__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};const openedRegistry=[];let Popover=class Popover extends lit.oi{constructor(){super(...arguments),this.placement=types.ug.Bottom,this.horizontalAlign=types.q_.Center,this.offsetX=0,this.offsetY=0,this.arrowTranslateX=0,this.arrowTranslateY=0,this.opened=!1,this._clickHandler=event=>{const openedPopups=[...openedRegistry];if(0===openedPopups.length)return;if(openedPopups[openedPopups.length-1].instance instanceof Popover_1)for(let i=openedPopups.length-1;-1!==i;i--){const popup=openedPopups[i].instance;if(popup._isOpenerClicked(event))return;if(isClickInRect(event,popup.getBoundingClientRect()))break;popup.hide()}},this._attachGlobalClickHandler=()=>{document.addEventListener("mousedown",this._clickHandler)},this._detachGlobalClickHandler=()=>{document.removeEventListener("mousedown",this._clickHandler)},this._getParentPopoversIfNested=instance=>{let currentElement=instance.parentNode;const parentPopovers=[];for(;currentElement&&currentElement.parentNode;){for(let i=0;i<openedRegistry.length;i++)currentElement===openedRegistry[i].instance&&parentPopovers.push(currentElement);currentElement=currentElement.parentNode}return parentPopovers},this._addOpenedPopover=instance=>{const parentPopovers=this._getParentPopoversIfNested(instance);openedRegistry.push({instance,parentPopovers}),1===openedRegistry.length&&this._attachGlobalClickHandler()},this._removeOpenedPopover=instance=>{const popoversToClose=[instance];for(let i=0;i<openedRegistry.length;i++){const indexOfCurrentInstance=openedRegistry[i].parentPopovers.indexOf(instance);openedRegistry[i].parentPopovers.length>0&&indexOfCurrentInstance>-1&&popoversToClose.push(openedRegistry[i].instance)}for(let i=popoversToClose.length-1;i>=0;i--)for(let j=0;j<openedRegistry.length;j++){let indexOfItemToRemove=-1;if(popoversToClose[i]===openedRegistry[j].instance&&(indexOfItemToRemove=j),indexOfItemToRemove>=0){openedRegistry.splice(indexOfItemToRemove,1)[0].instance.hide()}}openedRegistry.length||this._detachGlobalClickHandler()}}static{Popover_1=this}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{position:fixed;top:-10000px;left:-10000px;z-index:1000;box-sizing:border-box;min-width:6.25rem;max-width:calc(100% - 20px);min-height:2rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background-color:#1d232a;border-radius:.5rem;box-shadow:0 0 0 .0625rem rgba(255,255,255,.35),0 .625rem 1.875rem 0 rgba(0,0,0,.6)}:host([placement=Bottom]) .stylospectrum-popover-arrow{top:-0.5rem;left:calc(50% - .5625rem);height:.5625rem}:host([placement=Bottom]) .stylospectrum-popover-arrow::after{margin:.1875rem 0 0 .1875rem}:host([placement=Left]) .stylospectrum-popover-arrow{top:calc(50% - .5625rem);right:-0.5625rem;width:.5625rem}:host([placement=Left]) .stylospectrum-popover-arrow::after{margin:.1875rem 0 0 -0.375rem}.stylospectrum-popover{display:flex;flex-direction:column;box-sizing:border-box;width:100%;height:100%;overflow:hidden;background:inherit;border-radius:inherit;outline:none}.stylospectrum-popover-arrow{position:absolute;display:block;width:1rem;overflow:hidden;pointer-events:none}.stylospectrum-popover-arrow::after{display:block;width:.7rem;height:.7rem;background-color:#1d232a;box-shadow:0 0 0 .0625rem rgba(255,255,255,.35),0 .625rem 1.875rem 0 rgba(0,0,0,.6);transform:rotate(-45deg);content:""}.stylospectrum-popover-header{display:flex;flex-direction:column;justify-content:center;margin:0;padding:0 1rem;color:#eaecee;font-size:1rem;background-color:#1d232a;box-shadow:0 .125rem .125rem 0 rgba(0,0,0,.2),inset 0 -0.0625rem 0 0 #2e3742}.stylospectrum-popover-header-text{display:inline-block;max-width:100%;min-height:2.5rem;max-height:2.5rem;margin:0;overflow:hidden;font-weight:400;font-size:1rem;line-height:2.5rem;white-space:nowrap;text-overflow:ellipsis}.stylospectrum-popover-content{box-sizing:border-box;overflow:auto;color:#eaecee}.stylospectrum-popover-content::-webkit-scrollbar:horizontal{height:.75rem}.stylospectrum-popover-content::-webkit-scrollbar:vertical{width:.75rem}.stylospectrum-popover-content::-webkit-scrollbar{background-color:#1d232a}.stylospectrum-popover-content::-webkit-scrollbar-thumb{background-color:#647891;border:.125rem solid #1d232a;border-radius:.75rem}.stylospectrum-popover-content::-webkit-scrollbar-thumb:hover{background-color:#8697ac}.stylospectrum-popover-content::-webkit-scrollbar-corner{background-color:#1d232a}.stylospectrum-popover-footer{display:flex;align-items:center;justify-content:center;height:2.5rem;margin:0;padding:0 1rem;color:#eaecee;font-size:1rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background-color:#1d232a;border-top:1px solid #2e3742}.stylospectrum-popover-footer-space{flex:1}::slotted([slot=cancel-button]){margin-left:.5rem}')}
  `}static get VIEWPORT_MARGIN(){return 10}_isOpenerClicked(e){return e.target===this._opener||e.composedPath().indexOf(this._opener)>-1}_getContainingBlockClientLocation(){let parentElement=utils_getParentElement(this);for(;parentElement;){if(utils_isElementContainingBlock(parentElement))return parentElement.getBoundingClientRect();parentElement=utils_getParentElement(parentElement)}return{left:0,top:0}}_getPopupSize(){const rect=this.getBoundingClientRect();return{width:rect.width,height:rect.height}}_getVerticalLeft(targetRect,popoverSize){let left=0;switch(this.horizontalAlign){case types.q_.Left:left=targetRect.left;break;case types.q_.Center:left=targetRect.left-(popoverSize.width-targetRect.width)/2;break;case types.q_.Right:left=targetRect.right-popoverSize.width+this.offsetX}return left}_getHorizontalTop(targetRect,popoverSize){return targetRect.top-(popoverSize.height-targetRect.height)/2}_getArrowPosition(targetRect,popoverSize,left,isVertical,borderRadius){let arrowXCentered=this.horizontalAlign===types.q_.Center;this.horizontalAlign===types.q_.Right&&left<=targetRect.left&&(arrowXCentered=!0);let arrowTranslateX=0;isVertical&&arrowXCentered&&(arrowTranslateX=targetRect.left+targetRect.width/2-left-popoverSize.width/2);let arrowTranslateY=0;const safeRangeForArrowY=popoverSize.height/2-borderRadius-4;arrowTranslateY=utils_clamp(arrowTranslateY,-safeRangeForArrowY,safeRangeForArrowY);const safeRangeForArrowX=popoverSize.width/2-borderRadius-4;return arrowTranslateX=utils_clamp(arrowTranslateX,-safeRangeForArrowX,safeRangeForArrowX),{x:Math.round(arrowTranslateX),y:Math.round(arrowTranslateY)}}_fallbackPlacement(clientWidth,clientHeight,targetRect,popoverSize){return targetRect.left>popoverSize.width?types.ug.Left:clientWidth-targetRect.right>targetRect.left?types.ug.Right:clientHeight-targetRect.bottom>popoverSize.height?types.ug.Bottom:clientHeight-targetRect.bottom<targetRect.top?types.ug.Top:void 0}_getActualPlacement(targetRect,popoverSize){let actualPlacement=this.placement;const clientWidth=document.documentElement.clientWidth,clientHeight=document.documentElement.clientHeight;switch(this.placement){case types.ug.Bottom:clientHeight-targetRect.bottom<popoverSize.height&&clientHeight-targetRect.bottom<targetRect.top&&(actualPlacement=types.ug.Top);break;case types.ug.Left:targetRect.left<popoverSize.width&&(actualPlacement=this._fallbackPlacement(clientWidth,clientHeight,targetRect,popoverSize)||this.placement)}return actualPlacement}_calcPlacement(targetRect,popoverSize){let left=0,top=0;const clientWidth=document.documentElement.clientWidth,isVertical=this.placement===types.ug.Bottom,arrowOffset=this.hideArrow?0:8;switch(this._getActualPlacement(targetRect,popoverSize)){case types.ug.Bottom:left=this._getVerticalLeft(targetRect,popoverSize),top=targetRect.bottom+arrowOffset+this.offsetY;break;case types.ug.Left:left=Math.max(targetRect.left-popoverSize.width-arrowOffset,0),top=this._getHorizontalTop(targetRect,popoverSize)}isVertical&&(popoverSize.width>clientWidth||left<0?left=0:left+popoverSize.width>clientWidth&&(left-=left+popoverSize.width-clientWidth)),(void 0===this._left||Math.abs(this._left-left)>1.5)&&(this._left=Math.round(left)),(void 0===this._top||Math.abs(this._top-top)>1.5)&&(this._top=Math.round(top));const borderRadius=Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));return{arrow:this._getArrowPosition(targetRect,popoverSize,left,isVertical,borderRadius),top:this._top,left:this._left}}_resetFocus(){this._focusedElementBeforeOpen&&(this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null)}showAt(opener){this._opener=opener,this.show()}show(){if(this.opened)return;this.style.display="block";const popupSize=this._getPopupSize(),openerRect=this._opener.getBoundingClientRect();if(0===popupSize.width||0===popupSize.height)return;const placement=this._calcPlacement(openerRect,popupSize);let left=utils_clamp(this._left,Popover_1.VIEWPORT_MARGIN,document.documentElement.clientWidth-popupSize.width-Popover_1.VIEWPORT_MARGIN),top=utils_clamp(this._top,Popover_1.VIEWPORT_MARGIN,document.documentElement.clientHeight-popupSize.height-Popover_1.VIEWPORT_MARGIN);top=Math.max(top,this._top),this.arrowTranslateX=placement.arrow.x,this.arrowTranslateY=placement.arrow.y;const containingBlockClientLocation=this._getContainingBlockClientLocation();left-=containingBlockClientLocation.left,top-=containingBlockClientLocation.top,this._addOpenedPopover(this),this.opened=!0,this._focusedElementBeforeOpen=getFocusedElement();const ele=(container=this)?findFocusableElement(container,!0,startFromContainer):null;var container,startFromContainer;ele?.focus(),Object.assign(this.style,{top:`${top}px`,left:`${left}px`})}hide(){this.opened&&(this._removeOpenedPopover(this),this.opened=!1,this._resetFocus(),this.style.display="none",Object.assign(this.style,{top:"-10000px",left:"-10000px"}))}render(){const headerNode=this.headerText?lit.dy`<header class="stylospectrum-popover-header" part="header">
          <h1 class="stylospectrum-popover-header-text">${this.headerText}</h1>
          <slot name="sub-header"></slot>
        </header>`:lit.Ld,footerNode=this.hideFooter?lit.Ld:lit.dy`<footer part="footer" class="stylospectrum-popover-footer">
          <div class="stylospectrum-popover-footer-space"></div>
          <slot name="ok-button"></slot>
          <slot name="cancel-button"></slot>
        </footer>`,arrowNode=this.hideArrow?lit.Ld:lit.dy`<span
          class="stylospectrum-popover-arrow"
          style="transform:translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)"
        >
        </span>`;return lit.dy`
      <section class="stylospectrum-popover">
        ${arrowNode} ${headerNode}

        <div part="content" class="stylospectrum-popover-content">
          <slot></slot>
        </div>

        ${footerNode}
      </section>
    `}};__decorate([(0,decorators.Cb)({type:Boolean,attribute:"hide-footer"})],Popover.prototype,"hideFooter",void 0),__decorate([(0,decorators.Cb)({type:String,reflect:!0})],Popover.prototype,"placement",void 0),__decorate([(0,decorators.Cb)({type:Boolean,attribute:"hide-arrow"})],Popover.prototype,"hideArrow",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"header-text"})],Popover.prototype,"headerText",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"horizontal-align"})],Popover.prototype,"horizontalAlign",void 0),__decorate([(0,decorators.Cb)({type:Number,attribute:"offset-x"})],Popover.prototype,"offsetX",void 0),__decorate([(0,decorators.Cb)({type:Number,attribute:"offset-y"})],Popover.prototype,"offsetY",void 0),__decorate([(0,decorators.SB)()],Popover.prototype,"arrowTranslateX",void 0),__decorate([(0,decorators.SB)()],Popover.prototype,"arrowTranslateY",void 0),__decorate([(0,decorators.SB)()],Popover.prototype,"opened",void 0),Popover=Popover_1=__decorate([(0,decorators.Mo)("stylospectrum-popover")],Popover)},"./src/tooltip/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var types=__webpack_require__("./src/types/index.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Tooltip=class Tooltip extends lit.oi{static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{position:fixed;background:#e4e1e4;border:1px solid rgba(0,0,0,.1);border-radius:.125rem;box-shadow:0 2px 8px 0 rgba(0,0,0,.2),0 0 2px 0 rgba(255,255,255,.6)}.stylospectrum-tooltip{display:flex;flex-direction:column;align-items:center;box-sizing:border-box;padding:.1875rem .375rem}.stylospectrum-tooltip-text{color:#454445;font-weight:400;font-size:.75rem;font-family:"72","72full",arial,helvetica,sans-serif}')}
  `}connectedCallback(){super.connectedCallback(),setTimeout((()=>{const openerRect=JSON.parse(this.openerRect);this.style.left=openerRect.left+(openerRect.width-this.offsetWidth)/2+"px",this.placement===types.ug.Top?this.style.top=openerRect.top-this.offsetHeight-8+"px":this.style.top=openerRect.bottom+8+"px"}))}render(){return lit.dy`
      <div class="stylospectrum-tooltip">
        <div class="stylospectrum-tooltip-text">
          <slot></slot>
        </div>
      </div>
    `}};__decorate([(0,decorators.Cb)({type:String,reflect:!1})],Tooltip.prototype,"openerRect",void 0),__decorate([(0,decorators.Cb)({type:String})],Tooltip.prototype,"placement",void 0),Tooltip=__decorate([(0,decorators.Mo)("stylospectrum-tooltip")],Tooltip)}}]);
//# sourceMappingURL=159.766d5353.iframe.bundle.js.map