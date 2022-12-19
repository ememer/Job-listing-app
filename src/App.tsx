import React from 'react';

import { Outlet, ScrollRestoration } from 'react-router-dom';

import Layout from './components/Layout';
import FormProvider from './Context/FormProvider';
import JobListProvider from './Context/JobsListProvider';
import ThemeProvider from './Context/ThemeProvider';

function App() {
    return (
        <div className="App">
            <ScrollRestoration />
            <ThemeProvider>
                <JobListProvider>
                    <FormProvider>
                        <Layout>
                            <Outlet />
                        </Layout>
                    </FormProvider>
                </JobListProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
