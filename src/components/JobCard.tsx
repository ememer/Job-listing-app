import React from 'react';

import { DateTime } from 'luxon';

import CreateDivImage from './CreateDivImage';

import './JobCard.css';

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
    const getTimeDifference = (postedDay: string): { string: string; different: number } => {
        const LONG_DAYS_MONTHS = [1, 3, 5, 7, 8, 10, 12];
        const currentMonth = +DateTime.now().toLocaleString({ month: 'numeric' });
        const toDay = DateTime.now();
        const posted = DateTime.fromISO(postedDay);
        const daysDiff = Math.round(toDay.diff(posted, 'days')?.days ?? 0);
        const monthsDiff = Math.round(toDay.diff(posted, 'months')?.months ?? 0);
        if (LONG_DAYS_MONTHS.includes(currentMonth)) {
            if (daysDiff === 0) {
                return { string: 'Today', different: daysDiff };
            }
            return daysDiff <= 31
                ? { string: `${daysDiff} day(s) ago`, different: daysDiff }
                : { string: `${monthsDiff} month(s) ago`, different: daysDiff };
        }
        return daysDiff <= 30
            ? { string: `${daysDiff} day(s) ago`, different: daysDiff }
            : { string: `${monthsDiff} month(s) ago`, different: daysDiff };
    };

    return (
        <div className="job__card" id={`${id}`}>
            {logo.includes('http') ? (
                <CreateDivImage className="job__img" path={logo} shape="circle" margin="0" height="4.5rem" />
            ) : (
                <img className="job__img" alt="logo" src={logo} />
            )}

            <div>
                <div className="job__section">
                    <h1 className="job__company">{company}</h1>
                    {getTimeDifference(postedAt).different <= 7 && newest && <span className="job__new">NEW!</span>}
                    {getTimeDifference(postedAt).different <= 3 && featured && (
                        <span className="job__featured">FEATURED!</span>
                    )}
                </div>
                <div className="job__context">
                    <h2 className="job__position">{position}</h2>
                    <ul className="job__details">
                        <li>{getTimeDifference(postedAt).string}</li>
                        <li className="job__contract">{contract}</li>
                        <li className="job__location">{location}</li>
                    </ul>
                </div>
            </div>
            <ul className="job__requirements">
                {role && <li>{role}</li>}
                {level && <li>{level}</li>}
                {languages && languages.map((lang: string, idx: number) => <li key={`${lang}${idx}`}>{lang}</li>)}
                {tools.length !== 0 && tools.map((tool: string, idx: number) => <li key={`${tool}${idx}`}>{tool}</li>)}
            </ul>
        </div>
    );
};

export default JobCard;
