function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/components/base/base.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/base/base.component.ts ***!
    \***************************************************/

  /*! exports provided: AppBaseComponent */

  /***/
  function srcAppComponentsBaseBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppBaseComponent", function () {
      return AppBaseComponent;
    });

    var AppBaseComponent =
    /*#__PURE__*/
    function () {
      function AppBaseComponent() {
        _classCallCheck(this, AppBaseComponent);

        this.autofocus = false;
        this["class"] = "";
        this.disabled = false;
        this.required = false;
        this.text = "";
      }

      _createClass(AppBaseComponent, [{
        key: "registerOnChange",
        value: function registerOnChange(onChange) {
          this.onChange = onChange;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(_) {}
      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        }
      }, {
        key: "value",
        get: function get() {
          return this.VALUE;
        },
        set: function set(value) {
          if (this.value === value) {
            return;
          }

          this.VALUE = value;

          if (this.onChange) {
            this.onChange(value);
          }
        }
      }]);

      return AppBaseComponent;
    }();
    /***/

  },

  /***/
  "./src/app/components/button/button.module.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/button/button.module.ts ***!
    \****************************************************/

  /*! exports provided: AppButtonModule */

  /***/
  function srcAppComponentsButtonButtonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppButtonModule", function () {
      return AppButtonModule;
    });

    var AppButtonModule = function AppButtonModule() {
      _classCallCheck(this, AppButtonModule);
    };
    /***/

  },

  /***/
  "./src/app/components/label/label.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/label/label.module.ts ***!
    \**************************************************/

  /*! exports provided: AppLabelModule */

  /***/
  function srcAppComponentsLabelLabelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppLabelModule", function () {
      return AppLabelModule;
    });

    var AppLabelModule = function AppLabelModule() {
      _classCallCheck(this, AppLabelModule);
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.8e674f84e684fc23fdfa.js.map