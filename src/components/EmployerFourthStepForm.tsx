import clsx from 'clsx';
import React, { useContext } from 'react';

import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';
import { useEmployerForm } from '../hook/useEmployerForm';

const EmployerFourthStepForm = () => {
    const { employerAnnouncement, setEmployerAnnouncementFiledGroup } = useContext(FormContext) as FormContextProvider;

    const { validationError } = useEmployerForm();

    return (
        <div className="employer__fields">
            <span className={clsx(validationError?._infoStepFour ? 'info' : 'success')}>
                {validationError?._infoStepFour ?? "Looks fine let's go forward! 😊"}
            </span>
            <div>
                <label>
                    Title <span>*</span>
                </label>
                <input
                    value={employerAnnouncement.description.title}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'description', 'title')}
                    type="text"
                    title="Insert announcement title"
                ></input>
                <span className="error">{validationError?.descriptionTitle}</span>
            </div>
            <div>
                <label>
                    Description <span>*</span>
                </label>
                <textarea
                    value={employerAnnouncement.description.text}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'description', 'text')}
                    rows={10}
                    title="Insert announcement title"
                />
                <span className="error">{validationError?.descriptionText}</span>
            </div>
            <div>
                <label>Additional subtitle</label>
                <input
                    value={employerAnnouncement.description.subtitle}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'description', 'subtitle')}
                    type="text"
                    title="Insert additional subtitle"
                ></input>
            </div>
            <div>
                <label>Additional description</label>
                <textarea
                    value={employerAnnouncement.description.subtext}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'description', 'subtext')}
                    rows={5}
                    title="Insert
                         additional description"
                />
            </div>
        </div>
    );
};

export default EmployerFourthStepForm;
