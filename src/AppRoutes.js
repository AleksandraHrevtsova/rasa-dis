import { Routes, Route, useLocation, useNavigate } from 'react-router';
import { useCallback, useMemo, useState } from 'react';

import AppContext from './contexts/AppContext';
import FunctionsContext from './contexts/FunctionsContext';

import { getUserFromLocalstorage } from './utils/localStorage';
import { routes } from './utils/routesMap';

import PrivateRoute from './routes/PrivateRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Order from './pages/Order';
import Payments from './pages/Payments';

export default function AppRoutes() {
  const [user] = useState(getUserFromLocalstorage());
  const location = useLocation();
  const navigate = useNavigate();
  const [, setBusy] = useState(true);

  const getContext = useCallback((aUser) => {
    return {
      user: aUser || user || {},
      location,
    };
  }, [location, user]);

  const getFunctionsContext = useCallback(() => {
    return {
      setBusy,
      goBack: () => navigate(-1),
    };
  }, [navigate]);

  const memoContext = useMemo(
    () => getContext(user),
    [getContext, user]
  );

  const memoFunctionsContext = useMemo(
    () => getFunctionsContext(),
    [getFunctionsContext]
  );

  return (
    <AppContext.Provider value={memoContext}>
      <FunctionsContext.Provider value={memoFunctionsContext}>
        <Routes>

          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.orders} element={<Orders />} />
            <Route path={routes.editOrder} element={<Order />} />
            <Route path={routes.payments} element={<Payments />} />
          </Route>

        </Routes>
      </FunctionsContext.Provider>
    </AppContext.Provider>
  );
}
