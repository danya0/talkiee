export type FilmType = {
  nameRu: string
  nameEn: string
  posterUrlPreview: string
  year: string
  filmId: number
  rating: number | string
  favorite: boolean
}

export type SearchFilm = {
  totalPages: number
  films: FilmType[]
}

export type RandomFilms = {
  title: string
  films: FilmType[]
}

export type TrailerFilm = {
  name: string
  site: string
  url: string
}
