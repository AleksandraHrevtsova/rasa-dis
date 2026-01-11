import { createContext, useContext, useState, useMemo, useEffect } from 'react';

const UIContext = createContext(null);

export function UIProvider({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    console.log('isSidebarOpen:', isSidebarOpen);
  }, [isSidebarOpen])

  const value = useMemo(() => ({
    isSidebarOpen,
    openSidebar: () => setSidebarOpen(true),
    closeSidebar: () => setSidebarOpen(false),
    toggleSidebar: () => setSidebarOpen(v => !v),
  }), [isSidebarOpen]);

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  return useContext(UIContext);
}
