<template>
  <div class="SectionRow row flex-center">
    <div class="col-10">
      <slot/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SectionRow',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>

  .SectionRow {
    padding: 20px 0 20px 0;
  }

</style>
