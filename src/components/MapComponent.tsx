import React, { useEffect, useState } from 'react';

import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, Marker } from 'react-map-gl';

import { MAPBOX_TOKEN } from './../utils/MAP_BOX_TOKEN';

interface MapProps {
    height: string;
    address: {
        postcode: string;
        city: string;
        country: string;
        street: string;
        number: string | number;
    };
}

const MapComponent = ({ height, address }: MapProps) => {
    const [coordinatesArray, setCoordinatesArray] = useState([0, 0]);

    type ResponseApi = {
        features: [{ center: [number, number] }];
    };

    useEffect((): void => {
        let stringURL: string = `${address?.street} ${address?.number} ${address?.postcode} ${address?.city} ${address?.country}`;
        let encodeURL: string = encodeURIComponent(stringURL);

        const geoCodeAddress = async (apiURL: string) => {
            const endpoint: string = 'mapbox.places';
            const mapBoxResponse: Response = await fetch(
                `https://api.mapbox.com/geocoding/v5/${endpoint}/${apiURL}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAPBOX_TOKEN}&limit=1`,
            );
            let response: ResponseApi = await mapBoxResponse.json();
            let coordinatesArray = response?.features[0].center;

            setCoordinatesArray(coordinatesArray);
        };
        if (encodeURL) {
            geoCodeAddress(encodeURL);
        }
    }, [address?.street, address?.number, address?.postcode, address?.city, address?.country]);

    return (
        <>
            {coordinatesArray[0] !== 0 && coordinatesArray[1] !== 0 && (
                <span style={{ height: `${height}` }}>
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
