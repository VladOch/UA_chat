
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/registered/Page-users.vue') },
      { path: '/auth', component: () => import('pages/unregistered/Registration-page.vue') },
      { path: '/chat', component: () => import('pages/registered/Chat-page.vue') },

    ]
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
