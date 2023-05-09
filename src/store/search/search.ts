import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { SearchState } from '@/store/search/types'
import { RootState } from '@/store/types'
import { FilmType, SearchFilm, TrailerFilm } from '@/types/kinopoisk.types'
import { KinopoiskApi, KPApi } from '@/services/kinopoiskApi'
import { getRandomValueInRange } from '@/utils/utils'
import { findFavorite } from '@/store/search/helpers'

export enum SearchTypes {
  SEARCH_FILMS = 'SEARCH_FILMS',
  LOAD_NEXT_PAGE = 'LOAD_NEXT_PAGE',
  SEARCH_TRAILER = 'SEARCH_TRAILER',
  // MUTATIONS
  SET_FILMS = 'SET_FILMS',
  PUSH_FILMS = 'PUSH_FILMS',
  SET_TOTAL_PAGES = 'SET_TOTAL_PAGES',
  LOADED_ON = 'LOADED_ON',
  LOADED_OFF = 'LOADED_OFF',
  LOADING_NEXT_PAGE_TOGGLE = 'LOADING_NEXT_PAGE_TOGGLE'
}

const state: SearchState = {
  searchKeyword: '',
  kinopoiskApiInstance: new KinopoiskApi(),
  searchArray: undefined,
  totalPages: undefined,
  filmNamesArray: [
    'Остров проклятых',
    'Эйфория',
    'Адвокат дьявола',
    'Три секунды',
    'Выживший',
    'Матрица',
    'Линкольн для адвоката',
    'Интерстеллар',
    'Человек-паук: нет пути домой'
  ],
  isLoadingNextPage: false,
  isLoading: false,
  trailerFilmMap: {}
}

const getters: GetterTree<SearchState, RootState> = {
  getRandomFilmName(state): string {
    return state.filmNamesArray[
      getRandomValueInRange(0, state.filmNamesArray.length - 1)
    ]
  },
  getTrailerById(state) {
    return (id: number) => state.trailerFilmMap[id]
  }
}

const mutations: MutationTree<SearchState> = {
  [SearchTypes.SET_FILMS](
    state: SearchState,
    payload: { items: FilmType[]; keyword: string }
  ) {
    state.searchArray = findFavorite(payload.items)
    state.searchKeyword = payload.keyword
  },
  [SearchTypes.LOADED_ON](state: SearchState) {
    state.isLoading = true
  },
  [SearchTypes.LOADED_OFF](state: SearchState) {
    state.isLoading = false
  },
  [SearchTypes.SET_TOTAL_PAGES](state: SearchState, pagesCount: number) {
    state.totalPages = pagesCount
  },
  [SearchTypes.LOADING_NEXT_PAGE_TOGGLE](state: SearchState, value: boolean) {
    state.isLoadingNextPage = value
  },
  [SearchTypes.PUSH_FILMS](state: SearchState, payload: { items: FilmType[] }) {
    state.searchArray = [
      ...(state.searchArray as FilmType[]),
      ...findFavorite(payload.items)
    ]
  },
  setTrailer(state, payload: { filmId: number; trailers: TrailerFilm[] }) {
    state.trailerFilmMap[payload.filmId] = payload.trailers
  }
}

const actions: ActionTree<SearchState, RootState> = {
  [SearchTypes.SEARCH_FILMS]: ({ commit, state }, keyword: string) => {
    commit(SearchTypes.LOADED_ON)
    KPApi.getContext()
      .searchByKeyword(keyword)
      .then((res) => {
        commit(SearchTypes.LOADED_OFF)
        commit(SearchTypes.SET_FILMS, {
          items: (res as SearchFilm).films,
          keyword
        })
        commit(SearchTypes.SET_TOTAL_PAGES, (res as SearchFilm).totalPages)
      })
  },
  [SearchTypes.LOAD_NEXT_PAGE]: (
    { commit },
    payload: { keyword: string; page: number }
  ) => {
    commit(SearchTypes.LOADING_NEXT_PAGE_TOGGLE, true)
    KPApi.getContext()
      .searchByKeyword(payload.keyword, payload.page)
      .then((res) => {
        console.log('res -->', res)
        commit(SearchTypes.LOADING_NEXT_PAGE_TOGGLE, false)
        commit(SearchTypes.PUSH_FILMS, {
          items: (res as SearchFilm).films
        })
      })
  },
  [SearchTypes.SEARCH_TRAILER]: async (
    { commit },
    payload: { filmId: number }
  ) => {
    const trailers = await KPApi.getContext().getTrailer(payload.filmId)
    commit('setTrailer', { filmId: payload.filmId, trailers })
  }
}

export const search: Module<SearchState, RootState> = {
  state,
  mutations,
  actions,
  getters
}
