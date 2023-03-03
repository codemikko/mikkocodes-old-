exports.ids = [19];
exports.modules = {

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Skill.vue?vue&type=template&id=739f26db&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "dark:bg-slate-600/10 bg-gray-100 hover:bg-gray-200/50 text-black/50 rounded-md cursor-pointer select-none transition-colors p-3 flex items-center space-x-2 overflow-hidden dark:hover:bg-slate-600/15 text-white"
  }, [_vm._ssrNode("<div class=\"p-2 rounded-lg flex ring-1 ring-black/5 items-center justify-center\"" + _vm._ssrStyle(null, {
    backgroundColor: _vm.color
  }, null) + ">", "</div>", [_vm.image ? _c('SmartImage', {
    staticClass: "h-5 w-5 flex-shrink-0",
    attrs: {
      "src": _vm.image
    }
  }) : _c(_vm.iconPack, {
    tag: "component",
    staticClass: "flex-shrink-0 h-5 w-5",
    attrs: {
      "brand": _vm.title
    }
  })], 1), _vm._ssrNode(" <span class=\"flex-1 dark:text-slate-500 truncate\">" + _vm._ssrEscape(_vm._s(_vm.title)) + "</span>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Skill.vue?vue&type=template&id=739f26db&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Skill.vue?vue&type=script&lang=ts&

/* harmony default export */ var Skillvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    color: {
      type: String,
      required: false,
      default: "#00000010"
    },
    image: {
      type: String,
      required: false,
      default: ""
    },
    iconPack: {
      type: String,
      required: false,
      default: "IconDev"
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Skill.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_Skillvue_type_script_lang_ts_ = (Skillvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Card/Skill.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Skillvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6c2875ad"
  
)

/* harmony default export */ var Skill = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartImage: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=card-skill.js.map