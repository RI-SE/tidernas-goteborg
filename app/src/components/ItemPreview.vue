<template>
<div>
  <q-card class="ItemPreview" @click="selectItem">

    <q-img :src="item['Image-Link']" :ratio="16/9" :fit="mini ? 'cover' : 'contain'" :alt="meta.Motiv" :title="meta.Motiv" />
    <div v-if="!mini">
      <q-separator />
      <q-card-section>
        <div class="row">
          <h3 class="col q-ma-none ellipsis">
            {{item.Title}}
          </h3>
          <div>
            <q-icon name="star" @click.stop="saveItem" :color="isSaved ? 'warning' : 'grey'" size="md" class="save"/>
          </div>
        </div>
        <p v-if="meta.Källa">
          {{meta.Källa}}
        </p>
        <div class="row">
          <MetaChip :field="meta.Datering" icon="schedule" />
          <MetaChip :field="meta.Typ" icon="attachment" />
          <MetaChip :field="meta.Material" icon="construction" />
        </div>
        <p v-if="meta.Beskrivning" class="ellipsis">
          {{meta.Beskrivning}}
        </p>
      </q-card-section>
    </div>
  </q-card>
</div>
</template>

<script>

import { mapState } from 'vuex'

import MetaChip from 'components/MetaChip'

export default ({
  name: 'ItemPreview',
  components: {
    MetaChip
  },
  data: function () {
    return {
    }
  },
  props: {
    item: Object,
    mini: Boolean
  },
  computed: {
    ...mapState(['savedItems']),
    isSaved () {
      return this.savedItems.filter(i => i === this.item).length > 0
    },
    meta () {
      return this.item.Metadata
    }
  },
  methods: {
    saveItem () {
      if (!this.isSaved) {
        this.$store.commit('addSavedItem', { item: this.item })
      } else {
        this.$store.commit('removeSavedItem', { item: this.item })
      }
    },
    selectItem () {
      this.$store.dispatch('selectItem', { item: this.item })
    }
  }
})
</script>

<style lang="scss">

  .ItemPreview{
    cursor: pointer;
    transition: all 0.25s;
  }

  .ItemPreview:hover{
    box-shadow: 3px 3px 3px rgba(black,0.25);
  }

  .save {
    cursor: pointer !important;
  }

  .save:hover {
    opacity: 70%;
  }

</style>
