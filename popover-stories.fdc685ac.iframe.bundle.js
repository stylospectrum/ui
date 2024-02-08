"use strict";(self.webpackChunk_stylospectrum_ui=self.webpackChunk_stylospectrum_ui||[]).push([[460],{"./src/icon/data/account.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__}),(0,__webpack_require__("./src/icon/util.ts")._)("account",{pathData:"M320 128q0 26-11 51t-31 44l9 4q15 8 15 24 0 10-7 17t-18 7q-9 0-20-6-10-5-26-9t-33-4h-12q-28 0-52.5 10.5t-43 28.5-29 42.5T51 390v7h179q11 0 18.5 7t7.5 18-7.5 18.5T230 448H26q-11 0-18.5-7.5T0 422v-32q0-56 29-100.5t77-66.5l-4-5q-19-18-28.5-41T64 128q0-27 10-50t27.5-40.5 41-27.5T192 0t49.5 10 41 27.5 27.5 41 10 49.5zM192 51q-32 0-54.5 22.5T115 128t22.5 54.5T192 205t54.5-22.5T269 128t-22.5-54.5T192 51zm154 301q-11 0-18.5-7.5T320 326t7.5-18 18.5-7h140q11 0 18.5 7t7.5 18-7.5 18.5T486 352H346zm140 23q11 0 18.5 7t7.5 18-7.5 18.5T486 426H346q-11 0-18.5-7.5T320 400t7.5-18 18.5-7h140zm0 73q11 0 18.5 7t7.5 18-7.5 18.5T486 499H346q-11 0-18.5-7.5T320 473t7.5-18 18.5-7h140z"});const __WEBPACK_DEFAULT_EXPORT__="account"},"./src/popover/stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/directives/ref.js");__webpack_require__("./src/popover/index.ts"),__webpack_require__("./src/list/list-item.ts"),__webpack_require__("./src/button/index.ts"),__webpack_require__("./src/input/index.ts"),__webpack_require__("./src/icon/data/account.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Popover",component:"stylospectrum-popover",tags:["autodocs"],argTypes:{horizontalAlign:{control:"select",options:["Center","Right"]}}},Basic=(()=>{const popoverRef=(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__.Y)(),buttonRef=(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__.Y)(),popoverRef_1=(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__.Y)(),listItemRef=(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__.Y)();return lit__WEBPACK_IMPORTED_MODULE_0__.kP`
    <div
      style="display:flex;justify-content: center;align-items: center;height:500px"
    >
      <stylospectrum-button
        ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__.I)(buttonRef)}
        @click=${()=>popoverRef.value?.showAt(buttonRef.value)}
      >
        Open Popover
      </stylospectrum-button>
      <stylospectrum-popover
        ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__.I)(popoverRef)}
        header-text="Header"
        placement="Left"
        hide-footer
      >
        <stylospectrum-input slot="sub-header" show-search>
        </stylospectrum-input>

        <div>
          <stylospectrum-popover ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__.I)(popoverRef_1)}>
            <div style="padding:1rem;width:20rem">Content</div>

            <stylospectrum-button slot="ok-button">OK</stylospectrum-button>
            <stylospectrum-button
              slot="cancel-button"
              type="Tertiary"
              @click=${()=>popoverRef_1.value?.hide()}
            >
              Cancel
            </stylospectrum-button>
          </stylospectrum-popover>

          <stylospectrum-list-item
            ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_1__.I)(listItemRef)}
            icon="account"
            @click=${()=>popoverRef_1.value?.showAt(listItemRef.value)}
          >
            Open Popover
          </stylospectrum-list-item>

          <stylospectrum-list-item
            icon="account"
            @click=${()=>popoverRef.value?.hide()}
          >
            Close Popover
          </stylospectrum-list-item>
        </div>
      </stylospectrum-popover>
    </div>
  `}).bind({});Basic.args={}}}]);
//# sourceMappingURL=popover-stories.fdc685ac.iframe.bundle.js.map