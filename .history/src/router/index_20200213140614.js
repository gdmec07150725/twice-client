import Vue from 'vue';
import VueRouter from 'vue-router';
import layouts from '@/views/layouts.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: layouts,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
