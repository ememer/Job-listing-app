import React, { useContext, useState } from 'react';

import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useParams } from 'react-router-dom';

import { JobListContextProvider } from '../@types/JobListTypes';
import { JobListContext } from '../Context/JobsListContext';

import AppSettings from './AppSettings';

import './Layout.css';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
    const { currentJobsLists } = useContext(JobListContext) as JobListContextProvider;
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const location = useLocation();

    const path =
        location.pathname === '/employer-panel/step=1'
            ? { text: 'HOME', path: '/' }
            : { text: 'CREATE OFFER', path: '/employer-panel/step=1' };

    const setTitle = () => {
        if (location.pathname.includes('/employer-panel/step')) {
            return 'Dź0b j0b app | Create Offer';
        }
        if (location.pathname.includes('/job/')) {
            const { id } = useParams();
            const pageId = id ?? 0;
            const openOffer = currentJobsLists.find((offer) => offer.id === +pageId);

            return `Dź0b j0b app | ${openOffer?.company}`;
        }
        return 'Dź0b j0b app | HOME';
    };
    return (
        <>
            <header>
                <Helmet>
                    <title>{setTitle()}</title>
                </Helmet>
                <div className="container">
                    {isSettingsOpen && <AppSettings onClose={setIsSettingsOpen} />}
                    <div className="header__nav">
                        <Link to="/">
                            <div className="header__title">
                                <span>Dź0b</span>
                                <span>J0b</span>
                            </div>
                        </Link>
                        <nav>
                            <button onClick={() => setIsSettingsOpen(true)}>
                                <FontAwesomeIcon icon={faSliders} />
                            </button>
                            <Link className="nav_link" to={path.path}>
                                {path.text}
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
            <main className="container">{children}</main>
        </>
    );
};

export default Layout;
