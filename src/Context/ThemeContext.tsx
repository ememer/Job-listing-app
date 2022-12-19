import { createContext } from 'react';

import { ThemeContextTypes } from '../@types/ThemeTypes';

export const ThemeContext = createContext<ThemeContextTypes | null>(null);
