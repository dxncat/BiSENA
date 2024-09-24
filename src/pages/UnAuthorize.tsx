import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import { HomeIcon, ShieldAlertIcon } from 'lucide-react'

export default function Unauthorize() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center">
                <ShieldAlertIcon className="mx-auto h-24 w-24 text-red-500 mb-4" />
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Acceso No Autorizado</h1>
                <p className="text-xl text-gray-700 mb-8">Lo sentimos, no tienes permiso para acceder a esta página.</p>
            </div>
            <Button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
            >
                <HomeIcon className="mr-2 h-5 w-5" />
                Volver al inicio
            </Button>
            <div className="mt-12 text-gray-600">
                <p>Si crees que esto es un error, por favor contacta al soporte técnico.</p>
            </div>
        </div>
    )
}