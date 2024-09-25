import { useContext } from "react"
import { TokenContext } from "@/context/TokenContext"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Ride from '/ride.svg'
import { TokenContextType } from "@/@types/types"

const Home = () => {
    const { user } = useContext(TokenContext) as TokenContextType

    return (
        <section className='h-[90vh] grid grid-cols-1 md:grid-cols-8'>
            <div className='md:col-span-5 flex items-center justify-center p-8'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-5xl font-bold'> Hola <span>{user?.name}!</span> Bienvenid@ a BiSENA</h1>
                    <p className='text-xl'>La mejor plataforma para los fanáticos de andar bici y vivir miles de experiencias nuevas.</p>
                    <div className='flex items-center gap-4'>
                        <Link to={"/ciclopaseos"}>
                            <Button>
                                Mira los recorridos existentes
                            </Button>
                        </Link>

                        {user?.userRole === 'ADMIN' &&
                            <Link to={"/ciclopaseos"}>
                                <Button>
                                    Publica un nuevo recorrido
                                </Button>
                            </Link>
                        }

                    </div>
                </div>
            </div>
            <div className='md:col-span-3 mt-16 mr-8'>
                <img src={Ride} alt="" />
            </div>
        </section>
    )
}

export default Home