import React, { useContext, useEffect, useState } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { JobListObject } from '../@types/JobListTypes';
import { FormContext } from '../Context/FormContext';

const EmployerSecondStepForm = () => {
    const [userInputLangs, setUserInputLangs] = useState<string>('');
    const [userInputTools, setUserInputTools] = useState<string>('');
    const [focusedFiled, setFocusedField] = useState('');

    const { employerAnnouncement, setEmployerAnnouncement, setAnnouncementField } = useContext(
        FormContext,
    ) as FormContextProvider;

    const protectWhiteSpaces = (text: string): string => {
        let re = /  +/g;
        return text.replaceAll(re, ' ');
    };

    const removeInputElements = (e: React.MouseEvent, key: 'languages' | 'tools') => {
        let inputTarget = key === 'tools' ? setUserInputTools : setUserInputLangs;

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
        let key = focusedFiled === 'TOOLS' ? 'tools' : 'languages';
        let target = focusedFiled === 'TOOLS' ? userInputTools : userInputLangs;
        setEmployerAnnouncement((pS: JobListObject) => ({
            ...pS,
            [key]: target.split(', ').filter((elem) => elem !== ''),
        }));
    }, [setEmployerAnnouncement, userInputTools, userInputLangs, focusedFiled]);

    return (
        <div className="employer__fields">
            <div>
                <label>Contract</label>
                <input
                    value={employerAnnouncement.contract}
                    onChange={(e) => setAnnouncementField(e, 'contract')}
                    type="text"
                    title="Insert contract details"
                ></input>
            </div>
            <div>
                <label>Location</label>
                <input
                    value={employerAnnouncement.location}
                    onChange={(e) => setAnnouncementField(e, 'location')}
                    type="text"
                    title="Insert company location"
                ></input>
            </div>
            <div>
                <label>Technical languages</label>
                <input
                    id="LANGS"
                    value={userInputLangs}
                    onFocus={(e) => setFocusedField(e.target.id)}
                    onChange={(e) => {
                        setUserInputLangs(protectWhiteSpaces(e.target.value));
                    }}
                    placeholder="Separate words with a comma e.g. HTML, CSS,"
                    type="text"
                    title="Insert technical languages"
                ></input>
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
                    value={userInputTools}
                    onFocus={(e) => setFocusedField(e.target.id)}
                    onChange={(e) => {
                        setUserInputTools(protectWhiteSpaces(e.target.value));
                    }}
                    placeholder="Separate words with a comma e.g React, Sass,"
                    type="text"
                    title="Insert technical tools"
                ></input>

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
