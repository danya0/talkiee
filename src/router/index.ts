import MainPage from '@/pages/MainPage.vue'
import MoviePage from '@/pages/MoviePage.vue'
import FavoritePage from '@/pages/FavoritePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: MainPage, meta: { keepAlive: true } },
  { path: '/movie/:id', component: MoviePage },
  { path: '/favorite', component: FavoritePage }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
