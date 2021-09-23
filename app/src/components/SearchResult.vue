<template>
  <div>
    <h2><span class="text-thin text-grey">Toppträffar för:</span> {{searchResponse.query}}</h2>
    <!--pre>
      {{searchResponse}}
    </pre-->
    <div class="row q-col-gutter-md">
      <ItemPreview v-for="(item,i) in searchResponse.items" :item="item" :key="i" />
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import ItemPreview from 'components/ItemPreview'

export default ({
  name: 'SearchResult',
  components: {
    ItemPreview
  },
  data: function () {
    return {
      query: ''
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
