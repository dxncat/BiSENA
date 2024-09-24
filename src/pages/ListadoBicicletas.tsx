import { Bicicleta, TokenContextType } from "@/@types/types"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TokenContext } from "@/context/TokenContext"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function ListadoBicicletas() {
    const [ciclas, setCiclas] = useState<Bicicleta[]>([])
    const { token } = useContext(TokenContext) as TokenContextType
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/unauthorize')
        }
        const fetchUser = async () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            }
            const response = await fetch(`${import.meta.env.VITE_API_URL}/bicicletas`, requestOptions)
            console.log(response)
            if (response.status === 401) {
                navigate('/unauthorize')
            } else {
                const data = await response.json()
                console.log(data)
                setCiclas(data)
            }
        }
        fetchUser();
    }, [navigate, token])
    return (
        <div>
            <h1>Bicicletas</h1>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Id</TableHead>
                        <TableHead>Marca</TableHead>
                        <TableHead>Color</TableHead>
                        <TableHead>Estado</TableHead>
                        <TableHead>Regional</TableHead>
                        <TableHead className="text-right">Precio</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {ciclas.map((cicla) => (
                        <TableRow key={cicla.id}>
                            <TableCell className="font-medium">{cicla.id}</TableCell>
                            <TableCell>{cicla.marca}</TableCell>
                            <TableCell>{cicla.color}</TableCell>
                            <TableCell>{cicla.estado}</TableCell>
                            <TableCell>{cicla.regional}</TableCell>
                            <TableCell className="text-right">{cicla.precio_alquiler}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={5}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}

export default ListadoBicicletas