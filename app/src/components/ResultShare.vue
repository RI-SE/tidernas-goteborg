<template>
  <div>
    <h3>Dela sökning</h3>
    <div class="copy" @click="copyText">
      <q-input v-model="url" readonly @focus="selectText" filled color="primary" class="text-body1">
        <template v-slot:prepend>
          <q-icon name="content_copy" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import { copyToClipboard } from 'quasar'

export default ({
  name: 'ResultAPI',
  components: {
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
    selectText (e) {
      e.target.select()
    },
    copyText () {
      copyToClipboard(this.url)
      this.$q.notify({
        message: 'Länken har kopierats till urklipp'
      })
    }
  }
})
</script>

<style lang="scss">
  .copy, .copy * {
    cursor: copy !important;
  }
</style>
