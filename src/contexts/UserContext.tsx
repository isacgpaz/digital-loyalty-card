import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
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
  isSucceededTransation: boolean;
  setIsSucceededTransation: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps){
  const [user, setUser] = useState<IUser | null>();
  const [googleId, setGoogleId] = useState('');
  const [isSucceededTransation, setIsSucceededTransation] = useState(false);

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
        
        setIsSucceededTransation(true);
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
      isSucceededTransation,
      setIsSucceededTransation
    }}>
      { children }
    </UserContext.Provider>
  )
}//