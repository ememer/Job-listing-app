import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import jobs from "../utils/data.json";

import {
  faLocationPin,
  faStopwatch,
  faFlask,
  faBusinessTime,
  faArrowLeft,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";

import "./JobDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const JobDetails = () => {
  const [isClipboard, setIsClipboard] = useState(false);
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

  const copyClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setIsClipboard(!isClipboard);
  };

  useEffect(() => {
    if (isClipboard) {
      setTimeout(() => {
        setIsClipboard(!isClipboard);
      }, 1500);
    }
  }, [isClipboard]);

  return (
    <section className="details-section">
      {isClipboard && (
        <span className="clipboard-popup">
          Link został skopiowany do schowka
        </span>
      )}
      <div className="details-nav">
        <Link className="back-button" to={"/#"}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <button onClick={copyClipboard} className="share-button">
          <FontAwesomeIcon icon={faShareNodes} />
        </button>
      </div>
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
        <li title="Lokalizacja">
          <FontAwesomeIcon className="details-icons" icon={faLocationPin} />
          {location}
        </li>
        <li title="Typ kontraktu">
          <FontAwesomeIcon className="details-icons" icon={faStopwatch} />
          {contract}
        </li>
        <li title="Poziom zaawansowania">
          <FontAwesomeIcon className="details-icons" icon={faFlask} />
          {level}
        </li>
        <li title="Kiedy opublikowano">
          <FontAwesomeIcon className="details-icons" icon={faBusinessTime} />
          {postedAt}
        </li>
      </ul>
      <div>
        <h2 className="details-tech-title">Technologie</h2>
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
          <div>
            <h2>Opis</h2>
            <h2>{description?.title}</h2>
            <p>{description?.text}</p>
            <h2>{description?.subtitle}</h2>
            <p>{description?.subtext}</p>
          </div>
        </div>
        <div>
          <span>test</span>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;