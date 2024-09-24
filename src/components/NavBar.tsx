import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, BarChartIcon, BikeIcon } from "lucide-react"
import { useContext } from 'react'
import { TokenContext } from '@/context/TokenContext'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import Logo from '/logo.svg'
import { TokenContextType } from '@/@types/tokenContext'

export default function Sidebar() {

    const location = useLocation()
    const { user, token } = useContext(TokenContext) as TokenContextType

    const navItemsAdmin = [
        { name: "Ciclopaseos", icon: <HomeIcon className="h-4 w-4 mr-2" />, path: "/" },
        { name: "Bicicletas", icon: <BikeIcon className="h-4 w-4 mr-2" />, path: "/settings" },
        { name: "Dashboard", icon: <BarChartIcon className="h-4 w-4 mr-2" />, path: "/dashboard" },
    ]

    const navItemsUser = [
        { name: "Ciclopaseos", icon: <HomeIcon className="h-4 w-4 mr-2" />, path: "/" },
        { name: "Renta tu bicicleta", icon: <BikeIcon className="h-4 w-4 mr-2" />, path: "/settings" },
        { name: "Mi Perfil", icon: <BikeIcon className="h-4 w-4 mr-2" />, path: "/settings" },
        { name: "Mis viajes", icon: <BikeIcon className="h-4 w-4 mr-2" />, path: "/settings" },
    ]

    return (
        <aside className="flex flex-col w-64 h-screen bg-white border-r p-6">
            <div className="flex items-center mb-8">
                <span className="text-2xl font-bold text-gray-900 flex items-center justify-center space-x-4 w-full"><img src={Logo} alt="logo" title='logo' className='w-[40px]' />BiSENA</span>
            </div>
            <nav className="space-y-2 mb-auto">
                {user?.rol === 'ADMIN' ? navItemsAdmin.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center px-4 py-2 rounded-md transition-colors ${location.pathname === item.path
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                )) : navItemsUser.map((item) => (
                    <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center px-4 py-2 rounded-md transition-colors ${location.pathname === item.path
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-700 hover:bg-gray-100'
                            }`}
                    >
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </nav>
            {token ? <LogoutButton /> : <Link to={'/login'}><LoginButton /></Link>}
        </aside>
    )
}