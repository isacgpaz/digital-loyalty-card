import { createContext, ReactNode, useState } from "react";
import { IFlag } from "../interfaces/IFlag";
import { IUser } from "../interfaces/IUser";
import { api } from "../services/api";

interface AuthProviderProps{
  children: ReactNode
}

interface ProfileData{
  email: string;
  name: string;
  imageUrl: string;
  googleId: string;
  flags: Array<IFlag>;
}

interface ResponseData{
  profileObj: ProfileData;  
  tokenId: string;
}
interface AuthContextData{
  user: ProfileData;
  responseGoogle: (response: object) => void;
  verifyUser: (profileObj: IUser) => void;
}


export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<IUser | null>()
  const [token, setToken] = useState<string>();

  async function responseGoogle({ profileObj, tokenId }: ResponseData){
    await verifyUser(profileObj).then(() => {
      if(!user){
        createUser(profileObj);
      }
    });


    setToken(tokenId);
  }

  async function createUser(profileObj: ProfileData){
    try{
      await api.post(`users/`, {
        name: profileObj.name,
        email: profileObj.email,
        googleId: profileObj.googleId,
        imageUrl: profileObj.imageUrl
      }).then(({data}) => {
        setUser(data.user);
      })
    }catch(error){
      return error.message;
    }
  }

  async function verifyUser(profileObj: ProfileData){
    try{
      await api.get(`users/${profileObj.googleId}`)
        .then(({ data })  => { 
          setUser(data.user) 
        })
    }catch(error){
      return error.message;
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      responseGoogle,
      verifyUser
    }}>
      { children }
    </AuthContext.Provider>
  )
}