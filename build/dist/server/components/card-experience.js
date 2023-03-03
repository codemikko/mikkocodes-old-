exports.ids = [12];
exports.modules = {

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Experience.vue?vue&type=template&id=6e8deb94&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('Transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in",
      "duration": "125"
    },
    on: {
      "enter": _vm.toggleBackground
    }
  }, [_c('div', {
    staticClass: "px-4 text-gray-500 cursor-default hover:bg-gray-200 dark:hover:bg-slate-800/40 rounded-lg transition-colors overflow-hidden dark:text-slate-600",
    class: {
      'bg-gray-200 dark:bg-slate-800/40': _vm.hasBackground
    }
  }, [_c('div', {
    staticClass: "flex space-x-2 items-center justify-between"
  }, [_c('SmartLink', {
    staticClass: "text-gray-800 dark:text-slate-200 hover:underline",
    attrs: {
      "href": _vm.url,
      "blank": ""
    }
  }, [_c('h3', {
    staticClass: "text-lg"
  }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.date))])], 1), _vm._v(" "), _vm.position ? _c('div', {
    staticClass: "truncate"
  }, [_vm._v(_vm._s(_vm.position))]) : _vm._e()])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Card/Experience.vue?vue&type=template&id=6e8deb94&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.cjs!./src/components/Card/Experience.vue?vue&type=script&lang=ts&

/* harmony default export */ var Experiencevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    url: {
      type: String,
      required: false,
      default: null
    },
    date: {
      type: String,
      required: false,
      default: "2020"
    },
    position: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      hasBackground: false
    };
  },
  methods: {
    toggleBackground() {
      this.hasBackground = true;
      setTimeout(() => {
        this.hasBackground = false;
      }, 500);
    }
  }
}));
// CONCATENATED MODULE: ./src/components/Card/Experience.vue?vue&type=script&lang=ts&
 /* harmony default export */ var Card_Experiencevue_type_script_lang_ts_ = (Experiencevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/Card/Experience.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Card_Experiencevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30aae83e"
  
)

/* harmony default export */ var Experience = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SmartLink: __webpack_require__(9).default})


/***/ })

};;
//# sourceMappingURL=card-experience.js.map