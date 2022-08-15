import { Module, MutationTree } from 'vuex'
import { SearchState } from '@/store/search/types'
import { RootState } from '@/store/types'
import * as SEARCH from './constants'
import { Ref } from 'vue'

const state: SearchState = {
  filmsGreedRef: null
}

const mutations: MutationTree<SearchState> = {
  [SEARCH.SEARCH_SET_GRID_REF]: (state, ref: Ref) => {
    state.filmsGreedRef = ref
  }
}

export const search: Module<SearchState, RootState> = {
  state,
  mutations
}
