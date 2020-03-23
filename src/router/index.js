import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Vk from '../views/Vk.vue';
import Dash from '../views/Dash01.vue';

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
    path: '/Dash', component: Dash, name: 'Dash',
  },
  {
    path: '/*',
    component: () => import('../components/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
