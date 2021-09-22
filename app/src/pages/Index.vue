<template>
  <q-page class="row items-stretch">

      <Search class="col-8"/>
      <SavedResults class="col-4"/>

  </q-page>
</template>

<script>

import Search from 'components/Search'
import SavedResults from 'components/SavedResults'

export default ({
  name: 'PageIndex',
  components: {
    Search,
    SavedResults
  },
  methods: {
  },
  mounted () {
  }
})
</script>
