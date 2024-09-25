import { Ciudad } from '@/@types/types';
import { useState } from 'react';
import { FormRenta } from '@/components/forms/FormRenta';

function RentaBicicleta() {
    const [cities,] = useState<Ciudad[]>([{
        id: 1,
        nombre: 'Bogotá',
        longitud: 4.7110,
        latitud: -74.0721
    }, {
        id: 2,
        nombre: 'Medellín',
        longitud: 6.2442,
        latitud: -75.5812
    }, {
        id: 3,
        nombre: 'Cali',
        longitud: 3.4516,
        latitud: -76.5320
    }, {
        id: 4,
        nombre: 'Cartagena',
        longitud: 10.3910,
        latitud: -75.4794
    }]);

    // useEffect(() => {
    //     // Reemplaza esta URL con la URL de tu API
    //     fetch('https://api.example.com/cities')
    //         .then(response => response.json())
    //         .then(data => setCities(data))
    //         .catch(error => console.error('Error fetching cities:', error));
    // }, []);

    return (
        <div className="flex items-center justify-center flex-col h-[100vh] w-full">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Renta tu bicicleta</h1>
            <div className='w-full'>
                <FormRenta ciudades={cities} />
            </div>
        </div>
    );
}

export default RentaBicicleta;