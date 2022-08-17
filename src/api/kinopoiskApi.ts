import { KinopoiskTypes } from '@/types/kinopoisk.types'

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

  async searchByKeyword(
    keyword: string,
    page?: number
  ): Promise<KinopoiskTypes> {
    const removeExtraFields = (film: any): KinopoiskTypes => {
      return {
        nameRu: film.nameRu,
        nameEn: film.nameEn,
        posterUrlPreview: film.posterUrlPreview,
        year: film.year,
        filmId: film.filmId
      }
    }

    const stringPage = typeof page === 'number' ? String(page) : page
    console.log('this.apiKey -->', this.apiKey)
    return fetch(
      'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?' +
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
      .then((json) => json.films.map(removeExtraFields))
      .catch((err) => console.log(err))
  }
}
