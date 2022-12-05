import React, { useState } from 'react';

import { JobListContext } from './JobsListContext';
import jobLists from './../utils/data.json';

interface Props {
    children: React.ReactNode;
}

const JobListProvider = ({ children }: Props) => {
    const [filtersArray, setFiltersArray] = useState<string[]>([]);

    const displayFilteredJobs = () => {
        let filteredData = jobLists.filter((jobItem) =>
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
