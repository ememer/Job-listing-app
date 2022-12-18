import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import './ThemeToggle.css';
// It should't be implemented like that.
//TO DO Create better with theme provider.

const ThemeToggle = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const HTML = document.querySelector('html');
        if (theme === 'light') {
            HTML?.classList.remove('dark');
            HTML?.classList.add('light');
        }
        if (theme === 'dark') {
            HTML?.classList.remove('light');
            HTML?.classList.add('dark');
        }
    }, [theme]);

    return (
        <button className="toggle__theme" onClick={() => setTheme((pS) => (pS === 'light' ? 'dark' : 'light'))}>
            <span className={clsx(theme === 'light' && 'turn__OFF', theme === 'dark' && 'turn__ON')}></span>
        </button>
    );
};

export default ThemeToggle;
