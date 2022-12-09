import React, { ChangeEvent, useState } from 'react';
import { JobListObject } from '../@types/JobListTypes';
import { FormContext } from './FormContext';

interface Props {
    children: React.ReactNode;
}

const DEFAULT_STATE_VALUE: JobListObject = {
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
    languages: [''],
    tools: [''],
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
        number: 0,
    },
};

const FormProvider = ({ children }: Props) => {
    const [employerAnnouncement, setEmployerAnnouncement] = useState(DEFAULT_STATE_VALUE);

    const setAnnouncementField = (e: ChangeEvent, key: string) =>
        setEmployerAnnouncement((pS) => ({
            ...pS,
            [key]: (e.target as HTMLInputElement).value,
        }));

    return (
        <FormContext.Provider value={{ employerAnnouncement, setEmployerAnnouncement, setAnnouncementField }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;
