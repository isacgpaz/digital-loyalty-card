import { useContext } from "react";
import { AdminCardModalContext } from "../contexts/AdminCardModalContext";

export function useAdminCardModal(){
  const context = useContext(AdminCardModalContext);

  return context;
}