/* eslint-disable no-unused-vars */
import React, { ChangeEvent, Dispatch } from 'react';

import { JobListObject } from './JobListTypes';

export interface FormContextProvider {
    DEFAULT_FORM_VALUE: JobListObject;
    employerAnnouncement: JobListObject;
    stepNumber: number;
    setStepNumber: Dispatch<React.SetStateAction<number>>;
    setEmployerAnnouncement: Dispatch<React.SetStateAction<JobListObject>>;
    setAnnouncementField: (e: ChangeEvent, key: string) => void;
    setEmployerAnnouncementFiledGroup: (e: ChangeEvent, groupKey: 'description' | 'address', key: string) => void;
    specificToolsFiled: string;
    setSpecificToolsFiled: Dispatch<React.SetStateAction<string>>;
    specificLanguagesFiled: string;
    setSpecificLanguagesFiled: Dispatch<React.SetStateAction<string>>;
    unlockSteps: (stepNumber: number) => void;
    unlockedStepNumbers: number[];
}
