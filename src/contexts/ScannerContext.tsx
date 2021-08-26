import { createContext, ReactNode, useState } from "react";

interface ScannerProviderProps{
  children: ReactNode
}

interface ScannerContextData{
  isScannerOpen: boolean;
  toggleScanner: () => void;
}

export const ScannerContext = createContext({} as ScannerContextData);

export function ScannerProvider({ children }: ScannerProviderProps){
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  function toggleScanner(){
    setIsScannerOpen(!isScannerOpen);
  }

  return (
    <ScannerContext.Provider value={{
      isScannerOpen,
      toggleScanner
    }}>
      { children }
    </ScannerContext.Provider>
  )
}