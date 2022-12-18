import { useEffect, useState } from 'react';

interface USER_SETTINGS {
    enableSystemTheme: true | false;
    closeOnStart: true | false;
}

const DEFAULT_USER_SETTINGS = {
    enableSystemTheme: false,
    closeOnStart: false,
};

export const useSettings = () => {
    const [userSettings, setUserSettings] = useState(
        JSON.parse(localStorage.getItem('userSettings')!) ?? (DEFAULT_USER_SETTINGS as USER_SETTINGS),
    );

    useEffect(() => {
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
    }, [useSettings]);

    return {
        userSettings,
        setUserSettings,
    };
};
