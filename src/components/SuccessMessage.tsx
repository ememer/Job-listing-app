import React, { useContext, useEffect, useState } from 'react';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';

import { JobListContextProvider } from '../@types/JobListTypes';
import { JobListContext } from '../Context/JobsListContext';

import './SuccessMessage.css';

const SuccessMessage = () => {
    const redirect = useNavigate();
    const { currentJobsLists } = useContext(JobListContext) as JobListContextProvider;

    const [seconds, setSeconds] = useState(8);

    useEffect(() => {
        if (seconds === 0) {
            return redirect(`/job/${currentJobsLists.length}`);
        }
        const timer = setTimeout(() => {
            setSeconds((ps) => ps - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [seconds]);
    return (
        <div className="success__message">
            <div className="success__content">
                <div className="success__icon">
                    <FontAwesomeIcon icon={faCheck} />
                </div>
                <h3>Success!</h3>
                <div className="success__navi">
                    You will be redirect to offer in<span>{seconds}</span>
                    <Link className="success__link" to={'/'}>
                        Back to HOME
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessMessage;
