import Vue from 'vue';
import Trend from 'vuetrend';
import TrendChart from 'vue-trend-chart';

import App from './App.vue';
import router from './router';
import store from './store';

// import custom global css
import './assets/css/global.css';

// css importa for swiper.js
require('./assets/swiper/css/swiper.min.css');

Vue.use(Trend);
Vue.use(TrendChart);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
