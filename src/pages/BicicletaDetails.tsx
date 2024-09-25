import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TokenContext } from "@/context/TokenContext";
import { Bicicleta, TokenContextType } from "@/@types/types";
import Map from "@/components/Map";

function BicicletaDetail() {
    const { id } = useParams()
    const { token } = useContext(TokenContext) as TokenContextType
    const navigate = useNavigate()
    const [bicycle, setBicycle] = useState<Bicicleta>()

    useEffect(() => {
        const fetchBicicleta = async () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/bicicletas/${id}`, requestOptions)
            if (!response.ok) {
                navigate('/*')
            } else {
                const data = await response.json()
                setBicycle(data)
            }
        }

        fetchBicicleta()
    }, [token, id, navigate])

    return <div className="flex h-full">
        <div className="w-1/2 p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Información de la Bicicleta</h2>
            <ul className="space-y-2">
                <li><strong>ID:</strong> {bicycle?.id}</li>
                <li><strong>Marca:</strong> {bicycle?.marca}</li>
                <li><strong>Color:</strong> {bicycle?.color}</li>
                <li><strong>Estado:</strong> {bicycle?.estado}</li>
                <li><strong>Precio de Alquiler:</strong> ${bicycle?.precio_alquiler.toFixed(3)}</li>
                <li><strong>Regional:</strong> {bicycle?.regional}</li>
            </ul>
        </div>
        <div className="w-1/2">
            <Map city="bogota" />
        </div>
    </div>
}

export default BicicletaDetail;