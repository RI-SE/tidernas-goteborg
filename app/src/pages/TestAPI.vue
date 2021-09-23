<template>
  <q-page class="row items-stretch">
    <div class="col">
      <SectionRow class="full-height">
        <SearchInput />
        <h3>API response:</h3>
        <pre>
          {{searchResponse}}
        </pre>
      </SectionRow>
    </div>
  </q-page>
</template>

<script>

import { mapState } from 'vuex'

import SectionRow from 'components/SectionRow'
import SearchInput from 'components/SearchInput'

export default ({
  name: 'PageIndex',
  components: {
    SectionRow,
    SearchInput
  },
  computed: {
    ...mapState(['searchResponse'])
  },
  methods: {
  },
  mounted () {
  }
})
</script>
