<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-warning q-pl-lg">
      <q-toolbar>

        <!--q-avatar icon="theaters" size="lg" color="white" text-color="primary"/-->
        <!--q-icon name="image" size="lg" /-->

        <q-toolbar-title class="text-bold">
          <router-link :to="{name: 'Home'}" class="text-warning">
            Tidernas Göteborg
          </router-link>
        </q-toolbar-title>
        <q-btn
          flat
          dense
          round
          icon="star"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <!--div>Quasar v{{ $q.version }}</div-->

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      side="right"
      class="bg-primary text-white"
    >
      <SavedItems />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <ItemSelected />

    <q-footer class="q-pa-xs q-pl-lg q-pr-lg">
      <MainFooter />
    </q-footer>

  </q-layout>
</template>

<script>
import MainFooter from './MainFooter.vue'
import SavedItems from 'components/SavedItems.vue'
import ItemSelected from 'components/ItemSelected'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    MainFooter,
    SavedItems,
    ItemSelected
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
