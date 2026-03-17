const routePath = {
  home: '/',
  orders: '/orders',
  create_order: '/orders/create-new-order',
  edit_order: '/orders/edit/:id',
  payments: '/payments'
};
const routeName = {
  home: 'home', 
  orders: 'orders',
  payments: 'payments',
}

const routesData = [
  {
    to: routePath.home,
    labelTag: 'home',
    icon: 'home'
  }, 
  {
    to: routePath.orders,
    labelTag: 'orders',
    icon: 'order'
  },
  {
    to: routePath.payments,
    labelTag: 'payments',
    icon: 'receipt',
  }
];

const RolesMap = {
  client: ['client-admin', 'client-manager'],
  worker: ['admin', 'manager']
};

const RoutesByRoleMap = {
  admin: [
    routeName.home, 
    routeName.orders, 
    routeName.payments, 
  ],
  manager: [    
    routeName.home, 
    routeName.orders, 
    routeName.payments, 
  ],
};



export { routePath, routeName, routesData, RolesMap, RoutesByRoleMap };