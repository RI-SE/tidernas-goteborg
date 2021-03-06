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
      isSearching: false,
      searchResponse: {},
      savedItems: [],
      selectedItem: null
    },
    mutations: {
      setState: (state, payload) => {
        state[payload.key] = payload.value
      },
      addSavedItem: (state, payload) => {
        state.savedItems.push(payload.item)
        sessionStorage.setItem('savedItems', JSON.stringify(state.savedItems))
      },
      removeSavedItem: (state, payload) => {
        const index = state.savedItems.findIndex(r => r.id === payload.item.id)
        if (index !== -1) {
          state.savedItems.splice(index, 1)
        }
        sessionStorage.setItem('savedItems', JSON.stringify(state.savedItems))
      }
    },
    actions: {
      init: (ctx, payload) => {
        const savedItems = JSON.parse(sessionStorage.getItem('savedItems'))
        if (savedItems) {
          ctx.commit('setState', { key: 'savedItems', value: savedItems })
        }
      },
      initSearch: (ctx, value = true) => {
        ctx.dispatch('clearResponse')
        ctx.commit('setState', { key: 'isSearching', value: value })
      },
      setResponse: (ctx, payload) => {
        ctx.commit('setState', { key: 'searchResponse', value: payload })
        ctx.commit('setState', { key: 'isSearching', value: false })
      },
      clearResponse: (ctx) => {
        ctx.commit('setState', { key: 'searchResponse', value: {} })
      },
      selectItem: (ctx, payload) => {
        ctx.commit('setState', { key: 'selectedItem', value: payload.item })
      }
    }
  })

  return Store
})
