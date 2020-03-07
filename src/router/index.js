import Vue from 'vue';
import VueRouter from 'vue-router';
import layouts from '@/views/layouts';
import home from '@/views/home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: layouts,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: home,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
