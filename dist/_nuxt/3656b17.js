(window.webpackJsonp=window.webpackJsonp||[]).push([[65,2,9,25,49,58,59,60,61,62],{390:function(t,e,n){var o=n(6),r=n(38),c=n(18),l=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var f=c(r(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(c(o),l,"&quot;")+'"'),v+">"+f+"</"+e+">"}},391:function(t,e,n){var o=n(8);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},392:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{type:{type:String,required:!1,default:"block"},iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}}),r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return"repository"===t.type?e("SkeletonLoaderRepository"):"iframe"===t.type?e("SkeletonLoaderIframe",{attrs:{"iframe-url":t.iframeUrl}}):"song"===t.type?e("SkeletonLoaderSong"):"lastfm"===t.type?e("SkeletonLoaderLastfm"):"spinner"===t.type?e("SkeletonLoaderSpinner"):"block"===t.type?e("div",{staticClass:"bg-gray-100 rounded animate-pulse dark:bg-slate-800"}):"rounded"===t.type?e("div",{staticClass:"bg-gray-100 rounded-full animate-pulse dark:bg-slate-800"}):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoaderRepository:n(396).default,SkeletonLoaderIframe:n(395).default,SkeletonLoaderSong:n(397).default,SkeletonLoaderLastfm:n(399).default,SkeletonLoaderSpinner:n(398).default})},393:function(t,e,n){"use strict";n.r(e);n(34),n(394);var o=n(0).a.extend({props:{padding:{type:Boolean,required:!1,default:!0},size:{type:String,required:!1,default:"3"},uppercase:{type:Boolean,required:!1,default:!0},bold:{type:Boolean,required:!1,default:!1}}}),r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(["sm","xs"].includes(t.size)?"h3":"h".concat(t.size),{tag:"component",staticClass:"text-lg text-gray-400 dark:text-neutral-700",class:{"px-4":!0===t.padding,"text-2xl":"1"===t.size,"text-xl":"2"===t.size,"text-sm":"sm"===t.size,"text-xs":"xs"===t.size,"text-lg":!["1","2","sm","xs"].includes(t.size),"font-bold":!0===t.bold,"font-medium":!1===t.bold,uppercase:!0===t.uppercase}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},394:function(t,e,n){"use strict";var o=n(3),r=n(390);o({target:"String",proto:!0,forced:n(391)("bold")},{bold:function(){return r(this,"b","","")}})},395:function(t,e,n){"use strict";n.r(e);var o={props:{iframeUrl:{type:[String,Boolean],required:!1,default:null}},data:function(){return{itemLoaded:!1}}},r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:{"bg-gray-100 dark:bg-slate-800 rounded animate-pulse":!1===t.itemLoaded}},[t.iframeUrl?e("iframe",{class:{"w-full h-full rounded":!0,invisible:!1===t.itemLoaded},attrs:{src:t.iframeUrl},on:{load:function(e){t.itemLoaded=!0}}}):t._e()])}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,n){"use strict";n.r(e);var o=n(4),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-md space-y-4 p-4"},[e("div",{staticClass:"rounded-md bg-gray-300 h-5 animate-pulse w-7/12 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 w-full animate-pulse dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-4/12 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"space-y-2"},[e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-2/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-300 h-4 animate-pulse w-1/6 dark:bg-neutral-700/40"})])])])}],!1,null,null,null);e.default=component.exports},397:function(t,e,n){"use strict";n.r(e);var o=n(4),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg cursor-pointer flex space-x-2 p-2 transition-shadow items-center select-none hover:shadow-md"},[e("div",{staticClass:"rounded-md bg-gray-200 flex-shrink-0 h-16 animate-pulse w-16 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"flex-grow space-y-1"},[e("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-2/3 dark:bg-neutral-700/40"}),t._v(" "),e("div",{staticClass:"rounded bg-gray-200 h-4 animate-pulse w-1/3 dark:bg-neutral-700/40"})])])}],!1,null,null,null);e.default=component.exports},398:function(t,e,n){"use strict";n.r(e);var o=n(4),component=Object(o.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"flex items-center justify-center"},[t("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[t("path",{staticClass:"fill-[#888888] dark:fill-white",attrs:{d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}}),this._v(" "),t("path",{attrs:{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"}},[t("animateTransform",{attrs:{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},399:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({computed:{getRandomItem:function(){return["w-2/3","w-3/4","w-2/5"][Math.floor(3*Math.random())]}}}),r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-md flex space-x-4 p-4 transition-colors focus-ring overflow-x-hidden items-center"},[e("div",{staticClass:"flex space-x-4 w-full items-center"},[e("SkeletonLoader",{staticClass:"rounded-md flex-shrink-0 h-16 w-16"}),t._v(" "),e("div",{staticClass:"flex flex-col space-y-1 w-full"},[e("SkeletonLoader",{staticClass:"h-5",class:t.getRandomItem}),t._v(" "),e("SkeletonLoader",{staticClass:"h-5 w-1/3"})],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SkeletonLoader:n(392).default})},405:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("79f3a104",content,!0,{sourceMap:!1})},412:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{filled:{type:Boolean,required:!1,default:!1}}}),r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return!1===t.filled?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"}})]):e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,n){"use strict";n(405)},416:function(t,e,n){var o=n(71)((function(i){return i[1]}));o.push([t.i,".notification[data-v-282e4880]>:not([hidden])~:not([hidden]),.nuxt-content .notification[data-v-282e4880]>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:.5rem;margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.notification[data-v-282e4880],.nuxt-content .notification[data-v-282e4880]{border-left-width:4px;border-radius:.375rem;padding:1rem}.dark .notification[data-v-282e4880],.dark .nuxt-content .notification[data-v-282e4880]{--tw-text-opacity:1;color:#f3f4f6;color:rgba(243,244,246,var(--tw-text-opacity))}.notification h1[data-v-282e4880],.nuxt-content .notification h1[data-v-282e4880]{font-size:1rem;font-weight:600;line-height:1.5rem}.notification h1[data-v-282e4880]:hover,.nuxt-content .notification h1[data-v-282e4880]:hover{-webkit-text-decoration:none;text-decoration:none}.notification.information[data-v-282e4880],.nuxt-content .notification.information[data-v-282e4880]{--tw-bg-opacity:1;--tw-border-opacity:1;--tw-text-opacity:1;background-color:#2563eb;background-color:rgba(37,99,235,var(--tw-bg-opacity));border-color:#3b82f6;border-color:rgba(59,130,246,var(--tw-border-opacity));color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity))}.notification.information h1[data-v-282e4880],.nuxt-content .notification.information h1[data-v-282e4880]{--tw-text-opacity:1;color:#2563eb;color:rgba(37,99,235,var(--tw-text-opacity))}.notification.information p[data-v-282e4880],.notification.information p strong[data-v-282e4880],.nuxt-content .notification.information p[data-v-282e4880],.nuxt-content .notification.information p strong[data-v-282e4880]{--tw-text-opacity:1;color:#3b82f6;color:rgba(59,130,246,var(--tw-text-opacity))}.dark .notification.information p[data-v-282e4880],.dark .notification.information p strong[data-v-282e4880],.dark .nuxt-content .notification.information p[data-v-282e4880],.dark .nuxt-content .notification.information p strong[data-v-282e4880]{--tw-text-opacity:1;color:#60a5fa;color:rgba(96,165,250,var(--tw-text-opacity))}.notification.warning[data-v-282e4880],.nuxt-content .notification.warning[data-v-282e4880]{--tw-bg-opacity:1;--tw-border-opacity:1;--tw-text-opacity:1;background-color:#f59e0b;background-color:rgba(245,158,11,var(--tw-bg-opacity));border-color:#f59e0b;border-color:rgba(245,158,11,var(--tw-border-opacity));color:#f59e0b;color:rgba(245,158,11,var(--tw-text-opacity))}.notification.warning h1[data-v-282e4880],.nuxt-content .notification.warning h1[data-v-282e4880]{--tw-text-opacity:1;color:#d97706;color:rgba(217,119,6,var(--tw-text-opacity))}.notification.warning p[data-v-282e4880],.notification.warning p strong[data-v-282e4880],.nuxt-content .notification.warning p[data-v-282e4880],.nuxt-content .notification.warning p strong[data-v-282e4880]{--tw-text-opacity:1;color:#f59e0b;color:rgba(245,158,11,var(--tw-text-opacity))}.dark .notification.warning p[data-v-282e4880],.dark .notification.warning p strong[data-v-282e4880],.dark .nuxt-content .notification.warning p[data-v-282e4880],.dark .nuxt-content .notification.warning p strong[data-v-282e4880]{--tw-text-opacity:1;color:#fbbf24;color:rgba(251,191,36,var(--tw-text-opacity))}.notification.danger[data-v-282e4880],.nuxt-content .notification.danger[data-v-282e4880]{--tw-bg-opacity:1;--tw-border-opacity:1;--tw-text-opacity:1;background-color:#ef4444;background-color:rgba(239,68,68,var(--tw-bg-opacity));border-color:#ef4444;border-color:rgba(239,68,68,var(--tw-border-opacity));color:#ef4444;color:rgba(239,68,68,var(--tw-text-opacity))}.notification.danger h1[data-v-282e4880],.nuxt-content .notification.danger h1[data-v-282e4880]{--tw-text-opacity:1;color:#dc2626;color:rgba(220,38,38,var(--tw-text-opacity))}.notification.danger p[data-v-282e4880],.notification.danger p strong[data-v-282e4880],.nuxt-content .notification.danger p[data-v-282e4880],.nuxt-content .notification.danger p strong[data-v-282e4880]{--tw-text-opacity:1;color:#ef4444;color:rgba(239,68,68,var(--tw-text-opacity))}.dark .notification.danger p[data-v-282e4880],.dark .notification.danger p strong[data-v-282e4880],.dark .nuxt-content .notification.danger p[data-v-282e4880],.dark .nuxt-content .notification.danger p strong[data-v-282e4880]{--tw-text-opacity:1;color:#f87171;color:rgba(248,113,113,var(--tw-text-opacity))}.notification.success[data-v-282e4880],.nuxt-content .notification.success[data-v-282e4880]{--tw-bg-opacity:1;--tw-border-opacity:1;--tw-text-opacity:1;background-color:#10b981;background-color:rgba(16,185,129,var(--tw-bg-opacity));border-color:#10b981;border-color:rgba(16,185,129,var(--tw-border-opacity));color:#10b981;color:rgba(16,185,129,var(--tw-text-opacity))}.notification.success h1[data-v-282e4880],.nuxt-content .notification.success h1[data-v-282e4880]{--tw-text-opacity:1;color:#059669;color:rgba(5,150,105,var(--tw-text-opacity))}.notification.success p[data-v-282e4880],.notification.success p strong[data-v-282e4880],.nuxt-content .notification.success p[data-v-282e4880],.nuxt-content .notification.success p strong[data-v-282e4880]{--tw-text-opacity:1;color:#10b981;color:rgba(16,185,129,var(--tw-text-opacity))}.dark .notification.success p[data-v-282e4880],.dark .notification.success p strong[data-v-282e4880],.dark .nuxt-content .notification.success p[data-v-282e4880],.dark .nuxt-content .notification.success p strong[data-v-282e4880]{--tw-text-opacity:1;color:#34d399;color:rgba(52,211,153,var(--tw-text-opacity))}.notification.danger[data-v-282e4880],.notification.information[data-v-282e4880],.notification.success[data-v-282e4880],.notification.warning[data-v-282e4880],.nuxt-content .notification.danger[data-v-282e4880],.nuxt-content .notification.information[data-v-282e4880],.nuxt-content .notification.success[data-v-282e4880],.nuxt-content .notification.warning[data-v-282e4880]{--tw-bg-opacity:0.25}.dark .notification.danger[data-v-282e4880],.dark .notification.information[data-v-282e4880],.dark .notification.success[data-v-282e4880],.dark .notification.warning[data-v-282e4880],.dark .nuxt-content .notification.danger[data-v-282e4880],.dark .nuxt-content .notification.information[data-v-282e4880],.dark .nuxt-content .notification.success[data-v-282e4880],.dark .nuxt-content .notification.warning[data-v-282e4880]{--tw-text-opacity:1;color:#f3f4f6;color:rgba(243,244,246,var(--tw-text-opacity))}.notification a[data-v-282e4880],.nuxt-content .notification a[data-v-282e4880]{color:currentColor;font-weight:500;text-decoration-line:underline}.notification a[data-v-282e4880]:hover,.nuxt-content .notification a[data-v-282e4880]:hover{text-decoration-line:underline}",""]),o.locals={},t.exports=o},422:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{type:{type:String,required:!1,default:"information"},title:{type:String,required:!1,default:""}}}),r=(n(415),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"notification text-sm",class:t.type},[t.title?e("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.$slots.default?e("p",[t._t("default")],2):t._e()])}),[],!1,null,"282e4880",null);e.default=component.exports},454:function(t,e,n){"use strict";n.r(e);n(64);var o=n(0).a.extend({props:{title:{type:String,required:!0,default:""},date:{type:[String,Date],required:!0,default:null},thumbnail:{type:String,required:!0,default:null}},computed:{getDateText:function(){return this.$moment(this.date).utcOffset(3).format("DD/MM/YYYY")===this.$moment(this.$getTurkeyTime()).format("DD/MM/YYYY")?"Today's Song":this.$moment(this.date).utcOffset(3).format("DD/MM/YYYY")}}}),r=n(4),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-lg cursor-pointer flex space-x-3 p-2 transition-colors focus-ring items-center select-none hover:bg-gray-200/40 dark:hover:bg-slate-800/40"},[e("div",{staticClass:"rounded-md flex-shrink-0"},[e("SmartImage",{staticClass:"rounded-md max-w-full max-h-full h-16 w-16",attrs:{src:t.thumbnail,fit:"outside",width:"64",height:"64"}})],1),t._v(" "),e("div",{staticClass:"space-y-1 truncate"},[e("h3",{staticClass:"font-medium flex-shrink-0 leading-tight text-gray-700 truncate dark:text-slate-300"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"flex space-x-1 items-center dark:text-slate-600"},[t.getDateText.startsWith("Today")?e("IconStar",{staticClass:"flex-shrink-0 h-4 text-gray-900 w-4 dark:text-slate-600"}):t._e(),t._v(" "),e("span",{staticClass:"flex-shrink-0 text-sm text-gray-600 dark:text-slate-600"},[t._v(t._s(t.getDateText))])],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SmartImage:n(136).default,IconStar:n(412).default})},557:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(23),n(7),n(31),n(0).a.extend({data:function(){return{iframeLoaded:!1,today:new Date,selected:{date:null,url:null,spotifyUrl:null,metadata:{title:null,artist:null,thumbnail:null}},songs:[]}},fetchOnServer:!1,fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$getDaily(10);case 2:n=e.sent,t.selected=n[0],t.songs=n||[];case 5:case"end":return e.stop()}}),e)})))()},head:function(){var title="Song Recommendations";return{title:title,meta:this.$prepareMeta({title:title,description:"Looking for someone else's song recommendations? Here it is! I built a system just for you: Fresh, new songs every day!",image:"https://mikko.codes/assets/meta/images/daily.jpg",keywords:"daily, song, recommendation",url:"https://mikko.codes/daily"}),link:[{rel:"canonical",href:"https://mikko.codes/daily"}]}},computed:{getSelectedSong:function(){var t=this.selected;return{youtube:t.url||"Y4GbXznMh40",spotify:t.spotifyUrl||null}},getSelectedSongMetadata:function(){var t;return null===(t=this.selected)||void 0===t?void 0:t.metadata},isThereNoSongToday:function(){var t,e,n;if(!(null===(e=null===(t=this.songs)||void 0===t?void 0:t[0])||void 0===e?void 0:e.date))return!1;var o=this.$moment(this.$getTurkeyTime()).format("DD/MM/YYYY"),r=this.$moment(null===(n=this.songs[0])||void 0===n?void 0:n.date).utcOffset(3).format("DD/MM/YYYY");return console.log(r),o!==r},getSelectedTitle:function(){var t,e;return(null===(e=null===(t=this.selected)||void 0===t?void 0:t.metadata)||void 0===e?void 0:e.title)||"Unknown"},getSelectedDateTitle:function(){var t;return this.$moment(null===(t=this.selected)||void 0===t?void 0:t.date).utcOffset(3).format("DD/MM/YYYY")||"Unknown"},getSongList:function(){var t=this;return this.songs.filter((function(e){return e.date!==t.selected.date}))}}})),c=n(4),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"space-y-4 my-10"},[!0===t.isThereNoSongToday?e("BlogNotification",{staticClass:"mx-4",attrs:{type:"warning"}},[t._v("\n    There's no song for today, check back later or wait for the next day until\n    I find some time to add new songs! You can listen to the older ones if you\n    wish to!\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"space-y-12"},[e("div",{staticClass:"space-y-6 px-4 gap-6 grid-cols-2 md:space-y-0 md:grid"},[e("div",{staticClass:"space-y-4"},[e("SkeletonLoader",{staticClass:"h-[30vh] w-full md:h-full",attrs:{type:"iframe","iframe-url":!1===t.$fetchState.pending&&"https://www.youtube.com/embed/".concat(t.getSelectedSong.youtube)}})],1),t._v(" "),e("div",{staticClass:"space-y-2 w-full"},[e("div",{staticClass:"rounded-md bg-gray-200/40 p-4 truncate dark:bg-slate-800/40"},[e("Title",{attrs:{padding:!1}},[t._v(" Title ")]),t._v(" "),t.$fetchState.pending||t.$fetchState.error?e("SkeletonLoader",{staticClass:"bg-gray-300 h-6 w-2/4 dark:bg-slate-700"}):e("span",{staticClass:"text-gray-700 truncate dark:text-gray-300"},[t._v(t._s(t.getSelectedTitle))])],1),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-200/40 p-4 truncate dark:bg-slate-800/40"},[e("Title",{attrs:{padding:!1}},[t._v(" Artist ")]),t._v(" "),t.$fetchState.pending||t.$fetchState.error?e("SkeletonLoader",{staticClass:"bg-gray-300 h-6 w-1/4 dark:bg-slate-700"}):e("span",{staticClass:"text-gray-700 truncate dark:text-gray-300"},[t._v(t._s(t.getSelectedSongMetadata.artist||"Unknown"))])],1),t._v(" "),e("div",{staticClass:"rounded-md bg-gray-200/40 p-4 truncate dark:bg-slate-800/40"},[e("Title",{attrs:{padding:!1}},[t._v(" Date ")]),t._v(" "),t.$fetchState.pending||t.$fetchState.error?e("SkeletonLoader",{staticClass:"bg-gray-300 h-6 w-2/4 dark:bg-slate-700"}):e("span",{staticClass:"text-gray-700 truncate dark:text-gray-300"},[t._v(t._s(t.getSelectedDateTitle))])],1)])]),t._v(" "),e("div",{staticClass:"space-y-4"},[e("Title",[t._v("Older Songs")]),t._v(" "),e("div",{staticClass:"grid px-2 gap-2 sm:grid-cols-2 md:grid-cols-3"},[!0===t.$fetchState.pending?t._l(9,(function(t){return e("SkeletonLoader",{key:"skeleton-song-".concat(t),attrs:{type:"song"}})})):t.$fetchState.error?e("div",{staticClass:"text-gray-900 sm:col-span-2 md:col-span-3 dark:text-gray-100"},[t._v("\n          Something went wrong while fetching songs from Firebase.\n        ")]):t._l(t.getSongList,(function(n,o){return e("CardSong",{key:"song-".concat(o),staticClass:"overflow-x-hidden",attrs:{title:n.metadata.title,date:n.date,thumbnail:n.metadata.thumbnail||"http://via.placeholder.com/75"},nativeOn:{click:function(e){t.selected=n}}})}))],2)],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogNotification:n(422).default,SkeletonLoader:n(392).default,Title:n(393).default,CardSong:n(454).default})}}]);