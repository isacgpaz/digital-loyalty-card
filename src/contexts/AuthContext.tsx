import { createContext, ReactNode, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Router, { useRouter } from "next/router";
import { IAdmin } from "../interfaces/IAdmin";
import { IFlag } from "../interfaces/IFlag";
import { IUser } from "../interfaces/IUser";
import { SignInData } from "../interfaces/SIgnInData";
import { api } from "../services/api";

interface AuthProviderProps{
  children: ReactNode
}

interface ResponseData{
  profileObj: IUser;  
}

interface AuthContextData{
  user: IUser;
  responseGoogle: (response: object) => void;
  verifyUser: (googleId: string) => void;

  admin: IAdmin;
  authAdmin: ({email, password}: SignInData) => Promise<void>;
}


export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<IUser | null>();
  const [admin, setAdmin] = useState<IAdmin | null>();
  const router = useRouter();

  useEffect(() => {
    //auto client login redirect
    if(router.pathname == '/'){
      const googleIdStorage = localStorage.getItem('user_id');
      verifyUser(googleIdStorage);
    }
  }, []);

  async function responseGoogle({ profileObj }: ResponseData){
    await verifyUser(profileObj.googleId).then(() => {
      if(!user){
        createUser(profileObj);
      }
    });
  }

  async function createUser(profileObj: IUser){
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

  async function verifyUser(googleId: string){
    try{
      await api.get(`users/${googleId}`)
        .then(({ data })  => { 
          data.user.flags = data.user.flags.sort(((a: any, b: any) => {
            return a.index - b.index;
          }));
          
          localStorage.setItem('user_id', data.user.googleId);

          setUser(data.user); 
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
        setCookie(undefined, 'admin-token', data.token, {
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