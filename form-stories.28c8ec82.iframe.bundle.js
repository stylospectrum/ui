"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[801],{"./src/button/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),types=__webpack_require__("./src/types/index.ts");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/tooltip/index.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Button=class Button extends lit.WF{constructor(){super(...arguments),this.type=types.bW.Primary,this.htmlType=types.VQ.Button}static{this.styles=lit.AH`
    ${(0,lit.iz)(':host{display:inline-block;box-sizing:border-box;min-width:2rem;height:1.625rem;overflow:hidden;font-weight:700;font-size:.875rem;font-family:"72","72full",arial,helvetica,sans-serif;line-height:normal;white-space:nowrap;text-overflow:ellipsis;vertical-align:middle;background-color:rgba(0,0,0,0);border:.0625rem solid rgba(0,0,0,0);border-radius:.5rem;cursor:pointer}:host([disabled]){cursor:not-allowed;opacity:.4}:host([type=Primary]){color:#eaecee;background:#0070f2;border-color:#0070f2}:host([type=Primary]:not([disabled]):hover){color:#eaecee;background-color:#0064d8;border-color:#0064d8}:host([type=Primary]:not([disabled]):active){color:#4db1ff;background-color:#202932;border-color:#4db1ff}:host([type=Secondary]){color:#4db1ff;background:#1c242c;border:.0625rem solid #3a4a5a}:host([type=Secondary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Secondary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([type=Tertiary]){color:#4db1ff;background:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}:host([type=Tertiary]:not([disabled]):hover){color:#4db1ff;background-color:#222b35;border-color:#3a4a5a}:host([type=Tertiary]:not([disabled]):active){color:#4db1ff;background-color:#213131;border-color:#4db1ff}:host([focused]:not(:active):not([tab-selected])) .stylospectrum-button::after{position:absolute;inset:.0625rem;box-sizing:border-box;border:.125rem solid #9ad3ff;border-radius:.375rem;content:""}:host([circle][focused]:not(:active)) .stylospectrum-button::after{border-radius:50%}:host([type=Primary][focused]) .stylospectrum-button::after{border-color:#000}:host([circle]){height:2rem;border-radius:50%}:host([tab-selected]){border:none !important}:host([tab-selected]) .stylospectrum-button::after{position:absolute;inset:0 !important;box-sizing:border-box;border:.125rem solid #9ad3ff;border-radius:50%;content:""}.stylospectrum-button{position:relative;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%;min-width:inherit;height:100%;padding:0 .5rem;overflow:inherit;color:inherit;font:inherit;line-height:inherit;letter-spacing:inherit;white-space:inherit;text-overflow:inherit;text-shadow:inherit;word-spacing:inherit;background:inherit;border:none;outline:none;cursor:inherit;user-select:none}.stylospectrum-button-icon{font-weight:400;font-size:1rem;font-style:normal}.stylospectrum-button-has-icon{min-width:auto;padding:0}')}
  `}tooltipTemplate(hovered=!1){return hovered?lit.qy`<stylospectrum-tooltip
      openerRect=${JSON.stringify(this.getBoundingClientRect())}
      placement=${this.tooltipPlacement}
    >
      ${this.tooltip}
    </stylospectrum-tooltip>`:lit.s6}handleFocusIn(){this.focused=!0}handleFocusOut(){this.focused=!1}handleMouseEnter(){this.tooltip&&(0,lit.XX)(this.tooltipTemplate(!0),document.body)}handleMouseLeave(){this.tooltip&&(0,lit.XX)(this.tooltipTemplate(),document.body)}render(){const iconNode=this.icon?lit.qy`<stylospectrum-icon
          class="stylospectrum-button-icon"
          name=${this.icon}
          rotate=${this.iconRotate}
        >
        </stylospectrum-icon>`:lit.qy`<slot name="icon"></slot>`,textNode=this.icon?lit.s6:lit.qy`<span class="stylospectrum-button-text">
          <slot></slot>
        </span>`,classes={"stylospectrum-button":!0,"stylospectrum-button-has-icon":!!this.icon};return lit.qy`
      <button
        ?disabled=${this.disabled}
        type=${this.htmlType.toLowerCase()}
        part="button"
        class=${(0,class_map.H)(classes)}
        @focusout=${this.handleFocusOut}
        @focusin=${this.handleFocusIn}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        ${textNode} ${iconNode}
      </button>
    `}};__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],Button.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)()],Button.prototype,"icon",void 0),__decorate([(0,decorators.MZ)()],Button.prototype,"iconRotate",void 0),__decorate([(0,decorators.MZ)()],Button.prototype,"tooltip",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"tooltip-placement"})],Button.prototype,"tooltipPlacement",void 0),__decorate([(0,decorators.MZ)({type:String,reflect:!0})],Button.prototype,"type",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"html-type",reflect:!0})],Button.prototype,"htmlType",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],Button.prototype,"focused",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],Button.prototype,"circle",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0,attribute:"tab-selected"})],Button.prototype,"tabSelected",void 0),Button=__decorate([(0,decorators.EM)("stylospectrum-button")],Button)},"./src/checkbox/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>src_checkbox});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");var decorators_event=__webpack_require__("./src/utils/decorators/event.ts"),Keys=__webpack_require__("./src/utils/Keys.ts"),__decorate=(__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/tooltip/index.ts"),__webpack_require__("./src/icon/data/accept.ts"),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let Checkbox=class Checkbox extends lit.WF{constructor(){super(...arguments),this._innerChecked=!1}static{this.styles=lit.AH`
    ${(0,lit.iz)(':host{display:inline-block;max-width:100%;overflow:hidden;border-radius:0;outline:none;cursor:pointer;transition:unset;user-select:none}:host([indeterminate]:not([checked])) .stylospectrum-checkbox-inner::after{position:absolute;top:50%;left:50%;width:.5rem;height:.5rem;background-color:currentcolor;transform:translate(-50%, -50%);content:""}:host([disabled]){cursor:default}:host([disabled]) .stylospectrum-checkbox-wrapper{opacity:.4}:host([disabled]) .stylospectrum-checkbox-inner{border-color:#a9b4be}:host([disabled]) .stylospectrum-checkbox-label{color:#8396a8}:host([text]) .stylospectrum-checkbox-wrapper{padding-inline-end:.3125rem}:host([text]) .stylospectrum-checkbox-wrapper:focus::before{inset-inline-end:0}:host(:hover:not([disabled])){background:rgba(0,0,0,0)}:host(:hover:not([disabled])) .stylospectrum-checkbox-inner{background-color:#002b4d;border-color:#4db1ff}.stylospectrum-checkbox-wrapper{position:relative;display:inline-flex;align-items:center;box-sizing:border-box;width:100%;min-width:2rem;min-height:2rem;padding:0 .5rem;border:none;border-radius:0;outline:none;transition:unset}.stylospectrum-checkbox-wrapper:focus{border:none;border-radius:.5rem}.stylospectrum-checkbox-wrapper:focus::before{position:absolute;display:block;border:.125rem solid #9ad3ff;border-radius:.5rem;content:"";inset-inline:.25rem;inset-block:.25rem}.stylospectrum-checkbox-inner{position:relative;box-sizing:border-box;min-width:1rem;max-width:1rem;height:1rem;max-height:1rem;color:#4db1ff;background:#161c22;border:.0625rem solid #a9b4be;border-radius:.25rem;cursor:inherit}.stylospectrum-checkbox-inner input{position:absolute;left:0;width:0;font-size:inherit;visibility:hidden;appearance:none}.stylospectrum-checkbox-icon{position:absolute;top:50%;left:50%;color:currentcolor;font-size:.75rem;transform:translate(-50%, -50%);cursor:inherit}.stylospectrum-checkbox-label{overflow:hidden;color:#eaecee;text-overflow:ellipsis;cursor:inherit;pointer-events:none;margin-inline-start:.5rem}')}
  `}get effectiveTabIndex(){const tabindex=this.getAttribute("tabindex");return this.disabled?void 0:tabindex||"0"}_handleKeyDown(e){(0,Keys.xC)(e)&&e.preventDefault(),(0,Keys.RI)(e)&&this.toggle(!0)}_handleKeyUp(e){(0,Keys.xC)(e)&&this.toggle(!0)}toggle(_key=!1){_key&&(this.inputEle.checked=!this.inputEle.checked);const checked=this.inputEle.checked;this.disabled||this.indeterminate||(this.checked||(this._innerChecked=checked),this.changeEvent.emit(checked))}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("checked")&&!this.indeterminate&&(this._innerChecked=this.checked)}render(){const checkNode=this._innerChecked&&!this.indeterminate?lit.qy`<stylospectrum-icon
            class="stylospectrum-checkbox-icon"
            name="accept"
          >
          </stylospectrum-icon>`:lit.s6,textNode=this.text?lit.qy`<stylospectrum-label class="stylospectrum-checkbox-label">
          ${this.text}
        </stylospectrum-label>`:lit.s6;return lit.qy`
      <label
        class="stylospectrum-checkbox-wrapper"
        role="checkbox"
        part="root"
        tabindex="${(0,if_defined.J)(this.effectiveTabIndex)}"
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
    `}};__decorate([(0,decorators.MZ)({type:Boolean})],Checkbox.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],Checkbox.prototype,"indeterminate",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],Checkbox.prototype,"checked",void 0),__decorate([(0,decorators.MZ)()],Checkbox.prototype,"text",void 0),__decorate([(0,decorators.wk)()],Checkbox.prototype,"_innerChecked",void 0),__decorate([(0,decorators_event.f)({name:"change"})],Checkbox.prototype,"changeEvent",void 0),__decorate([(0,decorators.P)("input")],Checkbox.prototype,"inputEle",void 0),Checkbox=__decorate([(0,decorators.EM)("stylospectrum-checkbox")],Checkbox);const src_checkbox=Checkbox},"./src/form/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BotEntityForm:()=>BotEntityForm,LoginForm:()=>LoginForm,default:()=>stories});var lit=__webpack_require__("./node_modules/lit/index.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),Keys=__webpack_require__("./src/utils/Keys.ts"),context=__webpack_require__("./node_modules/@lit/context/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),types=__webpack_require__("./src/types/index.ts"),input=__webpack_require__("./src/input/index.ts");const formContext=(0,context.q6)("form"),formListContext=(0,context.q6)("form-list");function internalSet(entity,paths,value,removeIfUndefined){if(!paths.length)return value;const[path,...restPath]=paths;let clone;return clone=entity||"number"!=typeof path?Array.isArray(entity)?[...entity]:{...entity}:[],removeIfUndefined&&void 0===value&&1===restPath.length?delete clone[path][restPath[0]]:clone[path]=internalSet(clone[path],restPath,value,removeIfUndefined),clone}function getValue(path,entity){let current=entity;for(let i=0;i<path.length;i+=1){if(null==current)return;current=current[path[i]]}return current}function setValue(entity,paths,value,removeIfUndefined=!1){return paths.length&&removeIfUndefined&&void 0===value&&!getValue(paths.slice(0,-1),entity)?entity:internalSet(entity,paths,value,removeIfUndefined)}var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Form=class Form extends lit.WF{constructor(){super(...arguments),this._provider=new context.DT(this,{context:formContext}),this._formItems=[],this.list={},this.store={}}getFieldsValue(){return function cloneByNamePathList(store,namePathList){let newStore={};return namePathList.forEach((namePath=>{const value=getValue(namePath,store);newStore=setValue(newStore,namePath,value)})),newStore}(this.store,this._formItems.map((el=>el.getNamePath())))}setFieldsValue(store){const formItems=Object.fromEntries(this._formItems.map((el=>[el.getFieldId(),el]))),formList=Object.fromEntries(Object.values(this.list).map((el=>[el.name,el])));Object.keys(store).forEach((key=>{formItems?.[key]&&(formItems[key].value=store[key],this.store=setValue(this.store,formItems[key].getNamePath(),store[key])),formList[key]&&(formList[key].values=store[key],this.store=setValue(this.store,[formList[key].name],store[key]))}))}resetFields(){this.setFieldsValue(this.initialValues),this._formItems.forEach((item=>{const slot=item.shadowRoot?.querySelector("slot"),node=slot?.assignedElements({flatten:!0})?.[0];node instanceof input.A&&(node.valueState=types.H6.None,node.valueStateMessage="")}))}async validateFields(){let hasError=!1;try{await Promise.all(this._formItems.map((el=>el.validateRules())))}catch(e){hasError=!0}return hasError?null:this.getFieldsValue()}connectedCallback(){super.connectedCallback(),this.store=this.initialValues,this._provider.setValue({getStore:()=>this.store,setStore:(namePath,value)=>{this.store=setValue(this.store,namePath,value)},registerField:formItem=>(this._formItems.push(formItem),()=>{this._formItems=this._formItems.filter((el=>el!==formItem)),formItem._formListConsumer||setValue(this.store,formItem.getNamePath(),void 0,!0)}),registerList:(name,entity)=>{this.list[name]=entity}})}render(){return lit.qy`
      <form class="stylospectrum-form">
        <slot></slot>
      </form>
    `}};__decorate([(0,decorators.MZ)({attribute:"initial-values",type:Object,reflect:!1})],Form.prototype,"initialValues",void 0),__decorate([(0,decorators.wk)()],Form.prototype,"store",void 0),Form=__decorate([(0,decorators.EM)("stylospectrum-form")],Form);var dist_web=__webpack_require__("./node_modules/async-validator/dist-web/index.js"),src_checkbox=__webpack_require__("./src/checkbox/index.ts"),multi_input=__webpack_require__("./src/multi-input/index.ts");__webpack_require__("./src/label/index.ts");var form_item_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let FormItem=class FormItem extends lit.WF{constructor(){super(...arguments),this.rules=[],this.cancelRegisterFunc=null}static{this.styles=lit.AH`
    ${(0,lit.iz)(":host{display:block;margin-bottom:1rem}.stylospectrum-form-item{display:flex;flex-direction:column;gap:.125rem;align-items:flex-start;align-self:stretch}.stylospectrum-form-item-label-wrapper{display:flex;justify-content:space-between;width:100%}")}
  `}connectedCallback(){super.connectedCallback(),this.value=getValue(this.getNamePath(),this._formConsumer.getStore()),requestAnimationFrame((()=>{this.slotEls[0]instanceof src_checkbox.A||!this.value||(this.slotEls[0].value=this.value)})),this._formConsumer&&(this.cancelRegisterFunc=this._formConsumer.registerField(this))}disconnectedCallback(){super.disconnectedCallback(),this.cancelRegisterFunc?.()}getNamePath(){const namePath=Array.isArray(this.name)?this.name:[this.name];return this._formListConsumer?[this._formListConsumer.listName,...namePath]:namePath}getFieldId(){return this.getNamePath().join("_")}_handleChange(e){e.target instanceof multi_input.A||(this.value=e.detail,this._formConsumer.setStore(this.getNamePath(),this.value),this.validateRules())}_handleEnter(e){e.target instanceof multi_input.A&&(this.value=[...this.value||[],e.detail],this._formConsumer.setStore(this.getNamePath(),this.value),this.validateRules())}_handleTokenDelete(e){this.value=this.value.filter((item=>item.id!==e.detail)),this._formConsumer.setStore(this.getNamePath(),this.value)}_handleSlotChange(){const formControl=this.slotEls?.[0];formControl&&(formControl.id=this.getFieldId())}async _validateRule(rule){const validator=new dist_web.A({[this.getFieldId()]:[rule]});let result=[];try{await Promise.resolve(validator.validate({[this.getFieldId()]:this.value}))}catch(errObj){errObj.errors&&(result=errObj.errors.map((({message})=>message)))}return result}validateRules(){const promise=new Promise((async(resolve,reject)=>{for(let i=0;i<this.rules.length;i++){const errors=await this._validateRule(this.rules[i]);if(errors.length){reject(errors);break}}resolve([])}));return promise.catch((e=>e)).then((ruleErrors=>{if(!(this.slotEls[0]instanceof src_checkbox.A)){const input=this.slotEls[0];ruleErrors.length>0?(input.valueState=types.H6.Error,input.valueStateMessage=ruleErrors[0]):input.valueState=types.H6.None}})),promise}updated(changedProperties){changedProperties.has("value")&&(this.slotEls[0]instanceof src_checkbox.A?this.slotEls[0].checked=this.value:this.slotEls[0].value=this.value)}render(){const labelNode=this.label?lit.qy`<div class="stylospectrum-form-item-label-wrapper">
          <stylospectrum-label show-colon for="${this.name}">
            ${this.label}
          </stylospectrum-label>
          <slot name="suffix-label"></slot>
        </div>`:lit.s6;return lit.qy`
      <div class="stylospectrum-form-item">
        ${labelNode}
        <slot
          @slotchange=${this._handleSlotChange}
          @change="${this._handleChange}"
          @enter=${this._handleEnter}
          @token-delete=${this._handleTokenDelete}
        >
        </slot>
      </div>
    `}};form_item_decorate([(0,decorators.MZ)()],FormItem.prototype,"name",void 0),form_item_decorate([(0,decorators.MZ)()],FormItem.prototype,"label",void 0),form_item_decorate([(0,decorators.MZ)()],FormItem.prototype,"value",void 0),form_item_decorate([(0,decorators.MZ)({type:Array,reflect:!1})],FormItem.prototype,"rules",void 0),form_item_decorate([(0,decorators.KN)({flatten:!0})],FormItem.prototype,"slotEls",void 0),form_item_decorate([(0,context.Fg)({context:formContext,subscribe:!0})],FormItem.prototype,"_formConsumer",void 0),form_item_decorate([(0,context.Fg)({context:formListContext,subscribe:!0})],FormItem.prototype,"_formListConsumer",void 0),FormItem=form_item_decorate([(0,decorators.EM)("stylospectrum-form-item")],FormItem);var repeat=__webpack_require__("./node_modules/lit/directives/repeat.js"),form_list_decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let FormList=class FormList extends lit.WF{constructor(){super(...arguments),this.values=[],this.keyManager={keys:[],id:0},this._provider=new context.DT(this,{context:formListContext})}willUpdate(_changedProperties){_changedProperties.has("values")&&this._formItems.length>0&&requestAnimationFrame((()=>{const formItemArr=[...this._formItems],formItems=Object.fromEntries(formItemArr.map((el=>[el.getFieldId(),el])));this.values.forEach(((value,index)=>{value&&"object"==typeof value&&Object.keys(value).map((key=>{formItems[`${this.name}_${index}_${key}`]&&(formItems[`${this.name}_${index}_${key}`].value=value[key])}))}))}))}getValues(){return getValue([this.name],this._formConsumer.getStore())||[]}add(){this.values=[...this.getValues(),null],this._formConsumer.setStore([this.name],this.values),this.keyManager={keys:[...this.keyManager.keys,this.keyManager.id],id:this.keyManager.id+1}}delete(index){this.values=this.getValues().filter(((_,i)=>i!==index)),this._formConsumer.setStore([this.name],this.values),this.keyManager={keys:this.keyManager.keys.filter(((_,i)=>i!==index)),id:this.keyManager.id}}connectedCallback(){super.connectedCallback(),this._provider.setValue({listName:this.name}),this._formConsumer.registerList(this.name,this),this.values=this.getValues(),this.values.forEach((()=>{this.keyManager={keys:[...this.keyManager.keys,this.keyManager.id],id:this.keyManager.id+1}}))}render(){return(0,repeat.u)(this.values,((_,index)=>{let key=this.keyManager.keys[index];return void 0===key&&(this.keyManager.keys[index]=this.keyManager.id,key=this.keyManager.keys[index],this.keyManager.id+=1),key}),((_,index)=>this.renderChild(index)))}};form_list_decorate([(0,decorators.MZ)()],FormList.prototype,"name",void 0),form_list_decorate([(0,decorators.MZ)({type:Function})],FormList.prototype,"renderChild",void 0),form_list_decorate([(0,decorators.wk)()],FormList.prototype,"values",void 0),form_list_decorate([(0,decorators.wk)()],FormList.prototype,"keyManager",void 0),form_list_decorate([(0,context.Fg)({context:formContext,subscribe:!0})],FormList.prototype,"_formConsumer",void 0),form_list_decorate([(0,decorators.YG)("stylospectrum-form-item")],FormList.prototype,"_formItems",void 0),FormList=form_list_decorate([(0,decorators.EM)("stylospectrum-form-list")],FormList);__webpack_require__("./src/button/index.ts"),__webpack_require__("./src/link/index.ts"),__webpack_require__("./src/textarea/index.ts"),__webpack_require__("./src/icon/data/less.ts");const stories={title:"Form",component:"stylospectrum-form",tags:["autodocs"]},LoginForm=()=>{const formRef=(0,ref._)(),passwordRef=(0,ref._)(),forgotPassRef=(0,ref._)(),createAnAccRef=(0,ref._)();return lit.qy`
    <stylospectrum-form ${(0,ref.K)(formRef)} style="width: 27.75rem; display:block">
      <stylospectrum-form-item
        label="Email"
        name="email"
        .rules="${[{required:!0,message:"Enter your email"},{pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Wrong or Invalid email address. Please correct and try again"}]}"
      >
        <stylospectrum-input
          style="width: 100%"
          @keydown="${e=>{(0,Keys.zP)(e)&&requestAnimationFrame((()=>{passwordRef.value?.shadowRoot?.querySelector("input")?.focus()}))}}"
        ></stylospectrum-input>
      </stylospectrum-form-item>

      <stylospectrum-form-item
        label="Password"
        name="password"
        .rules="${[{required:!0,message:"Enter your password"}]}"
      >
        <stylospectrum-link
          ${(0,ref.K)(forgotPassRef)}
          slot="suffix-label"
          @keydown="${()=>{requestAnimationFrame((()=>{createAnAccRef.value?.shadowRoot?.querySelector("a")?.focus()}))}}"
        >
          Forgot your password?
        </stylospectrum-link>
        <stylospectrum-input
          style="width: 100%"
          ${(0,ref.K)(passwordRef)}
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
    <stylospectrum-link ${(0,ref.K)(createAnAccRef)}>
      Create an account!
    </stylospectrum-link>
  `},BotEntityForm=()=>{const formRef=(0,ref._)();return lit.qy`
    <stylospectrum-form
      ${(0,ref.K)(formRef)}
      .initialValues=${{name:"size",options:[{id:"1",name:"XL",synonyms:[{id:"2",name:"extra large"}]},{id:"2",name:"L",synonyms:[{id:"2",name:"large"}]}]}}
      style="width: 27.75rem; display:block"
    >
      <stylospectrum-form-item
        label="Name"
        name="name"
        .rules="${[{required:!0,message:"Enter your name"}]}"
      >
        <stylospectrum-input></stylospectrum-input>
      </stylospectrum-form-item>

      <div style="display:flex;gap:.5rem">
        <div
          style="color: #FFF;font-size: 0.875rem;text-align:center;width: 13.75rem;"
        >
          Option
        </div>

        <div
          style="color: #FFF;font-size: 0.875rem;text-align:center;width: 18.75rem;"
        >
          Synonyms
        </div>
      </div>

      <stylospectrum-form-list
        name="options"
        .renderChild=${name=>lit.qy`<div style="display:flex;gap:.5rem">
            <stylospectrum-form-item .name=${[name,"name"]}>
              <stylospectrum-input></stylospectrum-input>
            </stylospectrum-form-item>

            <stylospectrum-form-item .name=${[name,"synonyms"]}>
              <stylospectrum-multi-input></stylospectrum-multi-input>
            </stylospectrum-form-item>

            <stylospectrum-button
              icon="less"
              @click=${()=>formRef.value?.list.options.delete(name)}
            ></stylospectrum-button>
          </div> `}
      >
      </stylospectrum-form-list>
    </stylospectrum-form>

    <stylospectrum-button @click=${()=>formRef.value?.list.options.add()}>
      Add
    </stylospectrum-button>

    <stylospectrum-button
      @click=${async()=>console.log(await(formRef.value?.validateFields()))}
    >
      Submit
    </stylospectrum-button>

    <stylospectrum-button
      @click=${()=>formRef.value?.setFieldsValue({name:"color",options:[{id:"1",name:"blue",synonyms:[]}]})}
    >
      set field values
    </stylospectrum-button>

    <stylospectrum-button
      @click=${()=>console.log(formRef.value?.resetFields())}
    >
      Reset field
    </stylospectrum-button>
  `}},"./src/icon/data/accept.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").p)("accept",{pathData:"M187 416q-12 0-20-9L71 299q-7-7-7-17 0-11 7.5-18.5T90 256q12 0 19 9l77 87 217-247q8-9 19-9t18.5 7.5T448 122q0 10-6 16L206 407q-7 9-19 9z"});const __WEBPACK_DEFAULT_EXPORT__="accept"},"./src/icon/data/less.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts").p)("less",{pathData:"M454 275H58q-11 0-18.5-7T32 250t7.5-18.5T58 224h396q11 0 18.5 7.5T480 250t-7.5 18-18.5 7z"});const __WEBPACK_DEFAULT_EXPORT__="less"},"./src/label/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Label=class Label extends lit.WF{constructor(){super(...arguments),this._colonSymbol=":"}static{this.styles=lit.AH`
    ${(0,lit.iz)(':host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:#8396a8;font-weight:normal;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;cursor:text}:host([required]) .stylospectrum-label-required-colon::after{position:relative;color:#ff78a4;font-weight:bold;font-size:1.25rem;font-style:normal;line-height:0;vertical-align:middle;content:"*"}:host([required][show-colon]) .stylospectrum-label-required-colon::after{margin-inline-start:.125rem}:host([show-colon]) .stylospectrum-label-required-colon{margin-inline-start:-0.05rem}:host([show-colon]) .stylospectrum-label-required-colon::before{content:attr(data-colon)}.stylospectrum-label-wrapper{display:inline-flex;width:100%;white-space:normal;cursor:inherit}.stylospectrum-label-text{display:inline-block;flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;vertical-align:top}')}
  `}_handleClick(){if(!this.for)return;const assignedElements=this.getRootNode().querySelector("slot").assignedElements({flatten:!0}),inputNode=assignedElements?.[0]?.shadowRoot?.querySelector("input");inputNode&&inputNode.focus()}render(){return lit.qy`
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
    `}};__decorate([(0,decorators.MZ)()],Label.prototype,"for",void 0),__decorate([(0,decorators.MZ)({type:Boolean,attribute:"show-colon"})],Label.prototype,"showColon",void 0),__decorate([(0,decorators.MZ)({type:Boolean})],Label.prototype,"required",void 0),Label=__decorate([(0,decorators.EM)("stylospectrum-label")],Label)},"./src/link/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Link=class Link extends lit.WF{static{this.styles=lit.AH`
    ${(0,lit.iz)(':host(:not([hidden])){display:inline-flex}:host{max-width:100%;color:#4db1ff;font-size:.875rem;font-family:"72","72full",Arial,Helvetica,sans-serif;white-space:nowrap;text-decoration:none;text-shadow:0 0 .125rem #000;overflow-wrap:normal;outline:none;cursor:pointer}:host(:hover){color:#4db1ff;text-decoration:underline}:host([focused]){color:#1d232a;text-decoration:underline}:host([focused]) .stylospectrum-link{text-shadow:none;background-color:#9ad3ff;border-radius:.125rem}:host .stylospectrum-link{border-radius:.125rem}:host([disabled]){pointer-events:none}:host([disabled]) .stylospectrum-link{text-shadow:none;outline:none;cursor:default;opacity:.4;pointer-events:none}.stylospectrum-link{position:relative;display:inline-block;box-sizing:border-box;max-width:100%;overflow:hidden;color:inherit;white-space:inherit;text-decoration:inherit;text-overflow:ellipsis;overflow-wrap:inherit;outline:none}')}
  `}constructor(){super(),this._dummyAnchor=document.createElement("a")}_isCrossOrigin(){const loc=window.location;return this._dummyAnchor.href=this.href,!(this._dummyAnchor.hostname===loc.hostname&&this._dummyAnchor.port===loc.port&&this._dummyAnchor.protocol===loc.protocol)}willUpdate(){const needsNoReferrer="_self"!==this.target&&this.href&&this._isCrossOrigin();this._rel=needsNoReferrer?"noreferrer noopener":void 0}_handleFocusIn(){this.focused=!0}_handleFocusOut(){this.focused=!1}_handleClick(e){this.href||e.preventDefault()}render(){return lit.qy`
      <a
        class="stylospectrum-link"
        href=${this.href||"#"}
        target=${(0,if_defined.J)(this.target)}
        rel=${(0,if_defined.J)(this._rel)}
        tabindex=${this.disabled?"-1":"0"}
        title="${(0,if_defined.J)(this.title||void 0)}"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
        @focusin=${this._handleFocusIn}
        @focusout=${this._handleFocusOut}
      >
        <slot></slot>
      </a>
    `}};__decorate([(0,decorators.MZ)({type:Boolean})],Link.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)()],Link.prototype,"href",void 0),__decorate([(0,decorators.MZ)()],Link.prototype,"target",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],Link.prototype,"focused",void 0),__decorate([(0,decorators.wk)()],Link.prototype,"_rel",void 0),Link=__decorate([(0,decorators.EM)("stylospectrum-link")],Link)},"./src/multi-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>multi_input});var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js");var decorators_event=__webpack_require__("./src/utils/decorators/event.ts"),__decorate=(__webpack_require__("./src/input/index.ts"),__webpack_require__("./src/icon/data/decline.ts"),function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r});let MultiInput=class MultiInput extends lit.WF{constructor(){super(...arguments),this.value=[],this.defaultValue=[],this._innerValue=[]}static{this.styles=lit.AH`
    ${(0,lit.iz)('.stylospectrum-tokenizer{display:flex;flex-wrap:nowrap;align-items:center;box-sizing:border-box;height:100%;overflow:hidden;padding-inline-start:.25rem}.stylospectrum-token{display:inline-flex;align-items:center;box-sizing:border-box;height:1.25rem;color:#eaecee;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;background:#1c242c;border:.0625rem solid #3a4a5a;border-radius:.375rem;cursor:default;user-select:none;padding-inline-start:.25rem}.stylospectrum-token-label{max-width:100%;overflow:hidden;text-overflow:ellipsis}.stylospectrum-token-icon{padding:.125rem .25rem;color:#eaecee;font-size:.75rem;cursor:pointer}.stylospectrum-token:not(:last-child){margin-inline-end:.25rem}.stylospectrum-token:hover{background:#222b35;border-color:#3a4a5a}')}
  `}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("value")&&(this._innerValue=this.value.length>0?this.value:this.defaultValue)}handleInputEnter(event){if(event.detail){const newValue={name:event.detail,id:"client-"+v4.A()};this.enterEvent.emit(newValue),this._input.clear(),this._innerValue=[...this._innerValue,newValue]}}handleTokenDelete(id){this.tokenDeleteEvent.emit(id),this._innerValue=this._innerValue.filter((option=>option.id!==id))}render(){return lit.qy`
      <stylospectrum-input
        style=${this.style.cssText}
        class="stylospectrum-multi-input"
        ?tokenizer-available=${this._innerValue.length>0}
        @enter=${this.handleInputEnter}
      >
        <div class="stylospectrum-tokenizer" slot="tokenizer" role="listbox">
          ${this._innerValue.map((option=>lit.qy`
              <div class="stylospectrum-token">
                <span class="stylospectrum-token-label">${option.name}</span>
                <stylospectrum-icon
                  class="stylospectrum-token-icon"
                  name="decline"
                  @click=${()=>this.handleTokenDelete(option.id)}
                ></stylospectrum-icon>
              </div>
            `))}
        </div>
      </stylospectrum-input>
    `}};__decorate([(0,decorators.MZ)({type:Array})],MultiInput.prototype,"value",void 0),__decorate([(0,decorators.MZ)({type:Array})],MultiInput.prototype,"defaultValue",void 0),__decorate([(0,decorators.wk)()],MultiInput.prototype,"_innerValue",void 0),__decorate([(0,decorators_event.f)({name:"token-delete"})],MultiInput.prototype,"tokenDeleteEvent",void 0),__decorate([(0,decorators_event.f)({name:"enter"})],MultiInput.prototype,"enterEvent",void 0),__decorate([(0,decorators.P)("stylospectrum-input")],MultiInput.prototype,"_input",void 0),MultiInput=__decorate([(0,decorators.EM)("stylospectrum-multi-input")],MultiInput);const multi_input=MultiInput},"./src/textarea/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),types=__webpack_require__("./src/types/index.ts"),decorators_event=__webpack_require__("./src/utils/decorators/event.ts");__webpack_require__("./src/icon/index.ts"),__webpack_require__("./src/icon/data/error.ts");var __decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Textarea=class Textarea extends lit.WF{constructor(){super(...arguments),this.placeholder="",this.valueState=types.H6.None,this._innerValue=""}static{this.styles=lit.AH`
    ${(0,lit.iz)(':host{display:inline-block;box-sizing:border-box;width:100%;min-width:6rem;min-height:1.625rem;margin:.1875rem 0;color:#fff;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;font-style:normal;line-height:1.5;text-align:start;background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #a9b4be, #a9b4be) border-box;background-color:#161c22;border:none;border-radius:.25rem;box-shadow:inset 0 0 0 .0625rem rgba(169,180,190,.25);transition:none}:host([disabled]){background-color:#161c22;border-color:#a9b4be;cursor:default;opacity:.4;pointer-events:none}:host([focused]) .stylospectrum-textarea-wrapper::after{position:absolute;inset:var(--stylospectrum-textarea-inset, 0);z-index:2;border:.125rem solid rgba(0,0,0,0);border-radius:var(--stylospectrum-textarea-border-radius, 0.25rem);content:"";pointer-events:none}:host([value-state=None]:not([focused]):hover){background:0 100%/100% .0625rem no-repeat linear-gradient(0deg, #4db1ff, #4db1ff) border-box;background-color:#1d232a;border-color:#4db1ff;box-shadow:inset 0 0 0 .0625rem rgba(77,177,255,.3)}:host([value-state=None][focused]){background-color:#1d232a;border-color:#4db1ff}:host([value-state=None][focused]) .stylospectrum-textarea-wrapper::after{border-color:#4db1ff}:host([value-state=Error]:not([disabled])){background:0 100%/100% .125rem no-repeat linear-gradient(0deg, #fa6161, #fa6161) border-box;background-color:#350000;border:.125rem none #fa6161;box-shadow:inset 0 0 0 .0625rem rgba(248,38,38,.3)}:host([value-state=Error]:not([focused]):hover){background-color:#1d232a;box-shadow:inset 0 0 0 .0625rem rgba(248,38,38,.3)}:host([value-state=Error][focused]){background-color:#1d232a;border-color:#fa6161}:host([value-state=Error][focused]) .stylospectrum-textarea-wrapper::after{border-color:#fa6161}:host([growing]) .stylospectrum-textarea{position:absolute;top:0;left:0;box-sizing:border-box;height:100%}.stylospectrum-textarea{flex:1 1 0%;box-sizing:border-box;width:100%;min-height:2.9375rem;padding:.1875rem .5rem .125rem;color:inherit;font-size:inherit;font-family:inherit;font-style:inherit;line-height:inherit;letter-spacing:inherit;text-align:inherit;text-overflow:ellipsis;word-spacing:inherit;background:rgba(0,0,0,0);border:none;outline:none;appearance:none;resize:none}.stylospectrum-textarea::-webkit-scrollbar:horizontal{height:.75rem}.stylospectrum-textarea::-webkit-scrollbar:vertical{width:.75rem}.stylospectrum-textarea::-webkit-scrollbar{background-color:#1d232a}.stylospectrum-textarea::-webkit-scrollbar-thumb{background-color:#647891;border:.125rem solid #1d232a;border-radius:.75rem}.stylospectrum-textarea::-webkit-scrollbar-thumb:hover{background-color:#8697ac}.stylospectrum-textarea::-webkit-scrollbar-corner{background-color:#1d232a}.stylospectrum-textarea::placeholder{color:#8396a8;font-weight:normal;font-style:italic}.stylospectrum-textarea-wrapper{position:relative;display:flex;flex-direction:row;justify-content:flex-end;box-sizing:border-box;height:100%;min-height:2.9375rem;padding:.0625rem;color:inherit;background:rgba(0,0,0,0);border-radius:.25rem;outline:none}.stylospectrum-textarea-value-state-message{display:inline-block;color:#eaecee;font-weight:400;font-size:.75rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;line-height:normal}.stylospectrum-textarea-value-state-message-icon{display:inline-block;color:#fa6161;font-weight:400;font-size:1rem}.stylospectrum-textarea-value-state-message-wrapper{position:absolute;top:100%;left:0;z-index:1000;display:flex;gap:.375rem;align-items:center;box-sizing:border-box;width:100%;padding:.5rem;background:#350000;border-radius:.5rem;box-shadow:0 2px 8px 0 rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.35)}.stylospectrum-textarea-mirror{box-sizing:border-box;width:100%;min-height:2.9375rem;max-height:94vh;padding-top:.1875rem;padding-bottom:.125rem;font-size:.875rem;font-family:"72override","72","72full",Arial,Helvetica,sans-serif;line-height:1.5;word-break:break-all;visibility:hidden}')}
  `}_handleInput(e){const value=e.target.value;this.value||(this._innerValue=value),this._mirrorText=this.tokenizeText(value),this.changeEvent.emit(value)}_handleFocus(){this.focused=!0}_handleBlur(){this.focused=!1}getFocusDomRef(){return this.textarea}tokenizeText(value){const tokenizedText=value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&apos;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n");return this.mapTokenizedTextToObject(tokenizedText)}mapTokenizedTextToObject(tokenizedText){return tokenizedText.map(((token,index)=>({text:token,last:index===tokenizedText.length-1})))}willUpdate(_changedProperties){super.willUpdate(_changedProperties),_changedProperties.has("value")&&(this._innerValue=this.value||"")}render(){const valueStateMessageNode=this.valueStateMessage&&this.valueState===types.H6.Error&&this.focused?lit.qy` <div class="stylospectrum-textarea-value-state-message-wrapper">
            <stylospectrum-icon
              class="stylospectrum-textarea-value-state-message-icon"
              name="error"
            >
            </stylospectrum-icon>
            <span class="stylospectrum-textarea-value-state-message">
              ${this.valueStateMessage}
            </span>
          </div>`:lit.s6,growingNode=this.growing?lit.qy`<div class="stylospectrum-textarea-mirror">
          ${(this._mirrorText||[]).map((token=>lit.qy`${token.text} <br />`))}
        </div>`:lit.s6;return lit.qy`
      <span class="stylospectrum-textarea-wrapper">
        ${growingNode}
        <textarea
          .value=${this._innerValue||this.defaultValue||""}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @input=${this._handleInput}
          .placeholder=${this.placeholder}
          class="stylospectrum-textarea"
          ?disabled=${this.disabled}
        ></textarea>
        ${valueStateMessageNode}
      </span>
    `}};__decorate([(0,decorators.MZ)({type:Boolean})],Textarea.prototype,"disabled",void 0),__decorate([(0,decorators.MZ)({type:String})],Textarea.prototype,"placeholder",void 0),__decorate([(0,decorators.MZ)({type:String})],Textarea.prototype,"value",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"default-value"})],Textarea.prototype,"defaultValue",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"value-state",reflect:!0})],Textarea.prototype,"valueState",void 0),__decorate([(0,decorators.MZ)({type:String,attribute:"value-state-message"})],Textarea.prototype,"valueStateMessage",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],Textarea.prototype,"growing",void 0),__decorate([(0,decorators.wk)()],Textarea.prototype,"_innerValue",void 0),__decorate([(0,decorators.wk)()],Textarea.prototype,"_mirrorText",void 0),__decorate([(0,decorators.MZ)({type:Boolean,reflect:!0})],Textarea.prototype,"focused",void 0),__decorate([(0,decorators_event.f)({name:"change"})],Textarea.prototype,"changeEvent",void 0),__decorate([(0,decorators.P)("textarea")],Textarea.prototype,"textarea",void 0),Textarea=__decorate([(0,decorators.EM)("stylospectrum-textarea")],Textarea)},"./src/tooltip/index.ts":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js");var types=__webpack_require__("./src/types/index.ts"),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};let Tooltip=class Tooltip extends lit.WF{static{this.styles=lit.AH`
    ${(0,lit.iz)(':host{position:fixed;background:#e4e1e4;border:1px solid rgba(0,0,0,.1);border-radius:.125rem;box-shadow:0 2px 8px 0 rgba(0,0,0,.2),0 0 2px 0 rgba(255,255,255,.6)}.stylospectrum-tooltip{display:flex;flex-direction:column;align-items:center;box-sizing:border-box;padding:.1875rem .375rem}.stylospectrum-tooltip-text{color:#454445;font-weight:400;font-size:.75rem;font-family:"72","72full",arial,helvetica,sans-serif}')}
  `}connectedCallback(){super.connectedCallback(),setTimeout((()=>{const openerRect=JSON.parse(this.openerRect);this.style.left=openerRect.left+(openerRect.width-this.offsetWidth)/2+"px",this.placement===types.W.Top?this.style.top=openerRect.top-this.offsetHeight-8+"px":this.style.top=openerRect.bottom+8+"px"}))}render(){return lit.qy`
      <div class="stylospectrum-tooltip">
        <div class="stylospectrum-tooltip-text">
          <slot></slot>
        </div>
      </div>
    `}};__decorate([(0,decorators.MZ)({type:String,reflect:!1})],Tooltip.prototype,"openerRect",void 0),__decorate([(0,decorators.MZ)({type:String})],Tooltip.prototype,"placement",void 0),Tooltip=__decorate([(0,decorators.EM)("stylospectrum-tooltip")],Tooltip)}}]);
//# sourceMappingURL=form-stories.28c8ec82.iframe.bundle.js.map