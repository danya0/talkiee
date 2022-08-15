<template>
  <div>
    <p class="mb-4 text-xl">
      Результат поиска по запросу:
      <span class="text-green-700 font-bold">UEUEU</span>
    </p>
    <div ref="filmsGreed" class="grid grid-cols-6 gap-y-8 place-items-center">
      <FilmComponent v-for="item in 8" :key="item" />
    </div>
  </div>
</template>
<script>
import FilmComponent from '@/components/FilmComponent'
export default {
  components: { FilmComponent }
}
</script>
