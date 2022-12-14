import React, { useContext, useEffect, useState } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { JobListObject } from '../@types/JobListTypes';
import { FormContext } from '../Context/FormContext';

import clsx from 'clsx';
import { useEmployerForm } from '../hook/useEmployerForm';

import { MAPBOX_TOKEN } from '../utils/MAP_BOX_TOKEN';

const EmployerFifthStepForm = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { employerAnnouncement, setEmployerAnnouncement, setEmployerAnnouncementFiledGroup } = useContext(
        FormContext,
    ) as FormContextProvider;

    const { validationError } = useEmployerForm();

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
        // eslint-disable-next-line
    }, [employerAnnouncement.address, isFocused]);

    return (
        <div className="employer__fields">
            <span className={clsx(validationError?._infoFifthStep ? 'info' : 'success')}>
                {validationError?._infoFifthStep ?? "All looks good. Take a look at summary!🎉"}
            </span>
            <div>
                <label>
                    City <span>*</span>
                </label>
                <input
                    value={employerAnnouncement.address.city}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'city')}
                    type="text"
                    title="Insert city"
                />
            </div>
            <div>
                <label>
                    Full street name <span>*</span>
                </label>
                <input
                    value={employerAnnouncement.address.street}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'street')}
                    type="text"
                    title="Insert street"
                />
            </div>
            <div>
                <label>
                    Building number <span>*</span>
                </label>
                <input
                    onFocus={() => setIsFocused(!isFocused)}
                    value={employerAnnouncement.address.number}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'number')}
                    type="text"
                    title="Insert building number"
                />
            </div>
            <div>
                <label>
                    ZIP / Postcode <span>*</span>
                </label>
                <input
                    value={employerAnnouncement.address.postcode}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'postcode')}
                    type="text"
                    title="Insert postcode"
                />
            </div>
            <div>
                <label>
                    Country <span>*</span>
                </label>
                <input
                    value={employerAnnouncement.address.country}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'address', 'country')}
                    type="text"
                    title="Insert country"
                />
            </div>
        </div>
    );
};

export default EmployerFifthStepForm;
