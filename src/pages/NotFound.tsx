import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom'
import { HomeIcon } from 'lucide-react'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="h-full flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-gray-900">404</h1>
                <p className="text-4xl font-bold text-gray-700 mt-4">Página no encontrada</p>
                <p className="text-lg text-gray-600 mt-4">Lo sentimos, la página que estás buscando no existe.</p>
            </div>
            <div className="mt-8">
                <Button
                    onClick={() => navigate('/')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg flex items-center"
                >
                    <HomeIcon className="mr-2 h-5 w-5" />
                    Volver al inicio
                </Button>
            </div>
            <div className="mt-12">
                <svg
                    className="w-64 h-64 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </div>
        </div>
    )
}