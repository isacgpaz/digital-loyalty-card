import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useRouter } from "next/router";
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
  getUsersByName: (query: string) => void;
  isUpdateLimit: boolean;
  isSucceded: boolean;
  resultSearch: Array<IUser>;
}

export const UserContext = createContext({} as UserContextData);

export function UserProvider({ children }: UserProviderProps){
  const [user, setUser] = useState<IUser | null>();
  const [users, setUsers] = useState<Array<IUser> | null>();
  const [googleId, setGoogleId] = useState('');
  const [isUserDetailsOpen, setIsUserDetailsOpen] = useState(false);
  const [isUpdateLimit, setIsUpdateLimit] = useState(false);
  const [isSucceded, setIsSucceded] = useState(false);
  const [resultSearch, setResultSearch] = useState<Array<IUser> | null>();

  const router = useRouter();
  
  useEffect(() => {
    if(googleId){
      getUser(googleId);
    }
  }, [googleId]);
  
  useEffect(() => {
    if(router.pathname == '/dashboard'){
      getAllUsers();
    }
  }, [user, router]);

  useEffect(() => {
    if(router.pathname == '/dashboard'){
      setInterval(() => {
        getAllUsers();
      }, 6000);
    }
  }, []);

  function toggleUserDetails(){
    setIsUpdateLimit(false);
    setIsSucceded(false);
    setIsUserDetailsOpen(!isUserDetailsOpen);
  }

  function setUserGoogleId(googleId: string){
    setGoogleId(googleId);
  }

  async function getUser(googleId: string){
    try{
      await api.get(`users/${googleId}`)
        .then(({ data })  => { 
          data.user.flags.sort(((a: any, b: any) => {
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
        data.users.sort((a: any, b: any) => {
          return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
        });
        
        data.users.map((user: IUser) => { 
          user.updatedAt = format(parseISO(user.updatedAt), "dd 'de' MMMM 'de' yyyy '??s' H'h'm", { locale: ptBR });
        });

        setUsers(data.users);
      });
    }catch(error){
      return error.message;
    }
  }

  function getUsersByName(query: string){
    const result = users.filter((user: IUser) => { return user.name.toLowerCase().includes(query.toLowerCase()) });
    setResultSearch(result);

    if(query == ''){
      setResultSearch([]);
    }
  }

  async function addFlag(user: IUser){
    const updatedAt = format(parseISO(user.updatedAt), "HHmmddMMyy", { locale: ptBR });
    const createdAt = format(parseISO(user.createdAt), "HHmmddMMyy", { locale: ptBR });
    const dateNow = format(new Date(), "HHmmddMMyy", { locale: ptBR });
    
    console.log(updatedAt);
    console.log(createdAt);
    console.log(dateNow);

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
        data.user.flags = data.user.flags.sort(((a: IFlag, b: IFlag) => {
          return a.index - b.index;
        }));

        getAllUsers();
        
        setUser(null);
        
        setIsSucceded(true);

        setTimeout(() => { 
          setIsSucceded(false);
        }, 3000);
        
        setIsUserDetailsOpen(false);
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
      getUsersByName,
      isUpdateLimit,
      isSucceded,
      resultSearch
    }}>
      { children }
    </UserContext.Provider>
  )
}