import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocationView from "@/views/LocationView";
import UserView from "@/views/UserView";
import DeleteUser from "@/components/DeleteUser";
import UserSettings from "@/components/UserSettings";
import GuardianSettings from "@/components/GuardianSettings";
import GuardianView from "@/views/GuardianView";

import RegistrationUserView from "@/views/RegistrationUserView";
import LoginUserView from "@/views/LoginUserView";





const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/registration',
    name: 'Registration',
    component: RegistrationUserView

  },

  {
    path: '/login',
    name: 'Login',
    component: LoginUserView

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


  {
    path: '/delete',
    name: 'DeleteUser',
    component: DeleteUser
  },

  { path: '/UserSettings',
    name: 'UpdateUser',
    component: UserSettings
  },


  { path: '/guardianSettings',
    name: 'UpdateGuardian',
    component: GuardianSettings
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
