<template>
  <div class="container mx-auto">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  components: { NavBar },
  data: () => {
    return {
      counter: 1
    }
  }
})
</script>
