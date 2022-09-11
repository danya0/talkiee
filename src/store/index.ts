import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types'
import { search } from '@/store/search/search'
import { slides } from '@/store/slides/slides'
import { favorite } from '@/store/favorite/favorite'

const store: StoreOptions<RootState> = {
  modules: {
    search,
    slides,
    favorite
  }
}

export default new Vuex.Store<RootState>(store)
