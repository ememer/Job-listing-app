import React, { useContext } from 'react';

import { clsx } from 'clsx';

import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';
import { useEmployerForm } from '../hook/useEmployerForm';

import CreateDivImage from './CreateDivImage';
import ErrorPage from './Error';

const EmployerThirdStepForm = () => {
    const { employerAnnouncement, setAnnouncementField, unlockedStepNumbers } = useContext(
        FormContext,
    ) as FormContextProvider;

    const { validationError } = useEmployerForm();

    return (
        <>
            {unlockedStepNumbers.includes(3) ? (
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
                            <CreateDivImage
                                shape="circle"
                                path={employerAnnouncement.logo}
                                height="20vh"
                                margin="0 auto"
                            />
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
                            <CreateDivImage shape="square" path={employerAnnouncement.image} height="20vh" margin="0" />
                        </div>
                    )}
                </div>
            ) : (
                <ErrorPage path="/employer-panel/step=1" className="employer__error" />
            )}
        </>
    );
};

export default EmployerThirdStepForm;
