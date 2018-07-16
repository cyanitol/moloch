// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vBTooltip from 'bootstrap-vue/es/directives/tooltip/tooltip';

// internal deps
import App from './App';
import router from './router';
import store from './store';
import interceptorSetup from './interceptors';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.directive('b-tooltip', vBTooltip);

interceptorSetup();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
