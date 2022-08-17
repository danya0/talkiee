<template>
  <div>
    <p class="ml-6 mb-6 text-xl">
      Результат поиска по запросу:
      <span class="text-green-700 font-bold">{{ keyword }}</span>
    </p>
    <div class="grid grid-cols-6 gap-y-12 place-items-center mb-5">
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
