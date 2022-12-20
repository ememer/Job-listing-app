import React, { useContext, useEffect, useState } from 'react';

import {
    faArrowLeft,
    faBusinessTime,
    faFlask,
    faLocationPin,
    faShareNodes,
    faStopwatch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';

import { JobListContextProvider, JobListObject } from '../@types/JobListTypes';
import MapComponent from '../components/MapComponent';
import { JobListContext } from '../Context/JobsListContext';

import { getTimeDifference } from './../utils/displayDate';

import './JobDetails.css';

const JobDetails = () => {
    const { currentJobsLists } = useContext(JobListContext) as JobListContextProvider;
    const [isClipboard, setIsClipboard] = useState(false);
    const { id } = useParams();

    const pageId = id ?? 0;

    const fakeApiResponse = currentJobsLists.filter((job) => job.id === +pageId);
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
        address,
    }: JobListObject = fakeApiResponse[0];

    const copyClipboard = (): void => {
        navigator.clipboard.writeText(window.location.href);
        setIsClipboard(!isClipboard);
    };

    useEffect((): void => {
        if (isClipboard) {
            setTimeout(() => {
                setIsClipboard(!isClipboard);
            }, 2500);
        }
    }, [isClipboard]);

    return (
        <section className="details__section">
            {isClipboard && <span className="clipboard__popup">Link saved in clipboard</span>}
            <div className="details__nav">
                <Link title="Go back to home page" className="back__button" to={'/#'}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <button title="Save URL in clipboard" onClick={copyClipboard} className="share__button">
                    <FontAwesomeIcon icon={faShareNodes} />
                </button>
            </div>
            <div className="details__header" style={{ backgroundImage: `url("${image}")` }}>
                <div>
                    <img className="header__image" alt={`${company} logo`} src={logo} />
                </div>
                <div>
                    <h1>{company}</h1>
                    <span>{position}</span>
                </div>
            </div>
            <ul className="details__job">
                <li title="Company location">
                    <FontAwesomeIcon className="details__icons" icon={faLocationPin} />
                    {location}
                </li>
                <li title="Contract type">
                    <FontAwesomeIcon className="details__icons" icon={faStopwatch} />
                    {contract}
                </li>
                <li title="Level of experience">
                    <FontAwesomeIcon className="details__icons" icon={faFlask} />
                    {level}
                </li>
                <li title="Posted at date">
                    <FontAwesomeIcon className="details__icons" icon={faBusinessTime} />
                    {getTimeDifference(postedAt).string}
                </li>
            </ul>
            <div>
                <h2 className="details__tech-title">Technologises</h2>
                {(languages || tools) && (
                    <ul className="details__tech">
                        {languages?.map((lang, idx) => (
                            <li title={`Required language ${lang}`} key={`${lang}${idx}`}>
                                {lang}
                            </li>
                        ))}
                        {tools?.map((tool, idx) => (
                            <li title={`Required tool ${tool}`} key={`${tool}${idx}`}>
                                {tool}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="details__content">
                <div>
                    {image && (
                        <div className="details__img">
                            <div style={{ backgroundImage: `url("${image}")` }} />
                        </div>
                    )}
                    <div>
                        <h2>Opis</h2>
                        <h2>{description.title}</h2>
                        <p>{description.text}</p>
                        <h2>{description.subtitle}</h2>
                        <p>{description.subtext}</p>
                    </div>
                </div>
                <MapComponent className="map__layer" address={address} />
            </div>
        </section>
    );
};

export default JobDetails;
