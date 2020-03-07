import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.use(require('vue-moment'));

Vue.filter('truncate', (value, length, suffix) => {
  if (value.length > length) {
    return value.substring(0, length) + suffix;
  }
  return value;
});
Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
