import React, { useState } from 'react';

import jobLists from './../utils/data.json';
import { JobListContext } from './JobsListContext';

interface Props {
    children: React.ReactNode;
}

const JobListProvider = ({ children }: Props) => {
    const [filtersArray, setFiltersArray] = useState<string[]>([]);

    const displayFilteredJobs = () => {
        const filteredData = jobLists.filter((jobItem) =>
            filtersArray.find((filter) => jobItem.tools.includes(filter) || jobItem.languages.includes(filter)),
        );
        return filteredData.length > 0 ? filteredData : jobLists;
    };

    return (
        <JobListContext.Provider value={{ jobLists, filtersArray, setFiltersArray, displayFilteredJobs }}>
            {children}
        </JobListContext.Provider>
    );
};

export default JobListProvider;
