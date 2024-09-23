import FormLogin from "@/components/FormLogin"

const Login = () => {
    return (
        <>
            <div className="flex h-full">
                <div className="flex-1 flex items-center justify-center">
                    <div className="w-[80%]">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">Inicia Sesión</h1>
                        <FormLogin />
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <img src="/authentication.png" alt="Authentication" className="w-[50%] object-cover" />
                </div>
            </div>
        </>
    )
}

export default Login