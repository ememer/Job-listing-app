import React, { ChangeEvent, useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { JobListObject } from '../@types/JobListTypes';
import { FormContext } from '../Context/FormContext';

const EmployerFourthStepForm = () => {
    const { employerAnnouncement, setEmployerAnnouncement } = useContext(FormContext) as FormContextProvider;

    console.log(employerAnnouncement);

    return (
        <div className="employer__fields">
            <div>
                <label>Title</label>
                <input
                    value={employerAnnouncement.description.title}
                    onChange={(e: ChangeEvent) =>
                        setEmployerAnnouncement((pS: JobListObject) => ({
                            ...pS,
                            description: {
                                ...pS.description,
                                title: (e.target as HTMLInputElement).value,
                            },
                        }))
                    }
                    type="text"
                    title="Insert announcement title"
                ></input>
            </div>
            <div>
                <label>Description</label>
                <textarea
                    value={employerAnnouncement.description.text}
                    onChange={(e: ChangeEvent) =>
                        setEmployerAnnouncement((pS: JobListObject) => ({
                            ...pS,
                            description: {
                                ...pS.description,
                                text: (e.target as HTMLInputElement).value,
                            },
                        }))
                    }
                    rows={10}
                    title="Insert announcement title"
                />
            </div>
            <div>
                <label>Additional subtitle</label>
                <input
                    value={employerAnnouncement.description.subtitle}
                    onChange={(e: ChangeEvent) =>
                        setEmployerAnnouncement((pS: JobListObject) => ({
                            ...pS,
                            description: {
                                ...pS.description,
                                subtitle: (e.target as HTMLInputElement).value,
                            },
                        }))
                    }
                    type="text"
                    title="Insert additional subtitle"
                ></input>
            </div>
            <div>
                <label>Additional description</label>
                <textarea
                    value={employerAnnouncement.description.subtext}
                    onChange={(e: ChangeEvent) =>
                        setEmployerAnnouncement((pS: JobListObject) => ({
                            ...pS,
                            description: {
                                ...pS.description,
                                subtext: (e.target as HTMLInputElement).value,
                            },
                        }))
                    }
                    rows={5}
                    title="Insert
                         additional description"
                />
            </div>
        </div>
    );
};

export default EmployerFourthStepForm;
