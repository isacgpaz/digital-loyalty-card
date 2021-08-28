import { createContext, ReactNode, useState } from "react";
import { IoIosTabletLandscape } from "react-icons/io";
import { useUser } from "../hooks/useUser";

interface AdminCardModalProviderProps{
  children: ReactNode
}

interface AdminCardModalContextData{
  isAdminCardModalOpen: boolean;
  toggleAdminCardModal: () => void;
}

export const AdminCardModalContext = createContext({} as AdminCardModalContextData);

export function AdminCardModalProvider({ children }: AdminCardModalProviderProps){
  const [isAdminCardModalOpen, setIsAdminCardModalOpen] = useState(false);
  const { setIsSucceededTransation } = useUser();

  function toggleAdminCardModal(){
    setIsAdminCardModalOpen(!isAdminCardModalOpen);

    if(isAdminCardModalOpen){
      setIsSucceededTransation(false);
    }
  }

  return (
    <AdminCardModalContext.Provider value={{
      isAdminCardModalOpen,
      toggleAdminCardModal
    }}>
      { children }
    </AdminCardModalContext.Provider>
  )
}