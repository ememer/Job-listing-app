import React from 'react';

import { Outlet, ScrollRestoration } from 'react-router-dom';

import Layout from './components/Layout';
import FormProvider from './Context/FormProvider';
import JobListProvider from './Context/JobsListProvider';

function App() {
    return (
        <div className="App">
            <ScrollRestoration />
            <JobListProvider>
                <FormProvider>
                    <Layout>
                        <Outlet />
                    </Layout>
                </FormProvider>
            </JobListProvider>
        </div>
    );
}

export default App;
