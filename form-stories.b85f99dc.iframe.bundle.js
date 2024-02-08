"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[939],{"./src/button/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),types=__webpack_require__("./src/types/index.ts");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/tooltip/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Button=class Button extends lit.oH{constructor(){super(...arguments),this.type=types.MG.Primary,this.htmlType=types.i6.Button}static{this.styles=lit.gV`
    ${(0,lit.sR)(':host{display:inline-block;box-sizing:border-box;min-width:2rem;height:1.625rem;overflow:hidden;font-weight:700;font-size:.875rem;font-family:"72","72full",arial,helvetica,sans-serif;line-height:normal;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle;background-color:rgba(0,0,0,0);border:.0625rem solid rgba(0,0,0,0);border-radius:.5rem;cursor:pointer}:host([disabled]){cursor:not-allowed;opacity:.4}:host([type=Primary]){color:#eaecee;background:#0070f2;border-color:#0070f2}:host([type=Primary]:not([disabled]):hover){color:#eaecee;background-color:#0064d8;border-color:#0064d8}:host([type=Primary]:not([disabled]):active){color:#4db1ff;background-color:#202932;border-color:#4db1ff}:host([type=Secondary]){color:#4db1ff;background:#1c242c;border:.0625rem solid #3a4a5a}:host([type=Secondary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Secondary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([type=Tertiary]){color:#4db1ff;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}:host([type=Tertiary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Tertiary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([focused]:not(:active):not([tab-selected])) .stylospectrum-button::after{position:absolute;inset:.0625rem;box-sizing:border-box;border:.125rem solid #9ad3ff;border-radius:.375rem;content:""}:host([circle][focused]:not(:active)) .stylospectrum-button::after{border-radius:50%}:host([type=Primary][focused]) .stylospectrum-button::after{border-color:#000}:host([circle]){height:2rem;border-radius:50%}:host([tab-selected]){border:none !important}:host([tab-selected]) .stylospectrum-button::after{position:absolute;inset:0 !important;box-sizing:border-box;border:.125rem solid #9ad3ff;border-radius:50%;content:""}.stylospectrum-button{position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;min-width:inherit;height:100%;padding:0 .5rem;overflow:inherit;color:inherit;font:inherit;line-height:inherit;letter-spacing:inherit;white-space:inherit;text-overflow:inherit;text-shadow:inherit;word-spacing:inherit;background:inherit;border:none;outline:none;cursor:inherit;user-select:none}.stylospectrum-button-icon{font-weight:400;font-size:1rem;font-style:normal}.stylospectrum-button-has-icon{min-width:auto;padding:0}')}
  `}tooltipTemplate(hovered=!1){return hovered?lit.kP`<stylospectrum-tooltip
      openerRect=${JSON.stringify(this.getBoundingClientRect())}
      placement=${this.tooltipPlacement}
    >
      ${this.tooltip}
    </stylospectrum-tooltip>`:lit.qs}handleFocusIn(){this.focused=!0}handleFocusOut(){this.focused=!1}handleMouseEnter(){this.tooltip&&(0,lit.ai)(this.tooltipTemplate(!0),document.body)}handleMouseLeave(){this.tooltip&&(0,lit.ai)(this.tooltipTemplate(),document.body)}render(){const iconNode=this.icon?lit.kP`<stylospectrum-icon
          class="stylospectrum-button-icon"
          name=${this.icon}
          rotate=${this.iconRotate}
        >
        </stylospectrum-icon>`:lit.kP`<slot name="icon"></slot>`,textNode=this.icon?lit.qs:lit.kP`<span class="stylospectrum-button-text">
          <slot></slot>
        </span>`,classes={"stylospectrum-button":!0,"stylospectrum-button-has-icon":!!this.icon};return lit.kP`
      <button
        ?disabled=${this.disabled}
        type=${this.htmlType.toLowerCase()}
        part="button"
        class=${(0,class_map.m)(classes)}
        @focusout=${this.handleFocusOut}
        @focusin=${this.handleFocusIn}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        ${textNode} ${iconNode}
      </button>
    `}};__decorate([(0,decorators.qq)({type:Boolean,reflect:!0})],Button.prototype,"disabled",void 0),__decorate([(0,decorators.qq)()],Button.prototype,"icon",void 0),__decorate([(0,decorators.qq)()],Button.prototype,"iconRotate",void 0),__decorate([(0,decorators.qq)()],Button.prototype,"tooltip",void 0),__decorate([(0,decorators.qq)({type:String,attribute:"tooltip-placement"})],Button.prototype,"tooltipPlacement",void 0),__decorate([(0,decorators.qq)({type:String,reflect:!0})],Button.prototype,"type",void 0),__decorate([(0,decorators.qq)({type:String,attribute:"html-type",reflect:!0})],Button.prototype,"htmlType",void 0),__decorate([(0,decorators.qq)({type:Boolean,reflect:!0})],Button.prototype,"focused",void 0),__decorate([(0,decorators.qq)({type:Boolean,reflect:!0})],Button.prototype,"circle",void 0),__decorate([(0,decorators.qq)({type:Boolean,reflect:!0,attribute:"tab-selected"})],Button.prototype,"tabSelected",void 0),Button=__decorate([(0,decorators.Kx)("stylospectrum-button")],Button)},"./src/checkbox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>src_checkbox});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");var decorators_event=__webpack_require__("./src/utils/decorators/event.ts"),Keys=__webpack_require__("./src/utils/Keys.ts"),__decorate=(__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/tooltip/index.ts"),__webpack_require__("./src/icon/data/accept.ts"),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let Checkbox=class Checkbox extends lit.oH{constructor(){super(...arguments),this._innerChecked=!1}static{this.styles=lit.gV`
    ${(0,lit.sR)(':host{display:inline-block;max-width:100%;overflow:hidden;border-radius:0;outline:none;cursor:pointer;transition:unset;user-select:none}:host([indeterminate]:not([checked])) .stylospectrum-checkbox-inner::after{position:absolute;top:50%;left:50%;width:.5rem;height:.5rem;background-color:currentcolor;transform:translate(-50%, -50%);content:""}:host([disabled]){cursor:default}:host([disabled]) .stylospectrum-checkbox-wrapper{opacity:.4}:host([disabled]) .stylospectrum-checkbox-inner{border-color:#a9b4be}:host([disabled]) .stylospectrum-checkbox-label{color:#8396a8}:host([text]) .stylospectrum-checkbox-wrapper{padding-inline-end:.3125rem}:host([text]) .stylospectrum-checkbox-wrapper:focus::before{inset-inline-end:0}:host(:hover:not([disabled])){background:rgba(0,0,0,0)}:host(:hover:not([disabled])) .stylospectrum-checkbox-inner{background-color:#002b4d;border-color:#4db1ff}.stylospectrum-checkbox-wrapper{position:relative;display:inline-flex;align-items:center;box-sizing:border-box;width:100%;min-width:2rem;min-height:2rem;padding:0 .5rem;border:none;border-radius:0;outline:none;transition:unset}.stylospectrum-checkbox-wrapper:focus{border:none;border-radius:.5rem}.stylospectrum-checkbox-wrapper:focus::before{position:absolute;display:block;border:.125rem solid #9ad3ff;border-radius:.5rem;content:"";inset-inline:.25rem;inset-block:.25rem}.stylospectrum-checkbox-inner{position:relative;box-sizing:border-box;min-width:1rem;max-width:1rem;height:1rem;max-height:1rem;color:#4db1ff;background:#161c22;border:.0625rem solid #a9b4be;border-radius:.25rem;cursor:inherit}.stylospectrum-checkbox-inner input{position:absolute;left:0;width:0;font-size:inherit;visibility:hidden;appearance:none}.stylospectrum-checkbox-icon{position:absolute;top:50%;left:50%;color:currentcolor;font-size:.75rem;transform:translate(-50%, -50%);cursor:inherit}.stylospectrum-checkbox-label{overflow:hidden;color:#eaecee;text-overflow:ellipsis;cursor:inherit;pointer-events:none;margin-inline-start:.5rem}')}
  `}get effectiveTabIndex(){const tabindex=this.getAttribute("tabindex");return this.disabled?void 0:tabindex||"0"}_handleKeyDown(e){(0,Keys.e6)(e)&&e.preventDefault(),(0,Keys.g3)(e)&&this.toggle(!0)}_handleKeyUp(e){(0,Keys.e6)(e)&&this.toggle(!0)}toggle(_key=!1){_key&&(this.inputEle.checked=!this.inputEle.checked);const checked=this.inputEle.checked;this.disabled||this.indeterminate||(this.checked||(this._innerChecked=checked),this.changeEvent.emit(checked))}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("checked")&&!this.indeterminate&&(this._innerChecked=this.checked)}render(){const checkNode=this._innerChecked&&!this.indeterminate?lit.kP`<stylospectrum-icon
            class="stylospectrum-checkbox-icon"
            name="accept"
          >
          </stylospectrum-icon>`:lit.qs,textNode=this.text?lit.kP`<stylospectrum-label class="stylospectrum-checkbox-label">
          ${this.text}
        </stylospectrum-label>`:lit.qs;return lit.kP`
      <label
        class="stylospectrum-checkbox-wrapper"
        role="checkbox"
        part="root"
        tabindex="${(0,if_defined.u)(this.effectiveTabIndex)}"
        @keydown="${this._handleKeyDown}"
        @keyup="${this._handleKeyUp}"
      >
        <span class="stylospectrum-checkbox-inner">
          ${checkNode}
          <input
            @input=${()=>this.toggle()}
            type="checkbox"
            ?checked="${this._innerChecked}"
            ?disabled="${this.disabled}"
            tabindex="-1"
            aria-hidden="true"
          />
        </span>

        ${textNode}
      </label>
    `}};__decorate([(0,decorators.qq)({type:Boolean})],Checkbox.prototype,"disabled",void 0),__decorate([(0,decorators.qq)({type:Boolean})],Checkbox.prototype,"indeterminate",void 0),__decorate([(0,decorators.qq)({type:Boolean})],Checkbox.prototype,"checked",void 0),__decorate([(0,decorators.qq)()],Checkbox.prototype,"text",void 0),__decorate([(0,decorators.K2)()],Checkbox.prototype,"_innerChecked",void 0),__decorate([(0,decorators_event.Q)({name:"change"})],Checkbox.prototype,"changeEvent",void 0),__decorate([(0,decorators.kt)("input")],Checkbox.prototype,"inputEle",void 0),Checkbox=__decorate([(0,decorators.Kx)("stylospectrum-checkbox")],Checkbox);const src_checkbox=Checkbox},"./src/form/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>stories});var lit=__webpack_require__("./node_modules/lit/index.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),types=__webpack_require__("./src/types/index.ts"),input=__webpack_require__("./src/input/index.ts"),dist_web=__webpack_require__("./node_modules/async-validator/dist-web/index.js"),src_checkbox=__webpack_require__("./src/checkbox/index.ts");__webpack_require__("./src/label/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let FormItem=class FormItem extends lit.oH{constructor(){super(...arguments),this.rules=[]}static{this.styles=lit.gV`
    ${(0,lit.sR)(":host{display:block;margin-bottom:1rem}.stylospectrum-form-item{display:flex;flex-direction:column;gap:.125rem;align-items:flex-start;align-self:stretch}.stylospectrum-form-item-label-wrapper{display:flex;justify-content:space-between;width:100%}")}
  `}_handleChange(e){this.value=e.detail,this.validateRules()}_handleSlotChange(){const formControl=this.slotEls?.[0];formControl&&(formControl.id=this.name)}async _validateRule(rule){const validator=new dist_web.c({[this.name]:[rule]});let result=[];try{await Promise.resolve(validator.validate({[this.name]:this.value}))}catch(errObj){errObj.errors&&(result=errObj.errors.map((({message})=>message)))}return result}validateRules(){const promise=new Promise((async(resolve,reject)=>{for(let i=0;i<this.rules.length;i++){const errors=await this._validateRule(this.rules[i]);if(errors.length){reject(errors);break}}resolve([])}));return promise.catch((e=>e)).then((ruleErrors=>{if(!(this.slotEls[0]instanceof src_checkbox.c)){const input=this.slotEls[0];ruleErrors.length>0?(input.valueState=types.sn.Error,input.valueStateMessage=ruleErrors[0]):input.valueState=types.sn.None}})),promise}updated(changedProperties){changedProperties.has("value")&&(this.slotEls[0]instanceof src_checkbox.c?this.slotEls[0].checked=this.value:this.slotEls[0].value=this.value)}render(){const labelNode=this.label?lit.kP`<div class="stylospectrum-form-item-label-wrapper">
          <stylospectrum-label show-colon for="${this.name}">
            ${this.label}
          </stylospectrum-label>
          <slot name="suffix-label"></slot>
        </div>`:lit.qs;return lit.kP`
      <div class="stylospectrum-form-item">
        ${labelNode}
        <slot
          @slotchange=${this._handleSlotChange}
          @change="${this._handleChange}"
        >
        </slot>
      </div>
    `}};__decorate([(0,decorators.qq)()],FormItem.prototype,"name",void 0),__decorate([(0,decorators.qq)()],FormItem.prototype,"label",void 0),__decorate([(0,decorators.qq)()],FormItem.prototype,"value",void 0),__decorate([(0,decorators.qq)({type:Array,reflect:!1})],FormItem.prototype,"rules",void 0),__decorate([(0,decorators.HW)({flatten:!0})],FormItem.prototype,"slotEls",void 0),FormItem=__decorate([(0,decorators.Kx)("stylospectrum-form-item")],FormItem);const form_form_item=FormItem;var form_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Form=class Form extends lit.oH{getFormItems(){return this.slotEls.filter((el=>el instanceof form_form_item))}getFieldsValue(){const values=this.getFormItems().map((el=>[el.name,el.value]));return Object.fromEntries(values)}setFieldsValue(values){const formItems=Object.fromEntries(this.getFormItems().map((el=>[el.name,el])));Object.keys(values).forEach((key=>{formItems[key].value=values[key]}))}resetFields(){const formItems=this.getFormItems(),values=Object.fromEntries(this.getFormItems().map((el=>[el.name,void 0])));this.setFieldsValue(values),formItems.forEach((item=>{const slot=item.shadowRoot?.querySelector("slot"),node=slot?.assignedElements({flatten:!0})?.[0];node instanceof input.c&&(node.valueState=types.sn.None,node.valueStateMessage="")}))}async validateFields(){let hasError=!1;try{await Promise.all(this.getFormItems().map((el=>el.validateRules())))}catch(e){hasError=!0}return hasError?null:this.getFieldsValue()}render(){return lit.kP`
      <form class="stylospectrum-form">
        <slot></slot>
      </form>
    `}};form_decorate([(0,decorators.HW)({flatten:!0})],Form.prototype,"slotEls",void 0),Form=form_decorate([(0,decorators.Kx)("stylospectrum-form")],Form);__webpack_require__("./src/button/index.ts"),__webpack_require__("./src/link/index.ts");const stories={title:"Form",component:"stylospectrum-form",tags:["autodocs"]},Basic=(()=>{const formRef=(0,ref.Y)(),passwordRef=(0,ref.Y)(),forgotPassRef=(0,ref.Y)(),createAnAccRef=(0,ref.Y)();return lit.kP`
    <stylospectrum-form ${(0,ref.I)(formRef)} style="width: 27.75rem; display:block">
      <stylospectrum-form-item
        label="Email"
        name="email"
        .rules="${[{required:!0,message:"Enter your email"},{pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Wrong or Invalid email address. Please correct and try again"}]}"
      >
        <stylospectrum-input
          style="width: 100%"
          @keydown="${()=>{requestAnimationFrame((()=>{passwordRef.value?.shadowRoot?.querySelector("input")?.focus()}))}}"
        ></stylospectrum-input>
      </stylospectrum-form-item>

      <stylospectrum-form-item
        label="Password"
        name="password"
        .rules="${[{required:!0,message:"Enter your password"}]}"
      >
        <stylospectrum-link
          ${(0,ref.I)(forgotPassRef)}
          slot="suffix-label"
          @keydown="${()=>{requestAnimationFrame((()=>{createAnAccRef.value?.shadowRoot?.querySelector("a")?.focus()}))}}"
        >
          Forgot your password?
        </stylospectrum-link>
        <stylospectrum-input
          style="width: 100%"
          ${(0,ref.I)(passwordRef)}
          type="Password"
        >
        </stylospectrum-input>
      </stylospectrum-form-item>

      <stylospectrum-form-item name="keep-me-signed-in">
        <stylospectrum-checkbox text="Keep me signed in">
        </stylospectrum-checkbox>
      </stylospectrum-form-item>
    </stylospectrum-form>

    <stylospectrum-button
      @click=${async()=>console.log(await(formRef.value?.validateFields()))}
      @keydown="${()=>{requestAnimationFrame((()=>{forgotPassRef.value?.shadowRoot?.querySelector("a")?.focus()}))}}"
    >
      Submit
    </stylospectrum-button>
    <br />
    <stylospectrum-link ${(0,ref.I)(createAnAccRef)}>
      Create an account!
    </stylospectrum-link>
  `}).bind({})},"./src/icon/data/accept.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts")._)("accept",{pathData:"M187 416q-12 0-20-9L71 299q-7-7-7-17 0-11 7.5-18.5T90 256q12 0 19 9l77 87 217-247q8-9 19-9t18.5 7.5T448 122q0 10-6 16L206 407q-7 9-19 9z"});const __WEBPACK_DEFAULT_EXPORT__="accept"},"./src/label/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Label=class Label extends lit.oH{constructor(){super(...arguments),this._colonSymbol=":"}static{this.styles=lit.gV`
    ${(0,lit.sR)(':host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:#8396a8;font-weight:normal;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;cursor:text}:host([required]) .stylospectrum-label-required-colon::after{position:relative;color:#ff78a4;font-weight:bold;font-size:1.25rem;font-style:normal;line-height:0;vertical-align:middle;content:"*"}:host([required][show-colon]) .stylospectrum-label-required-colon::after{margin-inline-start:.125rem}:host([show-colon]) .stylospectrum-label-required-colon{margin-inline-start:-0.05rem}:host([show-colon]) .stylospectrum-label-required-colon::before{content:attr(data-colon)}.stylospectrum-label-wrapper{display:inline-flex;width:100%;white-space:normal;cursor:inherit}.stylospectrum-label-text{display:inline-block;flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;vertical-align:top}')}
  `}_handleClick(){if(!this.for)return;const assignedElements=this.getRootNode().querySelector("slot").assignedElements({flatten:!0}),inputNode=assignedElements?.[0]?.shadowRoot?.querySelector("input");inputNode&&inputNode.focus()}render(){return lit.kP`
      <label class="stylospectrum-label-wrapper" @click="${this._handleClick}">
        <span class="stylospectrum-label-text">
          <slot></slot>
        </span>
        <span
          aria-hidden="true"
          class="stylospectrum-label-required-colon"
          data-colon="${this._colonSymbol}"
        >
        </span>
      </label>
    `}};__decorate([(0,decorators.qq)()],Label.prototype,"for",void 0),__decorate([(0,decorators.qq)({type:Boolean,attribute:"show-colon"})],Label.prototype,"showColon",void 0),__decorate([(0,decorators.qq)({type:Boolean})],Label.prototype,"required",void 0),Label=__decorate([(0,decorators.Kx)("stylospectrum-label")],Label)},"./src/link/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Link=class Link extends lit.oH{static{this.styles=lit.gV`
    ${(0,lit.sR)(':host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:#4db1ff;font-size:.875rem;font-family:"72","72full",Arial,Helvetica,sans-serif;white-space:nowrap;text-decoration:none;text-shadow:0 0 .125rem #000;overflow-wrap:normal;outline:none;cursor:pointer}:host(:hover){color:#4db1ff;text-decoration:underline}:host([focused]){color:#1d232a;text-decoration:underline}:host([focused]) .stylospectrum-link{text-shadow:none;background-color:#9ad3ff;border-radius:.125rem}:host .stylospectrum-link{border-radius:.125rem}:host([disabled]){pointer-events:none}:host([disabled]) .stylospectrum-link{text-shadow:none;outline:none;cursor:default;opacity:.4;pointer-events:none}.stylospectrum-link{position:relative;display:inline-block;box-sizing:border-box;max-width:100%;overflow:hidden;color:inherit;white-space:inherit;text-decoration:inherit;text-overflow:ellipsis;overflow-wrap:inherit;outline:none}')}
  `}constructor(){super(),this._dummyAnchor=document.createElement("a")}_isCrossOrigin(){const loc=window.location;return this._dummyAnchor.href=this.href,!(this._dummyAnchor.hostname===loc.hostname&&this._dummyAnchor.port===loc.port&&this._dummyAnchor.protocol===loc.protocol)}willUpdate(){const needsNoReferrer="_self"!==this.target&&this.href&&this._isCrossOrigin();this._rel=needsNoReferrer?"noreferrer noopener":void 0}_handleFocusIn(){this.focused=!0}_handleFocusOut(){this.focused=!1}_handleClick(e){this.href||e.preventDefault()}render(){return lit.kP`
      <a
        class="stylospectrum-link"
        href=${this.href||"#"}
        target=${(0,if_defined.u)(this.target)}
        rel=${(0,if_defined.u)(this._rel)}
        tabindex=${this.disabled?"-1":"0"}
        title="${(0,if_defined.u)(this.title||void 0)}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @focusin=${this._handleFocusIn}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </a>
    `}};__decorate([(0,decorators.qq)({type:Boolean})],Link.prototype,"disabled",void 0),__decorate([(0,decorators.qq)()],Link.prototype,"href",void 0),__decorate([(0,decorators.qq)()],Link.prototype,"target",void 0),__decorate([(0,decorators.qq)({type:Boolean,reflect:!0})],Link.prototype,"focused",void 0),__decorate([(0,decorators.K2)()],Link.prototype,"_rel",void 0),Link=__decorate([(0,decorators.Kx)("stylospectrum-link")],Link)},"./src/tooltip/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var types=__webpack_require__("./src/types/index.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Tooltip=class Tooltip extends lit.oH{static{this.styles=lit.gV`
    ${(0,lit.sR)(':host{position:fixed;background:#e4e1e4;border:1px solid rgba(0,0,0,.1);border-radius:.125rem;box-shadow:0 2px 8px 0 rgba(0,0,0,.2),0 0 2px 0 rgba(255,255,255,.6)}.stylospectrum-tooltip{display:flex;flex-direction:column;align-items:center;box-sizing:border-box;padding:.1875rem .375rem}.stylospectrum-tooltip-text{color:#454445;font-weight:400;font-size:.75rem;font-family:"72","72full",arial,helvetica,sans-serif}')}
  `}connectedCallback(){super.connectedCallback(),setTimeout((()=>{const openerRect=JSON.parse(this.openerRect);this.style.left=openerRect.left+(openerRect.width-this.offsetWidth)/2+"px",this.placement===types.ER.Top?this.style.top=openerRect.top-this.offsetHeight-8+"px":this.style.top=openerRect.bottom+8+"px"}))}render(){return lit.kP`
      <div class="stylospectrum-tooltip">
        <div class="stylospectrum-tooltip-text">
          <slot></slot>
        </div>
      </div>
    `}};__decorate([(0,decorators.qq)({type:String,reflect:!1})],Tooltip.prototype,"openerRect",void 0),__decorate([(0,decorators.qq)({type:String})],Tooltip.prototype,"placement",void 0),Tooltip=__decorate([(0,decorators.Kx)("stylospectrum-tooltip")],Tooltip)}}]);
//# sourceMappingURL=form-stories.b85f99dc.iframe.bundle.js.map