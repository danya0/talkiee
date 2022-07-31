<template>
  <div
    class="hover:opacity-100 transition-opacity duration-[.3s] opacity-80 rounded-lg bg-gray-300 h-[500px] w-[425px]"
    :class="elementOrder === 0 ? 'opacity-100' : null"
    :style="{
      backgroundColor: color,
      transform: `scale(${1 - elementOrder * 0.1})`,
      zIndex: 3 - elementOrder,
      marginLeft: `-${100 * elementOrder}px`
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
    }
  }
})
</script>
