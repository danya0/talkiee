<template>
  <div class="flex items-center justify-center">
    <AppLogo />
    <AppSlider />
  </div>
  <section class="my-6">
    <div class="flex items-center justify-between">
      <h2 class="text-5xl font-light with-line pl-[60px]">
        Ищете что-то конкретное?
      </h2>
      <AppSearch />
    </div>
  </section>
  <FilmsGrid ref="filmsRef" class="mb-6" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSlider from '@/components/Slider/AppSlider.vue'
import FilmsGrid from '@/components/FilmsGrid.vue'
import AppSearch from '@/components/AppSearch.vue'

export default defineComponent({
  components: { AppSearch, FilmsGrid, AppSlider, AppLogo }
})
</script>

<style>
.with-line {
  position: relative;
}

.with-line:before {
  content: '';
  position: absolute;
  height: 2px;
  width: 50px;
  top: 50%;
  left: 0;
  transform: translateY(50%);
  @apply bg-green-700;
}
</style>
