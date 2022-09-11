import { GetterTree, Module, MutationTree } from 'vuex'
import { FavoriteMutations, FavoriteState } from '@/store/favorite/types'
import { RootState } from '@/store/types'
import { FilmType } from '@/types/kinopoisk.types'

const state: FavoriteState = {
  favorite: JSON.parse(localStorage.getItem('favorite') as string) || []
}

const mutations: MutationTree<FavoriteState> = {
  [FavoriteMutations.FAVORITE_TOGGLE](
    state,
    payload: { film: FilmType; favorite: boolean }
  ) {
    if (payload.favorite) {
      payload.film.favorite = true
      state.favorite.push(payload.film)
    } else {
      payload.film.favorite = false
      const filmIndex = state.favorite.indexOf(payload.film)
      state.favorite.splice(filmIndex, 1)
    }
    localStorage.setItem('favorite', JSON.stringify(state.favorite))
  }
}

export const favorite: Module<FavoriteState, RootState> = {
  state,
  mutations,
  namespaced: true
}
