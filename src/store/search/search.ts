import { Module, MutationTree } from 'vuex'
import { SearchState } from '@/store/search/types'
import { RootState } from '@/store/types'

const state: SearchState = {
  filmsGreedRef: null
}

const mutations: MutationTree<SearchState> = {}

export const search: Module<SearchState, RootState> = {
  state,
  mutations
}
