import { ActionTree, GetterTree, Module, MutationTree } from 'vuex'
import { SearchState } from '@/store/search/types'
import { RootState } from '@/store/types'
import * as SEARCH from './constants'
import { KinopoiskTypes } from '@/types/kinopoisk.types'
import { KinopoiskApi } from '@/api/kinopoiskApi'
import { Root } from 'postcss'
import { getRandomValueInRange } from '@/utils/utils'

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
  ]
}

const getters: GetterTree<SearchState, RootState> = {
  getRandomFilmName(state): string {
    return state.filmNamesArray[
      getRandomValueInRange(0, state.filmNamesArray.length - 1)
    ]
  }
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
  actions,
  getters
}
