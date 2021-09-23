<template>
  <div>
    <div class="row q-col-gutter-md">
      <ItemPreview v-for="(item,i) in searchResponse.items" :item="item" :key="i" class="col-xs-12 col-md-4" />
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import ItemPreview from 'components/ItemPreview'

export default ({
  name: 'ResultItems',
  components: {
    ItemPreview
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
