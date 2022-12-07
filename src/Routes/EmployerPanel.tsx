import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import EmployerStepsButtons from '../components/EmployerStepsButtons';

import './EmployerPanel.css';

const EmployerPanel = () => {
    const location = useLocation().pathname;
    const [stepNumber, setStepNumber] = useState(1);

    useEffect(() => {
        // TO DO - TO USE LOCATION AND REACT ROUTER IN PROPER WAY HANDLING WITH URLs PARAMS
        setStepNumber(+location.slice(location.length - 1, location.length));
    }, [location]);

    class EmployerAnnouncement {
        readonly id;
        company;
        logo;
        readonly new;
        readonly featured;
        position;
        role;
        level;
        readonly postedAt;
        contract;
        location;
        languages;
        tools;
        image;
        description: { title: string; text: string; subtitle: string; subtext: string };
        address: { postcode: string; city?: string; country: string; street: string; number: string };
        constructor(
            company: string,
            logo: string,
            position: string,
            role: string,
            level: string,
            contract: string,
            location: string,
            languages: string,
            tools: string,
            image: string,
            title: string,
            text: string,
            subtitle: string,
            subtext: string,
            postcode: string,
            city: string,
            country: string,
            street: string,
            number: string,
        ) {
            this.id = Math.random();
            this.company = company;
            this.logo = logo;
            this.new = true;
            this.featured = true;
            this.position = position;
            this.role = role;
            this.level = level;
            this.postedAt = new Date().toDateString();
            this.contract = contract;
            this.location = location;
            this.languages = languages;
            this.tools = tools;
            this.image = image;
            this.description = {
                title,
                text,
                subtitle,
                subtext,
            };
            this.address = {
                postcode,
                city,
                country,
                street,
                number,
            };
        }
    }

    const test = new EmployerAnnouncement(
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
        's',
    );

    console.log(test);

    return (
        <form onSubmit={(e) => e.preventDefault()} className="employer__form">
            <Outlet />
            <div className="form__progressbar">
                <div className="fields__progressbar">
                    <span className={clsx(stepNumber === 1 || stepNumber > 1 ? 'active__step' : 'fields__step')}></span>
                    <span className={clsx(stepNumber === 2 || stepNumber > 2 ? 'active__step' : 'fields__step')}></span>
                    <span className={clsx(stepNumber === 3 || stepNumber > 3 ? 'active__step' : 'fields__step')}></span>
                    <span className={clsx(stepNumber === 4 || stepNumber > 4 ? 'active__step' : 'fields__step')}></span>
                    <span className={clsx(stepNumber === 5 || stepNumber > 5 ? 'active__step' : 'fields__step')}></span>
                </div>
                <EmployerStepsButtons step={stepNumber} />
            </div>
        </form>
    );
};

export default EmployerPanel;
