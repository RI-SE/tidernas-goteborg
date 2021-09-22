// import Vue from 'vue'
import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
    state: {
      savedResults: []
    },
    mutations: {
      setState: (state, payload) => {
        state[payload.key] = payload.value
        // Vue.set(state, payload.key, payload.value)
      },
      addSavedResult: (state, payload) => {
        state.savedResults.push(payload.result)
        sessionStorage.setItem('savedResults', JSON.stringify(state.savedResults))
      },
      removeSavedResult: (state, payload) => {
        const index = state.savedResults.findIndex(r => r.id === payload.result.id)
        if (index !== -1) {
          state.savedResults.splice(index, 1)
        }
      }
    },
    actions: {
      init: (ctx, payload) => {
        const savedResults = JSON.parse(sessionStorage.getItem('savedResults'))
        if (savedResults) {
          ctx.commit('setState', { key: 'savedResults', value: savedResults })
        }
      }
    }
  })

  return Store
})
