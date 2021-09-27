<template>
  <q-page>
    <SectionRow>
      <h2>Semantisk bildsökning</h2>
      <p>
        Tidernas Göteborg använder semantisk bildsökning för att hitta bilder på kulturarvsföremål hos <a href="https://www.kringla.nu/" target="_blank">Kringla</a>.
      </p>
      <p>
        Det innebär att du kan söka efter bilder utifrån själva <i>innehållet</i> i bilderna.
      </p>
      <p>
        Du kan till exempel hitta bilder på en <router-link :to="{name: 'Home', query: {q: 'himmel'}}">himmel</router-link> även om ingen människa har angett att någon bilderna innehåller just detta.
      </p>
    </SectionRow>
  </q-page>
</template>

<script>

import SectionRow from 'components/SectionRow'

export default ({
  name: 'PageAbout',
  components: {
    SectionRow
  },
  methods: {
  },
  mounted () {
  }
})
</script>
