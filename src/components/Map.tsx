import { useEffect, useRef, useState } from 'react';

const cityCoordinates = {
    bogota: { lat: 4.7110, lng: -74.0721 },
    medellin: { lat: 6.2442, lng: -75.5812 },
    cali: { lat: 3.4516, lng: -76.5320 },
    cartagena: { lat: 10.3910, lng: -75.4794 }
}

const Map = ({ city }: { city: keyof typeof cityCoordinates }) => {
    const [map, setMap] = useState<google.maps.Map>();
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current && !map) {
            const coordinates = cityCoordinates[city];
            const newMap = new window.google.maps.Map(mapRef.current, {
                center: coordinates,
                zoom: 10,
            });
            setMap(newMap);

            new window.google.maps.Marker({
                position: coordinates,
                map: newMap,
                title: `Marca en ${city}`,
            });
        }
    }, [map, city]);

    return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default Map;