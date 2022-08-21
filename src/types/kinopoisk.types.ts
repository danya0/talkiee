export type FilmType = {
  nameRu: string
  nameEn: string
  posterUrlPreview: string
  year: string
  filmId: number
}

export type RandomFilms = {
  title: string
  films: FilmType[]
}
