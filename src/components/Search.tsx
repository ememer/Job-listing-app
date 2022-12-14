import React, { useContext, useState } from 'react';

import { faSliders, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import { JobListContextProvider, JobListObject } from '../@types/JobListTypes';
import { JobListContext } from '../Context/JobsListContext';

import SearchItemList from './SearchItemList';

import './Search.css';

const SearchComponent = () => {
    const { currentJobsLists, filtersArray, setFiltersArray } = useContext(JobListContext) as JobListContextProvider;
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
            className={clsx(isSearchOpen && ' enabled', 'search__section')}
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
                className="search__component"
                id="search_content"
            >
                <div
                    className={clsx(
                        isSearchOpen ? 'enabled__search__items' : 'disabled__search__items',
                        'search__items',
                    )}
                    id="search_content"
                >
                    {filtersArray.length === 0 && (
                        <span id="search_content">
                            <FontAwesomeIcon id="search_content" icon={faSliders} /> Enable filters
                        </span>
                    )}
                    <ul id="search_content">
                        {filtersArray.map((element: string) => (
                            <li title={`Enabled filter ${element}`} key={element}>
                                <span>{element}</span>
                                <button
                                    title={`Remove filter ${element}`}
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
                    {filtersArray.length > 0 && (
                        <button title="Clear all filters" onClick={() => setFiltersArray([])} id="clear_button">
                            Wipe
                        </button>
                    )}
                    {isSearchOpen && (
                        <button title="Close filters menu" onClick={() => setIsSearchOpen(false)}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}
                </div>
            </div>
            {isSearchOpen && (
                <div className="search__filters">
                    <SearchItemList
                        title="Technologies"
                        data={currentJobsLists}
                        targetKey="tools"
                        filtersArray={filtersArray}
                        onClick={addFilters}
                    />
                    <SearchItemList
                        title="Languages"
                        data={currentJobsLists}
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
