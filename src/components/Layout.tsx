import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import AppSettings from './AppSettings';

import './Layout.css';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(true);
    const location = useLocation();

    const path =
        location.pathname === '/employer-panel/step=1'
            ? { text: 'HOME', path: '/' }
            : { text: 'CREATE OFFER', path: '/employer-panel/step=1' };

    return (
        <>
            <header>
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
