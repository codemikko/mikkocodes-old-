import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\src\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_29cfe8c6 from 'nuxt_plugin_plugin_29cfe8c6' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_webfontloader_76a04940 from 'nuxt_plugin_webfontloader_76a04940' // Source: .\\webfontloader.js (mode: 'client')
import nuxt_plugin_index_6553c10a from 'nuxt_plugin_index_6553c10a' // Source: .\\firebase\\index.js (mode: 'all')
import nuxt_plugin_pluginclient_6bbf545a from 'nuxt_plugin_pluginclient_6bbf545a' // Source: .\\content\\plugin.client.js (mode: 'client')
import nuxt_plugin_pluginserver_2fd9c75b from 'nuxt_plugin_pluginserver_2fd9c75b' // Source: .\\content\\plugin.server.js (mode: 'server')
import nuxt_plugin_workbox_cafa2f48 from 'nuxt_plugin_workbox_cafa2f48' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_5ac47e48 from 'nuxt_plugin_metaplugin_5ac47e48' // Source: .\\pwa\\meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_51753360 from 'nuxt_plugin_iconplugin_51753360' // Source: .\\pwa\\icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_e5937980 from 'nuxt_plugin_axios_e5937980' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_googleanalytics_18fae634 from 'nuxt_plugin_googleanalytics_18fae634' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_pluginserver_19e33129 from 'nuxt_plugin_pluginserver_19e33129' // Source: .\\color-mode\\plugin.server.js (mode: 'server')
import nuxt_plugin_pluginclient_97ac80be from 'nuxt_plugin_pluginclient_97ac80be' // Source: .\\color-mode\\plugin.client.js (mode: 'client')
import nuxt_plugin_image_783d403b from 'nuxt_plugin_image_783d403b' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_moment_283db658 from 'nuxt_plugin_moment_283db658' // Source: .\\moment.js (mode: 'all')
import nuxt_plugin_Util_927bffd4 from 'nuxt_plugin_Util_927bffd4' // Source: ..\\src\\plugins\\Util (mode: 'all')
import nuxt_plugin_Types_21724ae5 from 'nuxt_plugin_Types_21724ae5' // Source: ..\\src\\plugins\\Types (mode: 'all')
import nuxt_plugin_Disqus_1eaccad6 from 'nuxt_plugin_Disqus_1eaccad6' // Source: ..\\src\\plugins\\Disqus (mode: 'all')
import nuxt_plugin_MomentTimezone_7b9c352d from 'nuxt_plugin_MomentTimezone_7b9c352d' // Source: ..\\src\\plugins\\MomentTimezone (mode: 'all')
import nuxt_plugin_Lanyard_845ca082 from 'nuxt_plugin_Lanyard_845ca082' // Source: ..\\src\\plugins\\Lanyard (mode: 'client')
import nuxt_plugin_Firebase_3a08d81b from 'nuxt_plugin_Firebase_3a08d81b' // Source: ..\\src\\plugins\\Firebase (mode: 'client')
import nuxt_plugin_Tippy_216b0650 from 'nuxt_plugin_Tippy_216b0650' // Source: ..\\src\\plugins\\Tippy (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const store = createStore(ssrContext)
  const router = await createRouter(ssrContext, config, { store })

  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"mikko.code","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1","property":"viewport"},{"hid":"description","name":"description","content":"I am a skilled front-end developer hailing from the United States, with a passion for all things related to front-end development. I specialize in using cutting-edge technologies and frameworks such as Nuxt, Next, Tailwind, and Windcss to create visually stunning and highly functional web applications. My love for the craft drives me to constantly improve, my JavaScript skills, staying up-to-date with the latest developments and trends in the industry. I have a deep understanding of the importance of creating intuitive and user-friendly interfaces, and my work reflects my dedication to delivering the best possible user experience!","property":"description"},{"hid":"twitter:card","name":"twitter:card","content":"summary","property":"twitter:card"},{"hid":"twitter:site","name":"twitter:site","content":"@eggsydev","property":"twitter:site"},{"hid":"twitter:creator","name":"twitter:creator","content":"@eggsydev","property":"twitter:creator"},{"hid":"twitter:title","name":"twitter:title","content":"mikko.code","property":"twitter:title"},{"hid":"twitter:description","name":"twitter:description","content":"I am a skilled front-end developer hailing from the United States, with a passion for all things related to front-end development. I specialize in using cutting-edge technologies and frameworks such as Nuxt, Next, Tailwind, and Windcss to create visually stunning and highly functional web applications. My love for the craft drives me to constantly improve, my JavaScript skills, staying up-to-date with the latest developments and trends in the industry. I have a deep understanding of the importance of creating intuitive and user-friendly interfaces, and my work reflects my dedication to delivering the best possible user experience!","property":"twitter:description"},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Fmikko.code\u002Ficon.png","property":"twitter:image"},{"hid":"og:type","name":"og:type","content":"website","property":"og:type"},{"hid":"og:site_name","name":"og:site_name","content":"mikko.code","property":"og:site_name"},{"hid":"og:description","name":"og:description","content":"I am a skilled front-end developer hailing from the United States, with a passion for all things related to front-end development. I specialize in using cutting-edge technologies and frameworks such as Nuxt, Next, Tailwind, and Windcss to create visually stunning and highly functional web applications. My love for the craft drives me to constantly improve, my JavaScript skills, staying up-to-date with the latest developments and trends in the industry. I have a deep understanding of the importance of creating intuitive and user-friendly interfaces, and my work reflects my dedication to delivering the best possible user experience!","property":"og:description"},{"hid":"og:image","name":"og:image","content":"https:\u002F\u002Fmikko.code\u002Ficon.png","property":"og:image"},{"hid":"theme-color","name":"theme-color","content":"#171717","property":"theme-color"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Fmikko.code\u002Fassets\u002Ficons\u002Ficon.ico"},{"rel":"search","type":"application\u002Fopensearchdescription+xml","title":"Mikko's Blog","href":"https:\u002F\u002Fmikko.code\u002Fopensearch.xml"}],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_29cfe8c6 === 'function') {
    await nuxt_plugin_plugin_29cfe8c6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_webfontloader_76a04940 === 'function') {
    await nuxt_plugin_webfontloader_76a04940(app.context, inject)
  }

  if (typeof nuxt_plugin_index_6553c10a === 'function') {
    await nuxt_plugin_index_6553c10a(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_6bbf545a === 'function') {
    await nuxt_plugin_pluginclient_6bbf545a(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_2fd9c75b === 'function') {
    await nuxt_plugin_pluginserver_2fd9c75b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_cafa2f48 === 'function') {
    await nuxt_plugin_workbox_cafa2f48(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_5ac47e48 === 'function') {
    await nuxt_plugin_metaplugin_5ac47e48(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_51753360 === 'function') {
    await nuxt_plugin_iconplugin_51753360(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_e5937980 === 'function') {
    await nuxt_plugin_axios_e5937980(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_18fae634 === 'function') {
    await nuxt_plugin_googleanalytics_18fae634(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_pluginserver_19e33129 === 'function') {
    await nuxt_plugin_pluginserver_19e33129(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_pluginclient_97ac80be === 'function') {
    await nuxt_plugin_pluginclient_97ac80be(app.context, inject)
  }

  if (typeof nuxt_plugin_image_783d403b === 'function') {
    await nuxt_plugin_image_783d403b(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_283db658 === 'function') {
    await nuxt_plugin_moment_283db658(app.context, inject)
  }

  if (typeof nuxt_plugin_Util_927bffd4 === 'function') {
    await nuxt_plugin_Util_927bffd4(app.context, inject)
  }

  if (typeof nuxt_plugin_Types_21724ae5 === 'function') {
    await nuxt_plugin_Types_21724ae5(app.context, inject)
  }

  if (typeof nuxt_plugin_Disqus_1eaccad6 === 'function') {
    await nuxt_plugin_Disqus_1eaccad6(app.context, inject)
  }

  if (typeof nuxt_plugin_MomentTimezone_7b9c352d === 'function') {
    await nuxt_plugin_MomentTimezone_7b9c352d(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Lanyard_845ca082 === 'function') {
    await nuxt_plugin_Lanyard_845ca082(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Firebase_3a08d81b === 'function') {
    await nuxt_plugin_Firebase_3a08d81b(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_Tippy_216b0650 === 'function') {
    await nuxt_plugin_Tippy_216b0650(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
