import React from 'react';

import { faEye, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { useSettings } from '../hook/useSettings';

import './AppSettings.css';

interface USER_SETTINGS {
    enableSystemTheme: true | false;
    closeOnStart: true | false;
}

const AppSettings = () => {
    const { userSettings, setUserSettings } = useSettings();
    return (
        <div className="settings">
            <div className="settings__container">
                <div className="setting__links">
                    <div>
                        <Link to="/">
                            <FontAwesomeIcon icon={faEye} />
                        </Link>
                        <span>Show offers</span>
                    </div>
                    <div>
                        <Link to="/employer-panel/step=1">
                            <FontAwesomeIcon icon={faFileCirclePlus} />
                        </Link>
                        <span>Create offer</span>
                    </div>
                </div>
                <div className="settings__switches">
                    <div>
                        <div>
                            <span>Use system theme settings</span>
                            <button
                                onClick={() =>
                                    setUserSettings((pS: USER_SETTINGS) => ({
                                        ...pS,
                                        enableSystemTheme: !pS.enableSystemTheme,
                                    }))
                                }
                            >
                                <span className={clsx(userSettings.enableSystemTheme ? 'turn__ON' : 'turn__OFF')} />
                            </button>
                        </div>
                        <div>
                            <span>Disable settings window on start</span>

                            <button
                                onClick={() =>
                                    setUserSettings((pS: USER_SETTINGS) => ({
                                        ...pS,
                                        closeOnStart: !pS.closeOnStart,
                                    }))
                                }
                            >
                                <span className={clsx(userSettings.closeOnStart ? 'turn__ON' : 'turn__OFF')} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSettings;
