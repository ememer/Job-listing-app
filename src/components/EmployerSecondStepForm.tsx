import { clsx } from 'clsx';
import React, { useContext, useEffect, useState } from 'react';

import { FormContextProvider } from '../@types/FormContext';
import { JobListObject } from '../@types/JobListTypes';
import { FormContext } from '../Context/FormContext';
import { useEmployerForm } from '../hook/useEmployerForm';

const EmployerSecondStepForm = () => {
    const [focusedFiled, setFocusedField] = useState('');
    const { validationError } = useEmployerForm();
    const {
        employerAnnouncement,
        setEmployerAnnouncement,
        setAnnouncementField,
        specificLanguagesFiled,
        setSpecificLanguagesFiled,
        specificToolsFiled,
        setSpecificToolsFiled,
    } = useContext(FormContext) as FormContextProvider;

    const protectWhiteSpaces = (text: string): string => {
        const re = /  +/g;
        return text.replaceAll(re, ' ');
    };

    const removeInputElements = (e: React.MouseEvent, key: 'languages' | 'tools') => {
        const inputTarget = key === 'tools' ? setSpecificToolsFiled : setSpecificLanguagesFiled;

        inputTarget((prevStateText) => {
            if (prevStateText.includes(`${(e.target as HTMLLIElement).id}, `)) {
                return prevStateText.replace(`${(e.target as HTMLLIElement).id}, `, '');
            }
            return prevStateText.replace(`${(e.target as HTMLLIElement).id}`, '');
        });

        setEmployerAnnouncement((pS: JobListObject) => ({
            ...pS,
            [key]: pS[key].filter((elem) => elem !== (e.target as HTMLLIElement).id),
        }));
    };

    useEffect(() => {
        const key = focusedFiled === 'TOOLS' ? 'tools' : 'languages';
        const target = focusedFiled === 'TOOLS' ? specificToolsFiled : specificLanguagesFiled;
        setEmployerAnnouncement((pS: JobListObject) => ({
            ...pS,
            [key]: target.split(', ').filter((elem) => elem !== ''),
        }));
    }, [setEmployerAnnouncement, specificToolsFiled, specificLanguagesFiled, focusedFiled]);

    return (
        <div className="employer__fields">
            <span className={clsx(validationError?._infoStepTwo ? 'info' : 'success')}>
                {validationError?._infoStepTwo ?? "Looks fine let's go forward! 😊"}
            </span>
            <div>
                <label>
                    Contract <span>*</span>
                </label>
                <input
                    value={employerAnnouncement.contract}
                    onChange={(e) => setAnnouncementField(e, 'contract')}
                    type="text"
                    title="Insert contract details"
                />
                <span className="error">{validationError?.contract}</span>
            </div>
            <div>
                <label>
                    Location <span>*</span>
                </label>
                <input
                    value={employerAnnouncement.location}
                    onChange={(e) => setAnnouncementField(e, 'location')}
                    type="text"
                    title="Insert company location"
                />
                <span className="error">{validationError?.location}</span>
            </div>
            <div>
                <label>
                    Technical languages <span>*</span>
                </label>
                <input
                    id="LANGS"
                    value={specificLanguagesFiled}
                    onFocus={(e) => setFocusedField(e.target.id)}
                    onChange={(e) => {
                        setSpecificLanguagesFiled(protectWhiteSpaces(e.target.value));
                    }}
                    placeholder="Separate words with a comma e.g. HTML, CSS,"
                    type="text"
                    title="Insert technical languages"
                />

                <span className="error">{validationError?.languages}</span>
                {employerAnnouncement.languages.length > 0 && (
                    <div className="employer__skills__items">
                        <span>Click on each of element to remove</span>
                        <ul>
                            {employerAnnouncement.languages.map((lang, idx) => (
                                <li
                                    onClick={(e) => removeInputElements(e, 'languages')}
                                    id={lang}
                                    key={`${idx}#${lang}`}
                                >
                                    {lang}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div>
                <label>Technical Tools</label>
                <input
                    id="TOOLS"
                    value={specificToolsFiled}
                    onFocus={(e) => setFocusedField(e.target.id)}
                    onChange={(e) => {
                        setSpecificToolsFiled(protectWhiteSpaces(e.target.value));
                    }}
                    placeholder="Separate words with a comma e.g React, Sass,"
                    type="text"
                    title="Insert technical tools"
                />
                {employerAnnouncement.tools.length > 0 && (
                    <div className="employer__skills__items">
                        <span>Click on each of element to remove</span>
                        <ul>
                            {employerAnnouncement.tools.map((tool, idx) => (
                                <li onClick={(e) => removeInputElements(e, 'tools')} id={tool} key={`${idx}#${tool}`}>
                                    {tool}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployerSecondStepForm;
