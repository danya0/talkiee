import { Module } from 'vuex'
import { SearchState } from '@/store/search/types'
import { RootState } from '@/store/types'

const state: SearchState = {
  filmsGreedRef: null
}

export const search: Module<SearchState, RootState> = {
  state
}
