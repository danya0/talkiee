<template>
  <FilmsGrid just-grid :films-array="favoriteFilms">
    <template #not-find-text>
      <p class="text-xl flex items-center">
        <span>В избранном пусто</span>
        <span class="text-8xl">😱</span>
      </p>
    </template>
  </FilmsGrid>
</template>

<script>
import { defineComponent } from 'vue'
import FilmsGrid from '@/components/FilmsGrid'
import { mapState } from 'vuex'

export default defineComponent({
  components: { FilmsGrid },
  computed: {
    ...mapState({
      favoriteFilms: (state) => state.favorite.favorite
    })
  },
  mounted() {
    console.log('this.favoriteFilms -->', this.favoriteFilms)
  }
})
</script>
