import { useContext } from "react";
import { QRCodeContext } from "../contexts/QRCodeContext";

export function useQRCode(){
  const context = useContext(QRCodeContext);

  return context;
}