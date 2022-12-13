import React, { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';
import { useEmployerForm } from '../hook/useEmployerForm';
import { clsx } from 'clsx';

const EmployerThirdStepForm = () => {
    const { employerAnnouncement, setAnnouncementField } = useContext(FormContext) as FormContextProvider;

    const { validationError } = useEmployerForm();

    return (
        <div className="employer__fields">
            <span className={clsx(validationError?._infoStepThree ? 'info' : 'success')}>
                {validationError?._infoStepThree ?? "Looks fine let's go forward! 😊"}
            </span>
            <div>
                <label>
                    Company Logo HTTP link <span>*</span>
                </label>
                <input
                    value={employerAnnouncement.logo}
                    onChange={(e) => setAnnouncementField(e, 'logo')}
                    type="text"
                    title="Insert link for company logo"
                />
                <span className="error">{validationError?.logoURL}</span>
            </div>
            {employerAnnouncement.logo && !validationError?.logoURL && (
                <div>
                    <label>Logo preview</label>
                    <div className="fields__logo" style={{ backgroundImage: `url("${employerAnnouncement.logo}")` }} />
                </div>
            )}
            <div>
                <label>Announcement photo HTTP link</label>
                <input
                    value={employerAnnouncement.image}
                    onChange={(e) => setAnnouncementField(e, 'image')}
                    type="text"
                    title="Insert link for announcement photo"
                />
                <span className="error">{validationError?.imageURL}</span>
            </div>
            {employerAnnouncement.image && !validationError?.imageURL && (
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
