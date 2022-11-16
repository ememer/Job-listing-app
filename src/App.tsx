import React from "react";
import "./App.css";
import JobList from "./components/JobList";
import jobs from "./utils/data.json";
import {Route,Routes} from "react-router-dom"
import JobDetails from "./Template/JobDetails";

function App() {
  return (
    <div className="App">
      <header></header>
      <main className="container">
        <Routes>
          <Route path="/" element={<JobList jobs={jobs}/>}/>
          <Route path="/job/:id" element={<JobDetails/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
