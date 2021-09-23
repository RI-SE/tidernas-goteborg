<template>
  <div>
    <h2>Sök</h2>
    <q-form @submit="runBackendScript">
      <q-input label="Sökterm" v-model="query" clearable @focus="selectText"/>
      <br/>
      <q-btn type="submit" label="Sök" />
    </q-form>
  </div>
</template>

<script>

import backend from '../js/backend-utils.js'

export default ({
  name: 'SearchInput',
  components: {
  },
  data: function () {
    return {
      query: ''
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
    async runBackendScript () {
      const r = await backend.runBackendScript({ query: this.query })
      this.$store.commit('setState', { key: 'searchResponse', value: r.data })
    },
    selectText (e) {
      e.target.select()
    }
  }
})
</script>
