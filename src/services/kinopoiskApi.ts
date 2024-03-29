import {
  FilmType,
  RandomFilms,
  SearchFilm,
  TrailerFilm
} from '@/types/kinopoisk.types'
import { getRandomValueInRange } from '@/utils/utils'

enum AviableFilmsTypes {
  TOP_250_BEST_FILMS,
  TOP_100_POPULAR_FILMS
}

enum AviableFilmsTypesNames {
  'Топ фильмов',
  'Популярные фильмы'
}

export class KinopoiskApi {
  /*countries: Array(1)
  0: {country: 'США'}
  length: 1
      [[Prototype]]: Array(0)
  description: "Локи, сводный брат Тора, возвращается, и в этот раз он не один. Земля оказывается на грани порабощения, и только лучшие из лучших могут спасти человечество. Глава международной организации Щ.И.Т. Ник Фьюри собирает выдающихся поборников справедливости и добра, чтобы отразить атаку. Под предводительством Капитана Америки Железный Человек, Тор, Невероятный Халк, Соколиный Глаз и Чёрная Вдова вступают в войну с захватчиком."
  filmId: 263531
  filmLength: "02:17"
  genres: Array(4)
  0: {genre: 'боевик'}
  1: {genre: 'приключения'}
  2: {genre: 'фантастика'}
  3: {genre: 'фэнтези'}
  length: 4
      [[Prototype]]: Array(0)
  nameEn: "The Avengers"
  nameRu: "Мстители"
  posterUrl: "https://kinopoiskapiunofficial.tech/images/posters/kp/263531.jpg"
  posterUrlPreview: "https://kinopoiskapiunofficial.tech/images/posters/kp_small/263531.jpg"
  rating: "7.9"
  ratingVoteCount: 575947
  type: "FILM"
  year: "2012"*/

  private apiKey = '72075446-58b7-4b51-a057-afce97d78d33'

  removeExtraFields(film: any): FilmType {
    return {
      nameRu: film.nameRu,
      nameEn: film.nameEn,
      posterUrlPreview: film.posterUrlPreview,
      year: film.year,
      filmId: film.kinopoiskId || film.filmId,
      rating: film.ratingKinopoisk || film.rating,
      favorite: false
    }
  }

  async searchByKeyword(
    keyword: string,
    page?: number
  ): Promise<SearchFilm | void> {
    const stringPage = typeof page === 'number' ? String(page) : page
    console.log(
      'запрос',
      'https://kinopoiskapiunofficial.tech/api/v2.2/films?' +
        new URLSearchParams({
          keyword: keyword,
          page: stringPage ? stringPage : '1'
        })
    )
    return fetch(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films?' +
        new URLSearchParams({
          keyword: keyword,
          page: stringPage ? stringPage : '1'
        }),
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json'
        }
      }
    )
      .then((res) => res.json())
      .then((json) => {
        return {
          totalPages: json.totalPages,
          films: json.items.map(this.removeExtraFields)
        }
      })
      .catch((err) => console.log(err))
  }

  async getRandomFilmsFromTop(): Promise<RandomFilms | void> {
    const pagesCount = 13
    const randomRange = getRandomValueInRange(0, 1)
    const randomType = AviableFilmsTypes[randomRange]
    const randomPage = getRandomValueInRange(0, pagesCount).toString()
    return fetch(
      'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?' +
        new URLSearchParams({
          type: randomType,
          page: randomPage
        }),
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json'
        }
      }
    )
      .then((res) => res.json())
      .then((json) => {
        return {
          films: json.films
            .map(this.removeExtraFields)
            .sort(() => Math.random() - 0.5),
          title: AviableFilmsTypesNames[randomRange]
        }
      })
      .catch((err) => console.log(err))
  }

  async getTrailer(filmId: number): Promise<TrailerFilm[]> {
    return fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}/videos`,
      {
        method: 'GET',
        headers: {
          'X-API-KEY': this.apiKey,
          'Content-Type': 'application/json'
        }
      }
    )
      .then((res) => res.json())
      .then((json) => json.items)
  }
}

export class KPApi {
  private static context: null | KinopoiskApi
  public static getContext() {
    if (!this.context) {
      this.context = new KinopoiskApi()
    }
    return this.context
  }
}
