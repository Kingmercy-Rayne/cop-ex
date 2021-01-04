import Vue from 'vue';
import Bars from 'vuebars';
import Trend from 'vuetrend';

import App from './App.vue';
import router from './router';
import store from './store';

// import custom global css
import './assets/css/global.css';

// css importa for swiper.js
require('./assets/swiper/css/swiper.min.css');

Vue.use(Trend);
Vue.use(Bars);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
