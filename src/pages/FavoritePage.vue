<template>
  <AppContainer>
    <FilmsGrid just-grid :films-array="favoriteFilms">
      <template #not-find-text>
        <p class="text-xl flex items-center">
          <span>В избранном пусто</span>
          <span class="text-8xl">😱</span>
        </p>
      </template>
    </FilmsGrid>
  </AppContainer>
</template>

<script>
import { defineComponent } from 'vue'
import FilmsGrid from '@/components/FilmsGrid'
import { mapState } from 'vuex'
import AppContainer from '@/components/AppContainer.vue'

export default defineComponent({
  components: { AppContainer, FilmsGrid },
  computed: {
    ...mapState({
      favoriteFilms: (state) => state.favorite.favorite
    })
  }
})
</script>
