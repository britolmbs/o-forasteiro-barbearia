import { createContext, ReactNode, useState } from 'react'

interface AuthContextData {
    user: UserProps;
    isAuthenticated: boolean;
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

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){
    const [user, setUser] = useState<UserProps>()
    const isAuthenticated = !!user;
    
   return(
    <AuthContext.Provider value={{ user, isAuthenticated }}>
    {children}
    </AuthContext.Provider>
   )
}