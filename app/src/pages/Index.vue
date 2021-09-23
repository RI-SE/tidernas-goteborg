<template>
  <q-page>
    <SectionRow>
      <SearchInput class="q-mb-md"/>
      <SearchResult />
    </SectionRow>
  </q-page>
</template>

<script>

import SectionRow from 'components/SectionRow'
import SearchInput from 'components/SearchInput'
import SearchResult from 'components/SearchResult'
// import SavedItems from 'components/SavedItems'

export default ({
  name: 'PageIndex',
  components: {
    SectionRow,
    SearchInput,
    SearchResult
    // SavedItems
  },
  methods: {
  },
  mounted () {
  }
})
</script>
