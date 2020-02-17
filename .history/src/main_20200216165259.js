import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import IconFont from '@/components/icon-font';
import '@/styles/index.less'; // 全局样式

Vue.config.productionTip = false;
Vue.component('icon-font', IconFont); // 全局注册icon组件

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
