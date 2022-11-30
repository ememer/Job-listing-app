import React from "react";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Layout from "./components/Layout";
import JobListProvider from "./Context/JobsListProvider";

function App() {
  return (
    <div className="App">
      <ScrollRestoration />
      <JobListProvider>
        <Layout>
          <Outlet />
        </Layout>
      </JobListProvider>
    </div>
  );
}

export default App;
