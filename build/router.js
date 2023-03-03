import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f033129a = () => interopDefault(import('..\\src\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6fbe5dc8 = () => interopDefault(import('..\\src\\pages\\daily.vue' /* webpackChunkName: "pages/daily" */))
const _1396d5fc = () => interopDefault(import('..\\src\\pages\\donate.vue' /* webpackChunkName: "pages/donate" */))
const _14e4ad4b = () => interopDefault(import('..\\src\\pages\\me\\contact.vue' /* webpackChunkName: "pages/me/contact" */))
const _3678a6a8 = () => interopDefault(import('..\\src\\pages\\me\\repos.vue' /* webpackChunkName: "pages/me/repos" */))
const _1060a0e9 = () => interopDefault(import('..\\src\\pages\\me\\songs.vue' /* webpackChunkName: "pages/me/songs" */))
const _657f22f6 = () => interopDefault(import('..\\src\\pages\\projects\\premid\\index.vue' /* webpackChunkName: "pages/projects/premid/index" */))
const _6e41538a = () => interopDefault(import('..\\src\\pages\\projects\\unblock-please.vue' /* webpackChunkName: "pages/projects/unblock-please" */))
const _7630241c = () => interopDefault(import('..\\src\\pages\\projects\\premid\\custom-status.vue' /* webpackChunkName: "pages/projects/premid/custom-status" */))
const _0fb3154e = () => interopDefault(import('..\\src\\pages\\projects\\premid\\mdcreator.vue' /* webpackChunkName: "pages/projects/premid/mdcreator" */))
const _f3a0552a = () => interopDefault(import('..\\src\\pages\\blog\\_slug.vue' /* webpackChunkName: "pages/blog/_slug" */))
const _4131d156 = () => interopDefault(import('..\\src\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _f033129a,
    name: "blog"
  }, {
    path: "/daily",
    component: _6fbe5dc8,
    name: "daily"
  }, {
    path: "/donate",
    component: _1396d5fc,
    name: "donate"
  }, {
    path: "/me/contact",
    component: _14e4ad4b,
    name: "me-contact"
  }, {
    path: "/me/repos",
    component: _3678a6a8,
    name: "me-repos"
  }, {
    path: "/me/songs",
    component: _1060a0e9,
    name: "me-songs"
  }, {
    path: "/projects/premid",
    component: _657f22f6,
    name: "projects-premid"
  }, {
    path: "/projects/unblock-please",
    component: _6e41538a,
    name: "projects-unblock-please"
  }, {
    path: "/projects/premid/custom-status",
    component: _7630241c,
    name: "projects-premid-custom-status"
  }, {
    path: "/projects/premid/mdcreator",
    component: _0fb3154e,
    name: "projects-premid-mdcreator"
  }, {
    path: "/blog/:slug",
    component: _f3a0552a,
    name: "blog-slug"
  }, {
    path: "/",
    component: _4131d156,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
