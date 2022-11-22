import React from "react";
import "./App.css";
import JobList from "./components/JobList";
import jobs from "./utils/data.json";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <JobList jobs={jobs} />
      </Layout>
    </div>
  );
}

export default App;
