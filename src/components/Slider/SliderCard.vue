<template>
  <div
    class="hover:opacity-100 transition-all duration-[.3s] opacity-80 rounded-lg bg-gray-300 h-[500px] absolute left-0"
    :class="{
      ['opacity-100']: mainSlide
    }"
    :style="{
      width: width + 'px',
      zIndex: 3 - elementOrder,
      left: isPrevSlide
        ? '-' + width * 1.1 + 'px'
        : Math.round(width * 0.5 * (index - currentSlide)) + 'px',
      transform: isPrevSlide
        ? `scale(1.1)`
        : `scale(${1 - (index - currentSlide) * 0.1})`,
      opacity: index - currentSlide - 2 > 0 || isPrevSlide ? '0' : null
    }"
  >
    <FilmComponent no-title slide-mode :film="film" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import FilmComponent from '@/components/FilmComponent'

export default defineComponent({
  components: { FilmComponent },
  props: {
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
    },
    film: {
      type: Object
    }
  },
  data() {
    return {
      width: 350
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
