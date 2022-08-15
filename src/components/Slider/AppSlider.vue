<template>
  <div class="px-3 mx-20">
    <div
      class="-mr-[200px] flex justify-center relative h-[500px] overflow-hidden w-[820px]"
    >
      <SliderCard
        ref="items"
        v-for="(color, index) in testColors"
        :key="color"
        :current-slide="currentSlide"
        :index="index"
        :element-order="index - currentSlide"
        :prev-slide="index < currentSlide"
      />
    </div>
    <div class="h-10 flex items-center">
      <button
        :disabled="currentSlide === 0"
        class="disabled:cursor-not-allowed h-full arrow arrow-prev mr-3"
        @click="prevSlide"
      ></button>
      <button
        :disabled="currentSlide === testColors.length - 3"
        class="disabled:cursor-not-allowed h-full arrow arrow-next"
        @click="nextSlide"
      ></button>
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

<style scoped>
.arrow {
  position: relative;
  height: 10px;
  width: 40px;
}

.arrow:before {
  transition: 0.3s ease-in-out;
  content: '';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  height: 4px;
  background: #8c8c8c;
}

.arrow:first-child:before {
  width: 30px;
  left: 2px;
}

.arrow:first-child:hover:before {
  width: 50px;
}
.arrow:first-child:hover + .arrow:before {
  width: 30px;
}

.arrow:last-child:before {
  opacity: 1;
  background: #15803d;
  right: 3px;
  width: 50px;
}

.arrow:first-child::after {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 12px solid #8c8c8c;
}

.arrow:last-child:after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #15803d;
}
</style>
