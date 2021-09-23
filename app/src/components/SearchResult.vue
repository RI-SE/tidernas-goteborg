<template>
  <div>
    <div v-if="searchResponse.query">
      <h2><span class="text-thin text-grey">Sökresultat för:</span> {{searchResponse.query}}</h2>
      <q-tabs
        v-model="tab"
        inline-label
        align="justify"
        class="bg-grey-3"
        active-bg-color="primary"
        active-color="white"
      >
        <q-tab name="items" icon="image" label="Objekt" />
        <q-tab name="api" icon="settings" label="API" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="items">
          <ResultItems />
        </q-tab-panel>

        <q-tab-panel name="api">
          <ResultAPI />
        </q-tab-panel>
      </q-tab-panels>
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex'

import ResultItems from 'components/ResultItems'
import ResultAPI from 'components/ResultAPI'

export default ({
  name: 'SearchResult',
  components: {
    ResultItems,
    ResultAPI
  },
  data: function () {
    return {
      query: '',
      tab: 'items'
      // queryResponse: {}
    }
  },
  props: {
  },
  computed: {
    ...mapState(['searchResponse'])
  },
  methods: {
  }
})
</script>
