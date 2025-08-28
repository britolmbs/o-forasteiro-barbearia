import Router from 'next/router';
import { destroyCookie } from 'nookies';
import { createContext, ReactNode, useState } from 'react'

interface AuthContextData {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
}

interface UserProps {
    id: string,
    name: string,
    email: string;
    endereco: string | null;
    subscriptions?: SubscriptionsProps | null;
}

interface SubscriptionsProps{
    id: string;
    status: string;
}

type AuthProviderProps =  {
children: ReactNode;
}

interface SignInProps {
    email: string;
    password: string
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try {
        
        destroyCookie(null, '@barber.token', { path: '/'} )
        Router.push('/login')

    } catch (err) {
        console.log("erro ao sair")
    }
}

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<UserProps | null>(null);
    const isAuthenticated = !!user;

    async function signIn({email, password }: SignInProps){
        console.log(email, password);
    }
    
   return(
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
   )
}