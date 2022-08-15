<template>
  <div class="flex items-center justify-center">
    <AppLogo />
    <AppSlider />
  </div>
  <FilmsGrid class="mt-[50px]" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSlider from '@/components/Slider/AppSlider.vue'
import FilmsGrid from '@/components/FilmsGrid.vue'

export default defineComponent({
  components: { FilmsGrid, AppSlider, AppLogo },
  data() {
    return {}
  }
})
</script>
