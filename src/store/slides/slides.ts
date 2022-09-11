import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { SlidesState } from '@/store/search/types'
import { RootState } from '@/store/types'
import { KinopoiskApi } from '@/services/kinopoiskApi'
import { RandomFilms } from '@/types/kinopoisk.types'
import { findFavorite } from '@/store/search/helpers'

export enum SlidesTypes {
  SET_NEW_LAST_UPDATE = 'SET_NEW_LAST_UPDATE',
  ADD_NEW_SLIDES = 'ADD_NEW_SLIDES',
  LOADING_TOGGLE = 'LOADING_TOGGLE'
}

const state: SlidesState = {
  slides:
    findFavorite(
      JSON.parse(localStorage.getItem('slides') as string)?.slides
    ) || [],
  title: JSON.parse(localStorage.getItem('slides') as string)?.title || '',
  lastUpdate: localStorage.getItem('lastUpdate')
    ? new Date(+(localStorage.getItem('lastUpdate') as string))
    : undefined,
  isLoading: false
}

const getters: GetterTree<SlidesState, RootState> = {
  checkIfMoreDayHasPassed(state): boolean {
    return (
      (state.lastUpdate as Date).getTime() + 86400000 <= new Date().getTime()
    )
  }
}

const mutations: MutationTree<SlidesState> = {
  [SlidesTypes.SET_NEW_LAST_UPDATE](state: SlidesState) {
    const date = new Date()
    state.lastUpdate = date
    localStorage.setItem('lastUpdate', date.getTime().toString())
  },
  [SlidesTypes.ADD_NEW_SLIDES](state: SlidesState, payload: RandomFilms) {
    state.slides = payload.films
    state.title = payload.title
    localStorage.setItem(
      'slides',
      JSON.stringify({
        slides: payload.films,
        title: payload.title
      })
    )
  },
  [SlidesTypes.LOADING_TOGGLE](state: SlidesState, value: boolean) {
    state.isLoading = value
  }
}

const actions: ActionTree<SlidesState, RootState> = {
  [SlidesTypes.ADD_NEW_SLIDES]({ commit }) {
    commit(SlidesTypes.LOADING_TOGGLE, true)
    new KinopoiskApi().getRandomFilmsFromTop().then((res) => {
      console.log('res -->', res)
      commit(SlidesTypes.ADD_NEW_SLIDES, res)
      commit(SlidesTypes.LOADING_TOGGLE, false)
    })
  }
}

export const slides: Module<SlidesState, RootState> = {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
}
