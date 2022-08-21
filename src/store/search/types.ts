import { FilmType } from '@/types/kinopoisk.types'

export interface SearchState {
  searchArray?: FilmType[]
  filmNamesArray: string[]
  isLoading: boolean
}

export interface SlidesState {
  slides: FilmType[]
  lastUpdate?: Date
  title: string
  isLoading: boolean
}
