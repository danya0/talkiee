import * as SEARCH from '@/store/actions/search'

export default {
  state: {
    filmsGridRef: null
  },
  mutations: {
    [SEARCH.SEARCH_SET_GRID_REF]: (state, payload) => {
      state.filmsGridRef = payload
    }
  }
}
