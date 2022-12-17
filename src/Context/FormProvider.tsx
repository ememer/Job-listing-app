import React, { ChangeEvent, useState } from 'react';

import { JobListObject } from '../@types/JobListTypes';

import { FormContext } from './FormContext';

interface Props {
    children: React.ReactNode;
}

const DEFAULT_FORM_VALUE: JobListObject = {
    id: 0,
    company: '',
    logo: '',
    new: true,
    featured: true,
    position: '',
    role: '',
    level: '',
    postedAt: '',
    contract: '',
    location: '',
    languages: [],
    tools: [],
    image: '',
    description: {
        title: '',
        text: '',
        subtitle: '',
        subtext: '',
    },
    address: {
        postcode: '',
        city: '',
        country: '',
        street: '',
        number: '',
    },
};

const FormProvider = ({ children }: Props) => {
    const [employerAnnouncement, setEmployerAnnouncement] = useState(DEFAULT_FORM_VALUE);
    const [stepNumber, setStepNumber] = useState(1);
    const [specificToolsFiled, setSpecificToolsFiled] = useState<string>('');
    const [specificLanguagesFiled, setSpecificLanguagesFiled] = useState<string>('');
    const [unlockedStepNumbers, setUnlockedStepNumbers] = useState<number[]>([]);
    const [isOfferSucceed, setIsOfferSucceed] = useState<boolean>(false);

    const setAnnouncementField = (e: ChangeEvent, key: string) =>
        setEmployerAnnouncement((pS) => ({
            ...pS,
            [key]: (e.target as HTMLInputElement).value,
        }));

    const setEmployerAnnouncementFiledGroup = (e: ChangeEvent, groupKey: 'description' | 'address', key: string) =>
        setEmployerAnnouncement((pS: JobListObject) => ({
            ...pS,
            [groupKey]: {
                ...pS[groupKey],
                [key]: (e.target as HTMLInputElement).value,
            },
        }));

    const unlockSteps = (stepForward: number) => {
        if (!unlockedStepNumbers.includes(stepForward)) {
            setUnlockedStepNumbers((prevState) => [...prevState, stepForward]);
        }
    };

    return (
        <FormContext.Provider
            value={{
                DEFAULT_FORM_VALUE,
                employerAnnouncement,
                setEmployerAnnouncement,
                stepNumber,
                setStepNumber,
                setAnnouncementField,
                setEmployerAnnouncementFiledGroup,
                specificToolsFiled,
                setSpecificToolsFiled,
                specificLanguagesFiled,
                setSpecificLanguagesFiled,
                unlockSteps,
                unlockedStepNumbers,
                isOfferSucceed,
                setIsOfferSucceed,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
