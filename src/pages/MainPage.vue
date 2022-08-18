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
      <AppSearch :random-film-name="randomFilmName" @search="search" />
    </div>
  </section>
  <FilmsGrid
    v-if="filmsArray"
    :films-array="filmsArray"
    :keyword="keyword"
    class="mb-6"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSlider from '@/components/Slider/AppSlider.vue'
import FilmsGrid from '@/components/FilmsGrid.vue'
import AppSearch from '@/components/AppSearch.vue'
import { SEARCH_FILMS } from '@/store/search/constants'

export default defineComponent({
  components: { AppSearch, FilmsGrid, AppSlider, AppLogo },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search(keyword: string) {
      this.$store.dispatch(SEARCH_FILMS, keyword)
      this.keyword = keyword
    }
  },
  computed: {
    filmsArray() {
      return this.$store.state.search.searchArray
    },
    randomFilmName() {
      return this.$store.getters.getRandomFilmName
    }
  }
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
