import React, { ChangeEvent, Dispatch } from 'react';
import { JobListObject } from './JobListTypes';

export type FormContextProvider = {
    employerAnnouncement: JobListObject;
    setEmployerAnnouncement: Dispatch<React.SetStateAction<{}>>;
    setAnnouncementField: (e: ChangeEvent, key: string) => void;
    setEmployerAnnouncementFiledGroup: (e: ChangeEvent, groupKey: 'description' | 'address', key: string) => void;
    specificToolsFiled: string;
    setSpecificToolsFiled: Dispatch<React.SetStateAction<string>>;
    specificLanguagesFiled: string;
    setSpecificLanguagesFiled: Dispatch<React.SetStateAction<string>>;
};
