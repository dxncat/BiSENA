import { Bicicleta } from "@/@types/types"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ToggleMEnu from "../ToggleMEnu"
import { useNavigate } from "react-router-dom"

function TablaBicicletas({ ciclas }: { ciclas: Bicicleta[] }) {
    const navigate = useNavigate()
    return (
        <Table>
            <TableCaption>Listado de bicicletas.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Id</TableHead>
                    <TableHead>Marca</TableHead>
                    <TableHead>Color</TableHead>
                    <TableHead>Estado</TableHead>
                    <TableHead>Regional</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {ciclas.map((cicla) => (
                    <TableRow key={cicla.id} onClick={() => navigate(`/bicicletas/${cicla.id}`)} className="cursor-pointer">
                        <TableCell className="font-medium">{cicla.id}</TableCell>
                        <TableCell>{cicla.marca}</TableCell>
                        <TableCell>{cicla.color}</TableCell>
                        <TableCell>{cicla.estado}</TableCell>
                        <TableCell>{cicla.regional}</TableCell>
                        <TableCell>{cicla.precio_alquiler}</TableCell>
                        <TableCell className="text-right"><ToggleMEnu id={cicla.id} /></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default TablaBicicletas