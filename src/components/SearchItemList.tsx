import React from 'react';

import clsx from 'clsx';

import { JobListObject } from '../@types/JobListTypes';

import { getUniqueElements } from './../utils/getUniqueElements';

interface Props {
    title: string;
    data: JobListObject[];
    targetKey: 'languages' | 'tools';
    filtersArray: string[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SearchItemList = ({ title, data, targetKey, filtersArray, onClick }: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {getUniqueElements(data, targetKey).map((element) => (
                    <li className={clsx(filtersArray.includes(element) ? 'selected' : 'unselected')} key={element}>
                        <button onClick={(e) => onClick(e)} id={element}>
                            {element}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchItemList;
