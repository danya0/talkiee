import { ActionTree, Module, MutationTree } from 'vuex'
import { SearchState } from '@/store/search/types'
import { RootState } from '@/store/types'
import * as SEARCH from './constants'
import { KinopoiskTypes } from '@/types/kinopoisk.types'
import { KinopoiskApi } from '@/api/kinopoiskApi'

const state: SearchState = {
  searchArray: undefined
}

const mutations: MutationTree<SearchState> = {
  [SEARCH.SEARCH_SET_FILMS](state: SearchState, filmsArray: KinopoiskTypes[]) {
    state.searchArray = filmsArray
  }
}

const actions: ActionTree<SearchState, RootState> = {
  [SEARCH.SEARCH_FILMS]: ({ commit }, keyword: string) => {
    new KinopoiskApi().searchByKeyword(keyword).then((res) => {
      console.log('res -->', res)
      commit(SEARCH.SEARCH_SET_FILMS, res)
    })
  }
}

export const search: Module<SearchState, RootState> = {
  state,
  mutations,
  actions
}
