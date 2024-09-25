import { Bicicleta, TokenContextType } from "@/@types/types"
import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { TokenContext } from "@/context/TokenContext"
import TablaBicicletas from "@/components/tablas/TablaBicicletas"

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
            if (response.status === 401) {
                navigate('/unauthorize')
            } else {
                const data = await response.json()
                setCiclas(data)
            }
        }
        fetchUser()
    }, [navigate, token])
    return (
        <div>
            <h1>Bicicletas</h1>
            <TablaBicicletas ciclas={ciclas} />
        </div>
    )
}

export default ListadoBicicletas