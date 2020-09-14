import Home from '@/components/DashBoardLayout.vue';
export const routes = [
    {
      path: '/',
      component: Home
    },
    { 
        path: '/home',
        component: () => import('@/components/DashBoardLayout.vue'),
        children: [
          {
            path: '1',
            component: () => import('@/pages/Index.vue'),
          },
          {
            path: '2',
            component: () => import('@/pages/Index2.vue'),
          },
        ],
    },
];