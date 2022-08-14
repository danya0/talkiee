import MainPage from '@/pages/MainPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{ path: '/', component: MainPage }]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
