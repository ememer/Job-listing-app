import React, { useContext } from "react";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import SearchComponent from "./Search";
import { JobListContext } from "../Context/JobsListContext";
import { ContextType } from "../@types/JobListTypes";

const JobList = () => {
  const { displayFilteredJobs } = useContext(JobListContext) as ContextType
 
  return (
    <>
    <SearchComponent/>
      {displayFilteredJobs()?.map((job: any ) => (
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
