import React from 'react';

interface ItemProps {
    title: string;
    text?: any;
    children?: React.ReactNode;
}

const SummaryItem = ({ title, text, children }: ItemProps) => {
    return (
        <div>
            {title && <h2>{title}</h2>}
            {text && <span>{text}</span>}
            {children}
        </div>
    );
};

export default SummaryItem;
