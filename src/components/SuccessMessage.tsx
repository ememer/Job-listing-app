import React from 'react';

import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SuccessMessage.css';

const SuccessMessage = () => {
    return (
        <span className="success__message">
            <FontAwesomeIcon icon={faFileCircleCheck} />
        </span>
    );
};

export default SuccessMessage;
