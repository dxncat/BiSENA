import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenContext } from '@/context/TokenContext'
import { TokenContextType } from '@/@types/types'


function DashBoard() {

    const { user } = useContext(TokenContext) as TokenContextType
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user?.userRole)
        const control = () => user?.userRole != 'ADMIN' && navigate('/unauthorize')
        control()
    }, [user, navigate])

    return (
        <div>DashBoard</div>
    )
}

export default DashBoard