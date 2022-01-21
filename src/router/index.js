import Vue from 'vue'
import VueRouter from 'vue-router'
import { getAuth } from "firebase/auth";

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'
import InvoiceView from "@/views/InvoiceView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: 'login',
  },
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign',
    name: 'SignUp',
    component: SignUp,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceView,
    meta: {
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router
