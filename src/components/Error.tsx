import React from 'react';

import { faShuttleSpace, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import './errorPage.css';

interface Props {
    className?: string;
    path: string;
}

const ErrorPage = ({ className, path }: Props) => {
    return (
        <div className={clsx('error__content', className)}>
            <div className="error__icon">
                <FontAwesomeIcon icon={faUserAstronaut} />
            </div>
            <div className="error__message">
                <h1>Out of galaxy</h1>
                <span>Something went wrong...</span>
            </div>
            <Link className="error__back" to={`${path}`}>
                <FontAwesomeIcon className="fa-rotate-180 icon" icon={faShuttleSpace} />
                Turn back to earth
            </Link>
        </div>
    );
};

export default ErrorPage;
