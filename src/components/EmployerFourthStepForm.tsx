import React, { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';

const EmployerFourthStepForm = () => {
    const { employerAnnouncement, setEmployerAnnouncementFiledGroup } = useContext(FormContext) as FormContextProvider;

    return (
        <div className="employer__fields">
            <div>
                <label>Title</label>
                <input
                    value={employerAnnouncement.description.title}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'description', 'title')}
                    type="text"
                    title="Insert announcement title"
                ></input>
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={employerAnnouncement.description.text}
                    onChange={(e) => setEmployerAnnouncementFiledGroup(e, 'description', 'text')}
                    rows={10}
                    title="Insert announcement title"
                />
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
