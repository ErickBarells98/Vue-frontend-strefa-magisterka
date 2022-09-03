import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Contact from '../views/contact/Contact.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import NotFound from '../views/error/NotFound.vue'
import Profile from '../views/profile/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    }
  ]
})

export default router
