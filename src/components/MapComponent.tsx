import React, { useEffect, useState } from 'react';

import { Map, Marker } from 'react-map-gl';

import { MAPBOX_TOKEN } from './../utils/MAP_BOX_TOKEN';

import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
    className?: string;
    height?: string;
    address: {
        postcode: string;
        city: string;
        country: string;
        street: string;
        number: string | number;
    };
}

const MapComponent = ({ className, height, address }: MapProps) => {
    const [coordinatesArray, setCoordinatesArray] = useState([0, 0]);

    type ResponseApi = {
        features: [{ center: [number, number] }];
    };

    useEffect((): void => {
        const stringURL = `${address?.street} ${address?.number} ${address?.postcode} ${address?.city} ${address?.country}`;
        const encodeURL: string = encodeURIComponent(stringURL);

        const geoCodeAddress = async (apiURL: string) => {
            const endpoint = 'mapbox.places';
            const mapBoxResponse: Response = await fetch(
                `https://api.mapbox.com/geocoding/v5/${endpoint}/${apiURL}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAPBOX_TOKEN}&limit=1`,
            );
            const response: ResponseApi = await mapBoxResponse.json();
            const coordinatesArray = response?.features[0].center;

            setCoordinatesArray(coordinatesArray);
        };
        if (encodeURL) {
            geoCodeAddress(encodeURL);
        }
    }, [address?.street, address?.number, address?.postcode, address?.city, address?.country]);

    return (
        <>
            {coordinatesArray[0] !== 0 && coordinatesArray[1] !== 0 && (
                <span className={className} style={{ height: `${height}` }}>
                    <Map
                        mapStyle="mapbox://styles/mapbox/streets-v9"
                        style={{
                            width: '100%',
                            borderRadius: '10px',
                        }}
                        initialViewState={{
                            longitude: coordinatesArray[0],
                            latitude: coordinatesArray[1],
                            zoom: 12,
                        }}
                        mapboxAccessToken={MAPBOX_TOKEN}
                    >
                        <Marker longitude={coordinatesArray[0]} latitude={coordinatesArray[1]} anchor="bottom"></Marker>
                    </Map>
                </span>
            )}
        </>
    );
};

export default MapComponent;
