import React, { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';

const EmployerThirdStepForm = () => {
    const { employerAnnouncement, setAnnouncementField } = useContext(FormContext) as FormContextProvider;

    return (
        <div className="employer__fields">
            <div>
                <label>Company Logo HTTP link</label>
                <input
                    value={employerAnnouncement.logo}
                    onChange={(e) => setAnnouncementField(e, 'logo')}
                    type="text"
                    title="Insert link for company logo"
                ></input>
            </div>
            {employerAnnouncement.logo && (
                <div>
                    <label>Logo preview</label>
                    <div className="fields__logo" style={{ backgroundImage: `url("${employerAnnouncement.logo}")` }} />
                </div>
            )}
            <div>
                <label>Announcement photo HTTP link </label>
                <input
                    value={employerAnnouncement.image}
                    onChange={(e) => setAnnouncementField(e, 'image')}
                    type="text"
                    title="Insert link for announcement photo"
                ></input>
            </div>
            {employerAnnouncement.image && (
                <div>
                    <label>Photo preview</label>
                    <div
                        className="fields__photo"
                        style={{ backgroundImage: `url("${employerAnnouncement.image}")` }}
                    />
                </div>
            )}
        </div>
    );
};

export default EmployerThirdStepForm;
