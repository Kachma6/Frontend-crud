import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import userView from "@/views/Users/UserView.vue";
import userCreateView from "@/views/Users/UserCreateView.vue";
import userEditView from "@/views/Users/UserEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: userView
    },
    {
      path: '/user/create',
      name: 'userCreate',
      component: userCreateView
    },
    {
      path: '/user/:id/edit',
      name: 'userEdit',
      component: userEditView
    },
  ]
})

export default router
