<template>
  <label
    class="group cursor-pointer h-full relative"
    :class="{ 'w-full': slideMode, 'w-[220px] ': !slideMode }"
    @mouseenter="mouseHere = true"
    @mouseleave="mouseLeave"
    @click="showFilmOrMenu"
  >
    <div
      class="relative rounded-lg w-full bg-green-700 overflow-hidden"
      :class="[slideMode ? 'h-full' : 'h-[90%] mb-1']"
    >
      <input class="peer hidden" v-if="isMobile" type="radio" name="filmCard" />
      <img
        :src="film.posterUrlPreview"
        :alt="filmName"
        class="transition-transform min-h-[330px] duration-[300ms] ease-in-out h-full w-full object-cover with-before peer-checked:scale-105"
        :class="{ 'group-hover:scale-105': !isMobile }"
      />
      <div
        class="transition-opacity duration-[300ms] h-full w-full absolute top-0 left-0 bg-black opacity-0 peer-checked:opacity-60"
        :class="{ 'group-hover:opacity-60': !isMobile }"
      />
      <div
        @click.stop
        class="transition-transform duration-[300ms] h-auto gap-y-2 absolute bottom-0 w-full px-2 py-3 flex items-center flex-col justify-between rounded-lg bg-black text-white translate-y-full peer-checked:translate-y-0"
        :class="{
          'group-hover:translate-y-0': !isMobile
        }"
      >
        <button v-if="isMobile" @click="goToFilm">Смотреть онлайн</button>
        <button @click="toggleFavorite">
          {{ !favorite ? 'Добавить в избранное' : 'Удалить из избранного' }}
        </button>
        <button @click="getTrailer">Список трейлеров</button>
      </div>
      <transition
        enter-from-class="translate-y-full"
        enter-to-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <div
          v-if="showTrailer && mouseHere"
          class="absolute max-h-full overflow-y-auto bottom-0 left-0 w-full px-2 py-3 bg-green-700 text-white flex flex-col items-center text-center gap-y-2 transition-transform duration-300"
          @click.stop
        >
          <template v-if="trailers.length">
            <a
              v-for="trailer in trailers"
              target="_blank"
              :key="trailer.url"
              :href="trailer.url"
            >
              {{ trailer.name }}
            </a>
          </template>
          <p class="text-center py-1" v-else>
            По данному запросу не нашлось трейлеров :(
          </p>
        </div>
      </transition>
    </div>
    <p v-if="!noTitle" class="text-lg truncate">
      {{ filmName }}
    </p>
    <div
      v-if="film.rating"
      class="absolute top-[10px] right-[10px] bg-white rounded-lg p-2"
    >
      ⭐️ {{ film.rating }}
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FavoriteMutations } from '@/store/favorite/types'
import { mapActions, mapMutations } from 'vuex'
import { FilmType, TrailerFilm } from '@/types/kinopoisk.types'
import { SearchTypes } from '@/store/search/search'
import { isMobile } from '@/utils/utils'

export default defineComponent({
  props: {
    noTitle: {
      type: Boolean,
      default: false
    },
    slideMode: {
      type: Boolean,
      default: false
    },
    film: {
      type: Object as PropType<FilmType>,
      required: true
    }
  },
  data(props) {
    return {
      showTrailer: false as boolean,
      favorite: props.film.favorite as boolean,
      mouseHere: false as boolean
    }
  },
  computed: {
    isMobile,
    filmName() {
      return this.film.nameRu || this.film.nameEn
    },
    trailers(): TrailerFilm[] {
      return this.$store.getters['getTrailerById'](this.film.filmId)
    }
  },
  methods: {
    showFilmOrMenu() {
      if (isMobile()) return
      this.goToFilm()
    },
    goToFilm() {
      this.$router.push({
        path: `/movie/${this.film.filmId}`,
        query: { filmName: this.filmName }
      })
    },
    ...mapMutations('favorite', [FavoriteMutations.FAVORITE_TOGGLE]),
    toggleFavorite() {
      const favoriteObject = {
        film: this.film,
        favorite: !this.favorite
      }
      this[FavoriteMutations.FAVORITE_TOGGLE](favoriteObject)
      this.favorite = !this.favorite
    },
    mouseLeave() {
      this.mouseHere = false
      this.showTrailer = false
    },
    async getTrailer() {
      if (!this.trailers) {
        await this.$store.dispatch(SearchTypes.SEARCH_TRAILER, {
          filmId: this.film.filmId
        })
      }
      this.showTrailer = true
    }
  }
})
</script>
