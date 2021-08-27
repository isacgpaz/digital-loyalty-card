import { createContext, ReactNode, useState } from "react";

interface ScannerProviderProps{
  children: ReactNode
}

interface ScannerContextData{
  scan: string;
  handleScan: (data: void) => void;
  handleError: (error: void) => void;
}

export const ScannerContext = createContext({} as ScannerContextData);

export function ScannerProvider({ children }: ScannerProviderProps){
  const [scan, setScan] = useState('');
  
  const handleScan = data => {
    if (data) {
      setScan(data);
    }
  }
  
  const handleError = error => {
    console.error(error);
  }

  return (
    <ScannerContext.Provider value={{
      scan,
      handleScan,
      handleError
    }}>
      { children }
    </ScannerContext.Provider>
  )
}