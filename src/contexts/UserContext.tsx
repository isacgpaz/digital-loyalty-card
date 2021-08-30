import { createContext, ReactNode, useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";
import { api } from "../services/api";

interface UserProviderProps{
  children: ReactNode
}

interface UserContextData{
  user: IUser;
  getUser: (googleId: string) => void;
  setUserGoogleId: (googleId: string) => void;
  addFlag: (user: IUser) => void;
  isUserDetailsOpen: boolean;
  toggleUserDetails: () => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps){
  const [user, setUser] = useState<IUser | null>();
  const [googleId, setGoogleId] = useState('');
  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);

  function toggleUserDetails(){
    setIsUserDetailsOpen(!isUserDetailsOpen);
  }

  useEffect(() => {
    if(googleId){
      getUser(googleId);
    }
  }, [googleId]);

  function setUserGoogleId(googleId: string){
    setGoogleId(googleId);
  }

  async function getUser(googleId: string){
    try{
      await api.get(`users/${googleId}`)
        .then(({ data })  => { 
          setUser(data.user); 
        })
    }catch(error){
      return error.message;
    }
  }

  async function addFlag(user: IUser){
    console.log(user.flags);
    
    const flag = user.flags.find(flag => !flag.isChecked);
    
    if(flag){
      flag.isChecked = true;
      updateUser(user);
    }else{
      user.flags.map(flag => {
        flag.isChecked = false;
      });

      updateUser(user);
    }
  }

  async function updateUser(user: IUser){
    try{
      await api.put(`users/${user.googleId}`, {
        name: user.name,
        email: user.email,
        flags: user.flags,
        imageUrl: user.imageUrl,
        googleId: user.googleId,
      }).then(()  => { 
        setUser(user);
      })
    }catch(error){
      return error.message;
    }
  }

  return (
    <UserContext.Provider value={{
      user,
      getUser,
      setUserGoogleId,
      addFlag,
      isUserDetailsOpen,
      toggleUserDetails
    }}>
      { children }
    </UserContext.Provider>
  )
}//