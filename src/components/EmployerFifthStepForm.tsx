/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect, useState } from 'react';

import clsx from 'clsx';

import { FormContextProvider } from '../@types/FormContext';
import { JobListObject } from '../@types/JobListTypes';
import { FormContext } from '../Context/FormContext';
import { useEmployerForm } from '../hook/useEmployerForm';
import { MAPBOX_TOKEN } from '../utils/MAP_BOX_TOKEN';

import ErrorPage from './Error';

const EmployerFifthStepForm = () => {
    const [isFocused, setIsFocused] = useState(false);
    const { employerAnnouncement, setEmployerAnnouncement, setEmployerAnnouncementFiledGroup, unlockedStepNumbers } =
        useContext(FormContext) as FormContextProvider;

    const { validationError } = useEmployerForm();

    useEffect(() => {
        const { city, street, postcode, country } = employerAnnouncement.address;

        const fetchAutoFill = async (encodedURL: string) => {
            const endpoint = 'mapbox.places';
            const mapBoxResponse: Response = await fetch(
                `https://api.mapbox.com/geocoding/v5/${endpoint}/${encodedURL}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAPBOX_TOKEN}&limit=1`,
            );
            const response = await mapBoxResponse.json();
            const responsePath = response?.features[0].context;
            const country = responsePath.find((elem: any) => (elem?.id.includes('country') ? elem : ''));
            const postcode = responsePath.find((elem: any) => (elem?.id.includes('postcode') ? elem : ''));

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
            const encodedURL = encodeURIComponent(`${city} ${street}`);
            fetchAutoFill(encodedURL);
        }
        // eslint-disable-next-line
    }, [employerAnnouncement.address, isFocused]);

    return (
        <>
            {unlockedStepNumbers.includes(5) ? (
                <div className="employer__fields">
                    <span className={clsx(validationError?._infoFifthStep ? 'info' : 'success')}>
                        {validationError?._infoFifthStep ?? 'All looks good. Take a look at summary!????'}
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
            ) : (
                <ErrorPage path="/employer-panel/step=1" className="employer__error" />
            )}
        </>
    );
};

export default EmployerFifthStepForm;
