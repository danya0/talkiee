import { FilmType } from '@/types/kinopoisk.types'
import { KinopoiskApi } from '@/services/kinopoiskApi'

export interface SearchState {
  searchKeyword: string
  kinopoiskApiInstance: KinopoiskApi
  searchArray?: FilmType[]
  filmNamesArray: string[]
  isLoading: boolean
  isLoadingNextPage: boolean
  totalPages?: number
}

export interface SlidesState {
  slides: FilmType[]
  lastUpdate?: Date
  title: string
  isLoading: boolean
}
