import Vue       from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


Vue.use( VueRouter );

import router from './config/router';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
