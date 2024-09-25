import { LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import { TokenContext } from "@/context/TokenContext"
import { useContext } from 'react'
import { TokenContextType } from "@/@types/types"
import { useNavigate } from "react-router-dom"

function LoginButton() {
    const { setToken, setUser } = useContext(TokenContext) as TokenContextType
    const navigate = useNavigate()

    const handleClick = () => {
        setToken(null)
        setUser(null)
        navigate('/')
    }

    return (
        <Button className="w-full mt-4 hover:bg-blue-700" onClick={handleClick}>
            <LogOutIcon className="h-4 w-4 mr-2" />
            Cerrar Sesión
        </Button>
    )
}

export default LoginButton