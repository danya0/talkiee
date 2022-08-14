<template>
  <div class="px-3 mx-20">
    <div
      class="flex justify-center relative h-[500px] overflow-hidden w-[820px]"
    >
      <SliderCard
        ref="items"
        v-for="(color, index) in testColors"
        :key="color"
        :color="color"
        :current-slide="currentSlide"
        :index="index"
        :element-order="index - currentSlide"
        :prev-slide="index < currentSlide"
      />
    </div>
    <div class="h-10 flex items-center">
      <button class="mr-2" @click="prevSlide">Назад</button>
      <button @click="nextSlide">Вперед</button>
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
      testColors: [
        'red',
        'blue',
        'gray',
        'plum',
        'green',
        'lightgray'
      ] as string[],
      currentSlide: 0 as number
    }
  },
  mounted() {
    console.log('colors:', this.$refs.items)
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.testColors.length - 3) {
        this.currentSlide++
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    }
  }
})
</script>
