<template>
  <div
    class="group cursor-pointer h-full relative"
    :class="{ 'w-full': slideMode, 'w-[220px] ': !slideMode }"
    @mouseenter="mouseHere = true"
    @mouseleave="mouseLeave"
    @click="goToFilm"
  >
    <div
      class="relative rounded-lg w-full bg-green-700 overflow-hidden"
      :class="[slideMode ? 'h-full' : 'h-[90%] mb-1']"
    >
      <img
        :src="film.posterUrlPreview"
        :alt="filmName"
        class="transition-transform min-h-[330px] duration-[300ms] ease-in-out h-full w-full object-cover group-hover:scale-105 with-before"
      />
      <div
        class="transition-opacity duration-[300ms] h-full w-full absolute top-0 left-0 bg-black group-hover:opacity-60 opacity-0"
      />
      <div
        @click.stop
        class="transition-transform duration-[300ms] h-auto gap-y-2 group-hover:translate-y-0 absolute bottom-0 w-full px-2 py-3 flex items-center flex-col justify-between rounded-lg bg-black text-white translate-y-full"
      >
        <button @click="showTrailer = true">Смотреть трейлер</button>
        <button @click="toggleFavorite">
          {{ !favorite ? 'Добавить в избранное' : 'Удалить из избранного' }}
        </button>
      </div>
      <transition
        enter-from-class="translate-y-full"
        enter-to-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <div
          v-if="showTrailer && mouseHere"
          class="absolute bottom-0 left-0 w-full px-2 py-3 bg-green-700 text-white flex flex-col items-center gap-y-2 transition-transform duration-300"
          @click.stop
        >
          <button>YouTube</button>
          <button>Кинопоиск</button>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { FavoriteMutations } from '@/store/favorite/types'
import { mapMutations } from 'vuex'
import { FilmType } from '@/types/kinopoisk.types'

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
    filmName() {
      return this.film.nameRu || this.film.nameEn
    }
  },
  methods: {
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
    }
  }
})
</script>
