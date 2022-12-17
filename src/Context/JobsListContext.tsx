import { createContext } from 'react';

import { JobListContextProvider } from '../@types/JobListTypes';

export const JobListContext = createContext<JobListContextProvider | []>([]);
