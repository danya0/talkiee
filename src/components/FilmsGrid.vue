<template>
  <div
    v-if="!filmsArray.length"
    class="my-20 text-2xl flex justify-center items-center"
  >
    <span class="text-8xl">😵</span>
    <span>
      По запросу
      <span class="text-green-700 font-bold">{{ keyword }}</span> ничего не
      найдено
    </span>
  </div>
  <div v-else>
    <p class="ml-6 mb-6 text-xl">
      Результат поиска по запросу:
      <span class="text-green-700 font-bold">{{ keyword }}</span>
    </p>
    <div
      class="flex flex-wrap grid-rows-[362px] justify-evenly gap-x-3 gap-y-6 lg:gap-y-12 mb-5"
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
    }
  }
}
</script>
