<template>
  <div class="box-border w-full px-[30px]">
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { SlidesTypes } from '@/store/slides/slides'

export default defineComponent({
  components: { NavBar },
  data: () => {
    return {
      counter: 1
    }
  },
  mounted() {
    if (!this.$store.state.slides.lastUpdate) {
      this.$store.commit(`slides/${SlidesTypes.SET_NEW_LAST_UPDATE}`)
      this.$store.dispatch(`slides/${SlidesTypes.ADD_NEW_SLIDES}`)
    }
  }
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>
