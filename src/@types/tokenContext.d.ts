export interface User {
    id?: number
    rol?: string
}

export type TokenContextType = {
    user: User | null
    token: string | null
    setToken: (token: string | null) => void
    LogIn: (token: string) => void
    LogOut: () => void
}