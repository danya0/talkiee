import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types'
import { search } from '@/store/search/search'

const store: StoreOptions<RootState> = {
  modules: {
    search
  }
}

export default new Vuex.Store<RootState>(store)
