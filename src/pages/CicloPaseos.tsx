import { useContext, useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { Link } from 'react-router-dom'
import { CicloPaseo, TokenContextType } from '@/@types/types'
import { TokenContext } from '@/context/TokenContext'


export default function CyclingEventsList() {
    const [registeredEvents, setRegisteredEvents] = useState<{ [key: number]: boolean }>({})
    const [ciclopaseos, setCiclopaseo] = useState<CicloPaseo[]>([])
    const { token } = useContext(TokenContext) as TokenContextType
    const { toast } = useToast()

    useEffect(() => {
        const fetchCicloPaseos = async () => {

            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/ciclopaseos/all`, requestOptions)
            const data = await response.json()
            if (response.status === 302) {
                setCiclopaseo(data)
            } else {
                console.log(response)
            }
        }

        fetchCicloPaseos()
    }, [token])

    const toggleRegistration = (event: CicloPaseo) => {
        setRegisteredEvents(prev => {
            const newState = { ...prev, [event.id]: !prev[event.id] }
            if (newState[event.id]) {
                toast({
                    title: "¡Inscripción exitosa!",
                    description: `Te has inscrito en el evento: ${event.titulo}`
                })
            }
            return newState
        })
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Eventos de CicloPaseos</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {ciclopaseos.map((event) => (
                    <Card key={event.id} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{event.titulo}</CardTitle>
                            <p className="text-sm text-muted-foreground">Fecha: {event.fecha}</p>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{event.descripcion}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button
                                onClick={() => toggleRegistration(event)}
                                variant={registeredEvents[event.id] ? "secondary" : "default"}
                            >
                                {registeredEvents[event.id] ? "Registrado" : "Registrarse"}
                            </Button>
                            <Link to={`/ciclopaseos/details/${event.id}`}>
                                <Button variant="link">Ver detalles</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}