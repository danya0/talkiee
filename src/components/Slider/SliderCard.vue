<template>
  <div
    class="hover:opacity-100 transition-all duration-[.3s] opacity-80 rounded-lg bg-gray-300 h-[500px] absolute left-0"
    :class="{
      [`w-[${width}px]`]: true,
      ['opacity-100']: mainSlide
    }"
    :style="{
      backgroundColor: color,
      zIndex: 3 - elementOrder,
      left: isPrevSlide
        ? '-' + width + 'px'
        : Math.round(width * 0.5 * (index - currentSlide)) + 'px',
      transform: `scale(${1 - (index - currentSlide) * 0.1})`,
      opacity: index - currentSlide - 2 > 0 || isPrevSlide ? '0' : null
    }"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String
    },
    elementOrder: {
      type: Number || String
    },
    mainSlider: {
      type: Boolean,
      require: true
    },
    prevSlide: {
      type: Boolean
    },
    currentSlide: {
      type: Number
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      width: 425
    }
  },
  computed: {
    isPrevSlide() {
      return this.index < this.currentSlide
    },
    mainSlide() {
      return this.index === this.currentSlide
    }
  }
})
</script>
