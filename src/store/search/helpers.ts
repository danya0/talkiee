import { FilmType } from '@/types/kinopoisk.types'

export const findFavorite = (filmsArray: FilmType[]): FilmType[] => {
  if (!filmsArray || !filmsArray.length) {
    return []
  }
  const copy = [...filmsArray]
  const favoriteArray =
    JSON.parse(localStorage.getItem('favorite') as string) || []
  if (!favoriteArray.length) {
    return copy
  }
  return copy.map((film) => {
    for (let i = 0; i < favoriteArray.length; i++) {
      if (film.filmId === favoriteArray[i].filmId) {
        film.favorite = true
      }
    }
    return film
  })
}
