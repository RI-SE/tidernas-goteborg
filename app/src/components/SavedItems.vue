<template>
  <div class="bg-primary">
    <SectionRow>
      <h2 class="text-warning">Sparade objekt</h2>
      <div class="row q-col-gutter-md">
        <ItemPreview v-for="(item,i) in savedItems" :item="item" :key="i" class="col-4" />
      </div>
    </SectionRow>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import SectionRow from 'components/SectionRow'
import ItemPreview from 'components/ItemPreview'

export default ({
  name: 'SavedItems',
  components: {
    SectionRow,
    ItemPreview
  },
  data: function () {
    return {
    }
  },
  props: {
    result: Object
  },
  computed: {
    ...mapState(['savedItems'])
  },
  methods: {
  }
})
</script>
