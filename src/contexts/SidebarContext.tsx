import { createContext, ReactNode, useState } from "react";

interface SidebarProviderProps{
  children: ReactNode
}

interface SidebarContextData{
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext({} as SidebarContextData);

export function SidebarProvider({ children }: SidebarProviderProps){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar(){
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <SidebarContext.Provider value={{
      isSidebarOpen,
      toggleSidebar,
    }}>
      { children }
    </SidebarContext.Provider>
  )
}