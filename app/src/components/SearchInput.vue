<template>
  <div>
    <q-form @submit="runBackendScript">
      <q-input placeholder="Sök efter bilders innehåll" v-model="query" clearable @focus="selectText" class="col text-h2" input-style="q-ma-md" ref="search">
         <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <!--div class="text-center">
        <q-toggle v-model="queue" label="API kö test"/>
      </div-->
      <!--q-btn type="submit" label="Sök" /-->
    </q-form>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import backend from '../js/backend-utils.js'

export default ({
  name: 'SearchInput',
  components: {
  },
  data: function () {
    return {
      query: '',
      queue: true
    }
  },
  props: {
  },
  computed: {
    ...mapState(['searchResponse'])
  },
  watch: {
    searchResponse (val) {
      if (!Object.keys(val).length) {
        this.$refs.search.$el.focus()
      }
    }
  },
  methods: {
    async runBackendScript () {
      this.$store.dispatch('initSearch')
      // const r = await backend.runBackendScript({ query: this.query, queue: this.queue })
      backend.runBackendScript({ query: this.query, queue: this.queue }).then(r => {
        this.$store.dispatch('setResponse', { query: this.query, items: { ...r.data } })
      }, e => {
        this.$store.dispatch('initSearch', false)
        console.log(e)
      })

      // this.$router.replace({ query: { q: this.query } })
    },
    selectText (e) {
      e.target.select()
    }
  },
  mounted () {
    this.$refs.search.$el.focus()
    if (this.$route.query.q) {
      this.query = this.$route.query.q
      this.runBackendScript()
    }
  }
})
</script>
