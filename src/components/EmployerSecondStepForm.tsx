import React, { useContext, useEffect, useState } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { JobListObject } from '../@types/JobListTypes';
import { FormContext } from './../Context/FormContext';

const EmployerSecondStepForm = () => {
    const [userInputLangs, setUserInputLangs] = useState('');
    const [userInputTools, setUserInputTools] = useState('');

    const { employerAnnouncement, setEmployerAnnouncement, setAnnouncementField } = useContext(
        FormContext,
    ) as FormContextProvider;

    const protectWhiteSpaces = (text: string): string => {
        let re = /  +/g;
        return text.replaceAll(re, ' ');
    };

    const convertStringToArray = (text: string): string[] => {
        let commaIndexes: number[] = [];
        let index = 0;
        for (const character of text) {
            if (character === ',') {
                commaIndexes.push(index);
            }
            index++;
        }

        let arrOfWords: string[] = [];
        let arrayIndex: number = 1;

        arrOfWords.push(text.slice(0, commaIndexes[0]));
        commaIndexes.forEach((num) => {
            arrOfWords.push(text.slice(num + 2, commaIndexes[arrayIndex]));
            arrayIndex++;
        });

        if (!arrOfWords.includes('')) {
            return arrOfWords;
        }

        return arrOfWords.filter((elem) => elem !== '');
    };

    useEffect(() => {
        setEmployerAnnouncement((pS: JobListObject) => ({
            ...pS,
            tools: convertStringToArray(userInputTools),
        }));

        setEmployerAnnouncement((pS: JobListObject) => ({
            ...pS,
            languages: convertStringToArray(userInputLangs),
        }));
    }, [setEmployerAnnouncement, userInputTools, userInputLangs]);

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
                    onChange={(e) => {
                        setUserInputLangs(protectWhiteSpaces(e.target.value));
                    }}
                    placeholder="Separate words with a comma e.g. HTML, CSS,"
                    type="text"
                    title="Insert technical languages"
                ></input>
                {employerAnnouncement.languages.length > 0 && (
                    <div>
                        <span>Click on each of element to remove</span>
                        <ul>
                            {employerAnnouncement.languages.map((lang, idx) => (
                                <li key={`${idx}#${lang}`}>{lang}</li>
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
                    onChange={(e) => {
                        setUserInputTools(protectWhiteSpaces(e.target.value));
                    }}
                    placeholder="Separate words with a comma e.g React, Sass,"
                    type="text"
                    title="Insert technical tools"
                ></input>

                {employerAnnouncement.tools.length > 0 && (
                    <div>
                        <span>Click on each of element to remove</span>
                        <ul>
                            {employerAnnouncement.tools.map((lang, idx) => (
                                <li key={`${idx}#${lang}`}>{lang}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmployerSecondStepForm;
