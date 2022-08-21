<template>
  <div class="flex items-center justify-center">
    <AppLogo />
    <AppSlider :films="sliderFilms" :title="title" />
  </div>
  <section class="my-6">
    <div class="flex items-center justify-between">
      <h2 class="text-5xl font-light with-line pl-[60px]">
        Ищете что-то конкретное?
      </h2>
      <AppSearch :random-film-name="randomFilmName" @search="search" />
    </div>
  </section>
  <div
    v-if="filmsGreedLoading"
    ref="loader"
    class="w-full flex justify-center my-40"
  >
    <AppLoader />
  </div>
  <div v-else-if="filmsArray" ref="filmGreed">
    <FilmsGrid :films-array="filmsArray" :keyword="keyword" class="mb-6" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSlider from '@/components/Slider/AppSlider.vue'
import FilmsGrid from '@/components/FilmsGrid.vue'
import AppSearch from '@/components/AppSearch.vue'
import { SearchTypes } from '@/store/search/search'
import AppLoader from '@/components/AppLoader.vue'

export default defineComponent({
  components: { AppLoader, AppSearch, FilmsGrid, AppSlider, AppLogo },
  data() {
    return {
      keyword: ''
    }
  },
  methods: {
    search(keyword: string) {
      this.$store.dispatch(SearchTypes.SEARCH_FILMS, keyword)
      this.keyword = keyword
    }
  },
  watch: {
    filmsGreedLoading(newVal) {
      if (!newVal) {
        this.$nextTick(() => {
          console.log('this.$refs.filmGreed -->', this.$refs.filmGreed)
          ;(this.$refs.filmGreed as HTMLDivElement).scrollIntoView({
            block: 'start',
            behavior: 'smooth'
          })
        })
      }
    }
  },
  computed: {
    filmsArray() {
      return this.$store.state.search.searchArray
    },
    randomFilmName() {
      return this.$store.getters.getRandomFilmName
    },
    filmsGreedLoading() {
      return this.$store.state.search.isLoading
    },
    sliderFilms() {
      return this.$store.state.slides.slides
    },
    title() {
      return this.$store.state.slides.title
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
