(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/components/base/base.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/base/base.component.ts ***!
  \***************************************************/
/*! exports provided: AppBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBaseComponent", function() { return AppBaseComponent; });
class AppBaseComponent {
    constructor() {
        this.autofocus = false;
        this.class = "";
        this.disabled = false;
        this.required = false;
        this.text = "";
    }
    get value() {
        return this.VALUE;
    }
    set value(value) {
        if (this.value === value) {
            return;
        }
        this.VALUE = value;
        if (this.onChange) {
            this.onChange(value);
        }
    }
    registerOnChange(onChange) {
        this.onChange = onChange;
    }
    registerOnTouched(_) { }
    writeValue(value) {
        this.value = value;
    }
}


/***/ }),

/***/ "./src/app/components/button/button.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/button/button.module.ts ***!
  \****************************************************/
/*! exports provided: AppButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppButtonModule", function() { return AppButtonModule; });
class AppButtonModule {
}


/***/ }),

/***/ "./src/app/components/label/label.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/label/label.module.ts ***!
  \**************************************************/
/*! exports provided: AppLabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLabelModule", function() { return AppLabelModule; });
class AppLabelModule {
}


/***/ })

}]);
//# sourceMappingURL=common-es2015.8e674f84e684fc23fdfa.js.map