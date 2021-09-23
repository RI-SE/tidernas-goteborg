<template>
  <div>
    <div v-if="searchResponse.query">
      <div class="row items-center">
        <h2>
          <span class="text-thin text-grey">Sökresultat för:</span> {{searchResponse.query}}
          <q-btn round flat icon="share" @click="copyUrl" color="grey"/>
          <q-btn round flat icon="close" @click="clearResponse" color="grey"/>
        </h2>

      </div>
      <q-tabs
        v-model="tab"
        inline-label
        align="justify"
        class="bg-grey-3"
        active-bg-color="primary"
        active-color="white"
        indicator-color="transparent"
      >
        <q-tab name="items" icon="image" label="Lista" />
        <!--q-tab name="share" icon="share" label="Dela" /-->
        <q-tab name="api" icon="settings" label="API" />
      </q-tabs>

      <q-tab-panels v-model="tab" animated class="">
        <q-tab-panel name="items">
          <ResultItems />
        </q-tab-panel>

        <!--q-tab-panel name="share">
          <ResultShare />
        </q-tab-panel-->

        <q-tab-panel name="api">
          <ResultAPI />
        </q-tab-panel>
      </q-tab-panels>
    </div>

  </div>
</template>

<script>

import { mapState } from 'vuex'
import { copyToClipboard } from 'quasar'

import ResultItems from 'components/ResultItems'
// import ResultShare from 'components/ResultShare'
import ResultAPI from 'components/ResultAPI'

export default ({
  name: 'SearchResult',
  components: {
    ResultItems,
    // ResultShare,
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
    ...mapState(['searchResponse']),
    url () {
      return location.protocol + '//' + location.host + '?q=' + (this.searchResponse.query || '')
    }
  },
  methods: {
    clearResponse () {
      this.$store.dispatch('clearResponse')
    },
    copyUrl () {
      copyToClipboard(this.url)
      this.$q.notify({
        message: 'Länk till sökningen har kopierats till urklipp'
      })
    }
  }
})
</script>
