import React from "react";
import "./JobCard.css";

type Props = {
  id: number;
  company: string;
  logo: string;
  newest?: true | false;
  featured?: true | false;
  position: string;
  role?: string;
  level?: string;
  postedAt: string;
  contract: string;
  location: string;
  languages?: string[];
  tools: string[];
};

const JobCard = ({
  id,
  company,
  logo,
  newest,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}: Props) => {
  return (
    <div className="job-card" id={`${id}`}>
      <img className="job-img" alt="logo" src={logo} />
      <div>
        <div className="job-section">
          <h1 className="job-company">{company}</h1>
          {newest && <span className="job-new">NEW!</span>}
          {featured && <span className="job-featured">FEATURED!</span>}
        </div>
        <div className="job-context">
          <h2 className="job-position">{position}</h2>
          <ul className="job-details">
            <li>{postedAt}</li>
            <li className="job-contract">{contract}</li>
            <li className="job-location">{location}</li>
          </ul>
        </div>
      </div>
      <ul className="job-requirements">
        {role && <li>{role}</li>}
        {level && <li>{level}</li>}
        {languages &&
          languages.map((lang: string, idx: number) => (
            <li key={`${lang}${idx}`}>{lang}</li>
          ))}
        {tools.length !== 0 &&
          tools.map((tool: string, idx: number) => (
            <li key={`${tool}${idx}`}>{tool}</li>
          ))}
      </ul>
    </div>
  );
};

export default JobCard;
