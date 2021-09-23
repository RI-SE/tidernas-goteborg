<template>
  <div>
    <q-card class="text-black">
      <q-item>
        <q-icon name="star" @click="saveItem" :color="isSaved ? 'warning' : 'grey'" size="md" class="absolute-top-right save"/>
      </q-item>
      <q-card-section>
        {{item}}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default ({
  name: 'ItemPreview',
  data: function () {
    return {
    }
  },
  props: {
    item: Object
  },
  computed: {
    ...mapState(['savedItems']),
    isSaved () {
      return this.savedItems.filter(i => i.id === this.item.id).length > 0
    }
  },
  methods: {
    saveItem () {
      if (!this.isSaved) {
        this.$store.commit('addSavedItem', { item: this.item })
      } else {
        this.$store.commit('removeSavedItem', { item: this.item })
      }
    }
  }
})
</script>

<style lang="scss">
  .save {
    cursor: pointer !important;
  }

  .save:hover {
    opacity: 70%;
  }

</style>
