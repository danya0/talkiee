import MainPage from '@/pages/MainPage.vue'
import MoviePage from '@/pages/MoviePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: MainPage },
  { path: '/movie/:id', component: MoviePage }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
