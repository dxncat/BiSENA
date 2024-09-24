import React, { createContext, useEffect, useState, FC } from "react";
import { TokenContextType, User } from "@/@types/tokenContext";

interface TokenProviderProps {
    children: React.ReactNode;
}


export const TokenContext = createContext<TokenContextType | null>(null);

export const TokenProvider: FC<TokenProviderProps> = (props) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [user, setUser] = useState<User | null>({ rol: 'ADMIN' })

    useEffect(() => {
        const fetchUser = async () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            }
            const response = await fetch(`${import.meta.env.VITE_API_URL}/hello`, requestOptions)
            if (!response.ok) {
                setToken(null);
                setUser({ rol: 'nuloooo' })
            } else {
                const data = await response.json()
                setUser(data)
            }

            localStorage.setItem('token', token as string);
        }
        fetchUser();
    }, [token])

    const LogIn = (token: string) => {
        setToken(token);
    }

    const LogOut = () => {
        setToken(null);
    }

    return (
        <TokenContext.Provider value={{ token, setToken, LogIn, LogOut, user }}>
            {props.children}
        </TokenContext.Provider>
    )
}