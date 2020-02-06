import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/gerbi',
    name: 'Gerbi',
    component: () => import('../views/Gerbi.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/workcation',
    name: 'test',
    component: () => import('../views/Tests/Test.vue'),
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import(/* webpackChunkName: "about" */ '../views/Board/Layout.vue'),
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import(/* webpackChunkName: "about" */ '../views/ckdulz/schedule.vue'),
  },
  {
    path: '/kod',
    name: 'kod',
    component: () => import(/* webpackChunkName: "about" */ '../views/kod/First.vue'),
  },
  {
    path: '/coinbase',
    name: 'rnts',
    component: () => import(/* webpackChunkName: "about" */ '../views/rnt/rnts.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "about" */ '../views/news/First.vue'),
  },
  {
    path: '/pages',
    name: 'pages',
    component: () => import(/* webpackChunkName: "about" */ '../views/news/Pages.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchPhoto.vue'),
  },
  {
    path: '/dash01',
    name: 'dash01',
    component: () => import('../views/Dash01.vue'),
  },
  {
    path: '/i',
    name: 'Inst',
    component: () => import('../views/Inst.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
