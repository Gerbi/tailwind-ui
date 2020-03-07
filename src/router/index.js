import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Vk from '../views/Vk.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/tg',
    name: 'Gerbi',
    component: () => import('../views/Gerbi.vue'),
  },
  {
    path: '/vk', component: Vk, name: 'Vk',
  },
  {
    path: '/kod',
    name: 'kod',
    component: () => import(/* webpackChunkName: "about" */ '../views/kod/First.vue'),
  },
  {
    path: '/*',
    component: () => import('../components/NotFound.vue'),
  },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('../views/Profile.vue'),
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('../views/Dashboard.vue'),
  // },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../views/Home.vue'),
  // },
  // {
  //   path: '/workcation',
  //   name: 'test',
  //   component: () => import('../views/Tests/Test.vue'),
  // },
  // {
  //   path: '/layout',
  //   name: 'layout',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Board/Layout.vue'),
  // },
  // {
  //   path: '/schedule',
  //   name: 'schedule',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/ckdulz/schedule.vue'),
  // },
  // {
  //   path: '/coinbase',
  //   name: 'rnts',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/rnt/rnts.vue'),
  // },
  // {
  //   path: '/news',
  //   name: 'news',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/news/Articles.vue'),
  // },
  // {
  //   path: '/pages',
  //   name: 'pages',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/news/Pages.vue'),
  // },
  // {
  //   path: '/search',
  //   name: 'search',
  //   component: () => import('../views/SearchPhoto.vue'),
  // },
  // {
  //   path: '/dash01',
  //   name: 'dash01',
  //   component: () => import('../views/Dash01.vue'),
  // },
  // {
  //   path: '/inbox',
  //   name: 'Inbox',
  //   component: () => import('../views/Inbox.vue'),
  // },
  // {
  //   path: '/i',
  //   name: 'Inst',
  //   component: () => import('../views/Inst.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
