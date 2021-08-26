import { useContext } from "react";
import { ScannerContext } from "../contexts/ScannerContext";

export function useScanner(){
  const context = useContext(ScannerContext);

  return context;
}