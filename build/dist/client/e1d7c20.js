(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{461:function(t,e,r){"use strict";r.r(e);r(92);var n=r(0).a.extend({props:{title:{type:String,required:!0,default:""},url:{type:String,required:!1,default:null},date:{type:String,required:!1,default:"2020"},position:{type:String,required:!1,default:null}},data:function(){return{hasBackground:!1}},methods:{toggleBackground:function(){var t=this;this.hasBackground=!0,setTimeout((function(){t.hasBackground=!1}),500)}}}),o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Transition",{attrs:{name:"fade",mode:"out-in",duration:"125"},on:{enter:t.toggleBackground}},[e("div",{staticClass:"px-4 text-gray-500 cursor-default hover:bg-gray-200 dark:hover:bg-slate-800/40 rounded-lg transition-colors overflow-hidden dark:text-slate-600",class:{"bg-gray-200 dark:bg-slate-800/40":t.hasBackground}},[e("div",{staticClass:"flex space-x-2 items-center justify-between"},[e("SmartLink",{staticClass:"text-gray-800 dark:text-slate-200 hover:underline",attrs:{href:t.url,blank:""}},[e("h3",{staticClass:"text-lg"},[t._v(t._s(t.title))])]),t._v(" "),e("span",[t._v(t._s(t.date))])],1),t._v(" "),t.position?e("div",{staticClass:"truncate"},[t._v(t._s(t.position))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartLink:r(90).default})}}]);