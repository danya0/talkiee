<template>
  <button
    class="rounded-xl border-2 border-green-700 px-3 py-2 transition-colors duration-200 hover:bg-gray-200"
  >
    <AppLoader v-if="loaded" />
    <slot v-else />
  </button>
</template>
<script>
import AppLoader from '@/components/AppLoader'
export default {
  components: { AppLoader },
  props: {
    loaded: Boolean
  }
}
</script>
