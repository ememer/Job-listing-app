import clsx from 'clsx';
import React, { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';
import { useEmployerForm } from '../hook/useEmployerForm';

const EmployerFirstStepForm = () => {
    const { employerAnnouncement, setAnnouncementField } = useContext(FormContext) as FormContextProvider;

    const { validationError } = useEmployerForm();

    return (
        <div className="employer__fields">
            <span className={clsx(validationError?._infoStepOne ? 'info' : 'success')}>
                {validationError?._infoStepOne ?? "Looks fine let's go forward! 😊"}
            </span>
            <div>
                <label>Company Name <span>*</span></label>
                <input
                    value={employerAnnouncement.company}
                    onChange={(e) => setAnnouncementField(e, 'company')}
                    type="text"
                    title="Insert company name"
                />
            </div>
            <div>
                <label>Position <span>*</span></label>
                <input
                    value={employerAnnouncement.position}
                    onChange={(e) => setAnnouncementField(e, 'position')}
                    type="text"
                    title="Insert position name"
                />
            </div>
            <div>
                <label>Role <span>*</span></label>
                <input
                    value={employerAnnouncement.role}
                    onChange={(e) => setAnnouncementField(e, 'role')}
                    type="text"
                    title="Insert role name"
                />
            </div>
            <div>
                <label>Level <span>*</span></label>
                <select
                    defaultValue="Select"
                    onChange={(e) => setAnnouncementField(e, 'level')}
                    title="Insert level of advance"
                >
                    <option value="Select" hidden disabled>
                        Select
                    </option>
                    <option value="Trainee">Trainee</option>
                    <option value="Junior">Junior</option>
                    <option value="Mid">Mid</option>
                    <option value="Senior">Senior</option>
                </select>
            </div>
        </div>
    );
};

export default EmployerFirstStepForm;
