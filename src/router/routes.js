import MainLayout from 'layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: () => import('pages/Home.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/Register.vue') },
      { path: 'bulletin', name: 'bulletin', component: () => import('pages/Bulletin.vue') },
      {
        path: 'mall',
        name: 'mall',
        component: () => import('src/pages/mall/Mall.vue'),
        children: [
          { path: 'rober', name: 'rober', component: () => import('pages/mall/child/Rober.vue') },
          { path: 'myRober', name: 'myRober', component: () => import('pages/mall/child/MyRober.vue') }
        ],
        redirect: { name: 'props' }
      },
      {
        path: 'trade',
        name: 'trade',
        component: () => import('src/pages/trade/Trade.vue'),
        children: [
          { path: 'sale', name: 'sale', component: () => import('pages/trade/child/Sale.vue') },
          { path: 'map', name: 'map', component: () => import('pages/trade/child/Map.vue') }
        ],
        redirect: { name: 'sale' }
      },
      { path: 'partner', name: 'partner', component: () => import('pages/Partner.vue') },
      { path: 'mine', name: 'mine', component: () => import('pages/Mine.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
