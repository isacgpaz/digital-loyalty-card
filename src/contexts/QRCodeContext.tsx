import { createContext, ReactNode, useState } from "react";

interface QRCodeProviderProps{
  children: ReactNode
}

interface QRCodeContextData{
  isQRCodeOpen: boolean;
  toggleQRCode: () => void;
}

export const QRCodeContext = createContext({} as QRCodeContextData);

export function QRCodeProvider({ children }: QRCodeProviderProps){
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);

  function toggleQRCode(){
    setIsQRCodeOpen(!isQRCodeOpen);
  }

  return (
    <QRCodeContext.Provider value={{
      isQRCodeOpen,
      toggleQRCode
    }}>
      { children }
    </QRCodeContext.Provider>
  )
}