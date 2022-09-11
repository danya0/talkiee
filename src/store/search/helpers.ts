import { FilmType } from '@/types/kinopoisk.types'

export const findFavorite = (
  filmsArray: FilmType[],
  favoriteArray: FilmType[]
): FilmType[] => {
  const copy = [...filmsArray]
  return copy.map((film) => {
    for (let i = 0; i < favoriteArray.length; i++) {
      if (film.filmId === favoriteArray[i].filmId) {
        film.favorite = true
      }
    }
    return film
  })
}
