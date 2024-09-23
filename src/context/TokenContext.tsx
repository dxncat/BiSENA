import React, { createContext, useEffect, useState } from "react";


interface TokenProviderProps {
    children: React.ReactNode;
}

type TokenContextType = [string | null, React.Dispatch<React.SetStateAction<string | null>>, (token: string) => void, () => void];

export const TokenContext = createContext<TokenContextType | null>(null);

export const TokenProvider: React.FC<TokenProviderProps> = (props) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

    useEffect(() => {
        const fetchUser = async () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            }
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/me`, requestOptions)
            if (!response.ok) {
                setToken(null);
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
        <TokenContext.Provider value={[token, setToken, LogIn, LogOut]}>
            {props.children}
        </TokenContext.Provider>
    )
}