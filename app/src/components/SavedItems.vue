<template>
  <div class="">
    <SectionRow>
      <h2 class="text-warning">Sparade objekt</h2>
      <div v-if="savedItems.length" class="col q-col-gutter-md">
        <ItemPreview v-for="(item,i) in savedItems" :item="item" :key="i" />
      </div>
      <div v-else>
        <p>
          Sök och klicka på <q-icon name="star" /> för att spara ett objekt.
        </p>
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
