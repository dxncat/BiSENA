import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
    correo: z.string().min(5, {
        message: "El correo electrónico debe tener al menos 5 caracteres.",
    }).email({
        message: "Por favor, introduce un correo electrónico válido.",
    }),
    contraseña: z.string().min(2, {
        message: "La contraseña de usuario debe tener al menos 2 caracteres.",
    })
})

const FormLogin = () => {
    // Inicializar el formulario con valores predeterminados y el esquema de validación
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            // Valores predeterminados para el formulario
            correo: "",
            contraseña: ""
        },
    })

    // Función para manejar el envío del formulario
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    // Renderizar el formulario
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Campo para la entrada del correo electrónico */}
                <FormField
                    control={form.control}
                    name="correo"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="capitalize">Correo electrónico</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe aquí tu correo electrónico." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Campo para la entrada de la contraseña */}
                <FormField
                    control={form.control}
                    name="contraseña"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="capitaliza">Contraseña</FormLabel>
                            <FormControl>
                                <Input placeholder="Escribe aquí tu contraseña." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Botón de envío */}
                <Button type="submit">Iniciar Sesión</Button>
            </form>
        </Form>
    )
}

export default FormLogin