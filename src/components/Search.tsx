import React, { useContext, useState } from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { ContextType, JobListObject } from '../@types/JobListTypes';
import { JobListContext } from '../Context/JobsListContext';

import SearchItemList from './SearchItemList';

import './Search.css';

const SearchComponent = () => {
    const { jobLists, filtersArray, setFiltersArray } = useContext(JobListContext) as ContextType;
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const addFilters = (e: React.MouseEvent) => {
        if (filtersArray.includes((e.target as HTMLButtonElement).id)) {
            return;
        } else {
            setFiltersArray((prevState: JobListObject[]) => [...prevState, (e.target as HTMLButtonElement).id]);
        }
    };

    const onClose = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).id === 'search-section') {
            setIsSearchOpen(false);
        }
    };
    return (
        <div
            id="search-section"
            className={clsx(isSearchOpen && ' enabled', 'search-section')}
            onClick={(e: React.MouseEvent<HTMLDivElement>) => onClose(e)}
        >
            <div
                onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    if (
                        (e.target as HTMLElement).id !== 'remove_button' &&
                        (e.target as HTMLElement).id === 'search_content'
                    ) {
                        setIsSearchOpen(true);
                    }
                }}
                className="search-component"
                id="search_content"
            >
                <div
                    className={clsx(isSearchOpen ? 'enabled-search-items' : 'disabled-search-items', 'search-items')}
                    id="search_content"
                >
                    <ul id="search_content">
                        {filtersArray.map((element: string) => (
                            <li key={element}>
                                <span>{element}</span>
                                <button
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                        setFiltersArray(
                                            (filtersArray as string[]).filter(
                                                (filters) => filters !== (e.target as HTMLButtonElement).id,
                                            ),
                                        );
                                    }}
                                    id={element}
                                >
                                    x
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setFiltersArray([])} id="clear_button">
                        Wyczyść
                    </button>
                    {isSearchOpen && (
                        <button onClick={() => setIsSearchOpen(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}
                </div>
            </div>
            {isSearchOpen && (
                <div className="search-filters">
                    <SearchItemList
                        title="Technologies"
                        data={jobLists}
                        targetKey="tools"
                        filtersArray={filtersArray}
                        onClick={addFilters}
                    />
                    <SearchItemList
                        title="Languages"
                        data={jobLists}
                        targetKey="languages"
                        filtersArray={filtersArray}
                        onClick={addFilters}
                    />
                </div>
            )}
        </div>
    );
};

export default SearchComponent;
