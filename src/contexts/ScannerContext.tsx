import { createContext, ReactNode, useState } from "react";

interface ScannerProviderProps{
  children: ReactNode
}

interface ScannerContextData{
  scan: string;
  handleScan: (data: string) => void;
  handleError: (error: void) => void;
  toggleScanner: () => void;
  isScannerOpen: boolean;
}

export const ScannerContext = createContext({} as ScannerContextData);

export function ScannerProvider({ children }: ScannerProviderProps){
  const [scan, setScan] = useState('');
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  
  function toggleScanner(){
    setIsScannerOpen(!isScannerOpen);

    if(isScannerOpen == false){
      setScan('');
    }
  }

  const handleScan = (data: string) => {
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
      handleError,
      toggleScanner,
      isScannerOpen,
    }}>
      { children }
    </ScannerContext.Provider>
  )
}