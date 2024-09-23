import { LogInIcon } from "lucide-react"
import { Button } from "./ui/button"

function LoginButton() {
    return (
        <Button className="w-full mt-4 hover:bg-blue-700">
            <LogInIcon className="h-4 w-4 mr-2" />
            Iniciar Sesión
        </Button>
    )
}

export default LoginButton