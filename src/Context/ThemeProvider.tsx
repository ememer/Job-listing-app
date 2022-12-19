import React, { useEffect, useState } from 'react';

import { DefaultSetting, Props } from '../@types/ThemeTypes';

import { ThemeContext } from './ThemeContext';

const DEFAULT_SETTING: DefaultSetting = {
    enableSystemTheme: false,
    switchTheme: 'light',
};

const ThemeProvider = ({ children }: Props) => {
    const [userSettings, setUserSettings] = useState<DefaultSetting>(
        JSON.parse(localStorage.getItem('UserSettings') as string) ?? DEFAULT_SETTING,
    );

    useEffect(() => {
        const systemMedia = window.matchMedia('(prefers-color-scheme : dark)');
        const systemThemePreference = (theme: { matches: boolean }) => {
            setUserSettings((pS) => ({
                ...pS,
                switchTheme: theme.matches ? 'dark' : 'light',
            }));
        };

        if (userSettings.enableSystemTheme) {
            systemMedia.addEventListener('change', () => systemThemePreference(systemMedia));
            systemThemePreference(systemMedia);
        }

        const pageDocument = document.querySelector('html');
        if (userSettings.switchTheme === 'light') {
            pageDocument?.classList.remove('dark');
            pageDocument?.classList.add('light');
        }
        if (userSettings.switchTheme === 'dark') {
            pageDocument?.classList.remove('light');
            pageDocument?.classList.add('dark');
        }
        localStorage.setItem('UserSettings', JSON.stringify(userSettings));
        return removeEventListener('change', () => systemThemePreference);
    }, [userSettings.switchTheme, userSettings.enableSystemTheme]);

    return <ThemeContext.Provider value={{ userSettings, setUserSettings }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
