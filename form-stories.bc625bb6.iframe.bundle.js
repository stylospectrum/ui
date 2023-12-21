"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[182],{"./src/button/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),enums=__webpack_require__("./src/enums/index.ts");__webpack_require__("./src/icon/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Button=class Button extends lit.oi{constructor(){super(...arguments),this.type=enums.Y7.Primary,this.htmlType=enums.L$.Button}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{display:inline-block;box-sizing:border-box;min-width:2rem;height:1.625rem;overflow:hidden;font-weight:700;font-size:.875rem;font-family:"72","72full",arial,helvetica,sans-serif;line-height:normal;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle;background-color:rgba(0,0,0,0);border:.0625rem solid rgba(0,0,0,0);border-radius:.5rem;cursor:pointer}:host([disabled]){cursor:not-allowed;opacity:.4}:host([type=Primary]){color:#eaecee;background:#0070f2;border-color:#0070f2}:host([type=Primary]:not([disabled]):hover){color:#eaecee;background-color:#0064d8;border-color:#0064d8}:host([type=Primary]:not([disabled]):active){color:#4db1ff;background-color:#202932;border-color:#4db1ff}:host([type=Secondary]){color:#4db1ff;background:#1c242c;border:.0625rem solid #3a4a5a}:host([type=Secondary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Secondary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([type=Tertiary]){color:#4db1ff;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}:host([type=Tertiary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Tertiary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([focused]:not(:active)) .stylospectrum-button::after{position:absolute;inset:.0625rem;box-sizing:border-box;border:.125rem solid #9ad3ff;border-radius:.375rem;content:""}:host([type=Primary][focused]) .stylospectrum-button::after{border-color:#000}.stylospectrum-button{position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;min-width:inherit;height:100%;padding:0 .5rem;overflow:inherit;color:inherit;font:inherit;line-height:inherit;letter-spacing:inherit;white-space:inherit;text-overflow:inherit;text-shadow:inherit;word-spacing:inherit;background:inherit;border:none;outline:none;cursor:inherit;user-select:none}.stylospectrum-button-icon{font-weight:400;font-size:1rem;font-style:normal}.stylospectrum-button-has-icon{min-width:auto;padding:0}')}
  `}handleFocusIn(){this.focused=!0}handleFocusOut(){this.focused=!1}render(){const iconNode=this.icon?lit.dy`<stylospectrum-icon
          class="stylospectrum-button-icon"
          name=${this.icon}
        >
        </stylospectrum-icon>`:lit.Ld,textNode=this.icon?lit.Ld:lit.dy`<span class="stylospectrum-button-text">
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
        ${iconNode} ${textNode}
      </button>
    `}};__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Button.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)()],Button.prototype,"icon",void 0),__decorate([(0,decorators.Cb)({type:String,reflect:!0})],Button.prototype,"type",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"html-type",reflect:!0})],Button.prototype,"htmlType",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Button.prototype,"focused",void 0),Button=__decorate([(0,decorators.Mo)("stylospectrum-button")],Button)},"./src/checkbox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>src_checkbox});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),decorators_event=__webpack_require__("./src/utils/decorators/event.ts"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/label/index.ts"),__webpack_require__("./src/icon/data/accept.ts");var Keys=__webpack_require__("./src/utils/Keys.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Checkbox=class Checkbox extends lit.oi{constructor(){super(...arguments),this._innerChecked=!1}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{display:inline-block;max-width:100%;overflow:hidden;border-radius:0;outline:none;cursor:pointer;transition:unset;user-select:none}:host([indeterminate]:not([checked])) .stylospectrum-checkbox-inner::after{position:absolute;top:50%;left:50%;width:.5rem;height:.5rem;background-color:currentcolor;transform:translate(-50%, -50%);content:""}:host([disabled]){cursor:default}:host([disabled]) .stylospectrum-checkbox-wrapper{opacity:.4}:host([disabled]) .stylospectrum-checkbox-inner{border-color:#a9b4be}:host([disabled]) .stylospectrum-checkbox-label{color:#8396a8}:host([text]) .stylospectrum-checkbox-wrapper{padding-inline-end:.3125rem}:host([text]) .stylospectrum-checkbox-wrapper:focus::before{inset-inline-end:0}:host(:hover:not([disabled])){background:rgba(0,0,0,0)}:host(:hover:not([disabled])) .stylospectrum-checkbox-inner{background-color:#002b4d;border-color:#4db1ff}.stylospectrum-checkbox-wrapper{position:relative;display:inline-flex;align-items:center;box-sizing:border-box;width:100%;min-width:2rem;min-height:2rem;padding:0 .5rem;border:none;border-radius:0;outline:none;transition:unset}.stylospectrum-checkbox-wrapper:focus{border:none;border-radius:.5rem}.stylospectrum-checkbox-wrapper:focus::before{position:absolute;display:block;border:.125rem solid #9ad3ff;border-radius:.5rem;content:"";inset-inline:.25rem;inset-block:.25rem}.stylospectrum-checkbox-inner{position:relative;box-sizing:border-box;min-width:1rem;max-width:1rem;height:1rem;max-height:1rem;color:#4db1ff;background:#161c22;border:.0625rem solid #a9b4be;border-radius:.25rem;cursor:inherit}.stylospectrum-checkbox-inner input{position:absolute;left:0;width:0;font-size:inherit;visibility:hidden;appearance:none}.stylospectrum-checkbox-icon{position:absolute;top:50%;left:50%;color:currentcolor;font-size:.75rem;transform:translate(-50%, -50%);cursor:inherit}.stylospectrum-checkbox-label{overflow:hidden;color:#eaecee;text-overflow:ellipsis;cursor:inherit;pointer-events:none;margin-inline-start:.5rem}')}
  `}get effectiveTabIndex(){const tabindex=this.getAttribute("tabindex");return this.disabled?void 0:tabindex||"0"}_handleKeyDown(e){(0,Keys.Wd)(e)&&e.preventDefault(),(0,Keys.tH)(e)&&this.toggle(!0)}_handleKeyUp(e){(0,Keys.Wd)(e)&&this.toggle(!0)}toggle(_key=!1){_key&&(this.inputEle.checked=!this.inputEle.checked);const checked=this.inputEle.checked;this.disabled||this.indeterminate||(this.checked||(this._innerChecked=checked),this.changeEvent.emit(checked))}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("checked")&&!this.indeterminate&&(this._innerChecked=this.checked)}render(){const checkNode=this._innerChecked&&!this.indeterminate?lit.dy`<stylospectrum-icon
            class="stylospectrum-checkbox-icon"
            name="accept"
          >
          </stylospectrum-icon>`:lit.Ld,textNode=this.text?lit.dy`<stylospectrum-label class="stylospectrum-checkbox-label">
          ${this.text}
        </stylospectrum-label>`:lit.Ld;return lit.dy`
      <label
        class="stylospectrum-checkbox-wrapper"
        role="checkbox"
        part="root"
        tabindex="${(0,if_defined.o)(this.effectiveTabIndex)}"
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
    `}};__decorate([(0,decorators.Cb)({type:Boolean})],Checkbox.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Checkbox.prototype,"indeterminate",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Checkbox.prototype,"checked",void 0),__decorate([(0,decorators.Cb)()],Checkbox.prototype,"text",void 0),__decorate([(0,decorators.SB)()],Checkbox.prototype,"_innerChecked",void 0),__decorate([(0,decorators_event.B)({name:"change"})],Checkbox.prototype,"changeEvent",void 0),__decorate([(0,decorators.IO)("input")],Checkbox.prototype,"inputEle",void 0),Checkbox=__decorate([(0,decorators.Mo)("stylospectrum-checkbox")],Checkbox);const src_checkbox=Checkbox},"./src/enums/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var ButtonDesign;__webpack_require__.d(__webpack_exports__,{Y7:()=>enums_ButtonDesign,L$:()=>enums_ButtonType,n$:()=>enums_InputType,$Y:()=>enums_ValueState}),function(ButtonDesign){ButtonDesign.Primary="Primary",ButtonDesign.Secondary="Secondary",ButtonDesign.Tertiary="Tertiary"}(ButtonDesign||(ButtonDesign={}));const enums_ButtonDesign=ButtonDesign;var ButtonType;!function(ButtonType){ButtonType.Button="Button",ButtonType.Submit="Submit",ButtonType.Reset="Reset"}(ButtonType||(ButtonType={}));const enums_ButtonType=ButtonType;var InputType;!function(InputType){InputType.Text="Text",InputType.Email="Email",InputType.Number="Number",InputType.Password="Password",InputType.Tel="Tel",InputType.URL="URL"}(InputType||(InputType={}));const enums_InputType=InputType;var ValueState;!function(ValueState){ValueState.None="None",ValueState.Success="Success",ValueState.Warning="Warning",ValueState.Error="Error",ValueState.Information="Information"}(ValueState||(ValueState={}));const enums_ValueState=ValueState},"./src/form/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>stories});var lit=__webpack_require__("./node_modules/lit/index.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),enums=__webpack_require__("./src/enums/index.ts"),input=__webpack_require__("./src/input/index.ts"),dist_web=__webpack_require__("./node_modules/async-validator/dist-web/index.js"),src_checkbox=__webpack_require__("./src/checkbox/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let FormItem=class FormItem extends lit.oi{constructor(){super(...arguments),this.rules=[]}static{this.styles=lit.iv`
    ${(0,lit.$m)(":host{display:block;margin-bottom:1rem}.stylospectrum-form-item{display:flex;flex-direction:column;gap:.125rem;align-items:flex-start;align-self:stretch}.stylospectrum-form-item-label-wrapper{display:flex;justify-content:space-between;width:100%}")}
  `}_handleChange(e){this.value=e.detail,this.validateRules()}_handleSlotChange(){const formControl=this.slotEls?.[0];formControl&&(formControl.id=this.name)}async _validateRule(rule){const validator=new dist_web.Z({[this.name]:[rule]});let result=[];try{await Promise.resolve(validator.validate({[this.name]:this.value}))}catch(errObj){errObj.errors&&(result=errObj.errors.map((({message})=>message)))}return result}validateRules(){const promise=new Promise((async(resolve,reject)=>{for(let i=0;i<this.rules.length;i++){const errors=await this._validateRule(this.rules[i]);if(errors.length){reject(errors);break}}resolve([])}));return promise.catch((e=>e)).then((ruleErrors=>{if(!(this.slotEls[0]instanceof src_checkbox.Z)){const input=this.slotEls[0];ruleErrors.length>0?(input.valueState=enums.$Y.Error,input.valueStateMessage=ruleErrors[0]):input.valueState=enums.$Y.None}})),promise}updated(changedProperties){changedProperties.has("value")&&(this.slotEls[0]instanceof src_checkbox.Z?this.slotEls[0].checked=this.value:this.slotEls[0].value=this.value)}render(){const labelNode=this.label?lit.dy`<div class="stylospectrum-form-item-label-wrapper">
          <stylospectrum-label show-colon for="${this.name}">
            ${this.label}
          </stylospectrum-label>
          <slot name="suffix-label"></slot>
        </div>`:lit.Ld;return lit.dy`
      <div class="stylospectrum-form-item">
        ${labelNode}
        <slot
          @slotchange=${this._handleSlotChange}
          @change="${this._handleChange}"
        >
        </slot>
      </div>
    `}};__decorate([(0,decorators.Cb)()],FormItem.prototype,"name",void 0),__decorate([(0,decorators.Cb)()],FormItem.prototype,"label",void 0),__decorate([(0,decorators.Cb)()],FormItem.prototype,"value",void 0),__decorate([(0,decorators.Cb)({type:Array,reflect:!1})],FormItem.prototype,"rules",void 0),__decorate([(0,decorators.NH)({flatten:!0})],FormItem.prototype,"slotEls",void 0),FormItem=__decorate([(0,decorators.Mo)("stylospectrum-form-item")],FormItem);const form_form_item=FormItem;var form_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Form=class Form extends lit.oi{getFormItems(){return this.slotEls.filter((el=>el instanceof form_form_item))}getFieldsValue(){const values=this.getFormItems().map((el=>[el.name,el.value]));return Object.fromEntries(values)}setFieldsValue(values){const formItems=Object.fromEntries(this.getFormItems().map((el=>[el.name,el])));Object.keys(values).forEach((key=>{formItems[key].value=values[key]}))}resetFields(){const formItems=this.getFormItems(),values=Object.fromEntries(this.getFormItems().map((el=>[el.name,void 0])));this.setFieldsValue(values),formItems.forEach((item=>{const slot=item.shadowRoot?.querySelector("slot"),node=slot?.assignedElements({flatten:!0})?.[0];node instanceof input.Z&&(node.valueState=enums.$Y.None,node.valueStateMessage="")}))}async validateFields(){let hasError=!1;try{await Promise.all(this.getFormItems().map((el=>el.validateRules())))}catch(e){hasError=!0}return hasError?null:this.getFieldsValue()}render(){return lit.dy`
      <form class="stylospectrum-form">
        <slot></slot>
      </form>
    `}};form_decorate([(0,decorators.NH)({flatten:!0})],Form.prototype,"slotEls",void 0),Form=form_decorate([(0,decorators.Mo)("stylospectrum-form")],Form);__webpack_require__("./src/button/index.ts"),__webpack_require__("./src/link/index.ts");const stories={title:"Form",component:"stylospectrum-form",tags:["autodocs"]},Basic=(()=>{const formRef=(0,ref.V)(),passwordRef=(0,ref.V)(),forgotPassRef=(0,ref.V)(),createAnAccRef=(0,ref.V)();return lit.dy`
    <stylospectrum-form ${(0,ref.i)(formRef)} style="width: 27.75rem; display:block">
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
          ${(0,ref.i)(forgotPassRef)}
          slot="suffix-label"
          @keydown="${()=>{requestAnimationFrame((()=>{createAnAccRef.value?.shadowRoot?.querySelector("a")?.focus()}))}}"
        >
          Forgot your password?
        </stylospectrum-link>
        <stylospectrum-input
          style="width: 100%"
          ${(0,ref.i)(passwordRef)}
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
    <stylospectrum-link ${(0,ref.i)(createAnAccRef)}>
      Create an account!
    </stylospectrum-link>
  `}).bind({})},"./src/icon/data/accept.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("accept",{pathData:"M187 416q-12 0-20-9L71 299q-7-7-7-17 0-11 7.5-18.5T90 256q12 0 19 9l77 87 217-247q8-9 19-9t18.5 7.5T448 122q0 10-6 16L206 407q-7 9-19 9z"});const __WEBPACK_DEFAULT_EXPORT__="accept"},"./src/icon/data/decline.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("decline",{pathData:"M292 256l117 116q7 7 7 18 0 12-7.5 19t-18.5 7q-10 0-18-8L256 292 140 408q-8 8-18 8-11 0-18.5-7.5T96 390q0-10 8-18l116-116-116-116q-8-8-8-18 0-11 7.5-18.5T122 96t18 7l116 117 116-117q7-7 18-7t18.5 7.5T416 122t-7 18z"});const __WEBPACK_DEFAULT_EXPORT__="decline"},"./src/icon/data/error.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").q)("error",{pathData:"M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm45 256l74-73q9-11 9-23 0-13-9.5-22.5T352 128q-12 0-23 9l-73 74-73-74q-10-9-23-9t-22.5 9.5T128 160q0 12 9 23l74 73-74 73q-9 10-9 23t9.5 22.5T160 384t23-9l73-74 73 74q11 9 23 9 13 0 22.5-9.5T384 352t-9-23z"});const __WEBPACK_DEFAULT_EXPORT__="error"},"./src/icon/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var util=__webpack_require__("./src/icon/util.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Icon=class Icon extends lit.oi{static{this.styles=lit.iv`
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
    `:lit.dy``}};__decorate([(0,decorators.Cb)({type:String})],Icon.prototype,"name",void 0),Icon=__decorate([(0,decorators.Mo)("stylospectrum-icon")],Icon)},"./src/icon/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>getIconData,q:()=>registerIcon});const registry=new Map,registerIcon=(name,data)=>{registry.set(name,data)},getIconData=name=>registry.get(name)},"./src/input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>input});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),enums=__webpack_require__("./src/enums/index.ts"),decorators_event=__webpack_require__("./src/utils/decorators/event.ts"),Keys=__webpack_require__("./src/utils/Keys.ts");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/icon/data/decline.ts"),__webpack_require__("./src/icon/data/error.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Input=class Input extends lit.oi{constructor(){super(...arguments),this.placeholder="",this.valueState=enums.$Y.None,this.type=enums.n$.Text,this._innerValue=""}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host{display:inline-block;box-sizing:border-box;width:13.125rem;min-width:4rem;height:1.625rem;margin:.1875rem 0;color:#fff;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;font-style:normal;text-align:start;background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #a9b4be, #a9b4be) border-box;background-color:#161c22;border:none;border-radius:.25rem;box-shadow:inset 0 0 0 .0625rem rgba(169,180,190,.25);transition:none}:host([disabled]){background-color:#161c22;border-color:#a9b4be;cursor:default;opacity:.4;pointer-events:none}:host([focused]) .stylospectrum-input-wrapper::after{position:absolute;inset:0;z-index:2;border:.125rem solid rgba(0,0,0,0);border-radius:.25rem;content:"";pointer-events:none}:host([value-state=None]:not([focused]):hover){background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #4db1ff, #4db1ff) border-box;background-color:#1d232a;border-color:#4db1ff;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}:host([value-state=None][focused]){background-color:#1d232a;border-color:#4db1ff}:host([value-state=None][focused]) .stylospectrum-input-wrapper::after{border-color:#4db1ff}:host([value-state=Error]:not([disabled])){background:0 100%/100% .125rem no-repeat linear-gradient(0deg, #fa6161, #fa6161) border-box;background-color:#350000;border:.125rem none #fa6161;box-shadow:inset 0 0 0 .0625rem rgba(248,38,38,.3)}:host([value-state=Error]:not([focused]):hover){background-color:#1d232a;box-shadow:inset 0 0 0 .0625rem rgba(248,38,38,.3)}:host([value-state=Error][focused]){background-color:#1d232a;border-color:#fa6161}:host([value-state=Error][focused]) .stylospectrum-input-wrapper::after{border-color:#fa6161}.stylospectrum-input{flex:1 1 0%;box-sizing:border-box;width:100%;min-width:2rem;padding:0 .5rem;color:inherit;font-size:inherit;font-family:inherit;font-style:inherit;line-height:inherit;letter-spacing:inherit;text-align:inherit;text-overflow:ellipsis;word-spacing:inherit;background:rgba(0,0,0,0);border:none;outline:none;appearance:none}.stylospectrum-input-wrapper{position:relative;display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box;height:100%;color:inherit;background:rgba(0,0,0,0);border-radius:.25rem;outline:none}.stylospectrum-input-clear-icon{padding:0;color:inherit}.stylospectrum-input-clear-icon-wrapper{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:2rem;min-width:2rem;height:calc(100% - 1px);min-height:1rem;padding:0;color:#eaecee;border-radius:.25rem;outline:none;cursor:pointer;border-inline-start:none}.stylospectrum-input-value-state-message{display:inline-block;color:#eaecee;font-weight:400;font-size:.75rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;line-height:normal}.stylospectrum-input-value-state-message-icon{display:inline-block;color:#fa6161;font-weight:400;font-size:1rem}.stylospectrum-input-value-state-message-wrapper{position:absolute;top:100%;left:0;z-index:1000;display:flex;gap:.375rem;align-items:center;box-sizing:border-box;width:100%;padding:.5rem;background:#350000;border-radius:.5rem;box-shadow:0 2px 8px 0 rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.35)}')}
  `}_handleClear(){this._innerValue="",this._showClearIcon=!1,this.changeEvent.emit(this._innerValue),this.input?.focus()}_handleInput(e){const value=e.target.value;this.value||(this._innerValue=value),this._showClearIcon=this.allowClear&&!!value&&!this.disabled,this.changeEvent.emit(value)}_handleFocus(){this.focused=!0}_handleBlur(){this.focused=!1}_handleKeyDown(e){(0,Keys.tH)(e)&&this.enterEvent.emit(this._innerValue)}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("value")&&(this._innerValue=this.value||""),(_changedProperties.has("allowClear")||_changedProperties.has("value")||_changedProperties.has("disabled"))&&(this._showClearIcon=this.allowClear&&!!this._innerValue&&!this.disabled)}render(){const clearIconNode=this._showClearIcon?lit.dy`<span
          class="stylospectrum-input-clear-icon-wrapper"
          @click=${this._handleClear}
        >
          <stylospectrum-icon
            class="stylospectrum-input-clear-icon"
            name="decline"
          >
          </stylospectrum-icon>
        </span>`:lit.Ld,valueStateMessageNode=this.valueStateMessage&&this.valueState===enums.$Y.Error&&this.focused?lit.dy` <div class="stylospectrum-input-value-state-message-wrapper">
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
        ${clearIconNode} ${valueStateMessageNode}
      </span>
    `}};__decorate([(0,decorators.Cb)({type:Boolean})],Input.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)({type:String})],Input.prototype,"placeholder",void 0),__decorate([(0,decorators.Cb)({type:String})],Input.prototype,"value",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"value-state",reflect:!0})],Input.prototype,"valueState",void 0),__decorate([(0,decorators.Cb)({type:String,attribute:"value-state-message"})],Input.prototype,"valueStateMessage",void 0),__decorate([(0,decorators.Cb)({type:Boolean,attribute:"allow-clear"})],Input.prototype,"allowClear",void 0),__decorate([(0,decorators.Cb)({type:String})],Input.prototype,"type",void 0),__decorate([(0,decorators.SB)()],Input.prototype,"_showClearIcon",void 0),__decorate([(0,decorators.SB)()],Input.prototype,"_innerValue",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Input.prototype,"focused",void 0),__decorate([(0,decorators_event.B)({name:"change"})],Input.prototype,"changeEvent",void 0),__decorate([(0,decorators_event.B)({name:"enter"})],Input.prototype,"enterEvent",void 0),__decorate([(0,decorators.IO)("input")],Input.prototype,"input",void 0),Input=__decorate([(0,decorators.Mo)("stylospectrum-input")],Input);const input=Input},"./src/label/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Label=class Label extends lit.oi{constructor(){super(...arguments),this._colonSymbol=":"}static{this.styles=lit.iv`
    ${(0,lit.$m)(':host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:#8396a8;font-weight:normal;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;cursor:text}:host([required]) .stylospectrum-label-required-colon::after{position:relative;color:#ff78a4;font-weight:bold;font-size:1.25rem;font-style:normal;line-height:0;vertical-align:middle;content:"*"}:host([required][show-colon]) .stylospectrum-label-required-colon::after{margin-inline-start:.125rem}:host([show-colon]) .stylospectrum-label-required-colon{margin-inline-start:-0.05rem}:host([show-colon]) .stylospectrum-label-required-colon::before{content:attr(data-colon)}.stylospectrum-label-wrapper{display:inline-flex;width:100%;white-space:normal;cursor:inherit}.stylospectrum-label-text{display:inline-block;flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;vertical-align:top}')}
  `}_handleClick(){if(!this.for)return;const assignedElements=this.getRootNode().querySelector("slot").assignedElements({flatten:!0}),inputNode=assignedElements?.[0]?.shadowRoot?.querySelector("input");inputNode&&inputNode.focus()}render(){return lit.dy`
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
    `}};__decorate([(0,decorators.Cb)()],Label.prototype,"for",void 0),__decorate([(0,decorators.Cb)({type:Boolean,attribute:"show-colon"})],Label.prototype,"showColon",void 0),__decorate([(0,decorators.Cb)({type:Boolean})],Label.prototype,"required",void 0),Label=__decorate([(0,decorators.Mo)("stylospectrum-label")],Label)},"./src/link/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Link=class Link extends lit.oi{static{this.styles=lit.iv`
    ${(0,lit.$m)(':host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:#4db1ff;font-size:.875rem;font-family:"72","72full",Arial,Helvetica,sans-serif;white-space:nowrap;text-decoration:none;text-shadow:0 0 .125rem #000;overflow-wrap:normal;outline:none;cursor:pointer}:host(:hover){color:#4db1ff;text-decoration:underline}:host([focused]){color:#1d232a;text-decoration:underline}:host([focused]) .stylospectrum-link{text-shadow:none;background-color:#9ad3ff;border-radius:.125rem}:host .stylospectrum-link{border-radius:.125rem}:host([disabled]){pointer-events:none}:host([disabled]) .stylospectrum-link{text-shadow:none;outline:none;cursor:default;opacity:.4;pointer-events:none}.stylospectrum-link{position:relative;display:inline-block;box-sizing:border-box;max-width:100%;overflow:hidden;color:inherit;white-space:inherit;text-decoration:inherit;text-overflow:ellipsis;overflow-wrap:inherit;outline:none}')}
  `}constructor(){super(),this._dummyAnchor=document.createElement("a")}_isCrossOrigin(){const loc=window.location;return this._dummyAnchor.href=this.href,!(this._dummyAnchor.hostname===loc.hostname&&this._dummyAnchor.port===loc.port&&this._dummyAnchor.protocol===loc.protocol)}willUpdate(){const needsNoReferrer="_self"!==this.target&&this.href&&this._isCrossOrigin();this._rel=needsNoReferrer?"noreferrer noopener":void 0}_handleFocusIn(){this.focused=!0}_handleFocusOut(){this.focused=!1}_handleClick(e){this.href||e.preventDefault()}render(){return lit.dy`
      <a
        class="stylospectrum-link"
        href=${this.href||"#"}
        target=${(0,if_defined.o)(this.target)}
        rel=${(0,if_defined.o)(this._rel)}
        tabindex=${this.disabled?"-1":"0"}
        title="${(0,if_defined.o)(this.title||void 0)}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @focusin=${this._handleFocusIn}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </a>
    `}};__decorate([(0,decorators.Cb)({type:Boolean})],Link.prototype,"disabled",void 0),__decorate([(0,decorators.Cb)()],Link.prototype,"href",void 0),__decorate([(0,decorators.Cb)()],Link.prototype,"target",void 0),__decorate([(0,decorators.Cb)({type:Boolean,reflect:!0})],Link.prototype,"focused",void 0),__decorate([(0,decorators.SB)()],Link.prototype,"_rel",void 0),Link=__decorate([(0,decorators.Mo)("stylospectrum-link")],Link)},"./src/utils/Keys.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wd:()=>isSpace,tH:()=>isEnter});const KeyCodes_ENTER=13,KeyCodes_SPACE=32,hasModifierKeys=event=>event.shiftKey||event.altKey||(event=>!(!event.metaKey&&!event.ctrlKey))(event),isEnter=event=>(event.key?"Enter"===event.key:event.keyCode===KeyCodes_ENTER)&&!hasModifierKeys(event),isSpace=event=>(event.key?"Spacebar"===event.key||" "===event.key:event.keyCode===KeyCodes_SPACE)&&!hasModifierKeys(event)},"./src/utils/decorators/event.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>event_event});const decorateProperty=({finisher,descriptor})=>(protoOrDescriptor,name)=>{if(void 0===name){const key=protoOrDescriptor.originalKey??protoOrDescriptor.key,info=null!=descriptor?{kind:"method",placement:"prototype",key,descriptor:descriptor(protoOrDescriptor.key)}:{...protoOrDescriptor,key};return null!=finisher&&(info.finisher=function(ctor){finisher(ctor,key)}),info}{const ctor=protoOrDescriptor.constructor;void 0!==descriptor&&Object.defineProperty(protoOrDescriptor,name,descriptor(name)),finisher?.(ctor,name)}};class EventEmitter{constructor(target,eventName,options){this.target=target,this.eventName=eventName,this.options=options}emit(value,options){let event;return value instanceof Event?event=value:(options={bubbles:!0,composed:!0,...this.options,...options},event=new CustomEvent(this.eventName,{detail:value,...options})),this.target.dispatchEvent(event)}}function event_event(options){return decorateProperty({descriptor:key=>{const eventName=options?.name??`ss-${key.toString()}`;return{get(){return new EventEmitter(this,eventName,options)},enumerable:!0,configurable:!0}}})}}}]);
//# sourceMappingURL=form-stories.bc625bb6.iframe.bundle.js.map