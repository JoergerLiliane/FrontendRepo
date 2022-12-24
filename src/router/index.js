import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LocationView from "@/views/LocationView";
import UserView from "@/views/UserView";
import GuardianView from "@/views/GuardianView";



const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView

  },
  {
    path: '/login',
    name: 'LoginView',
    component: HomeView
  },

  {
    path: '/location',
    name: 'LocationView',
    component: LocationView
  },

  {
    path: '/profile',
    name: 'Profile',
    component: UserView
  },

  {
    path: '/guardian',
    name: 'Guardian',
    component: GuardianView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
