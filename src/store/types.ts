import { SearchState, SlidesState } from '@/store/search/types'
import { FavoriteState } from '@/store/favorite/types'

export interface RootState {
  search: SearchState
  slides: SlidesState
  favorite: FavoriteState
}
