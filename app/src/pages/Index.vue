<template>
  <q-page class="row items-stretch">
    <div class="col-8">
      <SectionRow class="full-height">
        <SearchInput class="q-mb-md"/>
        <SearchResult />
      </SectionRow>
    </div>
    <div class="col-4">
      <SavedItems class="full-height"/>
    </div>
  </q-page>
</template>

<script>

import SectionRow from 'components/SectionRow'
import SearchInput from 'components/SearchInput'
import SearchResult from 'components/SearchResult'
import SavedItems from 'components/SavedItems'

export default ({
  name: 'PageIndex',
  components: {
    SectionRow,
    SearchInput,
    SearchResult,
    SavedItems
  },
  methods: {
  },
  mounted () {
  }
})
</script>
