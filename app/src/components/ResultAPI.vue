<template>
  <div>
    <h3>API Request URL (GET):</h3>
    <a :href="requrl" target="_blank">{{requrl}}</a>
    <h3>API response:</h3>
    <pre>
      {{searchResponse}}
    </pre>
  </div>
</template>

<script>

import { mapState } from 'vuex'

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
    requrl () {
      return process.env.API + '?q=' + (this.searchResponse.query || '')
    }
  },
  methods: {
  }
})
</script>
