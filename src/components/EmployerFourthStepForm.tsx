import React, { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';

const EmployerFourthStepForm = () => {
    const { employerAnnouncement, setEmployerAnnouncement } = useContext(FormContext) as FormContextProvider;

    return (
        <div className="employer__fields">
            <div>
                <label>Title</label>
                <input type="text" title="Insert announcement title"></input>
            </div>
            <div>
                <label>Description</label>
                <textarea rows={10} title="Insert announcement title" />
            </div>
            <div>
                <label>Additional subtitle</label>
                <input type="text" title="Insert additional subtitle"></input>
            </div>
            <div>
                <label>Additional description</label>
                <textarea
                    rows={5}
                    title="Insert
                         additional description"
                />
            </div>
        </div>
    );
};

export default EmployerFourthStepForm;
