const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/product/:productId',
    name: 'product',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/ProductView.vue'),
    props: true,
  },
  {
    path: '/error',
    name: 'error',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "error" */ '../views/Error.vue'),
  },
  {
    path: '/*',
    name: 'not-found',
    component: () =>
      import(/* webpackChunkName: 'not-found' */ '../views/NotFound.vue'),
  },
];

export {
  routes,
};
