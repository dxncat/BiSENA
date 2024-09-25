import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Definir el esquema para la validación del formulario usando Zod
const formSchema = z.object({
    username: z.string().min(5, {
        message: "El nombre de usuario debe tener al menos 5 caracteres.",
    }),
    password: z.string().min(2, {
        message: "La contraseña de usuario debe tener al menos 2 caracteres.",
    })
})

const FormLogin = () => {

    const [message, setMessage] = useState<string>('')

    // Inicializar el formulario con valores predeterminados y el esquema de validación
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // Valores predeterminados para el formulario
            username: "",
            password: ""
        },
    })

    // Función para manejar el envío del formulario
    function onSubmit(values: z.infer<typeof formSchema>) {
        const Login = async () => {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            }
            const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, requestOptions)
            const data = await response.json()
            if (!response.ok) {
                setMessage(data.message)
            } else {
                localStorage.setItem('token', data.token as string);
                window.location.href = '/'
            }
        }

        Login()
    }

    // Renderizar el formulario
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Campo para la entrada del correo electrónico */}
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="capitalize">Usuario</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe aquí tu usuario." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Campo para la entrada de la contraseña */}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="capitaliza">Contraseña</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe aquí tu contraseña." {...field} type="password" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <p className="text-red-600" >{message}</p>
                {/* Botón de envío */}
                <Button type="submit">Iniciar Sesión</Button>
            </form>
        </Form>
    )
}

export default FormLogin