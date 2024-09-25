import React, { createContext, useEffect, useState, FC } from "react";
import { TokenContextType, User } from "@/@types/types";

interface TokenProviderProps {
    children: React.ReactNode;
}


export const TokenContext = createContext<TokenContextType | null>(null);

export const TokenProvider: FC<TokenProviderProps> = (props) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            console.log('se ha solicitado informacion del usuario')
            console.log(token)
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            }
            const response = await fetch(`${import.meta.env.VITE_API_URL}/userinfo`, requestOptions)
            if (!response.ok) {
                setToken(null)
            } else {
                const data = await response.json()
                setUser(data)
            }

            localStorage.setItem('token', token as string);
        }
        fetchUser()
    }, [token])

    const LogIn = (token: string) => {
        setToken(token)
    }

    const LogOut = () => {
        setToken(null)
        window.location.href = '/'
    }

    return (
        <TokenContext.Provider value={{ token, setToken, LogIn, LogOut, user, setUser }}>
            {props.children}
        </TokenContext.Provider>
    )
}