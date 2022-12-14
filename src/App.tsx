import React from 'react';
import './App.css';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import JobListProvider from './Context/JobsListProvider';
import FormProvider from './Context/FormProvider';

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
