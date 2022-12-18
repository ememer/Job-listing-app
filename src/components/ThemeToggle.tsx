import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import './ThemeToggle.css';
// It should't be implemented like that.
//TO DO Create better with theme provider.

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');
    const [systemPreference, setSystemPreference] = useState(true);

    useEffect(() => {
        if (systemPreference) {
            window.matchMedia('prefers-colors-scheme: light').matches ? setTheme('light') : setTheme('dark');
        }
        const pageDocument = document.querySelector('html');
        if (theme === 'light') {
            pageDocument?.classList.remove('dark');
            pageDocument?.classList.add('light');
        }
        if (theme === 'dark') {
            pageDocument?.classList.remove('light');
            pageDocument?.classList.add('dark');
        }
    }, [theme]);

    return (
        <button
            className="toggle__theme"
            onClick={() => {
                setSystemPreference(false);
                setTheme((pS) => (pS === 'light' ? 'dark' : 'light'));
            }}
        >
            <span className={clsx(theme === 'light' && 'turn__OFF', theme === 'dark' && 'turn__ON')}></span>
        </button>
    );
};

export default ThemeToggle;
