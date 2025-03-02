"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

type RefreshContextType = {
  refresh: boolean;
  triggerRefresh: () => void;
};

const RefreshContext = createContext<RefreshContextType | undefined>(undefined);

export const RefreshProvider = ({ children }: { children: ReactNode }) => {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = useCallback(() => {
    setRefresh((prev) => !prev); // Bascule true <-> false
  }, []);

  return (
    <RefreshContext.Provider value={{ refresh, triggerRefresh }}>
      {children}
    </RefreshContext.Provider>
  );
};

export const useRefresh = () => {
  const context = useContext(RefreshContext);
  if (!context) {
    throw new Error("useRefresh a une erreur");
  }
  return context;
};
