import { createContext, ReactNode, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";

interface QRCodeProviderProps{
  children: ReactNode
}

interface QRCodeContextData{
  isQRCodeOpen: boolean;
  toggleQRCode: () => void;
  scan: string;
  handleScan: (data: string) => void;
  handleError: (error: void) => void;
  getManualStamp: (stamp: string) => void;
  toggleStamp: () => void;
  toggleScanner: () => void;
  toggleHandStamp: () => void;
  isStampOpen: boolean;
  isScannerOpen: boolean;
  isHandStampOpen: boolean;
}

export const QRCodeContext = createContext({} as QRCodeContextData);

export function QRCodeProvider({ children }: QRCodeProviderProps){
  const [isQRCodeOpen, setIsQRCodeOpen] = useState(false);
  const [scan, setScan] = useState('');
  const [isStampOpen, setIsStampOpen] = useState(false);
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [isHandStampOpen, setIsHandStampOpen] = useState(false);

  const { isSucceded, isUpdateLimit } = useUser();

  useEffect(() => {
    if(isStampOpen && (isSucceded || isUpdateLimit)) {
      toggleStamp();
    }
  }, [isSucceded, isUpdateLimit, isStampOpen]);

  function toggleQRCode(){
    setIsQRCodeOpen(!isQRCodeOpen);
  }

  function toggleStamp(){
    setIsStampOpen(!isStampOpen);

    setIsHandStampOpen(false);
    setIsScannerOpen(false);

    if(isStampOpen == false){
      setScan('');
    }
  }

  function toggleScanner(){
    toggleStamp();
    setIsScannerOpen(!isScannerOpen);
  }

  function toggleHandStamp(){
    toggleStamp();
    setIsHandStampOpen(!isHandStampOpen);
  }

  const handleScan = (data: string) => {
    if (data) {
      setScan(data);
    }
  }
  
  const handleError = error => {
    console.error(error);
  }

  function getManualStamp(stamp: string){
    setScan(stamp);
  }

  return (
    <QRCodeContext.Provider value={{
      isQRCodeOpen,
      toggleQRCode,
      scan,
      handleScan,
      handleError,
      getManualStamp,
      toggleStamp,
      toggleScanner,
      toggleHandStamp,
      isStampOpen,
      isScannerOpen,
      isHandStampOpen
    }}>
      { children }
    </QRCodeContext.Provider>
  )
}