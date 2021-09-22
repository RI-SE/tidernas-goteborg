<template>
  <div>
    <SectionRow>
      <h2>Sök</h2>
      <q-form @submit="runBackendScript">
        <q-input label="Sökterm" v-model="query" />
        <br/>
        <q-btn type="submit" label="Sök" />
      </q-form>
      <pre>
        {{queryResponse}}
      </pre>
      <div class="row q-col-gutter-md">
        <SearchResult v-for="(r,i) in queryResponse.results" :result="r" :key="i" />
      </div>
    </SectionRow>
  </div>
</template>

<script>

import SectionRow from 'components/SectionRow'
import backend from '../js/backend-utils.js'
import SearchResult from 'components/SearchResult'

export default ({
  name: 'Search',
  components: {
    SectionRow,
    SearchResult
  },
  data: function () {
    return {
      query: '',
      queryResponse: {}
    }
  },
  props: {
  },
  methods: {
    async runBackendScript () {
      const r = await backend.runBackendScript({ query: this.query })
      this.queryResponse = r.data
    }
  }
})
</script>
