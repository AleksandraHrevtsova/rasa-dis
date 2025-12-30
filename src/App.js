import { useState, useMemo } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router';

import AppContext from './contexts/AppContext';
import { ThemeProvider } from './contexts/ThemeContext';
import FunctionsContext from './contexts/FunctionsContext';

import { getUserFromLocalstorage } from './utils/localStorage';
import { routes } from './utils/routesMap';

import Home from './pages/Home';
import Orders from './pages/Orders';
import Order from './pages/Order';
import Payments from './pages/Payments';

function App() {
  const [user] = useState(getUserFromLocalstorage());
  const location = useLocation();
  const navigate = useNavigate();
  const [, setBusy] = useState(true);

  function getContext(aUser) {
    const userObj = aUser || user;

    return {
      user: userObj || {},
      location
    };
  }

  function getFunctionsContext() {
    return {
      setBusy: (status) => setBusy(status),
      goBack: () => navigate(-1),
    };
  }

  const defaultContext = getContext(user);
  const defaultFunctionsContext = getFunctionsContext();

  const memoFunctionsContext = useMemo(
    () => defaultFunctionsContext,
    [defaultFunctionsContext]
  );

  const memoContext = useMemo(
    () => defaultContext, 
    [defaultContext]
  );

  return (
    <ThemeProvider>
      <FunctionsContext.Provider value={memoFunctionsContext}>
        <AppContext.Provider value={memoContext}>

          <Routes>
            <Route path={routes.home} element={<Home />} />

            <Route path={routes.orders} element={<Orders />}/>
            <Route path={routes.editOrder} element={<Order />} />

            <Route path={routes.payments} element={<Payments />} />

          </Routes>

        </AppContext.Provider>
      </FunctionsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
