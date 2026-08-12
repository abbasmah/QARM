import { createContext, useContext, type ReactNode } from 'react';

const GetStartedContext = createContext<(preset?: string) => void>(() => {});

export function GetStartedProvider({ value, children }: { value: (preset?: string) => void; children: ReactNode }) {
  return <GetStartedContext.Provider value={value}>{children}</GetStartedContext.Provider>;
}

export function useGetStarted() {
  return useContext(GetStartedContext);
}
