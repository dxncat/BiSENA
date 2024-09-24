import { useContext } from "react"
import { TokenContext } from "@/context/TokenContext"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Ride from '/ride.svg'
import { TokenContextType } from "@/@types/types"
import Map from "@/components/Map"


const Home = () => {
    const { user } = useContext(TokenContext) as TokenContextType

    return (
        <section className='h-[90vh] grid grid-cols-1 md:grid-cols-8'>
            <div className='md:col-span-5 flex items-center justify-center p-8'>
                <div className='flex flex-col gap-8'>
                    <h1 className='text-5xl font-bold'>Bienvenid@ a BiSENA</h1>

                    <div className='flex items-center gap-4'>
                        <Link to={"/new-post"}>
                            <Button>
                                Mira los recorridos existentes
                            </Button>
                        </Link>

                        {user?.rol === 'ADMIN' &&
                            <Link to={"/new-post"}>
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
            <div className="bg-black w-[100vh] h-[100vh]">
                <Map />
            </div>
        </section>
    )
}

export default Home