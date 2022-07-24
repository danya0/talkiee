<template>
  <div class="container mx-auto">
    <AppLogo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/AppLogo.vue'

export default defineComponent({
  components: { AppLogo },
  data: () => {
    return {
      counter: 1
    }
  }
})
</script>
