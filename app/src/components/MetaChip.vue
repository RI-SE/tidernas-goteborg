<template>
  <div>
    <q-chip v-if="field" :icon="icon" color="primary" dark>
      {{field}}
    </q-chip>
  </div>
</template>

<script>

export default ({
  name: 'ItemPreview',
  data: function () {
    return {
    }
  },
  props: {
    field: String,
    icon: String
  },
  computed: {
  },
  methods: {
  }
})
</script>

<style lang="scss">
</style>
