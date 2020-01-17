import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/layout',
    name: 'layout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    path: '/rnts',
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
];

const router = new VueRouter({
  routes,
});

export default router;
