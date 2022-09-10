<template>
  <button
    class="rounded-xl border-2 border-green-700 px-3 py-2 transition-colors duration-200 hover:bg-gray-200"
  >
    <AppLoader v-if="loaded" />
    <slot v-else />
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import AppLoader from '@/components/AppLoader.vue'

export default defineComponent({
  components: { AppLoader },
  props: {
    loaded: Boolean
  }
})
</script>
