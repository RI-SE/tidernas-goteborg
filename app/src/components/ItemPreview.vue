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
          <div class="row q-gutter-xs q-ml-xs">
            <q-icon name="open_in_new" @click.stop="open" color="grey" size="sm" class="save"/>
            <q-icon :name="isSaved ? 'star' : 'star_border'" @click.stop="saveItem" :color="isSaved ? 'warning' : 'grey'" size="sm" class="save"/>
          </div>
        </div>
        <p v-if="meta.Källa" class="text-grey-8">
          {{meta.Källa}}
        </p>
        <div class="row">
          <MetaChip :field="meta.Datering" icon="schedule" />
          <!--MetaChip :field="meta.Typ" icon="attachment" /-->
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
      return this.savedItems.filter(i => i['Image-Link'] === this.item['Image-Link']).length > 0
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
    },
    open () {
      window.open(this.meta['Kringla-Url'], '_blank')
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
