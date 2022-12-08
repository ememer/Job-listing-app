import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'the-new-css-reset/css/reset.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import JobDetails from './Routes/JobDetails';
import JobList from './components/JobList';
import ErrorPage from './components/Error';
import EmployerPanel from './Routes/EmployerPanel';
import EmployerFirstStepForm from './components/EmployerFirstStepForm';
import EmployerSecondStepForm from './components/EmployerSecondStepForm';
import EmployerFourthStepForm from './components/EmployerFourthStepForm';
import EmployerFifthStepForm from './components/EmployerFifthStepForm';
import EmployerThirdStepForm from './components/EmployerThirdStepForm';

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
