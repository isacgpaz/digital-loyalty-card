import { createContext, ReactNode, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";
import { IAdmin } from "../interfaces/IAdmin";
import { IFlag } from "../interfaces/IFlag";
import { IUser } from "../interfaces/IUser";
import { SignInData } from "../interfaces/SIgnInData";
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

  admin: IAdmin;
  authAdmin: ({email, password}: SignInData) => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<IUser | null>();
  const [admin, setAdmin] = useState<IAdmin | null>();
  
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

  async function authAdmin({ email, password }: SignInData): Promise<void>{
    try{
      await api.post("admins/auth", {
        email: email,
        password: password
      }).then( ({ data })  => {
        setCookie(undefined, 'edu-token', data.token, {
          maxAge: 60 * 60 * 24 //24h
        });

        setAdmin(data.admin);

        api.defaults.headers['Authorization'] = `Bearer ${data.token}`;        

        Router.push('/dashboard');
      })
    }catch(error){
      return error.message;
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      responseGoogle,
      verifyUser,
      admin,
      authAdmin
    }}>
      { children }
    </AuthContext.Provider>
  )
}