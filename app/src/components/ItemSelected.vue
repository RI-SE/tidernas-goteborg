<template>
  <div>
    <q-dialog v-model="isSelected">
      <q-card class="text-black">

        <q-img :src="item['Image-Link']" :alt="meta.Motiv" :title="meta.Motiv" />

        <q-card-section>
          <div class="row">
            <h3 class="col q-ma-none">
              {{item.Title}}
            </h3>
            <div>
              <q-icon name="star" @click="saveItem" :color="isSaved ? 'warning' : 'grey'" size="md" class="save"/>
            </div>
          </div>
          <q-separator class="q-ma-md"/>
          <div>
            <div v-for="(m,i) in Object.keys(meta)" :key="i">
              <strong>{{m}}</strong>: {{meta[m]}}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default ({
  name: 'ItemPreview',
  components: {
  },
  data: function () {
    return {
      isSelected: false
    }
  },
  props: {
  },
  computed: {
    ...mapState(['selectedItem', 'savedItems']),
    item () {
      return this.selectedItem
    },
    isSaved () {
      return this.savedItems.filter(i => i === this.item).length > 0
    },
    meta () {
      return this.item.Metadata
    }
  },
  watch: {
    item (val) {
      if (val !== null) {
        this.isSelected = true
      }
    },
    isSelected (val) {
      if (!val) {
        this.$store.dispatch('selectItem', { item: null })
      }
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
