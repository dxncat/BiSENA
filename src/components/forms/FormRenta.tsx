import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown } from "lucide-react"
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Ciudad, TokenContextType } from "@/@types/types"
import { useContext } from "react"
import { TokenContext } from "@/context/TokenContext"

const FormSchema = z.object({
    destino: z.string({
        required_error: "Por favor selecciona un destino.",
    }),
    origen: z.string({
        required_error: "Por favor selecciona un origen.",
    }),
})

export function FormRenta({ ciudades }: { ciudades: Ciudad[] }) {

    const { token } = useContext(TokenContext) as TokenContextType

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        const postData = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/recorridos/crear`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                data = await response.json()
            }
        }

        postData()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="origen"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Origen</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-full justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? ciudades.find(
                                                    (ciudad) => ciudad.nombre === field.value
                                                )?.nombre
                                                : "Selecciona tu origen."}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[100%] p-0">
                                    <Command>
                                        <CommandInput placeholder="Busca tu origen." />
                                        <CommandList>
                                            <CommandEmpty>Origen no encontrado.</CommandEmpty>
                                            <CommandGroup>
                                                {ciudades.map((ciudad) => (
                                                    <CommandItem
                                                        value={ciudad.nombre}
                                                        key={ciudad.id}
                                                        onSelect={() => {
                                                            form.setValue("origen", ciudad.nombre)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                ciudad.nombre === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {ciudad.nombre}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="destino"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Destino</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                "w-full justify-between",
                                                !field.value && "text-muted-foreground"
                                            )}
                                        >
                                            {field.value
                                                ? ciudades.find(
                                                    (ciudad) => ciudad.nombre === field.value
                                                )?.nombre
                                                : "Selecciona tu destino."}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[100%] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search language..." />
                                        <CommandList>
                                            <CommandEmpty>No language found.</CommandEmpty>
                                            <CommandGroup>
                                                {ciudades.map((ciudad) => (
                                                    <CommandItem
                                                        value={ciudad.nombre}
                                                        key={ciudad.id}
                                                        onSelect={() => {
                                                            form.setValue("destino", ciudad.nombre)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                "mr-2 h-4 w-4",
                                                                ciudad.nombre === field.value
                                                                    ? "opacity-100"
                                                                    : "opacity-0"
                                                            )}
                                                        />
                                                        {ciudad.nombre}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Siguiente</Button>
            </form>
        </Form>
    )
}