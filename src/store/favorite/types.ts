import { FilmType } from '@/types/kinopoisk.types'

export interface FavoriteState {
  favorite: FilmType[]
}

export enum FavoriteMutations {
  FAVORITE_TOGGLE = 'FAVORITE_TOGGLE'
}
