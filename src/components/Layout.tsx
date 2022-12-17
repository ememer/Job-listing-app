import React from 'react';

// import { Link } from 'react-router-dom';
import './Layout.css';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="header__title">
                        <span>Dź0b</span>
                        <span>J0b</span>
                    </div>
                </div>
            </header>
            <main className="container">{children}</main>
        </>
    );
};

export default Layout;
