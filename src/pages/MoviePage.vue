<template>
  <div class="absolute left-0 top-0 w-full h-full bg-reg-200 flex flex-col">
    <div
      ref="wrap"
      style="width: 100%; flex-grow: 1"
      id="yohoho"
      :data-kinopoisk="filmId"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    filmId() {
      return this.$route.params.id
    },
    filmName() {
      return this.$route.query.filmName
    }
  },
  mounted() {
    const plugin = document.createElement('script')
    plugin.setAttribute('src', '//yohoho.cc/yo.js')
    plugin.async = true
    document.head.appendChild(plugin)

    this.$nextTick(() => {
      this.$refs.wrap.style.position = 'absolute'
      this.$refs.wrap.style.left = '0'
      this.$refs.wrap.style.top = '0'
    })
  }
})
</script>
