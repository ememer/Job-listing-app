import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { JobListContextProvider, JobListObject } from '../@types/JobListTypes';
import { JobListContext } from '../Context/JobsListContext';

import JobCard from './JobCard';
import SearchComponent from './Search';

const JobList = () => {
    const { displayFilteredJobs } = useContext(JobListContext) as JobListContextProvider;

    return (
        <>
            <SearchComponent />
            {displayFilteredJobs()?.map((job: JobListObject) => (
                <Link key={job.id} to={`/job/${job.id}`}>
                    <JobCard
                        id={job.id}
                        company={job.company}
                        logo={job.logo}
                        newest={job.new}
                        featured={job.featured}
                        position={job.position}
                        role={job.role}
                        level={job.level}
                        postedAt={job.postedAt}
                        contract={job.contract}
                        location={job.location}
                        languages={job.languages}
                        tools={job.tools}
                    />
                </Link>
            ))}
        </>
    );
};

export default JobList;
