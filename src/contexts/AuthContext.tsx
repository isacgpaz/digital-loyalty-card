import { createContext, ReactNode, useState } from "react";

interface AuthProviderProps{
  children: ReactNode
}

interface AuthContextData{
  user: ProfileData;
  responseGoogle: (response: object) => void;
}

interface ProfileData{
  email: string;
  name: string;
  imageUrl: string;
  googleId: string;
}

interface ResponseData{
  profileObj: ProfileData;  
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps){
  const [user, setUser] = useState<ProfileData | null>(null)

  function responseGoogle({profileObj}: ResponseData){
    console.log(profileObj);

    setUser(profileObj);
  }

  return (
    <AuthContext.Provider value={{
      user,
      responseGoogle
    }}>
      { children }
    </AuthContext.Provider>
  )
}