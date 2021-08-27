import { createContext, ReactNode, useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { api } from "../services/api";

interface DashboardProviderProps{
  children: ReactNode
}

interface DashboardContextData{
  users: Array<IUser>;
  getAllUsers: () => void;
  toggleScanner: () => void;
  isScannerOpen: boolean;
}

export const DashboardContext = createContext({} as DashboardContextData);

export function DashboardProvider({ children }: DashboardProviderProps){
  const [users, setUsers] = useState<Array<IUser> | null>();
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  function toggleScanner(){
    setIsScannerOpen(!isScannerOpen);
  }

  async function getAllUsers(){
    try{
      await api.get(`users`).then(({ data }) => {
        setUsers(data.users);
      });
    }catch(error){
      return error.message;
    }
  }

  return (
    <DashboardContext.Provider value={{
      users,
      getAllUsers,
      toggleScanner,
      isScannerOpen
    }}>
      { children }
    </DashboardContext.Provider>
  )
}