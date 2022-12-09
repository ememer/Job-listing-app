import React, { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';

const EmployerFirstStepForm = () => {
    const { employerAnnouncement,setAnnouncementField } = useContext(
        FormContext,
    ) as FormContextProvider;


    return (
        <div className="employer__fields">
            <div>
                <label>Company Name</label>
                <input
                    value={employerAnnouncement.company}
                    onChange={(e) => setAnnouncementField(e, 'company')}
                    type="text"
                    title="Insert company name"
                ></input>
            </div>
            <div>
                <label>Position</label>
                <input
                    value={employerAnnouncement.position}
                    onChange={(e) => setAnnouncementField(e, 'position')}
                    type="text"
                    title="Insert position name"
                ></input>
            </div>
            <div>
                <label>Role</label>
                <input
                    value={employerAnnouncement.role}
                    onChange={(e) => setAnnouncementField(e, 'role')}
                    type="text"
                    title="Insert role name"
                ></input>
            </div>
            <div>
                <label>Level</label>
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
