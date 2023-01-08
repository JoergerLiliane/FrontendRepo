import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocationView from "@/views/LocationView";
import UserView from "@/views/UserView";
import DeletedGuardian from "@/components/DeletedGuardian";
import DeletedUser from "@/components/DeletedUser";
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
    path: '/profile',
    name: 'Profile',
    component: UserView
  },

  {
    path: '/guardian',
    name: 'Guardian',
    component: GuardianView
  },

  {path: '/deletedUser',
    name: 'DeletedUser',
    component: DeletedUser
  },

  { path: '/userSettings',
    name: 'UpdateUser',
    component: UserSettings
  },

  {
    path: '/deletedGuardian',
    name: 'DeletedGuardian',
    component: DeletedGuardian
  },



  { path: '/guardianSettings',
    name: 'UpdateGuardian',
    component: GuardianSettings
  },

  {
    path: '/location',
    name: 'LocationView',
    component: LocationView
  },



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
