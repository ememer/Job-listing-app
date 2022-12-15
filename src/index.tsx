import './index.css';
import 'the-new-css-reset/css/reset.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import EmployerFifthStepForm from './components/EmployerFifthStepForm';
import EmployerFirstStepForm from './components/EmployerFirstStepForm';
import EmployerFourthStepForm from './components/EmployerFourthStepForm';
import EmployerSecondStepForm from './components/EmployerSecondStepForm';
import EmployerSummaryStep from './components/EmployerSummaryStep';
import EmployerThirdStepForm from './components/EmployerThirdStepForm';
import ErrorPage from './components/Error';
import JobList from './components/JobList';
import EmployerPanel from './Routes/EmployerPanel';
import JobDetails from './Routes/JobDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <JobList /> },
            {
                path: 'job/:id',
                element: <JobDetails />,
            },
            {
                path: 'employer-panel',
                element: <EmployerPanel />,
                children: [
                    { path: 'step=1', element: <EmployerFirstStepForm /> },
                    { path: 'step=2', element: <EmployerSecondStepForm /> },
                    { path: 'step=3', element: <EmployerThirdStepForm /> },
                    { path: 'step=4', element: <EmployerFourthStepForm /> },
                    { path: 'step=5', element: <EmployerFifthStepForm /> },
                    { path: 'step=6', element: <EmployerSummaryStep /> },
                ],
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
