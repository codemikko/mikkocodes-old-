exports.ids = [59];
exports.modules = {

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Title.vue?vue&type=template&id=026aba7c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c(!['sm', 'xs'].includes(_vm.size) ? `h${_vm.size}` : 'h3', {
    tag: "component",
    staticClass: "text-lg text-gray-400 dark:text-neutral-700",
    class: {
      'px-4': _vm.padding === true,
      'text-2xl': _vm.size === '1',
      'text-xl': _vm.size === '2',
      'text-sm': _vm.size === 'sm',
      'text-xs': _vm.size === 'xs',
      'text-lg': !['1', '2', 'sm', 'xs'].includes(_vm.size),
      'font-bold': _vm.bold === true,
      'font-medium': _vm.bold === false,
      uppercase: _vm.uppercase === true
    }
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Title.vue?vue&type=template&id=026aba7c&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Title.vue?vue&type=script&lang=ts&

/* harmony default export */ var Titlevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    padding: {
      type: Boolean,
      required: false,
      default: true
    },
    size: {
      type: String,
      required: false,
      default: "3"
    },
    uppercase: {
      type: Boolean,
      required: false,
      default: true
    },
    bold: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Title.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Titlevue_type_script_lang_ts_ = (Titlevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Title.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Titlevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "608c6080"
  
)

/* harmony default export */ var Title = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=title.js.map