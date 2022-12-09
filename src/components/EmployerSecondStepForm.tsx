import React, { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from './../Context/FormContext';

const EmployerSecondStepForm = () => {
    const { employerAnnouncement, setAnnouncementField } = useContext(FormContext) as FormContextProvider;
    return (
        <div className="employer__fields">
            <div>
                <label>Contract</label>
                <input
                    value={employerAnnouncement.contract}
                    onChange={(e) => setAnnouncementField(e, 'contract')}
                    type="text"
                    title="Insert contract details"
                ></input>
            </div>
            <div>
                <label>Location</label>
                <input
                    value={employerAnnouncement.location}
                    onChange={(e) => setAnnouncementField(e, 'location')}
                    type="text"
                    title="Insert company location"
                ></input>
            </div>
            <div>
                <label>Technical languages</label>
                <input type="text" title="Insert technical languages"></input>
            </div>
            <div>
                <label>Technical Tools</label>
                <input type="text" title="Insert technical tools"></input>
            </div>
        </div>
    );
};

export default EmployerSecondStepForm;
