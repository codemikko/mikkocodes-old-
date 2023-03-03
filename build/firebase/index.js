import createApp from './app.js'

import firestoreService from './service.firestore.js'

const appConfig = {"appId":"1:1032859384171:web:6b9f8026dc9928b425f42e","apiKey":"AIzaSyCxeycNPLuEFzq41mw3XIq97LyyfH9-ZdI","projectId":"mikkos-portfolio","databaseURL":"","authDomain":"","storageBucket":"","messagingSenderId":"","measurementId":""}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  const [
    firestore
  ] = await Promise.all(servicePromises)

  const fire = {
    firestore: firestore
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}