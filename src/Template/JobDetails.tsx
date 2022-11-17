import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../utils/data.json";

import {
  faLocationPin,
  faStopwatch,
  faFlask,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";

import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobDetails = () => {
  const { id }: { id?: string | undefined } = useParams();
  const pageId = id ?? 0;
  const fakeApiResponse = jobs.filter((job) => job.id === +pageId);
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
    image,
    description,
  } = fakeApiResponse[0];
  return (
    <div>
      <div
        className="details-header"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div>
          <img alt={`${company} logo`} src={logo}></img>
        </div>
        <div>
          <h1>{company}</h1>
          <span>{position}</span>
        </div>
      </div>
      <ul className="details-job">
        <li>
          <FontAwesomeIcon className="details-icons" icon={faLocationPin} />
          {location}
        </li>
        <li>
          <FontAwesomeIcon className="details-icons" icon={faStopwatch} />
          {contract}
        </li>
        <li>
          <FontAwesomeIcon className="details-icons" icon={faFlask} />
          {level}
        </li>
        <li>
          <FontAwesomeIcon className="details-icons" icon={faBusinessTime} />
          {postedAt}
        </li>
      </ul>
      <div>
        <h2>Technologie</h2>
        {(languages || tools) && (
          <ul className="details-tech">
            {languages?.map((lang, idx) => (
              <li key={`${lang}${idx}`}>{lang}</li>
            ))}
            {tools?.map((tool, idx) => (
              <li key={`${tool}${idx}`}>{tool}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="details-content">
        <div>
          {image && (
            <div className="details-img">
              <div style={{ backgroundImage: `url("${image}")` }} />
            </div>
          )}
          <h2>Opis</h2>
          <h2>{description?.title}</h2>
          <p>{description?.text}</p>
          <h2>{description?.subtitle}</h2>
          <p>{description?.subtext}</p>
        </div>
        <div>
          <span>test</span>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
