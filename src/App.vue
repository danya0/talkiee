<template>
  <div class="container mx-auto pt-40">
    <div class="flex items-center">
      <AppLogo />
      <AppSlider />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSlider from '@/components/Slider/AppSlider.vue'

export default defineComponent({
  components: { AppSlider, AppLogo },
  data: () => {
    return {
      counter: 1
    }
  }
})
</script>
