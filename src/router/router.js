import layouts from '@/views/layouts';
import home from '@/views/home';
import publishArticle from '@/views/publishArticle';
import articleDetail from '@/views/articleDetail';

export const routes = [
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
  {
    path: '/publishArticle',
    name: 'publishArticle',
    component: publishArticle,
  },
  {
    path: '/articleDetail',
    name: 'articleDetail',
    component: layouts,
    redirect: '/articleDetail/index',
    children: [
      {
        path: 'index',
        name: 'articleDetail',
        component: articleDetail,
      },
    ],
  },
];
