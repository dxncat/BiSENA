import { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TokenContext } from "@/context/TokenContext";
import { CicloPaseo, TokenContextType } from "@/@types/types";
import Map from "@/components/Map";

function BicicletaDetail() {
    const { id } = useParams()
    const { token } = useContext(TokenContext) as TokenContextType
    const navigate = useNavigate()
    const [ciclopaseo, setCiclopaseo] = useState<CicloPaseo>()

    useEffect(() => {
        const fetchBicicleta = async () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/ciclopaseos/${id}`, requestOptions)
            if (!response.ok) {
                navigate('/*')
            } else {
                const data = await response.json()
                setCiclopaseo(data)
            }
        }

        fetchBicicleta()
    }, [token, id, navigate])

    const formatDate = (dateString: string) => {
        return dateString.split('T')[0];
    };

    return <div className="flex h-full">
        <div className="w-1/2 p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Información de la Bicicleta</h2>
            <ul className="space-y-2">
                <li><strong>ID:</strong> {ciclopaseo?.id}</li>
                <li><strong>Fecha:</strong> {ciclopaseo?.fecha ? formatDate(ciclopaseo.fecha) : ''}</li>
                <li><strong>Titulo:</strong> {ciclopaseo?.titulo}</li>
                <li><strong>Descripción:</strong> {ciclopaseo?.descripcion}</li>
                <li><strong>Origen:</strong> {ciclopaseo?.recorrido.origen}</li>
                <li><strong>Destino:</strong> {ciclopaseo?.recorrido.destino}</li>
            </ul>
        </div>
        <div className="w-1/2">
            <Map city={ciclopaseo?.recorrido.origen ?? "bogota"} />
        </div>
    </div>
}

export default BicicletaDetail;