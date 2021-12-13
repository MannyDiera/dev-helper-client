import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { publicPath } from '../../vue.config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('../views/Editor/Editor.vue')
  },
  {
    path: '/vulnerabilities',
    name: 'Vulnerabilities',
    component: () => import('../views/Vulnerabilities/Vulnerabilities.vue')
  },
  {
    path: '/forum',
    name: 'Forum',
    component: () => import('../views/Forum/Forum.vue')
  },
  {
    path: '/wiki',
    name: 'Wiki',
    component: () => import('../views/Wiki/Wiki.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: publicPath,
  routes
})

export default router
