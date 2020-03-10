import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/index.less'; // 全局样式
import '@/styles/quill.bubble.css'; // 富文本样式
import '@/styles/quill.core.css';
import '@/styles/quill.snow.css';
import '@/assets/font/iconfont.css';
import IconFont from '@/components/icon-font';

Vue.component('icon-font', IconFont); // 全局注册icon组件
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
