import { Link, useLocation } from 'react-router-dom'
import { HomeIcon, BarChartIcon, SettingsIcon } from "lucide-react"
import { useContext } from 'react'
import { TokenContext } from '@/context/TokenContext'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'

export default function Sidebar() {

    const location = useLocation()
    const { token } = useContext(TokenContext) as unknown as { token: string }

    const navItems = [
        { name: "Inicio", icon: <HomeIcon className="h-4 w-4 mr-2" />, path: "/" },
        { name: "Dashboard", icon: <BarChartIcon className="h-4 w-4 mr-2" />, path: "/dashboard" },
        { name: "Configuración", icon: <SettingsIcon className="h-4 w-4 mr-2" />, path: "/settings" },
    ]



    return (
        <aside className="flex flex-col w-64 h-screen bg-white border-r p-6">
            <div className="flex items-center mb-8">
                <span className="text-2xl font-bold text-gray-900">LOGO</span>
            </div>
            <nav className="space-y-2 mb-auto">
                {navItems.map((item) => (
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