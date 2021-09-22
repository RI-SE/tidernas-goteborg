<template>
  <div>
    <q-card>
      <q-item>
        <q-icon name="star" @click="saveResult" :color="isSaved ? 'yellow' : 'grey'" size="md" class="absolute-top-right pointer"/>
      </q-item>
      <q-card-section>
        {{result}}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import backend from '../js/backend-utils.js'

export default ({
  name: 'Search',
  data: function () {
    return {
    }
  },
  props: {
    result: Object
  },
  computed: {
    ...mapState(['savedResults']),
    isSaved () {
      return this.savedResults.filter(r => r.id === this.result.id).length > 0
    }
  },
  methods: {
    async runBackendScript () {
      const r = await backend.runBackendScript({ query: this.query })
      console.log(r.data)
    },
    saveResult () {
      if (!this.isSaved) {
        this.$store.commit('addSavedResult', { result: this.result })
      } else {
        this.$store.commit('removeSavedResult', { result: this.result })
      }
    }
  }
})
</script>
