import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Upcoming from '@/views/Upcoming.vue';
import New from '@/views/New.vue';
import Archive from '@/views/Archive.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: '/overview',
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/upcoming',
    name: 'Upcoming',
    component: Upcoming,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/new',
    name: 'New',
    component: New,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive,
    meta: {
      requiresAuth: true,
    },
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresVisitor)) {
    if (store.state.isLoggedIn) {
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.state.isLoggedIn) {
      next({
        path: '/login',
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
