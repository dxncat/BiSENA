import { LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import { TokenContext } from "@/context/TokenContext"
import { useContext } from 'react'

function LoginButton() {
    const { setToken } = useContext(TokenContext) as unknown as { setToken: (token: null) => void }

    const handleClick = () => {
        setToken(null)
    }

    return (
        <Button className="w-full mt-4 hover:bg-blue-700" onClick={handleClick}>
            <LogOutIcon className="h-4 w-4 mr-2" />
            Cerrar Sesión
        </Button>
    )
}

export default LoginButton