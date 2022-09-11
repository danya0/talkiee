import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { SlidesState } from '@/store/search/types'
import { RootState } from '@/store/types'
import { KinopoiskApi } from '@/services/kinopoiskApi'
import { FilmType, RandomFilms } from '@/types/kinopoisk.types'
import { FavoriteMutations } from '@/store/favorite/types'

export enum SlidesTypes {
  SET_NEW_LAST_UPDATE = 'SET_NEW_LAST_UPDATE',
  ADD_NEW_SLIDES = 'ADD_NEW_SLIDES',
  LOADING_TOGGLE = 'LOADING_TOGGLE',
  FAVORITE_TOGGLE = 'FAVORITE_TOGGLE'
}

const state: SlidesState = {
  slides: JSON.parse(localStorage.getItem('slides') as string)?.slides || [],
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
  },
  [SlidesTypes.FAVORITE_TOGGLE](
    state,
    payload: { film: FilmType; favorite: boolean }
  ) {
    const filmIndex = state.slides.indexOf(payload.film)
    state.slides[filmIndex].favorite = payload.favorite
    localStorage.setItem(
      'slides',
      JSON.stringify({
        slides: state.slides,
        title: state.title
      })
    )
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
  },
  [SlidesTypes.FAVORITE_TOGGLE](
    { commit },
    payload: { film: FilmType; favorite: boolean }
  ) {
    commit(SlidesTypes.FAVORITE_TOGGLE, payload)
    commit(`favorite/${FavoriteMutations.FAVORITE_TOGGLE}`, payload, {
      root: true
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
