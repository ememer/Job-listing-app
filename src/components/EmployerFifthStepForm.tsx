import React, { useContext, useEffect, useState } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { JobListObject } from '../@types/JobListTypes';
import { FormContext } from '../Context/FormContext';

const MAPBOX_TOKEN: string = 'pk.eyJ1IjoiZW1lbWVyIiwiYSI6ImNsYWxlYXM5YzA0b3Azb3BldGxucjdzcHgifQ.A213Odf8YgfWddgNjfEdrw';

const EmployerFifthStepForm = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { employerAnnouncement, setEmployerAnnouncement, setEmployerAnnouncementFiledGroup } = useContext(
        FormContext,
    ) as FormContextProvider;

    useEffect(() => {
        const { city, street, postcode, country } = employerAnnouncement.address;

        const fetchAutoFill = async (encodedURL: string) => {
            const endpoint = 'mapbox.places';
            const mapBoxResponse: Response = await fetch(
                `https://api.mapbox.com/geocoding/v5/${endpoint}/${encodedURL}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAPBOX_TOKEN}&limit=1`,
            );
            let response = await mapBoxResponse.json();
            let responsePath = response?.features[0].context;
            let country = responsePath.find((elem: any) => (elem?.id.includes('country') ? elem : ''));
            let postcode = responsePath.find((elem: any) => (elem?.id.includes('postcode') ? elem : ''));

            setEmployerAnnouncement((pS: JobListObject) => ({
                ...pS,
                address: {
                    ...pS.address,
                    postcode: postcode?.text,
                    country: country?.text,
                },
            }));
        };

        if (city && street && isFocused && !postcode && !country) {
            let encodedURL = encodeURIComponent(`${city} ${street}`);
            fetchAutoFill(encodedURL);
        }
    }, [employerAnnouncement.address, isFocused]);

    return (
        <div className="employer__fields">
            <div>
                <label>City</label>
                <input
                    value={employerAnnouncement.address.city}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'city')}
                    type="text"
                    title="Insert city"
                ></input>
            </div>
            <div>
                <label>Full street name</label>
                <input
                    value={employerAnnouncement.address.street}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'street')}
                    type="text"
                    title="Insert street"
                ></input>
            </div>
            <div>
                <label>Building number</label>
                <input
                    onFocus={() => setIsFocused(!isFocused)}
                    value={employerAnnouncement.address.number}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'number')}
                    type="text"
                    title="Insert building number"
                ></input>
            </div>
            <div>
                <label>ZIP / Postcode</label>
                <input
                    value={employerAnnouncement.address.postcode}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'postcode')}
                    type="text"
                    title="Insert postcode"
                ></input>
            </div>
            <div>
                <label>Country</label>
                <input
                    value={employerAnnouncement.address.country}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'country')}
                    type="text"
                    title="Insert country"
                ></input>
            </div>
            <button onClick={() => console.log(employerAnnouncement)}>SPRAWDZAM</button>
        </div>
    );
};

export default EmployerFifthStepForm;
