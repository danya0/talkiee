<template>
  <div class="flex items-center justify-center">
    <AppLogo />
    <AppSlider />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSlider from '@/components/Slider/AppSlider.vue'

export default defineComponent({
  components: { AppSlider, AppLogo },
  data() {
    return {}
  }
})
</script>
