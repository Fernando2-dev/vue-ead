import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import MySupports from '../views/Supports/MySupports.vue'

const routes = [
  {
    path:'/campus',
    component: () => import('@/layouts/DefaultTemplate.vue'),
    children: [
      {
        path: 'minhas-duvidas',
        name: 'campus.my.supports',
        component: MySupports
      },
      {
        path: '',
        name: 'campus.home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
