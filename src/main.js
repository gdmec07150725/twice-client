import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/index.less'; // 全局样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import 'highlight.js/styles/tomorrow.css'; // highlight.js style
import '@/assets/font/iconfont.css';
import IconFont from '@/components/icon-font';
import { Loading } from 'element-ui';

Vue.use(Loading.directive); // 使用loading

Vue.component('icon-font', IconFont); // 全局注册icon组件

Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;

Vue.use(Vue => {
  (requireContext => {
    const arr = requireContext.keys().map(requireContext);
    (arr || []).forEach(directive => {
      directive =
        directive.__esModule && directive.default
          ? directive.default
          : directive;
      Object.keys(directive).forEach(key => {
        Vue.directive(key, directive[key]);
      });
    });
  })(require.context('./directives', false, /^\.\/.*\.js$/));
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
