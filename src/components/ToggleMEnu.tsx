import { TokenContextType } from "@/@types/types"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TokenContext } from "@/context/TokenContext"
import { MoreHorizontal } from "lucide-react"
import { useContext } from "react"
import { useToast } from "@/hooks/use-toast"


function ToggleMEnu({ id }: { id: number }) {

    const { token } = useContext(TokenContext) as TokenContextType
    const { toast } = useToast()

    const handleClick = async ({ accion }: { accion: string }) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: accion
        }

        const request = await fetch(`${import.meta.env.VITE_API_URL}/bicicletas/${id}/estado`, requestOptions)

        if (request.status === 401) {
            toast({
                title: "Error al cambiar el estado",
                description: "No tienes permisos para realizar esta accion",
            })
        } else if (request.status === 404) {
            toast({
                title: "Error al cambiar el estado",
                description: "No se encontro la bicicleta",
            })
        } else if (request.status !== 200) {
            toast({
                title: "Error al cambiar el estado",
                description: "Error desconocido",
            })
        } else {
            toast({
                title: "Bicicleta actualizada con exito",
                description: `La bicicleta ${id} ahora esta ${accion}`
            })
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger><MoreHorizontal className="inline" /></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Cambiar Estado</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-green-500" onClick={() => handleClick({ accion: "Disponible" })}>Disponible</DropdownMenuItem>
                <DropdownMenuItem className="text-yellow-500" onClick={() => handleClick({ accion: "Alquiler" })}>Alquiler</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600" onClick={() => handleClick({ accion: "Mantenimiento" })}>Mantenimiento</DropdownMenuItem>
                <DropdownMenuItem className="text-orange-500" onClick={() => handleClick({ accion: "Fuera de servicio" })}>Fuera de servicio</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ToggleMEnu