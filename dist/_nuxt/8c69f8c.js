(window.webpackJsonp=window.webpackJsonp||[]).push([[72,15],{423:function(t,e,r){"use strict";r.r(e);var n=r(2),o=r(0).a.extend({props:{title:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},href:{type:[],required:!1,default:null},tight:{type:Boolean,required:!1,default:!1},elevated:{type:Boolean,required:!1,default:!1},cursor:{type:Boolean,required:!1,default:!0},truncate:{type:Boolean,required:!1,default:!0}},data:function(){return{classes:"rounded-md focus-ring overflow-x-hidden transition-colors"}}}),l=r(4),component=Object(l.a)(o,(function(){var t,e=this,r=e._self._c;e._self._setupProxy;return r(e.href?"SmartLink":"div",e._b({tag:"component",class:(t={},Object(n.a)(t,e.classes,!0),Object(n.a)(t,"p-2",!0===e.tight),Object(n.a)(t,"p-4",!1===e.tight),Object(n.a)(t,"cursor-pointer",!0===e.cursor),Object(n.a)(t,"bg-gray-100 dark:bg-slate-800/40",!0===e.elevated),Object(n.a)(t,"hover:bg-gray-100 dark:hover:bg-slate-800/40",!1===e.elevated),Object(n.a)(t,"items-center flex space-x-4",e.$slots.icon||e.$slots["icon-left"]),Object(n.a)(t,"justify-between",e.$slots.icon&&!e.$slots["icon-left"]),t),attrs:{href:e.href}},"component",!!e.href&&e.$attrs,!1),[e.$slots["icon-left"]?r("div",{staticClass:"flex-shrink-0"},[e._t("icon-left")],2):e._e(),e._v(" "),r("div",{staticClass:"overflow-x-hidden"},[e.title?r("h2",{staticClass:"font-medium text-gray-700 truncate dark:text-slate-100"},[e._v("\n      "+e._s(e.title)+"\n    ")]):e._e(),e._v(" "),e.$slots.default?r("p",{staticClass:"text-slate-500",class:!0===e.truncate&&"line-clamp-2"},[e._t("default")],2):e._e()]),e._v(" "),e.$slots.icon?r("div",{staticClass:"flex-shrink-0"},[e._t("icon")],2):e._e()])}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,r){"use strict";r.r(e);r(15),r(33);var n=r(0).a.extend({data:function(){return{pages:[{title:"Custom Status",url:"/projects/premid/custom-status",description:"Tool that allows you do display whatever you want on your Discord profile with PreMiD! Easy and free!"},{title:"Metadata Creator",url:"/projects/premid/mdcreator",description:"Easy and free to use tool to create PreMiD Presence metadata files easily, without even opening your code editor!"}]}},head:function(){var title="PreMiD";return{title:title,meta:this.$prepareMeta({title:title,description:"Custom tools created for your PreMiD experience! Featuring Custom Status and Metadata Creator for free and fresh UI!",image:"https://i.imgur.com/CuVtvKW.png",keywords:"premid, custom, status",url:"https://eggsy.xyz/projects/premid"}),link:[{rel:"canonical",href:"https://eggsy.xyz/projects/premid"}]}}}),o=r(4),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"py-4"},[e("div",{staticClass:"space-y-6 text-gray-500 sm:w-9/12 dark:text-neutral-600"},[t._m(0),t._v(" "),e("section",{staticClass:"grid gap-4 sm:grid-cols-2"},t._l(t.pages,(function(r,n){return e("Card",{key:"page-".concat(n),attrs:{title:r.title,href:r.url}},[t._v("\n        "+t._s(r.description)+"\n      ")])})),1),t._v(" "),e("section",{staticClass:"space-y-4"},[e("Button",{attrs:{href:"https://premid.app",blank:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e("IconDev",{staticClass:"h-6 text-gray-700 w-6 dark:text-neutral-300",attrs:{brand:"premid"}})]},proxy:!0}])},[t._v("\n\n        Visit PreMiD\n      ")])],1)])])}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",{staticClass:"space-y-2 my-12 px-4"},[e("h1",{staticClass:"text-gray-700 text-4xl dark:text-neutral-300"},[t._v("PreMiD")]),t._v(" "),e("p",[t._v("\n        PreMiD is a simple, configurable utility that allows you to show what\n        you're doing on the web in your Discord now playing status.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(423).default,IconDev:r(432).default,Button:r(91).default})}}]);