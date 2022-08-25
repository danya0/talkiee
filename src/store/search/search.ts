import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { SearchState } from '@/store/search/types'
import { RootState } from '@/store/types'
import { FilmType } from '@/types/kinopoisk.types'
import { KinopoiskApi } from '@/services/kinopoiskApi'
import { getRandomValueInRange } from '@/utils/utils'

export enum SearchTypes {
  SEARCH_FILMS = 'SEARCH_FILMS',
  SET_FILMS = 'SET_FILMS',
  LOADED_ON = 'LOADED_ON',
  LOADED_OFF = 'LOADED_OFF'
}

const state: SearchState = {
  searchArray: undefined,
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
  isLoading: false
}

const getters: GetterTree<SearchState, RootState> = {
  getRandomFilmName(state): string {
    return state.filmNamesArray[
      getRandomValueInRange(0, state.filmNamesArray.length - 1)
    ]
  }
}

const mutations: MutationTree<SearchState> = {
  [SearchTypes.SET_FILMS](state: SearchState, filmsArray: FilmType[]) {
    state.searchArray = filmsArray
  },
  [SearchTypes.LOADED_ON](state: SearchState) {
    state.isLoading = true
  },
  [SearchTypes.LOADED_OFF](state: SearchState) {
    state.isLoading = false
  }
}

const actions: ActionTree<SearchState, RootState> = {
  [SearchTypes.SEARCH_FILMS]: ({ commit }, keyword: string) => {
    commit(SearchTypes.LOADED_ON)
    new KinopoiskApi().searchByKeyword(keyword).then((res) => {
      console.log('res -->', res)
      commit(SearchTypes.LOADED_OFF)
      commit(SearchTypes.SET_FILMS, res)
    })
  }
}

export const search: Module<SearchState, RootState> = {
  state,
  mutations,
  actions,
  getters
}
