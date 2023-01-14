import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/components/pages/HomeView.vue';

import sourceData from '@/data.json';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/thread/:id',
      name: 'ThreadSingleView',
      component: () => import('../components/pages/ThreadSingleView.vue'),
      props: true,
      beforeEnter(to, from, next) {
        //   check if thread exists
        const threadExists = sourceData.threads.find(thread => thread.id === to.params.id);
        //   if exist continue
        if (threadExists) {
          return next();
        }
        //   if doesn't exist redirect to not found
        else {
          next({
            name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') },
          });
        }
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../components/pages/NotFound.vue'),
    },
  ],
});

export default router;
