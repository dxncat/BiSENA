export interface User {
    id: number
    name: string
    username: string
    password: string
    email: string
    userRole: string
}

export type TokenContextType = {
    user: User | null
    token: string | null
    setToken: (token: string | null) => void
    LogIn: (token: string) => void
    LogOut: () => void
    setUser: (user: User | null) => void
}

export interface Bicicleta {
    id: number
    marca: string
    color: string
    estado: 'disponible' | 'en alquiler' | 'mantenimiento' | 'fuera de servicio'
    precio_alquiler: number
    regional: string
}

export interface Ciudad {
    id: number
    nombre: string
    longitud: number
    latitud: number
}

export interface CicloPaseo {
    id: number
    titulo: string
    descripcion: string
    fecha: string
    recorrido: Recorrido
}

export interface Recorrido {
    id: number
    origen: "bogota" | "medellin" | "cali" | "cartagena"
    destino: "bogota" | "medellin" | "cali" | "cartagena"
}