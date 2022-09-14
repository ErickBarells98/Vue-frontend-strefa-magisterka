import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Contact from '../views/contact/Contact.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import NotFound from '../views/error/NotFound.vue'
import Profile from '../views/profile/Profile.vue'
import AvailableCourses from '../views/availableCourses/AvailableCourses.vue'
import CourseDetails from '../views/course/CourseDetails.vue'
import LaboratoriesDetails from '../views/laboratories/LaboratoriesDetails.vue'
import LecturesDetails from '../views/lectures/LecturesDetails.vue'
import MyCourse from '../views/myCourses/myCourses.vue'

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
      path: '/course',
      name: 'Course',
      component: AvailableCourses
    },
    {
      path: '/course/:id',
      name: 'CourseDetails',
      component: CourseDetails,
      props: true
    },
    {
      path: '/course/laboratories/:id',
      name: 'LaboratoriesDetails',
      component: LaboratoriesDetails,
      props: true
    },
    {
      path: '/course/lectures/:id',
      name: 'LecturesDetails',
      component: LecturesDetails,
      props: true
    },
    {
      path: '/mycourses',
      name: 'MyCourses',
      component: MyCourse
    },
    {
      path: "/:catchAll(.*)",
      component: NotFound,
    }
  ]
})

export default router
