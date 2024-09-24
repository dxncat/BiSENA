import { useEffect, useRef, useState } from 'react';

const Map = () => {
    const [map, setMap] = useState<google.maps.Map>();
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current && !map) {
            const newMap = new window.google.maps.Map(mapRef.current, {
                center: { lat: 4.4333479181711075, lng: -75.21505129646759 },
                zoom: 10,
            });
            setMap(newMap);

            new window.google.maps.Marker({
                position: { lat: 4.4333479181711075, lng: -75.21505129646759 },
                map: newMap,
                title: 'Mi Marca',
            });
        }
    }, [map]);

    return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default Map;