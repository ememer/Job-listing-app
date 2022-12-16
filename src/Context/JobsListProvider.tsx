import React, { useState } from 'react';

import { JobListObject } from '../@types/JobListTypes';

import jobLists from './../utils/data.json';
import { JobListContext } from './JobsListContext';

interface Props {
    children: React.ReactNode;
}

const JobListProvider = ({ children }: Props) => {
    const [currentJobsLists, setCurrentJobsLists] = useState(jobLists as JobListObject[]);
    const [filtersArray, setFiltersArray] = useState([]);

    const displayFilteredJobs = () => {
        const filteredData = currentJobsLists.filter((jobItem) =>
            filtersArray.find((filter) => jobItem.tools.includes(filter) || jobItem.languages.includes(filter)),
        );
        return filteredData.length > 0 ? filteredData : currentJobsLists;
    };

    const updateJobs = (newOffers: JobListObject) => {
        const length = currentJobsLists.length;
        setCurrentJobsLists((pS) => [...pS, { ...newOffers, id: length + 1, postedAt: new Date().toDateString() }]);
    };

    return (
        <JobListContext.Provider
            value={{ currentJobsLists, filtersArray, setFiltersArray, displayFilteredJobs, updateJobs }}
        >
            {children}
        </JobListContext.Provider>
    );
};

export default JobListProvider;
