import { api } from '../services/apiClient';
import Router from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react'

interface AuthContextData {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signUp:  (credentials: SignUpProps) => Promise<void>;
    logoutUser: () => Promise<void>;
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

interface SignUpProps {
    name: string;
    email: string;
    password: string;
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

    useEffect(() => {
        const  { '@barber.token': token } = parseCookies();

        if(token){
            api.get('/me').then(response =>{
                const {id, name, endereco, email, subscriptions} = response.data;
                setUser({
                    id,
                    name,
                    email,
                    endereco,
                    subscriptions
                })
            })

            .catch(()=>{
                signOut()
            })
        }
    }, [])

    async function signIn({email, password }: SignInProps){
       try {
        const response = await api.post("/session", {
            email,
            password,
        })
       const { id, name, token, subscriptions, endereco } = response.data;
       setCookie(undefined, '@barber.token', token, {
        maxAge: 60 * 60 * 24 * 30,
        path: '/'
       })
       setUser({
        id,
        name,
        email,
        endereco,
        subscriptions
       })
       api.defaults.headers.common['Authorization'] = `Bearer ${token}`

       Router.push('/dashboard')

       } catch (err) {
        console.log("Erro ao Entrar", err)
       }
    }

    async function signUp({name, email, password}: SignUpProps){
        try {
            const response = await api.post('/users', {
                name,
                email,
                password
            })
            
            Router.push('/login')
        } catch (err) {
            console.log(err);
        }
    }

    async function logoutUser(){
        try {
            destroyCookie(null, '@barber.token', {path: '/'})
            setUser(null);
            Router.push('/login')

        } catch (err) {
            console.log('Erro ao Sair', err)
        }
    }
    
   return(
    <AuthContext.Provider value={{
         user,
          isAuthenticated, 
          signIn,
          signUp,
          logoutUser
          }}>
      {children}
    </AuthContext.Provider>
   )
}