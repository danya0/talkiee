<template>
  <div class="px-3 mx-20">
    <div class="flex justify-center">
      <SliderCard
        ref="items"
        v-for="(color, index) in testColors"
        v-show="index - 3 < currentSlide"
        :key="color"
        :color="color"
        :element-order="index"
      />
    </div>
    <div class="h-10 flex items-center">
      <button class="mr-2">Назад</button>
      <button>Вперед</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SliderCard from '@/components/Slider/SliderCard.vue'

export default defineComponent({
  components: { SliderCard },
  data() {
    return {
      testColors: ['red', 'blue', 'gray', 'plum'] as string[],
      currentSlide: 0 as number
    }
  },
  mounted() {
    console.log('colors:', this.$refs.items)
  }
})
</script>
