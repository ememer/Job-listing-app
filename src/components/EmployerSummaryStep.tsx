import React, { useContext } from 'react';
import { FormContextProvider } from '../@types/FormContext';
import { FormContext } from '../Context/FormContext';
import './EmployerSummary.css';
import SummaryDescription from './SummaryDescription';
import SummaryDetails from './SummaryDetails';
import SummaryItem from './SummaryItem';

const EmployerSummaryStep = () => {
    const { employerAnnouncement } = useContext(FormContext) as FormContextProvider;
    const { languages, tools, image, description, address } = employerAnnouncement;
    return (
        <div className="summary__section">
            <div className="summary__content">
                <SummaryDetails />
                <SummaryDescription image={image} description={description} />
            </div>
            <div className="summary__skills">
                <SummaryItem title="Language skills">
                    <ul>
                        {languages.map((lang, idx) => (
                            <li key={`${lang}#${idx}`}>{lang}</li>
                        ))}
                    </ul>
                </SummaryItem>
                <SummaryItem title="Technical skills">
                    {tools.length === 0 && <span>Not required</span>}
                    {tools.length !== 0 && (
                        <ul>
                            {tools.map((tool, idx) => (
                                <li key={`${tool}#${idx}`}>{tool}</li>
                            ))}
                        </ul>
                    )}
                </SummaryItem>
            </div>
            <div className="summary__address">
                <SummaryItem title='Street:' text={address.street} />
                <SummaryItem title='Number:' text={address.number} />
                <SummaryItem title='City:' text={address.city} />
                <SummaryItem title='ZIP / Postcode:' text={address.postcode} />
                <SummaryItem title='Country:' text={address.country} />
            </div>
        </div>
    );
};

export default EmployerSummaryStep;
