import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../utils/data.json";

import "./JobDetails.css";

const JobDetails = () => {
  const { id } = useParams();
  const fakeApiResponse = jobs.filter((job) => job.id === +id);
  const {
    company,
    contract,
    languages,
    logo,
    level,
    location,
    position,
    postedAt,
    tools,
    description,
  } = fakeApiResponse[0];
  console.log(description);
  return (
    <div>
      <div className="details-header">
        <div>
          <img alt={`${company} logo`} src={logo}></img>
        </div>
        <div>
          <h1>{company}</h1>
          <span>{position}</span>
        </div>
      </div>
      <ul className="details-job">
        <li>{location}</li>
        <li>{contract}</li>
        <li>{level}</li>
        <li>{postedAt}</li>
      </ul>
      <div>
        {languages && (
          <ul className="details-tech">
            {languages.map((lang, idx) => (
              <li key={`${lang}${idx}`}>{lang}</li>
            ))}
          </ul>
        )}
        {tools && (
          <ul className="details-tech">
            {tools.map((tool, idx) => (
              <li key={`${tool}${idx}`}>{tool}</li>
            ))}
          </ul>
        )}
        {description.image && (
          <div className="details-img">
            <img alt="poster" src={description?.image} />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobDetails;
