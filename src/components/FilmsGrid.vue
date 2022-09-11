<template>
  <div
    v-if="!filmsArray.length"
    class="my-20 text-2xl flex justify-center items-center"
  >
    <slot name="not-find-text" />
  </div>
  <div v-else>
    <p class="ml-6 mb-6 text-xl" v-if="!justGrid">
      Результат поиска по запросу:
      <span class="text-green-700 font-bold">{{ keyword }}</span>
    </p>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 grid-rows-[362px] place-items-center gap-x-3 gap-y-6 lg:gap-y-12 mb-5"
    >
      <FilmComponent v-for="item in filmsArray" :key="item" :film="item" />
    </div>
  </div>
</template>
<script>
import FilmComponent from '@/components/FilmComponent'
export default {
  components: { FilmComponent },
  props: {
    filmsArray: {
      type: Array,
      default: () => []
    },
    keyword: {
      type: String,
      default: ''
    },
    justGrid: {
      type: Boolean,
      default: false
    }
  }
}
</script>
