import React, { SetStateAction } from 'react';

export interface DefaultSetting {
    enableSystemTheme: boolean;
    switchTheme: 'light' | 'dark';
}

export interface Props {
    children: React.ReactNode;
}

export interface ThemeContextTypes {
    userSettings: DefaultSetting;
    setUserSettings: React.Dispatch<SetStateAction<DefaultSetting>>;
}
