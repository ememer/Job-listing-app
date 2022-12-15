import './SummaryDescription.css';

import React from 'react';

import CreateDivImage from './CreateDivImage';
import SummaryItem from './SummaryItem';

interface DescriptionProps {
    image?: string;
    description: {
        title: string;
        text: string;
        subtitle?: string;
        subtext?: string;
    };
}

const SummaryDescription = ({ image, description }: DescriptionProps) => {
    return (
        <div className="summary__description">
            {image && <CreateDivImage path={image} shape="square" height="20vh" margin="10px 0" />}
            <SummaryItem title="Description title:" text={description.title} />
            <SummaryItem title="Description:">
                <p>{description.text}</p>
            </SummaryItem>
            {description.subtitle && <SummaryItem title="Subtitle:" text={description.subtitle} />}
            {description.subtext && (
                <SummaryItem title="Additional text:">
                    <p>{description.subtext}</p>
                </SummaryItem>
            )}
        </div>
    );
};

export default SummaryDescription;
