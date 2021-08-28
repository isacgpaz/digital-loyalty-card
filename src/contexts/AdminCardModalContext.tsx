import { createContext, ReactNode, useState } from "react";

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

  function toggleAdminCardModal(){
    setIsAdminCardModalOpen(!isAdminCardModalOpen);
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