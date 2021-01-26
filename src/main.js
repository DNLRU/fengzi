import Vue from 'vue';
import App from './App.vue';
import './plugins/element.js';
// 引入路由
import router from './router/router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
