<template>
  <div
    class="group cursor-pointer h-full relative"
    :class="{ 'w-full': slideMode, 'w-[220px] ': !slideMode }"
  >
    <div
      class="relative rounded-lg w-full bg-green-700 overflow-hidden"
      :class="[slideMode ? 'h-full' : 'h-[90%] mb-1']"
    >
      <img
        :src="film.posterUrlPreview"
        :alt="filmName"
        class="transition-transform duration-[300ms] ease-in-out h-full w-full object-cover group-hover:scale-105 with-before"
      />
      <div
        class="transition-opacity duration-[300ms] h-full w-full absolute top-0 left-0 bg-black group-hover:opacity-60 opacity-0"
      />
      <div
        class="transition-transform duration-[300ms] group-hover:translate-y-0 absolute bottom-0 w-full p-2 flex items-center flex-col justify-between rounded-lg bg-black text-white translate-y-full"
        :class="[slideMode ? 'h-1/6' : 'h-1/4']"
      >
        <button>Смотреть</button>
        <button>Добавить в избранное</button>
      </div>
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

<script>
import { defineComponent } from 'vue'

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
      type: Object
    }
  },
  computed: {
    filmName() {
      return this.film.nameRu || this.film.nameEn
    }
  }
})
</script>
