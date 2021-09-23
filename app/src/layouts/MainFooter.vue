<template>
  <div class="text-body2 text-right">
      <router-link class="dark" :to="{name: 'About'}">Semantisk bildsökning</router-link> baserad på <a class="dark" href="https://www.kringla.nu/" target="_blank">Kringla</a> skapad av <a class="dark" href="https://ri.se" target="_blank">RISE</a> för <a class="dark" href="https://itch.io/jam/tidernas-goteborg-400ars-jam" target="_blank">Tidernas Göteborg 400års-jam</a>
  </div>
</template>

<script>

export default ({
  name: 'MainFooter',
  data: function () {
    return {
    }
  },
  props: {
  },
  computed: {
  },
  methods: {
  }
})
</script>

<style lang="scss">
</style>
