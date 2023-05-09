import { FilmType, TrailerFilm } from '@/types/kinopoisk.types'
import { KinopoiskApi } from '@/services/kinopoiskApi'

export interface SearchState {
  searchKeyword: string
  kinopoiskApiInstance: KinopoiskApi
  searchArray?: FilmType[]
  filmNamesArray: string[]
  isLoading: boolean
  isLoadingNextPage: boolean
  totalPages?: number
  trailerFilmMap: { [key: number]: TrailerFilm[] }
}

export interface SlidesState {
  slides: FilmType[]
  lastUpdate?: Date
  title: string
  isLoading: boolean
}
