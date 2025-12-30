const routes = {
  home: '/',
  orders: '/orders',
  editOrder: '/orders/:oid/edit',
  payments: '/payments'
};

const routesData = [
  {
    to: routes.home,
    labelTag: 'home',
    icon: 'home'
  }, 
  {
    to: routes.orders,
    labelTag: 'orders',
    icon: 'order'
  },
  {
    to: routes.payments,
    labelTag: 'payments',
    icon: 'receipt',
  }
];

export { routes, routesData };