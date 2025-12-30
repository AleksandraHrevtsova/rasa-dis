import { createContext, useMemo, useState } from 'react';
import getColors from '../layout/colors';
import getLayout from '../layout/layout';

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {

  const [colors] = useState(getColors());
  const [layout] = useState(getLayout());

  const value = useMemo(() => ({ colors, layout }), [colors, layout]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
