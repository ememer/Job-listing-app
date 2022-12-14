import React, { SetStateAction, useEffect, useState } from 'react';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';

import './AppSettings.css';

interface DefaultSetting {
    enableSystemTheme: boolean;
    switchTheme: 'light' | 'dark';
}

const DEFAULT_SETTING: DefaultSetting = {
    enableSystemTheme: false,
    switchTheme: 'light',
};

interface Props {
    onClose: React.Dispatch<SetStateAction<boolean>>;
}

const AppSettings = ({ onClose }: Props) => {
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

    return (
        <div
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if ((e.target as HTMLDivElement).id === 'close__settings') {
                    onClose(false);
                }
            }}
            id="close__settings"
            className="settings"
        >
            <div className="settings__container">
                <button onClick={() => onClose(false)} className="settings__close">
                    <FontAwesomeIcon className="settings__close__icon" icon={faCircleXmark} />
                </button>
                <div className="settings__switches">
                    <div>
                        <div>
                            <span>Switch theme Light / Dark</span>
                            <button
                                onClick={() => {
                                    if (!userSettings.enableSystemTheme) {
                                        setUserSettings((pS) => ({
                                            ...pS,
                                            switchTheme: pS.switchTheme === 'light' ? 'dark' : 'light',
                                        }));
                                    }
                                }}
                            >
                                <span
                                    className={clsx(userSettings.switchTheme === 'dark' ? 'turn__ON' : 'turn__OFF')}
                                />
                            </button>
                        </div>
                        <div>
                            <span>Use system theme settings</span>
                            <button
                                onClick={() =>
                                    setUserSettings((pS) => ({
                                        ...pS,
                                        enableSystemTheme: !userSettings.enableSystemTheme,
                                    }))
                                }
                            >
                                <span className={clsx(userSettings.enableSystemTheme ? 'turn__ON' : 'turn__OFF')} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSettings;
