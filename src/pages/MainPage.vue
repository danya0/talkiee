<template>
  <AppContainer>
    <div class="flex items-center justify-center flex-col xl:flex-row">
      <AppLogo />
      <AppSlider :films="sliderFilms" :title="title" />
    </div>
    <section class="my-6">
      <div class="flex items-center justify-between flex-col md:flex-row">
        <h2
          class="text-2xl md:text-4xl xl:text-5xl font-normal md:font-light with-line pl-[60px] mb-2 mb:mb-0"
        >
          Ищете что-то конкретное?
        </h2>
        <AppSearch :random-film-name="randomFilmName" @search="search" />
      </div>
    </section>
    <div ref="gridLoaderWrap">
      <div
        v-if="filmsGreedLoading"
        class="w-full h-[420px] flex items-center justify-center"
      >
        <AppLoader />
      </div>
      <div class="mb-5 flex flex-col" v-else-if="filmsArray">
        <FilmsGrid :films-array="filmsArray" :keyword="keyword" class="mb-6">
          <template #not-find-text>
            <span class="text-8xl">😵</span>
            <span>
              По запросу
              <span class="text-green-700 font-bold">{{ keyword }}</span> ничего
              не найдено
            </span>
          </template>
        </FilmsGrid>
        <AppButton
          v-if="showNextPageButton"
          :loaded="loadNextPage"
          :disabled="loadNextPage"
          @click="goToNextPage"
          class="mx-auto"
        >
          Загрузить ещё
        </AppButton>
      </div>
    </div>
  </AppContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppLogo from '@/components/AppLogo.vue'
import AppSlider from '@/components/Slider/AppSlider.vue'
import FilmsGrid from '@/components/FilmsGrid.vue'
import AppSearch from '@/components/AppSearch.vue'
import { SearchTypes } from '@/store/search/search'
import AppLoader from '@/components/AppLoader.vue'
import AppButton from '@/components/UI/AppButton.vue'
import { SearchState } from '@/store/search/types'
import AppContainer from '@/components/AppContainer.vue'

export default defineComponent({
  components: {
    AppContainer,
    AppButton,
    AppLoader,
    AppSearch,
    FilmsGrid,
    AppSlider,
    AppLogo
  },
  data: () => {
    return {
      keyword: '',
      currentPage: 1 as number
    }
  },
  methods: {
    search(keyword: string) {
      this.$store.dispatch(SearchTypes.SEARCH_FILMS, keyword)
      this.keyword = keyword
      this.$nextTick(() => {
        ;(this.$refs.gridLoaderWrap as HTMLDivElement).scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        })
      })
    },
    goToNextPage() {
      this.$store.dispatch(SearchTypes.LOAD_NEXT_PAGE, {
        keyword: this.keyword,
        page: ++this.currentPage
      })
    }
  },
  mounted() {
    const keywordFromState = (this.$store.state.search as SearchState)
      .searchKeyword
    if (keywordFromState) {
      this.keyword = keywordFromState
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
    },
    totalPages() {
      return this.$store.state.search.totalPages
    },
    showNextPageButton() {
      return this.currentPage < this.totalPages && this.totalPages > 1
    },
    loadNextPage() {
      return this.$store.state.search.isLoadingNextPage
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
