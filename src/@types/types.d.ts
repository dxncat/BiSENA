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

export interface Bicicleta {
    id: number
    marca: string
    color: string
    estado: 'disponible' | 'en alquiler' | 'mantenimiento' | 'fuera de servicio'
    precio_alquiler: number
    regional: string
}