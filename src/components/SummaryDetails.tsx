import React, { useContext } from 'react';

import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';

import CreateDivImage from './CreateDivImage';
import SummaryItem from './SummaryItem';

import './SummaryDetails.css';

const SummaryDetails = () => {
    const { employerAnnouncement } = useContext(FormContext) as FormContextProvider;
    const { company, logo, position, role, level, contract, location } = employerAnnouncement;

    return (
        <div className="summary__details">
            <SummaryItem title="Company logo:">
                <CreateDivImage path={logo} shape="circle" height="20vh" margin="10px auto" />
            </SummaryItem>
            <SummaryItem title="Company name:" text={company} />
            <SummaryItem title="Employee position:" text={position} />
            <SummaryItem title="Employee role:" text={role} />
            <SummaryItem title="Employee level:" text={level} />
            <SummaryItem title="Employee contract:" text={contract} />
            <SummaryItem title="Company location:" text={location} />
        </div>
    );
};

export default SummaryDetails;
