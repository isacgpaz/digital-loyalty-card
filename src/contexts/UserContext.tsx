import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { createContext, ReactNode, useEffect, useState } from "react";
import { IFlag } from "../interfaces/IFlag";
import { IUser } from "../interfaces/IUser";
import { api } from "../services/api";

interface UserProviderProps{
  children: ReactNode
}

interface UserContextData{
  user: IUser;
  getUser: (googleId: string) => void;
  users: Array<IUser>;
  getAllUsers: () => void;
  setUserGoogleId: (googleId: string) => void;
  addFlag: (user: IUser) => void;
  isUserDetailsOpen: boolean;
  toggleUserDetails: () => void;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps){
  const [user, setUser] = useState<IUser | null>();
  const [users, setUsers] = useState<Array<IUser> | null>();
  const [flagsChecked, setIsFlagsCheched] = useState(0);
  const [googleId, setGoogleId] = useState('');
  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);

  useEffect(() => {
    if(googleId){
      getUser(googleId);
    }
  }, [googleId]);
  
  useEffect(() => {
    getAllUsers();
  }, [user?.flags, users]);

  function toggleUserDetails(){
    setIsUserDetailsOpen(!isUserDetailsOpen);
  }

  function setUserGoogleId(googleId: string){
    setGoogleId(googleId);
  }

  async function getUser(googleId: string){
    try{
      await api.get(`users/${googleId}`)
        .then(({ data })  => { 
          data.user.flags = data.user.flags.sort(((a: any, b: any) => {
            return a.index - b.index;
          }));
          setUser(data.user); 
        })
    }catch(error){
      return error.message;
    }
  }

  async function getAllUsers(){
    try{
      await api.get(`users`).then(({ data }) => {
        data.users.map(user => { 
          user.updatedAt = format(parseISO(user.updatedAt), "dd 'de' MMMM 'de' yyyy 'às' H'h'm", { locale: ptBR });
        })
        setUsers(data.users);
      });
    }catch(error){
      return error.message;
    }
  }

  async function addFlag(user: IUser){
    const flag = user.flags.find(flag => !flag.isChecked);
    
    if(flag){
      flag.isChecked = true;
      updateUser(user);
    }else{
      user.flags.map(flag => {
        flag.isChecked = false;
      });

      user.flags[0].isChecked = true;

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
      }).then(({ data })  => { 
        data.user.flags = data.user.flags.sort(((a: any, b: any) => {
          return a.index - b.index;
        }));

        setUser(data.user);
        getAllUsers();
      })
    }catch(error){
      return error.message;
    }
  }

  return (
    <UserContext.Provider value={{
      user,
      getUser,
      users,
      getAllUsers,
      setUserGoogleId,
      addFlag,
      isUserDetailsOpen,
      toggleUserDetails,
    }}>
      { children }
    </UserContext.Provider>
  )
}//