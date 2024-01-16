/*! For license information please see button-stories.89a3121a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[161],{"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XM:()=>e,Xe:()=>i,pX:()=>t});var t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}};class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/directives/class-map.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>e});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js"),e=(0,directive.XM)(class extends directive.Xe{constructor(t){var _t$strings;if(super(t),t.type!==directive.pX.ATTRIBUTE||"class"!==t.name||(null===(_t$strings=t.strings)||void 0===_t$strings?void 0:_t$strings.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((s=>t[s])).join(" ")+" "}update(s,_ref){var[i]=_ref;if(void 0===this.it){for(var _t in this.it=new Set,void 0!==s.strings&&(this.st=new Set(s.strings.join(" ").split(/\s/).filter((t=>""!==t)))),i){var _this$st;i[_t]&&(null===(_this$st=this.st)||void 0===_this$st||!_this$st.has(_t))&&this.it.add(_t)}return this.render(i)}var r=s.element.classList;for(var _t2 of this.it)_t2 in i||(r.remove(_t2),this.it.delete(_t2));for(var _t3 in i){var _this$st2,_s=!!i[_t3];_s===this.it.has(_t3)||(null===(_this$st2=this.st)||void 0===_this$st2?void 0:_this$st2.has(_t3))||(_s?(r.add(_t3),this.it.add(_t3)):(r.remove(_t3),this.it.delete(_t3)))}return lit_html.Jb}})},"./src/button/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),types=__webpack_require__("./src/types/index.ts");__webpack_require__("./src/icon/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Button=class Button extends lit.oi{constructor(){super(...arguments),this.type=types.Y7.Primary,this.htmlType=types.L$.Button}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{display:inline-block;box-sizing:border-box;min-width:2rem;height:1.625rem;overflow:hidden;font-weight:700;font-size:.875rem;font-family:"72","72full",arial,helvetica,sans-serif;line-height:normal;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle;background-color:rgba(0,0,0,0);border:.0625rem solid rgba(0,0,0,0);border-radius:.5rem;cursor:pointer}:host([disabled]){cursor:not-allowed;opacity:.4}:host([type=Primary]){color:#eaecee;background:#0070f2;border-color:#0070f2}:host([type=Primary]:not([disabled]):hover){color:#eaecee;background-color:#0064d8;border-color:#0064d8}:host([type=Primary]:not([disabled]):active){color:#4db1ff;background-color:#202932;border-color:#4db1ff}:host([type=Secondary]){color:#4db1ff;background:#1c242c;border:.0625rem solid #3a4a5a}:host([type=Secondary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Secondary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([type=Tertiary]){color:#4db1ff;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}:host([type=Tertiary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Tertiary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([focused]:not(:active)) .stylospectrum-button::after{position:absolute;inset:.0625rem;box-sizing:border-box;border:.125rem solid #9ad3ff;border-radius:.375rem;content:""}:host([type=Primary][focused]) .stylospectrum-button::after{border-color:#000}.stylospectrum-button{position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;min-width:inherit;height:100%;padding:0 .5rem;overflow:inherit;color:inherit;font:inherit;line-height:inherit;letter-spacing:inherit;white-space:inherit;text-overflow:inherit;text-shadow:inherit;word-spacing:inherit;background:inherit;border:none;outline:none;cursor:inherit;user-select:none}.stylospectrum-button-icon{font-weight:400;font-size:1rem;font-style:normal}.stylospectrum-button-has-icon{min-width:auto;padding:0}')}
  `}handleFocusIn(){this.focused=!0}handleFocusOut(){this.focused=!1}render(){const iconNode=this.icon?lit.dy`<stylospectrum-icon
          class="stylospectrum-button-icon"
          name=${this.icon}
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
      >
        ${textNode} ${iconNode}
      </button>
    `}};__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Button.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)()],Button.prototype,"icon",void 0),__decorate([(0,decorators.Cb)({type:String,reflect:!0})],Button.prototype,"type",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"html-type",reflect:!0})],Button.prototype,"htmlType",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Button.prototype,"focused",void 0),Button=__decorate([(0,decorators.Mo)("stylospectrum-button")],Button)},"./src/button/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Icon:()=>Icon,default:()=>stories});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");class e extends directive.Xe{constructor(i){if(super(i),this.et=lit_html.Ld,i.type!==directive.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.Ld||null==r)return this.vt=void 0,this.et=r;if(r===lit_html.Jb)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.vt;this.et=r;var s=[r];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;var o=(0,directive.XM)(e),lit=__webpack_require__("./node_modules/lit/index.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");__webpack_require__("./src/button/index.ts");const handleClick=()=>{console.log("clicked!!")},Template=args=>{let iconName="";if(args.icon)try{iconName=__webpack_require__("./src/icon/data sync recursive ^\\.\\/.*$")(`./${args.icon}`).default}catch(err){console.log(err)}return lit.dy`
    <stylospectrum-button
      ?disabled=${args.disabled}
      type=${(0,if_defined.o)(args.type)}
      icon=${(0,if_defined.o)(iconName)}
      html-type=${(0,if_defined.o)(args.htmlType)}
      @click=${handleClick}
    >
      ${o(args.slot)}
    </stylospectrum-button>
  `},stories={title:"Button",component:"stylospectrum-button",tags:["autodocs"],argTypes:{type:{control:"select",options:["Primary","Secondary","Tertiary"]},htmlType:{control:"select",options:["Button","Submit","Reset"]}}},Basic=Template.bind({});Basic.args={slot:"Button"};const Icon=Template.bind({});Icon.args={icon:"decline"}},"./src/types/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ButtonDesign;__webpack_require__.d(__webpack_exports__,{Y7:()=>types_ButtonDesign,L$:()=>types_ButtonType,n$:()=>types_InputType,q_:()=>types_PopoverHorizontalAlign,$Y:()=>types_ValueState}),function(ButtonDesign){ButtonDesign.Primary="Primary",ButtonDesign.Secondary="Secondary",ButtonDesign.Tertiary="Tertiary"}(ButtonDesign||(ButtonDesign={}));const types_ButtonDesign=ButtonDesign;var ButtonType;!function(ButtonType){ButtonType.Button="Button",ButtonType.Submit="Submit",ButtonType.Reset="Reset"}(ButtonType||(ButtonType={}));const types_ButtonType=ButtonType;var InputType;!function(InputType){InputType.Text="Text",InputType.Email="Email",InputType.Number="Number",InputType.Password="Password",InputType.Tel="Tel",InputType.URL="URL"}(InputType||(InputType={}));const types_InputType=InputType;var ValueState;!function(ValueState){ValueState.None="None",ValueState.Success="Success",ValueState.Warning="Warning",ValueState.Error="Error",ValueState.Information="Information"}(ValueState||(ValueState={}));const types_ValueState=ValueState;var PopoverHorizontalAlign;!function(PopoverHorizontalAlign){PopoverHorizontalAlign.Center="Center",PopoverHorizontalAlign.Right="Right"}(PopoverHorizontalAlign||(PopoverHorizontalAlign={}));const types_PopoverHorizontalAlign=PopoverHorizontalAlign}}]);
//# sourceMappingURL=button-stories.89a3121a.iframe.bundle.js.map