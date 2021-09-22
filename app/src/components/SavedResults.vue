<template>
  <div class="bg-primary">
    <SectionRow>
      <h2>Sparade resultat</h2>
      <div class="row q-col-gutter-md">
        <SearchResult v-for="(r,i) in savedResults" :result="r" :key="i" class="col-4" />
      </div>
    </SectionRow>
  </div>
</template>

<script>

import { mapState } from 'vuex'

import SectionRow from 'components/SectionRow'
import SearchResult from 'components/SearchResult'

export default ({
  name: 'Search',
  components: {
    SectionRow,
    SearchResult
  },
  data: function () {
    return {
    }
  },
  props: {
    result: Object
  },
  computed: {
    ...mapState(['savedResults'])
  },
  methods: {
  }
})
</script>
