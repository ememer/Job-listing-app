import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import AppSettings from './AppSettings';
import ThemeToggle from './ThemeToggle';

// import { Link } from 'react-router-dom';
import './Layout.css';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation();

    const path =
        location.pathname === '/employer-panel/step=1'
            ? { text: 'HOME', path: '/' }
            : { text: 'CREATE OFFER', path: '/employer-panel/step=1' };

    return (
        <>
            <header>
                <div className="container">
                    <AppSettings />
                    <div className="header__nav">
                        <Link to="/">
                            <div className="header__title">
                                <span>Dź0b</span>
                                <span>J0b</span>
                            </div>
                        </Link>
                        <nav>
                            <ThemeToggle />
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
